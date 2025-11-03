import styled from 'styled-components'

export const MainSavedVideosPage = styled.div`
  min-height: 100vh;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  color: ${props => (props.isDarkTheme ? 'grey' : 'black')};
`
export const SavedVideosSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 93vh;
  @media screen and (min-width: 768px) {
    width: 80%;
  }
`
export const MainContainer = styled.div`
  display: flex;
`
export const NoSavedVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 75vh;
`

export const NotFoundImg = styled.img`
  height: 190px;
  @media screen and (min-width: 768px) {
    height: 230px;
  }
`

export const NotFoundHeading = styled.h1`
  font-size: 20px;
  padding-top: 10px;
  @media screen and (min-width: 768px) {
    font-size: 24px;
    margin-top: 3px;
  }
`

export const NotFoundText = styled.p`
  font-size: 15px;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 20px;
    margin-top: 5px;
    margin-bottom: 0px;
  }
`

export const SavedVideosList = styled.ul`
  list-style-type: none;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media screen and (min-width: 768px) {
    padding: 20px;
  }
`

export const SavedVideosTitle = styled.h1`
  font-size: 20px;
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }

  @media screen and (min-width: 768px) {
    font-size: 40px;
  }
`

export const SavedVideoHeader = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f1f1f1')};
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 5px 20px;
  margin: 0px;
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 30px;
    padding: 0px 50px;
  }
`

export const SaveImgContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#e2e8f0')};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  border-radius: 40px;
  @media screen and (min-width: 768px) {
    height: 80px;
    width: 80px;
  }
`
