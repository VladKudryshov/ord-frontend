import React, {Component} from "react";

class ProductComponent extends Component {


    constructor(props) {
        super(props);
        this.state = {
            product: this.props.product,
            quantity: 0
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        const {product: {id}, quantity} = this.state;
        let item  = {id, quantity}
        let oreder = JSON.parse(localStorage.getItem('order'));
        let oldItem = oreder ? oreder.find(i => i.id === id) : [];
        if(oreder && oldItem){
            oldItem.quantity = quantity;
            localStorage.setItem('order', JSON.stringify(oreder));
            return;
        }else if(!oldItem && oreder){
            oreder.push(item);
            console.log(oreder)
            localStorage.setItem('order', JSON.stringify(oreder));
            return;
        }

        localStorage.setItem('order', JSON.stringify([item]))

    }

    handleChange(e) {
        const {name, value} = e.currentTarget;
        this.setState({[name]: value});
    }

    render() {
        const { product: {name, category, price} , quantity} = this.state;
        return <>
            <div>{name}</div>
            <div>{category}</div>
            <div>{price}</div>
            <form onSubmit={this.handleSubmit}>
                <input type="number" name="quantity" value={quantity} onChange={this.handleChange}/>
                <button>Add to cart</button>
            </form>
        </>
    }
}

export default ProductComponent