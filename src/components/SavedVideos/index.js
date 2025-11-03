import './index.css'
// import {CgPlayListAdd} from 'react-icons/cg'
import {MdPlaylistAdd} from 'react-icons/md'
import Header from '../Header'
import SavedVideosItem from '../SavedVideosItem'
import NxtContext from '../../context/context'
import SideBar from '../SideBar'
import {
  SavedVideosTitle,
  SaveImgContainer,
  SavedVideosList,
  SavedVideoHeader,
  SavedVideosSection,
  MainContainer,
  MainSavedVideosPage,
  NoSavedVideosContainer,
  NotFoundHeading,
  NotFoundImg,
  NotFoundText,
} from './styledComponent'

const SavedVideos = () => (
  <NxtContext.Consumer>
    {value => {
      const {isDarkTheme, savedVideosList} = value
      return (
        <MainSavedVideosPage
          data-testid="savedVideos"
          isDarkTheme={isDarkTheme}
        >
          <Header />
          <MainContainer>
            <SideBar isDarkTheme={isDarkTheme} />
            <SavedVideosSection>
              <SavedVideoHeader isDarkTheme={isDarkTheme}>
                <SaveImgContainer isDarkTheme={isDarkTheme}>
                  <MdPlaylistAdd className="CgPlayListAdd" color="red" />
                </SaveImgContainer>
                <SavedVideosTitle>Saved Videos</SavedVideosTitle>
              </SavedVideoHeader>
              {savedVideosList.length === 0 ? (
                <NoSavedVideosContainer>
                  <NotFoundImg
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                    alt="no saved videos"
                  />
                  <NotFoundHeading>No saved videos found</NotFoundHeading>
                  <NotFoundText>
                    You can save your videos while watching them
                  </NotFoundText>
                </NoSavedVideosContainer>
              ) : (
                <SavedVideosList>
                  {savedVideosList.map(each => (
                    <SavedVideosItem key={each.id} video={each} />
                  ))}
                </SavedVideosList>
              )}
            </SavedVideosSection>
          </MainContainer>
        </MainSavedVideosPage>
      )
    }}
  </NxtContext.Consumer>
)

export default SavedVideos
