import React from 'react';
import '../gitter.scss'

class User extends React.Component {

  componentWillMount(){
  	const token = 'a39d1e6785d4b4ae9ad1debd7a96301e15f72652';
  	 
  	fetch(`https://api.gitter.im/v1/user?access_token=${token}`)
		.then(response => response.json() )
    .then(responseJson => this.props.getUser(responseJson))

    fetch(`https://api.gitter.im/v1/rooms/?access_token=${token}`)
		.then(response => response.json() )
    .then(responseJson =>this.props.getRooms(responseJson))
  }

  
  
  render() {
    const rooms = this.props.rooms ? this.props.rooms : null
    const user =  this.props.user ? this.props.user[0]: null
    return (
      <div className="container user">
          <div className="user__info">
            <img src={user.avatarUrl} width={200} height={200}/>
            <p>{user.displayName}</p>
            <a>@{user.username}</a>
          </div>
          <div className="user__rooms panel panel-default ">
            <div className="search panel-heading">
              <input type="text" className="search" /> 
              <button className="btn btn-danger btn-search"> SEARCH</button>
            </div>
            <div className="panel-body">
              <ul className="list-group rooms">
                {rooms.map( (item,i) => 
                  <button className="btn btn-default btn-room" 
                    key={i}
                    //onClick={this.handleClick.bind(this, item.id)}
                  >
                    { <img src={item.avatarUrl} width={25} height={25}/>}
                    {item.name}
                  </button>)
                  }
                </ul>
              </div>
          </div>
          </div>
    );
  }
}
export default User;
