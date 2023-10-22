import { Component } from 'react';
import { fetchImg } from './PixabayAPI';
import { SearchBar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Div } from './Loader.style';
import { Hourglass } from 'react-loader-spinner';

export class App extends Component {
  state = {
    image: [],
    search: '',
    currentPage: 1,
    totalImg: 0,
    loader: false,
    btnLoader: false,
  };
  // componentDidUpdate(pP, pS) {
  //   if (
  //     pS.currentPage !== this.state.currentPage ||
  //     pS.search !== this.state.search
  //   ) {
  //     this.setState({ loader: true });
  //     this.setState({ btnLoader: false });
  //     this.setState({ image: [] });
  //     this.setState({ currentPage: 1 });
  //   }
  // }
  searchImg = async evt => {
    evt.preventDefault();
    try {
      const query = evt.target.children.search.value.trim();
      if (query === '' || query === this.state.search) {
        return;
      }
      this.setState({ loader: true });
      this.setState({ btnLoader: false });
      this.setState({ image: [] });
      this.setState({ currentPage: 1 });
      this.setState({ search: query });

      const response = await fetchImg(query, 1);
      this.setState({ image: response.hits });

      this.setState({ totalImg: response.totalHits });
      if (response.totalHits > 12) {
        this.setState({ btnLoader: true });
      } else {
        this.setState({ btnLoader: false });
      }
      this.setState(pS => ({ currentPage: pS.currentPage + 1 }));
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ btnLoader: true });
      this.setState({ loader: false });
    }
  };

  searchMoreImg = async () => {
    try {
      this.setState({ loader: true });
      this.setState({ btnLoader: false });
      const { search, currentPage } = this.state;
      const response = await fetchImg(search, currentPage);
      this.setState(prevState => ({
        image: [...prevState.image, ...response.hits],
      }));
      this.setState({ totalImg: response.totalHits });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ btnLoader: true });
      this.setState({ loader: false });
      this.setState(pS => ({ currentPage: pS.currentPage + 1 }));
    }
  };
  render() {
    return (
      <div>
        <SearchBar image={this.searchImg} />

        {this.state.image.length > 0 && <ImageGallery img={this.state.image} />}
        {this.state.btnLoader &&
          this.state.totalImg > this.state.image.length &&
          this.state.image.length !== 0 && (
            <Button moreImg={this.searchMoreImg} />
          )}

        {this.state.loader && (
          <Div>
            <Hourglass />
          </Div>
        )}
      </div>
    );
  }
}
