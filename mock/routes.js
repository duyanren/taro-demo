// var db = require('./db.js');

// 添加自定义路由 路由必须以 / 开头
let routes = {
  '/h5/act/appGroup/': '/h5-act-appGroup',
};

// 修改 db.js 中 "root-sub" 形式的路由为 "/root/sub"
// Object.keys(db).map(key => {
//   let newKey = '/' + key.replace('-', '/');
//   key = '/' + key;
//   routes[newKey] = key; // '/a-b' => '/a/b'
//   routes[newKey + '/:id'] = key + '/:id'; // '/a-b/:id' => '/a/b/:id'
// });

module.exports = routes;
