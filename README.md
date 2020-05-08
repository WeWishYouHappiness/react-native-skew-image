# react-native-skew-image

The display of static images.

(!)__Disclaimer__: The library is experimental. Don't use it.

NOTE: API > 28, Some methods (resizeMode, borderRadius, etc) don't support.

![main](https://github.com/abscess/react-native-skew-image/blob/master/.gitassets/main.png)

## Getting started

`$ npm install https://github.com/abscess/react-native-skew-image.git --save`

### Mostly automatic installation

`$ react-native link react-native-skew-image`

## Usage
```javascript
import SkewImage from 'react-native-skew-image';

  <SkewImage
    skewX={(Math.PI / 180) * 45}
    skewY={(Math.PI / 180) * 45}
    source={{uri: 'asset:/dog.png'}}
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

Icon made by Freepik from www.flaticon.com
