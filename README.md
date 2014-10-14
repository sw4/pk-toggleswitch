
pk-toggleswitch
========

[![Build Status](https://travis-ci.org/sw4/pk-toggleswitch.svg?branch=master)](https://travis-ci.org/sw4/pk-toggleswitch)

Toggleswitch input field in vanilla JS with jQuery and Angular wrappers

**Licensed under [cc by-sa 3.0](http://creativecommons.org/licenses/by-sa/3.0/) with attribution required**

#####[Demo](http://sw4.github.io/pk-toggleswitch/)


###Requires

`pk-base.js` and `pk-base.css`


###Usage


#####Plain Javascript

`pk.toggleswitch({element:document.getElementById('yourEl'), label:{on:'Switched ON', off:'Switched OFF'}});`*

*<sup>You can use any means to retrieve a DOM node to pass to `pk.toggleswitch()`</sup>

#####jQuery

Initiate with `$('yourEl').pkToggleswitch();`, having the attributes `label-on` (optional) or `label-off` (optional) on the element.

#####Angular

Simply include `pk-toggleswitch` as an application dependancy, add the attributes `pk-toggleswitch` (required), `label-on` (optional) or `label-off` (optional) on the relevant element and the `pkToggleswitch` directive will automatically apply.
