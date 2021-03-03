"use strict";


document.addEventListener("DOMContentLoaded", start);

let paint;

let link1 = "shoe_1.svg";
let link2 = "shoe_2.svg";


function start() {

    getSvgInfo1();

    getSvgInfo2();

};

async function getSvgInfo1() {

    let response1 = await fetch(link1);
    let object1 = await response1.text();

    document.querySelector("#shoe1").innerHTML = object1;

    interActivity();

};

async function getSvgInfo2() {

    let response2 = await fetch(link2);
    let object2 = await response2.text();

    document.querySelector("#shoe2").innerHTML = object2;

    interActivity();

};

function interActivity() {

    document.querySelectorAll(".interact").forEach(eachG => {

        eachG.addEventListener("click", theClick);
        eachG.addEventListener("mouseover", theMouseover);
        eachG.addEventListener("mouseout", theMouseout);

    });

    document.querySelectorAll(".color_btn").forEach(each_BTN => {

        each_BTN.addEventListener("click", colorClick);

    });

};

function theClick() {
    paint = this;

    this.style.fill = "grey";

};

function theMouseover() {

    this.style.stroke = "blue";

};

function theMouseout() {

    this.style.stroke = "none";

};

function colorClick() {

    if (paint != undefined) {
        paint.style.fill = this.getAttribute("fill");
    }
};
