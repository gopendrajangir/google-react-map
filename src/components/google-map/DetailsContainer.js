import React from 'react';
import Details from './Details';
import { FaWindowClose } from 'react-icons/fa';

export default class DetailsContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        style={{
          boxSizing: 'border-box',
          position: 'absolute',
          bottom: '110%',
          display: 'flex',
          lineSpacing: '10px',
          transform: 'translateX(-50%)',
          left: '50%',
          padding: '10px',
          backgroundColor: 'white',
          color: '#666',
          fontSize: '16px',
          width: 'auto',
          letterSpacing: '1px'      
        }}
      >
        <Details
          data={this.props.details}
        />
        <FaWindowClose
          style={{
            fontSize: '25px',
            cursor: 'pointer',
          }}
          onClick={
            this.props.hidePopup
          }
        />
      </div>
    )
  }
};
