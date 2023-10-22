import { Photo } from 'components/ImageGallery/ImageGallery.style';
import { Component } from 'react';
import Modal from 'react-modal';
import { Image } from './ImageGalleryItem.style';

Modal.defaultStyles.overlay.backgroundColor = 'rgba(0, 0, 0, 0.8)';
Modal.defaultStyles.overlay.border = 'rgba(0, 0, 0, 0.8)';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');
export class ImageGalleryItem extends Component {
  state = {
    modalOpen: false,
  };
  handlerModal = () => {
    this.setState(pS => ({ modalOpen: !pS.modalOpen }));
  };
  render() {
    return (
      <li className="gallery-item">
        <Photo
          src={this.props.photo}
          alt={this.props.alt}
          onClick={this.handlerModal}
        />
        {this.state.modalOpen && (
          <Modal
            style={customStyles}
            isOpen={this.state.modalOpen}
            onRequestClose={this.handlerModal}
          >
            <Image src={this.props.largeImg} alt={this.props.alt} />
          </Modal>
        )}
      </li>
    );
  }
}
