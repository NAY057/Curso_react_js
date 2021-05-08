import React from "react";
import "./styles/BadgesList.css";
import { Link } from "react-router-dom";
import Gravatar from "./Gravatar";

class BadgesListItemNico extends React.Component {
  render() {
    return (
      <div className="BadgesListItem">
        <Gravatar
          className="BadgesListItem__avatar"
          email={this.props.badge.email}
          alt={`${this.props.badge.firstName} ${this.props.badge.lastName}`}
        />

        <div className="BadgeList">
          <strong>{this.props.badge.firstName}</strong>
          <br />@{this.props.badge.twitter}
          <br />
          {this.props.badge.jobTitle}
        </div>
      </div>
    );
  }
}

function useSearchBadges(badges){
    const [query, setQuery] = React.useState('')

    const [filterBadges, setfilterBadges] = React.useState(badges)

    React.useMemo(()=>{
        const result = badges.filter(badge => {
        return `${badge.firstName} ${badge.lastName}`.toLowerCase().includes(query.toLowerCase())
        })
        setfilterBadges(result)
    }, [badges ,query] )

    return {query, setQuery, filterBadges}
} 

function BadgesListNico(props) {
    const badges = props.badges

    const {query, setQuery, filterBadges} = useSearchBadges(badges)

  if (filterBadges.length === 0) {
    return (
      <div>
        <div className="form-group">
          <label>Filter Badges</label>
          <input
            type="text"
            className="form-control"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </div>
        <h3>No badges were found</h3>
        <Link className="btn btn-primary" to="/badges/new">
          Create a new Badge Here
        </Link>
      </div>
    );
  }
  return (
      
    <div className="BadgesList">
        <div className="form-group">
            <label>Filter Badges</label>
            <input 
            type="text" 
            className='form-control' 
            value={query} 
            onChange={(e) => {
                setQuery(e.target.value)
            }} 
            />
        </div>
      <ul className="list-unstyled">
        {filterBadges.map((badge) => {
          return (
            <Link
              to={`badges/${badge.id}`}
              className="text-decoration-none text-reset"
            >
              <li key={badge.id}>
                <BadgesListItemNico badge={badge} />
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default BadgesListNico;
