import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useGoogleAuth } from './googleAuth';

const PrivateRoute = ({ component: Component, ...rest}) => {
    const { isSigedIn } = useGoogleAuth();

    return (
        <div>
            <Route {...rest} render={props => (
                isSigedIn ?
                <Component {...props} />:
                <Redirect exact from='private' to='/' />
            )} 
            />
        </div>
    );
};

export default PrivateRoute;