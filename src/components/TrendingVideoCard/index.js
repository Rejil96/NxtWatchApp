import {formatDistanceToNow} from 'date-fns'
import ThemeContext from '../../context/ThemeContext'

import {
  VideoCardContainer,
  VideoThumbnail,
  VideoInfoContainer,
  ChannelLogo,
  ChannelDescriptionContainer,
  VideoName,
  VideoStatusWrapper,
  VideoStatus,
  VideoStatusContainer,
  ChannelName,
  VideoStatusFirst,
  StyledLink,
} from './componentStyle'

const TrendingVideoCard = props => (
  <ThemeContext.Consumer>
    {value => {
      const {darkTheme} = value
      const {videoData} = props
      const {
        id,
        channel,
        publishedAt,
        thumbnailUrl,
        title,
        viewCount,
      } = videoData
      const {name, profileImageUrl} = channel
      console.log(publishedAt)
      const dateText = formatDistanceToNow(new Date(publishedAt))
      const dateArray = dateText.split(' ').slice(1, 3)
      const dateString = dateArray.join(' ')

      return (
        <StyledLink to={`videos/${id}`}>
          <VideoCardContainer>
            <VideoThumbnail src={thumbnailUrl} alt="video thumbnail" />
            <VideoInfoContainer>
              <ChannelLogo src={profileImageUrl} alt="channel image" />
              <ChannelDescriptionContainer>
                <VideoName textColor={darkTheme}>{title}</VideoName>
                <VideoStatusContainer>
                  <ChannelName>{name}</ChannelName>
                  <VideoStatusWrapper>
                    <VideoStatusFirst>{`${viewCount} `}views</VideoStatusFirst>
                    <VideoStatus>{`${dateString} `} ago</VideoStatus>
                  </VideoStatusWrapper>
                </VideoStatusContainer>
              </ChannelDescriptionContainer>
            </VideoInfoContainer>
          </VideoCardContainer>
        </StyledLink>
      )
    }}
  </ThemeContext.Consumer>
)

export default TrendingVideoCard
