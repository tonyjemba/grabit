import React from 'react';
import {Icon} from 'antd';

const CartTableimage = () => {
    return(
        <div className="flex flex-row ">
            <div>
                <Icon type="delete"/>
            </div>
            <div className="bg-red" style={{height:192,width:150}}>img</div>
            <div className="flex flex-column">
    <div>{"its name"}</div>
    <div>more</div>
    <div>color</div>

            </div>
        </div>
    )
}
export default CartTableimage;