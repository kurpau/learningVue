# Basics

## Connecting data

To connect the data defined in Vue App to the mounted HTML we use the `{{}}` syntax.

### v-bind

When the `{{}}` syntax fails, we bind an HTML attribute to use the value defined in Vue App. I.E. `v-bind:href="definedValue"`

### v-html

When the value we want to insert in html is an html tag itself in string format, we can use directive called `v-html`. I.E. {{ v-html="valueFromApp" }}. This will be interpreted as html and not as string.

### v-on:event

Is used when we want to listen to an event on an element. In vanilla JS it would be the as as `el.addEventListener('click', fn)` but with Vue it looks like this `<button v-on:event="fn">`

### v-once

The directed value will only change once

## Event modifiers

add mofification for event with adding a `.` (dot) after an event name. I.E. `v-on:submit.prevent`
