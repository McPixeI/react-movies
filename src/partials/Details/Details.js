import { API_IMG_BASE_PATH } from '../../utils/constants/api'
import { BACKDROP_SIZE } from '../../utils/constants/media'
import { Section } from '../../containers/Section/Section'
import { Badge } from '../../components/UI/Badge/Badge'
import { useMedia } from '../../queries/use-media'
import { Rating } from '../../components/UI/Rating/Rating'

export const Details = ({ mediaType, mediaId }) => {
  const { data } = useMedia(mediaType, mediaId)

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

  return (
    <Section>
      <div className=' mx-auto flex flex-wrap'>
        <img alt={title || name} className='shadow-lg sm:w-1/4 w-full object-cover' src={`${API_IMG_BASE_PATH}/${BACKDROP_SIZE.LARGE}/${posterPath}`} />
        <div className='sm:w-3/4 w-full sm:pl-10 sm:py-6 mt-6 sm:mt-0'>
          <h2 className='text-sm title-font text-gray-500 tracking-widest'>Details</h2>
          <h1 className='text-3xl title-font font-medium mb-1'>{title || name}</h1>
          <div className='mb-3'>
            {genres && genres.map(genre => <Badge key={genre.id} variant='secondary'>{genre.name}</Badge>)}
          </div>
          <div className='flex mb-4'>

            <span className='flex items-center'>
              <Rating count={voteAverage?.toFixed(1)} />
              {voteAverage && <Badge className='ml-2'>{voteAverage?.toFixed(1)}</Badge>}
              {voteCount && <span className='ml-1 text-sm'>{`(${voteCount} reviews)`} </span>}
            </span>
          </div>
          <ul>
            <li className='mb-1'><span className='font-medium'>Release date: </span>{releaseDate || '-'}</li>
            <li className='mb-1'><span className='font-medium'>Budget: </span> {`${budget} $` || '-'}</li>
            <li className='mb-1'><span className='font-medium'>Revenue: </span> {`${revenue} $` || '-'}</li>
            <li className='mb-1'><span className='font-medium'>Run time: </span>{`${runtime} min` || '-'}</li>
            <li className='mb-1'><span className='font-medium'>Production: </span> {production ? production.map(prod => `${prod.name}, `) : '-'}</li>
          </ul>
        </div>
      </div>
    </Section>
  )
}
