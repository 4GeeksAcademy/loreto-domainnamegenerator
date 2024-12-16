/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  //for loop
  let listForLoop = "";
  for (let index = 0; index < pronoun.length; index++) {
    for (let indexAdj = 0; indexAdj < adj.length; indexAdj++) {
      for (let indexNoun = 0; indexNoun < noun.length; indexNoun++) {
        listForLoop += `
        <li class="list-group-item">
        ${pronoun[index]}${adj[indexAdj]}${noun[indexNoun]}.com
        </li>`;
      }
    }
  }

  //for in
  let listForIn = "";
  for (const keyPronoun in pronoun) {
    for (const keyAdj in adj) {
      for (const keyNoun in noun) {
        listForIn += `
        <li class="list-group-item">
        ${pronoun[keyPronoun]}${adj[keyAdj]}${noun[keyNoun]}.org
        </li>
        `;
      }
    }
  }

  //for of
  let listForOf = "";
  for (const elementPronoun of pronoun) {
    for (const elementAdj of adj) {
      for (const elementNoun of noun) {
        listForOf += `
        <li class="list-group-item"> 
        ${elementPronoun}${elementAdj}${elementNoun}.es
        </li>
        `;
      }
    }
  }

  //Map
  let listMap = "";
  pronoun.map(itemPronoun => {
    let domain = ".net";
    adj.map(itemAdj => {
      noun.map(itemNoun => {
        listMap += `
         <li class="list-group-item">
         ${itemPronoun}${itemAdj}${itemNoun}${domain}
         </li>
         `;
      });
    });
  });

  document.querySelector("#for-loop").innerHTML = listForLoop;
  document.querySelector("#for-in").innerHTML = listForIn;
  document.querySelector("#for-of").innerHTML = listForOf;
  document.querySelector("#map").innerHTML = listMap;

  console.log("Hello Rigo from the console!");
};
