import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './style.css'
export default class ScrollNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isTop: false
    };
    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY > 400;
      if (isTop !== this.state.isTop) {
        this.onScroll(isTop);
      }
    });
  }

  onScroll(isTop) {
    this.setState({ isTop });
  }
  render() {
    
    return <div>

      <div className='scrollnav-mother' 
      style={{display: this.state.isTop ? 'block' : 'none' }}
      >    
         <div style={{display:'flex', flexDirection:'row', justifyContent:'center'}}> 
      
           <div > <Link to='/' className='scrollnav'><i style={{color:'green'}} class="fas fa-apple-alt"></i> Elma</Link></div>
           <div> <Link  className='scrollnav-child'> TEMİZLİK</Link></div>
           <div> <Link  className='scrollnav-child'> TADİLAT</Link></div>
           <div> <Link  className='scrollnav-child'> NAKLİYAT</Link></div>
           <div> <Link  className='scrollnav-child'> TAMİR</Link></div>
           <div> <Link  className='scrollnav-child'> ÖZEL DERS</Link></div>
           <div> <Link  className='scrollnav-child'> SAĞLIK</Link></div>
           <div> <Link  className='scrollnav-child'> DÜĞÜN</Link></div>
           <div> <Link  className='scrollnav-child'> DİĞER</Link></div>
      </div></div>
    </div>;
  }
}
