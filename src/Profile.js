import React from 'react';
import { useGoogleAuth } from './googleAuth';

const Profile = () => {
    const { googleUser } = useGoogleAuth()
    if(!googleUser) return null

    return (
        <div>
            <h1>
                {googleUser.profileObj.name}
            </h1>
            <p>
                {googleUser.profileObj.email}
            </p>
            <img src={googleUser.profileObj.imageUrl} />
        </div>
    )
}

export default Profile;