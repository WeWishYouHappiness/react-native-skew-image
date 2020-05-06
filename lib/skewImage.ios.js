import React, {Component} from 'react';
import {Image, StyleSheet} from 'react-native';

class SkewImageIOS extends Component {
  render() {
    const {skewX, skewY, style, ...otherProps} = this.props;
    const {transform: tmp = [], ...styles} = StyleSheet.flatten(style);
    const transform = [...tmp, {skewX: `${skewX}rad`}, {skewY: `${skewY}rad`}];
    return <Image style={[styles, {transform}]} {...otherProps} />;
  }
}

SkewImageIOS.defaultProps = {
  style: {
    transform: [],
  },
};

export {SkewImageIOS};
export default SkewImageIOS;
