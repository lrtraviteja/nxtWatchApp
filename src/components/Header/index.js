import './index.css'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import {Link, withRouter} from 'react-router-dom'
import {FiSun, FiLogOut} from 'react-icons/fi'
import {FaMoon, FaFire} from 'react-icons/fa'
import {AiFillHome, AiOutlineClose} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import {GiHamburgerMenu} from 'react-icons/gi'

import {
  NavBar,
  LogoutContainer,
  //   LogoutContainer3,
  Menu,
  ButtonsContainer,
  CancelButton,
  ConfirmButton,
  HeaderWebsiteLogo,
  ThemeButton,
  ProfileImg,
  LogoutButton,
  LogoutButton2,
  LogoutButton3,
  //   MobileMainSidebar,
  MobileSideBarList,
  MobileListItem1,
  MobileListItem2,
  MobileListItem3,
  MobileListItem4,
  MobileSideBarTitle,
  MobileContactSection,
  MobileContactSites,
  MobileContactIcon,
  MobileFooterNote,
  ContactUsPara,
  ListElement,
  ListItem,
  ListItem2,
  ListItem3,
  ListItem4,
  ListItem5,
  CloseButton,
  Container,
  Para,
} from './styledComponent'
import NxtContext from '../../context/context'

const Header = props => {
  const onLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <NxtContext.Consumer>
      {value => {
        const {isDarkTheme, changeTheme} = value
        const {match} = props
        const {path} = match
        const onChangeTheme = () => {
          changeTheme()
        }

        return (
          <NavBar className={isDarkTheme ? 'darkSideBar' : 'lightSideBar'}>
            <Container>
              <Link to="/">
                <HeaderWebsiteLogo
                  src={
                    isDarkTheme
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                />
              </Link>
            </Container>
            <ListElement>
              <ListItem>
                <ThemeButton
                  type="button"
                  onClick={onChangeTheme}
                  data-testid="theme"
                >
                  {isDarkTheme ? (
                    <FiSun className="fisun" color="white" />
                  ) : (
                    <FaMoon className="famoon" color="black" />
                  )}
                </ThemeButton>
              </ListItem>
              <ListItem2>
                <Popup
                  modal
                  trigger={
                    <LogoutButton3 type="button">
                      <GiHamburgerMenu
                        color={isDarkTheme ? 'white' : 'black'}
                      />
                    </LogoutButton3>
                  }
                  className="popup-content"
                >
                  {close => (
                    <Menu isDarkTheme={isDarkTheme}>
                      <CloseButton
                        type="button"
                        onClick={() => {
                          close()
                        }}
                      >
                        <AiOutlineClose
                          className="closeIcon"
                          color={isDarkTheme ? 'black' : 'white'}
                        />
                      </CloseButton>
                      <MobileSideBarList>
                        <MobileListItem1 isDarkTheme={isDarkTheme} path={path}>
                          <Link className="link" onClick={() => close()} to="/">
                            <AiFillHome
                              className="home-icon"
                              color={
                                isDarkTheme && path === '/' ? 'red' : 'grey'
                              }
                            />
                            <MobileSideBarTitle>Home</MobileSideBarTitle>
                          </Link>
                        </MobileListItem1>

                        <MobileListItem2 isDarkTheme={isDarkTheme} path={path}>
                          <Link
                            className="link"
                            onClick={() => close()}
                            to="/trending"
                          >
                            <FaFire
                              color={
                                isDarkTheme && path === '/trending'
                                  ? 'red'
                                  : 'grey'
                              }
                              alt="trending"
                            />
                            <MobileSideBarTitle>Trending</MobileSideBarTitle>
                          </Link>
                        </MobileListItem2>

                        <MobileListItem3 isDarkTheme={isDarkTheme} path={path}>
                          <Link
                            className="link"
                            onClick={() => close()}
                            to="/gaming"
                          >
                            <SiYoutubegaming
                              color={
                                isDarkTheme && path === '/gaming'
                                  ? 'red'
                                  : 'grey'
                              }
                              alt="gaming"
                            />
                            <MobileSideBarTitle>Gaming</MobileSideBarTitle>
                          </Link>
                        </MobileListItem3>

                        <MobileListItem4 isDarkTheme={isDarkTheme} path={path}>
                          <Link
                            className="link"
                            onClick={() => close()}
                            to="/saved-videos"
                          >
                            <MdPlaylistAdd
                              className="saveIcon"
                              color={
                                isDarkTheme && path === '/saved-videos'
                                  ? 'red'
                                  : 'grey'
                              }
                              alt="saved videos"
                            />
                            <MobileSideBarTitle>
                              Saved Videos
                            </MobileSideBarTitle>
                          </Link>
                        </MobileListItem4>
                      </MobileSideBarList>
                      <MobileContactSection>
                        <ContactUsPara>CONTACT US</ContactUsPara>
                        <MobileContactSites>
                          <MobileContactIcon
                            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                            alt="facebook logo"
                          />
                          <MobileContactIcon
                            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                            alt="twitter logo"
                          />
                          <MobileContactIcon
                            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                            alt="linked in logo"
                          />
                        </MobileContactSites>
                        <MobileFooterNote>
                          Enjoy! Now to see your channels and recommendations!
                        </MobileFooterNote>
                      </MobileContactSection>
                    </Menu>
                  )}
                </Popup>
              </ListItem2>
              <ListItem3>
                <ProfileImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
              </ListItem3>
              <ListItem5>
                <Popup // Below Medium screen size
                  modal
                  trigger={
                    <LogoutButton2 type="button">
                      <FiLogOut color={isDarkTheme ? 'white' : 'black'} />
                    </LogoutButton2>
                  }
                  className="popup-content"
                >
                  {close => (
                    <LogoutContainer isDarkTheme={isDarkTheme}>
                      <Para>Are you sure, you want to logout</Para>
                      <ButtonsContainer>
                        <CancelButton onClick={() => close()}>
                          Cancel
                        </CancelButton>
                        <ConfirmButton onClick={onLogout}>
                          Confirm
                        </ConfirmButton>
                      </ButtonsContainer>
                    </LogoutContainer>
                  )}
                </Popup>
              </ListItem5>
              <ListItem4>
                <Popup //  Medium screen size and up
                  modal
                  trigger={
                    <LogoutButton isDarkTheme={isDarkTheme} type="button">
                      Logout
                    </LogoutButton>
                  }
                  className="popup-content"
                >
                  {close => (
                    <LogoutContainer isDarkTheme={isDarkTheme}>
                      <Para>Are you sure, you want to logout</Para>
                      <ButtonsContainer>
                        <CancelButton onClick={() => close()}>
                          Cancel
                        </CancelButton>
                        <ConfirmButton
                          //   className="confirmButton"
                          onClick={onLogout}
                        >
                          Confirm
                        </ConfirmButton>
                      </ButtonsContainer>
                    </LogoutContainer>
                  )}
                </Popup>
              </ListItem4>
            </ListElement>
          </NavBar>
        )
      }}
    </NxtContext.Consumer>
  )
}

export default withRouter(Header)
