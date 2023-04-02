
 interface  IDevice{

  name: string,
  pinType:"2 pin"|"3 pin"

}

 interface Adapter{
     
     charge(device:IDevice):void;
   
}

class MacBookAdapter implements Adapter{

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

class PhoneAdapter implements Adapter{

  charge(device: IDevice): void {
     console.log("📱 📱 📱  📱 📱 📱")
      console.log("Charging : ",device.name," of pin type : ",device.pinType)
      console.log("🤖 🤖 🤖 🤖 🤖 🤖 ")
  }

}

class ChargeDeviceUseCase {
     
  constructor(adapter: Adapter) {

  }



}

