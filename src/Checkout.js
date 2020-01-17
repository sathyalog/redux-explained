import React, { Component, Fragment } from 'react'

export class Checkout extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            price:'',
            quantity:'',
            total: 0
        }
    }
    
    render() {
        const inputHandler = (e) => {
            e.preventDefault();
            this.setState({
                price: e.target.value
            },() => {
                console.log(this.state.price);
            });
        }
        
        const selectHandler = (e) => {
            e.preventDefault();
            this.setState({
                quantity: e.target.value
            },() => {
                console.log(this.state.quantity);
            });
        }

        return (
            <Fragment>
                <table>
                    <tbody>
                        <tr>
                        <td>
                            <label htmlFor="price">Price</label>
                            <input type="number" name="price" onBlur={(e) => inputHandler(e)}/>
                        </td>
                        <td>
                            <label htmlFor="quantity">Quantity</label>
                            <select onChange={e => selectHandler(e)}>
                            <option val="1">1</option>
                            <option val="2">2</option>
                            <option val="3">3</option>
                            </select>
                        </td>
                        <td>
                            Total: {this.state.total}
                        </td>
                        </tr>
                    </tbody>
                    </table>
            </Fragment>
        )
    }
}

export default Checkout
