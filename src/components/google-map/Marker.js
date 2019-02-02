import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import DetailsContainer from './DetailsContainer';

export default class Marker extends React.Component{
  constructor(props) {
    super(props);
    this.showPopup = this.showPopup.bind(this);
    this.hidePopup = this.hidePopup.bind(this);
    this.state = {
      showPopup: false
    }
  }

  showPopup() {
    this.props.parent.setState({
      open: this.props.details.userId
    })
  }
  
  hidePopup() {
    this.props.parent.setState({
      open: null
    })
  }

  render(){
    return (
      <div style={{
        position: 'relative',
        fontSize: '30px',
        color: this.props.color, 
        display: 'inline-block',
        transform: 'translate(-50%, -50%)',
      }}>
        {
          this.props.parent.state.open == this.props.details.userId ?
            <DetailsContainer
              hidePopup={this.hidePopup}
              details={this.props.details}
            />
          :
            null
        }
        <FaMapMarkerAlt
          cursor='pointer'
          onClick={this.showPopup}
        />
      </div>
    )
  }
}
