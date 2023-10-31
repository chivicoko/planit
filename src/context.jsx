import React, {useContext} from "react";

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    return <AppContext.Provider value={{'name': 'Victor Okoye', 'email': 'vic@gmail.com', 'phone': '08028845693'}}>
        {children}
    </AppContext.Provider>
}

export const useGlobContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider};