import {Component} from 'react'

import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {BiLike, BiDislike} from 'react-icons/bi'
import {MdPlaylistAdd} from 'react-icons/md'
import ReactPlayer from 'react-player'
import {formatDistanceToNow} from 'date-fns'
import ThemeContext from '../../context/ThemeContext'

import {
  VideoItemDetailsContainer,
  VideoItemDetailsInnerWrapper,
  VideoItemDetailsContentWrapper,
  VideoPlayerContainer,
  LoaderContainer,
  VideoDescriptionContainer,
  VideoTitle,
  VideoInfoControlWrapper,
  VideoInfoControls,
  VideoLikeButton,
  VideoDislikeButton,
  VideoInfoButtonText,
  VideoChannelDescription,
  ChannelLogoDescription,
  ChannelLogo,
  ChannelLogoWrapper,
  ChannelNameText,
  SubscribersText,
  ChannelDescription,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureDescription,
  RetryButton,
  VideoStatusWrapper,
  VideoStatusFirst,
  VideoStatus,
} from './componentStyle'

import Header from '../Header'
import SideBar from '../SideBar'

const LoadingState = {
  initial: 'INITIAL',
  failed: 'FAIL',
  success: 'SUCCESS',
}

class VideoItemDetails extends Component {
  state = {
    videoDetails: {},
    isLoad: LoadingState.initial,
    like: false,
    disLike: false,
  }

  componentDidMount() {
    this.fetchVideoDetails()
  }

  onRetry = () => {
    this.fetchVideoDetails()
  }

  fetchVideoDetails = async () => {
    this.setState({isLoad: LoadingState.initial})
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const url = `https://apis.ccbp.in/videos/${params.id}`

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const makeApiCall = await fetch(url, options)
    const response = await makeApiCall.json()

    if (makeApiCall.ok) {
      const updatedVideosDetails = {
        id: response.video_details.id,
        channel: {
          name: response.video_details.channel.name,
          profileImageUrl: response.video_details.channel.profile_image_url,
          subscriberCount: response.video_details.channel.subscriber_count,
        },
        description: response.video_details.description,
        publishedAt: response.video_details.published_at,
        thumbnailUrl: response.video_details.thumbnail_url,
        title: response.video_details.title,
        viewCount: response.video_details.view_count,
        videoUrl: response.video_details.video_url,
      }

      this.setState({
        videoDetails: updatedVideosDetails,
        isLoad: LoadingState.success,
      })
    } else {
      this.setState({isLoad: LoadingState.failed})
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {darkTheme, onSavedVideos, savedVideos} = value
          const {videoDetails, isLoad, like, disLike} = this.state

          const {
            id,
            videoUrl,
            title,
            publishedAt,
            viewCount,
            description,
            channel,
          } = videoDetails

          const alreadySaved = savedVideos.some(eachData => {
            if (onSavedVideos.length !== 0 && eachData.id === id) {
              return true
            }
            return false
          })

          const checkDateValid = date => !Number.isNaN(new Date(date).getTime())

          const onLike = () => {
            if (disLike === false && like === false) {
              this.setState(prevState => ({
                like: !prevState.like,
              }))
            } else if (disLike === false && like === true) {
              this.setState(prevState => ({
                like: !prevState.like,
              }))
            } else if (disLike === true && like === false) {
              this.setState({
                like: true,
                disLike: false,
              })
            }
          }

          const onDisLike = () => {
            if (like === false && disLike === false) {
              this.setState(prevState => ({
                disLike: !prevState.disLike,
              }))
            } else if (disLike === true && like === false) {
              this.setState(prevState => ({
                disLike: !prevState.disLike,
              }))
            } else if (disLike === false && like === true) {
              this.setState({
                disLike: true,
                like: false,
              })
            }
          }

          const onClickSave = () => {
            onSavedVideos(videoDetails)
            this.setState(prevState => ({isSaved: !prevState.isSaved}))
          }

          const getDateFromNow = () => {
            const isValidDate = checkDateValid(publishedAt)
            if (isValidDate) {
              const dateTextData = formatDistanceToNow(new Date(publishedAt))
              const dateArray = dateTextData.split(' ').slice(1, 3)
              const dateString = dateArray.join(' ')
              return dateString
            }
            return null
          }
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
                  try again.
                </FailureDescription>
                <RetryButton type="button" onClick={this.onRetry}>
                  Retry
                </RetryButton>
              </FailureContainer>
            )
          }
          const successView = () => (
            <>
              <VideoPlayerContainer>
                <ReactPlayer
                  width="100%"
                  height="100%"
                  url={videoUrl}
                  controls
                />
              </VideoPlayerContainer>
              <VideoDescriptionContainer>
                <VideoTitle textColor={darkTheme}>{title}</VideoTitle>
                <VideoInfoControlWrapper>
                  <VideoStatusWrapper>
                    <VideoStatusFirst>{`${viewCount} `}views</VideoStatusFirst>
                    <VideoStatus> {`${getDateFromNow()}`} ago</VideoStatus>
                  </VideoStatusWrapper>
                  <VideoInfoControls>
                    <VideoLikeButton
                      type="button"
                      onClick={onLike}
                      likeStatus={like}
                    >
                      <BiLike />
                      <VideoInfoButtonText>Like</VideoInfoButtonText>
                    </VideoLikeButton>
                    <VideoDislikeButton
                      type="button"
                      onClick={onDisLike}
                      disLikeStatus={disLike}
                    >
                      <BiDislike />
                      <VideoInfoButtonText>Dislike</VideoInfoButtonText>
                    </VideoDislikeButton>
                    <VideoLikeButton
                      type="button"
                      onClick={onClickSave}
                      likeStatus={alreadySaved}
                    >
                      <MdPlaylistAdd />
                      <VideoInfoButtonText>
                        {alreadySaved ? 'Saved' : 'save'}
                      </VideoInfoButtonText>
                    </VideoLikeButton>
                  </VideoInfoControls>
                </VideoInfoControlWrapper>
              </VideoDescriptionContainer>
              <VideoChannelDescription>
                <ChannelLogoDescription>
                  <ChannelLogo
                    src={channel !== undefined ? channel.profileImageUrl : null}
                    alt="channel logo"
                  />
                  <ChannelLogoWrapper>
                    <ChannelNameText textColor={darkTheme}>
                      {channel !== undefined ? channel.name : null}
                    </ChannelNameText>
                    <SubscribersText>
                      {channel !== undefined
                        ? `${channel.subscriberCount} `
                        : null}
                      subscribers
                    </SubscribersText>
                  </ChannelLogoWrapper>
                </ChannelLogoDescription>
                <ChannelDescription textColor={darkTheme}>
                  {description}
                </ChannelDescription>
              </VideoChannelDescription>
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
            <VideoItemDetailsContainer bgColor={darkTheme}>
              <Header />
              <VideoItemDetailsInnerWrapper>
                <SideBar />
                <VideoItemDetailsContentWrapper
                  data-testid="videoItemDetails"
                  bgColor={darkTheme}
                >
                  {renderBasedOnStatus()}
                </VideoItemDetailsContentWrapper>
              </VideoItemDetailsInnerWrapper>
            </VideoItemDetailsContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoItemDetails
