import { Route, Routes, Outlet } from 'react-router-dom'
import {
  AuthLayout,
  Layout,
  Dashboard,
  Maps,
  PlReport,
  FlightSchedule,
  AircraftActivityReport,
  SignIn,
  NotFound,
  Home,
  VerificationCode,
  AccountBalance,
  AccountStatements,
  BudgetDocuments,
  FlightCostReport,
  PlaneDocuments,
  Upload,
  View,
  CheckAuth,
} from './pages/routes'


function App () {
  return (
    <main>
      <Routes>
        <Route index element={<Home />} />

        {/* auth route */}
        <Route
          path='/auth'
          element={
            <CheckAuth>
              <AuthLayout />
            </CheckAuth>
          }
        >
          <Route path='sign-in' element={<SignIn />} />
          <Route
            path='sign-in/verification-code'
            element={<VerificationCode />}
          />
        </Route>
        {/* end auth route */}

        {/* dashboard pages */}
        <Route
          path='/dashboard'
          element={
            <CheckAuth>
              <Layout />
            </CheckAuth>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path='maps' element={<Maps />} />
          <Route path='flight-schedule' element={<FlightSchedule />} />

          <Route path='reports' element={<Outlet />}>
            <Route path='p&l-report' element={<PlReport />} />
            <Route
              path='activity-report'
              element={<AircraftActivityReport />}
            />
            <Route path='account-balance' element={<AccountBalance />} />
            <Route path='accoutn-statements' element={<AccountStatements />} />
            <Route path='budget-documents' element={<BudgetDocuments />} />
            <Route path='flight-cost-report' element={<FlightCostReport />} />
            <Route path='plane-documents' element={<PlaneDocuments />} />
          </Route>
          <Route path='gellery-upload' element={<Upload />} />
          <Route path='gellery-view' element={<View />} />
        </Route>
        {/* end dashboard page */}

        {/* 404 Not Found Page */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </main>
  )
}

export default App
