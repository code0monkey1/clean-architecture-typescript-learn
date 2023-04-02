//Device
 interface  IDevice{

  name: string,
  pinType:"2 pin"|"3 pin"

}
//Port
interface ChargeDevice{
     
     charge(device:IDevice):void;
   
}
//Adapter
class MacBookCharger implements ChargeDevice{

  charge(device: IDevice ): void {
      
      console.log("💻 💻 💻 💻 💻 💻")
      console.log("Charging : ",device.name," of pin type : ",device.pinType)
      console.log("🍎 🍎 🍎 🍏 🍏 🍏")

      for(let i =0;i<=100;i+=10){
         setTimeout(()=>{
           console.log(`Current Charge : ${i} %`)
         },1000)
      }
  }
  
}
//Adapter
class PhoneCharger implements ChargeDevice{

  charge(device: IDevice): void {
     console.log("📱 📱 📱  📱 📱 📱")
      console.log("Charging : ",device.name," of pin type : ",device.pinType)
      console.log("🤖 🤖 🤖 🤖 🤖 🤖 ")
  }

}

// Charging a Device
class ChargeDeviceUseCase {
     
  constructor(private readonly adapter : ChargeDevice) {}

   execute( device : IDevice){
     this.adapter.charge(device);
   }

}




