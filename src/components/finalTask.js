import React, { Component } from "react";
import { connect } from "react-redux";
import AliceCarousel from 'react-alice-carousel';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import axios from 'axios';
import TrailSlide from './trailSlide'

class FinalTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trailSource: []
    };
  }

  componentDidMount() {
    // using AXIOS library for doing AJAX call
    // axios.get('https://trell.co/third-party/tasks/trail.json').then((response) => {
    //   this.setState({ trailSource: response.data.data })
    // })
  }  

  renderThumbnails() {
    return (
      <div>
        <ul className='list-unstyled row'>
          <li className='list-group-item col-6'>
            <img src='https://78.media.tumblr.com/e4450f50dbf282baf4388a7606b47edc/tumblr_p6ww4dnSp91ry50h6o1_500.gif' height='100' width='150' />
          </li>

          <li className='list-group-item col-6'>
            <img src='https://78.media.tumblr.com/e4450f50dbf282baf4388a7606b47edc/tumblr_p6ww4dnSp91ry50h6o1_500.gif' height='100' width='150' />
          </li>

          <li className='list-group-item col-6'>
            <img src='https://78.media.tumblr.com/e4450f50dbf282baf4388a7606b47edc/tumblr_p6ww4dnSp91ry50h6o1_500.gif' height='100' width='150' />
          </li>
        </ul>
      </div>
    )
  }

  render() {

    return (
      <div className='container-fluid'>
        <div className="row">
          <div className='row col-12 taskTrail'>
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
              </ul>
            </div>
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
