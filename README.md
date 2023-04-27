[![continuous](https://github.com/ianpurvis/vue-tight/actions/workflows/continuous.yml/badge.svg)](https://github.com/ianpurvis/vue-tight/actions/workflows/continuous.yml)
[![codecov](https://codecov.io/gh/ianpurvis/vue-tight/branch/trunk/graph/badge.svg)](https://codecov.io/gh/ianpurvis/vue-tight)

# Vue-Tight

As a developer,  
I want to prune whitespace between inline elements,  
so that I can write **tight** layouts.


## Background

We often use whitespace to make HTML more readable. However, when creating layouts with inline elements, that whitespace can become problematic. 

For example, the spans in the following code are separated by collapsed whitespace:

```html
<h3>
  <span>Exam</span>
  <span>ple</span>
</h3>
```
<blockquote>
  <h3>
    <span>Exam</span>
    <span>ple</span>
  </h3>
</blockquote>


In order to eliminate whitespace between inline elements, you must eliminate that whitespace at the source:

```html
<h3>
  <span>Exam</span><span>ple</span>
</h3>
```

<blockquote>
  <h3>
    <span>Exam</span><span>ple</span>
  </h3>
</blockquote>

However, this can create long, unmanageable lines of code. One workaround for eliminating whitespace while preserving readability has been to insert line-breaking comments between inline elements:

```html
<h3><!--
  --><span>Exam</span><!--
  --><span>ple</span>
</h3>
```

Or, you might style a parent element with `font-size: 0` while styling its children with the intended font size:

```html
<style type="text/css">
  .tight { font-size: 0 }
  .tight > * { font-size: 1.25rem }
</style>

<h3 class="tight">
  <span>Exam</span>
  <span>ple</span>
</h3>
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

[![https://purvisresearch.com](logo.svg)](https://purvisresearch.com)
