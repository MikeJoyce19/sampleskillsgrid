import React from 'react'
import FlatButton from 'material-ui/lib/flat-button';
import { removeUserFromStorage } from '../service/storage'


const style = {
    marginTop: '5px'
};

const logout = () => {
    removeUserFromStorage();
    location.reload();
};

const LogoutButton = () => {
    return (
        <div>
            <FlatButton label="Logout" onClick={() => logout()} style={style} />
        </div>
    )
};

export default LogoutButton
