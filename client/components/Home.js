import React from 'react';
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
  
  handleClick(roomId){
    const token = 'a39d1e6785d4b4ae9ad1debd7a96301e15f72652';
    this.props.clear();
    this.props.getRoomId(roomId);

    fetch(`https://api.gitter.im/v1/rooms/${roomId}/chatMessages?access_token=${token}`)
    .then(response => response.json() )
    .then(responseJson =>this.props.getMessages(responseJson) );
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
    .then(() => this.handleClick(roomId))
    .catch( error => console.error(error)); 

    this.props.clear();
}

  render() {
    const rooms = this.props.rooms;
    //console.log(rooms)
    const user =  this.props.user[0];
    const messages = this.props.messages;
    
    const panelMenu = user 
    ? <div className="panel panel-default menu">
          <div className="user panel-heading">
            <img src={user.avatarUrl} width={25} height={25}/>
            <a>{user.displayName}</a>
            <a>@{user.username}</a>
          </div>
          <div className="rooms panel-body">
            <ul className="list-group">
              {rooms.map( (item,i) => 
                <li className="list-group-item menu__item"
                  key={i}
                  onClick={this.handleClick.bind(this, item.id)}
                >
                  { <img src={item.avatarUrl} width={25} height={25}/>}
                  {item.name}
                </li>)
                }
            </ul>
          </div>
          </div>
      : false
    
    const messageLi = messages 
    ?  messages.map( (item, i) => <li className="list-group-item chat__item" key={i}>
       <div className="chat-item__container">
         <div className="chat-item__avatar">
          <img  src={item.fromUser.avatarUrlSmall} 
            width={25} height={25}/>
         </div>
         <div className="chat-item__content">
          <div className="chat-item__details">
            <div className="chat-item__from">
              {item.fromUser.displayName}
              &nbsp;@
              {item.fromUser.username}
            </div>
            <div className="chat-item__time">
              {Date(item.sent).toDateString}
            </div>
          </div>
          <div className="chat-item__text">
           {item.text}
          </div>
          </div>
        </div>
       </li> )
    : false

    const panelChat = rooms
    ? <div className="panel panel-default chat">
        <div className="room panel-heading">
        {this.props.room.name}
        </div>
        <div className="messages panel-body"> 
          <div className="messages__list">
            <ul className="list-group">
              {messageLi}
            </ul>
          </div>
          <div className="messages__post">
            <textarea className="form-control" 
              value={this.props.room.message} 
              onChange={(e) => this.props.typeMessage(e.target.value)}>
            </textarea> 
            <button className="btn btn-info" 
              onClick={this.postMessage.bind(this, this.props.room.id)}> 
              POST MESSAGE 
            </button>
          </div>
        </div>
      </div>  
    : false

      return (
      <div className="home container">
        {panelMenu}
        {panelChat}
      </div>
    
    );
  }
}

export default Home;
          //{rooms[0].name.toUpperCase()}
