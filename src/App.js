
import './App.css';
import Navbar from './components/Navbar'
import Form from './components/Form1';
import React, { useState } from 'react';
import Alert from './components/Alert';
import Footer from './components/Footer';



function App()
 {
  const [mode,setMode]=useState('light')
  const [alert,setAlert]=useState(null)

const showAlert=(mesage,type)=>{
  setAlert({
    msg:mesage,
    type:type
  })
}
  const toggleMode=()=>{
    if(mode==='light')
    {
      setMode('dark')
      document.body.style.backgroundColor='#042743'
      showAlert("Darkmode has been enabeld","Success")
      document.title='textutils -Dark'
      setInterval(()=>{
        document.title='TextUtils is amzaing'

      },3000);
      setInterval(()=>{
        document.title='Install TextUtils Now!'
    },3000);
  }
    else
      {
        setMode('light')
         document.body.style.backgroundColor='white'
         showAlert("Lightmode has been enabeld","Success")
         document.title='textutils -light'
      setInterval(()=>{
        document.title='TextUtils is amzaing'

      },3000);
      setInterval(()=>{
        document.title='Its Free for Now!'
    },2000);
      }
  }
  return (
    <>
  <Navbar  title="Words Counter" about="About" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container " style={{marginLeft:'35px'}}>
        <Form showAlert={showAlert} mode={mode} heading="Try TextUtils -Word Counter | Character Counter"/>
        <Footer /> 
        </div>

 </>
);
}

export default App;
