/*
 * @Author: duyanren
 * @Date: 2019-05-23 10:46:52
 * @LastEditors: dyr
 * @LastEditTime: 2019-07-07 16:55:14
 * @Description: 接口请求封装
 */

import Taro from '@tarojs/taro';

interface Options {
  header?: any;
  method?: string;
  dataType?: string;
  responseType?: string;
  success?: Function;
  fail?: Function;
  complete?: Function;
  isBuildUrl?: boolean; // 是否需要拼接参数到请求的url上
}
// 设置接口请求参数字段
interface RequestParam {
  url: string;
  method?: string;
  data?: string | [any] | object;
  options?: Options;
  prefix?: string;
}
/**
 *
 * @param url : 接口路径
 * @param method : 请求方法
 * @param data : 传递的数据
 * @param options : 可以覆盖header
 * @param prefix : 接口额外的前缀
 */
export default async function({ url, method, data, options, prefix = '' }: RequestParam) {
  // 默认值
  const defaultOtions: Options = {
    method: 'GET',
    header: {
      'content-type': 'application/json',
    },
    isBuildUrl: true,
  };
  const baseUrl: string = options && options.isBuildUrl ? url : url;
  // 新的请求url
  const newUrl = prefix ? `${baseUrl}${prefix}` : `${baseUrl}`;

  const requestObject: any = {
    url: newUrl,
    ...defaultOtions,
    ...options,
    method,
    data,
  };

  // 检测请求状态
  const checkStatusAndFilter = (response: any): Promise<any> | undefined => {
    if (response.statusCode === 200) {
      return response.data;
    }
    return Promise.reject(response);
  };

  return Taro.request(requestObject)
    .then(checkStatusAndFilter)
    .then(res => res)
    .catch(error => {
      return Promise.reject(error);
    });
}
