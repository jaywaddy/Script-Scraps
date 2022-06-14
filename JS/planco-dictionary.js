// To run script:
// 1. Visit https://planetcoaster.com/planco-dictionary
// 2. Run script in console

// To copy data:
// 1. Right click on the new object and select 'save as global variable'
// 2. Run 'copy(temp1)' in the console

const cards = Array.from(document.querySelectorAll('.c-dictionary-list__content-inner-item'));

cards.map(entry => {
    let eng = entry.children[0].children[1].textContent.trim();
    let plc = entry.children[1].children[1].textContent.trim();
    let pos = entry.children[0].children[2].textContent.trim();
    let pro = entry.children[1].children[2].textContent.trim();

    return {"eng": eng, "plc": plc, "pos": pos, "pro": pro};
});