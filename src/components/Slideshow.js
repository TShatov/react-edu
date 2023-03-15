import React, { Component } from 'react';

import request from 'superagent';

import './Slideshow.css';

const url = 'https://cdn.contentful.com/';
const spaceId = 'v441z4n7clri';
const environmentId = 'master';
const accessToken = '2uQkP24LThdDkW6JWmvVIA3ys7nqBwX6df_fzamh9JU';

let slideshowCounter = 0;

class Slideshow extends Component {
  constructor(props) {
    super(props);
    this.state = 
      { 
        currentImage: {},
      };
  }

  componentDidMount() {
    request
      .get(`${url}spaces/${spaceId}/environments/${environmentId}/entries?access_token=${accessToken}`)
      .query({'content_type': 'images'})
      .set('Authorization', `Bearer: ${accessToken}`)
      .then(({ body: { items } }) => {
        this.setState({ images: items });
        this.setState({ currentImage: items[0].fields.gallery[0].url});
      });
  }

  prevImage() {
    if (slideshowCounter == 0) {
      return;
    } else {
      slideshowCounter--;
    }
    this.setState({ currentImage: this.state.images[0].fields.gallery[slideshowCounter].url});
  }

  nextImage() {
    if (slideshowCounter == this.state.images[0].fields.gallery.length - 1) {
      return;
    } else {
      slideshowCounter++;
    }
    this.setState({ currentImage: this.state.images[0].fields.gallery[slideshowCounter].url});
  }

  slideshowImage() {
    setTimeout(() => {
      if (slideshowCounter == this.state.images[0].fields.gallery.length - 1) {
        return slideshowCounter = 0;
      } else {
        slideshowCounter++;
      }
      this.setState({ currentImage: this.state.images[0].fields.gallery[slideshowCounter].url});
    }, 5000);
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
          <img onLoad={this.slideshowImage()} className='slideshow-image' src={this.state.currentImage} />
        </div>
      );
    }
  }
}

export default Slideshow;