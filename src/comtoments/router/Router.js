import {createBrowserRouter} from "react-router-dom"
import {Layout} from "../layout/Layout";
import {Home} from "../../pages/Home";

export const AppRouter = createBrowserRouter([{
        path: '/',
        element: <Layout/>,
        children: [
            {
                element: <Home/>,
                index: true
            }
        ]
    }]
)