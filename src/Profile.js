import React from 'react';
import { useGoogleLogin } from 'react-use-googlelogin';

const Profile = () => {
    const { googleUser } = useGoogleLogin()

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