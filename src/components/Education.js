import React, { Component } from "react";

class Education extends Component{
    constructor(props){
        super(props);
        this.state={
            school_name:"",
            course:"",
            from:"",
            to:"",
        };
    }
    onClickAdd(){
        
    }
    onClickDel(){
        
    }

    render(){
        return(
            <section>
            <h2 className='text-center'>Education Information</h2>
            <form id='personal-info'>
                <div id='personal-1'>
                    <label for='school_name'>School name: </label>
                    <br/>
                    <input type='text' id='school_name' value={this.school_name} onChange={(e)=>{this.props.changeHandler(e)}}/>
                </div>
                <div id='personal-2'>
                    <label for='course'>Course: </label>
                    <br/>
                    <input type='text' id='course' value={this.course} onChange={(e)=>{this.props.changeHandler(e)}}/>
                </div>
                <div id='personal-3'>
                    <label for='from'>From: </label>
                    <br/>
                    <input type='date' id='from' value={this.from} onChange={(e)=>{this.props.changeHandler(e)}}/>
                </div>
                <div id='personal-4'>
                    <label for='to'>To: </label>
                    <br/>
                    <input type='date' id='to' value={this.to} onChange={(e)=>{this.props.changeHandler(e)}}/>
                </div>
            </form>
            {/* <div id='btns'>
                    <button type='button' onClick={this.onClickAdd}>Add</button>
                    <button type='button' onClick={this.onClickDel}>Delete</button>
            </div> */}
            </section>
        )
    }
}
export default Education