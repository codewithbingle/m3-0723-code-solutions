# react-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is an "event" in React?
  It is a user action or system occurrence (e.g., button click, form submission) that can trigger a response or behavior in a React component.

- What is an "event handler"? Which component declares the handler?
  An "event handler" is a function responsible for responding to an event in React. It is declared within the component that needs to handle the event.

- How do you pass an event handler to a React component?
  To pass an event handler to a React component, you simply include it as a prop when rendering the component.

- What is the naming convention for event handlers?
  The naming convention for event handlers in React is to use camelCase, starting with "handle" followed by the event name, and sometimes including the component or element name. For example, a click event handler could be named handleClick, a change event handler could be named handleChange, and so on.

- What is an "event handler prop"? Which component declares the prop?
  An "event handler prop" is a prop passed to a React component that contains a function to handle specific events. The parent component declares this prop and passes it down to the child component, enabling the child component to respond to events and communicate with its parent when those events occur.

- What are some custom event handler props a component may wish to define?
  onSubmit: A function to handle form submission events.
  onClick: A function to handle click events on a button or element.

- What is the naming convention for custom event handler props?
  The naming convention for custom event handler props in React is similar to regular event handlers. It is typically written in camelCase and starts with "on" followed by the event name or action.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
