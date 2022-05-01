import { Card, CardBody } from '../../components/UI/Card/Card'

export const MediaItemSkeleton = () => {
  return (
    <Card className='h-full opacity-60 animate-pulse'>
      <div className='aspect-[2/3] bg-gray-700 dark:bg-gray-700 col-span-2 mb-2 overflow-hidden relative' />
      <CardBody>
        <div className='h-3.5 bg-gray-700 dark:bg-gray-700 rounded mb-2' />
        <div className='h-2.5 bg-gray-700 dark:bg-gray-700 rounded w-20 mb-10' />
      </CardBody>
    </Card>
  )
}
