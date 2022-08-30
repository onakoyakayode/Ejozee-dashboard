
import Dashboard from "../Components/DashBoard/Dashboard";
import Main from "../Components/Main/Main";
import Overview from "../Components/Overview/Overview";
import PendingErrands from "../Components/Errands/Pending-Errands/PendingErrands"
import CompletedErrands from "../Components/Errands/Completed-Errands/CompletedErrands"
import VerifiedRunner from "../Components/Runners/VerifiedRunners/VerifiedRunners";
import UnverifiedRunner from "../Components/Runners/UnverifiedRunners/UnverifiedRunners";
import Groceries from "../Components/Partners/Groceries/Groceries";






export const pageRoutes = [
    {
        path: '/overview',
        element: <Overview />
    },
    {
        path: '/main',
        element: <Main />
    },
    {
        path: '/dashboard',
        element: <Dashboard />
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
    }
]