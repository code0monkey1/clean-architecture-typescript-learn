type UserData={
  name:string,
  email:string,
  dateOfBirth:Date
}

interface GreetUserOnEntry{
    
     greet(user:UserData):void;
}


class GreetUserOnEntryWithFlowers implements GreetUserOnEntry{
  
  greet(user: UserData): void {
    throw new Error("Method not implemented.");
  }

}

class GreetUserUseCase{
   
  execute(user:UserData):void{
      
  }
}

const user:UserData = {
  dateOfBirth:new Date('01/02/1985'),
  email:"vonnaden@gmail.com",
  name:"Chiranjeev"
}


const Greeting = new GreetUserUseCase()

Greeting.execute(user)