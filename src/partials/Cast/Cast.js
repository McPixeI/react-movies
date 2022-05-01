import { Card, CardBody, CardHeading } from '../../components/UI/Card'
import { useCast } from '../../queries/use-cast'
import { API_IMG_BASE_PATH } from '../../utils/constants/api'
import { PROFILE_SIZE } from '../../utils/constants/media'
import { castSwiperConfig } from '../../utils/config/carousel-config'
import { Image } from '../../components/Image/Image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import { PhotographIcon } from '@heroicons/react/solid'
import { useId } from 'react'
import { useSkeleton } from '../../utils/hooks/use-skeleton'
import { ErrorBox } from '../../components/ErrorBox/ErrorBox'
import { MediaItemSkeleton } from '../../utils/skeleton/parts/MediItemSkeleton'

export const Cast = ({ mediaType, mediaId }) => {
  const { cast, isError, isLoading, isSuccess } = useCast(mediaType, mediaId)
  const skeletons = useSkeleton(6, 'cast')

  if (isError) return <ErrorBox height={420} type='cast' />

  return (
    <Swiper
      key={useId} // Key to force re-rendering swiper when cast array changes
      navigation
      modules={[Navigation]}
      slidesPerView={3}
      spaceBetween={8}
      breakpoints={castSwiperConfig}
      grabCursor
    >
      {isLoading && skeletons.map(skeleton =>
        <SwiperSlide key={skeleton.id}>
          <MediaItemSkeleton />
        </SwiperSlide>)}

      {isSuccess && cast.map(person => {
        return (
          <SwiperSlide key={person.id}>
            <Card key={person.id} className='h-full'>
              <CardHeading className='relative aspect-[2/3] overflow-hidden'>
                {person.profile_path
                  ? <Image
                      className='w-full object-cover aspect-[2/3]'
                      src={`${API_IMG_BASE_PATH}/${PROFILE_SIZE.MEDIUM}${person.profile_path}`}
                      alt={person.name}
                      loading='lazy'
                    />
                  : <PhotographIcon className='absolute top-2/4 -translate-y-2/4 text-gray-400' />}
              </CardHeading>
              <CardBody>
                <p className='font-medium text-md mb-1'>{person.name}</p>
                <p className='font-normal text-sm'>{person.character && `"${person.character}"`}</p>
              </CardBody>
            </Card>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
