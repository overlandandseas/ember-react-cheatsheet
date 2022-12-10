---
title: "Component Templates"
date: 2022-12-09T21:57:08-06:00
draft: false
order: 1
---

### Using a component in a file

In ember, all components are in a global namespace, we do not need to import then at all,
this is different from React that requires the Component to be imported like a library or module.
Rendering the component is similar to ember octanes angle bracket syntax.

<div class="flex justify-around">
<div class="w-50 pr3 ember-code">


#### Ember
```html
<!-- application.hbs -->
<MyComponent />
```
</div>

<div class="w-50 pl3 react-code">

#### React
```jsx
// App.jsx

// import component like js module
import MyComponent from './components/MyComponent';


function App() {

// return statement is where template in JSX syntax is located
  return (
    <MyComponent />
  )
}
export default App
```

</div>
</div>

### Block components

Block components are done in a similar way between React and Ember. 
In React there a reserve parameter `children` that contains the contents of the inner html elements.

<div class="flex justify-around">
<div class="w-50 pr3 ember-code">


#### Ember
```html
<!-- outer-component.hbs -->
<InnerComponent>
  <p> Inner Content is rendered here </p>
</InnerComponent>

<!-- inner-component.hbs -->
<div>
 {{outlet}}
</div>
```
</div>

<div class="w-50 pl3 react-code">

#### React
```jsx
// OuterComponent.jsx
import InnerComponent from './components/InnerComponent';

export default function OuterComponent() {
  return (
    <InnerComponent>
      <p>Inner content is rendered here.</p>
    </InnerComponent>
  )
}

// InnerComponent.jsx
export default function InnerComponent({ childen }) {
  return (
    <div>{childen}</div>
  )
}
```

</div>
</div>

### Passing and using named arguments

Passing arguments is done through element attributes in React and Ember.
In react arguments, otherwise known as **props**, 
are passed into the function component via the field name of the first parameter.

<div class="flex justify-around">
<div class="w-50 pr3 ember-code">


#### Ember
```html
<!-- outer-component.hbs -->
<InnerComponent @name={{"John"}} />

<!-- inner-component.hbs -->
{{@name}}
```
</div>

<div class="w-50 pl3 react-code">

#### React
```jsx
// OuterComponent.jsx
import InnerComponent from './components/InnerComponent';

export default function OuterComponent() {
  return (
    <InnerComponent name={"John"} />
  )
}

// InnerComponent.jsx
export default function InnerComponent({ name }) {
  
  return (<>{props.name}<>)
}
```

</div>
</div>