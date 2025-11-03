import {BsDot} from 'react-icons/bs'
import {Link} from 'react-router-dom'

import {
  VideoItem,
  VideoStats,
  VideoTitle,
  SavedVideoViews,
  SavedVideoPostDate,
  ChannelName,
  VideoThumbnail,
  VideoContainer,
  SavedVideosStats,
} from './styledComponent'

const SavedVideosItem = props => {
  const {video} = props
  const {channel, id, publishedAt, thumbnailUrl, title, viewCount} = video
  const {name} = channel

  return (
    <VideoItem>
      <Link to={`/videos/${id}`} className="link">
        <VideoContainer>
          <VideoThumbnail src={thumbnailUrl} alt="video thumbnail" />
          <SavedVideosStats>
            <VideoTitle>{title}</VideoTitle>
            <ChannelName>{name}</ChannelName>
            <VideoStats>
              <SavedVideoViews>{viewCount} views</SavedVideoViews>
              <BsDot className="bsDot" color="grey" />
              <SavedVideoPostDate>{publishedAt}</SavedVideoPostDate>
            </VideoStats>
          </SavedVideosStats>
        </VideoContainer>
      </Link>
    </VideoItem>
  )
}

export default SavedVideosItem
