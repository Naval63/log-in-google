import React from 'react';
import LogoutButton from './LogoutButton';
import Profile from './Profile'

const PrivatePage = () => {
    return (
        <div>
            <h2>Private Page</h2>
            <Profile />
            <LogoutButton />
        </div>
    );
};

export default PrivatePage;
