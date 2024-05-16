import React, { useEffect } from 'react'
import CMS from "decap-cms-app";
import netlifyIdentity from "netlify-identity-widget";

const Decap = () => {

  netlifyIdentity.on("init", (user: netlifyIdentity.User | null) => {
    if (!user) {
      netlifyIdentity.open("login");
    }else{
      (window as any).netlifyIdentity = netlifyIdentity;
      CMS.init();
    }
    
  });

  useEffect(() => {
    netlifyIdentity.init();

    return () => {
    }
  }, [])


  return (
    <div className="app">

    </div>
  )
}

export default Decap