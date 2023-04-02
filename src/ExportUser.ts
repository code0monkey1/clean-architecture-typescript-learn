type UserData={
  name:string,
  email:string,
  dateOfBirth:Date
}

interface IGreetUser{
     greet(user:UserData):void;
}

class GreetUserOnEntryWithFlowers implements IGreetUser{

  greet(user: UserData): void {
    console.log("💐🌸🌺🌷💐🌸🌺🌷 ")
    console.log(user.name)
    console.log("💐🌸🌺🌷💐🌸🌺🌷 ")
  }

}

class GreetUserOnEntryWithKnives implements IGreetUser{
  greet(user: UserData): void {
    throw new Error("Method not implemented.");
  }
  
}

const user:UserData = {
  dateOfBirth:new Date('01/02/1985'),
  email:"vonnaden@gmail.com",
  name:"Chiranjeev"
}

class GreetUserUseCase {
     
  constructor(private readonly greetUser:IGreetUser) {}

  execute(userData:UserData){
    this.greetUser.greet(userData)
  }

}

const greetWithFlowers = new GreetUserOnEntryWithFlowers()

const GreetUser = new GreetUserUseCase(greetWithFlowers)

GreetUser.execute(user)