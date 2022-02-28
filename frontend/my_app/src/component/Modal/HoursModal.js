import React, { Component } from 'react';
import { Card } from 'reactstrap';
import './style.css'




export default class HoursModal extends Component {
  constructor(props) {
    super(props);
    this.state = {

      count: 3
    };
  }

  render() {

    return <div>

      <Card className='card-mother ' style={{ width: 298, height: 210, border: 'none' }}>
        <div className='timeDesing'>
          <button onClick={() => this.setState({ count: this.state.count + 1 })} className='btntime'> +</button>
          <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <p id='counter'>{this.state.count}</p><p>Saat</p>
          </span>
          <button onClick={() => this.setState({ count: this.state.count - 1 })} className='btntime'> -</button>

        </div>
      </Card>


    </div>;
  }
}
