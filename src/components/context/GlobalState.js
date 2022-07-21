import React, { createContext, useReducer } from "react";
import AppReducer from './AppReducer.js';

export const initialState = {
    locations: [
        { id: 1, section: 'freezer', shlef: 'a', shelf_div: 2 },
        { id: 2, section: 'deli', shlef: 'd', shelf_div: 5 },
        { id: 3, section: 'drinks', shlef: 'c', shelf_div: 3 },
        { id: 3, section: 'dairy', shlef: 'a', shelf_div: 4 },
        { id: 3, section: 'licour', shlef: 'b', shelf_div: 1 }
    ]
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <GlobalContext.Provider value={{ locations: state.locations }}>
            {children}
        </GlobalContext.Provider>
    )
}