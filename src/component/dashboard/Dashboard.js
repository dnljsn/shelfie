import React, { Component } from 'react'
import Product from '../product/Product';

export default class Dashboard extends Component {

    render() {

        const products = this.props.inventoryList.map(element => {
            return (

                <Product
                    inventoryList={element}
                />
                

        )
        })

        return (
            <div>
                Dashboard
                {products}
            </div>
        )
    }
}
