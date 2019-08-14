import React from 'react';
import { connect } from 'dva';
import LoginShow from '../components/LoginShow';

const Login = (props) => {

  if(localStorage.getItem('token') !== null){
    console.log('登录成功！')
    console.log(props.history.push('/'))
  }
  console.log(props)
  if(props.props.user && props.props.user.data) {
    localStorage.setItem('token',props.props.user.data.token)
  }
  //const [orders, setorders] = useState([])
  
  // useEffect(() => {
    
  //   return () => {};
  // },[])

  const handleSubmite = (options)=>{
    props.dispatch({'type':'user/fetchLogin',payload:options})
  }

  return (
    <div>
      <LoginShow onSubmite={(options)=>handleSubmite(options)} />
    </div>
  );
};

export default connect(props => ({
  props
}))(Login);

