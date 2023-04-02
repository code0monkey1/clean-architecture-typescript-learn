 interface  IDevice{

  name: string,
  pinType:"2 pin"|"3 pin"

}

 interface Port{
     
     charge(device:IDevice):void;
   
}


class MacBookAdapter implements Port{

  charge(device: IDevice): void {
    
      console.log("💻 💻 💻 💻 💻 💻")
      console.log("Charging : ",device.name," of pin type : ",device.pinType)
      console.log("🍎 🍎 🍎 🍏 🍏 🍏")
  }
  
}



class ChargeDeviceUseCase {
     

}

