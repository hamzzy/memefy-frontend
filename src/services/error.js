import React, {Component} from 'react';

const error = (value) => {
      return (
        <div className="alert alert-danger" role="alert">
          {value}
        </div>
      );
    
  };


  export default error;