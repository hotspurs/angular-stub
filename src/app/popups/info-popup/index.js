module.exports = (ngDialog) => {
  require.ensure([], () => {

    require('./style.styl');
    
    ngDialog.open({
      className: 'infoPopup',
      template: require('./tpl.jade'),
      plain: true,
      controller: require('./controller'),
      ariaAuto: false,
      disableAnimation: true
    });

  });    
};
