import React from 'react';

import { Link } from 'react-router';
import Room from './Room'

import '../gitter.scss'

class Home extends React.Component {

  componentWillMount(){
  	const token = 'a39d1e6785d4b4ae9ad1debd7a96301e15f72652';
  	 
  	fetch(`https://api.gitter.im/v1/user?access_token=${token}`)
		.then(response => response.json() )
    .then(responseJson => this.props.getUser(responseJson))

    fetch(`https://api.gitter.im/v1/rooms/?access_token=${token}`)
		.then(response => response.json() )
    .then(responseJson =>this.props.getRooms(responseJson))   
  }
  
  handleClick(room){
    const token = 'a39d1e6785d4b4ae9ad1debd7a96301e15f72652';
    this.props.clear();
    this.props.getRoom(room);

    fetch(`https://api.gitter.im/v1/rooms/${room.id}/chatMessages?access_token=${token}`)
    .then(response => response.json() )
    .then(responseJson =>this.props.getMessages(responseJson) );
  }
  
  handlePressEnter(e){
    if (e.key==='Enter') {
        this.postMessage(this.props.room.item.id) 
      }
  }
  
  postMessage(roomId){

    const headers = new Headers ({
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": "Bearer a39d1e6785d4b4ae9ad1debd7a96301e15f72652"
      });
    const init = { 
      method: 'POST',
      headers,
      body:JSON.stringify({text: this.props.room.message})
      };
    
    fetch(`https://api.gitter.im/v1/rooms/${roomId}/chatMessages`, init)
    .then(() => this.handleClick(this.props.room.item))
    .catch( error => console.error(error)); 

    this.props.clear();
  }
  
  render() {
    const messages = this.props.messages;
    const rooms = this.props.rooms;
    const room = this.props.room;
    const miniPanel = 
      <nav className="minibar">
        <ul className="minibar__menu">
          <li className="minibar__item" >
              <svg id="svg-home" className="svg-home icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="-2 1 49 45">
                <path className="icon" d="M42.4 8.1c2 2.5 3 5.2 3 8.1 0 2.9-1 5.7-3 8.1s-4.8 4.5-8.3 5.9c-3.5 1.4-7.3 2.2-11.4 2.2-1.2 0-2.4-.1-3.7-.2-3.3 3-7.2 5-11.7 6.1-.8.2-1.8.4-2.9.6-.3 0-.5-.1-.7-.3-.2-.2-.3-.4-.4-.7-.1-.1-.1-.2 0-.3 0-.1.1-.2.1-.3 0 0 0-.1.1-.2s.1-.2.2-.2.1-.1.2-.2l.2-.2c.1-.1.4-.4.8-.9s.7-.8.9-1c.2-.2.4-.5.8-1 .3-.5.6-.9.8-1.3.2-.4.4-.9.7-1.5.3-.6.5-1.2.7-1.9-2.7-1.5-4.7-3.4-6.3-5.6C.8 21.1 0 18.7 0 16.2c0-2.9 1-5.7 3-8.1 2-2.5 4.8-4.5 8.3-5.9C14.8.7 18.6 0 22.7 0c4.1 0 7.9.7 11.4 2.2 3.5 1.4 6.2 3.4 8.3 5.9zM32.4 5c-3-1.2-6.2-1.8-9.7-1.8-3.4 0-6.7.6-9.7 1.8S7.7 7.8 5.9 9.8c-1.8 2-2.6 4.1-2.6 6.5 0 1.9.6 3.7 1.8 5.4 1.2 1.7 2.9 3.2 5.1 4.4l2.2 1.3-.7 2.4c-.4 1.5-1 3-1.8 4.4 2.6-1.1 4.9-2.5 7-4.3l1.1-1 1.4.2c1.2.1 2.3.2 3.3.2 3.4 0 6.7-.6 9.7-1.8 3-1.2 5.4-2.8 7.1-4.7s2.6-4.1 2.6-6.5c0-2.3-.9-4.5-2.6-6.5-1.8-2-4.1-3.6-7.1-4.8z"></path>
              </svg>
          </li>
          <li className="minibar__item" >
              <svg id="svg-search" className="svg-search icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43.7 43.5">
               <path className="icon" d="M15.7 2.4C23 2.4 29 8.2 29 15.7S23.2 29 15.7 29 2.4 23.2 2.4 15.7 8.2 2.4 15.7 2.4m0-2.4C6.9 0 0 6.9 0 15.7s6.9 15.7 15.7 15.7 15.7-6.9 15.7-15.7S24.3 0 15.7 0z"></path>
                <path className="icon" d="M42.6 43.5c-.4 0-.5-.2-.9-.4L25.8 27c-.5-.5-.5-1.3 0-1.6.5-.5 1.3-.5 1.6 0l15.9 16.1c.5.5.5 1.3 0 1.6-.2.4-.3.4-.7.4z"></path>
              </svg>
          </li>
          <li className="minibar__item">
            <span>+</span> 
          </li>
        </ul> 
      </nav>
    
    const conversationPanel = rooms
      ? <section className="search">
          <h4> ALL CONVERSATIONS </h4>
          <ul className="rooms">
              {rooms.map( (item,i) => 
                <li className="rooms__item"
                  key={i}
                  onClick={this.handleClick.bind(this, item)}
                >
                  <Link to={`/home/${item.name}`}>
                    { <img src={item.avatarUrl} width={25} height={25}/>}
                    {item.name}
                  </Link>
                </li>)
                }
          </ul>
        </section>
      : false
    

    
    const messageLi = messages 
    ?  messages.map( (item, i) => 
      <li className="chat__item" key={i}>
       <div className="chat__item-container">
         <div className="avatar">
          <img  src={item.fromUser.avatarUrlSmall} 
            width={25} height={25}/>
         </div>
         <div className="content">
          <div className="details">
            <div className="from">
              {item.fromUser.displayName}
              &nbsp;@
              {item.fromUser.username}
            </div>
            <div className="time">
              {item.sent}
            </div>
          </div>
          <div className="text">
           {item.text}
          </div>
          </div>
        </div>
       </li> )
    : false
  
  const panelChat = rooms
    ? <div className="chat">
            <ul className="chat__list">
              {messageLi}
            </ul>
      </div>  
    : false
  
  const footer = 
        <div className="form__post" >
          <textarea className="form-control" 
            value={this.props.room.message} 
            onChange={(e) => this.props.typeMessage(e.target.value)}
            onKeyPress={this.handlePressEnter.bind(this)}>
          </textarea> 

        </div>
  
  const roomHead = room.item 
    ? <p className="room__name navbar-brand">
        <img src={room.item.avatarUrl} width={25} height={25}/> 
        {room.item.name} &nbsp; &nbsp;
        <span className="topic">
          {room.item.topic}
        </span>
      </p>
    : false

  const panelRoom = 
    <section className="room">
      {roomHead}
      {panelChat}
      {footer}
    </section>

  const child = this.props.children && React.cloneElement(this.props.children, {...this.props})
    return (
      
      <main className="home">
        {miniPanel}
        {conversationPanel}
        {messages.length>0 ? panelRoom : false}
      </main>
   
    );
  }
}

export default Home;
        //{React.cloneElement({...this.props}.children, {...this.props})}
        // <Search {...this.props}/>
