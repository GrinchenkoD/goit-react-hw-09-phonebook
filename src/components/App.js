import Header from "./header/Header";
import Main from "./main/Main.jsx";

import React, { useEffect } from "react";
import { getCurrentUser } from "../redux/auth/auth.operations";
import { useDispatch } from "react-redux";

const App= ()=> {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
 
  }, [dispatch]);

    return (
      <>
        <Header />
        <Main />
      </>
    );
  
  };


export default App;
