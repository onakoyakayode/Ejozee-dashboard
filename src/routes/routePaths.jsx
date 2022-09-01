import Main from "../Components/Main/Main";
import Overview from "../Components/Overview/Overview";
import PendingErrands from "../Components/Errands/Pending-Errands/PendingErrands"
import CompletedErrands from "../Components/Errands/Completed-Errands/CompletedErrands"
import VerifiedRunner from "../Components/Runners/VerifiedRunners/VerifiedRunners";
import UnverifiedRunner from "../Components/Runners/UnverifiedRunners/UnverifiedRunners";
import Groceries from "../Components/Partners/Groceries/Groceries";
import Login from "../Components/Admin/Admin-Login/Login/Login";
import AddAdmin from "../Components/Admin/Add Admin/Add-Admin";






export const pageRoutes = [
    {
        path: '/dashboard',
        element: <Overview />
    },
    {
        path: '/main',
        element: <Main />
    },
    {
        path: '/pendingErrands',
        element: <PendingErrands />

    },
    {
        path: '/completedErrands',
        element: <CompletedErrands />
    },
    {
        path: '/verifiedRunners',
        element: <VerifiedRunner />
    },
    {
        path: '/unverifiedRunners',
        element: <UnverifiedRunner />
    },
    {
        path: '/grocery',
        element: <Groceries />
    },
    {
        path: '/',
        element: <Login />
    },
    {
        path: '/addAdmin',
        element: <AddAdmin />
    },
]