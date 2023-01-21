for (var i = 0; i < document.querySelectorAll(".Guitar").length; i++) {
    document.querySelectorAll(".Guitar")[i].addEventListener("click", function () {
        var ButtoninnerHTML = this.innerHTML;
         
        switch (ButtoninnerHTML) {
            case "Guitar":
                var Guitar = new Audio("sounds/Guitar-sou.mp3");
                Guitar.play();
                break;
            case "Cymbal":
                var Cymbal = new Audio("sounds/Cymbal-sou.mp3");
                Cymbal.play();
                break;
            case "French.":
                var french = new Audio("sounds/French.h.mp3");
                french.play();
                break;
            case "Trumpet":
                var trumpet = new Audio("sounds/trumpet-sou.mp3");
                trumpet.play();
                break;
            case "Piano":
                var piano = new Audio("sounds/piano-sou.mp3");
                piano.play();
                break;
            case "Bongo":
                var Bongo = new Audio("sounds/Bongo-sou.mp3");
                Bongo.play();
                break;
            case "Sitar":
                var Sitar = new Audio("sounds/Sitar-sou.mp3");
                Sitar.play();
                break;
            case "saxop.":
                var saxophone = new Audio("sounds/saxophone-sou.mp3");
                saxophone.play();
                break;
            default:
                break;
        }      
    });
}
document.addEventListener("keypress", function (event) {
    makesound(event.key);
});

function makesound(key) {
    switch (key) {
        case "a":
            var Guitar = new Audio("sounds/Guitar-sou.mp3");
            Guitar.play();
            break;
        case "s":
            var Cymbal = new Audio("sounds/Cymbal-sou.mp3");
            Cymbal.play();
            break;
        case "d":
            var french = new Audio("sounds/French.h.mp3");
            french.play();
            break;
        case "f":
            var trumpet = new Audio("sounds/trumpet-sou.mp3");
            trumpet.play();
            break;
        case "h":
            var piano = new Audio("sounds/piano-sou.mp3");
            piano.play();
            break;
        case "j":
            var Bongo = new Audio("sounds/Bongo-sou.mp3");
            Bongo.play();
            break;
        case "k":
            var Sitar = new Audio("sounds/Sitar-sou.mp3");
            Sitar.play();
            break;
        case "l":
            var saxophone = new Audio("sounds/saxophone-sou.mp3");
            saxophone.play();
            break;
        default:
            break;
    }
}