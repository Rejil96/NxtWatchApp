import styled from 'styled-components'

export const SideBarContainer = styled.div`
  width: 20vw;
  min-height: 86vh;
  background-color: ${props => (props.bgColor ? '#212121' : '#f9f9f9')};
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const ContactUsContainer = styled.div`
  width: 100%;
`
export const ContactHeading = styled.p`
  color: #231f20;
  font-size: 20px;
  font-weight: 500;
  color: ${props => (props.textColor ? '#f8fafc' : '#181818')};
  padding-left: 20px;
`

export const SocialIconContainer = styled.div`
  width: 100%;
  display: flex;
  padding-left: 20px;
  margin: 20px 0px;
`

export const SocialIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`
export const ContactDescription = styled.p`
  padding-left: 20px;
  font-weight: 500;
  color: ${props => (props.textColor ? '#f8fafc' : '#181818')};
  line-height: 24px;
`
