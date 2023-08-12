//lesson 195
var profile = {
    name: 'John',
    age: 30,
    coords: { latitude: 0, longitude: 0 },
    setAge: function (age) {
        this.age = age;
    },
};
var age = profile.age, name = profile.name;
var _a = profile.coords, latitude = _a.latitude, longitude = _a.longitude;
