import React, {Component} from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import './style.css';

export default class extends Component{
    state = {
        products: [],
        productInfo: {},
        page: 1,
    };

    componentWillMount(){
        this.loadProducts();
    }

    loadProducts = async (page = 1) =>{
        const response = await api.get('/products', {params: {page}});
        const {docs, ...productInfo} = response.data;
        
        this.setState({products: docs, productInfo, page});
    }

    prevPage = () =>{
        const { page } = this.state;
        if(page > 1){
            this.loadProducts(page - 1);
        }
    }
    nextPage = () =>{
        const {page, productInfo:{pages: maxPages}} = this.state;
        if(page < maxPages){
            this.loadProducts(page + 1);
        }
    }

    render(){
        const { products, page, productInfo:{pages: maxPages} } = this.state;

        return (
            <div className="product-list">
                {
                    products.map((product, index) =>(
                        <article key={index}> 
                            <strong>{ product.title }</strong>
                            <p>  {product.description} </p>
                            <Link to={`/products/${product._id}`}>Acessar</Link>
                        </article>
                    ))
                }

                <div className="actions">
                    <button onClick={this.prevPage} disabled={page <= 1}>Anterior</button>
                    <button onClick={this.nextPage} disabled={page >= maxPages}>Próximo</button>
                </div>
            </div>
        );
    }
}