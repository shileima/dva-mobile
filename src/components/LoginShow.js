import React from 'react';
import PropTypes from 'prop-types';

/* const users2 = [
  {"id":10,"name":"jone"},
  {"id":11,"name":"wrer"},
]
const UserList = ({users}) => users.map(user=>(
  <List renderHeader={() => 'Basic Style' } key={user.id} className="my-list">
    <Item extra={'extra content'} key={user.id}>{user.name}</Item>
  </List>
)) */

const OrderList = () => {
  return (
    <h1>Login</h1>
  )
}

OrderList.propTypes = {
  //onDelete: PropTypes.func.isRequired,
  //users: PropTypes.array.isRequired,
};

export default OrderList;