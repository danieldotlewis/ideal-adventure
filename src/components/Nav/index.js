import React from "react";
function Nav(props) {
  return (
    <header>
      <nav
        class="gls-navbar-container"
        gls-navbar="dropbar: true; dropbar-mode: push"
      >
        <div class="gls-navbar-left">
          <a class="gls-navbar-item gls-logo" href>
            <img
              src="https://utahhealthcare.github.io/gloss-docs/images/uhealth-logo.svg"
              width="150"
              alt="utah health care"
            />
          </a>

          <ul class="gls-navbar-nav gls-visible@l">
            <li>
              <a href>Find a Doctor</a>
            </li>
            <li>
              <a href>Find a Location</a>
            </li>
            <li>
              <a href>Medical Services</a>
            </li>
            <li>
              <a href class="gls-navbar-dropdown-parent">
                Patients &amp; Visitors
                <span
                  gls-icon="icon: chevron-down; ratio: 0.5"
                  class="gls-navbar-dropdown-icon gls-navbar-dropdown-icon-down gls-margin-small-left"
                ></span>
              </a>
              <div
                class="gls-navbar-dropdown"
                gls-drop="cls-drop: gls-navbar-dropdown; boundary: !nav; boundary-align: true; pos: bottom-justify; flip: x; mode: click; duration: 100;"
              >
                <div class="gls-child-width-1-3@m" gls-grid>
                  <div>
                    <ul class="gls-nav gls-navbar-dropdown-nav gls-list-large">
                      <li class="gls-nav-header">Patient Services</li>
                      <li>
                        <a href>Questions About Your Bill?</a>
                      </li>
                      <li>
                        <a href>Urgent Care</a>
                      </li>
                      <li>
                        <a href>Where to Stay</a>
                      </li>
                      <li>
                        <a href>Patient &amp; Family Services</a>
                      </li>
                      <li>
                        <a href>Clinical Services</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul class="gls-nav gls-navbar-dropdown-nav gls-list-large">
                      <li class="gls-nav-header">
                        University of Utah Hospital
                      </li>
                      <li>
                        <a href>University of Utah Hospital</a>
                      </li>
                      <li>
                        <a href>Staying at the Hospital</a>
                      </li>
                      <li>
                        <a href>Parking &amp; Valet</a>
                      </li>
                      <li>
                        <a href>Looking for Another Location?</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul class="gls-nav gls-navbar-dropdown-nav gls-list-large">
                      <li class="gls-nav-header">General Questions</li>
                      <li>801-581-2668</li>
                      <li>
                        <a href>
                          <span
                            class="gls-margin-small-right"
                            gls-icon="icon: translate"
                          ></span>{" "}
                          Find an Interpreter
                        </a>
                      </li>
                      <li>
                        <a href>About U of U Health</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="gls-navbar-right">
          <ul class="gls-navbar-nav gls-visible@l">
            <li>
              <a href>Billing &amp; Insurance</a>
            </li>
            <li>
              <a href>
                <span class="gls-text-muted">My</span>
                <span class="gls-text-primary">Chart</span>
              </a>
            </li>
          </ul>

          <a
            class="gls-navbar-toggle gls-text-primary gls-visible@l"
            gls-toggle="target: #search-modal; animation: gls-animation-fade"
            href
          >
            <span gls-search-icon></span>
            <span class="gls-text-uppercase gls-margin-xsmall-left">
              Search
            </span>
          </a>

          <div class="gls-navbar-item gls-hidden@l">
            <button
              class="gls-button gls-button-outline gls-button-small"
              type="button"
              gls-toggle="target: #offcanvas"
            >
              <span
                gls-navbar-toggle-icon
                class="gls-margin-xsmall-right gls-text-primary"
              ></span>
              <span class="gls-text-uppercase">Menu</span>
            </button>
          </div>
        </div>
      </nav>
      <div class="gls-navbar-dropbar"></div>
    </header>
  );
}

export default Nav;
