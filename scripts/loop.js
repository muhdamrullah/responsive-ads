$(function(){

var picCount=0;  
var picArray= ["https://media.giphy.com/media/l4hLy5WvoC7mA6vPq/giphy.gif","https://media.giphy.com/media/26CYzLeA6jmwetE9W/giphy.gif","https://media.giphy.com/media/3o85fVTFUtaFUhB1Ze/giphy.gif","https://media.giphy.com/media/l0LIX7gSPKtg8oHT2/giphy.gif"];
nextPic();

function nextPic() { 
   picCount=(picCount+1<picArray.length) ? picCount+1 : 0;
   $("#HomeRooms img").prop('src', picArray[picCount]);
   setTimeout(function() {
       nextPic();},3000);
  }
});
