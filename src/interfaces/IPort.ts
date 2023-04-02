 interface  IDevice{

  name: string,
  pinType:"2 pin"|"3 pin"

}

 interface Port{
     
     charge(device:IDevice):void;
   
}


class MacBookAdapter implements Port{

  charge(device: IDevice): void {
    throw new Error("Method not implemented.");
  }
  
}



class ChargeDeviceUseCase {
     

}

