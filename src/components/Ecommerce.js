import React, { useEffect, useState } from "react";
import OutputList from "./OutputList";
// import ProductDetails from './ProductDetails'

const getLocaleStorage =() =>{
    let list = localStorage.getItem('productList');

    if(list){
        return JSON.parse(localStorage.getItem('productList'));
    }else{
        return [];
    }
}


const Ecommerce = () => {
  const [productCategory, setProductCategory] = useState("");
  const [productName, setProductName] = useState("");
  const [sellingCost, setSellingCost] = useState("");
  const [productDetails, setProductDetails] = useState(getLocaleStorage());

  useEffect(()=>{
    localStorage.setItem('productList',JSON.stringify(productDetails))
  })

  const inputHandler = (e) => {
    if (e.target.name === "category") {
      setProductCategory(e.target.value);
    }
    if (e.target.name === "productName") {
      setProductName(e.target.value);
    }
    if (e.target.name === "sellingPrice") {
      setSellingCost(e.target.value);
    }
  };

  const onInputHandler = () => {
    const allInputData = {
      id: new Date().getTime().toString(),
      category: productCategory,
      name: productName,
      price: Number(sellingCost) ,
    };
    setProductDetails([...productDetails, allInputData]);
    setProductName('')
    setProductCategory('')
    setSellingCost('')
  };
//   const deleteItem = (id) =>{
//     const updatedItems = productDetails.filter((elem)=>{
//         return elem.id !== id;
//     })
//     setProductDetails(updatedItems)
// }
 
  var sum = 0;
productDetails.forEach(item => {
    sum += item.price;
 });
  return (
    <>
      {/* input div */}
      <div>
        <div>
          <label>Product Category : </label>
          <input
            type="text"
            name="category"
            value={productCategory}
            placeholder="add product category"
            onChange={inputHandler}
          />
        </div><br/>
        <div>
          <label>Product Name : </label>
          <input
            type="text"
            name="productName"
            value={productName}
            placeholder="add Product name"
            onChange={inputHandler}
          />
        </div><br/>
        <div>
          <label>Selling Price : </label>
          <input
            type="number"
            name="sellingPrice"
            value={sellingCost}
            placeholder="add selling price"
            onChange={inputHandler}
          />
        </div><br/>
        <div>
          <button onClick={onInputHandler}>add product</button>
        </div>
      </div>

      {/* output div */}
      <div>
        {productDetails.map((item) => {
          return (
            <OutputList id={item.id}  name={item.name} category={item.category} price={item.price}  setProductDetails={ setProductDetails}  productDetails={productDetails}/>
          );
        })}
      </div>

      {/* total  */}

      <div>
         <h2>total : {sum}</h2>
      </div>
    </>
  );
};

export default Ecommerce;
