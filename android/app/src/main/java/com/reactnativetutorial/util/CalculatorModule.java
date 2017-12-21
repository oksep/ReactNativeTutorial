package com.reactnativetutorial.util;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class CalculatorModule extends ReactContextBaseJavaModule {

    private static final String TAG = "Calculator";

    public CalculatorModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return TAG;
    }

    @ReactMethod
    public void sum(int x, int y, Callback callback) {
        int sum = x + y;
        callback.invoke(sum);
    }

    @ReactMethod
    public void multiply(int x, int y, Promise promise) {
        int sum = x * y;
        promise.resolve(sum);
    }
}
