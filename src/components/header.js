import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import { Nav, Navbar } from 'rsuite';
import { navbarStyle, navheaderStyle, navlinkStyle } from '../styles';

const Header = ({ siteTitle, breakpoint }) => {
    const [scrollTop, setScrollTop] = useState(true);
    const [activeKey, setActiveKey] = useState('');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', handleScroll)

            if (window.location.hash)
                setActiveKey(window.location.hash);
            else
                setActiveKey(window.location.pathname);
        }
    }, []); // Will mount

    useEffect(() => {
        return () => {
            if (typeof window !== 'undefined')
                window.removeEventListener('scroll', handleScroll)
        }
    }, []); // Will unmount

    useEffect(() => {
        if (!scrollTop) {
            navbarStyle.background = `#000000`;
            navbarStyle.color = `#ffffff`;
            navlinkStyle.color = `#ffffff`;
            navlinkStyle.textShadow = 'none';
        }
    }, [scrollTop]);


    function handleScroll() {
        let _breakpoint = window.innerHeight / 2
        if (breakpoint) {
            _breakpoint = breakpoint
        }
        if (window.scrollY > _breakpoint)
            setScrollTop(false);
        else
            setScrollTop(true);
    }

    return (
        <Navbar style={navbarStyle} >
            <Navbar.Header style={navheaderStyle}>
                <h1>
                    <Link to="/" style={navlinkStyle}>
                        {siteTitle}
                    </Link>
                </h1>
            </Navbar.Header>
            <Navbar.Body>
                <Nav>
                    <Nav.Item
                        className={activeKey.includes('projects') ? 'active' : ''}
                        componentClass={Link}
                        to="/projects"
                    >
                        Projects
                    </Nav.Item>
                    <Nav.Item
                        className={activeKey.includes('about') ? 'active' : ''}
                        componentClass={Link}
                        to="/about"
                    >
                        About
                    </Nav.Item>
                    <Nav.Item
                        className={activeKey.includes('contact') ? 'active' : ''}
                        componentClass={Link}
                        to="/contact"
                    >
                        Contact
                    </Nav.Item>
                </Nav>
            </Navbar.Body>
        </Navbar>
    )
}

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
