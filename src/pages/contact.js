import React from 'react';
import CI from '../CI.png';
const Contact = () => {
  return (
    <div className="formstyle">
      <div className="box">
        <h1>Call me..Beep Me..If You Wanna Reach Me</h1>
        <form action="https://public.herotofu.com/v1/1d019380-ad0f-11ec-b83f-8f17e10d6288" method="post">
          <div>
            <label for="name"><p>Name</p></label>
            <input name="Name" id="name" type="text" required />
          </div>
          <div>
            <label for="email"><p>Email</p></label>
            <input name="Email" id="email" type="email" required />
          </div>
          <div>
            <label for="name"><p>Mssg</p></label>
            <input name="Name" id="name" type="text" required />
          </div>
          <div>
            <input className="cntbtn" type="submit" value="Submit" />
          </div>
          <div className="pic">
            <img src={CI} alt="Circle Image" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;