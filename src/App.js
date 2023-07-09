import React, { Component } from 'react';
import Personal from './components/Personal.js'
import Education from './components/Education.js'
import Experience from './components/Experience.js'
import Resume from './Resume.js';
import './styles.css';


class App extends Component {

  constructor(props) {
    super(props)
    this.state={
      submitted:false,
      formValues:{},
    };
  }

  handleSubmit=(event)=>{
    this.setState({
      submitted:true,
    })
    console.log(this.state.submitted)
    event.preventDefault();
  }

  changeHandler=(event)=>{
    this.setState({
        formValues:{...this.state.formValues,[event.target.id]:event.target.value}
    });
  }


  render(){
    if(this.state.submitted===true){
      const {first_name,last_name,email,phone,
        school_name,course,from,to,
        company_name,title_at_company,work_from,work_to} = this.state.formValues;
        const {submitted} = this.state.submitted;
      return(
        <Resume 
        first_name={first_name}
        last_name={last_name}
        email={email}
        phone={phone}
        school_name={school_name}
        course={course}
        from={from}
        to={to}
        company_name={company_name}
        title_at_company={title_at_company}
        work_from={work_from}
        work_to={work_to}
        submitted={submitted}
        />
      )
    }
    else{
    return (
        <div className="App">
            <h1 className='text-center'>CV Builder</h1>
            <Personal changeHandler={this.changeHandler}/>
            <Education changeHandler={this.changeHandler}/>
            <Experience changeHandler={this.changeHandler} />
          <div id='btns'>
            <button type='submit' onClick={this.handleSubmit}>Submit</button>
          </div>
        </div>
      );
    }
  }
}

export default App;
