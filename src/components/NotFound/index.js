import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import SideBar from '../SideBar'

import {
  NotFoundContainer,
  NotFoundContentWrapper,
  NotFoundBanner,
  NotFoundHeading,
  NotFoundDescription,
  NotFoundOuterWrapper,
} from './componentStyle'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {darkTheme} = value
      const notFoundImg = darkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      return (
        <NotFoundContainer bgColor={darkTheme}>
          <Header />
          <NotFoundOuterWrapper>
            <SideBar />
            <NotFoundContentWrapper>
              <NotFoundBanner src={notFoundImg} alt="not found" />
              <NotFoundHeading textColor={darkTheme}>
                Page Not Found
              </NotFoundHeading>
              <NotFoundDescription textColor={darkTheme}>
                We are sorry, the page you requested could not be found.
              </NotFoundDescription>
            </NotFoundContentWrapper>
          </NotFoundOuterWrapper>
        </NotFoundContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
