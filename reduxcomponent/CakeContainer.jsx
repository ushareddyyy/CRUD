/* import React from 'react'
import { BUY_CAKE } from '../redux/cake/cakeType'
import {buyCake} from '../redux/cake/cakeAction'
const CakeContainer = (props) => {
  return (
    <div>CakeContainer</div>
  )
}
const mapStateToProps=state=>{
    return{
        totalCakes:state.numberOfCAkes
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        xyz:()=>dispatch(buyCake())
    }
}
export default CakeContainer(mapStateToProps,mapDispatchToProps)(CakeContainer) */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BUY_CAKE } from '../redux/cake/cakeType';

import { buyCake } from '../redux/cake/cakeAction';
const CakeContainer = () => {
    let numberOfCakes = useSelector(state => state.numberOfCAkes);
    let dispatch = useDispatch();

    return (
        <div>
            <h1>Number of cakes:{numberOfCakes}</h1>
            <button onClick={() => dispatch(buyCake())}>Click here</button>
        </div>
    );
};

export default CakeContainer;
