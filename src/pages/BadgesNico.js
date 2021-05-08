import React from "react";
// import Navbar from "../components/Navbar";
import "./styles/Badges.css";
import confLogo from "../images/badge-header.svg";
import BadgesListNico from "../components/BadgesListNico";
import { Link } from "react-router-dom";
import api from '../api'
import PageLoading from '../components/PageLoading'
import MiniLoader from '../components/MiniLoaderNico'
import PageError from '../components/PageError'

class BadgesNico extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
    // [
    //     {
    //       id: '2de30c42-9deb-40fc-a41f-05e62b5939a7',
    //       firstName: 'Freda',
    //       lastName: 'Grady',
    //       email: 'Leann_Berge@gmail.com',
    //       jobTitle: 'Legacy Brand Director',
    //       twitter: 'FredaGrady22221-7573',
    //       avatarUrl:
    //         'https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon',
    //     },
    //     {
    //       id: 'd00d3614-101a-44ca-b6c2-0be075aeed3d',
    //       firstName: 'Major',
    //       lastName: 'Rodriguez',
    //       email: 'Ilene66@hotmail.com',
    //       jobTitle: 'Human Research Architect',
    //       twitter: 'MajorRodriguez61545',
    //       avatarUrl:
    //         'https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon',
    //     },
    //     {
    //       id: '63c03386-33a2-4512-9ac1-354ad7bec5e9',
    //       firstName: 'Daphney',
    //       lastName: 'Torphy',
    //       email: 'Ron61@hotmail.com',
    //       jobTitle: 'National Markets Officer',
    //       twitter: 'DaphneyTorphy96105',
    //       avatarUrl:
    //         'https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon',
    //     },
    // ],
  };

  componentDidMount() {
    this.fetchData();

    this.IntervalId = setInterval(this.fetchData,5000)
    // ESTO NO SE DEBE HACER EN UN DESARROLLO REAL PORQUE ES MUY PELIGROSO
  }

  componentWillUnmount(){
    clearInterval(this.IntervalId)
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });
    try {
      const data = await api.badges.list()
      this.setState({loading: false, data:data})
    } catch (error) {
      this.setState({loading: false, error: error})
    }
  };

  render() {
    if (this.state.loading === true && this.state.data === undefined) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />
    }

    return (
      <>
        {/* <Navbar /> */}

        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                className="Badges_conf-logo"
                src={confLogo}
                alt="Conf Logo"
              />
            </div>
          </div>
        </div>

        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>

            {this.state.loading &&<MiniLoader/>}
          <BadgesListNico badges={this.state.data} />
        </div>
      </>
    );
  }
}

export default BadgesNico;