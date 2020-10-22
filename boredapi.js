const http = require("https");

class Activity {
    constructor(description, 
                accessibility, 
                type,
                participants,
                price,
                key) {
        this.description = description;
        this.accessibility = accessibility;
        this.type = type;
        this.participants = participants;
        this.price = price;
        this.key = key;

    }
}

function getActivity() {
    return new Promise((resolve, reject) => {
        http.get("https://www.boredapi.com/api/activity/", function (res) {

            let body = "";

            res.on("data", (d) => {
                body += d;
            })

            res.on("end", function () {
                json = JSON.parse(body);
                var a = new Activity(json.activity, json.accessibility, json.type, json.participants, json.price, json.key);
                resolve(a);
            });

            res.on("error", error => {
                reject(error);
            })
        })
    })
}


function findActivity(key) {
    return new Promise((resolve, reject) => {
        http.get("https://www.boredapi.com/api/activity?key=" + key, function (res) {

            let body = "";

            res.on("data", (d) => {
                body += d;
            })

            res.on("end", function () {
                json = JSON.parse(body);
                var a = new Activity(json.activity, json.accessibility, json.type, json.participants, json.price, json.key);
                resolve(a);
            });

            res.on("error", error => {
                reject(error);
            })
        })
    })
}

function getActivityByType(type) {
    return new Promise((resolve, reject) => {
        http.get("https://www.boredapi.com/api/activity?type=" + type, function (res) {

            let body = "";

            res.on("data", (d) => {
                body += d;
            })

            res.on("end", function () {
                json = JSON.parse(body);
                var a = new Activity(json.activity, json.accessibility, json.type, json.participants, json.price, json.key);
                resolve(a);
            });

            res.on("error", error => {
                reject(error);
            })
        })
    })
}

function getActivityByParticipants(participants) {
    return new Promise((resolve, reject) => {
        http.get("https://www.boredapi.com/api/activity?participants=" + participants, function (res) {

            let body = "";

            res.on("data", (d) => {
                body += d;
            })

            res.on("end", function () {
                json = JSON.parse(body);
                var a = new Activity(json.activity, json.accessibility, json.type, json.participants, json.price, json.key);
                resolve(a);
            });

            res.on("error", error => {
                reject(error);
            })
        })
    })
}

function getActivityByPrice(price) {
    return new Promise((resolve, reject) => {
        http.get("https://www.boredapi.com/api/activity?price=" + price, function (res) {

            let body = "";

            res.on("data", (d) => {
                body += d;
            })

            res.on("end", function () {
                json = JSON.parse(body);
                var a = new Activity(json.activity, json.accessibility, json.type, json.participants, json.price, json.key);
                resolve(a);
            });

            res.on("error", error => {
                reject(error);
            })
        })
    })
}

function getActivityByPriceRange(minPrice, maxPrice) {
    return new Promise((resolve, reject) => {
        http.get("https://www.boredapi.com/api/activity?minprice=" + minPrice + "&maxprice="+ maxPrice, function (res) {

            let body = "";

            res.on("data", (d) => {
                body += d;
            })

            res.on("end", function () {
                json = JSON.parse(body);
                var a = new Activity(json.activity, json.accessibility, json.type, json.participants, json.price, json.key);
                resolve(a);
            });

            res.on("error", error => {
                reject(error);
            })
        })
    })
}

function getActivityByAccessibility(accessibility) {
    return new Promise((resolve, reject) => {
        http.get("http://www.boredapi.com/api/activity?accessibility=" + accessibility, function (res) {

            let body = "";

            res.on("data", (d) => {
                body += d;
            })

            res.on("end", function () {
                json = JSON.parse(body);
                var a = new Activity(json.activity, json.accessibility, json.type, json.participants, json.price, json.key);
                resolve(a);
            });

            res.on("error", error => {
                reject(error);
            })
        })
    })
}

function getActivityByAccessibilityRange(minAccessibility, maxAccessibility) {
    return new Promise((resolve, reject) => {
        http.get("https://www.boredapi.com/api/activity?minaccessibility=" + minPrice + "&maxaccessibility="+ maxPrice, function (res) {

            let body = "";

            res.on("data", (d) => {
                body += d;
            })

            res.on("end", function () {
                json = JSON.parse(body);
                var a = new Activity(json.activity, json.accessibility, json.type, json.participants, json.price, json.key);
                resolve(a);
            });

            res.on("error", error => {
                reject(error);
            })
        })
    })
}

exports.getActivity = getActivity;
exports.getActivityByAccessibility = getActivityByAccessibility;
exports.getActivityByAccessibilityRange = getActivityByAccessibilityRange;
exports.getActivityByParticipants = getActivityByParticipants;
exports.getActivityByPrice = getActivityByPrice;
exports.getActivityByPriceRange = getActivityByPriceRange;
exports.getActivityByType = getActivityByType;