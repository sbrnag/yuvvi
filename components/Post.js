import React from 'react'
import { render } from 'react-dom'
import Link from 'next/link'
import Router from 'next/router'


class Post extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        filipkartLink: '',
        caption: '',
        photo: '',
        imagePreviewUrl: ''
      };
  
      this.handleFlipkartLinkChange = this.handleFlipkartLinkChange.bind(this)
      this.handleCaptionChange = this.handleCaptionChange.bind(this)
      this.handleImageChange = this.handleImageChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }
  
  handleFlipkartLinkChange(e) {
    this.setState({filipkartLink: e.target.value})
  }

  handleCaptionChange(e) {
    this.setState({caption: e.target.value})
  }

  handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let photo = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        photo: photo,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(photo)
  }
  
  handleSubmit(e) {
    console.log('state : ', this.state)
    Router.push(`/post?title=${this.state.caption}`, `/p/${this.state.caption}`)
    e.preventDefault()
  }

  render() {

    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl}
        style={{ maxHeight: 150, maxWidth: 150, height: 200, width: 200 }} />);
    } 

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
        <label>Flipkart link</label>
          <input type="text" className="form-control" placeholder="Paste the Flipkart product link"
                  value={this.state.filipkartLink} onChange={this.handleFlipkartLinkChange}/>
        <p className="help-block">Browse the product on filpkart website copy the full website address and paste it above.</p>
      </div>
      <div className="form-group">
        <label>Caption</label>
          <input type="text" className="form-control" placeholder="Write someting..."
                  value={this.state.caption} onChange={this.handleCaptionChange}/>
      </div>
      <div className="form-group">
        <label>Photo</label>
        <input type="file" onChange={this.handleImageChange} />
        <p className="help-block">Upload photo (Optional).</p>
      </div>
      <div className="form-group">
          {$imagePreview}
      </div>  
      <button type="submit" className="btn btn-default">Submit</button>
      </form>
    );
  }
}

export default Post