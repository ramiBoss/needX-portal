import React from "react"
import {Route} from 'react-router-dom';
import PublicShell from "./PublicShell";

const PublicRoute = ({ component: Component, ...rest }) => {
    return(
        <Route
            {...rest}
            render={ matchProps => (
                <PublicShell>
                    <Component {...matchProps} />
                </PublicShell>
            )}
        />
    );
}

export default PublicRoute;