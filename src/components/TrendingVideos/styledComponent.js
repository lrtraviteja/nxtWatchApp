import styled from 'styled-components'

export const MainTrendingVideosPage = styled.div`
  min-height: 100vh;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
`
export const TrendingVideosList = styled.ul`
  list-style-type: none;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media screen and (min-width: 768px) {
    padding: 20px;
  }
`
export const FailureImg = styled.img`
  height: 130px;
  @media screen and (min-width: 768px) {
    height: 150px;
  }
`
export const FailureHeading = styled.h1`
  //   font-weight: bold;
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 0px;
`
export const FailurePara = styled.p`
  text-align: center;
`
export const RetryButton = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  color: white;
  font-size: 15px;
  background-color: #3634a5;
  padding: 10px;
  width: 100px;
  border-radius: 5px;
`
export const VideosSection = styled.div`
  min-height: 64vh;
`
export const MainContainer = styled.div`
  display: flex;
`
export const TrendingVideosSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 93vh;
  @media screen and (min-width: 768px) {
    width: 80%;
  }
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 93vh;
  width: 100%;
`
export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 30px 40px;
  @media screen and (min-width: 768px) {
    padding: 10px 40px;
    min-height: 93vh;
  }
`

export const TrendingTitle = styled.h1`
  font-size: 20px;
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }

  @media screen and (min-width: 768px) {
    font-size: 40px;
  }
`

export const TrendingVideoHeader = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f1f1f1')};
  color: ${props => (props.isDarkTheme ? 'grey' : 'black')};

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

export const FireImgContainer = styled.div`
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
