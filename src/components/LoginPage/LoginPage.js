import React from 'react';
import './loginPage.scss';

const LoginPage = () => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">My Blog</h1>
      <button className="btn-layout">
        Login with Google
      </button>
    </div>
  </div>
);

export default LoginPage;