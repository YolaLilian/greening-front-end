import React from 'react';
import InstagramLogo from '../../images/instagram.svg';
import TwitterLogo from '../../images/twitter.svg';
import FacebookLogo from '../../images/facebook.svg';

const SocialMediaLinks = () => {
    return (
        <ul className="sm-links">
            <li>
                 <img src={ TwitterLogo } alt="" />
            </li>
            <li>
                <img src={ FacebookLogo } alt="" />
            </li>
            <li>
                <img src={ InstagramLogo } alt="" />
            </li>
        </ul>
    )
}

export default SocialMediaLinks;