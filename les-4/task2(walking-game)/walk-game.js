"use strict";

let game = {
    //запускает игру
    run() {
        while (true) {
            let direction = mover.getDirection();
            if (direction === null) {
                console.log("Игра окончена");
                return;
            }
            const nextPoint = mover.getNextPosition(direction);
            renderer.clear();
            player.move(nextPoint);
            renderer.render();
        }
    },

    //выполняется при загрузке страницы
    init() {
        console.log("Ваше положение на поле в виде 'о'.");
        renderer.render();
        console.log("Чтобы начать игру, наберите game.run() и нажмите Enter");
    }
};

game.init();