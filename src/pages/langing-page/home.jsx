import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
function Home () {
  const navigation = useNavigate()

  useEffect(() => {
    navigation('/auth/sign-in')
  }, [])
  
  return null
}

export default Home
