import {Component} from 'react'
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
} from './componentStyle'

class Trending extends Component {
  state = {trendingVideosList: []}

  componentDidMount() {
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

      this.setState({trendingVideosList: updatedTrendingVideosList})
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {darkTheme} = value
          const {trendingVideosList} = this.state
          return (
            <TrendingContainer bgColor={darkTheme}>
              <Header />
              <TrendingInnerWrapper>
                <SideBar />
                <TrendingContentWrapper>
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
                      <TrendingVideoCard
                        key={eachData.id}
                        videoData={eachData}
                      />
                    ))}
                  </TrendingVideosWrapper>
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
