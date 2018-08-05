const createError = require('http-errors')
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');
const indexRouter = require('./routes/index');
const portfolioRouter = require('./routes/portfolio');
const blogPosts = require('./routes/blog');
const contactRouter = require('./routes/contact')
const hbsHelpers = expressHbs.create({//extra helpers to be inserted if needed.
  helpers: require("./helpersHbs/handlebars.js").helpers,
  defaultLayout: 'layout',
  extname: '.hbs'
});

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
// view engine setup
app.engine('.hbs',expressHbs({defaultLayout:'layout', extname:'.hbs'}));
app.set('view engine', '.hbs');
app.engine('.hbs', hbsHelpers.engine);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/portfolio', portfolioRouter);
app.use('/blog', blogPosts);
app.use('/contact', contactRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
