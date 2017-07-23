/*global Object for storing slide var and functions*/
var slideObj = {}
/*initiate the object*/
initSlideObj()

function initSlideObj(){
	slideObj.currentIndex = 0;//current index
	slideObj.nextIndex = 1;//next index
	slideObj.slides = document.querySelectorAll('.mySlides');//get all the slides
	slideObj.slideCap = document.querySelector('.slideCap')//get all the caps
	slideObj.bgColors = ['#ff5555','#00ff00','#0000ff']//set the cap bg colors
	slideObj.imgCaps = document.querySelectorAll('.imgCap')//get the img caps
	slideObj.dashes = document.querySelectorAll('.dash')//get the dashes
	/*show the slide*/
	slideObj.showSlides = function(){
		Velocity(slideObj.slides[slideObj.currentIndex], { left: -800 }, { duration: 1000 })
		Velocity(slideObj.slides[slideObj.currentIndex], { left: 800 }, { duration: 0 })
		Velocity(slideObj.imgCaps[slideObj.currentIndex], { opacity: 0 },{display:'none'} ,{ duration: 1000 })
		slideObj.imgCaps[slideObj.currentIndex].style.display = 'none'
		slideObj.dashes[slideObj.currentIndex].classList.remove('activeDash')

		Velocity(slideObj.slides[slideObj.nextIndex], { left: 0 }, { duration: 1000 })
		Velocity(slideObj.slideCap, { backgroundColor: slideObj.bgColors[slideObj.nextIndex],backgroundColorAlpha: 0.85 }, { duration: 1000 })
		Velocity(slideObj.imgCaps[slideObj.nextIndex], { opacity: 1 },{display:'inline'} ,{ duration: 1000 })
		slideObj.imgCaps[slideObj.nextIndex].style.display = 'inline'
		slideObj.dashes[slideObj.nextIndex].classList.add('activeDash')
		
		slideObj.currentIndex = slideObj.nextIndex
		slideObj.nextIndex++
		if(slideObj.nextIndex === slideObj.slides.length){
				slideObj.nextIndex = 0
			}
		slideObj.toId = window.setTimeout(function(){
			slideObj.showSlides()
		},2000)
	}
	/*show clicked slide*/
	slideObj.changeSlide = function(i){
		if(i === slideObj.currentIndex){
			return
		}
		window.clearTimeout(slideObj.toId)
		slideObj.nextIndex = i
	    slideObj.showSlides()	
	}

	/*after 2s, begin auto slides*/
	slideObj.toId = window.setTimeout(function(){
		slideObj.showSlides()
	},2000)

	/*click events*/
	for(let i=0,n=slideObj.dashes.length;i<n;i++){
		slideObj.dashes[i].addEventListener('click',function(e){
			slideObj.changeSlide(i)
		},false)
	}
}