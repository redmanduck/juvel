var express = require('express'),
  router = express.Router(),
  Article = require('../models/article');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  var articles = [new Article(), new Article()];
    res.render('index', {
      title: 'Home',
      articles: articles
    });
});

router.get('/orders', function (req, res, next) {
  var articles = [new Article(), new Article()];
    res.render('orders', {
      title: 'Orders',
      articles: articles
    });
});
