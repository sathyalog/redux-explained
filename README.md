## Purpose of this Repo:
This is a very tiny project and its goal is to explain redux and its flow in a simple manner.

__Concept (or) Usecase__ - We will have a __price__ input field along with __quantity__ dropdown on our page. On entering price or changing the quantity should update total value dynamically. To achieve this functionality we will be using redux here.

__Goal:__ On Blur event, we should take price and multiply with quantity and display total accordingly. Refer screenshot.

![screenshot](/screenshots/2.png)

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

__React-Redux Flow without Middleware:__
![redux-flow](/screenshots/react-redux-flow-state3.png)

__React-Redux Flow with Middleware:__
![redux-flow-middleware](/screenshots/react-redux-flow-state1.png)

#### Points to Remember
1. Redux is a __single source of truth__. Which means it can only have 1 store and 1 reducer(state in it). No matter how many reducers you create, you have to combine those reducers and keep it as 1(rootReducer). As explained, we will have only one state in rootReducer, where all components has to subscribe and listen to it. 
2. mapStateToProps - will help to pass the store values to your component as props.