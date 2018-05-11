var webpack = require('webpack');
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');//不需要安装
const htmlWebpackPlugin=require('html-webpack-plugin');//需要安装
var ExtractTextPlugin = require("extract-text-webpack-plugin"); //需要安装
module.exports={
	//entry:__dirname + '/src/index.js', //入口文件
     entry: path.join(__dirname,'/src/index.js'),
     // entry: {
     //     index : __dirname + '/src/index.js',
     //   },
     
     output:{
          // path:__dirname + '/dist', //输出位置
          path: path.join(__dirname, '/dist'),
          publicPath: './',
          filename: '[name]-[chunkhash:8].js'   //输入文件
          // chunkFilename: '[name]-[hash:8].js' 
          // filename: '[name].[hash].js'
     },
     devServer: {
        contentBase: path.join(__dirname, "/"),//本地服务器所加载的页面所在的目录(终于实现了热加载)
        historyApiFallback: true,//不跳转
        inline: true,//实时刷新
        hot: true
    },
     module:{
     	rules :[
     		// {
     		// 	test:/\.css$/,
     		// 	use: 
       //              [
       //                   'style-loader',
       //                   'css-loader'
       //              ] 
     		// },
               {
               test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use:[
                        {
                            loader: 'css-loader',
                            options:{
                                minimize: true //css压缩
                            }
                        }
                    ]
                })
            },
               {
                    test : /\.(png|jpg|gif|svg)$/,
                    loader: 'url-loader?limit=8192&&name=img/[name].[ext]',
                    // options:{
                    //      publicPath:'/'
                    //  }
                    
               },
     		{
     			test:/\.vue$/,
     			loader: 'vue-loader',
                    options: {
                         loaders: {
                         }
                    }
     		},
               {    
                test: /\.js$/,    
                exclude: /node_modules/,    
               },
     	]
     },
     plugins: [
	    // new ExtractTextPlugin("css/[name]-[chunkhash:8].css"),
         new ExtractTextPlugin("css/index.css"),
         new VueLoaderPlugin(),
         new htmlWebpackPlugin({ 
              title: 'webpack demo',
              filename: 'index.html',
              // template: path.join(__dirname, '/'),
              inject: true
         })
	  ]
}