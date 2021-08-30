import React from "react";
function Slider(props) {
  return (
    <div
      class="gls-slideshow"
      gls-slideshow="ratio: 7:3; min-height: 300; max-height: 600"
    >
      <div
        class="gls-position-relative gls-visible-toggle gls-light"
        tabindex="-1"
      >
        <ul class="gls-slideshow-items" style={{ minHeight: "600px" }}>
          <li>
            <img
              src="https://utahhealthcare.github.io/gloss-docs/images/photo.jpg"
              alt=""
              gls-cover=""
              class="gls-cover"
              gls-img="target: !.gls-slideshow-items"
            />
            <div class="gls-position-center gls-position-medium gls-text-center">
              <h1
                class="gls-heading-medium"
                gls-slideshow-parallax="x: 200,-200"
                style={{ transform: "translateX(0px)" }}
              >
                Heading
              </h1>
              <p
                class="gls-text-lead"
                gls-slideshow-parallax="x: 400,-400"
                style={{ transform: "translateX(0px)" }}
              >
                Lorem ipsum dolor sit amet.
              </p>
            </div>
          </li>
          <li>
            <img
              data-src="https://utahhealthcare.github.io/gloss-docs/images/dark.jpg"
              alt=""
              gls-cover=""
              class="gls-cover"
              gls-img="target: !.gls-slideshow-items"
            />
            <div
              class="gls-visible@m gls-overlay gls-overlay-primary gls-position-bottom-left gls-position-large"
              gls-slideshow-parallax="x: 200,-200"
            >
              <h3 class="gls-margin-remove">Overlay Bottom</h3>
              <p class="gls-margin-remove">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </li>
          <li>
            <img
              data-src="https://utahhealthcare.github.io/gloss-docs/images/light.jpg"
              alt=""
              gls-cover=""
              class="gls-cover"
              gls-img="target: !.gls-slideshow-items"
            />
            <div class="gls-position-center gls-position-medium gls-text-center">
              <h1
                class="gls-heading-medium"
                gls-slideshow-parallax="y: -100,0,0; opacity: 1,1,0"
                style={{ transform: "translateY(0px)", opacity: "0" }}
              >
                Heading
              </h1>
              <p
                class="gls-text-lead"
                gls-slideshow-parallax="y: 100,0,0; opacity: 1,1,0"
                style={{ transform: "translateY(0px)", opacity: "0" }}
              >
                Lorem ipsum dolor sit amet.
              </p>
            </div>
          </li>
          <li>
            <img
              data-src="https://utahhealthcare.github.io/gloss-docs/images/photo2.jpg"
              alt=""
              gls-cover=""
              class="gls-cover"
              gls-img="target: !.gls-slideshow-items"
            />
            <div class="gls-position-center gls-position-medium gls-text-center">
              <h1
                class="gls-heading-medium"
                gls-slideshow-parallax="x: 200,-200"
                style={{ transform: "translateX(-200px)" }}
              >
                Heading
              </h1>
              <p
                class="gls-text-lead"
                gls-slideshow-parallax="x: 400,-400"
                style={{ transform: "translateX(-400px)" }}
              >
                Lorem ipsum dolor sit amet.
              </p>
            </div>
          </li>
        </ul>

        <a
          class="gls-slidenav-large gls-position-center-left gls-position-small gls-hidden-hover gls-icon gls-slidenav-previous gls-slidenav"
          href
          gls-slidenav-previous=""
          gls-slideshow-item="previous"
        ></a>
        <a
          class="gls-slidenav-large gls-position-center-right gls-position-small gls-hidden-hover gls-icon gls-slidenav-next gls-slidenav"
          href
          gls-slidenav-next=""
          gls-slideshow-item="next"
        ></a>

        <div class="gls-position-bottom-center gls-position-medium">
          <ul class="gls-slideshow-nav gls-dotnav"></ul>
        </div>
      </div>
    </div>
  );
}

export default Slider;
