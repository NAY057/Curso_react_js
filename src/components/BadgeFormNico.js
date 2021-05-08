import React from 'react'

class BadgeFromNico extends React.Component{

    handleClick = e =>{
    let    t = 'Button was clicked';
        console.log({t})
    }

    // handleSumit = e =>{
    // e.preventDefault();
    // console.log('Form submited')
    // }

    render(){
        return (
          <div>

            {this.props.error && (
                <p className='text-danger'>{this.props.error.message}</p>
              )}
            <form onSubmit={this.props.onSubmit}>
              <div className="from-group">
                <label>First Name</label>
                <input
                  onChange={this.props.onChange}
                  className="form-control"
                  name="firstName"
                  type="text"
                  value={this.props.formValues.firstName}
                />
              </div>

              <div className="from-group">
                <label>Last Name</label>
                <input
                  onChange={this.props.onChange}
                  className="form-control"
                  name="lastName"
                  type="text"
                  value={this.props.formValues.lastName}
                />
              </div>

              <div className="from-group">
                <label>Email</label>
                <input
                  onChange={this.props.onChange}
                  className="form-control"
                  name="email"
                  type="email"
                  value={this.props.formValues.email}
                />
              </div>

              <div className="from-group">
                <label>Job title</label>
                <input
                  onChange={this.props.onChange}
                  className="form-control"
                  name="jobTitle"
                  type="text"
                  value={this.props.formValues.jobTitle}
                />
              </div>

              <div className="from-group">
                <label>twitter</label>
                <input
                  onChange={this.props.onChange}
                  className="form-control"
                  name="twitter"
                  type="text"
                  value={this.props.formValues.twitter}
                />
              </div>

              <button onClick={this.handleClick} className="btn btn-primary mt-3">
                Save
              </button>
            </form>
          </div>
        );
    }
}

export default BadgeFromNico

