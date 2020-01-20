## Purpose of this Repo:
This is a very tiny project and its goal is to explain redux and its flow in a simple manner.

__Concept (or) Usecase__ - We will have a __price__ input field along with __quantity__ dropdown on our page. On entering price or changing the quantity should update total value dynamically. To achieve this functionality we will be using redux here.

__Goal:__ On Blur event, we should take price and multiply with quantity and display total accordingly. Refer screenshot.



__Note:__ Please go through the below steps and match with commits to understand the flow of redux.

#### How to run?
> npm start

#### Commit Details
1. initial commit
2. create a store and reducer with msg as initialstate
3. created constants and imported those in action file.functions to dispatch those actions.event handlers in component.
4. Moved App.js logic(handlers, html) to checkout.js(stateful component). Enabled state and updating state on event changes.
5. setprice and setquantity handlers(in components), action & reducer logic added.
6. update total value in store and render it in the checkout component. 

#### Steps to configure Redux in React application:
1. `npm i react-redux`
2. create a reducer(reducer.js) with initialstate
3. create a store(store.js) using createStore and pass reducer in it
3. import store in App.js
4. import Provider in App.js
5. `<Provider store={store}>` as a parent element for entire application.
Now you can see on your redux-devtools-extension where state column is displayed with a message(msg) like shown in screenshot.
6. create a constants file and export action-type names
7. create an action file by importing action-type names and create a function in it to dispatch action with payload.
8. write event handlers for price, quantity dropdowns in component file(app.js).
9. Created a class component(stateful) and named it as checkout.js. Moved all app.js logic to checkout.js and updating state on event changes.
10. Using connect method, we will pass mapStateToPros for the checkout component..which internally maps store state to the component using connect method.
10.On input or dropdown change, call handler and dispatch an action with value. Action will pick value and pass it as payload value for respective action type.
11. Reducer will update the store holding action type with value(payload) passed from action.
12. In components(checkout), you will receive the price, quantity from store as a props. You can now directly display the values on component from store.

#### Points to Remember
1. Redux is a __single source of truth__. Which means it can only have 1 store and 1 reducer(state in it). No matter how many reducers you create, you have to combine those reducers and keep it as 1(rootReducer). As explained, we will have only one state in rootReducer, where all components has to subscribe and listen to it. 
2. mapStateToProps - will help to pass the store values to your component as props.

---------------------------------------------------------------------------------------------------
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
