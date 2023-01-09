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

const HomeVideoCard = props => (
  <ThemeContext.Consumer>
    {value => {
      const {darkTheme} = value
      const {allVideosList} = props
      const {
        id,
        channel,
        publishedAt,
        thumbnailUrl,
        title,
        viewCount,
      } = allVideosList
      const {name, profileImageUrl} = channel
      const dateText = formatDistanceToNow(new Date(publishedAt))
      const dateArray = dateText.split(' ').slice(1, 3)
      const dateString = dateArray.join(' ')

      return (
        <VideoCardContainer>
          <StyledLink to={`/videos/${id}`}>
            <VideoThumbnail src={thumbnailUrl} alt="video thumbnail" />
            <VideoInfoContainer>
              <ChannelLogo src={profileImageUrl} alt="channel logo" />
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
          </StyledLink>
        </VideoCardContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default HomeVideoCard
