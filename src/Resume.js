import React, { Component } from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';


class Resume extends Component{

    constructor(props){
        super(props);
        this.printRef = React.createRef();
    }

    handleDownloadPdf = async() => {
        const element = this.printRef.current;
        const canvas = await html2canvas(element);
        const data = canvas.toDataURL('image/png');
    
        const pdf = new jsPDF();
        const imgProperties = pdf.getImageProperties(data);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight =
          (imgProperties.height * pdfWidth) / imgProperties.width;
    
        pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('print.pdf');
      };
    render(){
        return(
            <>
            <div ref={this.printRef} className="App">
                <h1 style={{marginBottom:20}}>Personal Information</h1>
                <div>
                <span>First name:</span>
                <span>{this.props.first_name}</span>
                </div>
                <div>
                <span>Last name:</span>
                <span>{this.props.last_name}</span>
                </div>
                <div>
                <span>Email:</span>
                <span>{this.props.email}</span>
                </div>
                <div>
                <span>Phone:</span>
                <span>{this.props.phone}</span>
                </div>

                <h1 style={{marginBottom:20}}>Education information</h1>
                <div>
                <span>School name:</span>
                <span>{this.props.school_name}</span>
                </div>
                <div>
                <span>Course:</span>
                <span>{this.props.course}</span>
                </div>
                <div>
                <span>from:</span>
                <span>{this.props.from}</span>
                </div>
                <div>
                <span>to:</span>
                <span>{this.props.to}</span>
                </div>

                <h1 style={{marginBottom:20}}>Experience</h1>
                <div>
                <span>Company name:</span>
                <span>{this.props.school_name}</span>
                </div>
                <div>
                <span>Title at company:</span>
                <span>{this.props.title_at_company}</span>
                </div>
                <div>
                <span>Work from:</span>
                <span>{this.props.work_from}</span>
                </div>
                <div>
                <span>Work to:</span>
                <span>{this.props.work_to}</span>
                </div>
            </div>
            <div id='btns'>
                <button type='button' onClick={this.handleDownloadPdf}>Save as PDF</button>
            </div>
        </>
        )
        
    }
}
export default Resume;