class Monitor {
    constructor(
        serial,
        brand = "Generic",
        displaySizeInches = 50,
        tecnology = "OLED",
        refreshRate = "240Hz",
        resolution = "4K UHD 2160p",
        horizontalResolution = 3840,
        verticalResolution = 2160
    ){
        this.serial = serial;
        this.horizontalResolution = horizontalResolution;
        this.verticalResolution = verticalResolution;
        this.specifications = {
            serial,
            brand,
            displaySizeInches,
            tecnology,
            refreshRate,
            resolution,
            horizontalResolution,
            verticalResolution
        }
    }

    displaySpecifications(){
        console.log(this.specifications);
    }

    multiplyVHResolution(){
        return this.verticalResolution * this.horizontalResolution;
    }

    divideVHResolution(){
        return this.verticalResolution / this.horizontalResolution;
    }
}

module.exports = Monitor;