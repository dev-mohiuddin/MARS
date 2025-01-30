import {
  Map,
  PieChart,
  Settings2,
  Gauge,
  MapPin,
  CalendarDays,
  File,
  Camera,
  PlaneTakeoff,
  Clock3,
  CircleGauge,
  FileSpreadsheet,
  Grid2X2Plus,
  SquareDashedKanban
} from 'lucide-react'

export const sidebarData = {
  navigation: [
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: Gauge
    },
    {
      title: 'Maps',
      url: '/dashboard/maps',
      icon: MapPin
    },
    {
      title: 'Flight Schedule',
      url: '/dashboard/flight-schedule',
      icon: CalendarDays
    }
  ],

  platform: [
    {
      title: 'Reports',
      roleAccess: ["admin", "user"],
      url: '#',
      icon: File,
      items: [
        {
          title: 'P&L Report',
          url: '/dashboard/reports/p&l-report'
        },
        {
          title: 'Aircraft Activity Report',
          url: '/dashboard/reports/activity-report'
        },
        {
          title: 'Flight Cost Report',
          url: '/dashboard/reports/flight-cost-report'
        },
        {
          title: 'Account Balance',
          url: '/dashboard/reports/account-balance'
        },
        {
          title: 'Account Statements',
          url: '/dashboard/reports/accoutn-statements'
        },
        {
          title: 'Budget Documents',
          url: '/dashboard/reports/budget-documents'
        },
        {
          title: 'Plane Documents',
          url: '/dashboard/reports/plane-documents'
        }
      ]
    },
    {
      title: 'Gallery',
      roleAccess: ["admin", "user"],
      url: '#',
      icon: Camera,
      items: [
        {
          title: 'View',
          url: '/dashboard/gellery-view'
        },
        {
          title: 'Upload',
          url: '/dashboard/gellery-upload'
        }
      ]
    },
    {
      title: 'Manage',
      roleAccess: ["admin"],
      url: '#',
      icon: SquareDashedKanban,
      items: [
        {
          title: 'Flight Activity',
          url: '/dashboard/manage/flight-activity'
        },
        {
          title: 'Invoices & Expenses',
          url: '/dashboard/manage/invoices-expenses'
        },
        {
          title: 'Credit Memos & Revenue',
          url: '/dashboard/manage/credit-memos-rev'
        },
        {
          title: 'Client Account Statements',
          url: '/dashboard/manage/client-account-state'
        },
        {
          title: 'Monthly Summary',
          url: '/dashboard/manage/monthly-summary'
        },
        {
          title: 'Plane Documents',
          url: '/dashboard/manage/plane-documents'
        },
        {
          title: 'Budget Documents',
          url: '/dashboard/manage/budget-documents'
        },
      ]
    },
    {
      title: 'Settings',
      roleAccess: ["admin"],
      url: '#',
      icon: Settings2,
      items: [
        {
          title: 'Owners',
          url: '/dashboard/settings/owners'
        },
        {
          title: 'Planes',
          url: '/dashboard/settings/planes'
        },
        {
          title: 'Locations',
          url: '/dashboard/settings/locations'
        },
        {
          title: 'Plane Doc Types',
          url: '/dashboard/settings/plane-doc-types'
        },
        {
          title: 'Flight Types',
          url: '/dashboard/settings/flight-types'
        },
        {
          title: 'Invoice Types',
          url: '/dashboard/settings/invoice-types'
        },
        {
          title: 'Expense Suppliers',
          url: '/dashboard/settings/expense-suppliers'
        },
        {
          title: 'Expense Categories',
          url: '/dashboard/settings/expense-categories'
        },
        {
          title: 'Revenue Categories',
          url: '/dashboard/settings/revenue-categories'
        }
      ]
    },
    {
      title: 'External API',
      roleAccess: ["admin"],
      url: '#',
      icon: Grid2X2Plus,
      items: [
        {
          title: 'QBO import',
          url: '/dashboard/external/qbo-import'
        },
        {
          title: 'Excel',
          url: '/dashboard/external/excel'
        },
        {
          title: 'Dynamics GP',
          url: '/dashboard/external/dynamics-gp'
        }
      ]
    }
  ],

}

export const dashboardData = {
  overview: [
    {
      icon: PlaneTakeoff,
      total: '10.9',
      title: 'total flights-2024',
      color: 'bg-red-300'
    },
    {
      icon: Clock3,
      total: '40.04',
      title: 'Total flights Time',
      color: 'bg-yellow-300'
    },
    {
      icon: CircleGauge,
      total: '10.9',
      title: 'Total fuel-ytd 2024',
      color: 'bg-green-300'
    },
    {
      icon: FileSpreadsheet,
      total: '10.9',
      title: 'Monthly sumary-nov,2024',
      color: 'bg-violet-300'
    }
  ],

  keyMetrics: [
    {
      label: 'Total Charter Revenue (Oct)',
      value: '$40',
    },
    {
      label: 'Total Charter Revenue (YTD)',
      value: '$14',
    },
    {
      label: 'Total Operating Expenses (Oct)',
      value: '$25',
    },
    {
      label: 'Total Operating Expenses (YTD)',
      value: '$18',
    },
    {
      label: 'Total Owner Hours (Oct)',
      value: '30',
    },
    {
      label: 'Total Charter Hours (Oct)',
      value: '35',
    }
  ]
}
