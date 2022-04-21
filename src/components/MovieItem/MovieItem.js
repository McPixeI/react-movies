import { Card, CardBody, CardHeading } from '../UI/Card'
import { IMG_CARD_SIZE } from '../../utils/constants/media'
import { API_IMG_BASE_PATH } from '../../utils/constants/api'

export const MovieItem = movie => {
  const { title, name, poster_path } = movie

  const movieName = title || name || ''

  return (
    <Card>
      <CardHeading>
        <img
          className='rounded-t-lg'
          src={`${API_IMG_BASE_PATH}/${IMG_CARD_SIZE}/${poster_path}`}
          alt={`${movieName} poster`}
        />
      </CardHeading>
      <CardBody>
        <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
          {movieName}
        </h5>
      </CardBody>
    </Card>
  )
}
