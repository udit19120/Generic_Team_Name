import React, { Component } from 'react';

export class UploadItem extends Component {
    state = {
        profileImg: 'images/pp.jpg'
    }
    imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                this.setState({ profileImg: reader.result })
            }
        }
        reader.readAsDataURL(e.target.files[0])
    };
    render() {
        const { profileImg } = this.state
        return (
            <div className="page">
                <div className="container">
                    <h1 className="heading">Add your Image</h1>
                    <div className="img-holder">
                        <img src={profileImg} alt="" id="img" className="img" />
                    </div>
                    <input type="file" accept="image/*" name="image-upload" id="input" onChange={this.imageHandler} />
                    <div className="label">
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default UploadItem;
