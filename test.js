/**
 * Created by DRU on 04.08.2014.
 */

window.onload = function() {
	var canvas = new fabric.Canvas('c');

	//Animation

	//One Play Svg Animation
	new fabric.SvgAnimation('/assets/animation.svg', function(obj){
		obj.set({
			left: 0,
			top: 150
			//,loop: true
		});

		obj.onePlay().setDelay(100);
		canvas.add(obj).renderAll();
	});

	//One Play Svg Animation
	new fabric.SvgAnimation('/assets/animation.svg', function(obj){
		obj.set({
			left: 330,
			top: 150
		});
		obj.onePlay().setDelay(100);
		canvas.add(obj).renderAll();
	});

	//Play object in loop
	new fabric.SvgAnimation('/assets/animation.svg', function(obj){
		obj.play().setDelay(100);
		canvas.centerObject(obj).add(obj).renderAll();
	});

};
