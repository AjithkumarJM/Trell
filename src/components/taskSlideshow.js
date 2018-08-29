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
                        <div id='slider'>
                            <figure>
                                <img src='http://www.portoalegre.travel/upload/b/55/554334_twitter-header-wallpaper.jpg'  className='img-fluid' />
                                <img src='https://wallpapersite.com/images/wallpapers/thelma-louise-2880x1800-minimal-pair-girls-5k-10399.jpg' className='img-fluid' />
                                <img src='http://www.portoalegre.travel/upload/b/55/554334_twitter-header-wallpaper.jpg' className='img-fluid' />
                                <img src='https://wallpapersite.com/images/wallpapers/military-helicopters-3840x2160-silhouette-sunset-artwork-minimal-5k-12483.jpg' className='img-fluid' />
                                <img src='https://img00.deviantart.net/dae2/i/2016/069/3/4/x_wing_wallpaper_by_theadamtaylor-d9ulfk2.png' className='img-fluid' />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Slideshow;