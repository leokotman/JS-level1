"use strict";

let renderer = {
    //Отображает карту
    map: "",

    /**
     * Отображает поле в консоли 
     * (по строкам и столбцам)
     */
    render() {
        for (let row = 0; row < config.rowsNumber; row++) {
            for (let col = 0; col < config.colsNumber; col++) {
                if (player.y === row && player.x === col) {
                    this.map += "o ";
                } else {
                    this.map += 'x ';
                }
            }
            this.map += '\n';
        }
        console.log(this.map);
    },

    clear() {
        //чистим консоль
        console.clear();
        //чистим карту
        this.map = '';

    }
};