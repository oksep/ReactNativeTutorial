import {NativeModules} from 'react-native'

// callback 形式
export function sum(x, y, callback) {
    NativeModules.Calculator.sum(x, y, callback)
}

// promise 形式
export async function multiply(x, y) {
    return await NativeModules.Calculator.multiply(x, y)
}