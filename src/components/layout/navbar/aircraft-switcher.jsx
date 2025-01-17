import * as React from 'react'
import {
  ChevronsUpDown,
  Plus,
  AudioWaveform,
  Command,
  GalleryVerticalEnd,
  Plane
} from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar
} from '@/components/ui/sidebar'

import { useSelector } from 'react-redux'

export function AircraftSwitcher () {

  const { user } = useSelector(state => state.auth)

  const aircraft = [
    {
      name: 'MARS12',
      logo: Plane,
      plan: 'Enterprise'
    },
    {
      name: 'MARS13',
      logo: Plane,
      plan: 'Startup'
    },
    {
      name: 'MARS14',
      logo: Plane,
      plan: 'Free'
    }
  ]

  const { isMobile } = useSidebar()
  const [activeAircraft, setActiveAircraft] = React.useState(aircraft[0])
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
                <span className='truncate font-semibold'>
                  {activeAircraft.name}
                </span>
                <span className='truncate text-xs'>
                  {activeAircraft.aircraft}
                </span>
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
            <DropdownMenuLabel className='text-xs text-muted-foreground'>
              Aircrafts
            </DropdownMenuLabel>
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
            <DropdownMenuItem className={`gap-2 p-2 ${user?.role === "admin" ? "flex" : "hidden" }`}>
              <div className='flex size-6 items-center justify-center rounded-md border bg-background'>
                <Plus className='size-4' />
              </div>
              <div className='font-medium text-muted-foreground'>
                Add Aircraft
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
