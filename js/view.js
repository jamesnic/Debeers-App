 export class View{
    constructor(theView){
        this.theView = theView;
        this.buttons = [
            {id:1, name: "btn1", value: "btn1"},
            {id:2, name: "btn2", value: "btn2"},
            {id:3, name: "btn3", value: "btn3"},
            {id:4, name: "btn4", value: "btn4"},
            {id:5, name: "btn5", value: "btn5"},
            {id:6, name: "btn6", value: "btn6"},
            {id:7, name: "btn7", value: "btn7"}
        ];
    }
    TimeView(){
        this.theView.appendChild("<div class='time-view'>dd</div>");
    }
    ButtonsView(){
        var _view = "<div class='btn-view'>";
        this.buttons.forEach(function (item) {
            _view += "<div data-id='"+item.id+"' data-value='"+item.value+"' class='btn'>"+item.name+"</div>";
        });
        _view += "</div>";
        console.log(this.theView);
        this.theView.appendChild(_view);
    }
}