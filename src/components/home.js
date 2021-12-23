import React from "react";
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import {useState} from 'react'
import '../App.css'



function Home() {


  const [state, setstate] = useState(false);
    const enteredNames = useSelector(state=> state.login.enteredName);
    const dispatch =useDispatch();


    const enteredNamelogin = useSelector(state=> state.login.enteredName);
    const enteredPasswordlogin= useSelector(state=> state.login.enteredPassword);
    console.log(enteredNamelogin)



   
    
    const enteredName = useSelector(state=> state.signup.signupName);
    const enteredPassword= useSelector(state=> state.signup.signupPassword);
    console.log(enteredName)

    const logOut =()=>{

        dispatch({type:'name', amount:'' });
    dispatch({type:'password', amount:'' });

    dispatch({type:'touched', amount:false });

    }




    if(enteredNamelogin === enteredName && enteredPasswordlogin === enteredPassword)
    {
      return (
        <>
        <div className="app">

          <div>
            <h3>welcome home {enteredNames} </h3>
          </div>
          <div>
            
              <Link to="/" > <button onClick={logOut}>logout</button></Link>
        
          </div>
        </div>
        </>
      );

    }
    else{
      return<>
              <div className="app">

      <h4>you password is incorrect </h4>
      <Link to="/" > <button onClick={logOut}>signin</button></Link>
      </div>

      </>
    }

}

export default Home;
