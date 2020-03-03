import React from 'react';
import { List,Card } from 'antd';
import ProductDescription from './ProductDescription';
import ProductImage from './ProductImage';
// import '../css/homeshow.css'


/*this shows the products that first show on the home screen accepts prop(array) homePageItemsArray
of the products to display  (HomeProduct provides the Array)
itemStyle is the styling fro each item div
*/
const data = [
    {
      productName: 'productName 1',
    },
    {
      productName: 'productName 2',
    },
    {
      productName: 'productName 3',
    },
    {
      productName: 'productName 4',
    },
    {
      productName: 'productName 5',
    },
    {
      productName: 'productName 6',
    },
  ];

const HomeShow = () => (
    <List
    grid={{
      gutter: { xs: 8, sm: 16, md: 24, lg: 32 },
      xs: 2,
      sm: 2,
      md: 4,
      lg: 5,
      xl: 6,
      xxl: 4,
    }}
    dataSource={data}
    renderItem={item => (
      <List.Item>
          <div className="ma0">
          <ProductImage classname="imgsize relative overflow-hidden pointer  " />
        <ProductDescription itemName={item.productName}/>
          </div>
        {/* <Card title={item.title}>Card content</Card> */}
      </List.Item>
    )}
    />
)
  
    // let homeItems = homePageItemsArray.map((itemName,index) => (
    
    //         <Col className={itemStyle} key={index} span={8} >
        // <ProductImage classname="imgsize relative overflow-hidden pointer  " />
        // <ProductDescription itemName={itemName}/>
    //      </Col>
        
    // ))
    // return(
    // <Row  gutter={[20, 40]} >{homeItems}</Row>
    // )


export default HomeShow;

// import { List, Card } from 'antd';

// const data = [
//   {
//     title: 'Title 1',
//   },
//   {
//     title: 'Title 2',
//   },
//   {
//     title: 'Title 3',
//   },
//   {
//     title: 'Title 4',
//   },
//   {
//     title: 'Title 5',
//   },
//   {
//     title: 'Title 6',
//   },
// ];

// ReactDOM.render(
//   <List
//     grid={{
//       gutter: 16,
//       xs: 1,
//       sm: 2,
//       md: 4,
//       lg: 4,
//       xl: 6,
//       xxl: 3,
//     }}
//     dataSource={data}
//     renderItem={item => (
//       <List.Item>
//         <Card title={item.title}>Card content</Card>
//       </List.Item>
//     )}
//   />,
//   mountNode,
// );