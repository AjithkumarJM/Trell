import React, { Component } from 'react'
import $ from 'jquery';
import axios from 'axios';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';


class TrailSlide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 1,
            slides: [],
            slideList: []
        }
        this.showSlides = this.showSlides.bind(this)
    }

    componentDidMount() {
        $(document).ready(() => {
            this.showSlides(this.state.slideIndex);
            var showChar = 120;
            var ellipsestext = "...";
            var moretext = "more";
            var lesstext = "less";
            $('.more').each(function () {
                var content = $(this).html();

                if (content.length > showChar) {

                    var c = content.substr(0, showChar);
                    var h = content.substr(showChar - 1, content.length - showChar);

                    var html = c + '<span class="moreellipses">' + ellipsestext + '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';

                    $(this).html(html);
                }

            });

            $(".morelink").click(function () {
                if ($(this).hasClass("less")) {
                    $(this).removeClass("less");
                    $(this).html(moretext);
                } else {
                    $(this).addClass("less");
                    $(this).html(lesstext);
                }
                $(this).parent().prev().toggle();
                $(this).prev().toggle();
                return false;
            });
        });
        // using AXIOS library for doing AJAX call
        axios.get('./src/components/JSON.json').then((response) => {
            this.setState({ slideList: response.data.data })
        })
    }

    currentSlide(n) {
        this.state.slideIndex = n;
        this.showSlides(this.state.slideIndex);
    }

    plusSlides(n) {
        this.state.slideIndex = this.state.slideIndex + n;
        this.showSlides(this.state.slideIndex);
    }

    currentSlide(n) {
        this.state.slideIndex = n;
        this.showSlides(this.state.slideIndex);
    }

    showSlides(n) {
        var i;
        var slides = document.getElementsByClassName('mySlides');

        if (n > slides.length) {
            this.state.slideIndex = 1
        }

        if (n < 1) {
            this.state.slideIndex = slides.length
        }

        for (i = 0; i < slides.length; i++) {
            $(slides[i]).css("display", "none");
        }

        $(slides[this.state.slideIndex - 1]).css("display", "block");
    }

    renderTrailSlideContent() {
        const { slideList } = this.state;
        let initialSlide = slideList.info;
        let finalSlide = slideList.author;
        var slideContent;
        {
            (() => {
                if (initialSlide) {
                    slideContent = slideList.posts.map((data, index) => {
                        return (
                            <div className="mySlides fadeSlide">
                                <div className='row'>
                                    <div className='col-md-12'>
                                        <div className="numbertext">{index + 1} / 12</div>
                                    </div>
                                    <div className='col-md-1 col-sm-1'>
                                        <a className="prev" onClick={this.plusSlides.bind(this, -1)}><i className='fa fa-chevron-left' /></a>
                                    </div>
                                    <div className='col-md-10 col-sm-10'>
                                        <div className=' imageOverlay'>
                                            <img src={data.geoChatImage} height='500' />
                                            <div className='detailsText'>
                                                <div className='locationInfo'>
                                                    <i className='fa fa-map-marker' /> Velas Beach, Maharashtra
                                                </div>
                                            </div>
                                            <div className='saveText'>
                                                <div>
                                                    <h6 className='float-right font-weight-bold'>save <i className='fa fa-bookmark' /> &nbsp; &nbsp; share <i className='fa fa-share' /></h6>
                                                </div>
                                            </div>
                                            <div className='text'>
                                                <div className="comment more">{data.about}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-1 col-sm-1'>
                                        <a className="next" onClick={this.plusSlides.bind(this, 1)}><i className='fa fa-chevron-right' /></a>
                                    </div>
                                </div>
                            </div>
                        )
                    });
                }
            })()
        }

        return (
            <div>
                {(() => {
                    if (initialSlide) {
                        return (
                            <div className="mySlides fadeSlide">
                                <div className='row'>
                                    <div className='col-md-12'>
                                        <div className="numbertext">0 / 12</div>
                                    </div>
                                    <div className='offset-md-1 col-md-10 col-sm-10'>
                                        <div className='infoImageoverlay'>
                                            <img src="https://images.unsplash.com/photo-1515360613202-66e4a8b6e485?ixlib=rb-0.3.5&s=6c44f467f63f4a52775cf5d37eefc6c4&w=1000&q=80" height='500' />
                                            <div className='infoOverlayText'>
                                                <h4 className='font-weight-bold'>
                                                    {initialSlide.name}
                                                </h4>
                                                <p className='font-weight-bold'>
                                                    {initialSlide.counts.posts} Posts &nbsp; <span className='dot'></span> &nbsp; {initialSlide.counts.comments} comments &nbsp;<span className='dot'         ></span>  &nbsp; {initialSlide.counts.views} views
                                                </p>
                                                <div>
                                                    Trail By
                                                    <p className='font-weight-bold'>
                                                        {finalSlide.name} <span className='float-right'><img src={finalSlide.image} height='50' width='50' /></span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-1 col-sm-1'>
                                        <a className="next" onClick={this.plusSlides.bind(this, 1)}><i className='fa fa-chevron-right' /></a>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })()}
                {slideContent}
                {(() => {
                    if (initialSlide) {
                        return (
                            <div className="mySlides fadeSlide">
                                <div className='row'>
                                    <div className='col-md-12'>
                                        <div className="numbertext">That's it</div>
                                    </div>
                                    <div className='col-md-1 col-sm-1'>
                                        <a className="prev" onClick={this.plusSlides.bind(this, -1)}><i className='fa fa-chevron-left' /></a>
                                    </div>
                                    <div className='col-md-10 col-sm-10'>
                                        <div className='infoImageoverlay'>
                                            <img src="https://images.unsplash.com/photo-1515360613202-66e4a8b6e485?ixlib=rb-0.3.5&s=6c44f467f63f4a52775cf5d37eefc6c4&w=1000&q=80" height='500' />
                                            <div className='finalImgOverlay text-center'>
                                                <div>
                                                    <div className='big-dot'>
                                                        <FontAwesomeIcon icon="heart" className='text-danger' size='2x' />
                                                    </div>
                                                    <p className='font-weight-bold'>{initialSlide.counts.loves} Likes</p>

                                                    <div className='big-dot'>
                                                        <FontAwesomeIcon icon="comment" className='text-secondary' size='2x' />
                                                    </div>
                                                    <p className='font-weight-bold'>{initialSlide.counts.comments} Comments</p>

                                                    <div>
                                                        <p className='font-weight-bold'>SHARE TRAIL VIDEO TO</p>
                                                        <div className='row'>
                                                            <div className='offset-md-3 col'>
                                                                <i className='fa fa-facebook-square fa-3x' />
                                                                <p>Facebook</p>
                                                            </div>

                                                            <div className='col'>
                                                                <i className='fa fa-twitter fa-3x' />
                                                                <p>Twitter</p>
                                                            </div>

                                                            <div className='col'>
                                                                <i className='fa fa-instagram fa-3x' />
                                                                <p>Instagram</p>
                                                            </div>

                                                            <div className='col'>
                                                                <div className='big-dot'>
                                                                    <FontAwesomeIcon icon="ellipsis-h" className='text-muted' size='2x' />
                                                                </div>
                                                                <p>More</p>
                                                            </div>
                                                            <div className='offset-md-3'></div>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <p className=''>VIEW MORE TRAILS BY</p>
                                                        <img src={finalSlide.image} height='60' width='60' />
                                                        <p className='font-weight-bold'>{finalSlide.name}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })()}
            </div>
        )
    }


    render() {
        return (
            <div className="slideshow-container">
                {this.renderTrailSlideContent()}
            </div>
        )
    }
}

export default TrailSlide;