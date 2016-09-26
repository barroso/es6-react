import React from 'react';

import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

const boxStyle = {
  border: '1px solid #DEDEDE',
  width: 400,
  padding: 50,
  borderRadius: 4,
  textAlign: 'center'
};

const titleStyle = {
  fontSize: 24,
  marginTop: -10,
  marginBottom: 25,
}

const listStyle = {
  border: '1px solid #DEDEDE',
  width: 300,
  height: 200,
  borderRadius: 4,
  textAlign: 'left',
  overflow: 'scroll'
};

const styleButton = {
  width: 300,
  backgroundColor: '#FFE',
  marginTop: 22,
  fontSize: 18,
  height: 48
};

const styleButtonLabel = {
  fontSize: 16,
  letterSpacing: 1,
  color: '#FFF',
  textTransform: 'capitalize'
};


injectTapEventPlugin();

class ListExampleMessages extends React.Component {

  render() {
    const Title = () => <h4 style={titleStyle}>{this.props.title}</h4>
    const items = this.props.items.map(function (value) {
      return <Item key={value}>{value}</Item>;
    });

    return (
      <MuiThemeProvider>
        <div style={boxStyle} className="jumbotron">
          <Title/>
          <div style={listStyle}>
            <List>
              {items}
            </List>
          </div>
          <Button>Selecionar</Button>
        </div>
      </MuiThemeProvider>
    )
  }
}

class Item extends React.Component {
  render() {
    return (
      <div>
        <ListItem primaryText={this.props.children}/>
        <Divider/>
      </div>
    )
  }
}

class Button extends React.Component {
  render() {
    return (
      <RaisedButton
        label={this.props.children}
        style={styleButton}
        backgroundColor="#103b61"
        labelStyle={styleButtonLabel}/>
    )
  }
}


export default ListExampleMessages;
