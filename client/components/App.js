import React from 'react';
import NavigationBar from './NavigationBar';


import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../actions'

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
          <NavigationBar {...this.props}/>
          {React.cloneElement({...this.props}.children, {...this.props})}
          <footer></footer>
      </div>
    );
  }
}

function mapStateToProps(state) {
	return {
		user: state.user,
		rooms: state.rooms,
		messages: state.messages,
    room:state.room,
    search:state.search
	}
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);