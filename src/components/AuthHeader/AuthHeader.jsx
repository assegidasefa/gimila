// Layout.js
import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

const AuthHeader = ({ content }) => {
  return (
    <div className="flex flex-col sm:flex-row">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="container mx-auto p-4">
          {content}
        </div>
      </div>
    </div>
  );
};

export default AuthHeader;
