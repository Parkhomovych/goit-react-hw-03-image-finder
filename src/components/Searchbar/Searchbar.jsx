import { Component } from 'react';
import { SearchIcon } from './Searchbar.style';

export class SearchBar extends Component {
  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm">
          <button type="submit" className="SearchForm-button">
            <SearchIcon/>
          </button>
          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
