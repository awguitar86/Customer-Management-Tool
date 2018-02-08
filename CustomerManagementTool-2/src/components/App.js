import React, { Component } from 'react';
import './App.css';

import Header from './Header/Header';
import List from './List/List';
import Workspace from './Workspace/Workspace';
import { getCustomerList, postCustomer, getCustomer } from '../customers';



class App extends Component {
  constructor() {
    super()
    this.state = {
      customerList: undefined,
      initialLoad: true,
      creating: false,
      currentCustomer: null
    }

    this.startNewcustomer = this.startNewcustomer.bind(this);
    this.createCustomer = this.createCustomer.bind(this);

  }

  componentDidMount(){
    getCustomerList()
      .then( res => {
        this.setState({ customerList: res });
      })
  }

  startNewcustomer(){
    this.setState({ 
      creating: true, 
      initialLoad: false, 
      currentCustomer: null 
    })
  }

  createCustomer(customer) {
    postCustomer(customer)
      .then( res => {
        getCustomerList()
          .then( res => {
            this.setState({ 
              initialLoad: true,
              crearting: false,
              customerList: res })
          })
      })
  }

  render() {
    return (
      <div>
        <Header />
        <div className="App__container">
          {
            this.state.customerList ?
            <List
              customerList={this.state.customerList || []}
              startNewcustomer={this.startNewcustomer}
              />
            : null
          }
          <Workspace initialLoad={this.state.initialLoad}
                    currentCustomer={this.state.currentCustomer}
                    creating={this.state.creating}
                  />
        </div>
      </div>
    )
  }
}

export default App;
