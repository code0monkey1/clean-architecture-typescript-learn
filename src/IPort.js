//Adapter
var MacBookCharger = /** @class */ (function () {
    function MacBookCharger() {
    }
    MacBookCharger.prototype.charge = function (device) {
        console.log("💻 💻 💻 💻 💻 💻");
        console.log("Charging : ", device.name, " of pin type : ", device.pinType);
        console.log("🍎 🍎 🍎 🍏 🍏 🍏");
        var _loop_1 = function (i) {
            setTimeout(function () {
                console.log("Current Charge : ".concat(i, " %"));
            }, 1000);
        };
        for (var i = 0; i <= 100; i += 10) {
            _loop_1(i);
        }
    };
    return MacBookCharger;
}());
//Adapter
var PhoneCharger = /** @class */ (function () {
    function PhoneCharger() {
    }
    PhoneCharger.prototype.charge = function (device) {
        console.log("📱 📱 📱  📱 📱 📱");
        console.log("Charging : ", device.name, " of pin type : ", device.pinType);
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
var ChargePhone = new PhoneCharger();
var ChargeNewDevice = new ChargeDeviceUseCase(ChargePhone);
ChargeNewDevice.execute(pixelPhone);
