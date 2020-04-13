"use strict"

const url = "http://localhost:3000/api"

async function update(url) {
    try {
        const resp = await fetch(url);
        const data = await resp.json();
        const newElem = document.createElement('h1');
        newElem.innerHTML = data.msg;
        document.getElementById('app').appendChild(newElem);
    } catch (error) {
        document.getElementById('app').innerHTML = error;
    }
}

update(url);
