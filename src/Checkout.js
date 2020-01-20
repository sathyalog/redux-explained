import React, { Component, Fragment } from 'react';
import {setPrice, setQuantity} from './action';
import {connect} from 'react-redux';

export class Checkout extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            price:'',
            quantity:'',
            total: 0
        }
    }

    inputHandler = (e) => {
        const {price, dispatch} = this.props;
        e.preventDefault();
        dispatch(setPrice(e.target.value));
        //console.log(price);
    }

    handleChange = (e) => {
        const {price, dispatch} = this.props;
        e.preventDefault();
        dispatch(setPrice(e.target.value));
        //console.log(price);
    }
    
    selectHandler = (e) => {
        const { quantity, dispatch} = this.props;
        e.preventDefault();
        dispatch(setQuantity(e.target.value));
    }
    
    render() {
        const {price, quantity} = this.props;
        const total = price * quantity;
        return (
            <Fragment>
                <table>
                    <tbody>
                        <tr>
                        <td>
                            <label htmlFor="price">Price</label>
                            <input type="number" name="price" onBlur={(e) => this.inputHandler(e)} onChange={(e) => this.handleChange(e)}/>
                        </td>
                        <td>
                            <label htmlFor="quantity">Quantity</label>
                            <select onChange={e => this.selectHandler(e)}>
                            <option val="1">1</option>
                            <option val="2">2</option>
                            <option val="3">3</option>
                            </select>
                        </td>
                        <td>
                            Total: {total ? total : 0}
                        </td>
                        </tr>
                    </tbody>
                    </table>
            </Fragment>
        )
    }
}

// state is redux store state
const mapStateToProps = (state) => ({
    price: state.setPrice,
    quantity: state.setQuantity,
    total: state.total
});

export default connect(mapStateToProps)(Checkout)
