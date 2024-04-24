import React, { useEffect } from 'react'
import CMS from "decap-cms-app";

const Decap = () => {


  useEffect(() => {
    CMS.init();

    return () => {
    }
  }, [])


  return (
    <div className="app">

    </div>
  )
}

export default Decap