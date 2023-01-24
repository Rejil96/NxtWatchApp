import styled from 'styled-components'

export const VideoCardContainer = styled.div`
  width: 46%;

  display: flex;
  flex-direction: column;
  margin: 20px 10px 0px 0px;

  @media screen and (min-width: 768px) {
    width: 31%;
  }

  @media screen and (min-width: 992px) {
    width: 23%;
  }
`

export const VideoThumbnail = styled.img`
  width: 100%;
`
export const VideoInfoContainer = styled.div`
  display: flex;
  margin-top: 20px;
`
export const ChannelLogo = styled.img`
  width: 40px;
  height: 40px;
  margin: 20px 10px;
`

export const ChannelDescriptionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding: 0px;
`

export const VideoName = styled.p`
  font-size: 16px;
  font-weight: 500;
  font-family: 'Roboto';
  color: ${props => (props.textColor ? '#f8fafc' : '#424242')};
  line-height: 24px;
  margin: 0px;
  padding: 0px;
`

export const VideoStatusContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const VideoStatus = styled.p`
  font-size: 14px;
  margin-top: 10px;
  font-family: 'Roboto';
  color: #616e7c;

  padding: 0px;
  @media screen and (min-width: 768px) {
  }
`

export const ChannelName = styled.p`
  font-size: 14px;

  padding: 0px;
  font-family: 'Roboto';
  margin: 0px;
  padding-right: 20px;
  margin-top: 20px;
  color: #616e7c;
`
