import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { useNavigate } from 'react-router-dom'

function NotFound () {
  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }

  return (
    <div className='flex justify-center items-center h-screen w-full'>
      <Card className='w-[350px] md:w-[550px] pt-5'>
        <CardContent>
          <div className='text-center'>
            <h1 className='text-6xl font-bold'>404</h1>
            <p className='text-xl mt-4'>
              Oops! The page you are looking for doesn't exist.
            </p>
          </div>
        </CardContent>
        <CardFooter className='flex justify-center'>
          <Button onClick={goBack}>Go Back</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default NotFound
