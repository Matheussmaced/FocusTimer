import { Routes, Route } from 'react-router-dom'

import { MinutesUser } from '../pages/MinutesUser'
import { BodyTimer } from '../pages/BodyTimer'
import { DefaultLayout } from '../../layout/defaultLayout'

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<BodyTimer />} />
          <Route path="minutesUser" element={<MinutesUser />} />
        </Route>
      </Routes>
    </>
  )
}
