## 1. What is JSX, and why is it used?

**JSX or JavaScript XML** is a syntax used in React that allows you to write HTML-like code inside JavaScript.

It makes React components easier to read and write because the UI structure looks similar to HTML.

Example:

```javascript
function App() {
  return <h1>Hello World</h1>;
}
```

Why JSX is used:

- It makes UI code easier to understand.
- It allows HTML structure directly in JavaScript.

---

## 2. What is the difference between State and Props?

Both **State** and **Props** are used to store data in React, but they are used in different ways.

**Props**

- Props are used to pass data from one component to another.
- They are **read-only**, meaning a component cannot change its props.
- Props shares data one-way.From parent to child.

Example:

```javascript
function Greeting(props) {
  return <h1>Hello {props.name}</h1>;
}
```

**State**

- State is used to store data that can change inside a component.
- When state changes, the component re-renders automatically.

Example:

```javascript
const [count, setCount] = useState(0);
```

## 3. What is the useState hook, and how does it work?

`useState` is a React Hook that allows functional components to store and update state.

It returns two things:

1. The current state value
2. A function to update that state

Example:

```javascript
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
  );
}
```

How it works:

- `count` stores the current value.
- `setCount` updates the value.
- When `setCount` is called, React re-renders the component.

---

## 4. How can you share state between components in React?

The most common way is **lifting state up**.

This means moving the state to the **closest common parent component**, then passing the data to child components using props.

Steps:

1. Store the state in the **parent component**.
2. Pass the state and update function to children using **props**.

## 5. How is event handling done in React?

Events are usually handled by passing a function to the event attribute.

Example:

```javascript
function Button() {
  const handleClick = () => {
    alert("Button clicked");
  };

  return <button onClick={handleClick}>Click Me</button>;
}
```

---
