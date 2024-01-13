import {createBrowserRouter} from "react-router-dom"
import {Layout} from "../layout/Layout";
import {Home} from "../../pages/Home";
import NotFound from "../../pages/NotFound";

export const AppRouter = createBrowserRouter([{
        path: '/',
        element: <Layout/>,
        children: [
            {
                element: <Home/>,
                index: true
            },
            {
                element: <NotFound/>,
                path: '*'
            }
        ]
    }]
)