import React, {Component} from 'react';
import {requireNativeComponent} from 'react-native';

const SkewImageConatiner = requireNativeComponent('RNSkewImage');

class SkewImageAndroid extends Component {
  render() {
    const {source, ...otherProps} = this.props;
    return (
      <SkewImageConatiner
        source={Array.isArray(source) ? source : [source]}
        {...otherProps}
      />
    );
  }
}

export {SkewImageAndroid};
export default SkewImageAndroid;
