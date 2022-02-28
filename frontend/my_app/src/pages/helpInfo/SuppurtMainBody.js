import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import Searchbar from '../../Layouts/searchBar/Searchbar';
import './style.css'

export default class SuppurtMainBody extends Component {
  render() {
    return <div>


      <div className='navbar-child'>
        <img className='navbar-child' src='https://miro.medium.com/max/1000/1*hWsO4b8NUBfDp_BGUq_VvQ.jpeg' />
        <div className='navbar-child-search'>  <Searchbar /> </div>
      </div>
      <Container style={{ width: '75%' }}>

        <div className='btn-help-mother'>

          <Link className='btn-help-child-link' to='/support/detail'> <div> <button className='btn-help-child'> GARİP F//#endregion  </button></div></Link>
          <Link className='btn-help-child-link' to='/support/detail'> <div> <button className='btn-help-child'> GARİP F//#endregion  </button></div></Link>
          <Link className='btn-help-child-link' to='/support/detail'> <div> <button className='btn-help-child'> GARİP F//#endregion  </button></div></Link>


        </div>
        <hr style={{ marginTop: '45px' }} />

        <div className='help-questions'>
          <div>
            <Link className='help-writing' to='/support/detail' > Ödeme <br /> Bana neden fatura geldi </Link>
          </div>
          <div className='help-writing-child'> Makalenin oluşturulma zamanı : ### <i class="fad fa-comment"></i>  ##</div>



        </div>
        <hr style={{ marginTop: '20px' }} />

      </Container>





    </div>;
  }
}
