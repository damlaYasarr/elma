import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';
import './cart.css'
export default class TrendCart extends Component {
  render() {
    return (<div>

<Container style={{width:'60%'}}>
      
      <div className='cart-mother' >
        <img
          alt="Card image cap"
          src="https://cdn.shrm.org/image/upload/c_crop%2Ch_3888%2Cw_6917%2Cx_0%2Cy_253/c_fit%2Cf_auto%2Cq_auto%2Cw_767/v1/Employee%20Relations/bored_worker_photo_k9vufj?databtoa=eyIxNng5Ijp7IngiOjAsInkiOjI1MywieDIiOjY5MTcsInkyIjo0MTQxLCJ3Ijo2OTE3LCJoIjozODg4fSwiMXgxIjp7IngiOjEzMDQsInkiOjAsIngyIjo1NjY2LCJ5MiI6NDM1NywidyI6NDM2MywiaCI6NDM1N319"
          
        />
        <div className='cart-title-mother' >
          <p className='card-title'>
           şehirler arası nakliye
          </p>
          <div className='btn-icon-info'> <i class="far fa-user-check"></i> 2342423 </div>
          <div className='btn-icon-info'><i class="fas fa-star"></i> 3241415 </div>

           <Button id='btn-link'  color='success' className='btn'   >
            <Link className='btn-link1' to='modal/carts'>   Button   </Link>
            
           
          </Button> 
        </div>
      </div>

  

  </Container>
  
    


    </div>);

  }
}
