import {withRouter, Link} from 'react-router-dom'

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
  MobileNavMenuContainer,
  MobileNavItem,
  MobileNavItemText,
  MobileNavButton,
} from './componentStyle'
import ThemeContext from '../../context/ThemeContext'

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
            <Link to="/" style={{textDecoration: 'none', color: 'inherit'}}>
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
