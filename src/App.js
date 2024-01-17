import './scss/app.scss'

import React, {createContext, useState} from "react";
import {AppRouter} from "./comtoments/router/Router";
import {RouterProvider} from "react-router-dom";

export const AppContext = createContext({})

function App() {

    const [searchValue, setSearchValue] = useState('')

    return (
            <AppContext.Provider value={{searchValue, setSearchValue}}>
                <RouterProvider router={AppRouter}/>
            </AppContext.Provider>
    );
}

export default App;
