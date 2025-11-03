import {Link} from 'react-router-dom'
import {
  GamingVideosListItem,
  GamingVideoImage,
  GamingChannelInfo,
  GamingVideoWatching,
  GamingVideoTitle,
} from './styledComponent'

const GamingVideoItem = props => {
  const {video} = props
  const {id, thumbnailUrl, title, viewCount} = video
  return (
    <GamingVideosListItem>
      <Link to={`/videos/${id}`} className="linkElement">
        <GamingVideoImage src={thumbnailUrl} alt="video thumbnail" />
        <GamingChannelInfo>
          <GamingVideoTitle>{title}</GamingVideoTitle>
          <GamingVideoWatching>
            {viewCount} Watching Worldwide
          </GamingVideoWatching>
        </GamingChannelInfo>
      </Link>
    </GamingVideosListItem>
  )
}

export default GamingVideoItem
