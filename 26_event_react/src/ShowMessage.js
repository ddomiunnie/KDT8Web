import { Component } from 'react';

class ShowMessage extends Component {
  showMessage = () => {
    alert(this.props.message);
  };

  render() {
    return (
      <>
        <button onClick={this.showMessage}>Show Message</button>
      </>
    );
  }
}

export default ShowMessage;
