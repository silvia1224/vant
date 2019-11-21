import { join } from 'path';
import merge from 'webpack-merge';
import { siteDevConfig } from './webpack.site.dev';

export const sitePrdConfig = merge(siteDevConfig, {
  mode: 'production',
  output: {
    path: join(__dirname, '../../site/dist'),
    publicPath: 'https://b.yzcdn.cn/vant/',
    filename: '[name].[hash:8].js',
    chunkFilename: 'async_[name].[chunkhash:8].js'
  }
});