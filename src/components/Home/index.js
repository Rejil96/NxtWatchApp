import {Component} from 'react'
import Loader from 'react-loader-spinner'
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
  LoaderContainer,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureDescription,
  RetryButton,
} from './componentStyle'

import SideBar from '../SideBar'

const LoadingState = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  fail: 'FAIL',
  emptySearch: 'EMPTY',
}

class Home extends Component {
  state = {
    showPremiumBanner: true,
    allVideosList: [],
    searchText: '',
    loadStatus: LoadingState.initial,
  }

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

    this.setState({loadStatus: LoadingState.initial})
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
      this.setState({
        allVideosList: updatedVideosList,
        loadStatus: LoadingState.success,
      })
      if (updatedVideosList.length === 0) {
        this.setState({loadStatus: LoadingState.emptySearch})
      }
    } else {
      this.setState({loadStatus: LoadingState.fail})
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
          const {
            showPremiumBanner,
            allVideosList,
            searchText,
            loadStatus,
          } = this.state

          const loadingView = () => (
            <LoaderContainer className="loader-container" data-testid="loader">
              <Loader
                type="ThreeDots"
                color=" #4f46e5"
                height="50"
                width="50"
              />
            </LoaderContainer>
          )

          const successView = () => (
            <VideosWrapper>
              {allVideosList.map(eachData => (
                <HomeVideoCard allVideosList={eachData} key={eachData.id} />
              ))}
            </VideosWrapper>
          )

          const failureView = () => {
            const failureImage = darkTheme
              ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

            return (
              <FailureContainer>
                <FailureImage src={failureImage} alt="failure" />
                <FailureHeading textColor={darkTheme}>
                  Oops! Something Went Wrong
                </FailureHeading>
                <FailureDescription textColor={darkTheme}>
                  We are having some trouble to complete your request. Please
                  try again
                </FailureDescription>
                <RetryButton type="button">Retry</RetryButton>
              </FailureContainer>
            )
          }

          const emptySearchView = () => (
            <FailureContainer>
              <FailureImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                alt="failure"
              />
              <FailureHeading textColor={darkTheme}>
                No Search result found
              </FailureHeading>
              <FailureDescription textColor={darkTheme}>
                Try different key words or remove search filter
              </FailureDescription>
              <RetryButton type="button">Retry</RetryButton>
            </FailureContainer>
          )

          const renderBasedOnStatus = () => {
            switch (loadStatus) {
              case LoadingState.initial:
                return loadingView()
              case LoadingState.fail:
                return failureView()
              case LoadingState.emptySearch:
                return emptySearchView()
              case LoadingState.success:
                return successView()
              default:
                return null
            }
          }

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
                    {renderBasedOnStatus()}
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
