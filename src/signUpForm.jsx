import React from "react";
import axios from "axios";
export default class SignUpForm extends React.Component{
  state={
    signUpData:{name:"",email:"",password:""}
  }
handleChange=(e)=>{
  const {currentTarget:input}=e;
  let s1 ={...this.state};
  s1.signUpData[input.name]=input.value;
  this.setState(s1);
}
signUp= async()=>{
await axios.post('http://localhost:3100/postUser',this.state.signUpData);
this.props.afterSignUp(false)
}
  render(){
    const{name,email,password}=this.state.signUpData;

    return <div className="container">
      <div className="form mt-4">
      <h2 className="text-center m-auto">SignUp Page</h2>
      <div className="form-group">
        <label>Name</label>
        <input type="text" name="name" placeholder="Enter your name" className="form-control" onChange={this.handleChange}/>
      </div>
      <div className="form-group">
        <label>Email</label>
        <input type="email" name="email" placeholder="Enter your email" className="form-control" onChange={this.handleChange}/>
      </div>
      <div className="form-group">
        <label>Password</label>
        <input type="text" name="password" placeholder="Enter your password" className="form-control" onChange={this.handleChange}/>
      </div>
      <div className="button text-center pt-4">
              <button className="btn btn-primary btn-sm" onClick={()=>this.signUp()}>Sign Up</button>
       </div>
      </div>
    </div>
  }
}