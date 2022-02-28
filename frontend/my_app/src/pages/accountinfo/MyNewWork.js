import React, { Component } from 'react';
import './style.css'
import 'bootstrap'
import { Link } from 'react-router-dom';
import Detail from '../../component/Modal/Detail';

export default class MyNewWork extends Component {
  state = {
    showModaldetail: true
  };
  showModalx = e => {
    this.setState({
      showModaldetail: !this.state.showModaldetail
    });
  };
  rendermenu() {
    return (<div className='dropdown-content1'>
      <button
        onClick={e => {
          this.showModalx(e);
        }}
        type="button" data-toggle="modal" data-target="#myModal" >talebi incele</button>
      <button>talebi iptal et</button>



    </div>)
  }
  state = {
    show: false,
  }
  toggle = () => this.setState((currentState) => ({ show: !currentState.show }));

  render() {

    return (
      <div  >
        <div className='btn-btn' >
          <div className='btn-mother'>
            <div className='btn-header'>
              <Link to='/customer'>  <button className='btn-child'> işlerim
              </button> </Link>


              <Link to='/customer/oldjob'> <button

                className='btn-child1' >
                eski işlerim</button></Link>
            </div>

            <p > tarih</p>
            <div className='worksContainer-mother' >

              <div className='worksContainer-new' >
                <div style={{
                  display: 'flex', flexDirection: 'row', justifyContent: 'space-between'
                }}>
                  <p className='new-p1'>9 şubat 2022</p>
                  <div className='dropdown1'>
                    <button onClick={this.toggle} className='dot'>

                    </button>

                    {this.state.show && this.rendermenu()}
                  </div>

                </div>

                <p className='new-p2'>Diferansiyel Denklemler Özel Ders</p>
                <hr />
                <p className='new-p3'>Talebin için teklifler toplanıyor. Teklifler gelmeye başladığında hemen bildireceğiz</p>
                <button className='new-btn'>DETAYLARA BAK</button>



              </div>
            </div>
            <p>tarih</p>
            <div><i class="fas fa-chevron-left"></i> page number
              <i class="fas fa-chevron-right"></i>
            </div>

          </div>


          <br></br>
          <br></br>
          <br></br>

        </div>

        <Detail onClose={this.showModalx} showModaldetail={this.state.showModaldetail} />

      </div>);
  }
}
