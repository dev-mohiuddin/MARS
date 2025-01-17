import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { DatePicker } from '@/components/common/date-picker'
import { AccountStatementsTable } from '@/components/platform/account/account-statement-table'

function AccountStatements () {
  return (
    <div className=''>
      <CardTitle>Account Statement</CardTitle>
      <div className='mt-5 space-y-8'>
        <Card>
          <CardHeader>
            <div className='flex md:flex-row flex-col gap-4 md:items-center justify-between'>
              <CardTitle>Statement {new Date().getFullYear()}</CardTitle>
              <div className='flex gap-2'>
                <DatePicker />
                <Button variant='outline'>Export</Button>
              </div>
            </div>
          </CardHeader>
          <Separator />
          <CardContent className=''>
            <AccountStatementsTable />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default AccountStatements
