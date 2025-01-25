import { sidebarData } from '@/assets/static-data/data'
import { useLocation } from 'react-router-dom'
import { Platform } from '@/components/layout/sidebar/platform'
import { Navigation } from './navigation'
import { NavUser } from './nav-user'
import { logo } from '@/assets'
import { Link } from 'react-router-dom'
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
  SidebarFooter
} from '@/components/ui/sidebar'

export function AppSidebar ({ ...props }) {
  const location = useLocation()

  return (
    <Sidebar collapsible='icon' {...props}>
      <SidebarHeader>
        <div className='w-full h-10 overflow-hidden'>
          <Link to={"/dashboard"}>
            <img
              className='w-40 h-full cursor-pointer object-cover'
              src={logo}
              alt='Mars'
            />
          </Link>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <Navigation
          pathname={location.pathname}
          items={sidebarData.navigation}
        />
        <Platform pathname={location.pathname} items={sidebarData.platform} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
