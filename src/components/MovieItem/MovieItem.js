import { Card, CardBody, CardHeading } from '../UI/Card'
import { IMG_CARD_SIZE } from '../../utils/constants/media'
import { API_IMG_BASE_PATH } from '../../utils/constants/api'
import Badge from '../UI/Badge'
import { Link } from 'react-router-dom'

export const MovieItem = movie => {
  const { title, name, media_type: type, id, poster_path: posterPath, vote_average: rating } = movie

  const movieName = title || name || '-'

  return (
    <Card>
      <Link to={`/${type}/${id}`}>
        <CardHeading className='overflow-hidden'>
          <img
            className='hover:scale-105 transition-transform duration-300'
            src={`${API_IMG_BASE_PATH}/${IMG_CARD_SIZE}/${posterPath}`}
            alt={`${movieName} poster`}
          />
        </CardHeading>
        <CardBody>
          <div className='flex justify-between items-start'>
            <h3 className='text-2xl mr-3 font-bold tracking-tight text-gray-900 dark:text-white'>
              {movieName}
            </h3>
            {rating > 0 && <Badge className='mt-1'>{rating}</Badge>}
          </div>
        </CardBody>
      </Link>
    </Card>
  )
}
