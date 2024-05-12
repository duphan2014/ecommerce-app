import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import jsonProducts from "./data/products.json";

const Home = ()=>{
	const [products, setProducts] = useState([]);

	useEffect(()=>{
		/*
		axios.get("./data/products.json").then((response)=>{
			setProducts(response.data);
		}).catch((error) => {
        console.error("Error fetching data:", error);
      	});
      	*/
      	setProducts(jsonProducts);
	},[]);
	console.log(products);

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {/* Display product ID and name */}
            <Link to={`/product/${product.id}`}>
              {product.id} - {product.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;