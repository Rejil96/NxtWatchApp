import {Component} from 'react'
import Cookies from 'js-cookie'
import ThemeContext from '../../context/ThemeContext'

import {
  LoginContainer,
  LoginCard,
  CompanyLogo,
  InputControlWrapper,
  InputLabel,
  InputControl,
  PasswordVisibilityControl,
  PasswordCheckBox,
  PasswordControlLabel,
  LoginButton,
  ErrorMessage,
} from './componentStyle'

class Login extends Component {
  state = {
    username: '',
    password: '',
    passwordVisible: false,
    showError: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onShowPassword = () => {
    this.setState(prevState => ({passwordVisible: !prevState.passwordVisible}))
  }

  onLogin = async () => {
    const {username, password} = this.state
    const userCredentials = {
      username,
      password,
    }
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userCredentials),
    }

    const apiCall = await fetch(url, options)
    const response = await apiCall.json()
    console.log(response)
    if (apiCall.ok) {
      Cookies.set('jwt_token', response.jwt_token)
    } else {
      this.setState({showError: true, errorMsg: response.error_msg})
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {
            username,
            password,
            passwordVisible,
            showError,
            errorMsg,
          } = this.state
          const {darkTheme} = value
          const passwordType = passwordVisible ? 'text' : 'password'
          const Logo = darkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          return (
            <LoginContainer bgColor={darkTheme}>
              <LoginCard bgColor={darkTheme}>
                <CompanyLogo src={Logo} alt="logo" />
                <InputControlWrapper textColor={darkTheme}>
                  <InputLabel htmlFor="username" textColor={darkTheme}>
                    USERNAME
                  </InputLabel>
                  <InputControl
                    type="text"
                    placeholder="Username"
                    id="username"
                    bgColor={darkTheme}
                    onChange={this.onChangeUsername}
                    value={username}
                  />
                </InputControlWrapper>
                <InputControlWrapper>
                  <InputLabel htmlFor="password" textColor={darkTheme}>
                    PASSWORD
                  </InputLabel>
                  <InputControl
                    type={passwordType}
                    placeholder="Password"
                    id="password"
                    bgColor={darkTheme}
                    onChange={this.onChangePassword}
                    value={password}
                  />
                </InputControlWrapper>
                <PasswordVisibilityControl>
                  <PasswordCheckBox
                    type="checkbox"
                    id="passwordVisibility"
                    onClick={this.onShowPassword}
                  />
                  <PasswordControlLabel
                    htmlFor="passwordVisibility"
                    textColor={darkTheme}
                  >
                    Show Password
                  </PasswordControlLabel>
                </PasswordVisibilityControl>

                <LoginButton type="button" onClick={this.onLogin}>
                  Login
                </LoginButton>
                {showError && <ErrorMessage>*{errorMsg}</ErrorMessage>}
              </LoginCard>
            </LoginContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Login
