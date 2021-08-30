import React from "react";

function SearchModal(props) {
  return (
    <div>
      <div id="search-modal" class="gls-modal-full" gls-modal>
        <div class="gls-modal-dialog" gls-height-viewport>
          <div class="gls-section gls-section-large">
            <div class="gls-container">
              <button
                class="gls-modal-close-full gls-close-large"
                type="button"
                gls-close
              ></button>
              <form class="gls-search gls-search-default gls-search-large gls-width-expand">
                <button
                  class="gls-search-icon-flip gls-text-primary"
                  gls-search-icon
                ></button>
                <input
                  class="gls-search-input"
                  type="search"
                  placeholder="What can we help you find?"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchModal;