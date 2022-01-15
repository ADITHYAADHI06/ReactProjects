import "./App.css";
import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import ProductList from './components/ProductList';
import Footer from "./components/Footer";

function App() {
  const products = [
    {
      name: "iPhone max 13",
      price: 30000,
      quantity: 0,
    },
    {
      name: "Realme 8 5G",
      price: 50000,
      quantity: 0,
    },
    {
      name: "iPhone 12 Mini(64GB)",
      price: 40000,
      quantity: 0,
    },
   
    {
      name: "iPhone max 12",
      price: 66000,
      quantity: 0,
    },
    {
      name: "Samsung fold",
      price: 66000,
      quantity: 0,
    },
  ];
  const [productList, setproductList] = useState(products)
  const [Totalamount, setTotalamount] = useState(0)


  const increQuantity =(index)=>{
    let newproductList=[...productList];
    let newTotalamount=Totalamount;
    newproductList[index].quantity+=1;
    newTotalamount+=newproductList[index].price;

    setproductList(newproductList);   
    setTotalamount(newTotalamount);  
  }

  const decreQuantity =(index)=>{
    let newproductList=[...productList];
    let newTotalamount=Totalamount;

    newproductList[index].quantity-=1;
    newTotalamount-=newproductList[index].price;

    setproductList(newproductList); 
    setTotalamount(newTotalamount);  

  }
  const Remove =(index)=>{
    let newproductList=[...productList];
    let newTotalamount=Totalamount;
    newTotalamount-=newproductList[index].quantity*newproductList[index].price;

    newproductList.splice(index,1);
 
    setproductList(newproductList); 
    setTotalamount(newTotalamount);  
    

  }
  const Reset=()=>{
    let newproductList=[...productList];
    newproductList.map((products)=>{
    products.quantity=0;

    setproductList(newproductList); 
    })

  }

  return (
    <div className="App">
      <Navbar></Navbar>
      <ProductList productList={productList} increQuantity={increQuantity} decreQuantity={decreQuantity} Remove={Remove}></ProductList>
      <Footer Reset={Reset} Totalamount={Totalamount}></Footer>
    </div>
  );
}

export default App;
