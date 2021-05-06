import React from 'react';
import '../css/Discuss.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widget from './Widget';

function discuss(){
    return (
      <div className="Discuss">
        <Navbar />
        <div className="disucss_content">
          <Sidebar/>
          <Feed/>
          <Widget/>
        </div>
      </div>
    );
}

export default discuss;