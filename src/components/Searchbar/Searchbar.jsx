import { Component } from 'react';
import { SearchIcon } from './Searchbar.style';

export class SearchBar extends Component {
  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.props.image}>
          <button type="button" className="SearchForm-button">
            <SearchIcon />
          </button>
          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="search"
          />
        </form>
      </header>
    );
  }
}
