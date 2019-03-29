import React, {Component} from "react";
import {productService} from "../services/productService";

class CartComponent extends Component {


    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

    }

    handleChange(e) {
        const {name, value} = e.currentTarget;
        this.setState({[name]: value});
    }

    render() {
        let item = localStorage.getItem("order");
        let id = JSON.parse(item).map(it => it.id);
        productService.getProducts(id);
        return <>

            <form onSubmit={this.handleSubmit}>
                <button>Create order</button>
            </form>
        </>
    }
}

export default CartComponent