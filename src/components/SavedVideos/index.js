import {HiFire} from 'react-icons/hi'
import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import SideBar from '../SideBar'
import SavedVideoCard from '../SavedVideoCard'

import {
  TrendingContainer,
  TrendingInnerWrapper,
  TrendingContentWrapper,
  TrendingHeader,
  TrendingHeading,
  TrendingIconContainer,
  TrendingVideosWrapper,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureDescription,
} from './componentStyle'

const SavedVideos = () => (
  <ThemeContext.Consumer>
    {value => {
      const {darkTheme, savedVideos} = value

      const failureView = () => (
        <FailureContainer>
          <FailureImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            alt="no saved videos"
          />
          <FailureHeading textColor={darkTheme}>
            No saved videos found
          </FailureHeading>
          <FailureDescription textColor={darkTheme}>
            You can save your videos while watching them
          </FailureDescription>
        </FailureContainer>
      )

      const successView = () => (
        <>
          <TrendingHeader bgColor={darkTheme}>
            <TrendingIconContainer bgColor={darkTheme}>
              <HiFire />
            </TrendingIconContainer>
            <TrendingHeading textColor={darkTheme}>
              Saved Videos
            </TrendingHeading>
          </TrendingHeader>
          <TrendingVideosWrapper>
            {savedVideos.map(eachData => (
              <SavedVideoCard key={eachData.id} videoData={eachData} />
            ))}
          </TrendingVideosWrapper>
        </>
      )

      const renderBasedOnStatus = () => {
        if (savedVideos.length === 0) {
          return failureView()
        }

        return successView()
      }

      return (
        <TrendingContainer bgColor={darkTheme}>
          <Header />
          <TrendingInnerWrapper>
            <SideBar />
            <TrendingContentWrapper
              data-testid="savedVideos"
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

export default SavedVideos
