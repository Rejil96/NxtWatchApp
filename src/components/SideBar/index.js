import {withRouter} from 'react-router-dom'

import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'

import {
  SideBarContainer,
  ContactUsContainer,
  ContactHeading,
  SocialIconContainer,
  SocialIcon,
  ContactDescription,
} from './componentStyle'
import ThemeContext from '../../context/ThemeContext'

import {
  MobileNavMenuContainer,
  MobileNavItem,
  MobileNavItemText,
  MobileNavButton,
  StyledLink,
} from '../Header/componentStyle'

const SideBar = props => (
  <ThemeContext.Consumer>
    {value => {
      const {darkTheme} = value
      const findActiveTab = path => {
        const {history} = props
        const currentPage = history.location.pathname
        if (currentPage === path) {
          return true
        }
        return false
      }

      return (
        <SideBarContainer bgColor={darkTheme}>
          <MobileNavMenuContainer>
            <StyledLink to="/">
              <MobileNavItem activeTab={findActiveTab('/')} bgColor={darkTheme}>
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
            </StyledLink>
            <StyledLink to="/trending">
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
            </StyledLink>
            <StyledLink to="/gaming">
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
            </StyledLink>
            <StyledLink to="/saved-videos">
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
            </StyledLink>
          </MobileNavMenuContainer>
          <ContactUsContainer>
            <ContactHeading textColor={darkTheme}>CONTACT US</ContactHeading>
            <SocialIconContainer>
              <SocialIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <SocialIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <SocialIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png "
                alt="linked in logo"
              />
            </SocialIconContainer>
            <ContactDescription textColor={darkTheme}>
              Enjoy! Now to see your channels and recommendations!
            </ContactDescription>
          </ContactUsContainer>
        </SideBarContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(SideBar)
