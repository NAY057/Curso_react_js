import React from 'react';
import { Link } from 'react-router-dom';
import Badge from '../components/Badge';

import './styles/BadgeDetails.css';
import confLogo from '../images/platziconf-logo.svg';
import ModalDelete from '../components/DeleteBadgeModal'

function useMinNum(min, max) {
  // Este es un Custom hook 
  const [count, setCount] = React.useState(0)

  if (count < min) {
    setCount(0)
  }if (count > max) {
    setCount(0)
  }
// useState regresa un arreglo de dos argumentos.
  return [count, setCount]
}

function BadgeDetails(props) {
  const [count, setCount] = useMinNum(0, 4)
  const badge = props.badge;

  return (
    <div>
      <div className="BadgeDetails__hero">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={confLogo} alt="Logo de la Conferencia" />
            </div>
            <div className="col-6 BadgeDetails__hero-attendant-name">
              <h1>
                {badge.firstName} {badge.lastName} 
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
            <Badge
              firstName={badge.firstName}
              lastName={badge.lastName}
              email={badge.email}
              twitter={badge.twitter}
              jobTitle={badge.jobTitle}
            />
          </div>
          <div className="col">
            <h2>Actions: {count}</h2>
                <button onClick={()=>{
                  setCount(count + 1)
                }} className='btn btn-primary mb-4'>
                  Increase count +
                </button>
            <div>
                <button onClick={()=>{
                  setCount(count - 1)
                }} className='btn btn-danger mb-4'>
                  Decrease count -
                </button>
              <div>
                <Link
                  className="btn btn-primary mb-4"
                  to={`/badges/${badge.id}/edit`}
                >
                  Edit
                </Link>
              </div>

              <div>
              <button onClick={props.onOpenModal} className="btn btn-danger">
                  Delete
                </button>
                <ModalDelete                 
                  isOpen={props.modalIsOpen}
                  onClose={props.onCloseModal}
                  onDeleteBadge={props.onDeleteBadge}
                  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BadgeDetails;
