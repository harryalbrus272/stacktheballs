var box = $("#ball-stack");
var colors = [ 'red', 'blue', 'yellow', 'lightgrey', 'darkorchid', 'black', 'orange', 'deeppink', 'green', 'purple', 'saddlebrown', 'lightseagreen', 'deepskyblue', 'firebrick' ,'crimson'];
$("#initiator").click(function(){
    box.append('<div class = "ball" style = "background-color:' +colors[Math.floor(Math.random()*15)]+ '"></div>');
});