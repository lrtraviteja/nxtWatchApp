/* eslint-disable no-nested-ternary */
import styled from 'styled-components'

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  height: 7vh;
`
export const Container = styled.div``

export const SampleButton = styled.button`
  cursor: pointer;
  outline: none;
  background-color: transparent;
`

export const LogoutContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#ffffff' : '#0f0f0f')};
  color: ${props => (props.isDarkTheme ? 'black' : 'grey')};
  max-height: 230px;
  max-width: 290px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: grey;
  height: 250px;
  width: 400px;
  gap: 50px;
`
export const Menu = styled.div`
  color: ${props => (props.isDarkTheme ? 'grey' : 'black')};
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#0f0f0f')};
  overflow-x: hidden;
  overflow-y: scroll;
  max-height: 240px;
  max-width: 290px;
  border-radius: 12px;
  padding: 10px;
  height: 250px;
  width: 400px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const LogoutContainer3 = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#0f0f0f')};
  height: 210px;
  width: 290px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  gap: 30px;
  color: grey;
  height: 250px;
  width: 400px;
  gap: 30px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const ButtonsContainer = styled.div`
  display: flex;
  gap: 34px;
  background-color: transparent;
`

export const ConfirmButton = styled.button`
  border: none;
  cursor: pointer;
  outline: none;
  background-color: #1c80f0;
  border-radius: 4px;
  padding: 8px 15px;
  color: white;
`
export const CancelButton = styled.button`
  background-color: transparent;
  border: 1px solid grey;
  cursor: pointer;
  outline: none;
  border-radius: 4px;
  padding: 8px 15px;
  color: grey;
`

export const HeaderWebsiteLogo = styled.img`
  height: 18px;
`
export const NavTogglesContainer = styled.div``
export const ThemeButton = styled.button`
  border: none;
  cursor: pointer;
  outline: none;
  background-color: transparent;
`
export const ProfileImg = styled.img`
  height: 22px;

  @media screen and (min-width: 768px) {
    height: 22px;
  }
`

export const LogoutButton = styled.button`
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  font-size: 12px;
  font-weight: normal;
  padding: 4px 10px;
  background-color: transparent;
  border: ${props =>
    props.isDarkTheme ? '1px solid white' : '1px solid grey'};
  color: ${props => (props.isDarkTheme ? 'white' : 'grey')};
`

export const LogoutButton2 = styled.button`
  cursor: pointer;
  outline: none;
  font-size: 24px;
  padding-top: 5px;
  background-color: transparent;
  border: none;
  display: inline;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const LogoutButton3 = styled.button`
  cursor: pointer;
  outline: none;
  font-size: 24px;
  padding-top: 5px;
  background-color: transparent;
  border: none;
  display: inline;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const Para = styled.p``

export const MobileMainSidebar = styled.div`
  background-color: transparent;
  color: ${props => (props.isDarkTheme ? 'grey' : 'black')};
`

export const MobileSideBarList = styled.ul`
  list-style-type: none;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 270px;
  width: 100%;
`

export const MobileListItem1 = styled.li`
  background-color: ${props => {
    if (props.isDarkTheme) {
      if (props.path === '/') {
        return '#f1f5f9'
      }
      return 'transparent'
    }
    if (props.path === '/') {
      //   return '#f1f5f9'
      return '#383838'
    }
    // return '#383838'
    return 'transparent'
  }};
`
export const MobileListItem2 = styled.li`
  background-color: ${props => {
    if (props.isDarkTheme) {
      if (props.path === '/trending') {
        return '#f1f5f9'
      }
      //   return '#383838'
      return 'transparent'
    }
    if (props.path === '/trending') {
      //   return '#f1f5f9'
      return '#383838'
    }
    // return '#383838'
    return 'transparent'
  }};
`
export const MobileListItem3 = styled.li`
  background-color: ${props => {
    if (props.isDarkTheme) {
      if (props.path === '/gaming') {
        return '#f1f5f9'
      }
      //   return '#383838'

      return 'transparent'
    }
    if (props.path === '/gaming') {
      //   return '#f1f5f9'
      return '#383838'
    }
    // return '#383838'
    return 'transparent'
  }};
`
export const MobileListItem4 = styled.li`
  background-color: ${props => {
    if (props.isDarkTheme) {
      if (props.path === '/saved-videos') {
        return '#f1f5f9'
      }
      //   return '#383838'
      return 'transparent'
    }
    if (props.path === '/saved-videos') {
      //   return '#f1f5f9'
      return '#383838'
    }
    // return '#383838'
    return 'transparent'
  }};
`

export const MobileSideBarTitle = styled.p`
  margin: 0px;
  font-size: 20px;
`

export const MobileContactSection = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const MobileContactSites = styled.div`
  display: flex;
  gap: 15px;
`
export const MobileContactIcon = styled.img`
  height: 50px;
`

export const MobileFooterNote = styled.p`
  color: grey;
  text-align: center;
`
export const ContactUsPara = styled.p`
  color: grey;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
`
export const ListElement = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  padding: 0px;
  gap: 10px;
  margin: 0px;
`

export const ListItem = styled.li`
  display: flex;
  align-items: center;
`
export const ListItem2 = styled.li`
  display: flex;
  align-items: center;
  //   display: block;
  @media screen (min-width: 768px) {
    display: none;
  }
`
export const ListItem3 = styled.li`
  // profile
  //   display: block;
  display: flex;
  align-items: center;

  @media screen (min-width: 768px) {
    display: none;
  }
`
export const ListItem4 = styled.li`
  // Logout button
  display: none;
  @media screen and (min-width: 768px) {
    // display: block;
    display: flex;
    align-items: center;
  }
`
export const ListItem5 = styled.li`
  // logout icon
  //   display: block;
  display: flex;
  align-items: center;
  @media screen (min-width: 768px) {
    display: none;
  }
`
export const CloseButton = styled.button`
  margin: 10px 10px 0px 0px;
  align-self: flex-end;
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none;
`
