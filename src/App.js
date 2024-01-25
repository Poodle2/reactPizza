import './scss/app.scss'

import React from "react";
import {AppRouter} from "./comtoments/router/Router";
import {RouterProvider} from "react-router-dom";
import {store} from "./redux/store";
import {Provider} from "react-redux";

function App() {

    return (
        <Provider store={store}>
            <RouterProvider router={AppRouter}/>
        </Provider>
    );
}

export default App;
