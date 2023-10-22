import { Component } from 'react';
import { LoadMore } from './Button.style';

export class Button extends Component {
  render() {
    return (
      <LoadMore onClick={this.props.moreImg} type="button">
        Load more
      </LoadMore>
    );
  }
}
