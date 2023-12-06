import React from 'react';

export default function Sidebar(props) {
  return (
    <div className='sidebar' class="offcanvas offcanvas-end" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
      <div class="offcanvas-header">
        {/* You can include any sidebar header content here */}
        <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">
        </h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <label htmlFor='file-upload'><img src={props.profilePic} alt=""className='image-link'  /></label>
      <input type="file" accept='.jpeg,.png,.jpg' id='file-upload' style={{ display: 'none' }} onChange={props.handlefileupload} />
      <div class="offcanvas-body">
        <div className="mb-3">
          <label htmlFor="username" className="form-label user">
            Username
          </label>
          <div className="input-group">
            <span className="input-group-text">
              <i className="fas fa-user"></i>
            </span>
            <input
              type="email"
              className="form-control"
              id="email"
              value={props.username}
              onChange={(e) => props.setName(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label user">
            Email
          </label>
          <div className="input-group">
            <span className="input-group-text">
              <i className="fas fa-envelope"></i>
            </span>
            <input
              type="email"
              className="form-control"
              id="email"
              value={props.email}
              onChange={(e) => props.setEmail(e.target.value)}
            />
          </div>
        </div>

        <button type="button" className="btn-primary update-btn" onClick={props.handleSubmit}>
          Update
        </button>
      </div>
    </div>
  );
}
