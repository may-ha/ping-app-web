import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";

import  './mystyle.css'; 



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
//   handleEmailChange: function(e) {
//     this.setState({email: e.target.value});
//  },
//  handlePasswordChange: function(e) {
//     this.setState({password: e.target.value});
//  },
//  render : function() {
//        return (
//          <form>
//            <input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange} />
//            <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange}/>
//            <button type="button" onClick={this.handleLogin}>Login</button>
//          </form>);
//  },
//  handleLogin: function() {
//      console.log("EMail: " + this.state.email);
//      console.log("Password: " + this.state.password);
//  }
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
)
