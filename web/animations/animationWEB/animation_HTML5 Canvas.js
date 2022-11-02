(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"animation_HTML5 Canvas_atlas_1", frames: [[0,0,1222,1103]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.currentSoundStreamInMovieclip;
	this.soundStreamDuration = new Map();
	this.streamSoundSymbolsList = [];

	this.gotoAndPlayForStreamSoundSync = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.gotoAndPlay = function(positionOrLabel){
		this.clearAllSoundStreams();
		var pos = this.timeline.resolve(positionOrLabel);
		if (pos != null) { this.startStreamSoundsForTargetedFrame(pos); }
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(this.currentFrame);
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
		this.clearAllSoundStreams();
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
		this.clearAllSoundStreams();
	}
	this.startStreamSoundsForTargetedFrame = function(targetFrame){
		for(var index=0; index<this.streamSoundSymbolsList.length; index++){
			if(index <= targetFrame && this.streamSoundSymbolsList[index] != undefined){
				for(var i=0; i<this.streamSoundSymbolsList[index].length; i++){
					var sound = this.streamSoundSymbolsList[index][i];
					if(sound.endFrame > targetFrame){
						var targetPosition = Math.abs((((targetFrame - sound.startFrame)/lib.properties.fps) * 1000));
						var instance = playSound(sound.id);
						var remainingLoop = 0;
						if(sound.offset){
							targetPosition = targetPosition + sound.offset;
						}
						else if(sound.loop > 1){
							var loop = targetPosition /instance.duration;
							remainingLoop = Math.floor(sound.loop - loop);
							if(targetPosition == 0){ remainingLoop -= 1; }
							targetPosition = targetPosition % instance.duration;
						}
						instance.loop = remainingLoop;
						instance.position = Math.round(targetPosition);
						this.InsertIntoSoundStreamData(instance, sound.startFrame, sound.endFrame, sound.loop , sound.offset);
					}
				}
			}
		}
	}
	this.InsertIntoSoundStreamData = function(soundInstance, startIndex, endIndex, loopValue, offsetValue){ 
 		this.soundStreamDuration.set({instance:soundInstance}, {start: startIndex, end:endIndex, loop:loopValue, offset:offsetValue});
	}
	this.clearAllSoundStreams = function(){
		this.soundStreamDuration.forEach(function(value,key){
			key.instance.stop();
		});
 		this.soundStreamDuration.clear();
		this.currentSoundStreamInMovieclip = undefined;
	}
	this.stopSoundStreams = function(currentFrame){
		if(this.soundStreamDuration.size > 0){
			this.soundStreamDuration.forEach(function(value,key,arr){
				if((value.end) == currentFrame){
					key.instance.stop();
					if(this.currentSoundStreamInMovieclip == key) { this.currentSoundStreamInMovieclip = undefined; }
					arr.delete(key);
				}
			});
		}
	}

	this.computeCurrentSoundStreamInstance = function(currentFrame){
		if(this.currentSoundStreamInMovieclip == undefined){
			if(this.soundStreamDuration.size > 0){
				var maxDuration = 0;
				this.soundStreamDuration.forEach(function(value,key){
					if(value.end > maxDuration){
						maxDuration = value.end;
						this.currentSoundStreamInMovieclip = key;
					}
				});
			}
		}
	}
	this.getDesiredFrame = function(currentFrame, calculatedDesiredFrame){
		for(var frameIndex in this.actionFrames){
			if((frameIndex > currentFrame) && (frameIndex < calculatedDesiredFrame)){
				return frameIndex;
			}
		}
		return calculatedDesiredFrame;
	}

	this.syncStreamSounds = function(){
		this.stopSoundStreams(this.currentFrame);
		this.computeCurrentSoundStreamInstance(this.currentFrame);
		if(this.currentSoundStreamInMovieclip != undefined){
			var soundInstance = this.currentSoundStreamInMovieclip.instance;
			if(soundInstance.position != 0){
				var soundValue = this.soundStreamDuration.get(this.currentSoundStreamInMovieclip);
				var soundPosition = (soundValue.offset?(soundInstance.position - soundValue.offset): soundInstance.position);
				var calculatedDesiredFrame = (soundValue.start)+((soundPosition/1000) * lib.properties.fps);
				if(soundValue.loop > 1){
					calculatedDesiredFrame +=(((((soundValue.loop - soundInstance.loop -1)*soundInstance.duration)) / 1000) * lib.properties.fps);
				}
				calculatedDesiredFrame = Math.floor(calculatedDesiredFrame);
				var deltaFrame = calculatedDesiredFrame - this.currentFrame;
				if(deltaFrame >= 2){
					this.gotoAndPlayForStreamSoundSync(this.getDesiredFrame(this.currentFrame,calculatedDesiredFrame));
				}
			}
		}
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Installation = function() {
	this.initialize(ss["animation_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.BStop = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {bstop:2};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Al7F8IAAr3IL3AAIAAL3g");
	this.shape.setTransform(263.5,-166);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(225.5,-204,76,76);


(lib.BPlay = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AlxlxILjGFIrjFeg");
	this.shape.setTransform(6,-3.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31,-40.9,74,74);


(lib.BPause = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AAtGfIAAs9IDwAAIAAM9gAkcGfIAAs9IDwAAIAAM9g");
	this.shape.setTransform(-1.5,-6.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30,-47.9,57,83);


// stage content:
(lib.animation_HTML5Canvas = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,148,354,481,572,685,821,923,967,1026];
	this.streamSoundSymbolsList[0] = [{id:"_1",startFrame:0,endFrame:148,loop:1,offset:0}];
	this.streamSoundSymbolsList[148] = [{id:"_2",startFrame:148,endFrame:354,loop:1,offset:0}];
	this.streamSoundSymbolsList[354] = [{id:"_3",startFrame:354,endFrame:481,loop:1,offset:0}];
	this.streamSoundSymbolsList[481] = [{id:"_4",startFrame:481,endFrame:572,loop:1,offset:0}];
	this.streamSoundSymbolsList[572] = [{id:"_5",startFrame:572,endFrame:685,loop:1,offset:0}];
	this.streamSoundSymbolsList[685] = [{id:"_6",startFrame:685,endFrame:821,loop:1,offset:0}];
	this.streamSoundSymbolsList[821] = [{id:"_7",startFrame:821,endFrame:923,loop:1,offset:0}];
	this.streamSoundSymbolsList[923] = [{id:"_8",startFrame:923,endFrame:967,loop:1,offset:0}];
	this.streamSoundSymbolsList[967] = [{id:"_9",startFrame:967,endFrame:1026,loop:1,offset:0}];
	this.streamSoundSymbolsList[1026] = [{id:"_10",startFrame:1026,endFrame:1114,loop:1,offset:0}];
	// timeline functions:
	this.frame_0 = function() {
		this.clearAllSoundStreams();
		 
		var soundInstance = playSound("_1",0);
		this.InsertIntoSoundStreamData(soundInstance,0,148,1);
		this.stop();
		this.bstop.addEventListener("click",()=>this.gotoAndStop(0));
		this.bpause.addEventListener("click",()=>this.stop());
		this.bplay.addEventListener("click",()=>this.play());
	}
	this.frame_148 = function() {
		var soundInstance = playSound("_2",0);
		this.InsertIntoSoundStreamData(soundInstance,148,354,1);
	}
	this.frame_354 = function() {
		var soundInstance = playSound("_3",0);
		this.InsertIntoSoundStreamData(soundInstance,354,481,1);
	}
	this.frame_481 = function() {
		var soundInstance = playSound("_4",0);
		this.InsertIntoSoundStreamData(soundInstance,481,572,1);
	}
	this.frame_572 = function() {
		var soundInstance = playSound("_5",0);
		this.InsertIntoSoundStreamData(soundInstance,572,685,1);
	}
	this.frame_685 = function() {
		var soundInstance = playSound("_6",0);
		this.InsertIntoSoundStreamData(soundInstance,685,821,1);
	}
	this.frame_821 = function() {
		var soundInstance = playSound("_7",0);
		this.InsertIntoSoundStreamData(soundInstance,821,923,1);
	}
	this.frame_923 = function() {
		var soundInstance = playSound("_8",0);
		this.InsertIntoSoundStreamData(soundInstance,923,967,1);
	}
	this.frame_967 = function() {
		var soundInstance = playSound("_9",0);
		this.InsertIntoSoundStreamData(soundInstance,967,1026,1);
	}
	this.frame_1026 = function() {
		var soundInstance = playSound("_10",0);
		this.InsertIntoSoundStreamData(soundInstance,1026,1114,1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(148).call(this.frame_148).wait(206).call(this.frame_354).wait(127).call(this.frame_481).wait(91).call(this.frame_572).wait(113).call(this.frame_685).wait(136).call(this.frame_821).wait(102).call(this.frame_923).wait(44).call(this.frame_967).wait(59).call(this.frame_1026).wait(88));

	// BTNS
	this.bstop = new lib.BStop();
	this.bstop.name = "bstop";
	this.bstop.setTransform(-216,695.9,1.0132,1);
	new cjs.ButtonHelper(this.bstop, 0, 1, 2);

	this.bpause = new lib.BPause();
	this.bpause.name = "bpause";
	this.bpause.setTransform(144.5,534.4);
	new cjs.ButtonHelper(this.bpause, 0, 1, 2);

	this.bplay = new lib.BPlay();
	this.bplay.name = "bplay";
	this.bplay.setTransform(227.8,530.75);
	new cjs.ButtonHelper(this.bplay, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bplay},{t:this.bpause},{t:this.bstop}]}).wait(1114));

	// SQR
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00FF00").ss(7,1,1).p("EAXPgleIbFAAMAAAA7dIxEAAIAAWOI94AAMAAAgmBIIcAAIVcAAIAAPzI1cAAIAAvzIAAlVI66AAMAAAgtDMAmVAAAIAAGuMAAAAmVIrbAAMAAAgmVgEgyTgJdIcuAAIAActI8uAAg");
	this.shape.setTransform(342.05,297.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#00FF00").ss(7,1,1).p("EAXPgleIbFAAMAAAA7dIxEAAIAAWOI94AAMAAAgmBIIcAAIAAlVI66AAMAAAgtDMAmVAAAgAL0A3MAAAgmVILbAAMAAAAmVgAL0GMIVcAAIAAPzI1cAAgEgyTgJdIcuAAIAActI8uAAg");
	this.shape_1.setTransform(342.05,297.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00FF00").ss(7,1,1).p("AwEj0MAgJAAAIAAHpMggJAAAg");
	this.shape_2.setTransform(360.05,72);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#00FF00").ss(7,1,1).p("AnVoqIOrAAIAARVIurAAg");
	this.shape_3.setTransform(450,474.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#00FF00").ss(7,1,1).p("APPDIIS6AAIAAKKIy6AAgEgiIgNRIQuAAIAANvIwuAAg");
	this.shape_4.setTransform(288.5,334.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#00FF00").ss(7,1,1).p("Ap1lEIGQAAIAAIlImQAAgACMlsIHqAAIAALZInqAAg");
	this.shape_5.setTransform(583,161.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#00FF00").ss(7,1,1).p("AOiCCIVaAAIAAMWI1aAAgEgj7gOXIVQAAIAAQ3I1QAAg");
	this.shape_6.setTransform(281,330.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#00FF00").ss(7,1,1).p("Ak6mUIJ1AAIAAMpIp1AAg");
	this.shape_7.setTransform(616.5,162.55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#00FF00").ss(7,1,1).p("APoCvITOAAIAAK8IzOAAgEgi1gNqISIAAIAAN5IyIAAg");
	this.shape_8.setTransform(282,333.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#00FF00").ss(7,1,1).p("AkNlYIIbAAIAAKxIobAAg");
	this.shape_9.setTransform(616,162.45);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#00FF00").ss(7,1,1).p("AylkXMAlLAAAIAAIvMglLAAAg");
	this.shape_10.setTransform(359,62.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},89).to({state:[{t:this.shape_1}]},58).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},146).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},58).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},126).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},90).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},112).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},135).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},101).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},43).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},58).to({state:[]},1).wait(88));

	// BG
	this.instance = new lib.Installation();
	this.instance.setTransform(0,0,0.5292,0.5292);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1114));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(323,291.5,344.5,292.9);
// library properties:
lib.properties = {
	id: '9D69AF797D6C7045BD56F57D806F327B',
	width: 646,
	height: 583,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/animation_HTML5 Canvas_atlas_1.png?1665611174039", id:"animation_HTML5 Canvas_atlas_1"},
		{src:"sounds/_1.mp3?1665611174484", id:"_1"},
		{src:"sounds/_10.mp3?1665611174484", id:"_10"},
		{src:"sounds/_2.mp3?1665611174484", id:"_2"},
		{src:"sounds/_3.mp3?1665611174484", id:"_3"},
		{src:"sounds/_4.mp3?1665611174484", id:"_4"},
		{src:"sounds/_5.mp3?1665611174484", id:"_5"},
		{src:"sounds/_6.mp3?1665611174484", id:"_6"},
		{src:"sounds/_7.mp3?1665611174484", id:"_7"},
		{src:"sounds/_8.mp3?1665611174484", id:"_8"},
		{src:"sounds/_9.mp3?1665611174484", id:"_9"}
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
an.compositions['9D69AF797D6C7045BD56F57D806F327B'] = {
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