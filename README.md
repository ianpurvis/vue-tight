# Vue-Tight

As a developer,  
I want to prune whitespace between inline elements,  
so that I can write **tite** layouts.


## Background

We often use whitespace to make HTML more readable. However, when creating layouts with inline elements, that whitespace can become problematic. 

For example, the spans in the following code are separated by collapsed whitespace:

```html
<style type="text/css">
  div { font-size: 3rem }
  span:first-child { background: magenta }
  span:last-child { background: cyan }
</style>

<div>
  <span>Exam</span>
  <span>ple</span>
</div>
```

<div style="font-size: 2.5rem;">
  <span style="background: magenta;">Exam</span>
  <span style="background: cyan;">ple</span>
</div>

In order to eliminate whitespace between inline elements, you must eliminate that whitespace at the source:

```html
<div><span>Exam</span><span>ple</span></div>
```

<div style="font-size: 2.5rem;"><span style="background: magenta;">Exam</span><span style="background: cyan;">ple</span></div>

However, this can quickly create long, unmanageable lines of code. One workaround for eliminating whitespace while preserving readability has been to insert line-breaking comments between inline elements:

```html
<div><!--
  --><span>Exam</span><!--
  --><span>ple</span>
</div>
```

Or, you might style a parent element with `font-size: 0` while styling its children with the intended font size:

```html
<style type="text/css">
  div { font-size: 0 }
  span { font-size: 3rem }
</style>

<div>
  <span>Exam</span>
  <span>ple</span>
</div>
```

But, if these workarounds feel gross to you, you are in the right place.
This is a Vue directive to prune whitespace at render-time.

## Usage

First, install with [`npm`](https://www.npmjs.com):

```bash
$ npm i vue-tight
```

Or [`yarn`](https://yarnpkg.com):

```bash
$ yarn add vue-tight
```

Next, register the directive globally:

```javascript
import Vue from 'vue'
import Tight from 'vue-tight'

Vue.directive('tight', Tight)
```

Or, register it locally for a particular component or mixin:

```javascript
import Tight from 'vue-tight'

export default {
  name: 'MyComponent',
  directives: { Tight }
}
```

Finally, add the `v-tight` directive to your template elements: 

```html
<div v-tight>
  <span>Exam</span>
  <span>ple</span>
</div>
```

And voilà! Whitespace between the children of the tightened element will not be rendered.

## Links

- [CSS2 Whitespace Processing Model](https://www.w3.org/TR/CSS2/text.html#white-space-model)
- [Fighting the Space Between Inline Block Elements](https://css-tricks.com/fighting-the-space-between-inline-block-elements)
- [Vue.js Custom Directives](https://vuejs.org/v2/guide/custom-directive.html)

## License
This package is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).