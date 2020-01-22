import React, { Component, Fragment } from 'react';
import {setPrice, setQuantity, setTotal} from './action';
import {connect} from 'react-redux';

class Checkout extends Component {

    inputHandler = (e) => {
        const {dispatch} = this.props;
        e.preventDefault();
        dispatch(setPrice(e.target.value));
        this.updateTotal();
    }

    handleChange =async (e) => {
        const {dispatch} = this.props;
        e.preventDefault();
        await dispatch(setPrice(e.target.value));
        this.updateTotal();
    }
    
    selectHandler =async (e) => {
        const { dispatch} = this.props;
        e.preventDefault();
        await dispatch(setQuantity(e.target.value));
        this.updateTotal();
    }

    updateTotal = () => {
        const { price, quantity, dispatch } = this.props;
        const total = price * quantity;
        dispatch(setTotal(total));
    }
    
    render() {
        // get from store
        const {total} = this.props;
        return (
            <Fragment>
                <table>
                    <tbody>
                        <tr>
                        <td>
                            <label htmlFor="price">Price: </label>
                            <input type="number" name="price" className="form-control" onBlur={(e) => this.inputHandler(e)} onChange={(e) => this.handleChange(e)}/>
                        </td>
                        <td>
                            <label htmlFor="quantity">Quantity</label>
                            <select className="form-control" onChange={e => this.selectHandler(e)}>
                            <option val="1">1</option>
                            <option val="2">2</option>
                            <option val="3">3</option>
                            </select>
                        </td>
                        
                        </tr>
                    </tbody>
                    </table><br/>
                    {
                            total && (
                                <div>
                                    <b>Total:</b> {total ? total : 0}
                                </div>
                            )
                        }
            </Fragment>
        )
    }
}

// state is redux store state
const mapStateToProps = (state) => ({
    price: state.setPrice,
    quantity: state.setQuantity,
    total: state.setTotal
});

export default connect(mapStateToProps)(Checkout)
