# react-state-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are _hooks_ in React?
  Hooks are functions that allow functional components to use state and other React features, replacing the need for class components to manage state and lifecycle methods. They make code more concise and promote a functional programming style.

- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))

1. Only Call Hooks at the Top Level

2. Only Call Hooks from React Functions

3. Use Hooks in the Same Order

4. Do Not Call Hooks Conditionally

5. Only Call Hooks from React Components

- What is the purpose of state in React?
  To manage and store data that can change over time. It allows React components to be dynamic and interactive.

- Why can't we just maintain state in a local variable?
  Maintaining state in a local variable won't trigger re-renders or update the user interface in React. React's state management system allows components to re-render efficiently and reflect changes in the UI when state is updated, ensuring a responsive and interactive user experience.

- What two actions happen when you call a `state setter` function?

1. The new state value is updated
2. The component re-renders

- When does the local `state variable` get updated with the new value?
  The local state variable gets updated with the new value during the next component re-render.

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
