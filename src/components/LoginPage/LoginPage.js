import React from 'react';
import './loginPage.scss';

const LoginPage = ({ startLogin }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">My Blog</h1>
      <button onClick={startLogin}>
        Login with Google
      </button>
    </div>
  </div>
);

export default LoginPage;