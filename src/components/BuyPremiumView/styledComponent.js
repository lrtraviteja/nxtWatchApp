import styled from 'styled-components'

export const MainContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  padding: 15px;
  @media screen and (min-width: 768px) {
    padding: 17px;
  }
`
export const Container1 = styled.div`
  display: flex;
  justify-content: space-between;
`

export const WebsiteLogo = styled.img`
  height: 26px;
  @media screen and (min-width: 768px) {
    height: 40px;
  }
`

export const PremiumPara = styled.p`
  font-size: 15px;
  margin: 17px 0px;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`
export const PremiumGetButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 1px solid black;
  outline: none;
  font-size: 15px;
  padding: 3px 12px;
  font-family: roboto;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    padding: 5px 15px;
  }
`
export const PremiumCloseButton = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  background-color: transparent;
`
