import React from 'react'
// import Navbar from '../components/NavbarNico'
import Badge from '../components/Badgenico'
import hero from '../images/badge-header.svg'
import BadgeFormNico from '../components/BadgeFormNico'
import './styles/BadgeNew.css'
import api from '../api'
import PageLoading from '../components/PageLoading'


class BadgeNewNico extends React.Component {
  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };


  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ loading: true, error: null });
    try {
      await api.badges.update(this.props.match.params.badgeId, this.state.form);
      this.setState({ loading: false });
      this.props.history.push('/badges')
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: null,
      form: {
        firstName: "",
        lastName: "",
        email: "",
        jobTitle: "",
        twitter: "",
      },
    };
  }
  
  componentDidMount(){
    this.fetchData()
    
  }
  
  fetchData = async e => {
    this.setState({ loading: true, error: null });
    try {
      const data = await api.badges.read(
        this.props.match.params.badgeId
      )
      this.setState({ loading: false, form: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  }

  render() {
    if (this.state.loading) {
      return <PageLoading/>
    }
    return (
      <>
        {/* <Navbar nameEvent={this.state.form.nameEvent} /> */}

        <div className="BadgeNew__hero">
          <img className="img-fluid" src={hero} alt="hero img" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName || 'First Name'}
                lastName={this.state.form.lastName || 'Last Name'}
                twitter={this.state.form.twitter || 'Twitter'}
                jobTitle={this.state.form.jobTitle || 'Jobtitle'}
                email={this.state.form.email || 'EMAIL'}
                avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
              />
            </div>
            <div className="col-6">
            <h1>EDIT ATTENDANT</h1>
              <BadgeFormNico
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default BadgeNewNico