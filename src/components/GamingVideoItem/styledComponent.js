import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const GamingVideosListItem = styled.li`
  width: calc(33.5% - 10px);

  @media screen and (min-width: 768px) {
    width: calc(24.5% - 10px);
  }
`
export const LinkEl = styled(Link)`
  color: ${props => (props.isDarkTheme ? 'grey' : 'black')};
  text-decoration: none;
`
export const GamingVideoImage = styled.img`
  width: 100%;
  border-radius: 15px;
`
export const GamingChannelInfo = styled.div``
export const GamingVideoTitle = styled.p`
  font-size: 17px;
  margin-top: 5px;
  font-weight: 500;
`
export const GamingVideoWatching = styled.p`
  font-size: 14px;
  margin-top: 4px;
`
