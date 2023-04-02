
export interface  IAppliance{

  name: string,
  pinType:"2 pin"|"3 pin"

}

export default interface Port{
     
     providePower( appliance : IAppliance)
   
}