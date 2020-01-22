import React, { Component } from 'react';
import {connect} from 'react-redux';
import { getProducts } from './action';


class Products extends Component {
    
    productHandler = (e) => {
        const {dispatch} = this.props;
        dispatch(getProducts());
    }

    render() {
        const {products} = this.props;
        return (
            <div>
                <button onClick={(e) => this.productHandler(e)}>Get Products</button>

                {
                    products && products.map((item,i) => {
                        return (
                            <div key={i}>
                                <span>{item.name}</span>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    products: state.getProducts.products,
});



// const mapDispatchToProps =(dispatch) => ({
//     getProducts: getProducts,
// });

export default connect(mapStateToProps)(Products)
