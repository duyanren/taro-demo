import Taro from '@tarojs/taro';
import { Md5 } from '../md5';
import taroStorage from '../storage';

/**
 * @description: 利用Proxy链式取值
 * let c = {a: {b: [1, ,2 ,3]}}
 * pointer(c).a();  // {b: [1,2,3]}
 * pointer(c).a.b(); // [1,2,3]
 * pointer(d).a.b.d('default value');  // default value
 */
export function pointer(obj: any, path = []) {
  return new Proxy(() => {}, {
    get(_target, property: any) {
      return pointer(obj, path.concat(property));
    },
    apply(_target, _self, args) {
      let val = obj;
      for (let i = 0; i < path.length; i++) {
        if (val === null || val === undefined) break;
        val = val[path[i]];
      }
      if (val === null || val === undefined) {
        val = args[0];
      }
      return val;
    },
  });
}
/**
 * @description:获取节点的相关信息
 * @param {string} id 节点id
 * @param {object} fields 节点字段
 * @return {Promise} Promise
 */
export function getElementFields(
  id: string,
  fields: object = { dataset: true, size: true, scrollOffset: true, rect: true, id: true },
) {
  return new Promise(resolve => {
    Taro.createSelectorQuery()
      .select(id)
      .fields(fields, (res: object) => {
        if (res) {
          resolve(res);
        } else {
          resolve({});
        }
      })
      .exec();
  });
}
/**
 * openid不存在，随机生成一个游客id，随机生成一个存到localstorage
 */
export function getVisitorIdId() {
  const globalData = Taro.getApp().globalData;
  let systemInfo: any = {};
  if (!globalData.systemInfo) {
    systemInfo = Taro.getSystemInfo();
  } else {
    systemInfo = globalData.systemInfo;
  }
  const { system, version, platform } = systemInfo;
  try {
    let visitorId = taroStorage.get('visitorId');
    if (!visitorId) {
      visitorId = Md5.hashStr((Date.now() + Math.random() + system + version + platform).toString());
      try {
        taroStorage.set('visitorId', visitorId);
      } catch (e) {}
    }
    return visitorId;
  } catch (error) {
    let visitorId: any = Md5.hashStr((Date.now() + Math.random() + system + version + platform).toString());
    try {
      taroStorage.set('visitorId', visitorId);
      return visitorId;
    } catch (e) {}
  }
}
/**
 * @description: 获取设备类型
 * @param {string}
 * @return: {Object}
 */
export const getPhoneType = (systemInfo: any) => {
  const system = systemInfo.system;
  const isAndroid = system && system.toLocaleLowerCase().includes('android');
  const isIOS = system && system.toLocaleLowerCase().includes('ios');
  const isIPX = systemInfo && systemInfo.model.toLocaleLowerCase().includes('iphone x');
  return {
    isAndroid,
    isIOS,
    isIPX,
  };
};
export default {
  getElementFields,
};
