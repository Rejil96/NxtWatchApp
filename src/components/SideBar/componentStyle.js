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

export const MobileNavMenuContainer = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 0px;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
    padding: 0px;
    margin: 0px;
  }
`

export const MobileNavItem = styled.li`
  color: ${props => (props.activeTab ? '#ff0000' : '#909090')};
  background-color: ${props => {
    if (props.activeTab) {
      if (props.bgColor) {
        return '#313131'
      }
      return '#e2e8f0'
    }
    return 'transparent'
  }};

  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
    padding-left: 20px;
  }
`

export const MobileNavButton = styled.div`
  width: 200px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 24px;
  text-decoration: none;
`

export const MobileNavItemText = styled.p`
  color: ${props => {
    if (props.activeTab) {
      if (props.textColor) {
        return '#f8fafc'
      }
      return '#181818'
    }
    return props.textColor ? '#ebebeb' : '#231f20'
  }};
  font-weight: ${props => (props.activeTab ? 600 : 400)};
  text-decoration: none;
  font-family: 'Roboto';
  font-size: 20px;
  margin-left: 20px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`
