import {Component} from "react";
import React from "react";
import ProductComponent from "./ProductComponent";

class ProductListComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {products: [], isLoading: true};
    }

    componentDidMount() {
        this.setState({isLoading: true});

        fetch("http://localhost:8081/api/products")
            .then(response => response.json())
            .then(data => this.setState({products: data['content'], isLoading: false}))
    }

    render() {
        const {products, isLoading} = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }

        const productList = products.map(product => {
            console.log(product)
            return <ProductComponent key={product.name} product = {product}/>
        });

        return <>{productList}</>
    }
}

export default ProductListComponent