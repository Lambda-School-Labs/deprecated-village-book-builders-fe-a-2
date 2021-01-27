import React from 'react';

function ResourceDashboard() {
  return (
    <div className="resource-dash-container">
      <nav className="top-nav">
        <ul>
          <li>Login</li>
          <li>Profile</li>
          <li>home</li>
        </ul>
      </nav>
      <div classname="resorce-links-container">
        <div>
          <div className="resource">
            <a href="https://lh3.googleusercontent.com/0cDOOJjp8pUGDDFLqHFITEi35uMGZ5wHpZ9KTKridxk71kpR9MfeydpQqG5n8Mvetvkg5iVuZGeL2xMvxgBY_UL-T9p0x_Eo4EAh">
              <img
                className="logoimg"
                src="public/images/glogo.png"
                alt="google logo"
              />
            </a>
          </div>

          <div className="resource">
            <a href="https://icon-icons.com/icons2/2389/PNG/96/notion_logo_icon_145025.png">
              <img src="https://www.notion.com" alt="notion-logo" />
            </a>
          </div>

          <div className="resource">
            <a href="https://icon-icons.com/icons2/2389/PNG/96/notion_logo_icon_145025.png">
              <img src="https://www.notion.com" alt="notion-logo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResourceDashboard;