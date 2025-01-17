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
  SignUp,
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
  RoleGuard,
  ExpensesCategorys,
  ExpensesSuppliers,
  FlightTypes,
  InvoiceTypes,
  Location,
  Owners,
  Planes,
  RevenueCetegories,
  BudgetDoc,
  ClientAccountSate,
  CreditMemosRev,
  FlightActivity,
  InvoicesExpenses,
  MonthlySummary,
  DynamicsGP,
  Excel,
  QBOImport,
  PlanDoc,
  PlaneDocTypes
} from './pages/routes'
import AddOwner from './components/platform/settings/owner/AddOwner'
import AddPlane from './components/platform/settings/plane/AddPlane'
import AddLocation from './components/platform/settings/location/AddLocation'
import AddPlaneDocType from './components/platform/settings/planedoctype/AddPlaneDocType'
import AddPlaneFlightType from './components/platform/settings/planeflighttype/AddPlaneFlightType'

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

          {/* for admin */}
          <Route
            path='*'
            element={
              <RoleGuard roles={['admin']}>
                <Outlet />
              </RoleGuard>
            }
          >
            <Route path='manage' element={<Outlet />}>
              <Route path='flight-activity' element={<FlightActivity />} />
              <Route path='invoices-expenses' element={<InvoicesExpenses />} />
              <Route path='credit-memos-rev' element={<CreditMemosRev />} />
              <Route
                path='client-account-state'
                element={<ClientAccountSate />}
              />
              <Route path='monthly-summary' element={<MonthlySummary />} />
              <Route path='plane-documents' element={<PlanDoc />} />
              <Route path='budget-documents' element={<BudgetDoc />} />
            </Route>

            <Route path='settings' element={<Outlet />}>
              <Route path='owners' element={<Owners />} />
              <Route path='owners/add' element={<AddOwner />} />

              <Route path='planes' element={<Planes />} />
              <Route path='planes/add' element={<AddPlane />} />

              <Route path='locations' element={<Location />} />
              <Route path='locations/add' element={<AddLocation />} />

              <Route path='plane-doc-types' element={<PlaneDocTypes />} />
              <Route path='plane-doc-types/add' element={<AddPlaneDocType />} />

              <Route path='flight-types' element={<FlightTypes />} />
              <Route path='flight-types/add' element={<AddPlaneFlightType />} />

              <Route path='invoice-types' element={<InvoiceTypes />} />
              <Route path='expense-suppliers' element={<ExpensesSuppliers />} />
              <Route
                path='expense-categories'
                element={<ExpensesCategorys />}
              />
              <Route
                path='revenue-categories'
                element={<RevenueCetegories />}
              />
            </Route>

            <Route path='external' element={<Outlet />}>
              <Route path='qbo-import' element={<QBOImport />} />
              <Route path='excel' element={<Excel />} />
              <Route path='dynamics-gp' element={<DynamicsGP />} />
            </Route>
          </Route>
          {/* end for admin */}

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
