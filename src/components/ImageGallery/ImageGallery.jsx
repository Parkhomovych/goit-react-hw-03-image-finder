import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
import { List } from './ImageGallery.style';

export class ImageGallery extends Component {

  render() {
    return (
      <List className="gallery">
        {this.props.img.map(({ id, webformatURL, tags, largeImageURL }) => {
          return (
            <ImageGalleryItem
              key={id}
              photo={webformatURL}
              largeImg={largeImageURL}
              alt={tags}
            />
          );
        })}
      </List>
    );
  }
}
