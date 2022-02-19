import React from "react";

export default function LoginRegisterWrapper(props) {
  return (
    <>
      <div class="mfp-bg mfp-ready"></div>
      <div
        class="mfp-wrap mfp-auto-cursor mfp-ready"
        tabindex="-1"
        style={{ overflow: "hidden auto" }}
      >
        <div class="mfp-container mfp-inline-holder">
          <div class="mfp-content">
            <div
              id="login-modal"
              className="reglog-modal-wrapper  clearfix"
              style={{
                backgroundImage: "url(assets/images/login-modal-bg.jpg)",
                
                 
              }}
            >
              <div className="overlay-black clearfix"
              
              >
                  {props.children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
