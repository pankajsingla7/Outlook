import React from 'react';



const MailBody = ({mId,unread,content}) => {
  return (
      <>      
    <div><span>{(unread === true)?<b> {content}</b>:content}  </span>  </div>
    </>
  );
}

export default MailBody;