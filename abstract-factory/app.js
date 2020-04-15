const MonitorFactory = require('./monitorFactory');

const samsumg = MonitorFactory.create("samsung", "s001");
const lg = MonitorFactory.create("lg", "lg001");

samsumg.displaySpecifications();
lg.displaySpecifications();