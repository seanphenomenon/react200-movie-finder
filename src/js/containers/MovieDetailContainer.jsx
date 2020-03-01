import React from 'react';
import {NavLink} from 'react-router-dom';

export default class MovieDetailContainer extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <h1 id='container-name'>Movie Detail Container</h1>
        <div className="row">
          <NavLink to='/'>
          <button className="btn btn-info" type='button'>Go Back</button>
          </NavLink>
          <br></br>
          <br></br>
          <hr />
        </div>

        <div className="row">
          <div className='col-md-6'>
            <div className='card'>
              <div className='card-body'>
                <p>Image</p>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='card'>
              <div className='card-header'>
                <div className='card-body'>
                  <p>Viewing movie {this.props.match.params.id}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


