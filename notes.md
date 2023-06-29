# Basics

## Connecting data

To connect the data defined in Vue App to the mounted HTML we use the `{{}}` syntax.

### v-bind

When the `{{}}` syntax fails, we bind an HTML attribute to use the value defined in Vue App. I.E. `v-bind:href="definedValue"`

### v-html

When the value we want to insert in html is an html tag itself in string format, we can use directive called `v-html`. I.E. {{ v-html="valueFromApp" }}. This will be interpreted as html and not as string.
