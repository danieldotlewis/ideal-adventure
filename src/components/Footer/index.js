import React from "react";

function Footer(props) {
  return (
    <div>
      <div class="gls-section gls-section-small gls-section-muted gls-border-top gls-border-bottom gls-border-primary">
        <div class="gls-container">
          <div gls-grid>
            <div class="gls-width-1-2@s gls-width-expand@m">
              <h3 class="gls-h4 gls-text-medium gls-text-primary gls-text-center gls-text-left@s">
                Site Links
              </h3>
              <ul class="gls-list gls-text-small gls-border-left gls-border-primary gls-padding-small-left">
                <li>
                  <a class="gls-link-reset" href="//healthcare.utah.edu/about/">
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    class="gls-link-reset"
                    href="//healthsciences.utah.edu/education.php"
                  >
                    Academics &amp; Research
                  </a>
                </li>
                <li>
                  <a class="gls-link-reset" href="//healthcare.utah.edu/bill/ ">
                    Billing
                  </a>
                </li>
                <li>
                  <a class="gls-link-reset" href="//employment.utah.edu/">
                    Jobs
                  </a>
                </li>
                <li>
                  <a
                    class="gls-link-reset"
                    href="//healthsciences.utah.edu/giving/"
                  >
                    Giving
                  </a>
                </li>
                <li>
                  <a
                    class="gls-link-reset"
                    href="//healthcare.utah.edu/locations/"
                  >
                    Maps &amp; Directions
                  </a>
                </li>
                <li>
                  <a
                    class="gls-link-reset"
                    href="//healthcare.utah.edu/newsroom/"
                  >
                    Newsroom
                  </a>
                </li>
                <li>
                  <a
                    class="gls-link-reset"
                    href="//healthcare.utah.edu/imagine-perfect-care/"
                  >
                    The Imagine Perfect Care Program
                  </a>
                </li>
              </ul>
            </div>
            <div class="gls-width-1-2@s gls-width-expand@m">
              <h3 class="gls-h4 gls-text-medium gls-text-primary gls-text-center gls-text-left@s">
                Helpful Links
              </h3>
              <ul class="gls-list gls-text-small gls-border-left gls-border-primary gls-padding-small-left">
                <li>
                  <a class="gls-link-reset" href="//physicians.utah.edu/">
                    Referring Providers
                  </a>
                </li>
                <li>
                  <a
                    class="gls-link-reset"
                    href="//healthcare.utah.edu/hospital/rights.php"
                  >
                    Patient Rights &amp; Responsibilities
                  </a>
                </li>
                <li>
                  <a class="gls-link-reset" href="//utah.edu/disclaimer/">
                    Disclaimer
                  </a>
                </li>
                <li>
                  <a
                    class="gls-link-reset"
                    href="//healthcare.utah.edu/policies/privacy.php"
                  >
                    Privacy Statement
                  </a>
                </li>
                <li>
                  <a
                    class="gls-link-reset"
                    href="//healthcare.utah.edu/policies/"
                  >
                    DNV GL Public Information Policy Statement
                  </a>
                </li>
                <li>
                  <a
                    class="gls-link-reset"
                    href="//healthcare.utah.edu/policies/discrimination.php"
                  >
                    Non-Discrimination Policy
                  </a>
                </li>
                <li>
                  <a
                    class="gls-link-reset"
                    href="mailto:hscwebmaster@hsc.utah.edu"
                  >
                    Webmaster
                  </a>
                </li>
              </ul>
            </div>
            <div class="gls-width-1-2@s gls-width-expand@m"></div>
            <div class="gls-width-expand@m gls-text-center gls-text-left@m">
              <p>
                <a class="" href>
                  <img
                    src="https://utahhealthcare.github.io/gloss-docs/images/uhealth-logo.svg"
                    width="180"
                    alt="uhealth-logo"
                  />
                </a>
              </p>
              <p>
                50 North Medical Drive
                <br />
                Salt Lake City, UT 84132
              </p>
              <p class="gls-h3 gls-text-primary gls-margin">801-555-5555</p>
              <ul class="gls-iconnav gls-flex-inline">
                <li>
                  <a href gls-icon="icon: twitter;">twitter</a>
                </li>
                <li>
                  <a href gls-icon="icon: facebook;">facebook</a>
                </li>
                <li>
                  <a href gls-icon="icon: youtube;">youtube</a>
                </li>
              </ul>
              <p class="gls-text-left gls-text-small">
                All clinical services and programs are part of University of
                Utah Health Hospitals and Clinics.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="gls-section gls-section-small gls-section-default">
        <div class="gls-container">
          <div class="gls-flex-middle" gls-grid>
            <div class="gls-width-expand@m gls-text-center gls-text-left@m">
              <a href>
                <img
                  alt=""
                  src="https://healthcare.utah.edu/rebrand/img/logos/uofu-logo.svg"
                />
              </a>
            </div>
            <div class="gls-width-2-5@m gls-text-right@m">
              <p class="gls-text-small">
                Copyright © 2019 University of Utah Health
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
