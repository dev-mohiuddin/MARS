import AuthLayout from "@/components/layout/auth/auth-layout";
import Layout from "@/components/layout/dashboard-layout";
import Dashboard from "./navigation/dashboard";
import Maps from "./navigation/maps";
import PlReport from "./platform/reports/pl-report";
import FlightSchedule from "./navigation/flight-schedule";
import AircraftActivityReport from "./platform/reports/aircraft-activity-report";
import SignIn from "./auth/sign-in";
import NotFound from "./utils/not-found";
import SignUp from "./auth/sign-up";
import Home from "./langing-page/home";
import VerificationCode from "./auth/verification-code";
import AccountBalance from "./platform/reports/account-balance"
import AccountStatements from "./platform/reports/account-statements";
import BudgetDocuments from "./platform/reports/budget-documents"
import FlightCostReport from "./platform/reports/flight-cost-report";
import PlaneDocuments from "./platform/reports/plane-documents";
import Upload from "./platform/gallery/upload";
import View from "./platform/gallery/view";
import CheckAuth from "@/components/common/check-auth";
import RoleGuard from "@/components/common/role-guard";
import ExpensesCategorys from "./platform/settings/expenses-categories";
import ExpensesSuppliers from "./platform/settings/expenses-suppliers";
import FlightTypes from "./platform/settings/flight-types";
import InvoiceTypes from "./platform/settings/invoice-types";
import Location from "./platform/settings/location";
import Owners from "./platform/settings/owners";
import Planes from "./platform/settings/planes";
import RevenueCetegories from "./platform/settings/revenue-categories";
import BudgetDoc from "./platform/manage/budget-doc";
import PlanDoc from "./platform/manage/plane-doc";
import PlaneDocTypes from "./platform/settings/plane-doc-types";
import ClientAccountSate from "./platform/manage/client-account-statements";
import CreditMemosRev from "./platform/manage/credit-memos-rev";
import FlightActivity from "./platform/manage/flight-activity";
import InvoicesExpenses from "./platform/manage/invoices-expenses";
import MonthlySummary from "./platform/manage/monthly-summary";
import DynamicsGP from "./platform/external-api/dynamics-gp";
import Excel from "./platform/external-api/excel";
import QBOImport from "./platform/external-api/qbo-import";


export {
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
}