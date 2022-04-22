import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { MediaPage } from './pages/MediaPage'
import { NotFoundPage } from './pages/NotFoundPage'

export default function AppRoutes () {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/:mediaType/:mediaId' element={<MediaPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  )
}
