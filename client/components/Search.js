import React from 'react';

class Search extends React.Component {
  handleSearch(){
  	const value = this.textInput.value;

  	const rooms = this.props.rooms;
  	const findRooms = this.props.findRooms;

  	const searchRooms = rooms.filter(row => {
				if (!value) {
					return false
				}
				const regex = new RegExp(value, 'gi');
				return row.name.match(regex)
			})
  	findRooms(searchRooms)
  }
  render() {
    const search = this.props.search;
    const searchLi = search.length>0 
    	? search.map( (item,i) => 
        <li className="rooms__item"
          key={i}
        >
          { <img src={item.avatarUrl} width={25} height={25}/>}
          {item.name}
        </li> )
      : false
    return (
    	<section className="search">
      <div className="search__form">
    		<h4>SEARCH</h4>
    		<input type="text" 
    			ref={input => this.textInput = input}
    			onChange={this.handleSearch.bind(this)}
    			placeholder='What are you looking for?' />
    		<ul>
    			{searchLi}
    		</ul>
    	</div>
      </section>
    );
  }
}

export default Search;