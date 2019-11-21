import React, { Component } from 'react';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';
import Logo from '../../images/Logo1.png';


class Navbar extends Component {
    render() {
        return (
            <div>
              <DesktopNavbar />
              <MobileNavbar />  
              
            </div>
        );
    }
}

export default Navbar;
