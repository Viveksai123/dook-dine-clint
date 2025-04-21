import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/AuthContext';

const Dashboard = () => {
  const authContext = useContext(AuthContext);
  const { user, loadUser } = authContext;

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div className='container'>
      <h1>Dashboard</h1>
      <p className='lead'>Welcome {user && user.name}</p>
      <div className='card'>
        <h3>User Information</h3>
        {user && (
          <ul className='list'>
            <li>
              <strong>Name:</strong> {user.name}
            </li>
            <li>
              <strong>Email:</strong> {user.email}
            </li>
            <li>
              <strong>Account Created:</strong>{' '}
              {new Date(user.date).toLocaleDateString()}
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dashboard;