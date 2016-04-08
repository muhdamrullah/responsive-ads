$(function(){

var picCount=0;  
var picArray= ["http://bit.ly/1uxYSSb","http://bit.ly/1oOrsO6","https://media.giphy.com/media/3o85fVTFUtaFUhB1Ze/giphy.gif","https://media.giphy.com/media/3oGRFE0qeWw4CLsP7O/giphy.gif"];
nextPic();

function nextPic() { 
   picCount=(picCount+1<picArray.length) ? picCount+1 : 0;
   $("#HomeRooms img").prop('src', picArray[picCount]);
   setTimeout(function() {
       nextPic();},3000);
  }
});
