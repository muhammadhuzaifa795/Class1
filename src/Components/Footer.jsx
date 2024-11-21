import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block text-blue-900'>
          {/* <span >Get connected with us on All Websites:</span> */}
          <span ><img src="./image/img1.png" alt="" /></span>
        </div>

        <div>
          <a href='' className='me-4 text-reset bg-black cursor-pointer'>
            <MDBIcon color='secondary' fab icon='facebook-f' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='twitter' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='google' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='instagram' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='linkedin' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='github' />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 text-blue-900'>
                <MDBIcon color='secondary' icon='gem'  />
                Company name
              </h6>
              <p className='text-gray-700 hover:text-blue-900'>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit
                amet, consectetur adipisicing elit.
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4 '>
              <h6 className='text-uppercase fw-bold mb-4 text-blue-900'>Products</h6>
              <p>
                <a href='#!' className='text-gray-700 hover:text-blue-900 '>
                  Angular
                </a>
              </p>
              <p>
                <a href='#!' className='text-gray-700 hover:text-blue-900 '>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='text-gray-700 hover:text-blue-900  '>
                  Vue
                </a>
              </p>
              <p>
                <a href='#!' className='text-gray-700 hover:text-blue-900 '>
                  Laravel
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 text-blue-900'>Useful links</h6>
              <p>
                <a href='#!' className='text-gray-700 hover:text-blue-900 '>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-gray-700 hover:text-blue-900 '>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-gray-700 hover:text-blue-900 '>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-gray-700 hover:text-blue-900 '>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 text-blue-900'>Contact</h6>
              <p>
                <a href='#!' className='text-gray-700 hover:text-blue-900 '>
                New York, NY 10012
                </a>
              </p>
              <p>
                <a href='#!' className='text-gray-700 hover:text-blue-900 '>
                info@example.com
                </a>
              </p>
              <p>
                <a href='#!' className='text-gray-700 hover:text-blue-900 '>
                + 01 234 567 88
                </a>
              </p>
              <p>
                <a href='#!' className='text-gray-700 hover:text-blue-900 '>
                + 01 284 567 89
                </a>
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4 text-blue-900' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  );
}