'use strict';

let tasks = new Promise(function (resolve, reject) {
    setTimeout(resolve, 500)
});

tasks
    .then(function () {
        console.log('task 1')
    })
    .then(function () {
        return new Promise(function (resolve, reject) {
            setTimeout(resolve, 1000)
        })
    })
    .then(function () {
        console.log('task 2')
    })
    .then(function () {
        return new Promise(function (resolve, reject) {
            setTimeout(resolve, 1000)
        })
    })
    .then(function () {
        console.log('task 3')
    })
    .then(function () {
        return new Promise(function (resolve, reject) {
            setTimeout(resolve, 1000)
        })
    })
    .then(function () {
        console.log('task 4')
    })