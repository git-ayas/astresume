import React, { useEffect } from 'react'
import netlifyIdentity from "netlify-identity-widget";

interface NetlifyIdentityResolverProps {
    performLogout?: boolean
}

const NetlifyIdentityResolver = ({ performLogout }: NetlifyIdentityResolverProps) => {
    netlifyIdentity.on("init", (user: netlifyIdentity.User | null) => {
        if (performLogout && user) {
            netlifyIdentity.logout();
            document.location.href = "/content-manager";
            return;
        }
        if (!user) {
            netlifyIdentity.on("login", () => {
                document.location.href = "/content-manager";
            });
            return;
        }
    });
    useEffect(() => {
        netlifyIdentity.init();

        return () => {
        }
    }, [])

    return (
        <span></span>
    )
}

export default NetlifyIdentityResolver