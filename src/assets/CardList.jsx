import React, { useState, useEffect } from 'react';

const CardList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=5') 
      .then(response => response.json())
      .then(data => setUsers(data.results))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="card-list">
      {users.map((user, index) => (
        <div className="card" key={index}>
          <img src={user.picture.large} alt="User" />
          <div>
            <h5>{`${user.name.first} ${user.name.last}`}</h5>
            <p>{user.email}</p>
            <p>{`${user.location.city}, ${user.location.country}`}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardList;

