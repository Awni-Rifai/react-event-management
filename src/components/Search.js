import React from "react";

export default function Search() {
  return (
    <li>
      <button type="button" className="toggle-overlay search-btn">
        <i className="fas fa-search"></i>
      </button>
      {/* <!-- search-body - start --> */}
      <div className="search-body">
        <div className="search-form">
          <form action="#">
            <input
              className="search-input"
              type="search"
              placeholder="Search Here"
            />
            <div className="outer-close toggle-overlay">
              <button type="button" className="search-close">
                <i className="fas fa-times"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* <!-- search-body - end --> */}
    </li>
  );
}
