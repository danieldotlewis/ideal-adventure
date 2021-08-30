import React from "react";

function BigLinks(params) {
  return (
    <section class="gls-section gls-section-default gls-section-small">
      <div class="gls-container">
        <div
          class="gls-grid-match gls-grid-small gls-child-width-1-2@m"
          gls-grid
        >
          <div>
            <a
              href="/"
              class="gls-card gls-card-primary gls-card-body gls-card-hover gls-link-toggle gls-flex gls-flex-middle gls-flex-center gls-text-center"
            >
              <span
                class="gls-margin-right"
                gls-icon="icon: doctor; ratio: 2.5"
              ></span>
              <h2 class="gls-h4 gls-text-uppercase gls-margin-remove">
                Find a Doctor
              </h2>
            </a>
          </div>
          <div>
            <a
              href="/"
              class="gls-card gls-card-primary gls-card-body gls-card-hover gls-link-toggle gls-flex gls-flex-middle gls-flex-center gls-text-center"
            >
              <span
                class="gls-margin-right"
                gls-icon="icon: hospital; ratio: 2.5"
              ></span>
              <h2 class="gls-h4 gls-text-uppercase gls-margin-remove">
                Find a Location
              </h2>
            </a>
          </div>
          <div>
            <a
              href="/"
              class="gls-card gls-card-primary gls-card-body gls-card-hover gls-link-toggle gls-flex gls-flex-middle gls-flex-center gls-text-center"
            >
              <span
                class="gls-margin-right"
                gls-icon="icon: stethoscope; ratio: 2.5"
              ></span>
              <h2 class="gls-h4 gls-text-uppercase gls-margin-remove">
                Our Services
              </h2>
            </a>
          </div>
          <div>
            <a
              href="/"
              class="gls-card gls-card-primary gls-card-body gls-card-hover gls-link-toggle gls-flex gls-flex-middle gls-flex-center gls-text-center"
            >
              <span
                class="gls-margin-right"
                gls-icon="icon: medical-chart; ratio: 2.5"
              ></span>
              <h2 class="gls-h4 gls-text-uppercase gls-margin-remove">
                My Health Records
              </h2>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BigLinks;
