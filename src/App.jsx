import React, { useEffect, useState } from 'react'
import './App.css'
import { Themeprovider } from './contexts/Theme'
import Themebutton from './components/Themebutton'
import Card from './components/Card'


function App() {

const [Thememode,setThememode] = useState("light") 

const Lighttheme = () =>{
  setThememode("light")
}
const Darktheme = () => {
  setThememode("dark")
}

useEffect(() => {
  document.querySelector('html').classList.remove('light','dark')
  document.querySelector('html').classList.add(Thememode)
},[Thememode])


  
return (
   
  <Themeprovider value = {{Thememode,Lighttheme,Darktheme}}> 
    <div className="flex flex-wrap min-h-screen items-center  dark:bg-gray-800">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex 
                    justify-end mb-4">
                      <Themebutton></Themebutton>
                        
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                      <Card/>
                       
                    </div>
                </div>
    </div> 
    
 </Themeprovider>       
   
  )
}

export default App 
