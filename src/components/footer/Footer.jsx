import { React } from 'react';

const Footer = () => {
  return (
    <footer className="page-footer font-small blue pt-4 bg-dark text-light">
      <div className="container-fluid text-center text-md-left ms-4">
        <div className="row">
          <div className="col-md-5 mt-md-0 mt-3">
            <h5 className="text-uppercase">Contact Us</h5>
            <p>Jalan BSD Grand Boulevard, Sampora, BSD, Tangerang, Banten 15345. BSD Green Office Park. Tangerang, Banten 12730</p>
          </div>

          <hr className="clearfix w-100 d-md-none pb-0" />

          <div className="col-md-2 mb-md-0 mb-3">
            <h5 className="text-uppercase">About</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!">Home</a>
              </li>
              <li>
                <a href="#!">Content 1</a>
              </li>
              <li>
                <a href="#!">Content 2</a>
              </li>
            </ul>
          </div>

          <div className="col-md-5 mb-md-0 mb-3">
            <h5 className="text-uppercase">Follow Our Page On</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!">Link 1</a>
              </li>
              <li>
                <a href="#!">Link 2</a>
              </li>
              <li>
                <a href="#!">Link 3</a>
              </li>
              <li>
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-copyright text-center py-3">
        © 2020 Copyright:
        <a href="https://www.tokopedia.com/search?st=product&q=sayur&srp_component_id=02.01.00.00&srp_page_id=&srp_page_title=&navsource="> Sayur.in</a>
      </div>
    </footer>
  );
};

export default Footer;
