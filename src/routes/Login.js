import React, {useEffect,useState} from 'react';
import LoginShow from '../components/LoginShow';
import {query} from '../services/users';

const Login = (props) => {
  console.log(props)
  const [orders, setorders] = useState([])
  
  // useEffect(() => {
  //   query().then(res=>{
  //     console.log(res.data)
  //     setorders(orders.push(...res.data.data))
  //   })
    
  //   return () => {};
  // },[])
  return (
    <div>
      <LoginShow />
    </div>
  );
};

// export default Products;
export default Login;

