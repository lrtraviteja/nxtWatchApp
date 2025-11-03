import './index.css'

import {BsDot} from 'react-icons/bs'
import {Link} from 'react-router-dom'

import {} from '../VideoItem/styledComponent'

import {
  VideoItem,
  VideoStats,
  VideoTitle,
  TrendingVideoViews,
  TrendingVideoPostDate,
  ChannelName,
  VideoThumbnail,
  VideoContainer,
  TrendingVideosStats,
} from './styledComponent'

const TrendingVideoItem = props => {
  const {video} = props
  const {channel, id, publishedAt, thumbnailUrl, title, viewCount} = video
  const {name} = channel

  return (
    <VideoItem>
      <Link to={`/videos/${id}`} className="link">
        <VideoContainer>
          <VideoThumbnail src={thumbnailUrl} alt="video thumbnail" />
          <TrendingVideosStats>
            <VideoTitle>{title}</VideoTitle>
            <ChannelName>{name}</ChannelName>
            <VideoStats>
              <TrendingVideoViews>{viewCount} views</TrendingVideoViews>
              <BsDot className="bsDot" color="grey" />
              <TrendingVideoPostDate>{publishedAt}</TrendingVideoPostDate>
            </VideoStats>
          </TrendingVideosStats>
        </VideoContainer>
      </Link>
    </VideoItem>
  )
}

export default TrendingVideoItem
