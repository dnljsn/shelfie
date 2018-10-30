import React, { Component } from 'react'

export default class Form extends Component {
  constructor() {
    super();

    this.state = {
      userInputImgURL: "",
      userInputProductName: "",
      userInputPrice: 0
    };
  }

  userInputImgURL(val) {
    this.setState({
      userInputImgURL: val
    })
  }
  userInputProductName(val) {
    this.setState({
      userInputProductName: val
    })
  }

  userInputPrice(val) {
    this.setState({
      userInputPrice: val
    })
  }

  handleKeyPressImgURL(e) {
    if (e === 'Enter') {
      this.handleAddClick()
    }
  }

  handleKeyPressProductName(e) {
    if (e === 'Enter') {
      this.handleAddClick()
    }
  }

  handleKeyPressPrice(e) {
    if (e === 'Enter') {
      this.handleAddClick()
    }
  }

  handleCancelClick() {
    this.setState({
      userInputImgURL: "",
      userInputProductName: "",
      userInputPrice: ""
    })
  }

  handleAddClick() {
    this.setState({
      userInputImgURL: "",
      userInputProductName: "",
      userInputPrice: ""
    })
  }

  render() {
    return (
      <div>
        <input
          value={this.state.userInputImgURL}
          onChange={(e) => this.userInputImgURL(e.target.value)}
          onKeyPress={(e) => this.handleKeyPressImgURL(e.key)}
          type="text"
          placeholder="Insert Image URL Here"
        />
        <input
          value={this.state.userInputProductName}
          onChange={(e) => this.userInputProductName(e.target.value)}
          onKeyPress={(e) => this.handleKeyPressProductName(e.key)}
          type="text"
          placeholder="Insert Product Name Here"
        />
        <input
          value={this.state.userInputPrice}
          onChange={(e) => this.userInputPrice(e.target.value)}
          onKeyPress={(e) => this.handleKeyPressPrice(e.key)}
          type="number"
          placeholder="Insert Price Here"
        />
        <button
          onClick={() => this.handleCancelClick()}
        >Cancel</button>
        <button
        onClick={() => this.handleAddClick()}
        >Add to Inventory</button>
      </div>
    )
  }
}
