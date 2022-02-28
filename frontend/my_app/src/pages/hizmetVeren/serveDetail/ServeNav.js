import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './../style.css'
import '../../accountinfo/style.css'
import { DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, UncontrolledDropdown } from 'reactstrap';

export default class ServeNav extends Component {
  render() {
    return (<div className='serve-nav-mother '>

      <Nav style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} >
        <div className='serve-nav1'>
          <NavItem  >    {/* elma iconu ekle */}
            <Link className='serve-nav2-link' style={{ color: 'inherit', textDecoration: 'inherit' }} to='/'>
              Elma</Link>
          </NavItem>

        </div>


        <div className=' serve-nav2'>
          <NavItem >
            <Link to='/pro-armut' className='serve-nav2-child' style={{ color: 'inherit', textDecoration: 'inherit' }} >işlerim</Link>
          </NavItem>
          <NavItem >
            <Link className='serve-nav2-child' style={{ color: 'inherit', textDecoration: 'inherit' }} to='/setting/services'  >Servislerim</Link>
          </NavItem>

          <NavItem>
            <Link to='/settings/balance/transactions' className='serve-nav2-child' style={{ color: 'inherit', textDecoration: 'inherit' }}   >bakiye</Link>
          </NavItem>
          <UncontrolledDropdown nav inNavbar >
            <DropdownToggle className='serve-nav2-child' nav caret style={{ color: 'inherit' }}>

               img
              username
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem >

                <Link className='serve-nav2-child' style={{ color: 'inherit', textDecoration: 'inherit' }} to='/setting' > Ayarlar</Link>
              </DropdownItem>
              <DropdownItem className='dropdownitem'>
                <Link className='serve-nav2-child' style={{ color: 'inherit', textDecoration: 'inherit' }} to='/'>Exit</Link>
              </DropdownItem>

            </DropdownMenu>
          </UncontrolledDropdown>

        </div>
      </Nav>



    </div>);
  }
}
