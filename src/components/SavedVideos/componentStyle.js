import styled from 'styled-components'

export const TrendingContainer = styled.div`
  width: 100vi;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.bgColor ? '#0f0f0f' : '#f9f9f9')};
`
export const TrendingInnerWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`

export const TrendingContentWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;

  overflow-y: scroll;
  @media screen and (min-width: 768px) {
    height: 86vh;
    width: 80%;
  }
`

export const TrendingHeader = styled.div`
  width: 100%;
  height: 16vh;
  background-color: ${props => (props.bgColor ? '#181818' : '#f1f1f1')};
  display: flex;
  align-items: center;
  @media screen and (min-width: 768px) {
    height: 20vh;
  }
`
export const TrendingHeading = styled.h1`
  color: ${props => (props.textColor ? '#f8fafc' : '#212121')};
  font-family: 'Roboto';
  font-size: 32px;
`
export const TrendingIconContainer = styled.div`
  width: 70px;
  height: 70px;
  color: #ff0000;
  font-size: 36px;
  margin: 0px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${props => (props.bgColor ? '#0f0f0f' : '#d7dfe9')};

  @media screen and (min-width: 768px) {
    margin: 0px 20px 0px 40px;
  }
`
export const TrendingVideosWrapper = styled.div`
  width: 100%;
`

export const LoaderContainer = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
