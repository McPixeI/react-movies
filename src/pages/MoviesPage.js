import React from 'react'
import { API_MEDIA_TYPE } from '../utils/constants/api'
import { PopularMedia } from '../partials/PopularMedia/PopularMedia'

export const MoviesPage = () => {
  const mediaType = API_MEDIA_TYPE.MOVIE
  return <PopularMedia mediaType={mediaType} />
}
