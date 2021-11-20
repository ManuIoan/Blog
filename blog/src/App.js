import React, { useState } from 'react'
import Header from "./maker/header"
import Content from "./maker/content"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";





function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <>
    
     <Header />
     <Content />
     <p>{!data ? "Loading..." : data}</p>



    </>
  )
}

export default App


