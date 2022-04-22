import { Card, CardBody, CardHeading } from '../UI/Card'
import { IMG_CARD_SIZE } from '../../utils/constants/media'
import { API_IMG_BASE_PATH } from '../../utils/constants/api'
import Badge from '../UI/Badge'

export const MovieItem = movie => {
  const { title, name, poster_path: posterPath, vote_average: rating } = movie

  const movieName = title || name || '-'

  return (
    <Card>
      <CardHeading>
        <img
          src={`${API_IMG_BASE_PATH}/${IMG_CARD_SIZE}/${posterPath}`}
          alt={`${movieName} poster`}
        />
      </CardHeading>
      <CardBody>
        <div className='flex justify-between items-start'>
          <h3 className='text-2xl mr-3 font-bold tracking-tight text-gray-900 dark:text-white'>
            {movieName}
          </h3>
          <Badge className='mt-1'>{rating}</Badge>
        </div>
      </CardBody>
    </Card>
  )
}
