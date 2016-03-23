module.exports = (ngDialog) => {
  require.ensure([], () => {

    require('./style.styl');
    
    ngDialog.open({
      className: 'infoPopup',
      template: require('./tpl.jade'),
      controller: require('./controller')
    });

  });    
};
