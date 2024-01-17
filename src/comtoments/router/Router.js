import {createBrowserRouter} from "react-router-dom"
import {Layout} from "../layout/Layout";
import {Home} from "../../pages/Home";
import NotFound from "../../pages/NotFound";
import Cart from "../../pages/Cart";

export const AppRouter = createBrowserRouter([{
        path: '/',
        element: <Layout/>,
        children: [
            {
                element: <Home/>,
                index: true
            },
            {
                element: <Cart/>,
                path: '/drawer'
            },
            {
                element: <NotFound/>,
                path: '*'
            }
        ]
    }]
)