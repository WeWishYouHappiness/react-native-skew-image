import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {Platform} from 'react-native';
import {SkewImageIOS} from './skewImage.ios';
import {SkewImageAndroid} from './skewImage.android';

const Conatiner = Platform.OS === 'ios' ? SkewImageIOS : SkewImageAndroid;

class SkewImage extends Component {
  render() {
    const {skewX = 0.0, skewY = 0.0, ...otherProps} = this.props;
    return <Conatiner skewX={skewX} skewY={skewY} {...otherProps} />;
  }
}

SkewImage.propTypes = {
  skewX: PropTypes.number,
  skewY: PropTypes.number,
};

export {SkewImage};
export default SkewImage;
