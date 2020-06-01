# react-native-skew-image

The display of static images.

(!)__Disclaimer__: The library is experimental. Don't use it.

NOTE: API > 28, Some methods don't support.

![main](https://github.com/abscess/react-native-skew-image/blob/master/.gitassets/main.png?raw=true)
![text](https://github.com/abscess/react-native-skew-image/blob/master/.gitassets/text.png?raw=true)

## Getting started

`$ npm install react-native-skew-image --save`

`$ yarn add react-native-skew-image`

### Mostly automatic installation

`$ react-native link react-native-skew-image`

## Usage
```javascript
import SkewImage from 'react-native-skew-image';

  <SkewImage
    skewX={(Math.PI / 180) * 45}
    skewY={(Math.PI / 180) * 45}
    source={require('./assets/dog.png')}
    style={styles.skewImage}
  />
```

## Internal
```java
public class SkewImage extends ReactImageView {

    private float skewX = 0.0f;
    private float skewY = 0.0f;
    private Matrix matrix = new Matrix();

    public SkewImage(ThemedReactContext context, ReactApplicationContext mCallerContext) {
        super(context, Fresco.newDraweeControllerBuilder(), null, mCallerContext);
    }

    public void setSkewX(float grad) {
        skewX = grad;
    }   

     public void setSkewY(float grad) {
        skewY = grad;
    }

    @Override
    public void onDraw(Canvas canvas) {
        matrix.setSkew(skewX, skewY);
        canvas.setMatrix(matrix);
        super.onDraw(canvas);
    }
    
}
```

## With react-native-view-shot

[react-native-view-shot](https://www.npmjs.com/package/react-native-view-shot)

```javascript
import React from 'react';
import {Text, StyleSheet} from 'react-native';
import SkewImage from 'react-native-skew-image';
import ViewShot from 'react-native-view-shot';

export default class App extends React.Component {

  state = {
    image: ''
  };

  render() {
    const options = {
      result: 'base64',
      format: 'png',
      quality: 1,
    };
    return (
      <>
        <ViewShot
          onCapture={this._onCapture}
          captureMode={'mount'}
          options={options}>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </ViewShot>
        <SkewImage
          resizeMode={'contain'}
          key={`skewX-${this.state.image}`}
          style={styles.skewImage}
          skewX={(Math.PI / 180) * 30}
          source={{uri: this.state.image}}
        />
        <SkewImage
          resizeMode={'contain'}
          key={`skewY-${this.state.image}`}
          style={styles.skewImage}
          skewY={(Math.PI / 180) * 30}
          source={{uri: this.state.image}}
        />
        <SkewImage
          resizeMode={'contain'}
          key={`skewX-skewY-${this.state.image}`}
          style={styles.skewImage}
          skewX={(Math.PI / 180) * 30}
          skewY={(Math.PI / 180) * 30}
          source={{uri: this.state.image}}
        />
      </>
    );
  }

  _onCapture = uri => {
    this.setState({image: `data:image/png;base64,${uri}`}, () => {
      console.log('do something with ', this.state.image);
    });
  };
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    lineHeight: 24,
    margin: 0,
    padding: 0,
    width: '100%',
    backgroundColor: '#A00000'
  },
  skewImage: {
    marginVertical: 30,
    width: '85%',
    height: 24 * 3
  },
});

```

![text](https://github.com/abscess/react-native-skew-image/blob/master/.gitassets/text.png?raw=true)

Icon made by Freepik from www.flaticon.com
