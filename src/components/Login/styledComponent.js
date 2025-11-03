import styled from 'styled-components'

export const MainContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 300px;
  padding: 15px;
  box-shadow: 0px 0px 5px 5px #e2d1d1;
`

export const WebsiteLogo = styled.img`
  height: 30px;
  align-self: center;
`

export const InputEl = styled.input`
  width: 100%;
  padding: 7px;
  margin-top: 5px;
`
export const UserInputContainer = styled.div``
export const Container = styled.div``
export const InputCheckBox = styled.input``
export const Label = styled.label`
  font-size: 13px;
`
export const LineBreak = styled.br``

export const LoginButton = styled.button`
  width: 100%;
  cursor: pointer;
  border: none;
  outline: none;
  background-color: #1e80ed;
  color: #ffffff;
  border-radius: 5px;
  padding: 5px;
`
export const ErrorMsg = styled.p`
  margin-top: 0px;
  font-size: 13px;
  color: red;
`
