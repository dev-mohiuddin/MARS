import * as React from 'react'
import { ChevronsUpDown, LogOut, BadgeCheck, Plane } from 'lucide-react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Separator } from '@/components/ui/separator'
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from '@/components/ui/sidebar'
import { useToast } from '@/hooks/use-toast'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '@/redux/auth-slice/auth'
import { useNavigate } from 'react-router-dom'

export function AircraftSwitcher () {
    const aircraft = [
        {
            name: 'MARS12',
            logo: Plane,
            plan: 'Enterprise',
        },
        {
            name: 'MARS13',
            logo: Plane,
            plan: 'Startup',
        },
        {
            name: 'MARS14',
            logo: Plane,
            plan: 'Free',
        },
    ]
    const { toast } = useToast()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { user } = useSelector(state => state.auth)
    const { isMobile } = useSidebar()
    const [activeAircraft, setActiveAircraft] = React.useState(aircraft[0])

    const handleLogout = () => {
        dispatch(setUser({ user: null, isAuthenticated: false }))
        localStorage.removeItem('persist:root')
        toast({
            title: 'Log out successfully',
        })
        navigate('/auth/sign-in')
    }

    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <SidebarMenuButton
                            size='lg'
                            className='data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground dark:border'
                        >
                            <div className='flex aspect-square size-8 items-center justify-center rounded-lg bg-primary dark:bg-secondary text-sidebar-primary-foreground'>
                                <activeAircraft.logo className='size-4' />
                            </div>
                            <div className='grid flex-1 text-left text-sm leading-tight'>
                                <span className='truncate font-semibold'>{activeAircraft.name}</span>
                                <span className='truncate text-xs'>{activeAircraft.aircraft}</span>
                            </div>
                            <ChevronsUpDown className='ml-auto' />
                        </SidebarMenuButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        className='w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg'
                        align='start'
                        // side={isMobile ? 'bottom' : 'right'}
                        sideOffset={4}
                    >
                        <DropdownMenuLabel className='text-xs text-muted-foreground'>Aircrafts</DropdownMenuLabel>
                        {aircraft.map((item, index) => (
                            <DropdownMenuItem
                                key={item.name}
                                onClick={() => setActiveAircraft(item)}
                                className='gap-2 p-2'
                            >
                                <div className='flex size-6 items-center justify-center rounded-sm border'>
                                    <item.logo className='size-4 shrink-0' />
                                </div>
                                {item.name}
                                <DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>
                            </DropdownMenuItem>
                        ))}
                        <DropdownMenuSeparator />
                        <div className='p-1 flex flex-col gap-1'>
                            <DropdownMenuGroup className='cursor-pointer' onClick={() => navigate('/dashboard/profile')}>
                                <DropdownMenuItem>
                                    <BadgeCheck />
                                    Profile
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                            <Separator />
                            <DropdownMenuItem className="cursor-pointer" onClick={handleLogout}>
                                <LogOut />
                                Log out
                            </DropdownMenuItem>
                        </div>
                    </DropdownMenuContent>
                </DropdownMenu>
            </SidebarMenuItem>
        </SidebarMenu>
    )
}
