import Admin from './pages/Admin'
import Auth from './pages/Auth'
import Main from './pages/Main'
import Review from './pages/Review'
import SchoolPage from './pages/SchoolPage'
import { ADMIN_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE, REVIEW_ROUTE, SCHOOL_ROUTE } from './utils/consts'

export const AuthRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },

    {
        path: REVIEW_ROUTE,
        Component: Review 
    }

]

export const PublicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },

    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },

    {
        path: MAIN_ROUTE,
        Component: Main
    },

    {
        path: SCHOOL_ROUTE + '/:id',
        Component: SchoolPage
    },
]