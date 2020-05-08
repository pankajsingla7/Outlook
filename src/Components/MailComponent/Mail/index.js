import React from 'react';
import Button from '../../Common/Button';
import MailBody from '../MailBody';
import MailSubject from '../MailSubject';
import  inbox  from '../../../data/inbox ';
import spam from '../../../data/spam';
import mybox from '../../../data/mybox';
import deletedInbox from '../../../data/deletedInbox';





class Mail extends React.Component {

    

    constructor(props) {
        super(props);
        this.state = ({
            mailData : inbox,
            mailtype : 'inbox',
            subject : '',
            content : '',

        })

    }

    inboxHandler = () =>  {
       this.setState({
           mailData : inbox,
           mailtype : 'inbox',
           content : ''
       });
       
    }

    spamHander = () => {
        this.setState({
            mailData : spam,
            mailtype : 'spam',
            content : ''
        });
       
    }

    deletedHandler = () => {
        this.setState({
            mailData : deletedInbox,
            mailtype : 'delete',
            content : ''
        });
        this.setState({
            subject : '',
            content : ''
        })
    }

    myBoxHandler = () => {
        this.setState({
            mailData : mybox,
            mailtype : 'mybox',
        });
        this.setState({
            subject : '',
            content : ''
        })
    }

    showContent = (details) => {
        this.setState({
            content : details.content
        });
        switch(this.state.mailtype) {
            case 'inbox':
            for (var i in inbox) {
                if (inbox[i].mId === details.mId && inbox[i].unread === true) {
                    inbox[i].unread = false;
                    this.setState({
                        mailData : inbox
                    });
                   break; //Stop this loop, we found it!
                }
              }    
              return 'inbox';
              case 'spam':
              for (var i in spam) {
                if (spam[i].mId === details.mId && spam[i].unread === true) {
                    spam[i].unread = false;
                    this.setState({
                        mailData : spam
                    });
                   break; //Stop this loop, we found it!
                }
              }    
              return 'spam';
              case 'delete':
              for (var i in deletedInbox) {
                if (deletedInbox[i].mId === details.mId && deletedInbox[i].unread === true) {
                    deletedInbox[i].unread = false;
                    this.setState({
                        mailData : deletedInbox
                    });
                   break; //Stop this loop, we found it!
                }
              }    
              return 'delete';
              case 'mybox':
              for (var i in mybox) {
                if (mybox[i].mId === details.mId && mybox[i].unread === true) {
                    mybox[i].unread = false;
                    this.setState({
                        mailData : mybox
                    });
                   break; //Stop this loop, we found it!
                }
              }    
              return 'mybox';
            default:
              return 'foo';
          }
    }

    deleteMail = (guid) => {

          switch(this.state.mailtype) {
            case 'inbox':
                const deletedEmail = this.state.mailData.filter(item => item.mId === guid);
                deletedInbox.push(...deletedEmail);
                 //find index of element
                var index = inbox.findIndex(e=>e.mId===guid);
                //copy array
                var newAray = inbox.slice();
                //delete element by index
                newAray.splice(index, 1);
              
                inbox.splice(0,inbox.length);
                inbox.push(...newAray);
                this.setState({
                    mailData : newAray
                });
              return 'inbox';
              case 'spam':
                const deletedSpamEmail = this.state.mailData.filter(item => item.mId === guid);
                deletedInbox.push(...deletedSpamEmail);
                //find index of element
                var index = spam.findIndex(e=>e.mId===guid);
                //copy array
                var newAray = spam.slice();
                //delete element by index
                newAray.splice(index, 1);
                spam.splice(0,spam.length);
                spam.push(...newAray);
                this.setState({
                      mailData : newAray
                });
              return 'spam';
              case 'delete':
              return 'delete';
              case 'mybox':
              const deletedMyboxEmail = this.state.mailData.filter(item => item.mId === guid);
              deletedInbox.push(...deletedMyboxEmail);
               //find index of element
              var index = mybox.findIndex(e=>e.mId===guid);
              //copy array
              var newAray = mybox.slice();
              //delete element by index
              newAray.splice(index, 1);
              mybox.splice(0,mybox.length);
              mybox.push(...newAray);
             this.setState({
                 mailData : newAray
              });
              return 'mybox';
            default:
              return 'default';
          }
            
           
    }

    render(){
       // const { subject,content} = this.state;
    
        return (
            <>

            <div className="container-fluid">
            <nav className="nav">
            </nav>
                <div className="row"> 
                 <div className="col-md-3 border border-default margin-cls">
                 <h2>Folders</h2>
                    <div>
                    <Button buttonText="Inbox" clickHandler= {this.inboxHandler} looks="btn btn-primary btn-lg btn-block" />            
                    <Button buttonText="Spam" clickHandler={this.spamHander} looks="btn btn-primary btn-lg btn-block" />
                    <Button buttonText="Deleted" clickHandler={this.deletedHandler} looks="btn btn-primary btn-lg btn-block" />
                    <Button buttonText="MyBox" clickHandler={this.myBoxHandler} looks="btn btn-primary btn-lg btn-block" />
                    </div> 
                 </div>
                 <div className="col-md-3 border border-default margin-cls">
                 {this.state.mailData.map((mailDetail, index) => {
                        return  <>            
                                <div className="column middle" id={mailDetail.mId} onClick={this.showContent.bind(this, mailDetail)}>               
                                <h2>{(index === 0)?'Subject':''}</h2>            
                                    <MailSubject clickHandler={() => this.deleteMail(mailDetail.mId)}  unread= {mailDetail.unread} subject={ mailDetail.subject} content ={ mailDetail.content } />
                                </div> 
                            </>
                            })}
                 </div>
                 <div className="col-md-6 border border-default margin-cls">
                 <h2>Content</h2>
                 <MailBody   content ={ this.state.content }  />
                 </div>
                 
                </div>

            </div>
            
           
           
    
            </>
        );
    }
}

export default Mail;
