import {
  NotFoundImg,
  NotFoundContainer,
  NotFoundHeading,
  NotFoundPara,
  MainContainer,
  BottomContainer,
} from './styledComponent'
import NxtContext from '../../context/context'

import Header from '../Header'
import SideBar from '../SideBar'

const NotFound = () => (
  <NxtContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <MainContainer isDarkTheme={isDarkTheme}>
          <Header />
          <BottomContainer>
            <SideBar isDarkTheme={isDarkTheme} />
            <NotFoundContainer>
              <NotFoundImg
                src={
                  isDarkTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                }
                alt="not found"
              />
              <NotFoundHeading>Page Not Found</NotFoundHeading>
              <NotFoundPara>
                We are sorry, the page you requested could not be found.
              </NotFoundPara>
            </NotFoundContainer>
          </BottomContainer>
        </MainContainer>
      )
    }}
  </NxtContext.Consumer>
)

export default NotFound
