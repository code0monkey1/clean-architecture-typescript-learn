var GreetUserOnEntryWithFlowers = /** @class */ (function () {
    function GreetUserOnEntryWithFlowers() {
    }
    GreetUserOnEntryWithFlowers.prototype.greet = function (user) {
        console.log("💐🌸🌺🌷💐🌸🌺🌷 ");
        console.log(user.name);
        console.log("💐🌸🌺🌷💐🌸🌺🌷 ");
    };
    return GreetUserOnEntryWithFlowers;
}());
var user = {
    dateOfBirth: new Date('01/02/1985'),
    email: "vonnaden@gmail.com",
    name: "Chiranjeev"
};
var GreetUserUseCase = /** @class */ (function () {
    function GreetUserUseCase(greetUser) {
        this.greetUser = greetUser;
    }
    GreetUserUseCase.prototype.execute = function (userData) {
        this.greetUser.greet(userData);
    };
    return GreetUserUseCase;
}());
var greetWithFlowers = new GreetUserOnEntryWithFlowers();
var GreetUser = new GreetUserUseCase(greetWithFlowers);
GreetUser.execute(user);
