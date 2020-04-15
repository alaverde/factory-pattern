const MonitorFactory = require('./monitorFactory');

const samsumgMultiplyVHResolutionResult = MonitorFactory.create("samsung", "s001");
const lgDivideVHResolutionResult = MonitorFactory.create("lg", "lg001");

console.log("Samsung multiply VH resolution: ", 
    samsumgMultiplyVHResolutionResult);
console.log("Lg Divide VH resolution: ", 
    lgDivideVHResolutionResult);