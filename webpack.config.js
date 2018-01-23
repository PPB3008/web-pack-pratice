const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
    devtool:'eval-source-map',
    entry:{
      main:"./app/main.js",
      main2:"./app/main2.js"    
    },
    output:{
        path:__dirname+"/public",
        filename:"[name].bundle.js"
    },
    devServer: {
        contentBase: "./public",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
      },
      plugins:[
         new CleanWebpackPlugin(['public']),
         new HtmlWebpackPlugin({
         title: 'Production' }),
         new UglifyJSPlugin()
      ],
        module: {
             rules: [
               {
                 test: /\.css$/,
                 use: [
                   'style-loader',
                   'css-loader'
                 ]
               },
               {
                test: /\.(png|svg|jpg|gif)$/,
                       use: [
                      'file-loader'
                    ]
               },
               {
                 test:/\.scss$/,
                 use:[
                  'style-loader',
                  'css-loader',
                  'sass-loader'
                 ]
               }
             ]
           }
}