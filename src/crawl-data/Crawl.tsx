import React from 'react';
import Action from './button/Action';
import './Crawl.css';
import useFetch from './Services';
import Form from './button/Form';

function Crawl() {
  const datas = useFetch();


    return (
      <div className="Crawl">
        
        <React.StrictMode>
            <Action />
            <Form />
        </React.StrictMode>
      </div>
    );
  }
  
export default Crawl;
  