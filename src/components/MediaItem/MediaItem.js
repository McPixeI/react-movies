import { Card, CardBody, CardHeading } from '../UI/Card'
import { POSTER_SIZE } from '../../utils/constants/media'
import { API_IMG_BASE_PATH } from '../../utils/constants/api'
import Badge from '../UI/Badge'
import { Link } from 'react-router-dom'
import { Image } from '../Image/Image'
import { PhotographIcon } from '@heroicons/react/solid'

export const MediaItem = ({ media, mediaType }) => {
  const {
    title,
    name,
    media_type: type,
    id,
    poster_path: posterPath,
    vote_average: rating
  } = media

  const mediaName = title || name || '-'

  return (
    <Card className='h-full'>
      <Link to={`/${mediaType || type}/${id}`}>
        <CardHeading className='aspect-[2/3] overflow-hidden relative'>
          {posterPath
            ? <Image
                className='hover:scale-105 transition-transform duration-300'
                src={`${API_IMG_BASE_PATH}/${POSTER_SIZE.MEDIUM}/${posterPath}`}
                alt={`${mediaName} poster`}
                loading='lazy'
              />
            : <PhotographIcon className='absolute top-2/4 -translate-y-2/4 text-gray-400' />}
          {rating > 0 && <Badge className='absolute top-3 right-1 opacity-80'>{rating.toFixed(1)}</Badge>}
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
