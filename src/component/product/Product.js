import React from 'react'

export default function Product(props) {

  console.log(props.inventoryList)
  return (
    <div>
      <p>{props.inventoryList.name}</p>
      <p>{props.inventoryList.price}</p>
      <img src={props.inventoryList.imgURL} alt='Product Images' width="210" />
    </div>
  )
}
