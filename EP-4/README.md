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

---

# Types of testing (developer can do) [ 3-types (by writing code) ]

- Unit Testing (devs are responsible for)
- Integration Testing (devs are responsible for)
- End-to-End Testing -> e2e Testing (some tools required -> Selenium, Cypress, Playwright, puppeteer etc...)

# Setting up Testing in our app

- Install React Testing Library
- Install Jest
- Install Babel dependencies (in JEST website (using Babel))
- Configure babel.config.js (in root-dir)
- Configure Parcel Config file to disable default babel transpilation (now it's use babel.config.js) (parcelDocs -> JS -> Babel -> usage with other tools)

- Jest-congig (npx create-jest)
- Install Jsdom-library (if jest-version is >28)
- Install @babel/preset-react -> to make JSX work in test-cases
- Include @babel/preset-react inside my babel.config.js (that helping the testing-library to convert that JSX-code to HTMl so that it can read properly)
- npm i -D @testing-library/jest-dom ==> to make jest-dom(like toBeInTheDocument-fn ...) work in test-cases

- (for intellisense) npm i -D @types/jest
