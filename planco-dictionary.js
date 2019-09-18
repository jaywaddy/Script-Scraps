const span = document.querySelectorAll('.o-dictionary-item div span');
const em = document.querySelectorAll('.o-dictionary-item div em');

let arrSpan = Array.from(span);
let arrEm = Array.from(em);

let app = [];

for (let a = 0; a < arrSpan.length; a += 2) {
    let eng = [];
    let plc = [];
    let pos = [];
    let pro = [];
    let obj = {};

    app.push(obj);

    // loop through even indexes
    for (let b = 0; b < arrSpan.length; b+=2) {
        eng.push(arrSpan[a].textContent);
        pos.push(arrEm[a].textContent);
    }

    // loop through odd indexes
    for (let b = 1; b < arrSpan.length; b+=2) {
        plc.push(arrSpan[b].textContent);
        pro.push(arrEm[b].textContent);
    }

    // Object values
    for (let i = 0; i < app.length; i++) {
        obj.eng = eng[i];
        obj.plc = plc[i];
        obj.pos = pos[i];
        obj.pro = pro[i];
    }
}
console.log(app);

/* 

To copy array: 

1) Right click in console and 'save as global variable'.
2) In console: copy(temp1)
3) Behold glory!!!!!!!!!

*/
