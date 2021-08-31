// The prototype allows JavaScript objects to inherit form one another

const vehicle = {
    drive: function () {
        console.log('Lets Tokyo Drift...');
    }
};

const needDrive = {
    make: 'Fast&Furious',
};

Object.setPrototypeOf(needDrive, vehicle);

console.log('Calling drive method inherited from the vehicle object: ', needDrive.make);
needDrive.drive();