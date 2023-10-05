import {useState} from "react";

import AppContext from "./AppContext";

// eslint-disable-next-line react/prop-types
const AppContextProvider = ({children}) =>{

    const [darker, setdarker] = useState(true);

    return (
        <AppContext.Provider value={{darker,setdarker}}>
        {children}
        </AppContext.Provider>
    )

}

export default AppContextProvider