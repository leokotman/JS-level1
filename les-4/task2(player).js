"use strict";

/**
 * Объект игрока - его методы и свойства
 * @property {int} x - Позиция по X-координате
 * @property {int} y - Позиция по Y-координате
 */
const player = {
    x: 0,
    y: 0,
    /**
     * Двигает игрока в переданном направлении
     * @param {{x: int, y: int}} nextPoint - Следующая точка пользователя
     */
    move(nextPoint) {
        //добавил рамку для границ поля (от 0 до 10)
        if (nextPoint.x >= 0 && nextPoint.y >= 0 &&
            nextPoint.x < 10 && nextPoint.y < 10) {
            this.x = nextPoint.x;
            this.y = nextPoint.y;
        }
    }
}