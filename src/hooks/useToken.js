import { useEffect } from "react";
import { useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('');
    useEffect( () => {
        const email = user?.user?.email;
        // const currentUser = {email: email}
        const currentUser = {user: user};
        if(email){
        fetch(`https://hello-tools-updated-server.vercel.app/api/v1/user/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(currentUser)
        })
        .then(res => res.json())
        .then(data => {
            const accessToken = data.token;
            localStorage.setItem('accessToken', accessToken);
            setToken(accessToken);
        })
    }
    }, [user])
    return [token];
}

export default useToken;