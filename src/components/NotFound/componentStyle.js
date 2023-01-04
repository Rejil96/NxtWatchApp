import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  width: 100vi;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.bgColor ? '#0f0f0f' : '#f9f9f9')};
`

export const NotFoundContentWrapper = styled.div`
  width: 100%;
  height: 85vh;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const NotFoundBanner = styled.img`
  width: 100%;
  padding: 20px;
  margin-top: 40px;
  @media screen and (min-width: 768px) {
    width: 40%;
  }
`
export const NotFoundHeading = styled.p`
  font-size: 24px;
  font-family: 'Roboto';
  font-weight: 600;
  margin-bottom: 0px;
  color: ${props => (props.textColor ? '#f8fafc' : '#181818')};
`
export const NotFoundDescription = styled.p`
  font-size: 14px;
  font-family: 'Roboto';
  text-align: center;
  margin: 20px 40px;
  color: ${props => (props.textColor ? '#64748b' : ' #616e7c')};
`
export const NotFoundOuterWrapper = styled.div`
  display: flex;
  width: 100%;
`
