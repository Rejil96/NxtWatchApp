import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {SiYoutubegaming} from 'react-icons/si'
import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import SideBar from '../SideBar'
import GamingVideoCard from '../GamingVideoCard'

import {
  GamingContainer,
  GamingInnerWrapper,
  GamingContentWrapper,
  GamingHeader,
  GamingHeading,
  GamingIconContainer,
  GamingVideosWrapper,
  LoaderContainer,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureDescription,
  RetryButton,
} from './componentStyle'

const LoadingState = {
  initial: 'INITIAL',
  failed: 'FAIL',
  success: 'SUCCESS',
}

class Gaming extends Component {
  state = {gamingVideosList: [], isLoad: LoadingState.initial}

  componentDidMount() {
    this.fetchGamingVideos()
  }

  onRetry = () => {
    this.fetchGamingVideos()
  }

  fetchGamingVideos = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const fetchData = await fetch(url, options)
    const response = await fetchData.json()

    if (fetchData.ok) {
      const {videos} = response

      const updatedGamingVideosList = videos.map(eachData => ({
        id: eachData.id,
        thumbnailUrl: eachData.thumbnail_url,
        title: eachData.title,
        viewCount: eachData.view_count,
      }))

      this.setState({
        gamingVideosList: updatedGamingVideosList,
        isLoad: LoadingState.success,
      })
    } else {
      this.setState({
        isLoad: LoadingState.failed,
      })
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {darkTheme} = value
          const {gamingVideosList, isLoad} = this.state

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

          const failureView = () => {
            const failureImage = darkTheme
              ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

            return (
              <FailureContainer>
                <FailureImage src={failureImage} alt="failure view" />
                <FailureHeading textColor={darkTheme}>
                  Oops! Something Went Wrong
                </FailureHeading>
                <FailureDescription textColor={darkTheme}>
                  We are having some trouble to complete your request. Please
                  try again
                </FailureDescription>
                <RetryButton type="button" onClick={this.onRetry}>
                  Retry
                </RetryButton>
              </FailureContainer>
            )
          }

          const successView = () => (
            <>
              <GamingHeader bgColor={darkTheme}>
                <GamingIconContainer bgColor={darkTheme}>
                  <SiYoutubegaming />
                </GamingIconContainer>
                <GamingHeading textColor={darkTheme}>Gaming</GamingHeading>
              </GamingHeader>
              <GamingVideosWrapper>
                {gamingVideosList.map(eachData => (
                  <GamingVideoCard key={eachData.id} allVideosList={eachData} />
                ))}
              </GamingVideosWrapper>
            </>
          )

          const renderBasedOnStatus = () => {
            switch (isLoad) {
              case LoadingState.initial:
                return loadingView()
              case LoadingState.failed:
                return failureView()
              case LoadingState.success:
                return successView()
              default:
                return null
            }
          }

          return (
            <GamingContainer bgColor={darkTheme}>
              <Header />
              <GamingInnerWrapper>
                <SideBar />
                <GamingContentWrapper data-testid="gaming" bgColor={darkTheme}>
                  {renderBasedOnStatus()}
                </GamingContentWrapper>
              </GamingInnerWrapper>
            </GamingContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Gaming
