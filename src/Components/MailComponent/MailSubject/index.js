import React from 'react';
import Button from '../../Common/Button';


const MailSubject = ({mId,clickHandler, unread,subject ,content}) => {

  return (
      <>
      <p>
        {(unread === true)?<b> {subject} <div  className='truncate'> {content} </div></b>: <span>{subject} <div  className='truncate'> {content} </div> </span>}  
        <Button clickHandler= {clickHandler} buttonText="Delete" looks="btn btn-primary btn-ng" />            
     </p>
    </>
  );
}

export default MailSubject;