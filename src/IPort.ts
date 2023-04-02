//Device
 type TDevice={

  name: string,
  pinType:"2 pin"|"3 pin"

}
//Port
interface ChargeDevice{
     
     charge(device:TDevice):void;
     
   
}
//Adapter
class MacBookCharger implements ChargeDevice{

  charge(device: TDevice ): void {
      
      console.log("💻 💻 💻 💻 💻 💻")
      console.log("Charging : ",device.name," of pin type : ",device.pinType)
      console.log("🍎 🍎 🍎 🍏 🍏 🍏")

      for(let i =0;i<=100;i+=10)
         console.log(`Current Charge : ${i} %`)
        
  }
  
}
//Adapter
class PhoneCharger implements ChargeDevice{

  charge(device: TDevice): void {
      console.log("📱 📱 📱  📱 📱 📱")
      console.log(`Charging : ${device.name}, \n of pin type : ${device.pinType}`)
      console.log("🤖 🤖 🤖 🤖 🤖 🤖 ")
  }

}

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




