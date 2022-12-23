import {Component} from 'react'
import Cookies from 'js-cookie'
import {BiSearchAlt2} from 'react-icons/bi'
import {IoCloseSharp} from 'react-icons/io5'
import ThemeContext from '../../context/ThemeContext'

import Header from '../Header'
import HomeVideoCard from '../HomeVideoCard'

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
  HomeVideosContentWrapper,
  SearchBoxContainer,
  SearchInput,
  SearchBoxButton,
  VideosWrapper,
} from './componentStyle'

import SideBar from '../SideBar'

class Home extends Component {
  state = {showPremiumBanner: true, allVideosList: [], searchText: ''}

  componentDidMount() {
    this.fetchAllVideos()
  }

  fetchAllVideos = async () => {
    const {searchText} = this.state
    const getJwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchText}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${getJwtToken}`,
      },
    }
    const makeApi = await fetch(url, options)
    const response = await makeApi.json()
    if (makeApi.ok) {
      const {videos} = response
      const updatedVideosList = videos.map(eachData => ({
        id: eachData.id,
        channel: {
          name: eachData.channel.name,
          profileImageUrl: eachData.channel.profile_image_url,
        },
        publishedAt: eachData.published_at,
        thumbnailUrl: eachData.thumbnail_url,
        title: eachData.title,
        viewCount: eachData.view_count,
      }))
      this.setState({allVideosList: updatedVideosList})
    }
  }

  onBannerClose = () => {
    this.setState({showPremiumBanner: false})
  }

  onSearch = event => {
    this.setState({searchText: event.target.value})
  }

  onClickSearch = () => {
    this.fetchAllVideos()
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {darkTheme} = value
          const {showPremiumBanner, allVideosList, searchText} = this.state

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
                  <HomeVideosContentWrapper>
                    <SearchBoxContainer>
                      <SearchInput
                        type="text"
                        placeholder="Search"
                        value={searchText}
                        onChange={this.onSearch}
                      />
                      <SearchBoxButton
                        type="button"
                        bgColor={darkTheme}
                        onClick={this.onClickSearch}
                      >
                        <BiSearchAlt2 />
                      </SearchBoxButton>
                    </SearchBoxContainer>
                    <VideosWrapper>
                      {allVideosList.map(eachData => (
                        <HomeVideoCard
                          allVideosList={eachData}
                          key={eachData.id}
                        />
                      ))}
                    </VideosWrapper>
                  </HomeVideosContentWrapper>
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
