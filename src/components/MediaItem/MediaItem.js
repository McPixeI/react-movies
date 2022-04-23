import { Card, CardBody, CardHeading } from '../UI/Card'
import { BACKDROP_SIZE } from '../../utils/constants/media'
import { API_IMG_BASE_PATH } from '../../utils/constants/api'
import Badge from '../UI/Badge'
import { Link } from 'react-router-dom'

export const MediaItem = media => {
  const {
    title, name,
    media_type: type,
    id,
    poster_path: posterPath,
    vote_average: rating
  } = media

  const mediaName = title || name || '-'

  return (
    <Card className='h-full'>
      <Link to={`/${type}/${id}`}>
        <CardHeading className='aspect-[2/3] overflow-hidden'>
          <img
            className='hover:scale-105 transition-transform duration-300 object-cover'
            src={`${API_IMG_BASE_PATH}/${BACKDROP_SIZE.SMALL}/${posterPath}`}
            alt={`${mediaName} poster`}
          />
          {rating > 0 && <Badge className='absolute top-3 right-1 opacity-80'>{rating}</Badge>}
        </CardHeading>
        <CardBody>
          <h3 className='text-xl font-bold text-gray-900 dark:text-white'>
            {mediaName}
          </h3>
        </CardBody>
      </Link>
    </Card>
  )
}
