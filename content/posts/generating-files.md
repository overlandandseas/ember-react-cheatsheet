---
title: "Generating Files"
date: 2022-12-09T20:47:09-06:00
draft: false
order: 0
---

### Creating a new Component

In ember, we use the ember-cli to use generate new component and other entities.
React by default doesn't have a generator or a cli tool, we need to create the files manually.

<div class="flex justify-around pb4">

<div class="w-50 pr3 ember-code">

#### Ember
```bash
ember generate component my-component

```

</div>
<div class="w-50 pl3 react-code">

#### React
```bash
# component filename convention is CapitalCamelCase
touch src/components/MyComponent.tsx
```
</div>
</div>

### Component Directory Structre

In ember, we have two files to represent a component: the js file and hbs file. 
If not using **pods** then we have two files co-located in the same location.
React has one file per component _(jsx)_.
<div class="flex justify-around">
<div class="w-50 pr3 ember-code">


#### Ember
```txt
app/
  components/
    my-component.hbs
    my-component.js
```
</div>

<div class="w-50 pl3 react-code">

#### React
```bash
src/
  components/
    MyComponent.jsx  # (or .tsx for typescript)
    
```

</div>
</div>