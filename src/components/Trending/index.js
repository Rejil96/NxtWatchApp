import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {HiFire} from 'react-icons/hi'
import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import SideBar from '../SideBar'
import TrendingVideoCard from '../TrendingVideoCard'

import {
  TrendingContainer,
  TrendingInnerWrapper,
  TrendingContentWrapper,
  TrendingHeader,
  TrendingHeading,
  TrendingIconContainer,
  TrendingVideosWrapper,
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

class Trending extends Component {
  state = {trendingVideosList: [], isLoad: LoadingState.initial}

  componentDidMount() {
    this.fetchTrendingVideos()
  }

  onRetry = () => {
    this.fetchTrendingVideos()
  }

  fetchTrendingVideos = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/trending'
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

      const updatedTrendingVideosList = videos.map(eachData => ({
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
        trendingVideosList: updatedTrendingVideosList,
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
          const {trendingVideosList, isLoad} = this.state
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
              <TrendingHeader bgColor={darkTheme}>
                <TrendingIconContainer bgColor={darkTheme}>
                  <HiFire />
                </TrendingIconContainer>
                <TrendingHeading textColor={darkTheme}>
                  Trending
                </TrendingHeading>
              </TrendingHeader>
              <TrendingVideosWrapper>
                {trendingVideosList.map(eachData => (
                  <TrendingVideoCard key={eachData.id} videoData={eachData} />
                ))}
              </TrendingVideosWrapper>
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
            <TrendingContainer bgColor={darkTheme}>
              <Header />
              <TrendingInnerWrapper>
                <SideBar />
                <TrendingContentWrapper
                  data-testid="trending"
                  bgColor={darkTheme}
                >
                  {renderBasedOnStatus()}
                </TrendingContentWrapper>
              </TrendingInnerWrapper>
            </TrendingContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Trending
