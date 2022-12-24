import {formatDistanceToNow} from 'date-fns'
import ThemeContext from '../../context/ThemeContext'

import {
  VideoCardContainer,
  VideoThumbnail,
  VideoInfoContainer,
  ChannelDescriptionContainer,
  VideoName,
  VideoStatus,
} from './componentStyle'

const GamingVideoCard = props => (
  <ThemeContext.Consumer>
    {value => {
      const {darkTheme} = value
      const {allVideosList} = props
      const {id, thumbnailUrl, title, viewCount} = allVideosList

      return (
        <VideoCardContainer>
          <VideoThumbnail src={thumbnailUrl} alt="videos" />
          <VideoInfoContainer>
            <ChannelDescriptionContainer>
              <VideoName textColor={darkTheme}>{title}</VideoName>
              <VideoStatus> {`${viewCount}K `}Watching Worldwide</VideoStatus>
            </ChannelDescriptionContainer>
          </VideoInfoContainer>
        </VideoCardContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default GamingVideoCard
