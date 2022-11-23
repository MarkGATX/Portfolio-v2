(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"coffee_cup_300_atlas_1", frames: [[0,0,398,581],[0,583,367,241],[0,826,378,62],[0,890,420,18],[0,910,409,18]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
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



(lib.Image = function() {
	this.initialize(ss["coffee_cup_300_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Image_0 = function() {
	this.initialize(ss["coffee_cup_300_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Image_1 = function() {
	this.initialize(ss["coffee_cup_300_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Image_2 = function() {
	this.initialize(ss["coffee_cup_300_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Image_3 = function() {
	this.initialize(ss["coffee_cup_300_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.cupwithliner = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Image_0();
	this.instance.setTransform(11.3,108.65,0.7214,0.7214);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.3,0,0,4).p("EgUYArKQBsAVC5AfQDoAjCwARQFLAhFLgBQDUAADegRQDogSDBgeQBngPCRgcQA7gLBOgSQADgZABgNMAJthV8IALAAQAvgDAAggQAAgZgZgLIgYgGIjSgJQh+gFj8gIQlAgLlAgEQlEgFlEgBQn9AAnTAKQjGAEmOAMQkeAKiLAHQgMAAgMAGQgZALAAAZQAAAUARAJQAMAGASAAIALAAMAJtBV8QgCAPAEAYg");
	this.shape.setTransform(143.8793,209.6437,0.7214,0.7214);

	this.instance_1 = new lib.Image();
	this.instance_1.setTransform(-0.05,0,0.7214,0.7214);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.4,-0.4,288.59999999999997,420.09999999999997);


(lib.coffeelid = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Image_3();
	this.instance.setTransform(4,40.15,0.7213,0.7213);

	this.instance_1 = new lib.Image_2();
	this.instance_1.setTransform(0,49.6,0.7213,0.7213);

	this.instance_2 = new lib.Image_1();
	this.instance_2.setTransform(14.9,-0.1,0.7213,0.7213);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.1,303,62.7);


// stage content:
(lib.coffeecupanimation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.coffeelid("synched",0);
	this.instance.setTransform(54.55,79.6,0.16,0.16,0,0,0,303.2,62.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:303.4,regY:62.7,rotation:6.4241,x:58.9,y:80.75},0).wait(1).to({regX:303.2,regY:62.9,rotation:12.8513,x:63.1,y:81.95},0).wait(1).to({regX:303.1,rotation:19.2818,x:67.35,y:83.65},0).wait(1).to({regX:303.2,regY:62.8,rotation:25.7096,x:71.65,y:85.35},0).wait(1).to({regX:303.3,regY:62.7,rotation:32.1363,x:75.9,y:87.05},0).wait(1).to({regX:303.4,rotation:38.5676,x:78.85,y:88.6},0).wait(1).to({regX:303.2,regY:62.8,rotation:44.9961,x:83.45,y:86.95},0).wait(1).to({regX:303.3,rotation:51.4281,x:88.4,y:86.2},0).wait(1).to({regY:62.5,rotation:57.8562,x:93.5,y:85.75},0).wait(1).to({regX:303.2,regY:62.8,rotation:64.2855,x:98.65,y:85.5},0).wait(1).to({regX:303.3,regY:62.5,rotation:70.713,x:103.95,y:85.35},0).wait(1).to({regX:303.4,regY:62.6,rotation:77.1422,x:109.4},0).wait(1).to({regX:303.1,regY:62.5,rotation:83.5705,x:115.2,y:85.5},0).wait(1).to({regX:303.2,rotation:90,x:121,y:85.85},0).wait(1).to({regX:303.3,rotation:96.418,x:126.85,y:86.45},0).wait(1).to({regX:303.1,regY:62.6,rotation:102.8459,x:132.7,y:87.15},0).wait(1).to({regX:303,rotation:109.2766,x:138.6,y:88.25},0).wait(1).to({regX:303.1,rotation:115.7023,x:144.6,y:89.55},0).wait(1).to({regX:302.9,rotation:122.1363,x:150.5,y:91.15},0).wait(1).to({regX:303.2,regY:62.5,rotation:128.5642,x:156.55,y:93.05},0).wait(1).to({regY:62.4,rotation:134.9923,x:162.65,y:95.45},0).wait(1).to({regX:302.8,regY:62.5,rotation:141.4238,x:168.8,y:98.2},0).wait(1).to({regX:302.9,regY:62.6,rotation:147.8515,x:175,y:101.45},0).wait(1).to({rotation:154.2782,x:181.3,y:105.35},0).wait(1).to({regX:303.1,regY:62.4,rotation:160.7061,x:187.7,y:110.05},0).wait(1).to({regX:302.8,regY:62.5,rotation:167.1315,x:194.25,y:115.75},0).wait(1).to({rotation:173.5651,x:201,y:123.05},0).wait(1).to({regX:302.9,regY:62.6,rotation:179.9891,x:208.2,y:133.75},0).wait(1).to({regX:302.7,regY:62.5,rotation:181.186,x:209.65,y:133.15},0).wait(1).to({regX:302.9,regY:62.8,rotation:182.3889,x:211.05,y:132.55},0).wait(1).to({regX:302.7,regY:62.4,rotation:183.5927,x:212.45,y:132},0).wait(1).to({regX:302.9,rotation:184.7927,x:214.6,y:131.4},0).wait(1).to({regY:62.8,rotation:185.995,x:216.75,y:130.8},0).wait(1).to({regY:62.5,rotation:180.6612,x:219.25,y:132.1},0).wait(1).to({regY:62.4,rotation:175.3271,x:221.75,y:133.4},0).wait(1).to({regX:302.8,rotation:177.6605,x:222.05},0).wait(1).to({regX:302.9,regY:62.6,rotation:179.9945,x:222.35},0).wait(1).to({x:222.65},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// Layer_1
	this.instance_1 = new lib.cupwithliner("synched",0);
	this.instance_1.setTransform(45.4,142.05,0.16,0.16,0,0,0,237.8,409.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regY:410,rotation:4.1954,y:142.1},0).wait(1).to({regX:237.9,regY:409.8,rotation:8.3751},0).wait(1).to({regX:238.1,rotation:12.533,y:142.15},0).wait(1).to({regY:410,rotation:16.6443,y:142.2},0).wait(1).to({regY:409.8,rotation:20.5906},0).wait(1).to({regX:238.2,rotation:22.5169,y:142.25},0).wait(1).to({regX:238.1,regY:409.9,rotation:24.0518},0).wait(1).to({regY:409.7,rotation:25.4359,y:142.3},0).wait(1).to({regX:238.2,regY:409.9,rotation:26.6775,y:142.35},0).wait(1).to({regY:409.8,rotation:27.7529,x:45.35},0).wait(1).to({regX:238.1,regY:409.9,rotation:28.5965,x:45.4,y:142.4},0).wait(1).to({regX:238.2,regY:409.8,rotation:28.9952},0).wait(1).to({regX:238.1,regY:410,rotation:28.1808,y:142.45},0).wait(1).to({regX:237.9,regY:409.8,rotation:26.0567},0).wait(1).to({rotation:22.9381,y:142.5},0).wait(1).to({regX:238.2,regY:409.9,rotation:18.9932,y:142.55},0).wait(1).to({regX:237.8,regY:409.7,rotation:14.2854},0).wait(1).to({regX:238,regY:409.9,rotation:8.7507,y:142.6},0).wait(1).to({rotation:1.1095,y:142.65},0).wait(1).to({regX:238.1,rotation:-2.0936,y:142.1},0).wait(1).to({regX:237.9,rotation:-3.5545,y:141.65},0).wait(1).to({regX:238.2,rotation:-4.6615,x:45.45,y:141.15},0).wait(1).to({regX:238,regY:409.8,rotation:-5.517,x:45.4,y:140.65},0).wait(1).to({regX:237.9,regY:409.9,rotation:-5.995,y:140.15},0).wait(1).to({regX:238.1,regY:409.8,rotation:-5.3142,y:140.8},0).wait(1).to({regX:238,regY:409.9,rotation:-3.8173,y:141.3},0).wait(1).to({regX:238.1,rotation:-1.8638,y:141.95},0).wait(1).to({regX:237.9,regY:409.8,rotation:0.4426,y:142.55},0).wait(1).to({regX:238.1,rotation:1.6834},0).wait(1).to({regX:238,regY:410,rotation:2.8539},0).wait(1).to({regY:409.8,rotation:3.9155,x:45.45},0).wait(1).to({regY:410,rotation:4.6284,x:45.4},0).wait(1).to({regX:238.1,regY:409.9,rotation:3.7243},0).wait(1).to({regY:410,rotation:2.1919},0).wait(1).to({regX:237.9,rotation:0.3989},0).wait(1).to({regX:238,regY:409.7,rotation:-1.3938,y:142.2},0).wait(1).to({regX:238.1,rotation:-2.312,y:141.9},0).wait(1).to({rotation:-1.1587,y:142.25},0).wait(1).to({regY:410.1,rotation:0.3825,y:142.55},0).wait(1).to({rotation:-0.3661,y:142.4},0).wait(1).to({regX:237.9,regY:410,rotation:-1.0931,y:142.25},0).wait(1).to({rotation:-0.4317,y:142.4},0).wait(1).to({regX:238.1,regY:410.1,rotation:0.3825,y:142.55},0).wait(1).to({rotation:0.3825},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#764832").s().p("Ah2AnQgwglAAg1QAAg1BeA7QBcA6AqgoQApgqAigGQAhgHgEAsQgFArgwAkQgxAkhCAAQhEAAgwgmg");
	this.shape.setTransform(61.6516,88.7328);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#764832").s().p("AiJApQgwgmAAg0QAAg1BdA7QBdA5AuggQAughA3gUQA2gVgXAvQgXAug4AnQg3AnhDAAQhEAAgvgmg");
	this.shape_1.setTransform(63.6163,88.5781);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#764832").s().p("AiWAzQgwglAAg1QAAg1BdA7QBeA6AuguQAvguBJgQQBJgQgwAlQgwAmgyA4QgyA5hDAAQhEAAgvgmg");
	this.shape_2.setTransform(67.656,89.3607);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#764832").s().p("Ai6A+QgvgmAAg0QAAg1BcA8QBdA7AHg5QAHg6CggEQChgFhOAjQhOAjhGAcQhFAdhBAdQgcANgaAAQggAAgbgVg");
	this.shape_3.setTransform(71.5865,88.6988);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#764832").s().p("AixBlQhMgVB9gMQgIAkgMAEIgdgHgAALhnQFCAajQAmQjPAmgMgIQgMgIgKAiQjBiSFAAag");
	this.shape_4.setTransform(81.3231,90.7296);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#764832").s().p("AjSBrQhLgWB9gMQgIAkgMAFIgegHgAiRhvQD3ATCKAnQArAbgWgBIgigBQjMALgvAFQgwAFhDASQj+iMD4ASg");
	this.shape_5.setTransform(84.5666,90.1677);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#764832").s().p("AjsBkQhLgVB9gMQgIAkgMAEIgegHgAgGhoQCrANBAAbQAdANAHAPQAGAPgugCIglgBQivgIgnAGQgtAGg5AYQiBh/D7ATg");
	this.shape_6.setTransform(87.1937,90.8026);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#764832").s().p("AkKBsQhMgWB9gMQgIAkgMAFIgdgHgACkADQiagVhKgKQhKgKgaAyQh5iJDPAMQCfAJApAMQA1AQAYARIALAIQAFAEACAFQAyAbgEACQgDABAfAXQANALgVAAQgdAAhagTg");
	this.shape_7.setTransform(90.2266,90.052);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#764832").s().p("AkhBoQhMgVB9gMQgIAkgMAEIgdgHgACNAAQiVgwhQgLQhRgKgSBNQhViBDIAMQDHAMAUAJQAUAKAJAPIALAIQAFAFACAEQBWA5gEAEQgFAFApArQAMANgJAAQgXAAiXhMg");
	this.shape_8.setTransform(92.5425,90.4245);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#764832").s().p("AE0CAQgcgSgWgJQgqgRhMglIgkgTIghgRQihhQhBgSQhKgUg0AWQhXgyDOAWQDMAWAZAiQAYAiAfgDIAnATQAggGALALQAEAEAKARQAsAdAVAQQAYAVAQARQAbAagLADQgDACgGAAQgJAAgNgFgAlTh0QgLgLAogFQALAYgQAFQgNgDgLgKg");
	this.shape_9.setTransform(99.8292,92.2227);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#764832").s().p("AEHCSQgUhPAvAaQA8A8AXAoQAIANgIAAQgSAAhcg8gAC2BPIgDgCIAAgCQgCgHgIgDQglgmhCgfIgDgCIgigRIgfgRQiihRhBgSQhKgUgqgIQhhgUDNAWQDNAWAZAiQAYAhA6gDIADAGIABAAIAEAIQACADAigKIACAAIgBABQgCACABADQAAADADAFQAEAFAGAGIABABIAHAJIAGAEQAEADAGAHIAGADIACABQAdATAPAMIABABQAZAVA1A1IAAABIAAAAQgvgaAUBPQgogRgmgtgAlli4QgEgFAagQQAMAXgQAGQgOgDgEgFg");
	this.shape_10.setTransform(106.9624,96.9025);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#764832").s().p("AD9CbIACgEQAJAGAIgGQAHADAFgJQAiATAIAwQACAPgGAAQgOAAg3hIgADqCXQghghgMgDQgNgDAEgKQADgKhTgyQAOAegngbIgFgDIgygjIgTgMQgEgDgJgSQgjgFgPgIQiJhCg6gQQhKgVAGAAQgJgbCJAWQCJAWAZAhQAYAgAbAAIADAAIAVAKQAegFAKAKQACALAJAEIAZAGQgFABAFAIQA0AXAWALQAXANgNgDQgZgGAFAGIAZAXIAeAeQgFACAcAjQAaAggqAAIgIAAgAlEi/QgCgJACgaQBJAmglAEIgOAAQgVAAgBgHg");
	this.shape_11.setTransform(114.0264,99.4862);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#764832").s().p("AD0CaIACgDQAIAFAWgGQgFABAEgGIAGAEQAhAaARA9QAGAVgGAAQgOAAhJhngADjCIQghghgNgRQgKgOABgBIhPgtIgLABQgKAAgLAJQgDAHgSgOQgSgPgPgRIgOgTQgDgDADAZQgVgmgMgFIgMgFQgLgDgHgDQiIhDg7gQQhKgUAHgBQgKgbCXAkQCXAjAMAVQAMAUAOgBIAOgCIAUAKQAfgFAJALQACAKAJAFQAIABARAEQgFACAGAIQA0AYANADQANADgRgCQgRgCAUASIAZAWIAeAeQgFACAeArQAVAegVAAQgJAAgRgFgAiVjcQgBgKABgaQBJAmAYA9Qhfg2gCgJg");
	this.shape_12.setTransform(120.0406,106.9248);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#764832").s().p("ADqB1IABgEQAJAFAWgFQgGABAFgHIAGAFQAhAaARA9QAGAVgGAAQgOAAhJhngADsBWQghghgMgRQgLgOABgBIhPgsQgFABAIAhQAHAhgtgVQg5gfgEggQgDgfgBgBQgDgDgYABQAGgOgLgFIgMgFQgMgDgHgDQiIhCg6gRQhKgUAGgBQgJgbCWAkQCXAjAMAVQAMAUANgBIAPgCIAVAKQAegFAKALQABAKAKAFIAZAFQgFACAFAIQA0AYANADQAOADgRgCQgRgCATATIAZAWIAeAdQgFACAeArQAWAfgWAAQgJAAgRgGgAC5hsQhfg3gCgJQgCgJACgbQAyAfAfAVQALAUgCgOQAwAigHAHQgEAEgJAAQgJAAgMgDg");
	this.shape_13.setTransform(127.4592,119.5035);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#764832").s().p("ACHDDQgJgsABhVQAKA6AZAEQAAgMABgIQAJgEACgDIARAYQAdAlgLAhQgHATgVASQgKAJgIAAQgTAAgJgugACuAxQghAIgLgkQgKgcgBgGQABAohQhWIgKABQgFAAgbgIQgxAVgEggQgDgfgBgBQgEgDgYABQAGgOgLgEQgIgEgEgBQgLgDgHgEQhLgkgzgVQiAhFC1ArQC1ArgbALQgcAKAOgBIAPgBIAVAJQAdgEAKAKQACALAJAEIAZAGQgFABAFAIQgZgKAqATQArATgNgBQgNgCAeAUQBIAsgEABQB3BagFAyQgCAPgNAAQgcAAhVhPgACqBfIADAFQgCADgIAFQABgNAGAAgAg1ASQgJgFgDgDQgEgEAAgFQAAgFAEgLQADgLAGgBQAFgCAIAKQAIAJAJAAQAJABgNAPQgLAOgHAAIgFgCgACch8Qhfg3gCgJQgBgKABgaQAmAXBeBIQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBAAQgEAEgJAAQgIAAgNgDg");
	this.shape_14.setTransform(143.5195,127.3506);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#764832").s().p("Ah6CdQALgdAKgUQAWgwARgEQAXgFAFABQAEACAVgCQAHgDAFABIAPAEIABAAIAFAFIgCAAIACABQAnAOAoAiIAKAJQAuApifAvQg0AQgfAAQg/AAAYhAgAB4B9IAGgRQAHgfgOgWIgOgWQgLgLgWgNQgVgLgWgHQgVgHgIANQhFAAgDggQgEgfgBgBQgEgDgYABQAGgOgLgEQgHgEgFgBQgLgEgJgIQgIgJg0gOQgzgOgMgmQgogkBjAcQBjAbAfAOQAfAOgHAGQgHAGACAAIAUAJQAfgEAIAKQACALAJAEIAZAGQgFABAFAIQAfAWgGADQgGACANAAQANgBAUATIAZAXIAiAiQAiAWBCAxIALAKQAVAYhFAAQgnAAhCgHgAAwiOQhUg9gDgJQgEgKAbADQBRAGgWARQAKAUgBgOQAtAlgSAQQgIAIgHAAQgJAAgHgNg");
	this.shape_15.setTransform(160.6917,136.0518);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#764832").s().p("AjWCBQAYg/ASgYQAKgMAHgBQAYgGAEACQAFABAUgBQAIgEAGABIAOAEIABAAIAFAGIgCgBQABABAAAAQABAAAAAAQAAAAAAAAQABAAAAAAIAXAKIATALQgDgFgBgGQgBgUAggdQgfANgFgHQgGgIgdANQgzgVgDgfIgEggQgEgDgYABQAGgPgLgEQgIgEAGAHQAFAHgngMQgngMgJgIQgIgIg4gnQgKggBOAPQBPAPAMAUQAMAVAOgBIAPgCIAVAKQAegFAKAKQABALAJAFIAaAFQgFABAFAJQAzAXANAEQAOADgRgCQgSgCAUATIAZAWQAHAHCbA4IBHAbQg/gSgpgJQhKgPgDAPQgBAFAEAGQAfArg5gTQg/ADgDgaQgDgZgMAhQgTAGgMgCQANALAOAMQAtApieAvQg0AQgfAAQhAAAAZhAgABZg1QgggsgKgPQgJgPAtAZQgRgnArAwQgCgHAMAQQAjAFgDAQQgDALgfAAIgcgBg");
	this.shape_16.setTransform(171.8685,142.6357);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#764832").s().p("Aj2B1QAlhgAXgFQAXgFAFABQAEABAVgBQAIgEAGACIAOAEIABAAIAFAFIgCAAQAAAAAAABQABAAAAAAQAAAAABAAQAAAAAAgBQAVAIAVAOQgLgTAYgbIAPgPQgfAPgGgIQgGgIgcAOIgnACQiRAKAJgKQADgDAYgHIAugNQCggbiXgnQgLgIAEgGIgcgHQgngNgIgIQgJgIAOgOQgBgWAtAAQAsAAAHASQAHATANgCIAQgBIAUAJQAegEAKAKQACALAJAEIAZAGQgFABAFAIQAzAYAOADQANAEgRgCQgRgCAUASICiAzQBGAVALADQAVAEgHAhQjQg5AfAqQAeArg5gTQg+ACgDgZQgDgagMAhQgTAHgNgCIAdAXQAsApieAvQg1AQgfAAQg/AAAYhAgACEg7QgugmgKgPQgJgPAWACQAGgQArAwQgCgHAMAPQAjAFgCAdQgBANgJAAQgMAAgbgVg");
	this.shape_17.setTransform(176.4927,147.4028);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#764832").s().p("AiyBhQAlhfAXgEQAXgGAFACQAFABAUgBQAIgEAGABIAOAFIABgBIAFAFQAVAIAVANQgNgWAogmIABAAIgCAAQgeAOgGgIQgEgIgdAOIhdAGQl3CYECiqQAwgfBGgrIgQgNQAAgDgTgGQgogMgIgIQgJgIA1AFIAxAGQATACAKAMQAKAHAIgCQAIgCAIgVQAfgFAMAoQgBgTAJAFQAHABASAOQAsAnARgEQARgEBkAkQARgOgIgUQgOggAEgEQAGgPArAvQgBgGALAPQBHAOgMAdIgEAHQgPAWgcgHIA8ARQAUADgGAiQjQg6AeAqQAeArg5gSQg+ACgDgaQgDgYgNAgQgSAHgNgDQAOALAOAMQAtApieAvQg1AQgfAAQg/AAAYhAg");
	this.shape_18.setTransform(171.2325,150.8067);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#764832").s().p("AiBBdQAkheAXgFQAYgGAEACQAFABAUgBQAIgEAGACIANAEIABAAIAFAFIgCgBIACABQAWAHAVANQgOgWAqgmQggAPgFgJQgGgIgdAOIhcAGQm8C1DdjKIAqgPQAPghhyANQheAKBxgcIA8gOQDBgtATACQATACAKAMQALAHAHgCQAIgCALgHQAbgTAUAaQAIABByAiQgGAAASAFIAmAKQADgFAGgFQAKgJASgKQB0ANAXAGQAdAIh5gDIAGAIQBPAQgYAiQgPAWgcgHIA8ARQAUAEgGAhQjQg6AeAqQAfArg5gSQg/ACgDgaQgDgYgNAgQgSAHgNgDQAOALAOANQAtAoieAvQg0AQgfAAQg/AAAYhAgADahEQgEgFAAgFIgNgBQgPAAAgALg");
	this.shape_19.setTransform(168.5039,156.8712);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#764832").s().p("AiBBdQAkheAYgFQAXgFAFABQAEABAUgBQAIgEAGACIANAEIABAAIAFAFIgBAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAVAHAVAOQgOgXAqgmQgfAPgGgIQgGgJgdAOIhcAHQm8C0DdjKIAqgPQAQghhzANQhzANDCgtIBcgVQBrgXAOABQATADAKALQAKAIAIgDQAHgCALgHQAbgSAVAZIASAFIBnAeQgJABA7AOQAJgNAcgQQEIAejZgGIAHAIQBOAQgYAjQgOAVgcgHIA7ARQAVAEgHAhQjQg5AfAqQAeArg5gTQg/ACgDgZQgDgZgMAgQgTAHgNgCQAOAKAOANQAtApieAvQg0APgfAAQhAAAAZhAgADbhEQgFgEAAgGIgNgBQgOAAAgALg");
	this.shape_20.setTransform(170.0816,160.3955);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},7).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[]},1).wait(24));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(159.9,109.1,111.20000000000002,67);
// library properties:
lib.properties = {
	id: 'F15B08081EC66A4580C4FA61AB570BE6',
	width: 320,
	height: 144,
	fps: 30,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"./public/images/coffee_cup_300_atlas_1.png", id:"coffee_cup_300_atlas_1"}
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
an.compositions['F15B08081EC66A4580C4FA61AB570BE6'] = {
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
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;