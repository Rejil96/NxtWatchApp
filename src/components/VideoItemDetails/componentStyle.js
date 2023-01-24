import styled from 'styled-components'

export const VideoItemDetailsContainer = styled.div`
  width: 100vi;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.bgColor ? '#0f0f0f' : '#f9f9f9')};
`

export const VideoItemDetailsInnerWrapper = styled.div`
  display: flex;
`

export const VideoItemDetailsContentWrapper = styled.div`
  width: 100%;
  height: 86vh;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.bgColor ? '#0f0f0f' : '#f9f9f9')};

  @media screen and (min-width: 768px) {
    width: 80%;
  }
`
export const VideoPlayerContainer = styled.div`
  width: 100%;
  min-height: 60vh;

  @media screen and (min-width: 768px) {
    width: 90%;
    min-height: 80vh;
    margin: 20px 0px 0px 20px;
  }
`
export const LoaderContainer = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 80%;
  }
`
export const VideoDescriptionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  border-bottom: 1px solid #616e7c;
`

export const VideoTitle = styled.p`
  font-size: 16px;
  font-weight: 500;
  font-family: 'Roboto';
  color: ${props => (props.textColor ? '#f8fafc' : '#424242')};
  line-height: 24px;
  margin: 0px;
  padding: 0px 20px;
  padding-top: 20px;
`
export const VideoInfoControlWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0px 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`
export const VideoInfoControls = styled.div`
  display: flex;
  align-items: center;
`
export const VideoLikeButton = styled.button`
  display: flex;
  align-items: center;
  margin-right: 30px;
  background-color: transparent;
  color: ${props => (props.likeStatus ? '#2563eb' : '#64748b')};
  padding: 0px;
  border: none;
  cursor: pointer;
  background-color: none;
  outline: none;
  font-size: 22px;
  padding-top: 10px;
  @media screen and (min-width: 768px) {
    margin-left: 20px;
    margin-right: 0px;
  }
`
export const VideoDislikeButton = styled.button`
  display: flex;
  align-items: center;
  margin-right: 30px;
  background-color: transparent;
  color: ${props => (props.disLikeStatus ? '#2563eb' : '#64748b')};
  padding: 0px;
  border: none;
  cursor: pointer;
  background-color: none;
  outline: none;
  font-size: 22px;
  padding-top: 10px;
  @media screen and (min-width: 768px) {
    margin-left: 20px;
    margin-right: 0px;
  }
`

export const VideoInfoButtonText = styled.span`
  font-size: 16px;
  padding-left: 5px;
`
export const VideoChannelDescription = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
export const ChannelLogoDescription = styled.div`
  display: flex;
  padding: 20px;
  padding-top: 40px;
`

export const ChannelLogo = styled.img`
  width: 50px;
  height: 50px;
`

export const ChannelLogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`
export const ChannelNameText = styled.p`
  color: ${props => (props.textColor ? '#f8fafc' : '#424242')};
  font-size: 14px;
  font-weight: 500;
`

export const SubscribersText = styled.p`
  font-size: 14px;
  color: #616e7c;
`
export const ChannelDescription = styled.p`
  font-size: 14px;
  color: ${props => (props.textColor ? '#f8fafc' : '#424242')};
  padding: 0px 20px 40px 20px;
  line-height: 24px;
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
export const VideoStatusWrapper = styled.ul`
  width: 100%;
  padding-left: 0px;
  display: flex;
  margin: 0px;
  padding: 0px;
  align-items: center;
  margin: 20px 0px;

  @media screen and (min-width: 768px) {
    margin: 20px 0px;
  }
`

export const VideoStatus = styled.p`
  font-size: 14px;

  font-family: 'Roboto';
  color: #616e7c;
  margin: 0px 20px;
  padding: 0px;
  @media screen and (min-width: 768px) {
    margin: 0px;
  }
`
export const VideoStatusFirst = styled.p`
  font-size: 14px;

  font-family: 'Roboto';
  color: #616e7c;
  margin: 0px 20px;
  padding: 0px;
  margin-left: 0px;
  @media screen and (min-width: 768px) {
    list-style: none;
    margin-right: 30px;
  }
`
