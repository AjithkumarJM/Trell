import React, { Component } from 'react'
import $ from 'jquery';

export default class TrailSlide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 1,
        }
        this.showSlides = this.showSlides.bind(this);
        this.showSlides(this.state.slideIndex);
    }

    currentSlide(n) {
        this.state.slideIndex = n;
        this.showSlides(this.state.slideIndex);
    }

    plusSlides(n) {
        this.state.slideIndex += n;
        this.showSlides(this.state.slideIndex);
    }

    showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        console.log(slides)

        if (n > slides.length) {
            this.state.slideIndex = 1
        }

        if (n < 1) {
            this.state.slideIndex = slides.length
            $(slides[0]).css("display", "block");
        }


        for (i = 0; i < slides.length; i++) {
            $(slides[i]).css("display", "none");
            $(slides[this.state.slideIndex - 1]).css("display", "block");
        }
    }

    render() {
        return (
            <div className="slideshow-container">
                {/* <div className="mySlides fadeSlide"> */}
                <div className="mySlides fadeSlide">
                    <div className="numbertext">1 / 3</div>
                    <a className="prev" onClick={this.plusSlides.bind(this, -1)}><i className='fa fa-chevron-left' /></a>
                    <div className='text-center'>
                        <img src="https://cdn.photographylife.com/wp-content/uploads/2016/06/Mass.jpg" height='500' width='550' />
                    </div>
                    <a className="next" onClick={this.plusSlides.bind(this, 1)}><i className='fa fa-chevron-right' /></a>
                    <div className="text">Caption Text</div>
                </div>

                <div className="mySlides fadeSlide">
                    <div className="numbertext">2 / 3</div>
                    <a className="prev" onClick={this.plusSlides.bind(this, -1)}><i className='fa fa-chevron-left' /></a>
                    <div className='text-center'>
                        <img src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?cs=srgb&dl=food-dinner-lunch-461198.jpg&fm=jpg" height='500' width='550' />
                    </div>
                    <a className="next" onClick={this.plusSlides.bind(this, 1)}><i className='fa fa-chevron-right' /></a>
                    <div className="text">Caption Text</div>
                </div>

            </div>
        )
    }
}