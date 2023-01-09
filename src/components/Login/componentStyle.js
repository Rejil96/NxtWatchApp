import styled from 'styled-components'

export const LoginContainer = styled.div`
  width: 100vi;
  min-height: 100vh;
  background-color: ${props => (props.bgColor ? '#181818' : ' #f9f9f9')};
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
`

export const LoginCard = styled.form`
  width: 90vw;
  padding: 60px 20px;
  background-color: ${props => (props.bgColor ? '#0f0f0f' : '#f8fafc')};
  display: flex;
  flex-direction: column;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  align-items: center;
  border-radius: 5px;

  @media screen and (min-width: 576px) {
    width: 50vw;
  }

  @media screen and (min-width: 768px) {
    width: 50vw;
    padding: 40px;
  }

  @media screen and (min-width: 1200px) {
    width: 34vw;
    padding: 40px;
  }
`
export const CompanyLogo = styled.img`
  width: 40%;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`

export const InputControlWrapper = styled.div`
  width: 100%;
  margin-bottom: 26px;
  display: flex;
  flex-direction: column;
`

export const InputLabel = styled.label`
  color: ${props => (props.textColor ? '#f8fafc' : '#475569')};
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 10px;
`
export const InputControl = styled.input`
  outline: none;
  width: 100%;
  height: 46px;
  border: none;
  border: 1px solid ${props => (props.bgColor ? '#475569' : '#cccccc')};
  color: ${props => (props.bgColor ? '#f1f1f1' : '#475569')};
  font-size: 16px;
  padding-left: 15px;
  border-radius: 5px;
  background-color: ${props => (props.bgColor ? '#0f0f0f' : '#f8fafc')};
`
export const PasswordVisibilityControl = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;
`

export const PasswordCheckBox = styled.input`
  width: 18px;
  height: 18px;
  margin-right: 10px;
`
export const PasswordControlLabel = styled.label`
  font-size: 16px;
  font-weight: 500;
  color: ${props => (props.textColor ? '#f8fafc' : '#1e293b')};
`
export const LoginButton = styled.button`
  width: 100%;
  outline: none;
  height: 46px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  background-color: #3b82f6;
  color: #ffffff;
  font-weight: 600;
  margin-top: 20px;
`
export const ErrorMessage = styled.p`
  color: #ff0000;
  align-self: flex-start;
  margin: 5px 0px;
  font-size: 16px;
`
