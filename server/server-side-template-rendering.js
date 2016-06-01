var Swig = Meteor.npmRequire('swig');
Swig.setDefaults({ loader: Swig.loaders.fs(process.env.PWD + '/server/templates' )});

Router.route('/', function () {
  var req = this.request;
  var res = this.response;

  var tpl = Swig.compileFile('home.html');
  res.end(tpl({ locals: { templateVar: 'World!' }}));
}, {where: 'server'});
