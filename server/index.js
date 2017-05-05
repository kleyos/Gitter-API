import express from 'express';
import passport from 'passport';
import OAuth2Strategy  from 'passport-oauth2';
import request         from 'request';
import session from 'express-session';

import path from 'path';
import bodyParser from 'body-parser';
import cors from 'cors';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev';

const gitterHost    = process.env.HOST || 'https://gitter.im';
const port          = process.env.PORT || 7070;

// Client OAuth configuration
const clientId      = process.env.GITTER_KEY ? process.env.GITTER_KEY.trim() : undefined;
const clientSecret  = process.env.GITTER_SECRET ? process.env.GITTER_SECRET.trim() : undefined;

// Gitter API client helper
var gitter = {
  fetch(path, token, cb) {
    var options = {
     url: gitterHost + path,
     headers: {
       'Authorization': 'Bearer ' + token
     }
    }

    request(options, (err, res, body) => {
      if (err) return cb(err);

      if (res.statusCode === 200) {
        cb(null, JSON.parse(body));
      } else {
        cb('err' + res.statusCode);
      }
    })
  },

  fetchCurrentUser(token, cb) {
    this.fetch('/api/v1/user/', token, function(err, user) {
      cb(err, user[0]);
    })
  }
};
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
app.use(session({secret: 'keyboard cat'}));
app.use(passport.initialize());
app.use(passport.session());
//app.use(app.router);

// Passport Configuration

passport.use(new OAuth2Strategy({
    authorizationURL:   gitterHost + '/login/oauth/authorize',
    tokenURL:           gitterHost + '/login/oauth/token',
    clientID:           clientId,
    clientSecret:       clientSecret,
    callbackURL:        '/login/callback',
    passReqToCallback:  true
  },
  (req, accessToken, refreshToken, profile, done) => {
    req.session.token = accessToken;
    gitter.fetchCurrentUser( accessToken, (err, user) => 
    	err ? done(err) : done(null, user) );
  } ));

passport.serializeUser( (user, done) => done(null, JSON.stringify(user)) );

passport.deserializeUser( (user, done) => done(null, JSON.parse(user)) );

app.get('/login',
  passport.authenticate('oauth2')
);

app.get('/logout', function(req,res) {
  console.log('i want logout')
  req.session.destroy();
  res.redirect('/');
});

app.get('/login/callback',
  passport.authenticate('oauth2', {
    successRedirect: '/home',
    failureRedirect: '/'
  })
);


app.get('/*', (req, res) => res.sendFile(path.join(__dirname, './index.html')) );

app.listen(7070, () => console.log('Running on localhost:7070'));