---
title: "Looping Through Content"
date: 2022-12-11T10:23:14-06:00
draft: false
order: 3
---

### Rendering lists
Since React does not include any helpers, we cannot use the `{{#each}}` helper and need to create a list of items we
want using javascript, for this example we are using the `.map()` method but any function that will return our elemets will work.

<div class="flex-ns justify-around pb4">

<div class="w-50-ns pr3-ns ember-code">

#### Ember
```html
<div>
  {{#each @messages as |msg|}}
    <Message @message={{msg}} />
  {{/each}}
</div>
```

</div>
<div class="w-50-ns pl3-ns react-code">

#### React
```jsx
import Message from "./components/Message";

export default function MyComponent({ messages }) {
  return (
    <div>
      {messages.map(msg => (
        <Message message={msg} />
      ))}
    </div>
  );
}
```
</div>
</div>

### Filtering lists
The ability to use javacript to render content makes it easy when doing more complex renders like `filter`


<div class="flex-ns justify-around pb4">

<div class="w-50-ns pr3-ns ember-code">

#### Ember
```html
<div>
  {{#each @messages as |msg|}}
    {{#if msg.unread}}
      <Message @message={{msg}} />
    {{/if}}
  {{/each}}
</div>
```

</div>
<div class="w-50-ns pl3-ns react-code">

#### React
```jsx
import Message from "./components/Message";

export default function MyComponent({ messages }) {
  return (
    <div>
      {messages
        .filter((x) => x.unread)
        .map((msg) => (
          <Message message={msg} />
        ))}
    </div>
  );
}
```
</div>
</div>
