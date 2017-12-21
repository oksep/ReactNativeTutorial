package com.reactnativetutorial.view;

import android.support.annotation.Nullable;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

public class RCTColorViewManager extends SimpleViewManager<RCTColorView> {

    private static final String TAG = "RCTColorView";

    @Override
    public String getName() {
        return TAG;
    }

    @ReactProp(name = "color")
    public void setColor(RCTColorView view, @Nullable String color) {
        view.setColor(color);
    }

    @Override
    protected RCTColorView createViewInstance(ThemedReactContext reactContext) {
        return new RCTColorView(reactContext);
    }
}
