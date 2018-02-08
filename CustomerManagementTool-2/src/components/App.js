import React, { Component } from 'react';
import './App.css';

import Header from './Header/Header';
import List from './List/List';
import Workspace from './Workspace/Workspace';
import { getCustomerList, postCustomer, getCustomer, updateCustomer } from '../customers';



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
    this.selectCustomer = this.selectCustomer.bind(this);
    this.saveEdit = this.saveEdit.bind(this);

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
              creating: false,
              customerList: res })
          })
      })
  }

  selectCustomer(id){
    getCustomer(id)
      .then( res => {
        this.setState({
          currentCustomer: res,
          initialLoad: false
        })
      })
  }

  saveEdit(id, obj){
    updateCustomer(id, obj)
      .then( res => {
        getCustomerList()
          .then( list => {
            this.setState({
              customerList: list,
              currentCustomer: res
            })
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
                    createCustomer={this.createCustomer}
                    currentCustomer={this.state.currentCustomer}
                    creating={this.state.creating}
                    saveEdit={this.saveEdit}
                  />
        </div>
      </div>
    )
  }
}

export default App;
