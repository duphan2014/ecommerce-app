// src/components/ProductDetails.js
import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import jsonProducts from "./data/products.json";

const ProductDetails = () =>{
	const {id} = useParams();
	const [product, setProduct] = useState(null);

	useEffect(()=>{
		/*
    	axios.get(`/data/products.json`).then((response) => {
    		const product = response.data.find((p) => p.id === parseInt(id));
    		//const product = response.data.find(function(p){p.id === parseInt(id)});
    		setProduct(product);
    	});
    	*/
    	const product=jsonProducts.find((p) => p.id === parseInt(id));
    	setProduct(product);
	}, [id]);

	return (
		<div>
		  {product ? (
		    <div>
		      <h2>{product.name}</h2>
		      <p>{product.description}</p>
		      <p>Price: ${product.price}</p>
		    </div>
		  ) : (
		    <p>Product not found</p>
		  )}
		</div>
	);
};

export default ProductDetails;