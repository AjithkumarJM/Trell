import React, { Component } from 'react';
class Slideshow extends Component {

    constructor(props) {
        super(props);
        this.state = {}

    }

    render() {
        return (
            <div className='container-fluid'>
                <div className='row draggableWrap'>
                    <div className="col-12 page-header">
                        <h2>Slideshow</h2>
                    </div>
                    <div className='col-md-12'>
                        <div className="slider-holder">
                            <span id="slider-image-1"></span>
                            <span id="slider-image-2"></span>
                            <span id="slider-image-3"></span>
                            <div className="image-holder">
                                <img src="/src/assets/img/carouselImage1.jpg" className="slider-image" />
                                <img src="/src/assets/img/carouselImage2.jpg" className="slider-image" />
                                <img src="/src/assets/img/carouselImage3.jpg" className="slider-image" />
                            </div>
                            <div className="button-holder">
                                <a href="#slider-image-1" className="slider-change"></a>
                                <a href="#slider-image-2" className="slider-change"></a>
                                <a href="#slider-image-3" className="slider-change"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Slideshow;