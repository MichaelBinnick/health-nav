/*!

=========================================================
* Now UI Dashboard React - v1.5.1
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";
import { Container } from "reactstrap";
// used for making the prop types of this component
import PropTypes from "prop-types";

function Footer(props) {
  return (
    <footer className={"footer" + (props.default ? " footer-default" : "")}>
      <Container fluid={props.fluid ? true : false}>
        <nav>
          <ul>
            <li>
              <a
                href="index.html"
              >
               Team:
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/keniabalestra/"
                target="_blank"
              >
                Kenia
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/nick-holm-bb230b256/"
                target="_blank"
              >
                Nick
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/michaelbinnick/"
                target="_blank"
              >
                Michael
              </a>
            </li>
          </ul>
        </nav>
        
      </Container>
    </footer>
  );
}

Footer.propTypes = {
  default: PropTypes.bool,
  fluid: PropTypes.bool
};

export default Footer;
