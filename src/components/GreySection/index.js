import React from "react";

function GreySection(props) {
  return (
    <div>
      <section class="gls-section gls-section-muted">
        <div class="gls-container">
          <div gls-grid>
            <div class="gls-width-3-4@l">
              <div class="gls-card gls-card-outline gls-card-body gls-margin-large-bottom">
                <div class="gls-child-width-1-2@m" gls-grid>
                  <div>
                    <h2 class="gls-h1 gls-text-uppercase gls-text-wider">
                      <a
                        class="gls-link-reset"
                        href="https://mychart.med.utah.edu/mychart/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span class="gls-text-semibold gls-text-primary">
                          My
                        </span>
                        <span class="gls-text-muted gls-text-regular">
                          Chart
                        </span>
                      </a>
                    </h2>
                    <p>
                      MyChart is a secure, online health management tool that
                      connects University of Utah Health Patients to portions of
                      their personal medical record and University Health Plan
                      members to their insurance information.{" "}
                      <a
                        href="https://mychart.med.utah.edu/mychart/default.asp?mode=stdfile&amp;option=faq"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Learn more about MyChart.
                      </a>
                    </p>
                  </div>
                  <div>
                    <div class="gls-margin">
                      <label class="gls-form-label" for="form-s-text">
                        MyChart ID
                      </label>
                      <input
                        class="gls-input"
                        id="form-s-text"
                        type="text"
                        placeholder="Enter your MyChart ID"
                      />
                    </div>
                    <div class="gls-margin">
                      <label class="gls-form-label" for="form-s-text">
                        Password
                      </label>
                      <input
                        class="gls-input"
                        id="form-s-text"
                        type="text"
                        placeholder="Enter your password"
                      />
                    </div>
                    <div class="gls-text-center">
                      <a href class="gls-button gls-button-primary">
                        Log In to MyChart
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="gls-child-width-1-2@s gls-child-width-1-3@l" gls-grid>
                <div>
                  <div class="gls-box-shadow-medium gls-margin gls-text-center">
                    <a
                      class="gls-inline-clip gls-link-reset"
                      style={{ minHeight: "240px" }}
                      href="/"
                    >
                      <canvas width="640" height="480"></canvas>
                      <img
                        class="gls-cover"
                        alt=""
                        gls-cover=""
                        data-src="https://utahhealthcare.github.io/gloss-docs/images/slider2.jpg"
                        data-sizes="(max-aspect-ratio: 640/480) 100vh"
                        data-width="640"
                        data-height="480"
                        gls-img
                      />

                      <div class="gls-position-center">
                        <div class="gls-panel gls-padding gls-light gls-margin-remove-first-child">
                          <h3 class="gls-text-shadow">
                            How Does My Doctor Rate?
                          </h3>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div>
                  <div class="gls-box-shadow-medium gls-background-default gls-margin gls-text-center">
                    <a
                      class="gls-inline-clip gls-link-reset"
                      style={{ minHeight: "240px" }}
                      href="/"
                    >
                      <canvas width="640" height="480"></canvas>

                      <div class="gls-position-center">
                        <div class="gls-panel gls-padding gls-margin-remove-first-child">
                          <h3>How Much Will My Care Cost?</h3>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div>
                  <div class="gls-box-shadow-medium gls-margin gls-text-center">
                    <a
                      class="gls-inline-clip gls-link-reset"
                      style={{ minHeight: "240px" }}
                      href="/"
                    >
                      <canvas width="640" height="480"></canvas>
                      <img
                        class="gls-cover"
                        alt=""
                        gls-cover=""
                        data-src="https://utahhealthcare.github.io/gloss-docs/images/slider3.jpg"
                        data-sizes="(max-aspect-ratio: 640/480) 100vh"
                        data-width="640"
                        data-height="480"
                        gls-img
                      />

                      <div class="gls-position-center">
                        <div class="gls-panel gls-padding gls-light gls-margin-remove-first-child">
                          <h3 class="gls-text-shadow">
                            Expert Health News &amp; Information
                          </h3>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div>
                  <div class="gls-box-shadow-medium gls-background-default gls-margin gls-text-center">
                    <a
                      class="gls-inline-clip gls-link-reset"
                      style={{ minHeight: "240px" }}
                      href="/"
                    >
                      <canvas width="640" height="480"></canvas>

                      <div class="gls-position-center">
                        <div class="gls-panel gls-padding gls-margin-remove-first-child">
                          <h3>Image</h3>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div>
                  <div class="gls-box-shadow-medium gls-margin gls-text-center">
                    <a
                      class="gls-inline-clip gls-link-reset"
                      style={{ minHeight: "240px" }}
                      href="/"
                    >
                      <canvas width="640" height="480"></canvas>
                      <img
                        class="gls-cover"
                        alt=""
                        gls-cover=""
                        data-src="https://utahhealthcare.github.io/gloss-docs/images/slider4.jpg"
                        data-sizes="(max-aspect-ratio: 640/480) 100vh"
                        data-width="640"
                        data-height="480"
                        gls-img
                      />

                      <div class="gls-position-center">
                        <div class="gls-panel gls-padding gls-light gls-margin-remove-first-child">
                          <h3 class="gls-text-shadow">
                            Is There a Clinical Trial I Can Join?
                          </h3>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div>
                  <div class="gls-box-shadow-medium gls-background-default gls-margin gls-text-center">
                    <a
                      class="gls-inline-clip gls-link-reset"
                      style={{ minHeight: "240px" }}
                      href="/"
                    >
                      <canvas width="640" height="480"></canvas>

                      <div class="gls-position-center">
                        <div class="gls-panel gls-padding gls-margin-remove-first-child">
                          <h3>Image</h3>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="gls-width-1-4@l">
              <a
                href
                class="gls-button gls-button-primary gls-button-large gls-margin-bottom"
              >
                U of U Health &amp; Medical Marijuana
              </a>

              <div>
                <div class="gls-card gls-card-default gls-border-square gls-box-shadow-remove">
                  <div class="gls-card-header gls-text-center">
                    <span class="gls-text-primary">Friday</span>
                    <br />
                    <span class="gls-h4 gls-text-uppercase">
                      December 20, 2019
                    </span>
                  </div>
                  <div class="gls-card-body">
                    <h3 class="gls-card-title">Calendar Item 1</h3>
                    <p class="gls-padding-small-left gls-border-left gls-border-primary">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua…
                    </p>
                    <p>
                      <a href>Learn More</a>
                    </p>
                    <h3 class="gls-card-title">Calendar Item 2</h3>
                    <p class="gls-padding-small-left gls-border-left gls-border-primary">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua…
                    </p>
                    <p>
                      <a href>Learn More</a>
                    </p>
                  </div>
                </div>
                <div class="gls-card gls-card-default gls-border-square gls-box-shadow-remove">
                  <div class="gls-card-header gls-text-center">
                    <span class="gls-text-primary">Monday</span>
                    <br />
                    <span class="gls-h4 gls-text-uppercase">
                      December 23, 2019
                    </span>
                  </div>
                  <div class="gls-card-body">
                    <h3 class="gls-card-title">Calendar Item 3</h3>
                    <p class="gls-padding-small-left gls-border-left gls-border-primary">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua…
                    </p>
                    <p>
                      <a href>Learn More</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default GreySection;
