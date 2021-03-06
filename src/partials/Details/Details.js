import { API_IMG_BASE_PATH } from '../../utils/constants/api'
import { BACKDROP_SIZE } from '../../utils/constants/media'
import { Badge } from '../../components/UI/Badge/Badge'
import { useMedia } from '../../queries/use-media'
import { Rating } from '../../components/UI/Rating/Rating'
import { Image } from '../../components/Image/Image'
import { PhotographIcon } from '@heroicons/react/solid'
import { ErrorBox } from '../../components/ErrorBox/ErrorBox'
import { DetailsSkeleton } from '../../utils/skeleton/parts/DetailsSkeleton'

export const Details = ({ mediaType, mediaId }) => {
  const { data, isLoading, isError } = useMedia(mediaType, mediaId)

  const {
    title,
    name,
    poster_path: posterPath,
    vote_count: voteCount,
    vote_average: voteAverage,
    genres,
    release_date: releaseDate,
    budget,
    revenue,
    runtime,
    production_companies: production
  } = data

  if (isLoading) return <DetailsSkeleton />

  if (isError) return <ErrorBox height={450} type='details' />

  return (
    <div className=' mx-auto flex flex-wrap'>
      <div className='hidden sm:block sm:w-1/4 aspect-[2/3] overflow-hidden relative'>
        {posterPath
          ? <Image
              alt={title || name}
              className='aspect-[2/3] shadow-lg'
              src={`${API_IMG_BASE_PATH}/${BACKDROP_SIZE.MEDIUM}/${posterPath}`}
            />
          : <PhotographIcon className='absolute top-2/4 -translate-y-2/4 text-gray-400' />}
      </div>
      <div className='sm:w-3/4 w-full sm:pl-10 sm:py-6 mt-6 sm:mt-0'>
        <h2 className='text-sm title-font text-gray-500 tracking-widest'>Details</h2>
        <h1 className='text-3xl title-font font-medium mb-1'>{title || name}</h1>
        <div className='mb-3'>
          {genres && genres.map(genre => <Badge className='inline-block mb-1' key={genre.id} variant='secondary'>{genre.name}</Badge>)}
        </div>
        <div className='flex mb-4'>

          <span className='flex items-center'>
            {voteAverage && <Rating count={voteAverage?.toFixed(1)} />}
            {voteAverage && <Badge className='ml-2'>{voteAverage?.toFixed(1)}</Badge>}
            {voteCount && <span className='ml-1 text-sm'>{`(${voteCount} reviews)`} </span>}
          </span>
        </div>
        <ul>
          {releaseDate && <li className='mb-1'><span className='text-gray-500 font-medium'>Release date: </span>{releaseDate}</li>}
          {budget > 0 && <li className='mb-1'><span className='text-gray-500 font-medium'>Budget: </span>{`${budget} $`}</li>}
          {revenue > 0 && <li className='mb-1'><span className='text-gray-500 font-medium'>Revenue: </span>{`${revenue} $`}</li>}
          {runtime && <li className='mb-1'><span className='text-gray-500 font-medium'>Run time: </span>{`${runtime} min`}</li>}
          {production &&
            <li className='mb-1'>
              <span className='text-gray-500 font-medium'>Production: </span>
              {production.map((prod, index) => (index ? ', ' : '') + prod.name)}
            </li>}
        </ul>
      </div>
    </div>
  )
}
