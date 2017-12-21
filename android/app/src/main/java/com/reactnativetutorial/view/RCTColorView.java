package com.reactnativetutorial.view;

import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Color;
import android.view.View;

public class RCTColorView extends View {

    private int mColor = Color.TRANSPARENT;

    public RCTColorView(Context context) {
        super(context);
    }

    public void setColor(String color) {
        this.mColor = Color.parseColor(color);
        this.invalidate();
    }

    @Override
    protected void onDraw(Canvas canvas) {
        super.onDraw(canvas);
        canvas.drawColor(this.mColor);
    }
}
