### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
	- React Router allows us to navigate to different routes within our app without making actual requests that cause the page to refresh.

- What is a single page application?
	- A single page application uses client-side routing as opposed to server-side routing.

- What are some differences between client side and server side routing?
	- Client side:
		- No page refreshes, because we're not sending full requests when navigating to different "pages" within the app
		- Uses the browser rather than the server to associate the text in the url bar with the page being displayed
	- Server side:
		- There are page refreshes because we are making full requests when navigating to different pages within the app
		- Relationship between text in URL bar and page displayed is made by the server 

- What are two ways of handling redirects with React Router? When would you use each?
	1. The <Redirect> component
		- Used to redirect from a bad/invalid path to a good/valid path
	2. using history.push()
		- Used to redirect as part of a sequential process (e.g., redirecting after submitting a form)

- What are two different ways to handle page-not-found user experiences using React Router? 
	- Create a separate component (e.g., `<NotFound />`) that renders only when the route entered by the user doesn't match any other valid path within the app
	- Add `<Redirect to="/[desired-destination]">` as the last route in your routes - this is a catch-all that will automatically redirect the user if the inputted path does not match any valid path within the app

- How do you grab URL parameters from within a component using React Router?
	1. Wrap the component in a route that has a path with a parameter (e.g., `<Route path="/users/:username">`)
	2. Within the component, import the useParams hook and use it to retrieve the value of the parameter with the correct name (e.g., `const {username} = useParams()`)

- What is context in React? When would you use it?
	- When an component or group of components are wrapped within a context, which contains a single value that is accessible to said components as well as any of their child/grandchild/etc. components that use the useContext hook to access the value associated with the context.
	- You would want to use context when you have a value that you want to pass down through multiple components within a heirarchy just to be used within a single component that's much farther down in the heirarchy than the parent component that declared the value (prop drilling).

- Describe some differences between class-based components and function
  components in React.
  - Class-based:
  	- A component only has one state object (`this.state`)
  	- State is initialized within the constructor
  	- We set state with `this.setState({new values in state object})`
  	- Functions declared within a class component must be binded within the constructor (e.g., `this.toggleSwitch = this.toggleSwitch.bind(this)`)
  	- We must wrap our returned value in `render() {}`
  	- We use component lifecycle methods (e.g., `componentDidUpdate()`) since we can't use `useEffect()`
  	- More likely to have duplicated code since it's harder to share code between components
  - Function:
  	- A component can have several pieces of state
  	- State is initialized with a hook `useState()`
  	- We set state with a function destructured from the useState hook
  	- No need to bind since no use of classes
  	- No need for `render() {}`
  	- We can `useEffect()` to perform operations when certain pieces of state are updated
  	- Less likely to have duplicated code since we can have one hook used by as many components as we'd like

- What are some of the problems that hooks were designed to solve?
	- Allows us to use state within our functional components without ever having to write a class, higher-order component and/or render props
	- Allows us to use many other features in React such as context
	- Makes code cleaner and easier to read
	- Allows for greater flexibility when managing state
	- Allows us to avoid duplication by using one hook in multiple components
	- Hooks make it are easier to test whatever functionality they include in isolation