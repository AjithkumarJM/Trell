import React, { Component } from "react";
import { connect } from "react-redux";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import TrailSlide from './trailSlide';

class FinalTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trailSource: []
    };
  }

  renderThumbnails() {
    return (
      <div>
        <ul className='list-unstyled row'>
          <li className='list-group-item col-6'>
            <div className='suggestedSlide'>
              <img src="https://wallpaper-house.com/data/out/12/wallpaper2you_476316.jpg" height='100' width='150' />
              <div className='suggestedSlideOverlay'>
                <small className='font-weight-bold'>
                  sample 1
                </small>
                <div>
                </div>
              </div>
            </div>
          </li>

          <li className='list-group-item col-6'>
            <div className='suggestedSlide'>
              <img src="http://s1.1zoom.me/big3/433/Tropics_Sea_Resorts_438409.jpg" height='100' width='150' />
              <div className='suggestedSlideOverlay2'>
                <small className='font-weight-bold'>
                  sample 2
                </small>
                <div>
                </div>
              </div>
            </div>
          </li>

          <li className='list-group-item col-6'>
            <div className='suggestedSlide'>
              <img src="https://images.pexels.com/photos/210243/pexels-photo-210243.jpeg?auto=compress&cs=tinysrgb&h=350" height='100' width='150' />
              <div className='suggestedSlideOverlay3'>
                <small className='font-weight-bold'>
                  sample 3
                </small>
                <div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    )
  }

  renderTags() {
    return (
      <div>
        <p className='customTag'>Night Life</p>
        <p className='customTag'>Budget Travel</p>
        <p className='customTag'>Signature Food Places</p>
        <p className='customTag'>Food Festive</p>
      </div>
    )
  }
  render() {

    return (
      <div className='container-fluid'>
        <div className='row taskTrail'>
          <div className="col-md-8">
            <TrailSlide />
          </div>
          <div className="col-md-4">
            <ul className="list-unstyled">
              <li className="list-group-item">
                <i className='fa fa-facebook rounded-circle iconWrap' /> Share Trail
                </li>

              <li className="list-group-item">
                <FontAwesomeIcon icon="heart" className='text-danger iconWrap' size='1x' /> Like <span className='float-right'>946</span>
              </li>

              <li className="list-group-item">
                <FontAwesomeIcon icon="comment" className='iconWrap' size='1x' /> Comments <span className='float-right'>53</span>
              </li>

              <li className="list-group-item">
                <FontAwesomeIcon icon="eye" className='iconWrap' size='1x' /> View <span className='float-right'>3256</span>
              </li>

              <li className="list-group-item">
                Suggested Trails :

                  {this.renderThumbnails()}
              </li>

              <li className='list-group-item'>
                Tags

              {this.renderTags()}
              </li>
            </ul>
            <p className='version'>
              Download the app &nbsp; &nbsp; &nbsp; <span className='customTagV'><i className='fa fa-android' /> Android</span>
              <span className='customTagV'><i className='fa fa-apple' /> Iphone</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  {}
)(FinalTask);
