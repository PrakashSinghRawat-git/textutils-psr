/*  react function based components - rfc (es7 plugin shortcuts) */

import React from "react";
import PropTypes from "prop-types";
/* import {Link} from "react-router-dom"; */

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            {/* <Link className="navbar-brand" to="/">
                {props.website_name}
            </Link> */}
            <a className="navbar-brand" href="#">
                {props.website_name}
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
            >
                <ul className="navbar-nav mr-auto ">
                    <li className="nav-item active">
                        {/* <Link className="nav-link" to="/">
                            Home <span className="sr-only"></span>
                        </Link> */}
                        {<a className="nav-link" href="#">
                            Home <span className="sr-only"></span>
                        </a>}
                    </li>
                    <li className="nav-item">
                        {/* <Link className="nav-link" to="/about">
                            About
                        </Link> */}
                       {/*  {<a className="nav-link" href="#">
                            About
                        </a>} */}
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href={props.blog_url}>
                            {props.blog}
                        </a>
                    </li>
                </ul>
            </div>
            <div className={`form-check form-switch text-${(props.mode==="dark")?("light"):("dark")}`} >
                <input
                    className="form-check-input border-info"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                    border="2px solid blue"
                    onClick={props.toggleMode}
                    
                />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                    Enable {(props.mode==="dark")?("light"):("dark")} Mode
                </label>
            </div>
        </nav>
    );
}

// to control datatype of props in <Navbar> in app.js
Navbar.propTypes = {
    website_name: PropTypes.string.isRequired, // isRequired makes this prop required to mass in <Navbar> in app.js
    blog: PropTypes.string,
    blog_url: PropTypes.string,
};

// these will be used if you don't pass any properties in <Navbar> in app.js
Navbar.defaultProps = {
    website_name: "Website Name",
    blog: "Blog Name",
    blog_url: "Blog Url",
};
