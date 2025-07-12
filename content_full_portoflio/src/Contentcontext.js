// src/context/ContentContext.js
import { createContext, useReducer } from "react";

// Step 1: Define page types
export const content_types = {
    HOME: 'HOME',
    ABOUT: 'ABOUT',
    WORK: 'WORK',
    SKILLS: 'SKILLS',
    CONTACT: 'CONTACT',
    PROJECT: "PROJECT"
};

// Step 2: Initial state
const initialState = {
    currentPage: content_types.HOME,
    selectedProject: null
};

// Step 3: Reducer function
function contentReducer(state, action) {
    switch (action.type) {
        case 'SET_PAGE':
            return { ...state, currentPage: action.payload, selectedProject: null };
        case 'SET_PROJECT':
            return { ...state, currentPage: content_types.PROJECT, selectedProject: action.payload };
        default:
            return state;
    }
}

// Step 4: Create context
export const ContentContext = createContext();

// Step 5: Context Provider component
export function ContentProvider({ children }) {
    const [state, dispatch] = useReducer(contentReducer, initialState);

    return (
        <ContentContext.Provider value={{ state, dispatch }}>
            {children}
        </ContentContext.Provider>
    );
}
