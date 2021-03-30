## React interview questions

1. What is state and props in reactjs?


   State in react components can be used as a way of managing variables.
   Props are passed into and between react components and can be accessed by those react components.

2. What is high order component? How do you use it?


   Higher Order components in reactjs take a base component and return a new component.
   You would use it by wrapping the base component to get the new component, similar to connect from react-redux.

3. What is context? What are the benefits of it?


   Context is a state management system in react. Context is beneficial because it helps us manage state.
   If a component requires some part of state, but it is difficult to pass it through to that component via other components, it can retreive that state through context instead.

4. How to assign and change the value of state in a component?


   If we are using the useState hook, then you have to use the setter function to change the state.
   e.g. ```const [counter, setCounter] = useState(0)

const incrementCounter = () => {
setCounter(counter+1) // this is where the counter in state gets updated
}```

5. Could you explain the life-cycle of a react component?

6. What is fragment in react?


   A fragment is like an empty wrapper tag similar to a div tag, but it's invisible and doesn't show up in the html.
   You would use it to group multiple elements return a single element for react.

7. What is ref in react?


   Ref is reference to an DOM element in react.

8. What is container component? What is presentational component?


   A container component deals with how things work.
   A presnetational component deals with how things look.

9. How to pass a function to a component?


   You can pass a function to a component as a prop

i.e.
```const addTodo = () => {
...
}
<TodoList addTodo={addTodo}> 
```

10. What is portal?


    A portal allows us to render children into a DOM node that exists outside the hierarchy of the parent.

11. How to share state between parent component and child component? How to share state between sibling components?


    Sharing state between parent and child is a simple as passing the state down the the child from the parent.
    Sharing state between siblings is a bit more challenging, the state should be held in the parent of both children and then passed to both children.
