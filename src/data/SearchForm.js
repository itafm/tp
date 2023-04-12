import React, { useState } from "react";
export default function SearchForm(props) {
  
  // function submit(e) {
  //   e.preventDefault();
  //   alert(search);
  // }
  return (
    <>
      <div className="row">
        <div className="col-md-6 offset-md-3 mt-2">
          <form >
            <div className="form-group">
              <input
                type="search"
                value={props.search}
                className="form-control shadow"
                onChange={props.onChange}
              />
            </div>
            <button className="btn btn-secondary">Search</button>
          </form>
        </div>
      </div>
    </>
  );
}
