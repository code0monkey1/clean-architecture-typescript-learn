# Clean Architecture in Node using Typescript

![Clean Architecture](./pictures/CleanArchitecture.jpg)

## Motivation to use the Clean Architecture

**As software complexity grows , so does the overhead of one changing any of the fundamental parts in the given software .**

> One change can cause a ripple effect throughout the whole software system , leading to many changes , hence potentially many bugs , during refactoring

_A great way to manage complexity is to arrange the code into layers of abstraction ,
with the lower layers not knowing about the concrete implementation of the upper layers
, and them communicating with each other only through adapters ( abstract interfaces )._

**This way , one can easily make  changes to any of the layers any time , and
there would the need of multilayer changes , as the shape of the adapters ( abstract interfaces ) would never be changed , and only the concrete implementation in a specific layer would be modified.**
