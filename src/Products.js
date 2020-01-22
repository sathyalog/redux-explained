import React, { Component, Fragment } from 'react';
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
            <div><br/>
                <button className="btn btn-primary"onClick={(e) => this.productHandler(e)}>Get Products</button><br/><br/>
                
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                    {
                        products && products.map((item,i) => {
                        return (
                            <Fragment>
                                    <tr>
                                        <th scope="row">{item.id}</th>
                                        <td className="col-4">{item.name}</td>
                                        <td className="col-2">{item.quantity}</td>
                                        <td className="col-2">{item.price}</td>
                                    </tr>
                            </Fragment>   
                        )
                    })
                    
                }
                </tbody>
                                </table>
                            </div>
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
