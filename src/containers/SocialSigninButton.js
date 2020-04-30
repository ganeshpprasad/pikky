import React from 'react';

import Chatbutton from '../components/chatbutton';

const SocialSigninButton = () => {
    return (
        <Chatbutton
            umsg={umsg}
            color={color}
            extraStyle={extraStyle}
            userButtonCallback={userButtonCallback}
        />
    );
};

export default SocialSigninButton;
