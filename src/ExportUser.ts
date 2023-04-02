type UserData={
  name:string,
  email:string,
  dateOfBirth:Date
}
//ICharger
interface IGreetUser{
     //charging
     greet(user:UserData):void;
}

// ChargePhone
class GreetUserOnEntryWithFlowers implements IGreetUser{

  greet(user: UserData): void {
    console.log("🌸🌺🌷💐🌸🌺🌷 ")
    console.log(user.name)
    console.log("💐🌸🌺🌷💐🌸🌺🌷 ")
  }

}
//ChargeLaptop
class GreetUserOnEntryWithKnives implements IGreetUser{
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
     
  constructor(private readonly greetUser:IGreetUser) {}

  execute(userData:UserData){
    this.greetUser.greet(userData)
  }

}

const greetWithFlowers = new GreetUserOnEntryWithFlowers()

const greetWithKnives = new GreetUserOnEntryWithKnives()  

const PayingUser = new GreetUserUseCase(greetWithFlowers)

const GreetDefaultingUser = new GreetUserUseCase(greetWithKnives)

PayingUser.execute(user)

GreetDefaultingUser.execute(user)