function insert(num){
	document.fform.result.value = document.fform.result.value+num;
}	
function equal() {
	var exp = document.fform.result.value;
	if (exp) {
	document.fform.result.value = eval(exp)
	}
}
function clean(){
	document.fform.result.value = "";
}
function del(){
	var exp = document.fform.result.value;
	document.fform.result.value = exp.substring(0,exp.length-1);
}
window.setTimeout("waktu()",1000);
function waktu() {
	var tanggal = new Date();
	setTimeout("waktu()",1000);
	document.getElementById("jam").innerHTML = tanggal.getHours();
	document.getElementById("menit").innerHTML = tanggal.getMinutes();
	document.getElementById("detik").innerHTML = tanggal.getSeconds();
}
function play(){
	var audio = document.getElementById("audio");
	var button = document.getElementsByClassName("tombol");
	audio.play();
	button.play();
	fform.play();
			  }