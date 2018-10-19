import createPanZoom from "panzoom";

console.log('Test');

document.addEventListener('load', () => {

    var area = document.querySelector('.map') as HTMLElement;
    createPanZoom(area, {});
});