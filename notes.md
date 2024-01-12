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

### v-model

create a two-way binding on a form input element or component

It is just a shortcut for `v-bind:value` and `v-on:input`

### v-if

just like an `if` statement in js. The html will only be rendered if the expression in `v-if` is equal to `true`

this does not 'hide' the element, it **detaches** or **attaches** the element from the DOM

### v-else

same idea, to work correctly it needs to be used immediatly after `v-if`.

### v-show

works similar to `v-if`, the difference that `v-show` sets `display: none` to the element. Only use this if the element is often changing it's visibility, otherwise use `v-if`

### v-for

loop through an array

## Event modifiers

add mofification for event with adding a `.` (dot) after an event name. I.E. `v-on:submit.prevent`

## Computed properties

The problems occurs when we use methods inside html. For example, when a data property is update by a click, vue only updates html where that property is used, I.E. `{{ counter }}`, also if there are any methods invoked in html `{{ mehtod() }} it also has to update it on the same click, because it could be using the same data property inside. This is not efficient

Computed properties are like methods, but vue will be aware of the dependancies used and won't update the dom unnecessarily

The naming convention for the computed properties is not name them as data properties, because of the different invoking methods used by vue. We also use them like properties, not like functions.

## Watchers

While computed properties should be used to calculate the value of a property based on some external condition, watchers instead used to notify you when the property value has changed andl et you perform some actions based on those changes

## Methods vs Computed vs Watch

### Methods

- Use with event binding OR data binding
- Data binding: Method is executed for every "re-render" cycle of the component
- User for event or data the really needs to re-evaluated all the time

### Computed

- Use with data binding
- Computed properties are only re-evaluated if one of their "used values" changed
- Use for data that depends on other data

### Watch

- Not used directly in template
- Allows you to run any code in reaction to some changed data (e.g. send Https request etc.)
- User for any non-data update you want to make

## Vue's "magic"

Vue's reactivity is achieved using JS built-in proxies. It "detects" the changes made to a data property even after it was interpreted and calculated

Vue updates the DOM using **Virtual DOM** instead of **Browser DOM**. Virtual DOM is stored in memory and uses JS. When Vue detects changes (Proxies), it compares the new virtual dom with the old one and updates the browser dom accordingly only in the places where it is needed

### Vue Instance Lifecycle

createApp({})
beforeCreate()
created()
_Compile template_
beforeMount()
mounted()

Mounted Vue Instance --> Data Changed
beforeUpdate()
updated()

Mounted Vue Instance --> Instance Unmounted
beforeUnmount()
unmounted()

## Vue components

Vue components are created on vue app object. `Vue.createApp().component(identifier, {})`.

A component is basically a **custom html element**.

The first argument is _identifier_, in other words, an html tag to be used. _They should always be created with a '-' in the name_. To avoid clashing with official HTML elements.

Second argument is an object, just like in the create Vue app. Essentialy components is just another Vue App that belongs to another app. They're like _mini apps_...

**From Docs**:

> A Vue component needs to be "registered" so that Vue knows where to locate its implementation when it is encountered in a template. There are two ways to register components: global and local

Components build **parent-child** relations and use **unidirectional** data flows for communications. If you want to pass data to a _sibling_/_neighbour_ component you should create a parent component of them and store data there. **There's is not other way!**

### Dynamic components

There is a built in vue tag called `<component is=""></component>` which requires an `is=""` prop which takes component's name and can be bound to a variable - becoming _dynamic_. That mean we don't have to write lots of `v-if` statements for rendering components - less code.

### Keeping dynamic components alive

Vue destroys dynamic components on switch, therefore there is another wrapper built-in component called `<keep-alive></keep-alive>`. Basically component caching

### Teleporting components

Components can be placed inside another component and teleported elsewhere in html using built-in vue `<teleport to=""></teleport>` wrapper tag which requires `to="_css-selector_"` to be teleported to

## Slots

Slots can be used to pass markup inside custom component's tags.
They can also be named

### Scoped Slots

You can pass variables via slot's props which will be received by slot's name and `='objectName'` then accessed `objectName.var1; objectName.var2`

# Course Finished, yo
