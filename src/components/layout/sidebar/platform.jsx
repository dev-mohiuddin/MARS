import { ChevronRight } from 'lucide-react'
import { useSelector } from 'react-redux'

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from '@/components/ui/collapsible'
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem
} from '@/components/ui/sidebar'
import { Link } from 'react-router-dom'

export function Platform ({ pathname, items }) {
  
  const { user } = useSelector(state => state.auth)

  return (
    <SidebarGroup>
      {/* <SidebarGroupLabel>Platform</SidebarGroupLabel> */}
      <SidebarMenu>
        {items.map(item => {
          const showItems = item?.roleAccess.includes(user?.role)
          return (
            <Collapsible
              key={item.title}
              asChild
              defaultOpen={item.isActive}
              className={`group/collapsible ${showItems ? 'block' : 'hidden'}`}
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton tooltip={item.title}>
                    {item.icon && <item.icon />}
                    <span>{item.title}</span>
                    <ChevronRight className='group-data-[state=open]/collapsible:rotate-90 ml-auto transition-transform duration-200' />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {item.items?.map(subItem => {
                      const isActive = pathname === subItem.url ? true : false
                      return (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton isActive={isActive} asChild>
                            <Link to={subItem.url}>
                              <span>{subItem.title}</span>
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      )
                    })}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          )
        })}
      </SidebarMenu>
    </SidebarGroup>
  )
}
