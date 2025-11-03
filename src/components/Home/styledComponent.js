/* eslint-disable prettier/prettier */
import styled from 'styled-components'

export const MainHomePage = styled.div`
  min-height: 100vh;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
  color: ${props => (props.isDarkTheme ? 'grey' : 'black')};
`
// export const MainHomePageH = styled.div`
//   min-height: 100vh;
//   background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
// `

export const HomePage = styled.div``
export const MainContainer = styled.div`
  display: flex;
`
export const HomeSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 93vh;
  @media screen and (min-width: 768px) {
    width: 80%;
  }
`

export const VideosSection = styled.div`
  min-height: 64vh;
`

export const SearchContainer = styled.div`
  background-color: ${props => props.isDarkTheme && '#f9f9f9'};
  margin: 23px 20px 0px 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px solid grey;
  padding: 0px 5px;
  width: 80%;

  @media screen and (min-width: 768px) {
    width: 50%;
  }
`

export const SearchInput = styled.input`
  outline: none;
  width: 100%;
  border-top: none;
  border-left: none;
  border-bottom: none;
  border-right: 1px solid grey;
  padding: 5px 10px;
  background-color: transparent;
`

export const VideoListUl = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  padding: 0px 20px 20px 15px;
  @media screen and (min-width: 768px) {
    gap: 9px;
    padding: 10px 20px 20px 15px;
  }
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 75vh;
`

export const LoaderContainerH = styled.div`
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 58vh;
`

export const ShowNoResultsViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 30px 40px;
  align-self: center;
  @media screen and (min-width: 768px) {
    padding: 10px 40px;
  }
`
export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 30px 40px;
  align-self: center;
  @media screen and (min-width: 768px) {
    padding: 10px 40px;
  }
`

export const FailureSearchImg = styled.img`
  height: 130px;
  @media screen and (min-width: 768px) {
    height: 150px;
  }
`
export const FailureImg = styled.img`
  height: 130px;
  @media screen and (min-width: 768px) {
    height: 150px;
  }
`

export const SearchFailureHeading = styled.h1`
  //   font-weight: bold;
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 0px;
`

export const FailureHeading = styled.h1`
  //   font-weight: bold;
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 0px;
`
export const SearchFailurePara = styled.p`
  text-align: center;
`
export const FailurePara = styled.p`
  text-align: center;
`
export const SearchButton = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  outline: none;
  border: none;
  color: white;
  font-size: 15px;
  background-color: transparent;
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
