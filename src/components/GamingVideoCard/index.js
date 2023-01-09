import ThemeContext from '../../context/ThemeContext'

import {
  VideoCardContainer,
  VideoThumbnail,
  VideoInfoContainer,
  ChannelDescriptionContainer,
  VideoName,
  VideoStatus,
  StyledLink,
} from './componentStyle'

const GamingVideoCard = props => (
  <ThemeContext.Consumer>
    {value => {
      const {darkTheme} = value
      const {allVideosList} = props
      const {id, thumbnailUrl, title, viewCount} = allVideosList

      return (
        <VideoCardContainer>
          <StyledLink to={`/videos/${id}`}>
            <VideoThumbnail src={thumbnailUrl} alt="video thumbnail" />
            <VideoInfoContainer>
              <ChannelDescriptionContainer>
                <VideoName textColor={darkTheme}>{title}</VideoName>
                <VideoStatus> {`${viewCount}K `}Watching Worldwide</VideoStatus>
              </ChannelDescriptionContainer>
            </VideoInfoContainer>
          </StyledLink>
        </VideoCardContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default GamingVideoCard
