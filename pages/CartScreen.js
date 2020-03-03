import React,{Component} from 'react';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import {Divider,Input } from 'antd';
import CartTable from '../components/CartTable';
import CartTableimage from '../components/CartTableImage'
import '../css/CartScreen.css';
import BasicLayout from '../components/Layouts/BasicLayout';

const { TextArea } = Input;


class CartScreen extends Component{

    constructor(props) {
      super(props);  
      this.state = {
        country: '',
        region: '',
        zipcode:'',
        value:'',
        
      };
    }  
  
    handleZipCode = (event) => {
      this.setState({zipcode: event.target.value})
  }  
  onChange = ({ target: { value } }) => {
      this.setState({ value });
    };
selectCountry  = (val) => {
  this.setState({ country: val });
};

selectRegion = (val) => {
  this.setState({ region: val });
};



  render(){
      const { country, region,value} = this.state;
      let cartArray=[
        {
          product:<CartTableimage/>,
          price:2000,
          quantity:2,
          total:4000
        },
        {
          product:<CartTableimage/>,
          price:1000,
          quantity:2,
          total:2000
        },{
          product:<CartTableimage/>,
          price:4000,
          quantity:2,
          total:8000
        },
        {
          product:<CartTableimage/>,
          price:500,
          quantity:2,
          total:1000
        }
      ]
      return(
        <BasicLayout>
          <div className="pb4 ">
              <div className="ml3 mt2 "><span className="pointer hover-black">Home</span> / Cart</div>
              <div className="w-100 mb3 tc f3 black fw5">Cart</div>

              <div className="flex flex-row pa2 justify-center">
                  <div className="w-60 flex flex-column">
                <CartTable Cartitems={cartArray}/>
                  </div>
                  <div className="flex flex-column contbg w-20 ml4 justify-center tc ba b--black-10">
                      <div className="black f5 mt2 mb2 ">CART TOTAL</div>
                      <div className="black  ">Estimate Shipping and TAX</div>
                      <div className="black-50  f8">Enter your destination to get a shipping estimate.</div>
                      <div className="black mt3 self-start pl3">COUNTRY*</div>
                      <div className="flex flex-column">
                      <div className="w-100 justify-center flex flex-column pl3 pr3 ">
                          <CountryDropdown
                          value={country}
                          onChange={(val) => this.selectCountry(val)}
                          className="pa1"
                          />
                         

                      <div className="black mt3 self-start pl2">REGION*</div>

                         
                          <RegionDropdown
                          country={country}
                          value={region}
                          onChange={(val) => this.selectRegion(val)}
                          className="pa1"
                          />
                          </div>
                      </div>
                      <div className="black mt3 self-start pl3">ZIP/POSTAL CODE*</div>
                      <div className="flex justify-center  w-100">
                     <div className=" ba w-90 ">
                     <input
                              placeholder="ZIP/POSTAL CODE "
                              type="text"
                              onChange = {this.handleZipCode}
                              required
                              spellCheck="false"
                              className="outline-0 no-underline pt1 pb1 pl1 b--none fieldheight ba w-100"
                          />
                     </div>
                      </div>
                      <Divider dashed/>
                      <div className="black">Special instructions for seller</div>
                      <div>Add special instructions for your order...</div>
                        <div className="flex w-100 justify-center ">
                        <TextArea
                          value={value}
                          onChange={this.onChange}
                          placeholder="My order..."
                          autoSize={{ minRows: 3, maxRows: 5 }}
                          spellCheck="false"
                          className="outline-0 no-underline mt2 b--none ba w-90"
                          />
                        </div>
                          <Divider dashed/>
                          <div className="black f4">SUBTOTAL</div>
                          <div className="black f5">$100.54</div>
                          <div className="underline">Shipping calculated at checkout</div>
                          <div className=" flex tc justify-center ma1 mt2 mb3 ">
                   <div className="ba pointer bg-animate b--black bg-black white pa1 pl2 pr2 hover-bg-white hover-black" >PROCEED TO CHECKOUT</div>
               </div>

                  </div>
              </div>
          </div>
          </BasicLayout>
      )
  }
}

export default CartScreen;




// import React,{Component} from 'react';
// import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
// import { Table, Input, Button, Popconfirm, Form,Divider,Icon } from 'antd';
// import '../css/CartScreen.css'


// const { TextArea } = Input;
// const EditableContext = React.createContext();

// const EditableRow = ({ form, index, ...props }) => (
//     <EditableContext.Provider value={form}>
//       <tr {...props} />
//     </EditableContext.Provider>
//   );
  
//   const EditableFormRow = Form.create()(EditableRow);
  
// //   cell class

//   class EditableCell extends Component {
//     state = {
//       editing: false,
//     };
  
//     toggleEdit = () => {
//       const editing = !this.state.editing;
//       this.setState({ editing }, () => {
//         if (editing) {
//           this.input.focus();
//         }
//       });
//     };
  
//     save = e => {
//       const { record, handleSave } = this.props;
//       this.form.validateFields((error, values) => {
//         if (error && error[e.currentTarget.id]) {
//           return;
//         }
//         this.toggleEdit();
//         handleSave({ ...record, ...values });
//       });
//     };
  
//     renderCell = form => {
//       this.form = form;
//       const { children, dataIndex, record, title } = this.props;
//       const { editing } = this.state;
//       return editing ? (
//         <Form.Item
//         // style={{ margin: 0 }}
//         >
//           {form.getFieldDecorator(dataIndex, {
//             rules: [
//               {
//                 required: true,
//                 message: `${title} is required.`,
//               },
//             ],
//             initialValue: record[dataIndex],
//           })(<Input ref={node => (this.input = node)} onPressEnter={this.save} onBlur={this.save} />)}
//         </Form.Item>
//       ) : (
//         <div
//           className="editable-cell-value-wrap"
//         //   style={{ paddingRight: 24 }}
//           onClick={this.toggleEdit}
//         >
//           {children}
//         </div>
//       );
//     };
  
//     render() {
//       const {
//         editable,
//         dataIndex,
//         title,
//         record,
//         index,
//         handleSave,
//         children,
//         ...restProps
//       } = this.props;
//       return (
//         <td {...restProps}>
//           {editable ? (
//             <EditableContext.Consumer>{this.renderCell}</EditableContext.Consumer>
//           ) : (
//             children
//           )}
//         </td>
//       );
//     }
//   }

// class CartScreen extends Component{

//       constructor(props) {
//         super(props);
//         this.columns = [
//         {
//             title:'Product',
//             dataIndex:'product',
//             width:'40%',
//             render: (text, record) =>
//           this.state.dataSource.length >= 1 ? (
//             <div className="flex flex-row ">
//                 <div>
//                 <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
//               <Icon type="delete"/>
//             </Popconfirm>
//                 </div>
//                 <div className="bg-orange sizing ml3">
//                     img
//                 </div>
//                 <div className="ml3">
//                     {text}
//                 </div>
//             </div>
//           ) : null,
            
//         },
//         {
//             title: 'Price',
//             dataIndex: 'price',
//             align:'center'
//           },

//           {
//             title: 'Quantity',
//             dataIndex: 'quantity',
//             width: '20%',
//             editable: true,
//             align:'center',
            
//           },
//           {
//             title: 'Total',
//             dataIndex: 'total',
//             align:'center',
//           render:(total) => <div>{total[0] * total[1]}</div>
//           },
          
//         ];
    
//         this.state = {
//             dataSource: [
//             {
//               key: '1',
//               product: 'shirt',
//               price: 3000,
//               quantity: 2,
//               total:[3000,2]
//             },
//             {
//               key: '2',
//               product: 'Rayban',
//               price: 400,
//               quantity: 4,
//               total:[400,4]
//             },
//             {
//               key: '3',
//               product: 'jean',
//               price: 3200,
//               quantity: 5,
//               total:[3200,5]
//             },
//           ],
//           count: 2,
//           country: '',
//           region: '',
//           zipcode:'',
//           value:''
//         };
//       }

//       handleDelete = key => {
//         const dataSource = [...this.state.dataSource];
//         this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
//       };
    
    
//       handleSave = row => {
//         const newData = [...this.state.dataSource];
//         const index = newData.findIndex(item => row.key === item.key);
//         const item = newData[index];
//         newData.splice(index, 1, {
//           ...item,
//           ...row,
//         });
//         this.setState({ dataSource: newData });
//       };

//       handleZipCode = (event) => {
// 		this.setState({zipcode: event.target.value})
//     }  
//     onChange = ({ target: { value } }) => {
//         this.setState({ value });
//       };
//   selectCountry  = (val) => {
//     this.setState({ country: val });
//   };
 
//   selectRegion = (val) => {
//     this.setState({ region: val });
//   };

//     render(){
//         const { country, region,value} = this.state;
//         const { dataSource } = this.state;
//     const components = {
//       body: {
//         row: EditableFormRow,
//         cell: EditableCell,
//       },
//     };
//     const columns = this.columns.map(col => {
//       if (!col.editable) {
//         return col;
//       }
//       return {
//         ...col,
//         onCell: record => ({
//           record,
//           editable: col.editable,
//           dataIndex: col.dataIndex,
//           title: col.title,
//           handleSave: this.handleSave,
//         }),
//       };
//     });
//         return(
//             <div className="pb4 ">
//                 <div className="ml3 mt2 "><span className="pointer hover-black">Home</span> / Cart</div>
//                 <div className="w-100 tc f3 black fw5">Cart</div>

//                 <div className="flex flex-row pa2 justify-center">
//                     <div className="w-60">
//                         <Table
//                         components={components}
//                         rowClassName={() => 'editable-row'}
//                         size="middle"
//                         dataSource={dataSource}
//                         columns={columns}
//                         />
//                     </div>
//                     <div className="flex flex-column contbg w-20 ml4 justify-center tc ba b--black-10">
//                         <div className="black f5 mt2 mb2 ">CART TOTAL</div>
//                         <div className="black  ">Estimate Shipping and TAX</div>
//                         <div className="black-50  f8">Enter your destination to get a shipping estimate.</div>
//                         <div className="black mt3 self-start pl3">COUNTRY*</div>
//                         <div className="flex flex-column">
//                         <div className="w-100 justify-center flex flex-column pl3 pr3 ">
//                             <CountryDropdown
//                             value={country}
//                             onChange={(val) => this.selectCountry(val)}
//                             className="pa1"
//                             />
                           

//                         <div className="black mt3 self-start pl2">REGION*</div>

                           
//                             <RegionDropdown
//                             country={country}
//                             value={region}
//                             onChange={(val) => this.selectRegion(val)}
//                             className="pa1"
//                             />
//                             </div>
//                         </div>
//                         <div className="black mt3 self-start pl3">ZIP/POSTAL CODE*</div>
//                         <div className="flex justify-center  w-100">
//                        <div className=" ba w-90 ">
//                        <input
// 								placeholder="ZIP/POSTAL CODE "
//                                 type="text"
// 								onChange = {this.handleZipCode}
// 								required
//                                 spellCheck="false"
//                                 className="outline-0 no-underline pt1 pb1 pl1 b--none fieldheight ba w-100"
// 							/>
//                        </div>
//                         </div>
//                         <Divider dashed/>
//                         <div className="black">Special instructions for seller</div>
//                         <div>Add special instructions for your order...</div>
//                           <div className="flex w-100 justify-center ">
//                           <TextArea
//                             value={value}
//                             onChange={this.onChange}
//                             placeholder="My order..."
//                             autoSize={{ minRows: 3, maxRows: 5 }}
//                             spellCheck="false"
//                             className="outline-0 no-underline mt2 b--none ba w-90"
//                             />
//                           </div>
//                             <Divider dashed/>
//                             <div className="black f4">SUBTOTAL</div>
//                             <div className="black f5">$100.54</div>
//                             <div className="underline">Shipping calculated at checkout</div>
//                             <div className=" flex tc justify-center ma1 mt2 mb3 ">
//                      <div className="ba pointer bg-animate b--black bg-black white pa1 pl2 pr2 hover-bg-white hover-black" >PROCEED TO CHECKOUT</div>
//                  </div>

//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

// export default CartScreen;