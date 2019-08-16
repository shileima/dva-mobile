import React, { useRef, useEffect } from 'react';
import { connect } from 'dva';
import MyCourses from '../components/MyCourses';
//import BScroll from 'better-scroll';

let page = 1;
const Mycourses = (props) => {
  console.log(props)
  let isHome = props.products.mycourses.isHome || false;
  page = isHome ? 1 : page + 1;
  useEffect(() => {
    if(props.location.pathname === '/mycourses'){
      props.dispatch({type:'mycourses/firstFetch', payload:{}})
      //return false;
    }
  }, []);

  // 下拉加载下一页
  let productListRef = useRef();
  document.onscroll = function () {
    let $windowHeight = window.innerHeight;
    let $scrollHeight = productListRef.current?productListRef.current.scrollHeight:0;
    let $scrollTop = productListRef.current?productListRef.current.scrollTop || window.pageYOffset || document.body.scrollTop:0;
  
    if ($scrollHeight - $scrollTop - $windowHeight === 0) {
      page = page + 1;
      props.dispatch({type:'mycourses/scrollFetch', payload:{limit:5,start:(page-1)*5}})
    }
  }
  return (
    <div ref={productListRef}>
      <MyCourses 
        products={props.products.mycourses.list.data || []}
        history ={props.history}
        location ={props.location}
        match ={props.match}
        loading={props.products.loading.global}
        isHome={isHome}
      />
    </div>
  );
};

//export default Products;

export default connect(props => ({
  products:{...props},
}))(Mycourses);

