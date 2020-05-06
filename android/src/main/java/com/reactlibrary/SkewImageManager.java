package com.reactlibrary;

import android.graphics.Canvas;

import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.bridge.ReactApplicationContext;

import javax.annotation.Nullable;

public class SkewImageManager extends SimpleViewManager<SkewImage> {

    public static SkewImage Canvas = null;

    @Override
    public String getName() {
        return "RNSkewImage";
    }

    private ReactApplicationContext mCallerContext;

    public SkewImageManager(ReactApplicationContext reactContext) {
        mCallerContext = reactContext;
    }

    @ReactProp(name = "source")
    public void setSrc(SkewImage canvas, @Nullable ReadableArray sources) {
        canvas.setSource(sources);
    }

    @ReactProp(name = "skewX")
    public void skewX(SkewImage canvas, float grad) {
        canvas.setSkewX(grad);
    }

    @ReactProp(name = "skewY")
    public void skewY(SkewImage canvas, float grad) {
        canvas.setSkewY(grad);
    }


    @Override
    protected SkewImage createViewInstance(ThemedReactContext context) {
        SkewImageManager.Canvas = new SkewImage(context, mCallerContext);
        return SkewImageManager.Canvas;
    }

}
