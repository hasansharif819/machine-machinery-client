import React from 'react';

const UserProfile = ({ user, refetch}) => {
    return (
        <div>
            <h2>email: {user.email}</h2>
        </div>
    );
};

export default UserProfile;