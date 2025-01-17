import { Navigate, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

function CheckAuth ({ children }) {
  const { isAuthenticated } = useSelector(state => state.auth)
  const location = useLocation()

  if (location.pathname === '/') {
    if (!isAuthenticated) {
      console.log('not ok')
      return <Navigate to='/auth/sign-in' />
    } else {
      console.log('ok')
      return <Navigate to={'/dashboard'} />
    }
  }

  if (!isAuthenticated && !location.pathname.includes('/sign-in')) {
    return <Navigate to={'/auth/sign-in'} />
  }

  if (isAuthenticated && location.pathname.includes('/sign-in')) {
    return <Navigate to={'/dashboard'} />
  }

  return children
}

export default CheckAuth
