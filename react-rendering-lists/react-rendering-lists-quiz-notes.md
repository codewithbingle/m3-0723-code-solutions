# react-rendering-lists-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- When would we want to dynamically create a list of React components?
  You would want to dynamically create a list of React components when you have a variable number of similar elements to render, such as a list of items, posts, or comments, and you want to generate the corresponding React components based on the data dynamically. This allows you to avoid writing repetitive code and makes your application more scalable and maintainable.

- Why is it important for React components to be data-driven?
  It's important for React components to be data-driven because it promotes reusability, scalability, and easier maintenance. By separating data from the component logic, you can dynamically render components based on varying data, leading to more flexible and adaptable user interfaces. This approach reduces redundancy, enhances code maintainability, and enables changes to be made efficiently across different parts of your application.

- Where in the component code would a list of React components typically be built?
  A list of React components is typically built within the render method of a component, using functions like .map() to iterate through the data and generate the components dynamically.

- What `Array` method is commonly used to create a list of React components?
  The commonly used Array method to create a list of React components is .map().

- Why do components in a list need to have unique keys?
  Components in a list need to have unique keys to help React efficiently update and reconcile the virtual DOM. Keys allow React to keep track of individual components within the list, enabling optimized rendering and minimizing unnecessary re-renders.

- What is the best value to use as a "key" prop when rendering lists?
  A unique identifier from your data, like an id, is the best value to use as a "key" prop when rendering lists in React.

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
