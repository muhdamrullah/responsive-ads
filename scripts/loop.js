$(function(){

var picCount=0;  
var picArray= ["http://bit.ly/1uxYSSb","http://bit.ly/1oOrsO6","http://design.ubuntu.com/wp-content/uploads/ubuntu-logo32.png","https://media.giphy.com/media/xTiQymeVWS8KUMeSpa/giphy.gif"];
nextPic();

function nextPic() { 
   picCount=(picCount+1<picArray.length) ? picCount+1 : 0;
   $("#HomeRooms img").prop('src', picArray[picCount]);
   setTimeout(function() {
       nextPic();},6000);
  }
});
