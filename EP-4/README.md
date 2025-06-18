# talk is cheap, show me the code

# Food Ordering App

---

# Namaste Food

/\*\* Components

-
- Header
- - Logo
- - NavItems
-
-
- Body
- - Search
- - RestaurantContainer
-      - RestaurantCard
-          - Image
-          - Name
-          - Star Rating
-          - cuisines
-          - delivery time
-
- Footer
- - Copyright
- - Links
- - Address \*
- - Contact
-
- \*/

---

# 2- types of Export/Import

- Default Export/Import
  export default <Component>
  import Component from "./Component";

- Named Export/Import
  export const Component;
  import {Component} from "./Component";

---

# React Hooks

    - (Normal JS utility functions - written by Facebook-devs inside React)

    - 2-important hooks (mostly used)
        - useState  - Super powerful State Variables in React (named import)

        - useEffect

---

    // Local state-variable -super powerful variable (array-destructuring on the fly)

const arr = useState(resList);
// const [listOfRestaurants, setListOfRestaurants] = arr;
const listOfRestaurants = arr[0];
const setListOfRestaurants = arr[1];

---

# 2 types of Routing in web-apps

- Client Side Routing
- Server Side Routing (makes n/w-call gets the data & renders on UI by Refreshing the page)

---

# Redux Toolkit

- Install @reduxjs/toolkit and react-redux
- Build our store
- Connect our store to app (bridge)
- Slice (cartSlice)
- dispatch(action)
- Selector

---

| Syntax                 | Effect                           | Recommended When           |
| ---------------------- | -------------------------------- | -------------------------- |
| `state.items = []`     | Replaces array (new reference)   | Default & simpler use case |
| `state.items.length=0` | Clears in-place (same reference) | When reference matters     |
