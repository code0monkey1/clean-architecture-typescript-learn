"use strict";
//Adapter
class MacBookCharger {
    charge(device) {
        console.log("💻 💻 💻 💻 💻 💻");
        console.log("Charging : ", device.name, " of pin type : ", device.pinType);
        console.log("🍎 🍎 🍎 🍏 🍏 🍏");
        for (let i = 0; i <= 100; i += 10)
            console.log(`Current Charge : ${i} %`);
    }
}
//Adapter
class PhoneCharger {
    charge(device) {
        console.log("📱 📱 📱  📱 📱 📱");
        console.log(`Charging : ${device.name}, \n of pin type : ${device.pinType}`);
        console.log("🤖 🤖 🤖 🤖 🤖 🤖 ");
    }
}
// Charging a Device
class ChargeDeviceUseCase {
    constructor(adapter) {
        this.adapter = adapter;
    }
    execute(device) {
        this.adapter.charge(device);
    }
}
const pixelPhone = {
    name: "Google Pixel",
    pinType: "3 pin"
};
const MacBook = {
    name: "MacBook Pro",
    pinType: "2 pin"
};
const NewPhoneCharge = new PhoneCharger();
const NewMacBookCharge = new MacBookCharger();
const ChargePhone = new ChargeDeviceUseCase(NewPhoneCharge);
ChargePhone.execute(pixelPhone);
const ChargeMacBook = new ChargeDeviceUseCase(NewMacBookCharge);
ChargeMacBook.execute(MacBook);
