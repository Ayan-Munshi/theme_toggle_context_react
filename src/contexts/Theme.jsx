import { createContext, useContext } from "react";

// in this js file we are containing create , provide , use of context togather for further use

export const Themecontext = createContext({
    Thememode : "light",
    Darktheme : () => {} ,
    Lighttheme : () => {}
   })

export const Themeprovider = Themecontext.Provider

export default function usetheme (){

     return useContext(Themecontext)

   }