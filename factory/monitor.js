class Monitor {
    constructor(
        serial,
        brand = "Generic",
        displaySizeInches = 50,
        tecnology = "OLED",
        refreshRate = "240Hz",
        resolution = "4K UHD 2160p"
    ){
        this.serial = serial;
        this.specifications = {
            serial,
            brand,
            displaySizeInches,
            tecnology,
            refreshRate,
            resolution
        }
    }

    displaySpecifications(){
        console.log(this.specifications);
    }
}

module.exports = Monitor;