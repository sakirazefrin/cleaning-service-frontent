import React from 'react';
import { useHistory } from 'react-router';

const LogOut = () => {
    const history=useHistory()
    sessionStorage.clear()
    history.push("/")


    
    return (
        <div>
            
        </div>
    );
};

export default LogOut;