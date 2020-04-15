const Monitor = require('./monitor');

const samsungMonitor = new Monitor(
        "s001", 
        "samsung",
        49.9,
        "LED",
        "144Hz",
        "UHD",
        3840,
        2160);

samsungMonitor.displaySpecifications();