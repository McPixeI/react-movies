import { API_IMG_BASE_PATH } from '../../utils/constants/api'
import { BACKDROP_SIZE } from '../../utils/constants/media'
import { truncateText } from '../../utils/helpers'

export const Hero = ({ media, children, ...rest }) => {
  const { backdrop_path: backdropPath, title, name, overview } = media

  const truncatedOverview = truncateText(overview, 350)

  return (
    <div
      style={{ backgroundImage: `url(${API_IMG_BASE_PATH}/${BACKDROP_SIZE.LARGE}/${backdropPath})`, backgroundSize: 'cover', backgroundPosition: 'top' }}
      className='w-full h-[60vh] md:h-[54vh] relative overflow-hidden mx-auto flex flex-col md:flex-row items-center py-12 md:py-24 mb-10' {...rest}
    >
      <div className='absolute bg-gradient-to-t from-bgdark bg-opacity-50 inset-0' />
      <div className='container mx-auto z-10'>
        <div className=' flex flex-col w-full lg:w-1/2 justify-center items-start px-4 pt:8 pb-12 sm:pt-12 sm:pb-20'>
          <h1 className='font-bold text-white text-4xl my-4'>{title || name}</h1>
          <p className='leading-normal mb-4 text-white'>{truncatedOverview}</p>
          {children}
        </div>
      </div>
    </div>
  )
}
