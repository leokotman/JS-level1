"use strict";

let mover = {
    /**
     * Получает и отдает направление от пользователя
     * @returns {int} Возвращаем направление от пользователя
     */
    getDirection() {
        const availableDirections = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        while (true) {
            let direction = parseInt(prompt("Введите число, куда вы хотите переместиться от 1 до 9 (2-вниз,4-влево,6-вправо,8-вверх, 5-середина, 1/3/7/9-диагонали) или нажмите 'отмена' для выхода"));
            if (isNaN(direction)) {
                return null;
            }
            if (!availableDirections.includes(direction)) {
                alert("Для перемещения нужно ввести одно из чисел 1/ 2/ 3/ 4/ 5/ 6/ 7/ 8/ 9, или нажмите 'отмена' для выхода");
                continue;
            }
            return direction;
        }
    },

    /**
     * Отдаёт следующую точку расположения игрока
     * @param {int} direction Направление движения игрока
     * @returns {{x: int, y: int}} Следующая позиция игрока
     */
    getNextPosition(direction) {
        const nextPosition = {
            x: player.x,
            y: player.y
        };
        switch (direction) {
            //идет вниз
            case 2:
                nextPosition.y++;
                break;
            //идет влево
            case 4:
                nextPosition.x--;
                break;
            //идет вправо
            case 6:
                nextPosition.x++;
                break;
            //идет вверх
            case 8:
                nextPosition.y--;
                break;
            //идет по диагонали влево вниз
            case 1:
                nextPosition.y++;
                nextPosition.x--;
                break;
            //идет по диагонали вправо вниз
            case 3:
                nextPosition.y++;
                nextPosition.x++;
                break;
            //идет по диагонали влево вверх
            case 7:
                nextPosition.y--;
                nextPosition.x--;
                break;
            //идет по диагонали вправо вверх
            case 9:
                nextPosition.y--;
                nextPosition.x++;
                break;
            case 5:
                nextPosition.x;
                nextPosition.y;
                break;
        }
        return nextPosition;
    }
};
