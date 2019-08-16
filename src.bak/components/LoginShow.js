import React from 'react';
/* import PropTypes from 'prop-types';
import {query} from '../services/login'; */


/* const users2 = [
  {"id":10,"name":"jone"},
  {"id":11,"name":"wrer"},
]
const UserList = ({users}) => users.map(user=>(
  <List renderHeader={() => 'Basic Style' } key={user.id} className="my-list">
    <Item extra={'extra content'} key={user.id}>{user.name}</Item>
  </List>
)) */

const LoginShow = (props) => {

  /* useEffect(() => {
    

    return () => {
      // Clean up the subscription
    };
  },[]); */

  const handleSubmite = () => {
    let options = {
      "method":"POST",
      "headers":{"Content-Type":"application/json"},
      "body":JSON.stringify({
        "username":"loading123",
        "password":"861124"
      })
    };
    return props.onSubmite(options)
  }
  return (<div>
    
    <h1>Login</h1>
    <div>
      <div><input type="text" name="username" /></div>
      <hr></hr>
      <div><input type="text" name="password" /></div>
      <button onClick={handleSubmite}>登录</button>
    </div>
    
    </div>
  )
}

LoginShow.propTypes = {
  //onDelete: PropTypes.func.isRequired,
  //users: PropTypes.array.isRequired,
};

export default LoginShow;