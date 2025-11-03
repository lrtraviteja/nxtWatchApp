/* eslint-disable no-nested-ternary */
import {withRouter, Link} from 'react-router-dom'
import './index.css'
import {AiFillHome} from 'react-icons/ai'
import {FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'

import {
  SideBarList,
  MainSideBar,
  FooterNote,
  ContactIcon,
  ContactSection,
  ListItem,
  SideBarTitle,
  ContactSites,
  ParaEl,
} from './styledComponent'

const SideBar = props => {
  const {match, isDarkTheme} = props
  const {path} = match
  return (
    <MainSideBar className={isDarkTheme ? 'darkSideBar' : 'lightSideBar'}>
      <SideBarList>
        <ListItem
          id="HOME"
          className={
            isDarkTheme ? path === '/' && 'light-bg' : path === '/' && 'dark-bg'
          }
        >
          <Link
            to="/"
            className={
              isDarkTheme ? 'link-element linkEl' : 'link-element2 linkEl'
            }
          >
            <AiFillHome
              className="home-icon"
              color={
                isDarkTheme
                  ? path === '/'
                    ? 'red'
                    : 'white'
                  : path === '/'
                  ? 'red'
                  : 'black'
              }
            />
            <SideBarTitle>Home</SideBarTitle>
          </Link>
        </ListItem>

        <ListItem
          id="TRENDING"
          className={
            isDarkTheme
              ? path === '/trending' && 'light-bg'
              : path === '/trending' && 'dark-bg'
          }
        >
          <Link
            to="/trending"
            className={
              isDarkTheme ? 'link-element linkEl' : 'linkEl link-element2'
            }
          >
            <FaFire
              color={
                isDarkTheme
                  ? path === '/trending'
                    ? 'red'
                    : 'white'
                  : path === '/trending'
                  ? 'red'
                  : 'black'
              }
              alt="trending"
            />
            <SideBarTitle>Trending</SideBarTitle>
          </Link>
        </ListItem>

        <ListItem
          id="GAMING"
          className={
            isDarkTheme
              ? path === '/gaming' && 'light-bg'
              : path === '/gaming' && 'dark-bg'
          }
        >
          <Link
            to="/gaming"
            className={
              isDarkTheme ? 'link-element linkEl' : 'link-element2 linkEl'
            }
          >
            <SiYoutubegaming
              color={
                isDarkTheme
                  ? path === '/gaming'
                    ? 'red'
                    : 'white'
                  : path === '/gaming'
                  ? 'red'
                  : 'black'
              }
              alt="gaming"
            />
            <SideBarTitle>Gaming</SideBarTitle>
          </Link>
        </ListItem>

        <ListItem
          className={
            isDarkTheme
              ? path === '/saved-videos' && 'light-bg'
              : path === '/saved-videos' && 'dark-bg'
          }
        >
          <Link
            to="/saved-videos"
            className={
              isDarkTheme ? 'link-element linkEl' : 'link-element2 linkEl'
            }
          >
            <CgPlayListAdd
              className="saveIcon"
              color={
                isDarkTheme
                  ? path === '/saved-videos'
                    ? 'red'
                    : 'white'
                  : path === '/saved-videos'
                  ? 'red'
                  : 'black'
              }
              alt="saved videos"
            />
            <SideBarTitle>Saved Videos</SideBarTitle>
          </Link>
        </ListItem>
      </SideBarList>
      <ContactSection>
        <ParaEl>CONTACT US</ParaEl>
        <ContactSites>
          <ContactIcon
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
            alt="facebook logo"
          />
          <ContactIcon
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
            alt="twitter logo"
          />
          <ContactIcon
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
            alt="linked in logo"
          />
        </ContactSites>
        <FooterNote>
          Enjoy! Now to see your channels and recommendations!
        </FooterNote>
      </ContactSection>
    </MainSideBar>
  )
}

export default withRouter(SideBar)
