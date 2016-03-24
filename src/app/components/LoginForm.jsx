import React, {PropTypes} from 'react'
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';

const tileStyle = {
    height: '80px',
    margin: '10px 20px',
    padding: '30px',
    border: '1px solid gray',
    cursor: 'pointer'
}

const LoginForm = ({users, login}) => {
    const userTiles = users.map(u => {
        return <ListItem primaryText={u.username} secondaryText={u.role} onClick={() => login(u)} key={u.username} />
        /*
        return <div style={tileStyle} key={u.username} className={u.role} onClick={() => login(u)}>
            {u.username} <span>({u.role})</span>
        </div>
        */
    });

    return (
        <List>
          {userTiles}
        </List>
    )
};

LoginForm.propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string.isRequired,
        role: PropTypes.string.isRequired
    })).isRequired,
    login: PropTypes.func.isRequired
};

export default LoginForm
