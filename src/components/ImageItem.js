import React from 'react';
import {Image} from 'react-native';

const ImageItem = (source, style) => (
    <Image source={source} style={style} resizeMode="contain" />
);

export default ImageItem;
