/**
 * TaroStorage基类
 * @class SwanStorage
 */
import Taro from '@tarojs/taro';

class TaroStorage {
  set(key: string, value: string) {
    try {
      Taro.setStorageSync(key, value);
    } catch (e) {}
  }
  // 获取key值
  get(key: string) {
    if (!key) {
      return this._getAll();
    }
    return this._getSingle(key);
  }
  // 移除key值
  remove(key: string) {
    if (!key) {
      return this._removeAll();
    }
    return this._removeSingle(key);
  }
  // 获取所有key
  _getAll() {
    try {
      return Taro.getStorageInfoSync();
    } catch (e) {
      return {};
    }
  }
  // 获取单个key值
  _getSingle(key: string) {
    try {
      return Taro.getStorageSync(key);
    } catch (e) {}
  }
  // 移除某个key值
  _removeSingle(key: string) {
    try {
      return Taro.removeStorageSync(key);
    } catch (e) {}
  }
  // 清空本地所有缓存
  _removeAll() {
    try {
      return Taro.clearStorageSync();
    } catch (e) {}
  }
}
const taroStorage = new TaroStorage();
export default taroStorage;
