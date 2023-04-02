//Adapter
var MacBookCharger = /** @class */ (function () {
    function MacBookCharger() {
    }
    MacBookCharger.prototype.charge = function (device) {
        console.log("💻 💻 💻 💻 💻 💻");
        console.log("Charging : ", device.name, " of pin type : ", device.pinType);
        console.log("🍎 🍎 🍎 🍏 🍏 🍏");
        for (var i = 0; i <= 100; i += 10)
            console.log("Current Charge : ".concat(i, " %"));
    };
    return MacBookCharger;
}());
//Adapter
var PhoneCharger = /** @class */ (function () {
    function PhoneCharger() {
    }
    PhoneCharger.prototype.charge = function (device) {
        console.log("📱 📱 📱  📱 📱 📱");
        console.log("Charging : ".concat(device.name, ", \n of pin type : ").concat(device.pinType));
        console.log("🤖 🤖 🤖 🤖 🤖 🤖 ");
    };
    return PhoneCharger;
}());
// Charging a Device
var ChargeDeviceUseCase = /** @class */ (function () {
    function ChargeDeviceUseCase(adapter) {
        this.adapter = adapter;
    }
    ChargeDeviceUseCase.prototype.execute = function (device) {
        this.adapter.charge(device);
    };
    return ChargeDeviceUseCase;
}());
var pixelPhone = {
    name: "Google Pixel",
    pinType: "3 pin"
};
var MacBook = {
    name: "MacBook Pro",
    pinType: "2 pin"
};
var NewPhoneCharge = new PhoneCharger();
var NewMacBookCharge = new MacBookCharger();
var ChargePhone = new ChargeDeviceUseCase(NewPhoneCharge);
ChargePhone.execute(pixelPhone);
var ChargeMacBook = new ChargeDeviceUseCase(NewMacBookCharge);
ChargeMacBook.execute(MacBook);
