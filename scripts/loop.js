$(function(){

var picCount=0;  
var picArray= [
   'https://i.imgur.com/RvtwB06.jpg',
   'https://i.imgur.com/v6twhPo.jpg',
   'https://i.imgur.com/eCHMDaC.jpg',
   'http://i.imgur.com/6OqXqqY.jpg',
   "http://i.imgur.com/84riGwY.jpg",
];
nextPic();

function nextPic() { 
   picCount=(picCount+1<picArray.length) ? picCount+1 : 0;
   $("#HomeRooms img").prop('src', picArray[picCount]);
   setTimeout(function() {
       nextPic();},7000);
  }
});
