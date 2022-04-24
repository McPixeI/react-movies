import { API_IMG_BASE_PATH } from '../../utils/constants/api'

export const Hero = ({ media, children, ...rest }) => {
  return (
    <div
      style={{ backgroundImage: `url(${API_IMG_BASE_PATH}/w1280/${media.backdrop_path})`, backgroundSize: 'cover' }}
      className='w-full min-h-[400px] md:min-h-[520px] relative overflow-hidden mx-auto flex flex-col md:flex-row items-center px-4 py-12 md:py-24 mb-10' {...rest}
    >
      <div className='absolute bg-gradient-to-t from-bgdark bg-opacity-50 inset-0' />
      <div className='container mx-auto z-10'>
        <div className=' flex flex-col w-full lg:w-1/2 justify-center items-start pt-12 pb-20'>
          <h1 className='font-bold text-white text-4xl my-4'>{media.title || media.name}</h1>
          <p className='leading-normal mb-4 text-white'>{media.overview}</p>
          {children}
        </div>
      </div>
    </div>
  )
}
