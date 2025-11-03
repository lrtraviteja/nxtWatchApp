import React from 'react'

const NxtContext = React.createContext({
  buyPremiumShow: true,
  isDarkTheme: false,
  savedVideosList: [],
  likedVideosList: [],
  dislikedVideosList: [],
  isPopupOpened: false,
  changeTheme: () => {},
  onClosedPremiumView: () => {},
  addLikedVideosToList: () => {},
  addDislikedVideosToList: () => {},
  addSaveVideoToList: () => {},
  onPopupClosed: () => {},
  onPopupOpened: () => {},
})

export default NxtContext
