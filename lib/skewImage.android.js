import React, {Component} from 'react';
import {Image, View, requireNativeComponent} from 'react-native';

const SkewImageConatiner = requireNativeComponent('RNSkewImage');

class SkewImageAndroid extends Component {

  _getImage = (source) => {
    const src = Array.isArray(source) ? source : [source];
    return src.map(img => Number.isInteger(img)? Image.resolveAssetSource(img): img);
  };

  render() {
    const {skewX = 0.0, skewY = 0.0, source, ...otherProps} = this.props;
    const src = this._getImage(source);
    return (
      <View key={`${skewX}-${skewY}`}>
        <SkewImageConatiner
          skewX={skewX}
          skewY={skewY}
          source={src}
          {...otherProps}
        />
      </View>
    );
  };

}

export {SkewImageAndroid};
export default SkewImageAndroid;
