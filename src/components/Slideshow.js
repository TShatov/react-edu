import React, { Component } from 'react';

import {makeRequestAll} from '~src/helpers/api';

import './Slideshow.css';

let slideshowCounter = 0;

class Slideshow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    makeRequestAll({'content_type': 'images'})
      .then(({ body: { items }}) => {
        const gallery = items[0].fields;
        this.setState({ images: gallery });
        this.setState({ currentImage: gallery.gallery[0].url});
      });

    setInterval(() => {
      if (slideshowCounter == this.state.images.gallery.length - 1) {
        return slideshowCounter = 0;
      }
      slideshowCounter++;
      this.setState({ currentImage: this.state.images.gallery[slideshowCounter].url});
    }, 5000);
  }

  prevImage() {
    if (slideshowCounter == 0) return;
    slideshowCounter--;
    this.setState({ currentImage: this.state.images.gallery[slideshowCounter].url});
  }

  nextImage() {
    if (slideshowCounter == this.state.images.gallery.length - 1) return;
    slideshowCounter++;
    this.setState({ currentImage: this.state.images.gallery[slideshowCounter].url});
  }

  render() {
    const images = this.state.images;
    if (images) {
      return(
        <div className='slideshow-container'>
          <div className='slideshow-icons'>
            <button onClick={() => this.prevImage()} className='slideshow-prev slider-icon'></button>
            <button onClick={() => this.nextImage()} className='slideshow-next slider-icon'></button>
          </div>
          <img className='slideshow-image' src={this.state.currentImage} />
        </div>
      );
    }
  }
}

export default Slideshow;