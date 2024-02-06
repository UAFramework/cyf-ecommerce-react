# Level 1
Here you have a react project initiated with `vite` tool. This is your react front-end project.
Fork, clone it and start working on the task below.

Read through the [README.md](./README.md) file carefully before going further.

## Task 
1. Learn how pass some data from parent React component to its Child: [Making an argument for Props](https://syllabus.codeyourfuture.io/react/week-1/lesson#making-an-argument-for-props) and the official React documentation: [Passing props to a component](https://react.dev/learn/passing-props-to-a-component)
2. Refactor `MyReactComponent`, you should have 2 react components instead:
  - `Product` - this one displays just product name that comes from [./src/data/Product.jsx](./src/data/Products.jsx) and only imported in this `Product` component.
  - `ProductAvailability` - this one displays details about product's price and suppliers that come from [./src/data/ProductsAvailability.jsx](./src/data/ProductsAvailability.jsx) and only imported in this `ProductAvailability` component, but requires a productName passed over from the parent `Product` component with props (see reference in the link above about how to deal with props).
3. As result you should have something looking like a table or grid or sort of that:
```
Ball          £14 at Sainsburys
              £14 at Amazon
              £20 at Taobao

Coffee Cup    £3 at Amazon
....
```
4. Make sure you use "key" attribute when rendering a collection of items (i.e.: a JavaScript Array). Refer to the official React documentation: [Rendering Lists](https://react.dev/learn/rendering-lists)

__Note__: avoid using array's index as a key attribute when rendering a collection of objects. Ideally, you should `NEVER USE ARRAY INDEX AS A KEY ATTRIBUTE`. Even though CYF Syllabus suggests doing so here: [Keys](https://syllabus.codeyourfuture.io/react/week-1/lesson#keys). Instead, if there is no a unique ID property in each object of the collection, consider assigning some surrogate value to the key attribute, example: 
```js
<div key={`${product.name}-${product.supplier}-${product.price}`}>
```
Using Array Index will lead to bugs that are extremely hard to spot and fix. These bugs become noticeable when you start manipulating with the collection of DOM elements on the page: removing existing, adding new elements on the Front-End Page.
