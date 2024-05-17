import React, { useEffect } from 'react'
import netlifyIdentity from "netlify-identity-widget";

const NetlifyIdentityResolver = () => {
    netlifyIdentity.on("init", (user: netlifyIdentity.User | null) => {
        if (!user) {
            netlifyIdentity.on("login", () => {
                document.location.href = "/content-manager";
            });
        }
    });
    useEffect(() => {
        netlifyIdentity.init();

        return () => {
        }
    }, [])

    return (
        <div>NetlifyIdentityResolver</div>
    )
}

export default NetlifyIdentityResolver