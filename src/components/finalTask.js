import React, { Component } from "react";
import { connect } from "react-redux";
import AliceCarousel from 'react-alice-carousel';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import axios from 'axios';

class FinalTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trailSource: []
    };
  }

  componentDidMount() {
    // using AXIOS library for doing AJAX call
    axios.get('https://trell.co/third-party/tasks/trail.json').then((response) => {
      this.setState({ trailSource: response.data.data })
    })
  }

  onSlideChange(e) {
    console.log('Item`s position during a change: ', e.item);
    console.log('Slide`s position during a change: ', e.slide);
  };

  onSlideChanged(e) {
    console.log('Item`s position after changes: ', e.item);
    console.log('Slide`s position after changes: ', e.slide);
  };

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
    console.log(this.state.trailSource)
    let items = [1, 2, 3, 4, 5].map((item, i) => {
      return <div key={`key-${i}`} className="yours-custom-class"><h2>{item}</h2></div>
    })

    return (
      <div className='container-fluid'>
        <div className="row">
          <div className='row col-12 taskTrail'>
            <div className="col-md-8">
              <AliceCarousel
                items={items}
                fadeOutAnimation={true}
                onSlideChange={this.onSlideChange}
                onSlideChanged={this.onSlideChanged}
              >
                <img src="https://static2.srcdn.com/wordpress/wp-content/uploads/2018/04/Bucky-Barnes-MCU-Captain-America-shield.jpg" className="yours-custom-class" />
                <img src="https://images.indianexpress.com/2018/09/teachers-day-bill-gates_759.jpg" className="yours-custom-class" />
                <img src="https://images.indianexpress.com/2018/09/teachers-day-bill-gates_759.jpg" className="yours-custom-class" />
                <img src="https://images.indianexpress.com/2018/09/teachers-day-bill-gates_759.jpg" className="yours-custom-class" />
                <img src="https://images.indianexpress.com/2018/09/teachers-day-bill-gates_759.jpg" className="yours-custom-class" />
              </AliceCarousel >
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
	