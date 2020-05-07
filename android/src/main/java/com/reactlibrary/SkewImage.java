package com.reactlibrary;

import android.graphics.Canvas;
import android.graphics.Matrix;
import com.facebook.drawee.backends.pipeline.Fresco;
import com.facebook.react.views.image.ReactImageView;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.bridge.ReactApplicationContext;


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
