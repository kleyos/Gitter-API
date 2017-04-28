import express from 'express';
import passport from 'passport';
import OAuth2Strategy  from 'passport-oauth2';
import request         from 'request';

import path from 'path';
import bodyParser from 'body-parser';
import cors from 'cors';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev';

const app = express();

const compiler = webpack(webpackConfig);

app.use(webpackMiddleware(compiler, {
  hot: true,
  publicPath: webpackConfig.output.publicPath,
  noInfo: true
}));
app.use(webpackHotMiddleware(compiler));
app.use(bodyParser.urlencoded( {extended: false} ) );
app.use(bodyParser.json());
app.use(cors() );
//app.use(express.session({ secret: 'keyboard cat' }));
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(app.router);


app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(7070, () => console.log('Running on localhost:7070'));