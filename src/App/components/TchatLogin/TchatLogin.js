import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Mybutton from '../Mybutton/Mybutton';
export default class TchatLogin extends Component {
  constructor(props){
    super(props);
    this.state={name:''}
  }
  render() {
    return (
      <div style={{textAlign:'center',border:'1px solid black',borderRadius:'7px',position:"absolute",top:'30vh',left:'30vw',right:'30vw',padding:'20px'}}>
       <h1>Connectez vous</h1>
        <h3>Nom :</h3>
        <input type="text" placeholder="saisissez ici" style={{marginBottom:'20px', border:'none', textAlign:'center'}} value={this.state.name}  onChange={e=>this.setState({name:e.currentTarget.value})}/>
        <br/>
        {/* {this.props.children} */}
        <Link to={`/tchat/${this.state.name}`}><Mybutton>Connexion</Mybutton></Link>
      </div>
    );
  }
}
TchatLogin.propType={}
TchatLogin.defaultProps={}