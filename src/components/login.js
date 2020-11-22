import React from 'react';
import '../App.css';
import axios from 'axios';
import dotsvg from '../images/dot.svg';
import roundsvg from '../images/round.svg';
class Login extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        login: "",
        pwd:"",
        errorMessage: "",
        status: "",
        isLogedIn: false,
        type: false
      };
    }

  handleSubmit = (evt) => {
    evt.preventDefault();
    const article = {
      "login":this.state.login,
      "pass":this.state.pwd
      };
    axios.post('http://134.209.202.19/api/login', article)
        .then(response => {
            console.log(response.status);
          if(response.status === 200){
            this.setState({status: response.data.user.status});
            this.props.history.push('navbar', {status: this.state.status})
          }
          else if(response.status === 401){
            alert("There is not this user");
          }
        })
        .catch(error => {
          this.setState({ errorMessage: error.status });
          alert("There is not this user");
      });
}
passwordType = ()=>{
    if(this.state.type){
        this.setState({type: false})
    }
    else{
        this.setState({type: true})
    }
}

render() {
  return (
        <div>
          <div className="form-index">
          <img src={roundsvg} alt="round logo" className="round2-image"/> 
          <img src={roundsvg} alt="round logo" className="round3-image"/> 
              <div className="form-div">
                <form onSubmit={this.handleSubmit}>
                <img src={roundsvg} alt="round logo" className="round-image"/> 
                <img src={dotsvg} alt="dot logo" className="dot-image"/>
                <img src={dotsvg} alt="dot logo" className="dot1-image"/>
                <img src={roundsvg} alt="round logo" className="round1-image"/>
                <h1 className="title-index" >Hello, <br></br> Welcome Back</h1>
                <label htmlFor="email">Name</label><br></br>
                <input className="input-index" type="text" id="login" name="email" onChange={(e) => this.setState({login: e.target.value})} /><br></br>
                <label htmlFor="pwd">Password</label><br></br>
                <input className="input-index" type={this.state.type? "text":"password"} id="pwd" name="pwd" minLength="4" 
                onChange={(e) => this.setState({pwd: e.target.value})} 

                /><span onClick={this.passwordType} className="show-hide">SHOW</span> <br></br>
                <p className="p-text">Forget Password ?</p>
                <input type="submit" className="input-submit" value="LOGIN"/>
                <div className="square1"></div>
                <div className="square2"></div>
                </form>
              </div>
              
          </div> 
      </div>
  );
}
}

export default Login;
