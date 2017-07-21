//if show the first screen
var fSShow = true;
var details = document.querySelector('#details')
var navUl = document.querySelector('#navUl')
var offsetTops = {},intervalId
initiateOffsetTops();

document.addEventListener('mousewheel',function(e){
	var scrollDown = e.deltaY>0?true:false
	if(scrollDown && fSShow){
		details.classList.remove('slideBottom')
		details.classList.add('slideTop')
		details.focus()
		fSShow = false
		return 
	}
    if(!fSShow && details.scrollTop === 0 && !scrollDown){
    	details.classList.remove('slideTop')
    	details.classList.add('slideBottom')
    	fSShow = true
    	return
    }
},false);

navUl.addEventListener('click',function(e){
	e.preventDefault()
	var liId = e.target.getAttribute('href')
	var liClicked = document.querySelector(liId)
	if(details.classList.contains('slideTop')){
		smoothSlide(details,details.scrollTop,offsetTops[liId.slice(1)])
	}
},false)
function initiateOffsetTops(){
	var cNodes = Array.prototype.slice.call(details.childNodes)
	var eles = cNodes.filter(function(item){
		return item.nodeType ===1
	})
	var id
	for(var i=0,n=eles.length;i<n;i++){
		id = eles[i].getAttribute('id')
		offsetTops[id] = eles[i].offsetTop
	}
}
function smoothSlide(ele,start,stop){
	var increment = stop>start?5:-5,counter=0

	if(!intervalId){
	intervalId = window.setInterval(function(){
		ele.scrollTop += increment*5
		counter++
		if(counter === Math.floor(Math.abs(start-stop)/5)){
			ele.scrollTop = stop
			clearInterval(intervalId)
			intervalId = null
		}
	},1)
	}
}