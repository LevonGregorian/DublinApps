function mpop() {
  mpop=1;
}
function newshowhide (arrow,text) {
	if (text.style.display === 'none') {
	text.style.display = "block"
	arrow.style.backgroundImage = "url('resources/-.png')";
 } else {
	 text.style.display = "none"
 	 arrow.style.backgroundImage = "url('resources/+.png')";
 }
}
function MostPopular(spoiler) {
  if (spoiler.style.display === 'none') {
    spoiler.style.display = "block"
    document.getElementById('popc1').style.backgroundColor="#464659"
    document.getElementById('popc0').style.backgroundColor="#c9c9ca"
    mpop=1;
  } else {
    spoiler.style.display = "none"
    mpop=0;
  }
}

function Recent(spoiler) {
  if (spoiler.style.display === 'none') {
    spoiler.style.display = "block"
    document.getElementById('popc0').style.backgroundColor="#464659"
    document.getElementById('popc1').style.backgroundColor="#c9c9ca"
    mpop=1;
  } else {
    spoiler.style.display = "none"
    mpop=0;
  }
}
function popularhide(spoiler) {
  if (mpop == '1') {
  spoiler.style.display = "none";
}
}
