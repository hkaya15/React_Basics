import React,{ createContext, useContext, useReducer} from "react";
import footerReducer from "../reducer/footerReducer";

const SecondFooterContext= createContext();

export const SecondFooterProvider = ({children})=>{

    const [state, dispatch] = useReducer(footerReducer,{
        val: 0,
    });

    const data={
        ...state,
        dispatch
    }
    
    
    // UseState Usage
    // const [val,setVal]=useState(0)
    // const values={val,setVal}
    return <SecondFooterContext.Provider value={data}>{children}</SecondFooterContext.Provider>
}

export const useSecondFooterContext= ()=> useContext(SecondFooterContext);