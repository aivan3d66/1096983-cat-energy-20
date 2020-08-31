'use strict';

var initSlider = () => {

    const updateSlider = (posInPersents) => {
        sliderItem.style.width = posInPersents + '%';
        sliderRangePointer.style.left = (posInPersents - 100 * (sliderRangePointer.offsetWidth / 2) / sliderRange.offsetWidth) + '%';
    }

    const sliderRangePointerOnMouseUp = () => {
        posInPersents = posInPersents + shiftInPersents;

        window.removeEventListener('mousemove', sliderRangePointerOnMouseMove);
        window.removeEventListener('mouseup', sliderRangePointerOnMouseUp);
    }

    const sliderRangePointerOnMouseMove = (event) => {
        end = event.clientX;
        shift = end - start;

        shiftInPersents = 100 * shift / sliderRange.offsetWidth;

        if (posInPersents + shiftInPersents >= 0 && posInPersents + shiftInPersents <= 100) {
            updateSlider(posInPersents + shiftInPersents)
        }
    }

    const sliderRangePointerOnMouseDown = (event) => {
        start = event.clientX;

        window.addEventListener('mousemove', sliderRangePointerOnMouseMove);
        window.addEventListener('mouseup', sliderRangePointerOnMouseUp);
    }

    const slider = document.querySelector('.example__slider');
    const sliderItem = slider.querySelector('.example__item-cat');
    const sliderRange = slider.querySelector('.example__range-wrapper');
    const sliderRangePointer = slider.querySelector('.example__range');
    sliderRangePointer.addEventListener('mousedown', sliderRangePointerOnMouseDown);

    let posInPersents = 50;
    updateSlider(posInPersents);

    let start = null;
    let shift = null;
    let shiftInPersents = null;
    let end = null;

    const sliderButtonBefore = slider.querySelector('.btn-before');
    const sliderButtonAfter = slider.querySelector('.btn-after');

    sliderButtonBefore.addEventListener('click', function() {
        posInPersents = 0;
        updateSlider(posInPersents);
    });

    sliderButtonAfter.addEventListener('click', function() {
        posInPersents = 100;
        updateSlider(posInPersents);
    });

}

window.addEventListener('load', initSlider);
