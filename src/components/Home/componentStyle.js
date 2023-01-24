import styled from 'styled-components'

export const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${props => (props.bgColor ? '#181818' : '#f9f9f9')};
`

export const HomeInnerWrapper = styled.div`
  display: flex;
  overflow-x: hidden;
`
export const HomeContentWrapper = styled.div`
  width: 100%;
  background-color: ${props => (props.bgColor ? '#181818' : '#f9f9f9')};
  overflow-y: auto;
  @media screen and (min-width: 768px) {
    width: 80%;
  }
`
export const SearchBoxContainer = styled.div`
  width: 100%;
  display: flex;
  border: 1px solid #909090;
  margin: 20px 0px;
  background-color: transparent;

  @media screen and (min-width: 576px) {
    width: 80%;
  }

  @media screen and (min-width: 768px) {
    width: 70%;
  }

  @media screen and (min-width: 992px) {
    width: 60%;
  }
`

export const SearchInput = styled.input`
  width: 100%;
  height: 40px;
  outline: none;
  border: none;
  background-color: transparent;
  padding-left: 20px;
`
export const SearchBoxButton = styled.button`
  width: 30%;
  height: 40px;
  border: none;
  border-left: 1px solid #909090;
  color: #909090;
  display: flex;
  font-size: 22px;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  background-color: ${props => (props.bgColor ? '#313131' : '#ebebeb')};
`
export const PremiumBannerContainer = styled.div`
  width: 100%;
  height: 36vh;
  margin-bottom: 20px;
  padding: 20px;
  display: flex;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
`

export const BannerInnerWrapperContent = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    flex-grow: 0;
    width: 70%;
  }
`
export const BannerInnerWrapperClose = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    width: 30%;
  }
`

export const BannerLogo = styled.img`
  width: 160px;
  margin-bottom: 10px;
`
export const BannerText = styled.p`
  font-size: 18px;
  line-height: 24px;
  color: #1e293b;
  font-family: 'Roboto';
  margin-bottom: 40px;
`
export const BannerButton = styled.button`
  width: 120px;
  height: 40px;
  background-color: transparent;
  border: 1px solid #1e293b;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
`
export const BannerCloseButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  align-self: flex-end;
  font-size: 24px;
`
export const HomeVideosContentWrapper = styled.div`
  width: 100%;
  height: 46vh;
  padding: 0px 20px;
`

export const VideosWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
`

export const LoaderContainer = styled.div`
  width: 100%;
  min-height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    min-height: 30vh;
  }
`
export const FailureContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    min-height: 100vh;
  }
`
export const FailureImage = styled.img`
  width: 60%;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    width: 40%;
  }
`

export const FailureHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 22px;
  color: ${props => (props.textColor ? '#f8fafc' : '#1e293b')};
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 26px;
  }
`

export const FailureDescription = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  text-align: center;
  color: #475569;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`
export const RetryButton = styled.button`
  width: 100px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-family: 'Roboto';
  cursor: pointer;
  color: #f8fafc;
  background-color: #4f46e5;
  border: none;
  outline: none;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    width: 120px;
  }
`
