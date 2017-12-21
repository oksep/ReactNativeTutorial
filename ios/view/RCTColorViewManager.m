//
//  RCTColorViewManager.m
//  ReactNativeTutorial
//
//  Created by Septenary on 2017/12/10.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "RCTColorViewManager.h"
#import "ColorView.h"
#import <UIKit/UIKit.h>

@implementation RCTColorViewManager

// 导出模块
RCT_EXPORT_MODULE();

// 导出属性
RCT_EXPORT_VIEW_PROPERTY(color, NSString)

// 添加视图
- (UIView *)view
{
  ColorView * view;
  view = [[ColorView alloc] initWithFrame:CGRectMake(0,0,10,10)];
  return view;
}

@end
