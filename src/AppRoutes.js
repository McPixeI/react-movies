import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { MediaPage } from './pages/MediaPage'
import { MoviesPage } from './pages/MoviesPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { SearchPage } from './pages/SearchPage'
import { TvPage } from './pages/TvPage'

export default function AppRoutes () {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/movie' element={<MoviesPage />} />
      <Route path='/tv' element={<TvPage />} />
      <Route path='/:mediaType/:mediaId' element={<MediaPage />} />
      <Route path='/search' element={<SearchPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  )
}
