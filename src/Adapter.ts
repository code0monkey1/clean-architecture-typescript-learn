import IPort, { IAppliance } from './interfaces/IPort';

export class Adapter implements IPort {

  providePower(appliance: IAppliance) {

    throw new Error('Method not implemented.');
  }

}