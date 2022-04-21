import { Card, CardBody, CardHeading } from '../UI/Card'

export const MovieItem = movie => {
  const { image, title } = movie
  return (
    <Card>
      <CardHeading>
        <img class='rounded-t-lg' src={image} alt='Example image' />
      </CardHeading>
      <CardBody>
        <h5 class='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
          {title}
        </h5>
      </CardBody>
    </Card>
  )
}
