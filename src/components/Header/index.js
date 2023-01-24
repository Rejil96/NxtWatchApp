import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
// React Popup

import Popup from 'reactjs-popup'

// React Icons
import {FaMoon} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'
import {IoCloseSharp} from 'react-icons/io5'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'
import {BsBrightnessHigh} from 'react-icons/bs'

// Theme Context
import THemeContext from '../../context/ThemeContext'

// Component Styling
import {
  HeaderContainer,
  HeaderLogo,
  NavBar,
  NavItem,
  ThemeButton,
  HamburgButton,
  LogoutButton,
  ProfileButton,
  ProfileImg,
  PopupContents,
  PopupCloseButton,
  MobileNavMenuContainer,
  MobileNavItem,
  MobileNavItemText,
  MobileNavButton,
  CancelButton,
  LogoutPopupContent,
  PopupQuestion,
  PopupLogoutButton,
  PopupButtonWrapper,
  LogoutIconWrapper,
  LogoutTextWrapper,
} from './componentStyle'

const Header = props => {
  const onLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <THemeContext.Consumer>
      {value => {
        const {darkTheme, onUpdateTheme} = value
        const logo = darkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
        const themeIcon = darkTheme ? <BsBrightnessHigh /> : <FaMoon />

        const findActiveTab = path => {
          const {history} = props
          const currentPage = history.location.pathname
          if (currentPage === path) {
            return true
          }
          return false
        }

        const onChangeTheme = () => {
          onUpdateTheme()
        }

        const onLogoutPopup = () => (
          <Popup
            trigger={
              <LogoutButton type="button" textColor={darkTheme}>
                <LogoutIconWrapper>
                  <FiLogOut />
                </LogoutIconWrapper>
                <LogoutTextWrapper>Logout</LogoutTextWrapper>
              </LogoutButton>
            }
            modal
            contentStyle={{
              border: '0px solid transparent',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: '50vw',
              height: '30vh',
              backgroundColor: 'transparent',
            }}
            nested
          >
            {close => (
              <LogoutPopupContent className="modal" bgColor={darkTheme}>
                <PopupQuestion textColor={darkTheme}>
                  Are you sure, you want to logout
                </PopupQuestion>
                <PopupButtonWrapper>
                  <CancelButton
                    className="button"
                    onClick={() => {
                      close()
                    }}
                  >
                    Cancel
                  </CancelButton>
                  <PopupLogoutButton onClick={onLogout}>
                    Confirm
                  </PopupLogoutButton>
                </PopupButtonWrapper>
              </LogoutPopupContent>
            )}
          </Popup>
        )

        return (
          <HeaderContainer bgColor={darkTheme}>
            <Link to="/" style={{textDecoration: 'none', color: 'inherit'}}>
              <HeaderLogo src={logo} alt="website logo" />
            </Link>
            <NavBar>
              <NavItem>
                <ThemeButton
                  type="button"
                  onClick={onChangeTheme}
                  textColor={darkTheme}
                  data-testid="theme"
                >
                  {themeIcon}
                </ThemeButton>
              </NavItem>
              <NavItem>
                <Popup
                  modal
                  nested
                  contentStyle={{width: '100%', height: '100%'}}
                  trigger={
                    <HamburgButton type="button" textColor={darkTheme}>
                      <GiHamburgerMenu />
                    </HamburgButton>
                  }
                >
                  {close => (
                    <PopupContents bgColor={darkTheme}>
                      <PopupCloseButton onClick={close} textColor={darkTheme}>
                        <IoCloseSharp />
                      </PopupCloseButton>
                      <MobileNavMenuContainer>
                        <Link
                          to="/"
                          style={{textDecoration: 'none', color: 'inherit'}}
                        >
                          <MobileNavItem
                            activeTab={findActiveTab('/')}
                            bgColor={darkTheme}
                          >
                            <MobileNavButton>
                              <AiFillHome />
                              <MobileNavItemText
                                textColor={darkTheme}
                                activeTab={findActiveTab('/')}
                              >
                                Home
                              </MobileNavItemText>
                            </MobileNavButton>
                          </MobileNavItem>
                        </Link>
                        <Link
                          to="/trending"
                          style={{textDecoration: 'none', color: 'inherit'}}
                        >
                          <MobileNavItem
                            activeTab={findActiveTab('/trending')}
                            bgColor={darkTheme}
                          >
                            <MobileNavButton>
                              <HiFire />
                              <MobileNavItemText
                                textColor={darkTheme}
                                activeTab={findActiveTab('/trending')}
                              >
                                Trending
                              </MobileNavItemText>
                            </MobileNavButton>
                          </MobileNavItem>
                        </Link>
                        <Link
                          to="/gaming"
                          style={{textDecoration: 'none', color: 'inherit'}}
                        >
                          <MobileNavItem
                            activeTab={findActiveTab('/gaming')}
                            bgColor={darkTheme}
                          >
                            <MobileNavButton>
                              <SiYoutubegaming />
                              <MobileNavItemText
                                textColor={darkTheme}
                                activeTab={findActiveTab('/gaming')}
                              >
                                Gaming
                              </MobileNavItemText>
                            </MobileNavButton>
                          </MobileNavItem>
                        </Link>
                        <Link
                          to="/saved-videos"
                          style={{textDecoration: 'none', color: 'inherit'}}
                        >
                          <MobileNavItem
                            activeTab={findActiveTab('/saved-videos')}
                            bgColor={darkTheme}
                          >
                            <MobileNavButton>
                              <BiListPlus />
                              <MobileNavItemText
                                textColor={darkTheme}
                                activeTab={findActiveTab('/saved-videos')}
                              >
                                Saved Videos
                              </MobileNavItemText>
                            </MobileNavButton>
                          </MobileNavItem>
                        </Link>
                      </MobileNavMenuContainer>
                    </PopupContents>
                  )}
                </Popup>
                <ProfileButton>
                  <ProfileImg
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                  />
                </ProfileButton>
              </NavItem>
              <NavItem textColor={darkTheme}>{onLogoutPopup()}</NavItem>
            </NavBar>
          </HeaderContainer>
        )
      }}
    </THemeContext.Consumer>
  )
}

export default withRouter(Header)
