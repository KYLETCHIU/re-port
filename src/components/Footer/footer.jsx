import React from 'react';
import {MDBFooter,MDBContainer,MDBIcon} from 'mdb-react-ui-kit';

const Footer = () => {
    
  return (
    <MDBFooter className='bg-dark text-center text-white'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <a className='btn btn-outline-light btn-floating m-1' href='https://www.facebook.com/foooomanchiu/' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </a>

          <a className='btn btn-outline-light btn-floating m-1' href='https://twitter.com/UnofficialChiu' role='button'>
            <MDBIcon fab icon='twitter' />
          </a>

          <a className='btn btn-outline-light btn-floating m-1' href='https://www.instagram.com/redwhiteandchiu/' role='button'>
            <MDBIcon fab icon='instagram' />
          </a>

          <a className='btn btn-outline-light btn-floating m-1' href='https://www.linkedin.com/in/kyle-chiu-8a6a471b2/' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </a>

          <a className='btn btn-outline-light btn-floating m-1' href='https://github.com/KYLETCHIU' role='button'>
            <MDBIcon fab icon='github' />
          </a>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      Kyle T Chiu
        <a className='text-white' href='https://mdbootstrap.com/'>
          
        </a>
      </div>
    </MDBFooter>
  );
}

export default Footer;