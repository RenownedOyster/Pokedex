# Cybsafe React Practical

Hi there,

Thanks for looking at my practical.

Please find enclosed my pokedex written with React, Typescript, Context/Hooks, and coffee.

### Implementation Comments

- I chose to use hooks and context to control data flow and API calls. I could have used the Redux/adapters/selectors/thunk ecosystem too as I have in tons of other projects but as this data is simple I chose to handle it via context instead. Please let me know if you'd like me to implement Redux instead!
- I chose not to use a UI lib, again, as the components are super simple. Though Material, Ant design, and Bootstrap are all amazing libraries.

### Testing Strategy

For testing I would deploy Jest snapshot & unit tests and Storybook. There are many great alternatives such as Jasmine, Mocha, andCyprus but I've always found the ecosystem and developers around Jest to be solid.

I would use snapshot tests for the front-end functional elements to ensure visual fidelity between commits/versions.

I would use traditional unit testing and mocking to do two things. To ensure business logic continuity and prevent breaking changes and to create a barrier between API version changes and front end code.

Lastly, and while not strictly considered a testing strategy, I would use Storybook as a preventative and maintenance measure. This library allows devs, among other things, to catalogue and display all prop and UI state permutations. This allows devs to visually ensure that all component states are non-breaking.

#### Thank you for your time and I really look forward to hearing back from you!
