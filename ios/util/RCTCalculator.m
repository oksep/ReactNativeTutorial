//
//  RCTCalculator.m
//  ReactNativeTutorial
//
//  Created by Septenary on 2017/12/10.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "RCTCalculator.h"

@implementation RCTCalculator

// 将 RCTCalculator.h 导出为 module
RCT_EXPORT_MODULE();

// 导出 sum 方法, callback 形式
RCT_EXPORT_METHOD(sum:
                  (nonnull NSNumber *)x
                  y:(nonnull NSNumber *)y
                  callback:(RCTResponseSenderBlock)callback) {
  NSNumber *value = [NSNumber numberWithInteger:([x floatValue] + [y floatValue])];
  NSArray *array = [NSArray arrayWithObject:value];
  callback(array);
}

// 导出 multiply 方法, promise 形式
RCT_EXPORT_METHOD(multiply:
                  (nonnull NSNumber *)x
                  y:(nonnull NSNumber *)y
                  resolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject) {
  NSNumber *value = [NSNumber numberWithInteger:([x floatValue] * [y floatValue])];
  NSArray *array = [NSArray arrayWithObject:value];
  resolve(array);
}

@end
