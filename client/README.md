# This is an initial react project

## How can you create the same React project in your local next time:

1. Run bash command:
```shell
npm create vite@latest my-react-app -- --template react
```
2. Got to the project's directory and install npm modules:
```shell
cd my-react-app
npm install
```
3. Set default port where you always want to run this front-end, by adding `--open --port 3000` into dev script in [package.json](./package.json) file:
```json
  {
    "scripts": {
      "dev": "vite --open --port 3000"
    }
  }
```
4. Run your project:
```shell
npm run dev
```
5. Create new `MyReactComponent` containing of 2 files:
  - [./src/components/MyReactComponent.jsx](./src/components/MyReactComponent.jsx)
  - [./src/components/MyReactComponent.css](./src/components/MyReactComponent.css)
6. Add the new component in the existing `<App>` component:
```js

...

export default function App() {
  render(
    <>
      ...
      <MyReactComponent />
    </>
  )
}
```
__Notice__: react app picks any changes on the fly when you run it in dev mode.

## What you can do next?

- Remove any unnecessary html tags from `App` component
- Create more new components and add them into app
- You can nest Parent and Children components:
```js
<ParentComponent>
  <ChildComponent />
  <ChildComponent />
  ...
</ParentComponent>
```

## More reading
- [Getting started with React](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started) at MDN
- [Scaffolding Your First Vite Project](https://vitejs.dev/guide/#scaffolding-your-first-vite-project) or the same at github: [create-vite](https://github.com/vitejs/vite/tree/main/packages/create-vite).
- [Official React Documentation](https://react.dev/reference/react)