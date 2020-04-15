const Samsung = require('./samsung');
const Lg = require('./lg');

class MonitorFactory {
    create(brand, serial){
        switch(brand){
            case 'samsung':
                const samsung = new Samsung(serial);
                return samsung.multiplyVHResolution();
            case 'lg':
                const lg = new Lg(serial);
                return lg.divideVHResolution();
            default: {
                console.log('Monitor not found');
            }
        }
    }
}

module.exports = new MonitorFactory;