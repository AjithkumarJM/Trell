import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'Lodash';
import axios from 'axios';
import DragSortableList from 'react-drag-sortable'

class TaskDraggable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
            list: [],
            logs: []
        };
    }

    componentDidMount() {
        // using AXIOS library for doing AJAX call
        axios.get('https://trell.co/third-party/images.json').then((response) => {
            response.data.map((data, index) => {
                this.setState({
                    dataSource: [
                        {
                            index: index,
                            image: data
                        }
                    ]
                })
            })
        })
    }

    onSort(sortedList, dropEvent) {
        let logConsole = []
        if (logConsole.length == 0) {
            this.setState((prevState, props) => {
                prevState.list.map((data, index) => {
                    logConsole.push({
                        image: data.content.props.children[1].props.src,
                        rank: index
                    })
                })
            })
            console.log("Previous Rank of the Images")
            console.log(logConsole)
        }
        this.state.logs.length = 0;
        if (this.state.logs.length == 0) {
            sortedList.map((data) => {
                this.state.logs.push({
                    image: data.content.props.children[1].props.src,
                    rank: data.rank
                })
            })
            console.log("New Rank of the Images")
            console.log(this.state.logs)
        }
    }

    render() {
        let listArray;
        this.state.dataSource.map((data, index) => {
            listArray = { content: <div className='marginWrap'> <img src={data.image} height='120' width='140' /></div> }
            this.state.list.push(listArray)
        })

        let placeholder = (
            <div className="placeholderContent"> DROP HERE ! </div>
        );

        return (
            <div className='container-fluid'>
                <div className='row draggableWrap'>
                    <div className="col-12 page-header">
                        <h2>Drag</h2>
                    </div>
                    <div className='col-md-12'>
                        <DragSortableList
                            items={this.state.list}
                            dropBackTransitionDuration={0.3}
                            onSort={this.onSort.bind(this)}
                            placeholder={placeholder}
                            type="grid"
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default (connect(null, {})(TaskDraggable))