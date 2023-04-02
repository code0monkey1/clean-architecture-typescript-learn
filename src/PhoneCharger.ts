import IPort, { IAppliance } from './interfaces/IPort';

class PhoneCharger implements IPort{

  providePower(appliance: IAppliance) {

    throw new Error('Method not implemented.');
  }
  
  
}