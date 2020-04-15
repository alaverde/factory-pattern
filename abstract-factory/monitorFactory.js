const Samsung = require('./samsung');
const Lg = require('./lg');

class MonitorFactory {
    create(brand, serial){
        switch(brand){
            case 'samsung':
                return new Samsung(serial);
            case 'lg':
                return new Lg(serial);
            default: {
                console.log('Monitor not found');
            }
        }
    }
}

module.exports = new MonitorFactory;