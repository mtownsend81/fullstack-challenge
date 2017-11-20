import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../../actions/index.js';
import './Modal.css';

class Modal extends Component {

  constructor(props) {
    super(props);
  }

  hideModal() {
    this.props.hideModal();
  }

  stopPropagation(e) {
    e.stopPropagation();
  }

  renderList(items) {
    return items.map((item) => {
      return (
        <li>{item.name}</li>
      )
    });
  }

  renderImageList(images) {
    return images.map((image) => {
      return (
        <li><img src={image.path + '.' + image.extension} /></li>
      )
    });
  }

  render() {
    const comic = this.props.comic;
    if (this.props.show_modal === true && comic) {
      return (
        <div className="modal-overlay" onClick={ this.hideModal.bind(this) }>
          <div className="modal-content" onClick={this.stopPropagation.bind(this) }>
            <div className="modal-close-button" onClick={ this.hideModal.bind(this) }>x</div>
            <div className="modal-inner-content">
              <h2>{comic.title}</h2>
              <table>
                {comic.issueNumber &&
                  <tr>
                    <th>Issue Number</th>
                    <td>{comic.issueNumber}</td>
                  </tr>
                }
                {comic.ISBN &&
                  <tr>
                    <th>ISBN</th>
                    <td>{comic.ISBN}</td>
                  </tr>
                }
                {comic.variantDescription &&
                  <tr>
                    <th>Variant Description</th>
                    <td>{comic.variantDescription}</td>
                  </tr>
                }
                {comic.characters.returned > 0 &&
                  <tr>
                    <th>Characters</th>
                    <td><ul>{this.renderList(comic.characters.items)}</ul></td>
                  </tr>
                }
                {comic.creators.returned > 0 &&
                  <tr>
                    <th>Creators</th>
                    <td><ul>{this.renderList(comic.creators.items)}</ul></td>
                  </tr>
                }
                {comic.images.length > 0 &&
                  <tr>
                    <th>Images</th>
                    <td><ul>{this.renderImageList(comic.images)}</ul></td>
                  </tr>
                }
              </table>
            </div>
          </div>

        </div>
      );
    }

    return null;
  }
}

function mapStateToProps(state) {
  return {
    show_modal: state.show_modal,
    comic: state.details
  };
 }

export default connect(mapStateToProps, actions)(Modal)