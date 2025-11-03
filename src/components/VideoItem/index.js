// HOME VIDEO ITEM

import './index.css'
import {Link} from 'react-router-dom'
import {BsDot} from 'react-icons/bs'
import {
  VideoListItem,
  VideoInfoContainer,
  VideoInfo,
  VideoImage,
  VideoTitle,
  ChannelName,
  VideoStats,
  VideoViews,
  VideoPostDate,
  ChannelLogo,
} from './styledComponent'

const VideoItem = props => {
  const {video} = props
  const {channel, id, publishedAt, thumbnailUrl, title, viewCount} = video // thumbnailUrl changes
  const {name, profileImageUrl} = channel

  return (
    <VideoListItem>
      <Link to={`/videos/${id}`} className="linkElement">
        <VideoImage src={thumbnailUrl} alt="video thumbnail" />
        <VideoInfoContainer>
          <ChannelLogo src={profileImageUrl} alt="channel logo" />
          <VideoInfo>
            <VideoTitle>{title}</VideoTitle>
            <ChannelName>{name}</ChannelName>
            <VideoStats>
              <VideoViews>{viewCount} views</VideoViews>
              <BsDot color="grey" />
              <VideoPostDate>{publishedAt}</VideoPostDate>
            </VideoStats>
          </VideoInfo>
        </VideoInfoContainer>
      </Link>
    </VideoListItem>
  )
}

export default VideoItem
