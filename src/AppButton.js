import React from 'react';

class AppButton extends React.Component {
  render(){
    return <Button> I <Heart/> React</Button>
  }
}

class Button extends React.Component {
  render(){
    return <button className="btn btn-default">{this.props.children}</button>
  }
}

const Heart = () => <span className="glyphicon glyphicon-heart"></span>

export default AppButton