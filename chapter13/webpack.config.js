const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// 引入node中的path模块
const path = require("path");

module.exports = {
  // 打包的模式：development/production
  // development模式下不会压缩代码、便于查看，也不会做一些其它性能上优化
  // 反之production模式会做一些压缩等相应的处理
  mode: "development",

  // 开启sourceMap
  // development模式下可设置为inline-source-map或者source-map
  // production模式下可设置为cheap-module-source-map
  devtool: "source-map",

  // 配置Server
  devServer: {
    contentBase: "./dist",
    port: "8080",
    open: true,
    proxy: {
      "/v2": {
        // 带有"/v2"的接口代理到请求target这个服务器，就相对于请求"http://douban.uieee.com/v2/movie/top250?start=25&count=25"
        target: "http://douban.uieee.com",
        // 可以把请求接口中的某部分重写
        pathRewrite: { "^/v2": "/v2" },
        // 允许https
        secure: false,
        // 允许跨域
        changeOrigin: true
      }
    }
  },

  // 定义入口文件，告诉webpack我要打包啥
  entry: {
    main: "./src/index.js"
  },

  // 定义输出文件，告诉webpack打包好的文件叫啥，给我放到哪里
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },

  // 代码分割codeSpliting
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },

  // 使用loaders的列表
  module: {
    // 定义规则
    rules: [
      // 使用babel-loader处理es6语法
      {
        // 这是一个正则，所有以js结尾的文件都要给我过这里！！
        test: /\.js$/,
        // 除了node_modules下的（真香）
        exclude: /(node_modules|bower_components)/,
        // 使用babel-loader，options是它的一些配置项
        use: {
          loader: "babel-loader",
          // "@babel/preset-env"这个东西是babel提供给自己用的插件
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  // 添加polyfill
                  useBuiltIns: "usage",
                  corejs: { version: 3, proposals: true }
                }
              ]
            ]
          }
        }
      },
      // 使用file-loader处理文件
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"]
      },
      // 使用url-loader处理图片资源
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              // 当图片size小于limit值时会转为DataURL
              limit: 8192
            }
          }
        ]
      },
      // 处理css
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"]
      },
      // 处理sass
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader, // 将JS字符串生成为style节点，并做css代码分割
          "css-loader", // 将CSS转化成CommonJS模块
          "postcss-loader", // 处理css-如结合autoprefixer自动添加浏览器前缀之类的
          "sass-loader" // 将Sass编译成CSS，默认使用Node Sass
        ]
      },
      // 处理less
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "less-loader"
        ]
      }
    ]
  },

  // 使用plugins的列表
  plugins: [
    // 打包前删除掉dist文件避免文件冗余重复
    new CleanWebpackPlugin(),
    // 可以为你生成一个HTML文件
    new HtmlWebpackPlugin({
      title: "webpack从0到1",
      template: "./index.html"
    }),
    // css文件的代码分割
    new MiniCssExtractPlugin()
  ]
};
