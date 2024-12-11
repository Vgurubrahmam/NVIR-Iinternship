import { Component } from 'react';
import Cookies from 'js-cookie';
import { data, Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import "./index.css"
class Validationpage extends Component {
  state = {
    email: '',
    username: '',
    password: '',
    selectedRole: '',
    signuphandle: false,
    showSubmitError: false,
    errorMsg: '',
    successMsg: '',
  };

  handleSignUp = () => {
    this.setState(prevState => ({
      signuphandle: !prevState.signuphandle,
      showSubmitError: false,
      errorMsg: '',
      successMsg: '',
    }));
  };

  handleRoleChange = event => {
    this.setState({ selectedRole: event.target.value });
  };

  onChangeEmail = event => {
    this.setState({ email: event.target.value });
  };

  onChangePassword = event => {
    this.setState({ password: event.target.value });
  };

  onChangeSignupUsername = event => {
    this.setState({ username: event.target.value });
  };

  onSubmitSuccess = (jwtToken,message) => {
    
    Cookies.set('jwt_token', jwtToken, { expires: 30 });
    toast.success(message)
  return <Navigate to="/"/>
  };

//   onSubmitFailure = errorMsg => {
//     this.setState({ showSubmitError: true, errorMsg });
//   };

  submitSignupForm = async event => {
    event.preventDefault();
    const { email, username, password } = this.state;
    const userDetails = { email, username, password };
    const url = 'http://localhost:8000/signup';
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userDetails),
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      if (response.ok) {
        // this.setState({ successMsg: data.message, showSubmitError: false });
        toast.success(data.message)
      } else {
        // this.onSubmitFailure(data.message);
        toast.error(data.message)
      }
    } catch (error) {
      toast.error('Server error. Please try again later.');
    }
  };

  submitLoginForm = async (event) => {
    event.preventDefault();
    const { email, password, selectedRole, username } = this.state;
  
    let url = '';
    const userDetails = { email, password, username };
  
    if (selectedRole === 'User') {
      url = 'http://localhost:8000/Userlogin';
    } else if (selectedRole === 'Businessman') {
      url = 'http://localhost:8000/businessmanLogin';
    }
  
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userDetails),
    };
  
    try {
      const response = await fetch(url, options);
  
      if (!response.ok) {
        const errorData = await response.json();
        toast.error(errorData.message || 'Login failed');
      }
  
      const data = await response.json();
      
      this.onSubmitSuccess(data.token);
      toast.success(data.message);
  
    } catch (error) {
      toast.error(error.message || 'Something went wrong');
    }
  };
  
      

  renderPasswordField = () => {
    const { password } = this.state;
    return (
      <>
        <label className="input-label" htmlFor="password">PASSWORD</label>
        <input
          type="password"
          id="password"
          className="password-input-field"
          value={password}
          onChange={this.onChangePassword}
          placeholder="Password"
          required
        />
      </>
    );
  };

  renderEmailField = () => {
    const { email } = this.state;
    return (
      <>
        <label className="input-label" htmlFor="email">EMAIL</label>
        <input
          type="email"
          id="email"
          className="email-input-field"
          value={email}
          onChange={this.onChangeEmail}
          placeholder="Email"
          required
        />
      </>
    );
  };

  renderSignupUsernameField = () => {
    const { username } = this.state;
    return (
      <>
        <label style={{textAlign:"start"}} htmlFor="username">USERNAME</label>
        <input
          type="text"
          id="username"
          className="email-input-field"
          value={username}
          onChange={this.onChangeSignupUsername}
          placeholder="Username"
          required
        />
      </>
    );
  };

  render() {
    const { selectedRole, signuphandle, showSubmitError, errorMsg, successMsg } = this.state;
    const jwtToken = Cookies.get('jwt_token');

    if (jwtToken !== undefined) {
      return <Navigate to="/" />;
    }

    return (
      <div className="d-flex flex-column">
        <div className="d-flex justify-content-between  p-5" >
          <img src="src/assets/blue-logo.jpg" className="logo p-3 pt-0" alt="logo" />
          <h1 className='p-3 pt-0'>Services</h1>
        </div>
        <div className="d-flex justify-content-around align-items-center">
          <div style={{padding:"100px",paddingLeft:"40px"}}>
            <h1 className='fw-bold fs-3'>NEW USER</h1>
            <hr style={{borderWidth:"5px",width:"70px"}}/>
            <button className="btn btn-primary" onClick={this.handleSignUp}>Sign up</button>
            {signuphandle && (
              <form className="d-flex flex-column shadow p-5" onSubmit={this.submitSignupForm}>
                {this.renderSignupUsernameField()}
                {this.renderEmailField()}
                {this.renderPasswordField()}
                <button type="submit" className="btn btn-primary mt-3">Sign Up</button>
                {showSubmitError && <p className="error-message">*{errorMsg}</p>}
                {successMsg && <p className="success-message">{successMsg}</p>}
              </form>
            )}
          </div>
          <div>
            <h1 className='fw-bold fs-3'>EXISTING USER</h1>
            <hr style={{borderWidth:"5px",width:"70px"}}/>

            <select className="form-select" onChange={this.handleRoleChange}>
              <option value="" disabled selected>Select Role</option>
              <option value="User">User</option>
              <option value="Businessman">Businessman</option>
            </select>
            {(selectedRole === 'User' || selectedRole === 'Businessman') && (
              <form className="p-5 gap-2 shadow d-flex flex-column " onSubmit={this.submitLoginForm}>
                {selectedRole === 'Businessman' && this.renderSignupUsernameField()}
                {this.renderEmailField()}
                {this.renderPasswordField()}
                <button type="submit" className=" btn btn-primary">Login</button>
                {showSubmitError && <p className="error-message">*{errorMsg}</p>}
              </form>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Validationpage;
