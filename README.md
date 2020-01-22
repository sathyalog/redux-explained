## Purpose of this Repo:
This is a very tiny project and its goal is to explain redux and its flow in a simple manner.

__Concept (or) Usecase__ - We will have a __price__ input field along with __quantity__ dropdown on our page. On entering price or changing the quantity should update total value dynamically. To achieve this functionality we will be using redux here.

__Goal:__ On Blur event, we should take price and multiply with quantity and display total accordingly. Refer screenshot.

![screenshot](/screenshots/2.png)

__Note:__ Please go through the below steps and match with commits to understand the flow of redux.

#### How to run?
> npm start

__React-Redux Flow without Middleware:__
![redux-flow](/screenshots/react-redux-flow-state3.png)
In simple words, once event triggers, we will dispatch an action with value as a payload to action creator from component. From action creator with action type will carry the payload to reducer and where the reducer updates the store. By using mapStateToProps, we will pass the state(store) to component as props and by using props we can render the component.

__React-Redux Flow with Middleware:__
![redux-flow-middleware](/screenshots/react-redux-flow-state1.png)

#### Commit Details
1. initial commit
2. create a store and reducer with msg as initialstate
3. created constants and imported those in action file.functions to dispatch those actions.event handlers in component.
4. Moved App.js logic(handlers, html) to checkout.js(stateful component). Enabled state and updating state on event changes.
5. setprice and setquantity handlers(in components), action & reducer logic added.
6. update total value in store and render it in the checkout component.
7. Implementing middleware and enabling sagas to make API calls and display the information from API in Products Component.

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
12. In components(checkout), you will receive the price, quantity from store as a props using mapStateToProps method. You can now directly display the values on component from store.
13. Similarly, you can save the total value and display total value in checkout component from store.
14. By using redux saga middleware, we will enable sagas in our application and run with it.
15. We will fetch product details from saga and pass to Products Component and later display it.



#### Points to Remember
1. Redux is a __single source of truth__. Which means it can only have 1 store and 1 reducer(state in it). No matter how many reducers you create, you have to combine those reducers and keep it as 1(rootReducer). As explained, we will have only one state in rootReducer, where all components has to subscribe and listen to it. 
2. mapStateToProps - will help to pass the store values to your component as props.

    If mapStateToProps argument is specified, the new component will subscribe to Redux store updates. This means that any time the store is updated, mapStateToProps will be called. The results of mapStateToProps must be a plain object, which will be merged into the component’s props.

    With mapDispatchToProps every action creator wrapped into a dispatch call so they may be invoked directly, will be merged into the component’s props.

3. Middleware - Redux middleware solves different problems than Express or Koa middleware, but in a conceptually similar way. It provides a third-party extension point between dispatching an action, and the moment it reaches the reducer. People use Redux middleware for logging, crash reporting, talking to an asynchronous API, routing, and more.
4. Pure Functions(Reducer) - 
    Must return the same output on same input. 
    Must not have side effects(network call, write to file, logging to screen)
    Should not mutate external state
5. Why we need redux saga and why we cannot handle side effects with redux? Redux is synchronous and cannot perform async calls natively. Hence we use redux saga to handle API calls asynchronously and also to handle side effects. What happens if you use native redux to handle API calls, then lets say you click on button to fetch details for different products parallely, you might end up fetching the latest clicked product ignoring first 4 calls. In these cases, we definitely need to wait when ever we perform an action for API calls before you make another API call.
6. Redux Saga - redux-saga is a library that aims to make application side effects (i.e. asynchronous things like data fetching and impure things like accessing the browser cache) easier to manage, more efficient to execute, easy to test, and better at handling failures.

6.1 put(channel, action)

Creates an Effect description that instructs the middleware to put an action into the provided channel.

    channel: Channel - a Channel Object.
    action: Object - see Redux dispatch documentation for complete info 

6.2 takeLatest(pattern, saga, ...args)

Forks a saga on each action dispatched to the Store that matches pattern. And automatically cancels any previous saga task started previously if it's still running.

Each time an action is dispatched to the store. And if this action matches pattern, takeLatest starts a new saga task in the background. If a saga task was started previously (on the last action dispatched before the actual action), and if this task is still running, the task will be cancelled.

    pattern: String | Array | Function - for more information see docs for take(pattern)

    saga: Function - a Generator function

    args: Array<any> - arguments to be passed to the started task. takeLatest will add the incoming action to the argument list (i.e. the action will be the last argument provided to saga)

6.3 all([...effects]) - parallel effects

Creates an Effect description that instructs the middleware to run multiple Effects in parallel and wait for all of them to complete. It's quite the corresponding API to standard Promise#all.

For more: https://redux-saga.js.org/docs/api/