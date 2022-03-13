import React from "react";
import SignUpForm from "./signUpForm";
import UserInfo from "./userInfo";
import axios from "axios";
export default class MainComponent extends React.Component{
    state={
        userData:{email:'',password:''},
        signUp:false,
        message:'',
        loginStatus:false
    }
    handleChange=(e)=>{
        const {currentTarget:input}=e;
        let s1 ={...this.state};
        s1.userData[input.name] = input.value;
        this.setState(s1);
    }
    handleView=(value)=>{
        this.setState({signUp:value})
    }


    Login=async()=>{
        try{
        let response = await axios.post('http://localhost:3100/getUser',this.state.userData);
        let {data}=response;
        // console.log(data);
        localStorage.setItem("name",data.name);
        this.setState({message:'',loginStatus:true})
        }catch(err){

            this.setState({message:err.response.data})
                // console.log(err.response.data)
        }
    }
    signUp=()=>{
        this.setState({signUp:true})
    }
    render(){
        const {signUp, message,loginStatus} = this.state;
        // let name = localStorage.getItem("name");
        return <React.Fragment>
            <div className="container m-auto">
                
                {loginStatus?<UserInfo/>:!signUp?
              <div className="form mt-4 pt-4">
                  <h2 className="text-center m-auto">Login Page</h2>
                  <small className="text-danger text-center">{message}</small>
                  <div className="form-group">
                      <label >Email</label>
                      <input type="email" name="email" placeholder="Enter your email" className="form-control" onChange={this.handleChange}/>
                  </div>
                  <div className="form-group">
                      <label >Password</label>
                      <input type="input" name="password" placeholder="Enter your password" className="form-control" onChange={this.handleChange}/>
                  </div>
                  <div className="button text-center pt-4">
                      <button className="btn btn-primary btn-sm" onClick={()=>this.Login()}>Login</button>
                  </div>
                  <p className="pt-3">Don't have account ? please <span className="text-info"><b onClick={()=>this.signUp()}>SignUp</b></span>here.</p>
                  </div>  :
                  <SignUpForm  afterSignUp={this.handleView}/>
                }
            </div>
        </React.Fragment>
    }
}