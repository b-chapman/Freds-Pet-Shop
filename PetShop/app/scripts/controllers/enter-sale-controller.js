'use strict';

myApp.controller('EnterSaleController', function EnterSaleController($scope) {


    // The pets Fred offers
    $scope.pets = [
        {"name": "Rabbit", "legs": 4, "price": 25},
        {"name": "Squirrel", "legs": 4, "price": 10},
        {"name": "Rat", "legs": 4, "price": 15},
        {"name": "Kangaroo", "legs": 2, "price": 80},
        {"name": "Tarantula", "legs": 8, "price": 75}
    ];

    // Static data
    $scope.VATPercent = 18;
    $scope.LegTaxPercentPerLeg = 10;


    // Sale tracking
    $scope.saleInfo = {
        // Totals
        "totalGrossSales": 0,
        "totalLegTax": 0,
        "totalVAT": 0,
        "totalProfit": 0,

        // Collection of sales (empty to begin with)
        "sales": []
    };


    $scope.makeSale = function (pet) {

        var legTaxPercent = pet.legs * $scope.LegTaxPercentPerLeg;

        var VATAmount = pet.price * ($scope.VATPercent / 100);
        var netPrice = pet.price - VATAmount;
        var legTaxAmount = netPrice * (legTaxPercent / 100);
        var profit = netPrice - legTaxAmount;

        var sale = {
            "name": pet.name,
            "grossPrice": pet.price,
            "legTax": legTaxAmount,
            "VAT": VATAmount,
            "profit": profit
        };

        $scope.saleInfo.sales.push(sale);

        $scope.saleInfo.totalGrossSales += sale.grossPrice;
        $scope.saleInfo.totalLegTax += sale.legTax;
        $scope.saleInfo.totalVAT += sale.VAT;
        $scope.saleInfo.totalProfit += sale.profit;

        console.log($scope.saleInfo);

    };

    // Alternative - calculate at end rather than on the fly...

    //$scope.calculateTotalGrossPrice = function(sales) {
    //    var total = 0;
    //    sales.forEach(function(sale){
    //        total += sale.grossPrice;
    //    });
    //    return total;
    //};
});