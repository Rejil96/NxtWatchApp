import styled from 'styled-components'

export const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${props => (props.bgColor ? '#0f0f0f' : '#f9f9f9')};
`

export const HomeInnerWrapper = styled.div`
  display: flex;
  overflow-x: hidden;
`
export const HomeContentWrapper = styled.div`
  width: 80vw;
  padding: 0px 20px;
  overflow-y: auto;
  @media screen and (max-width: 768px) {
    width: 100vw;
  }
`
export const SearchBoxContainer = styled.div`
  width: 100%;
  display: flex;
  border: 1px solid #909090;

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
  padding-left: 20px;
`
export const SearchBoxButton = styled.button`
  width: 30%;
  height: 40px;
  border: none;
  border-left: 1px solid #909090;
  display: flex;
  font-size: 22px;
  justify-content: center;
  align-items: center;
`
export const PremiumBannerContainer = styled.div`
  width: 100%;
  height: 36vh;
  margin-bottom: 20px;
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
  margin: 0px 20px;
`
