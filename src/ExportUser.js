var GreetUserUseCase = /** @class */ (function () {
    function GreetUserUseCase() {
    }
    GreetUserUseCase.prototype.execute = function (user) {
        console.log(user.name);
    };
    return GreetUserUseCase;
}());
var user = {
    dateOfBirth: new Date('01/02/1985'),
    email: "vonnaden@gmail.com",
    name: "Chiranjeev"
};
var Greeting = new GreetUserUseCase();
Greeting.execute(user);
