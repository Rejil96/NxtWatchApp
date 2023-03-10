import {Link} from 'react-router-dom'
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
} from './componentStyle'

const SavedVideoCard = props => (
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

      const dateText = formatDistanceToNow(new Date(publishedAt))
      const dateArray = dateText.split(' ').slice(1, 3)
      const dateString = dateArray.join(' ')

      return (
        <Link
          to={`videos/${id}`}
          style={{textDecoration: 'none', color: 'inherit'}}
        >
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
        </Link>
      )
    }}
  </ThemeContext.Consumer>
)

export default SavedVideoCard
