import React from 'react'
import { render } from 'react-dom'
import Link from 'next/link'
import Router from 'next/router'


class Upload extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      Router.push(`/post?title=${this.state.value}`, `/p/${this.state.value}`)
      event.preventDefault()
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
          <label>Flipkart link</label>
          <input type="text" class="form-control" placeholder="Paste the Flipkart product link" />
          <p className="help-block">Browse the product on filpkart website copy the full website address and paste it above.</p>
        </div>
        <div className="form-group">
          <label>Caption</label>
          <input type="text" className="form-control" placeholder="Write someting..." />
        </div>
        <div className="form-group">
          <label>Photo</label>
          <input type="file" />
          <p className="help-block">Upload photo (Optional).</p>
        </div>
        <button type="submit" className="btn btn-default">Submit</button>
        </form>
      );
    }
  }

  export default Upload