//
//  ColorView.m
//  ReactNativeTutorial
//
//  Created by Septenary on 2017/12/10.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "ColorView.h"

@implementation ColorView
{
  UIColor *squareColor;
}

// 设置颜色
- (void)setColor:(NSString *)color
{
  squareColor = UIColorWithHexString(color);
  [self setNeedsDisplay];
}

// 绘制矩形
- (void)drawRect:(CGRect)rect
{
  [squareColor setFill];
  CGContextFillRect(UIGraphicsGetCurrentContext(), rect);
}

// NSString to UIColor
static UIColor * UIColorWithHexString(NSString *hex)
{
  unsigned int rgb = 0;
  [[NSScanner scannerWithString:
    [[hex uppercaseString] stringByTrimmingCharactersInSet:
     [[NSCharacterSet characterSetWithCharactersInString:@"0123456789ABCDEF"] invertedSet]]]
   scanHexInt:&rgb];
  return [UIColor colorWithRed:((CGFloat)((rgb & 0xFF0000) >> 16)) / 255.0
                         green:((CGFloat)((rgb & 0xFF00) >> 8)) / 255.0
                          blue:((CGFloat)(rgb & 0xFF)) / 255.0
                         alpha:1.0];
}

@end
