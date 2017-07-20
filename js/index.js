//if show the first screen
var fSShow = true;
var details = document.querySelector('#details')
console.log(document.body.offsetTop)
console.log(details.offsetTop)

document.addEventListener('mousewheel',function(e){
	//console.log('wheelDelta and deltaY:'+e.wheelDelta+','+e.deltaY)
	var scrollDown = e.deltaY>0?true:false
	if(scrollDown && fSShow){
		details.classList.add('slideTop')
		return 
	}
	console.log(document.body.offsetTop)
	console.log(document.body.scrollTop)
    console.log(details.offsetTop)
},false);