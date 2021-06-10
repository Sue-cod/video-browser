import React, { Component } from 'react';
import "../styles/SearchBar.css";

class SearchBar extends Component {
    state = { term: "" };
  
    //* User hits enter on search
    onFormSubmit = event => {
      event.preventDefault();
  
      this.props.onTermSubmit(this.state.item);
    };
  
    //* Set the value of search bar
    onInputChange = event => {
      this.setState({
        term: event.target.value,
      });
    };
  
    render() {
      return (
        <div className="search-bar ui segment">
          <form className="ui form" onSubmit={this.onFormSubmit}>
            <div className="field">
              <label htmlFor="search-bar-input">Video Search</label>
              <input id="search-bar-input" type="text" value={this.state.term} onChange={this.onInputChange} />
            </div>
          </form>
        </div>
      );
    }
  }
  
  export default SearchBar;