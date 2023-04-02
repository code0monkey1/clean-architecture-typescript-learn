# Clean Architecture in Node using Typescript

![Clean Architecture](./pictures/CleanArchitecture.jpg)

[Clean Architecture Blog Post](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html "Read About the Clean Architecture in detail, in the blog by Uncle Bob")

## Motivation to use `Clean Architecture`

**As software complexity grows , so does the overhead of one changing any of the fundamental parts in the given software .**

> One change can cause a ripple effect throughout the whole software system , leading to many changes , hence potentially many bugs , during refactoring

_A great way to manage complexity is to arrange the code into layers of abstraction ,
with the lower layers not knowing about the concrete implementation of the upper layers
, and them communicating with each other only through adapters ( abstract interfaces )._

**This way , one can easily make  changes to any of the layers any time , and
there would the need of multilayer changes , as the shape of the adapters ( abstract interfaces ) would never be changed , and only the concrete implementation in a specific layer would be modified.**

If everything goes well in the architectural process , we end up with software layers that are independent of the specificities of the type of UI used , the concrete implementation of the Data Base used
etc ...

**i.e : We could swap out any of the concrete implementations, `the Data Base` , for example at any time , and substitute it with another implementation  ( eg Switching MongoDb with MySql ) , and there would be no change in implementation required to any of the lower layers of our application**

> What's more , every layer of our architecture can be tested independently.
>
> Thereby aiding a quick `TDD Process`

---

## Ports /  Adapters / Devices

>_A practical and useful implementation of the dependency inversion principle_

---

### 1 . Ports

<img src='./pictures/port.jpeg' width="300" height="300"/>

_Ports are the interfaces to which adapters can connect to_

In code , it means we create an interface that specifies the function that is supposed to be performed

In the case of a charging port , it's function is to charge a device.

---

```typescript

//Port 

interface ChargeDevice{
     
//behavior

     charge(device:TDevice):void;
     
}

```

---

### 2 . Adapters

<img src='./pictures/laptopAdapter.jpg' width="300" height="300"/>

<img src='./pictures/phoneAdapter.jpeg' width="300" height="300"/>

_Adapters are concrete implemantations , that are specific to the device being used. They are the link connecting a device to the port_

```typescript
//MacBook Adapter

class MacBookCharger implements ChargeDevice{

  charge(device: TDevice ): void {

      console.log("💻 💻 💻 💻 💻 💻")
      console.log("Charging : ",device.name," of pin type : ",device.pinType)
      console.log("🍎 🍎 🍎 🍏 🍏 🍏")

      for(let i =0;i<=100;i+=10)
         console.log(`Current Charge : ${i} %`)

  }
  
}
//Phone Adapter
class PhoneCharger implements ChargeDevice{

  charge(device: TDevice): void {
      console.log("📱 📱 📱  📱 📱 📱")
      console.log(`Charging : ${device.name}, \n of pin type : ${device.pinType}`)
      console.log("🤖 🤖 🤖 🤖 🤖 🤖 ")
  }

}
```

---

### 3 . Devices

<img src='./pictures/macbookDevice.webp' width="300" height="300"/>

<img src='./pictures/pixelPhoneDevice.jpg' width="300" height="300"/>

_This is the concrete implementation
that plugs into the adapter in order to communicate with the port_

```typescript
In Typescript Code , this is how we'd
go about defining the Device Type 

//Device ( Entity )

 type TDevice={

  name: string,
  pinType:"2 pin"|"3 pin"

}
```

---

### The Whole Setup in Action

<img src='./pictures/macbookCharging.jpg' width="300" height="300"/>

---

<img src='./pictures/phoneCharging.jpg' width="300" height="300"/>

```typescript

// Charging a Device

class ChargeDeviceUseCase {
     
  constructor(private readonly adapter : ChargeDevice) {}

   execute( device : TDevice){
     this.adapter.charge(device);
   }

}

const pixelPhone:TDevice={
  name:"Google Pixel",
  pinType:"3 pin"
}

const MacBook:TDevice={
  name:"MacBook Pro",
  pinType:"2 pin"
}

const NewPhoneCharge = new PhoneCharger()

const NewMacBookCharge = new MacBookCharger()


const ChargePhone =  new ChargeDeviceUseCase(NewPhoneCharge)

ChargePhone.execute(pixelPhone)


const ChargeMacBook = new ChargeDeviceUseCase(NewMacBookCharge)

ChargeMacBook.execute(MacBook)

```

## The Dependency Rule

> Nothing in the inner circle can know about
> the outer circle

It is imperative that we ensure that nothing
