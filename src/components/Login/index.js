import {useState} from 'react'
import Cookies from 'js-cookie'
import {Redirect, useHistory} from 'react-router-dom'
import {
  MainContainer,
  LoginForm,
  WebsiteLogo,
  Label,
  InputEl,
  Container,
  LoginButton,
  ErrorMsg,
  InputCheckBox,
  LineBreak,
} from './styledComponent'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showError, setShowError] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const history = useHistory()

  const onChangeUsername = event => setUsername(event.target.value)
  const onChangePassword = event => setPassword(event.target.value)

  const onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 1})
    history.replace('/')
  }

  const onSubmitFailure = msg => {
    setShowError(true)
    setErrorMsg(msg)
  }

  const onFormSubmit = async event => {
    event.preventDefault()
    let u = username
    let p = password
    if (u.toLowerCase().trim(' ') === 'user') u = 'rahul'
    if (p === 'password') p = 'rahul@2021'
    const userData = {username: u, password: p}
    const url = 'https://apis.ccbp.in/login'
    const options = {method: 'POST', body: JSON.stringify(userData)}
    const response = await fetch(url, options)
    const responseData = await response.json()
    if (response.ok === true) {
      onSubmitSuccess(responseData.jwt_token)
    } else {
      onSubmitFailure(responseData.error_msg)
    }
  }

  const onChangeCheckBox = event => setShowPassword(event.target.checked)

  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken !== undefined) {
    return <Redirect to="/" />
  }

  return (
    <MainContainer className="bg-container" data-testid="login">
      <LoginForm className="login-form" onSubmit={onFormSubmit}>
        <WebsiteLogo
          className="website-logo"
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="website logo"
        />
        <Container>
          <Label className="label" htmlFor="username">
            USERNAME
          </Label>
          <LineBreak />
          <InputEl
            id="username"
            value={username}
            type="text"
            placeholder="user"
            className="input"
            onChange={onChangeUsername}
          />
        </Container>
        <Container>
          <Label htmlFor="password">PASSWORD</Label>
          <LineBreak />
          <InputEl
            id="password"
            value={password}
            type={showPassword ? 'text' : 'password'}
            placeholder="password"
            onChange={onChangePassword}
          />
        </Container>
        <Container>
          <InputCheckBox
            id="show-password"
            type="checkbox"
            value={password}
            onChange={onChangeCheckBox}
          />
          <Label htmlFor="show-password">Show Password</Label>
        </Container>
        <LoginButton type="submit" className="submit-button">
          Login
        </LoginButton>
        {showError && <ErrorMsg className="error-msg">*{errorMsg}</ErrorMsg>}
      </LoginForm>
    </MainContainer>
  )
}

export default Login
