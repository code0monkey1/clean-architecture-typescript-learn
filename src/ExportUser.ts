type UserData={
  name:string,
  email:string,
  dateOfBirth:Date
}

//ICharger
interface IGreetUser{

     //charge
     greet(user:UserData):void;

}

// ChargePhone
class GreetUserOnEntryWithFlowers implements IGreetUser{
  //charge
  greet(user: UserData): void {
    console.log("🌸🌺🌷💐🌸🌺🌷 ")
    console.log(user.name)
    console.log("💐🌸🌺🌷💐🌸🌺🌷 ")
  }

}
//ChargeLaptop
class GreetUserOnEntryWithKnives implements IGreetUser{
  //charge
  greet(user: UserData): void {
    console.log("🔪🔪🔪🔪🔪");
    console.log(user.name);
    console.log("🗡️🗡️🗡️🗡️🗡️");
  }
  
}
// Device Data
const user:UserData = {
  dateOfBirth:new Date('01/02/1985'),
  email:"vonnaden@gmail.com",
  name:"Chiranjeev"
}

// ChargeApplianceUseCase
class GreetUserUseCase {
     
  constructor(private readonly userGreetService: IGreetUser) {} // type of greeting

  execute(userData:UserData){
    this.userGreetService.greet(userData) // user data
  }

}

const greetWithFlowers = new GreetUserOnEntryWithFlowers()

const greetWithKnives = new GreetUserOnEntryWithKnives()  

const PayingUser = new GreetUserUseCase(greetWithFlowers)

const GreetDefaultingUser = new GreetUserUseCase(greetWithKnives)

PayingUser.execute(user)

GreetDefaultingUser.execute(user)