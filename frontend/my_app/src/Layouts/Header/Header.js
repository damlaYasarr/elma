import React, { Component, useEffect } from 'react'
//import "./../../styles/home.css";
import Tabs from './Tabs'
import Panel from './Panel'
import Searchbar from '../searchBar/Searchbar';
import { Link } from 'react-router-dom'
import './tabstyle.css'
import { Container } from 'reactstrap';
import "./../Cards/cart.css"
import { connect } from 'react-redux'
import * as cleanAction from './../../redux/actions/cleanAction'

import { bindActionCreators } from 'redux';

class HomeNavbar extends Component {


    componentDidMount() {
        this.props.actions.getTamir();
        this.props.actions.getUsers();
    }
    render() {
        const { users } = this.props.users
        const { tamirs } = this.props.tamirs
        console.log(users)
        return (
            <div>

                <div className='header-mother'>


                    <div className="header">
                        <ul className='header1'>

                            <Link  className='linkliheader' to="/"> ELMA </Link>
                        </ul>
                        <div className='header2'>
                            <Tabs>


                                <Panel title="temizlik">
                                    {users.map(u => {
                                        return (<div>
                                            <Container>
                                                <div className='cart-mother-mother'>

                                                    <div className='cart-mother' key={u.id}  >
                                                        <img
                                                            alt="Card image cap"
                                                            src="https://cdn.shrm.org/image/upload/c_crop%2Ch_3888%2Cw_6917%2Cx_0%2Cy_253/c_fit%2Cf_auto%2Cq_auto%2Cw_767/v1/Employee%20Relations/bored_worker_photo_k9vufj?databtoa=eyIxNng5Ijp7IngiOjAsInkiOjI1MywieDIiOjY5MTcsInkyIjo0MTQxLCJ3Ijo2OTE3LCJoIjozODg4fSwiMXgxIjp7IngiOjEzMDQsInkiOjAsIngyIjo1NjY2LCJ5MiI6NDM1NywidyI6NDM2MywiaCI6NDM1N319"

                                                        />
                                                        <div className='cart-title-mother' >
                                                            <p className='card-title'>
                                                                {u.temizlik}
                                                            </p>
                                                            <div className='btn-icon-info'> <i class="far fa-user-check"></i> 2342423 </div>
                                                            <div className='btn-icon-info'><i class="fas fa-star"></i> 3241415 </div>
                                                            <div>
                                                                <Link className='btn-link1' to='modal/carts'>
                                                                    <button id='btn-link' color='success' className='btn'   >
                                                                        Button
                                                                    </button>
                                                                </Link> </div>
                                                        </div>
                                                    </div>




                                                </div>

                                            </Container>

                                        </div>);
                                    })


                                    }

                                </Panel>
                                <Panel className='navlink' title='tadilat'>



                                </Panel>

                                <Panel className='navlink' title='nakliyat'>
                                </Panel>
                                <Panel className='navlink' title='tamir'>
                                    {tamirs.map(u => {
                                        return (<div>
                                            <Container>
                                                <div className='cart-mother-mother'>

                                                    <div className='cart-mother' key={u.id}  >
                                                        <img
                                                            alt="Card image cap"
                                                            src="https://cdn.shrm.org/image/upload/c_crop%2Ch_3888%2Cw_6917%2Cx_0%2Cy_253/c_fit%2Cf_auto%2Cq_auto%2Cw_767/v1/Employee%20Relations/bored_worker_photo_k9vufj?databtoa=eyIxNng5Ijp7IngiOjAsInkiOjI1MywieDIiOjY5MTcsInkyIjo0MTQxLCJ3Ijo2OTE3LCJoIjozODg4fSwiMXgxIjp7IngiOjEzMDQsInkiOjAsIngyIjo1NjY2LCJ5MiI6NDM1NywidyI6NDM2MywiaCI6NDM1N319"

                                                        />
                                                        <div className='cart-title-mother' >
                                                            <p className='card-title'>
                                                                {u.tamir}
                                                            </p>
                                                            <div className='btn-icon-info'> <i class="far fa-user-check"></i> 2342423 </div>
                                                            <div className='btn-icon-info'><i class="fas fa-star"></i> 3241415 </div>
                                                            <div>
                                                                <Link className='btn-link1' to='modal/carts'>
                                                                    <button id='btn-link' color='success' className='btn'   >
                                                                        Button
                                                                    </button>
                                                                </Link> </div>
                                                        </div>
                                                    </div>




                                                </div>

                                            </Container>

                                        </div>);
                                    })


                                    }

                                </Panel>
                                <Panel className='navlink' title='özelders'>
                                </Panel>
                                <Panel className='navlink' title='sağlık'>
                                </Panel>
                                <Panel className='navlink' title='Temizlik'>
                                </Panel>
                            </Tabs>
                        </div>
                        <ul className='header1' >


                            <li>
                                <Link className='linkli' to='/support'>YARDIM</Link>
                            </li>
                            { /**  to='/setting'*/}
                            {/* to='/pro-armut' */}
                            <li>
                                <Link className='linkli' to='/profesyonel-uyeol'  >HİZMETVER</Link>
                            </li>
                            <li>
                                <Link className='linkli' to="/login" >GİRİŞ</Link>
                            </li>
                        </ul>



                    </div >
                              
            <div className='search-header'>
                <h1 style={{ color: 'white' }}> Hizmet piş ağzıma düş</h1>
                <h5 style={{ color: 'white', fontSize: 21 }}>ihtiyacın olan hizmete kolayca ulaş</h5>
                <Searchbar  />
            </div> 


                </div>
                <div>

                </div>

            </div>
        )

    }
}




const mapStateToProps = (state) => ({
    tamirs: state.tamirs,
    users: state.users
})
function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getTamir: bindActionCreators(cleanAction.getTamir, dispatch),
            getUsers: bindActionCreators(cleanAction.getUsers, dispatch),

        }
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(HomeNavbar)