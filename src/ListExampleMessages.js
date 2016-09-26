import React from 'react';

import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

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
  borderRadius: 4,
  textAlign: 'left'
};

const styleButton = {
  width: 300,
  backgroundColor: '#FFE',
  marginTop: 22,
  fontSize: 18,
  height: 48
};

const ListExampleMessages = () => (
  <MuiThemeProvider>
      <div style={boxStyle} className="jumbotron">
        <h4 style={titleStyle}>Selecione o Licenciado</h4>
        <div style={listStyle}>
          <List >
            <ListItem primaryText="Empresa 01"/>
            <Divider/>
            <ListItem primaryText="Empresa 02"/>
            <Divider/>
            <ListItem primaryText="Empresa 03"/>
            <Divider/>
            <ListItem primaryText="Empresa 04"/>
          </List>
        </div>
        <RaisedButton label="Selecionar" style={styleButton} backgroundColor="#103b61" labelStyle={{color: '#FFF'}}/>
      </div>

  </MuiThemeProvider>
);

export default ListExampleMessages;
