const path = require('path');

const config = {
  projectName: 'taro-demo',
  date: '2019-7-7',
  designWidth: 750,
  deviceRatio: {
    '640': 2.34 / 2,
    '750': 1,
    '828': 1.81 / 2,
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: {
    babel: {
      sourceMap: true,
      presets: [
        [
          'env',
          {
            modules: false,
          },
        ],
      ],
      plugins: ['transform-decorators-legacy', 'transform-class-properties', 'transform-object-rest-spread'],
    },
  },
  defineConstants: {},
  // 配置别名 避免写多级相对路径
  alias: {
    '@/components': path.resolve(__dirname, '..', 'src/components'),
    '@/common': path.resolve(__dirname, '..', 'src/common'),
    '@/api': path.resolve(__dirname, '..', 'src/api'),
    '@/model': path.resolve(__dirname, '..', 'src/model'),
    '@/actions': path.resolve(__dirname, '..', 'src/actions'),
    '@/constants': path.resolve(__dirname, '..', 'src/constants'),
    '@/reducers': path.resolve(__dirname, '..', 'src/reducers'),
    '@/store': path.resolve(__dirname, '..', 'src/store'),
    '@/css': path.resolve(__dirname, '..', 'src/css'),
    '@/assets': path.resolve(__dirname, '..', 'src/assets'),
    '@/package': path.resolve(__dirname, '..', 'package.json'),
    '@/project': path.resolve(__dirname, '..', 'project.swan.json'),
    '@/typings': path.resolve(__dirname, '..', '/typings'),
    '@/mock': path.resolve(__dirname, '..', '/mock'),
  },
  copy: {
    patterns: [
      // 资源文件（如图片）没有被编译到 dist 目录中导致找不到，令其直接被复制过来：
      {
        from: 'src/assets/',
        to: 'dist/assets/',
      },
    ],
    options: {},
  },
  weapp: {
    module: {
      postcss: {
        autoprefixer: {
          enable: true,
          config: {
            browsers: ['last 3 versions', 'Android >= 4.1', 'ios >= 8'],
          },
        },
        pxtransform: {
          enable: true,
          config: {},
        },
        url: {
          enable: true,
          config: {
            limit: 10240, // 设定转换尺寸上限
          },
        },
        cssModules: {
          enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
          config: {
            namingPattern: 'module', // 转换模式，取值为 global/module
            generateScopedName: '[name]__[local]___[hash:base64:5]',
          },
        },
      },
    },
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    module: {
      postcss: {
        autoprefixer: {
          enable: true,
          config: {
            browsers: ['last 3 versions', 'Android >= 4.1', 'ios >= 8'],
          },
        },
        cssModules: {
          enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
          config: {
            namingPattern: 'module', // 转换模式，取值为 global/module
            generateScopedName: '[name]__[local]___[hash:base64:5]',
          },
        },
      },
    },
  },
};

module.exports = function(merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'));
  }
  return merge({}, config, require('./prod'));
};
