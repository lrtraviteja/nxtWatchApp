import {AiOutlineClose} from 'react-icons/ai'
import {
  MainContainer,
  PremiumGetButton,
  Container1,
  PremiumPara,
  WebsiteLogo,
  PremiumCloseButton,
} from './styledComponent'
import NxtContext from '../../context/context'

const BuyPremiumView = () => (
  <NxtContext.Consumer>
    {value => {
      const {closedPremiumView} = value
      const buyPremiumCrossed = () => {
        closedPremiumView()
      }
      return (
        <MainContainer data-testid="banner">
          <Container1>
            <WebsiteLogo
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="nxt watch logo"
            />
            <PremiumCloseButton
              type="button"
              onClick={buyPremiumCrossed}
              data-testid="close"
            >
              <AiOutlineClose />
            </PremiumCloseButton>
          </Container1>
          <PremiumPara>
            Buy Nxt Watch Premium prepaid plans with UPI
          </PremiumPara>
          <PremiumGetButton type="button">GET IT NOW</PremiumGetButton>
        </MainContainer>
      )
    }}
  </NxtContext.Consumer>
)

export default BuyPremiumView
