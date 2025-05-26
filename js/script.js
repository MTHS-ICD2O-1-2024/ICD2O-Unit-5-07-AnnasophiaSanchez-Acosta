// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall updated by Anna S.
// Created on: May 2025
// This file contains the JS functions for index.html


"use strict"

function calculate() {
  let answer = 0
  let integer = parseInt(document.getElementById("integer").value)

  for (let counter = 1; counter <= integer; counter++) {
    answer = answer + counter
  }
  document.getElementById("answer").innerHTML =
    "<p>The answer is " + answer + ".</p>"
}