import {
  BadgeCheck,
  Bell,
  ChevronsUpDown,
  CreditCard,
  LogOut
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { SidebarMenuButton, useSidebar } from '@/components/ui/sidebar'
import { avatar } from '@/assets'
import { useToast } from '@/hooks/use-toast'
import { useDispatch,useSelector } from 'react-redux'
import { setUser } from '@/redux/auth-slice/auth'

export function NavUser () {

  const {user} = useSelector(state => state.auth)
  const {toast} = useToast()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isMobile } = useSidebar()

  const handleLogout = () => {
    dispatch(setUser({ user: null, isAuthenticated: false }))
    localStorage.removeItem('persist:root')
    toast({
      title: "Log out successfully"
    })
    navigate("/auth/sign-in")
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <SidebarMenuButton
          size='lg'
          className='data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground'
        >
          <Avatar className='h-8 w-8 rounded-lg'>
            <AvatarImage src={avatar} alt={'IMG'} />
            <AvatarFallback className='rounded-lg'>{ user?.name && user?.name[0].toUpperCase()}</AvatarFallback>
          </Avatar>
          <div className='flex flex-col flex-1 text-left text-sm leading-tight'>
            <span className='truncate font-semibold'>{user?.name}</span>
            <span className='truncate text-xs'>{user?.email}</span>
          </div>
          <ChevronsUpDown className='ml-auto size-4' />
        </SidebarMenuButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className='w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg'
        // side={isMobile ? 'bottom' : 'end'}
        align='end'
        sideOffset={4}
      >
        <DropdownMenuLabel className='p-0 font-normal'>
          <div className='flex items-center gap-2 px-1 py-1.5 text-left text-sm'>
            <Avatar className='h-8 w-8 rounded-lg'>
              <AvatarImage src={avatar} alt={'IMG'} />
              <AvatarFallback className='rounded-lg'>{user?.name[0].toUpperCase()}</AvatarFallback>
            </Avatar>
            <div className='grid flex-1 text-left text-sm leading-tight'>
            <span className='truncate font-semibold'>{user?.name}</span>
            <span className='truncate text-xs'>{user?.email}</span>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup onClick={()=>navigate('/dashboard/profile')} >
          <DropdownMenuItem>
            <BadgeCheck />
            Profile
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout}>
          <LogOut />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
