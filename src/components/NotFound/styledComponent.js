import styled from 'styled-components'

export const NotFoundImg = styled.img`
  height: 190px;
  @media screen and (min-width: 768px) {
    height: 300px;
  }
`

export const NotFoundHeading = styled.h1`
  font-size: 20px;
  padding-top: 10px;
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`

export const NotFoundPara = styled.p`
  font-size: 13px;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`

export const BottomContainer = styled.div`
  display: flex;
  min-height: 93vh;
`

export const MainContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  color: ${props => (props.isDarkTheme ? 'grey' : 'black')};
`

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`
