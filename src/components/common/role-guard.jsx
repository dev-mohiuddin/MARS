import { useSelector } from "react-redux"

const ROLES = ['user', 'admin']
const RoleGuard = ({children, roles = ROLES, showFallback = true }) => {

  const {user} = useSelector(state => state.auth)

  if (roles.includes(user?.role)) return children

  if (!showFallback) return null
  return (
    <div className='min-h-[300px] flex justify-center items-center flex-col'>
      <h1 className='text-2xl font-bold'>Access Denied</h1>
      <p className='mt-2'>You don&apos;t have permission to access this page</p>
    </div>
  )
}

export default RoleGuard
