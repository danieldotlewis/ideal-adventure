import React from "react";
function OffCanvas(props) {
  return (
    <div id="offcanvas" gls-offcanvas="flip: true; overlay: true">
      <div class="gls-offcanvas-bar gls-box-shadow-medium">
        <button class="gls-offcanvas-close" type="button" gls-close></button>

        <ul class="gls-nav gls-nav-default">
          <li class="gls-active">
            <a href>Active</a>
          </li>
          <li class="gls-parent">
            <a href>Parent</a>
            <ul class="gls-nav-sub">
              <li>
                <a href>Sub item</a>
              </li>
              <li>
                <a href>Sub item</a>
              </li>
            </ul>
          </li>
          <li class="gls-nav-header">Header</li>
          <li>
            <a href>
              <span
                class="gls-margin-small-right"
                gls-icon="icon: table"
              ></span>{" "}
              Item
            </a>
          </li>
          <li>
            <a href>
              <span
                class="gls-margin-small-right"
                gls-icon="icon: thumbnails"
              ></span>{" "}
              Item
            </a>
          </li>
          <li class="gls-nav-divider"></li>
          <li>
            <a href>
              <span
                class="gls-margin-small-right"
                gls-icon="icon: trash"
              ></span>{" "}
              Item
            </a>
          </li>
        </ul>

        <h3>Title</h3>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  );
}

export default OffCanvas;