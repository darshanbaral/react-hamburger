# react-hamburger
[Demo](https://darshanbaral.github.io/react-hamburger/)

[bit.dev](https://bit.dev/darshanbaral/dbaral_react/hamburger)

# props

1. `size` - numeric value of hamburger menu in pixel
2. `colors` - an object with keys `hamburger` and `cross` representing colors of each state. Example `{ hamburger: "black", cross: "red" }`
3. `delay` - string in the format of `"0.5s"` for transition effect.
4. `alsoRun` - optional function that runs when hamburger changes to cross and vice versa. Can access whether the icon is a hamburger or cross if required.
