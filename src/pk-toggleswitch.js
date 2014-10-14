var pk = pk || {};
(function (pk) {
    // HELPERS FOR jQUERY+ANGULAR
    if (typeof jQuery === 'object') {
        // jquery available
        jQuery.fn.extend({
            pkToggleSwitch: function () {
                pk.toggleswitch({
                    element: this[0],
                    label:{
                        on:this[0].getAttribute('label-on'),
                        off:this[0].getAttribute('label-off')   
                    }
                });
            }
        });
    }
    if (typeof angular === 'object') {
        // angular available
        (
        function () {
            angular.module('pk-toggleswitch', ['ng'])
                .directive('pkToggleswitch', function () {
                return {
                    restrict: 'A',
                    link: function (scope, el) {
                        pk.toggleswitch({
                            element: el[0],
                            label:{
                                on:el[0].getAttribute('label-on'),
                                off:el[0].getAttribute('label-off')   
                            }
                        });
                    }
                };
            });
        })();
    }
    pk.toggleswitch = function (opt) {
        var el=opt.element,
            labelOn=opt.label && opt.label.on ? opt.label.on : 'ON',
            labelOff=opt.label && opt.label.off ? opt.label.off : 'OFF';
        el = pk.wrap(el,"<label class='pk-toggleswitch pk-noselect'></label>");        
        el.appendChild(pk.getEl("<div class='pk-toggleswitch-indicator'></div>"));
        el.appendChild(pk.getEl("<span class='pk-toggleswitch-off'>"+labelOff+"</span>"));
        el.appendChild(pk.getEl("<span class='pk-toggleswitch-on'>"+labelOn+"</span>"));  
    };
    return pk;
})(pk);
