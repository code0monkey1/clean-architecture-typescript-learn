type UserData={
  name:string,
  email:string,
  dateOfBirth:Date
}
class GreetUserUseCase{
   
  execute(user:UserData):void{
      
    console.log(user.name)
  }
}

const user:UserData = {
  dateOfBirth:new Date('01/02/1985'),
  email:"vonnaden@gmail.com",
  name:"Chiranjeev"
}


const Greeting = new GreetUserUseCase()

Greeting.execute(user)