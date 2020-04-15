const Monitor = require('../factory/monitor');

class Samsung {
    constructor(serial){
        return new Monitor(
            serial, 
            "samsung",
            49.9,
            "LED",
            "144Hz",
            "UHD",
            3840,
            2160);
    }
}

module.exports = Samsung;