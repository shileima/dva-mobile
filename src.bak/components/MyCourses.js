import React, {useState, useEffect} from 'react';
//import PropTypes from 'prop-types';
import Spinner from './Spinner';
import {Link} from 'dva/router';
import { Card, WhiteSpace } from 'antd-mobile';
import moment from 'moment';

const MyCourses = ({products,location,loading,isHome}) => {
  const [productlist,setproductlist] = useState([]);
  console.log(productlist)
  console.log('isHome:', isHome)
  useEffect(() => {
    if(products !== productlist && !isHome){
      setproductlist([...productlist,...products])
    }else{
      //setproductlist([...productlist])
      setproductlist([...products])
    }
  
    return () => {
      // Clean up the subscription
    };
  },[products]);

  const changePicUrl= (str)=> str ? 'http://cdn.chinahadoop.cn/files/' + str.slice(9) : 'http://cdn.chinahadoop.cn/files/default/2015/08-08/104441957e14483026.png'
  const list = productlist.map(product=>(
    <Link to={"/course/" + product.id} key={product.id} >
      <li list-item={product.id}>
      <Card full>
        <img style={{height:'180px'}} src={changePicUrl(product.mobileLargePicture)} alt={product.title} />
        <Card.Body>
          <div>{product.title}</div>
        </Card.Body>
        <Card.Footer content={product.lessonNum + '课时'} extra={<div>{moment(product.startDate*1000).format("YYYY-MM-DD HH:mm:ss")}</div>} />
      </Card>
      <WhiteSpace size="lg" />
    </li>
    </Link>
  ))
  
  return (
    <div>
      <Spinner loading={loading}/>
      {list}
    </div>
  )
}
MyCourses.propTypes = {
  //onDelete: PropTypes.func.isRequired,
  //products: PropTypes.array.isRequired,
};

export default MyCourses;