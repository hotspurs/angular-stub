export default function(){

  return {
      addClass: function(element, className) {

        console.log('HERE', element);

        var overlay = element.find('.ngdialog-overlay'),
            close = element.find('.ngdialog-close'),
            content = element.find('.ngdialog-content'),
            tl = new TimelineMax({});

        tl.to(overlay, 0.3, { opacity: 1 }, 0);
        tl.to(close, 0.3, { opacity: 1}, 0);
        tl.to(content, 0.3, { startAt: { scale: 0.5, opacity: 0,  transformOrigin: "50% 50%" }, scale:1, opacity:1 }, 0);


      },
      removeClass: function(element, className, done) {
        var options = element.data('$ngDialogOptions'),
            overlay = element.find('.ngdialog-overlay'),
            close = element.find('.ngdialog-close'),
            content = element.find('.ngdialog-content'),
            tl = new TimelineMax({
              onComplete: function(){
                options.animationEndDefer.resolve();
              }
            });

        tl.to(overlay, 0.3, { opacity: 0 }, 0);
        tl.to(close, 0.3, { opacity: 0}, 0);
        tl.to(content, 0.3, { startAt: { scale: 1, opacity: 1,  transformOrigin: "50% 50%" }, scale:0.5, opacity:0 }, 0);            
        
      }
  };

}
