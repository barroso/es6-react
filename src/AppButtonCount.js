import React from 'react';

class AppButtonCount extends React.Component {
  constructor() {
    super();
    this.state = { val: 0 };
    this.update = this.update.bind(this);
  }

  update() {
    this.setState({ val: this.state.val + 1 })
  }

  render() {
    console.log('rendeting...')
    return <button className="btn btn-default"
      onClick={this.update}>{this.state.val}</button>
  }
}

export default AppButtonCount