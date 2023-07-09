import React, { Component } from "react";

class Personal extends Component{
    constructor(props){
        super(props);
        this.state={
            first_name:"",
            last_name:"",
            email:"",
            phone:"",
        };
    }
    
    render(){
        return(
            <section>
             <h2 className='text-center'>Personal Information</h2>
                <form id='personal-info'> 
                    <div id='personal-1'>
                        <label htmlFor='first_name'>First name: </label>
                        <br/>
                        <input type='text' id='first_name' value={this.first_name} onChange={(e)=>{this.props.changeHandler(e)}}/>
                    </div>
                    <div id='personal-2'>
                        <label htmlFor='last_name'>Last name: </label>
                        <br/>
                        <input type='text' id='last_name' value={this.last_name} onChange={(e)=>{this.props.changeHandler(e)}}/>
                    </div>
                    <div id='personal-3'>
                        <label htmlFor='email'>Email: </label>
                        <br/>
                        <input type='email' id='email' value={this.email} onChange={(e)=>{this.props.changeHandler(e)}}/>
                    </div>
                    <div id='personal-4'>
                        <label htmlFor='phone'>Phone no: </label>
                        <br/>
                        <input type='tel' id='phone' value={this.phone} onChange={(e)=>{this.props.changeHandler(e)}}/>
                    </div>
                </form> 
            </section>
        )
    }
}
export default Personal