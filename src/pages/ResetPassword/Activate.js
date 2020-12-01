import React, { useState,useEffect} from 'react';
import { Redirect,useHistory } from 'react-router-dom';
import Authservice from '../../services/auth-services';

const Activate = (props) => {
    const [verified, setVerified] = useState(false);

    const history=useHistory();
    const token = props.match.params.token;
    useEffect(() => {
       
        Authservice.verify_email(token).then(
            (response) => {
                    history.push('/login')
                },
          (error) => {
            const _content =error.response.data
            
          }
        );
  
      },

      []);



    
    return (
        <div className='container'>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',marginTop: '200px' }}>
                <h1>Account verified</h1>
            
            </div>
        </div>
    );
};

export default Activate;
