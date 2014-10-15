var pk = pk || {};
(function (pk) {    
    pk.toggleswitch = function (opt) {
        var el=opt.element,
            labelOn=opt.label && opt.label.on ? opt.label.on : 'ON',
            labelOff=opt.label && opt.label.off ? opt.label.off : 'OFF',
            listeners=opt.listeners === undefined ? {} : opt.listeners,
            inputValue=opt.toggled ? 'checked' : '',
            inputName=opt.name || el.getAttribute('name') || 'pk-toggleswitch-'+pk.getRand(1,999),
            inputTabIndex=opt.tabindex || el.getAttribute('tabindex') || 0;         
        
         var tpl = "<label class='pk-toggleswitch pk-noselect' tabindex='"+inputTabIndex+"'>\
            <input type='checkbox' "+inputValue+" name='"+inputName+"'/>\
            <div class='pk-toggleswitch-indicator'></div>\
            <span class='pk-toggleswitch-off'>"+labelOff+"</span>\
            <span class='pk-toggleswitch-on'>"+labelOn+"</span>\
        </label>";      
        
        el= pk.replaceEl(el, tpl);
        var inputEl=el.children[0];   
        pk.bindListeners(listeners, inputEl);
        pk.bindEvent("mousewheel", el, function(e){
            var offset=true;
            if (e.wheelDelta > 0 || e.detail < 0) {
                offset= false;
            }
            obj.toggled(offset);         
        }); 
        var obj={
            0:el,
            toggled:function(val){
                if(val===undefined){return inputEl.hasAttribute('checked') ? true : false;}
                if(val){ 
                    inputEl.setAttribute('checked','true');
                }else{
                    inputEl.removeAttribute('checked'); 
                }
            }
        };
        return obj;
        
    };
    return pk;
})(pk);
