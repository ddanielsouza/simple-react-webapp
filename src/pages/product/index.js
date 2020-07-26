import React, {Component} from 'react';
import api from '../../services/api';
import './style.css';

export default class extends Component {
    state = {
        product: {},
    };

    async componentWillMount(){
        const { id } = this.props.match.params;

        const { data:product } = await api.get(`products/${id}`);
        this.setState({product});
    }

    render(){
        const { product } = this.state;
        console.log(product)
        return (
            <div className="product-info">
                <h1>{ product.title }</h1>
                <p>{ product.description }</p>
                <p>URL: <a href={product.url}>{product.url}</a></p>
            </div>
        );
    }
}