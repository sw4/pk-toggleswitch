
pk-toggleswitch
========

[![Build Status](https://travis-ci.org/sw4/pk-toggleswitch.svg?branch=master)](https://travis-ci.org/sw4/pk-toggleswitch)

Toggleswitch input field in vanilla JS with jQuery and Angular wrappers

**Licensed under [cc by-sa 3.0](http://creativecommons.org/licenses/by-sa/3.0/) with attribution required**

#####[Demo](http://sw4.github.io/pk-toggleswitch/)

###Features

- HTML form compliant (input value can be submitted like with any other input element
- Mousewheel support

###Requires

- `pk-core.js`
- `pk-core.css`


###Usage

`pk.toggleswitch(opt);`

Returns a new slider object.

`opt` is an object consisting of:

```
element: \\ DOM element to replace with a slider - the elements attributes are carried over
axis: \\ can be `x` or `y`, determines vertical or horizontal slider
name: \\ the name to use for the slider input form element (can also be set as attribute on original element)
toggled: \\ boolean, whether the toggle is on or off (can also be set as attribute on original element)
disabled: \\ boolean, whether the toggle is disabled (can also be set as attribute on original element)
tabindex: \\ tabindex value (can also be set as attribute on original element) - defaults to 0
listeners: \\ object consisting of regular event functions for input elements
```

###Methods

`toggleswitch.toggled(value)`

Where `toggleswitch` is a toggleswitch object and value is either blank/null to get the current state, or a boolean value to set it


`toggleswitch.disabled(value)`

Where `toggleswitch` is a toggleswitch object and value is either blank/null to get the current state, or a boolean value to set it
