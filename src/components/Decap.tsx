import React, { useEffect } from 'react'
import CMS from "decap-cms-app";
import netlifyIdentity from "netlify-identity-widget";
import DecapConfig from "../configs/editor.yml";
import type { CmsConfig } from "decap-cms-core";
import { getEditorBranch } from '../utils/environment';

const EditorConfig: CmsConfig = DecapConfig as CmsConfig;
EditorConfig.backend.branch = getEditorBranch();

const Decap = () => {

  netlifyIdentity.on("init", (user: netlifyIdentity.User | null) => {
    if (!user) {
      netlifyIdentity.open("login");
    } else {
      (window as any).netlifyIdentity = netlifyIdentity;
      CMS.init({ config: EditorConfig });
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