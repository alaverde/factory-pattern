const Monitor = require('../factory/monitor');

class Lg {
    constructor(serial){
        return new Monitor(
            serial, 
            "LG",
            39.9,
            "LED",
            "75Hz",
            "HD",
            2560,
            1600);
    }
}

module.exports = Lg;