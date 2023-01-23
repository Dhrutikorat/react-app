import React from 'react'
import PropTypes from 'prop-types'
import { Link, NavLink } from 'react-router-dom';

export default function Navbar(props) {
    let buttonStyle = {
        height: '30px',
        width: '30px',
    }

    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to="/" >Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to="/about" >About</NavLink>
                        </li>
                    </ul>
                    <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={() => props.toggleMode(null)} />
                        <label className="form-check-label">Enable {props.mode === 'light' ? 'dark' : 'light'} Mode</label>
                    </div>
                    {props.mode === 'dark' && <div className='d-flex'>
                        <div className="bg-primary mx-2 rounded" onClick={() => props.toggleMode("primary")} style={buttonStyle}></div>
                        <div className="bg-danger mx-2 rounded" onClick={() => props.toggleMode("danger")} style={buttonStyle}></div>
                        <div className="bg-success mx-2 rounded" onClick={() => props.toggleMode("success")} style={buttonStyle}></div>
                        <div className="bg-warning mx-2 rounded" onClick={() => props.toggleMode("warning")} style={buttonStyle}></div>
                    </div>}
                </div>
            </div>
        </nav>
    );
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'Set title here'
}