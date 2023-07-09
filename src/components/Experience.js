import React, { Component } from "react";

class Experience extends Component{
    constructor(props){
        super(props);
        this.state={
            company_name:"",
            title_at_company:"",
            work_from:"",
            work_to:"",
        };
    }
    render(){
        return(
            <section>
            <h2 className='text-center'>Work Experience</h2>
            <form id='personal-info'>
                <div id='personal-1'>
                    <label for='company_name'>Company name: </label>
                    <br/>
                    <input type='text' id='company_name' value={this.company_name} onChange={(e)=>{this.props.changeHandler(e)}}/>
                </div>
                <div id='personal-2'>
                    <label for='title_at_company'>Title at company: </label>
                    <br/>
                    <input type='text' id='title_at_company' value={this.title_at_company} onChange={(e)=>{this.props.changeHandler(e)}}/>
                </div>
                <div id='personal-3'>
                    <label for='work_from'>Work from: </label>
                    <br/>
                    <input type='date' id='work_from' value={this.work_from} onChange={(e)=>{this.props.changeHandler(e)}}/>
                </div>
                <div id='personal-4'>
                    <label for='work_to'>Work to: </label>
                    <br/>
                    <input type='date' id='work_to' value={this.work_to} onChange={(e)=>{this.props.changeHandler(e)}}/>
                </div>
            </form>
            <div id='btns'>
                    <button type='button'>Add</button>
                    <button type='button'>Delete</button>
            </div>
            </section>
        )
    }
}
export default Experience