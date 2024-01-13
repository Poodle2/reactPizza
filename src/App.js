import './scss/app.scss'

import React from "react";
import {AppRouter} from "./comtoments/router/Router";
import {RouterProvider} from "react-router-dom";

function App() {

    return (
        <RouterProvider router={AppRouter}/>
    );
}
export default App;
