import {Link} from 'react-router-dom'
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
          <Link
            to={`/videos/${id}`}
            style={{textDecoration: 'none', color: 'inherit'}}
          >
            <VideoThumbnail src={thumbnailUrl} alt="video thumbnail" />
            <VideoInfoContainer>
              <ChannelDescriptionContainer>
                <VideoName textColor={darkTheme}>{title}</VideoName>
                <VideoStatus> {`${viewCount}K `}Watching Worldwide</VideoStatus>
              </ChannelDescriptionContainer>
            </VideoInfoContainer>
          </Link>
        </VideoCardContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default GamingVideoCard
