import React, { Component } from 'react';
import Cart from '../../../Layouts/Cards/Cart';
import NavAccount from '../../../Layouts/Header/NavAccount';
import MyOldworkcomponent from '../MyOldworkcomponent';


export default class MyOldWorks extends Component {
  render() {
    return <div>
       <NavAccount/>
      <MyOldworkcomponent/> 
      <Cart/>



    </div>;
  }
}
