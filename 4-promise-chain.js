'use strict';

let tasks = new Promise(function (resolve, reject) {
    setTimeout(resolve, 500)
});

tasks
    .then(function () {
        console.log('task 1');
    })
    .then(function () {
        return new Promise(function (resolve, reject) {
            setTimeout(resolve, 1000)
        })
    })
    .then(function () {
        console.log('task 2');
    })
    .then(function () {
        return new Promise(function (resolve, reject) {
            setTimeout(reject, 1000)
        })
    })
    .then(function () {
        console.log('task 3');
    })
    .catch(function (err) {
        console.log('fail 1'); //task 1 task 2 fail 1 task 4
    })
    .then(function () {
        return new Promise(function (resolve, reject) {
            setTimeout(resolve, 1000)
        })
    })
    .then(function () {
        console.log('task 4');
        return Promise.reject();
    })
    .catch(function (err) {
        console.log('fail 2');
        return new Promise(function (resolve, reject) {
            setTimeout(reject, 1000)
        })
    })
    .catch(function (err) {
        console.log('fail 3');
    });