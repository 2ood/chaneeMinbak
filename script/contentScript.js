let myImage = document.querySelector('img');

myImage.onclick = changePic();

function changePic() {
	let mySrc2= myImage.getAttribute('src');
	
	if(mySrc2 === 'img/diningRoom.jpg') myImage.setAttribute('src','img/dining-room-2.jpg');
	else myImage.setAttribute('src','img/diningRoom.jpg');
}