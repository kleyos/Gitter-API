import React from 'react';
import '../gitter.scss'

class Room extends React.Component {    
  
  // componentWillMount(){
  //   const token = 'a39d1e6785d4b4ae9ad1debd7a96301e15f72652';
    
  //   //this.props.clear();
  //   //this.props.getRoom(this.props.room);

  //   fetch(`https://api.gitter.im/v1/rooms/${this.props.room.item.id}/chatMessages?access_token=${token}`)
  //   .then(response => response.json() )
  //   .then(responseJson =>this.props.getMessages(responseJson) );
  // }
  
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
    .then(() => this.handleClick(roomId))
    .catch( error => console.error(error)); 

    this.props.clear();
  }

  render() {
    
  const rooms = this.props.rooms;
  const messages = this.props.messages;
  const room = this.props.room;

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
        <div className="form__post">
          <textarea className="form-control" 
            value={this.props.room.message} 
            onChange={(e) => this.props.typeMessage(e.target.value)}>
          </textarea> 
          <button className="btn btn-info" 
            onClick={this.postMessage.bind(this, this.props.room.id)}> 
            POST MESSAGE 
          </button>
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
  
  return (
      <section className="room">
        {roomHead}
        {panelChat}
        {footer}
      </section>
    )

  }
}

export default Room;
