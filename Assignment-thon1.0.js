//Assignment-Thon 1.0

var sedan = {
    rentalPrice: 24.99,
    availability: "available",
    totalNumAvailable: 4,
    rentalRequest: function() {
        console.log("The sedan is", this.availability, "and the rental price is:", this.rentalPrice, "/per day. We currently have", this.totalNumAvailable, "left in stock.");
        }
};
        
var SUV = {
    rentalPrice: 34.99,
    availability: "not available",
    totalNumAvailable: 0,
    rentalRequest: function() {
        console.log("Unfortunately, the SUV is", this.availability, "with", this.totalNumAvailable, "currently in stock. However, when in stock, our SUV rental rate is:", this.rentalPrice, "/per day.");
        }
};
        
var SportsCar = {
    rentalPrice: 54.99,
    availability: "available",
    totalNumAvailable: 1,
    rentalRequest: function() {
        console.log("The sportscar is", this.availability, "and the rental price is:", this.rentalPrice, "/per day. We currently have", this.totalNumAvailable, "left in stock.");
        }
    };
SportsCar.rentalRequest()
SUV.rentalRequest()
sedan.rentalRequest()