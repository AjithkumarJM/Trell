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
                                <img src='https://cdn.photographylife.com/wp-content/uploads/2016/06/Mass.jpg' />
                                <img src='https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?cs=srgb&dl=food-dinner-lunch-461198.jpg&fm=jpg' />
                                <img src='https://s3-eu-west-1.amazonaws.com/cols-arq-backup/tom+bell/tom-bell-mountain-bike-photography.jpg' />
                                <img src='https://images.pexels.com/photos/445109/pexels-photo-445109.jpeg?auto=compress&cs=tinysrgb&h=350' />
                                <img src='http://farm4.static.flickr.com/3047/3095511754_63bdfab0bc.jpg' />
                            </figure>
                        </div>
                    </div>

                    <div className='text-center col-md-12'>
                        <h6 className='text-muted font-weight-bold'>CSS3 Slideshow </h6>
                    </div>
                </div>
            </div>
        );
    }
}

export default Slideshow;