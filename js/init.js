import {View} from './view.js'
(function() {
    console.log(this);
    console.log(document.getElementById("wrapper"));
    var view = new View(document.getElementById("wrapper"));
    view.TimeView();
    view.ButtonsView();
})();
