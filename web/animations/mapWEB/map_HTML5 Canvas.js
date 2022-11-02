(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"map_HTML5 Canvas_atlas_1", frames: [[0,0,1222,1103]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Installation = function() {
	this.initialize(ss["map_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Termometr = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("termometer");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("Ak6E7IAAp1IJ1AAIAAJ1g");
	this.shape.setTransform(-0.5,1);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-30.5,63,63);


(lib.Stoyka = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("stoyka");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00FF00").ss(2,1,1).p("AjlQfMAAAgt7IH9AAMAAAAt7EAhcAUFIAAJYEghbAddIAApY");
	this.shape.setTransform(-23,33.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EghbAfQIAAjmIAApYIAAjmId2AAMAAAgt7IH9AAMAAAAt7IdEAAIAADmIAAJYIAADmg");
	this.shape_1.setTransform(-23,44.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-238,-156.4,430,400.9);


(lib.Spiral = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("metal");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Ar8g2IX5AAIAABtI35AAg");
	this.shape.setTransform(2.8,5.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066CC").s().p("Ar8A3IAAhtIX5AAIAABtg");
	this.shape_1.setTransform(2.8,5.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74.7,-1,155,13);


(lib.Ommeter = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("ommeter");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("Al7HqIAAvTIL3AAIAAPTg");
	this.shape.setTransform(-0.35,-0.175);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.3,-49.1,76,97.9);


(lib.Gaz = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("burner");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Aq0/KIVpAAMAAAA+VI1pAAg");
	this.shape.setTransform(8.575,-8.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0000CC").s().p("Aq0fLMAAAg+UIVpAAMAAAA+Ug");
	this.shape_1.setTransform(8.575,-8.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.7,-208.6,140.60000000000002,400.9);


// stage content:
(lib.map_HTML5Canvas = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_2
	this.instance = new lib.Stoyka();
	this.instance.setTransform(586,254.25,0.6421,0.7379,0,-10.4004,-9.534);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Stoyka(), 3);

	this.instance_1 = new lib.Gaz();
	this.instance_1.setTransform(876.2,430.75,1.2154,1.0934,0,0,0,8.6,-8.2);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.Gaz(), 3);

	this.instance_2 = new lib.Spiral();
	this.instance_2.setTransform(550.05,96.7,2.2829,3.8439,0,-45.1568,0.8134,2.9,5.7);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.Spiral(), 3);

	this.instance_3 = new lib.Ommeter();
	this.instance_3.setTransform(670.95,691.75,2.7546,3.5013,0,0,0,-0.3,-0.1);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 2, false, new lib.Ommeter(), 3);

	this.instance_4 = new lib.Termometr();
	this.instance_4.setTransform(190.55,443.5,2.2699,1.9094,0,0,0,-0.5,1);
	new cjs.ButtonHelper(this.instance_4, 0, 1, 2, false, new lib.Termometr(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой_1
	this.instance_5 = new lib.Installation();
	this.instance_5.setTransform(0,0,0.7984,0.7984);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(487.5,440,488.20000000000005,440.70000000000005);
// library properties:
lib.properties = {
	id: '28A4EECAC56FB8499FC278D42195A9DE',
	width: 975,
	height: 880,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/map_HTML5 Canvas_atlas_1.png?1665612187198", id:"map_HTML5 Canvas_atlas_1"},
		{src:"sounds/burner.mp3?1665612187225", id:"burner"},
		{src:"sounds/metal.mp3?1665612187225", id:"metal"},
		{src:"sounds/ommeter.mp3?1665612187225", id:"ommeter"},
		{src:"sounds/stoyka.mp3?1665612187225", id:"stoyka"},
		{src:"sounds/termometer.mp3?1665612187225", id:"termometer"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['28A4EECAC56FB8499FC278D42195A9DE'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;