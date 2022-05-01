import React from 'react'
import { API_MEDIA_TYPE } from '../utils/constants/api'

import { PopularMedia } from '../partials/PopularMedia/PopularMedia'

export const TvPage = () => {
  const mediaType = API_MEDIA_TYPE.TV
  return <PopularMedia mediaType={mediaType} />
}
