import styled from 'styled-components'

export const HeaderContainer = styled.div`
  width: 100%;
  height: 80px;
  padding: 0px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => (props.bgColor ? '#212121' : '#f9f9f9')};
  box-sizing: border-box;
`

export const HeaderLogo = styled.img`
  width: 120px;
`
export const NavBar = styled.ul`
  list-style: none;
  padding-left: 0px;
  display: flex;
  align-items: center;
`

export const NavItem = styled.li`
  padding-left: 20px;
  cursor: pointer;
  font-size: 24px;
  color: ${props => (props.textColor ? '#f9f9f9' : '#0f0f0f')};
  display: flex;
  align-items: center;
`
export const HamburgButton = styled.button`
    width: 100%;
    padding:0px;,
    margin: 0px;
     color: ${props => (props.textColor ? '#f9f9f9' : '#0f0f0f')};
    cursor: pointer;
    background-color: transparent;
    border: none;
    outline:none;
    font-size: 24px;
    
    @media screen and (min-width: 768px){
        display: none;
    }
`

export const PopupContents = styled.div`
  background-color: ${props => (props.bgColor ? '#181818' : '#f9f9f9')};
  display: flex;
  flex-direction: column;
  height: 100vh;
`
export const PopupCloseButton = styled(HamburgButton)`
  align-self: flex-end;
  width: 50px;
  height: 80px;
  color: ${props => (props.textColor ? '#f9f9f9' : '#0f0f0f')};
  margin-right: 20px;
  margin-top: 20px;
  font-size: 38px;
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
export const ThemeButton = styled.button`
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  font-size: 24px;
  margin: 0px;
  padding: 0px;
  color: ${props => (props.textColor ? '#f9f9f9' : '#0f0f0f')};
`
export const LogoutButton = styled(ThemeButton)`
  @media screen and (min-width: 768px) {
    width: 80px;
    height: 28px;
    border-radius: 2px;
    background-color: transparent;
    border: 1px solid ${props => (props.textColor ? '#f9f9f9' : '#3b82f6')};
    color: ${props => (props.textColor ? '#f9f9f9' : '#3b82f6')};
    cursor: pointer;
    font-size: 14px;
    font-family: 'Roboto';
    font-weight: 500;
    margin-left: 10px;
    margin-bottom: 5px;
  }
`
export const ProfileButton = styled(ThemeButton)`
  margin-left: 10px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const ProfileImg = styled.img`
  width: 32px;
  height: 32px;
  margin: 0px;
  padding: 0px;
`

export const CancelButton = styled.button`
  background-color: transparent;
  border: 1px solid #909090;
  width: 80px;
  cursor: pointer;
  height: 35px;
  
  display: flex;
  justify-content: center;
  align-items: center;
  color: #909090;
  padding: 0px;
  margin: 0px;
  font-size: 14px;
  font-weight: 600;
  font-family: 'Roboto',
  cursor: pointer;
  outline: none;
`
export const LogoutPopupContent = styled.div`
  border-radius: 10px;
  padding: 30px 20px;
  background-color: ${props => (props.bgColor ? '#212121' : '#f9f9f9')};
  @media screen and (min-width: 768px) {
    padding: 40px;
  }
`

export const PopupQuestion = styled.p`
  color: ${props => (props.textColor ? '#f9f9f9' : '#00306e')};
  margin-bottom: 30px;
  font-weight: 500;
  font-size: 14px;
  font-family: 'Roboto';

  @media screen and (min-width: 768px) {
    padding: 40px;
    font-size: 16px;
    margin-bottom: 40px;
  }
`
export const PopupLogoutButton = styled(CancelButton)`
  background-color: #3b82f6;
  border: 1px solid #3b82f6;
  color: #f9f9f9;
  margin-left: 20px;
`

export const PopupButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`
export const LogoutIconWrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const LogoutTextWrapper = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`
