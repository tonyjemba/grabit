import React,{Component} from 'react';
import '../css/carttable.css'
class CartTable extends Component {
    constructor(props){
        super(props);
        this.state={
                CartItems:this.props.Cartitems
        }
    }

    renderTableHeader=()=> {
        let header = Object.keys(this.state.CartItems[0])
        return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
        })
     }

   render(){
    return(
        
             <table className="tablecont  w-100 bb">
        <tbody>
                 <tr>{this.renderTableHeader()}</tr>
           {
               this.state.CartItems.map( (CartItem,Index) => {
                const {product,price,quantity,total} = CartItem
                return (
                    <tr key={Index} className="bt w-100">
                       <td>{product}</td>
                       <td>{price}</td>
                       <td>{quantity}</td>
                        <td>{total}</td>
                    </tr>
                 )
            })
           }
        </tbody> 
     </table>
        
       
    )
   }
}

export default CartTable;