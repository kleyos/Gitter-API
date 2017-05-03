import React from 'react';
import { Link } from 'react-router';

class Conversations extends React.Component {
  
  handleClick(room){
    const token = 'a39d1e6785d4b4ae9ad1debd7a96301e15f72652';
    this.props.clear();
    this.props.getRoom(room);

    fetch(`https://api.gitter.im/v1/rooms/${room.id}/chatMessages?access_token=${token}`)
    .then(response => response.json() )
    .then(responseJson =>this.props.getMessages(responseJson) );
  }
  
  render() {
   const rooms = this.props.rooms; 
   const roomPanel = rooms
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
    return (
    	roomPanel
    );
  }
}

export default Conversations;