import {Component} from 'react'
import Cookies from 'js-cookie'
import {BiSearchAlt2} from 'react-icons/bi'
import {IoCloseSharp} from 'react-icons/io5'
import ThemeContext from '../../context/ThemeContext'

import Header from '../Header'

import {
  HomeContainer,
  HomeInnerWrapper,
  HomeContentWrapper,
  PremiumBannerContainer,
  BannerInnerWrapperContent,
  BannerInnerWrapperClose,
  BannerLogo,
  BannerText,
  BannerButton,
  BannerCloseButton,
  SearchBoxContainer,
  SearchInput,
  SearchBoxButton,
} from './componentStyle'

import SideBar from '../SideBar'

class Home extends Component {
  state = {showPremiumBanner: true}

  componentDidMount() {
    this.fetchAllVideos()
  }

  fetchAllVideos = async () => {
    const getJwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/all?search='
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${getJwtToken}`,
      },
    }
    const makeApi = await fetch(url, options)
    const response = await makeApi.json()
    console.log(response)
  }

  onBannerClose = () => {
    this.setState({showPremiumBanner: false})
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {darkTheme} = value
          const {showPremiumBanner} = this.state

          return (
            <HomeContainer bgColor={darkTheme}>
              <Header />
              <HomeInnerWrapper>
                <SideBar />
                <HomeContentWrapper>
                  {showPremiumBanner && (
                    <PremiumBannerContainer>
                      <BannerInnerWrapperContent>
                        <BannerLogo src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" />
                        <BannerText>
                          Buy Nxt Watch Premium prepaid plans with UPI
                        </BannerText>
                        <BannerButton type="button">GET IT NOW</BannerButton>
                      </BannerInnerWrapperContent>
                      <BannerInnerWrapperClose>
                        <BannerCloseButton
                          type="button"
                          onClick={this.onBannerClose}
                        >
                          <IoCloseSharp />
                        </BannerCloseButton>
                      </BannerInnerWrapperClose>
                    </PremiumBannerContainer>
                  )}
                  <SearchBoxContainer>
                    <SearchInput type="text" placeholder="Search" />
                    <SearchBoxButton type="button">
                      <BiSearchAlt2 />
                    </SearchBoxButton>
                  </SearchBoxContainer>
                </HomeContentWrapper>
              </HomeInnerWrapper>
            </HomeContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
