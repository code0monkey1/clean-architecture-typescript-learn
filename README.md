# Clean Architecture in Node using Typescript

## The motivation to use the Clean Architecture

**As software complexity grows , so does the overhead with one changing any of the fundamental parts in the given software .**

_A great way to manage complexity is to arrange the code in layers of abstraction ,
with the lower layers not knowing about the implementation of the upper layers
, and them communicating with the upper layers only through adapters ( abstract interfaces )._

**This way , one can easily implement changes to any of the layers any time , and
there would be no need to to change anything in the underlying layer , as the shape of the adapters ( abstract interfaces ) would never be changed , but only the concrete implementation in the specific layer would be changed.**
