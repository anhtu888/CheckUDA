import axios from 'axios';

import React, { Component } from 'react';

export default class ImageUpload extends Component {

    state = {
        // Initially, no file is selected 
        image: null
    };

    // On file select (from the pop up) 
    onFileChange = event => {
        // Update the state 
        this.setState({ image: event.target.files[0] });

    };



    render() {

        return (
            <div>
                <div>
                    <input type="file" onChange={this.onFileChange} />
                </div>
            </div>
        );
    }
}

