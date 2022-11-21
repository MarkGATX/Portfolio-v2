(function (cjs, an) {

	var p; // shortcut to reference prototypes
	var lib={};var ss={};var img={};
	lib.ssMetadata = [
			{name:"coffee_cup_animate_sm_atlas_1", frames: [[0,0,398,581],[0,583,367,241],[0,826,378,62],[0,890,420,18],[0,910,409,18]]}
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
		this.initialize(ss["coffee_cup_animate_sm_atlas_1"]);
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.Image_0 = function() {
		this.initialize(ss["coffee_cup_animate_sm_atlas_1"]);
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.Image_1 = function() {
		this.initialize(ss["coffee_cup_animate_sm_atlas_1"]);
		this.gotoAndStop(2);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.Image_2 = function() {
		this.initialize(ss["coffee_cup_animate_sm_atlas_1"]);
		this.gotoAndStop(3);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.Image_3 = function() {
		this.initialize(ss["coffee_cup_animate_sm_atlas_1"]);
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
		this.instance.setTransform(47.75,69.65,0.14,0.14,0,0,0,302.2,62.9);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:151.5,regY:31.2,rotation:6.4281,x:30.95,y:63.9},0).wait(1).to({rotation:12.8563,x:35.65,y:62.65},0).wait(1).to({rotation:19.2844,x:40.45,y:62},0).wait(1).to({rotation:25.7126,x:45.55,y:61.55},0).wait(1).to({rotation:32.1407,x:50.9,y:61.2},0).wait(1).to({rotation:38.5689,x:55.3,y:60.85},0).wait(1).to({rotation:44.997,x:61.2,y:58},0).wait(1).to({rotation:51.4251,x:67.65,y:56.15},0).wait(1).to({rotation:57.8533,x:74.3,y:54.75},0).wait(1).to({rotation:64.2814,x:81.15,y:53.85},0).wait(1).to({rotation:70.7096,x:88.15,y:53.3},0).wait(1).to({rotation:77.1377,x:95.35,y:53.1},0).wait(1).to({rotation:83.5659,x:102.85,y:53.4},0).wait(1).to({rotation:89.994,x:110.3,y:54},0).wait(1).to({rotation:96.4221,x:117.75,y:55.15},0).wait(1).to({rotation:102.8503,x:125.15,y:56.8},0).wait(1).to({rotation:109.2784,x:132.45,y:58.75},0).wait(1).to({rotation:115.7066,x:139.6,y:61.25},0).wait(1).to({rotation:122.1347,x:146.65,y:64.3},0).wait(1).to({rotation:128.5629,x:153.65,y:67.8},0).wait(1).to({rotation:134.991,x:160.35,y:71.7},0).wait(1).to({rotation:141.4191,x:166.95,y:76.25},0).wait(1).to({rotation:147.8473,x:173.35,y:81.3},0).wait(1).to({rotation:154.2754,x:179.55,y:87},0).wait(1).to({rotation:160.7036,x:185.6,y:93.5},0).wait(1).to({rotation:167.1317,x:191.5,y:100.9},0).wait(1).to({rotation:173.5599,x:197.3,y:109.7},0).wait(1).to({rotation:179.988,x:203.3,y:121.45},0).wait(1).to({rotation:181.1904,x:204.45,y:121.4},0).wait(1).to({rotation:182.3928,x:205.55,y:121.3},0).wait(1).to({rotation:183.5952,x:206.65,y:121.2},0).wait(1).to({rotation:184.7976,x:208.4},0).wait(1).to({rotation:186,x:210.15,y:121.1},0).wait(1).to({rotation:180.662,x:212.85,y:120.3},0).wait(1).to({rotation:175.324,x:215.35,y:119.45},0).wait(1).to({rotation:177.658,x:215.5,y:120.3},0).wait(1).to({rotation:179.992,x:215.65,y:121.15},0).wait(1).to({x:215.95},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));
	
		// Layer_1
		this.instance_1 = new lib.cupwithliner("synched",0);
		this.instance_1.setTransform(39.75,124.3,0.14,0.14,0,0,0,238.7,408.4);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:143.7,regY:209.6,rotation:4.198,x:28.5,y:95.55},0).wait(1).to({rotation:8.3784,x:30.65,y:94.9},0).wait(1).to({rotation:12.534,x:32.8,y:94.3},0).wait(1).to({rotation:16.6461,x:34.95,y:93.9},0).wait(1).to({rotation:20.5904,x:37.1,y:93.65},0).wait(1).to({rotation:22.518,x:38.1},0).wait(1).to({rotation:24.0538,x:38.9},0).wait(1).to({rotation:25.4358,x:39.65},0).wait(1).to({rotation:26.6775,x:40.35,y:93.7},0).wait(1).to({rotation:27.7548,x:40.95},0).wait(1).to({rotation:28.5979,x:41.35,y:93.8},0).wait(1).to({rotation:29,x:41.6},0).wait(1).to({rotation:28.1828,x:41.2},0).wait(1).to({rotation:26.0598,x:40},0).wait(1).to({rotation:22.942,x:38.3,y:93.85},0).wait(1).to({rotation:18.9956,x:36.2,y:94.1},0).wait(1).to({rotation:14.288,x:33.7,y:94.5},0).wait(1).to({rotation:8.7563,x:30.85,y:95.2},0).wait(1).to({rotation:1.1155,x:27,y:96.75},0).wait(1).to({rotation:-2.0978,x:25.4,y:97},0).wait(1).to({rotation:-3.5575,x:24.75,y:96.95},0).wait(1).to({rotation:-4.6659,x:24.25,y:96.8},0).wait(1).to({rotation:-5.5214,x:23.8,y:96.6},0).wait(1).to({rotation:-6,x:23.6,y:96.3},0).wait(1).to({rotation:-5.3165,x:23.9,y:96.65},0).wait(1).to({rotation:-3.8234,x:24.6,y:96.7},0).wait(1).to({rotation:-1.8688,x:25.55,y:96.75},0).wait(1).to({rotation:0.447,x:26.6},0).wait(1).to({rotation:1.6882,x:27.25,y:96.5},0).wait(1).to({rotation:2.8586,x:27.85,y:96.2},0).wait(1).to({rotation:3.9191,x:28.35,y:95.95},0).wait(1).to({rotation:4.6295,x:28.75,y:95.85},0).wait(1).to({rotation:3.7276,x:28.25,y:96.05},0).wait(1).to({rotation:2.1963,x:27.55,y:96.35},0).wait(1).to({rotation:0.405,x:26.65,y:96.8},0).wait(1).to({rotation:-1.4006,x:25.75,y:96.95},0).wait(1).to({rotation:-2.318,x:25.35,y:96.85},0).wait(1).to({rotation:-1.1629,x:25.85,y:96.9},0).wait(1).to({rotation:0.3875,x:26.6,y:96.8},0).wait(1).to({rotation:-0.3684,x:26.25},0).wait(1).to({rotation:-1.0965,x:25.9,y:96.85},0).wait(1).to({rotation:-0.4331,x:26.2},0).wait(1).to({rotation:0.3875,x:26.6,y:96.8},0).wait(1).to({rotation:0.3875},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));
	
		// Layer_4
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#804E37").s().p("AhnAjQgqghAAguQAAgvBSA0QBRAyAlgjQAkgkAdgGQAdgFgEAmQgEAlgqAgQgqAgg7AAQg7AAgqghg");
		this.shape.setTransform(53.9242,77.6402);
	
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#804E37").s().p("Ah4AkQgqghAAguQAAgvBSA0QBRAyApgbQAogdAwgTQAvgSgUAqQgUAogxAiQgwAig7AAQg7AAgqghg");
		this.shape_1.setTransform(55.6463,77.5027);
	
		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#804E37").s().p("AiDAtQgqghAAguQAAguBSAzQBRAyApgnQApgpBAgOQA/gOgqAhQgqAhgrAxQgsAyg6AAQg8AAgpghg");
		this.shape_2.setTransform(59.211,78.2142);
	
		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#804E37").s().p("AijA2QgpghAAguQAAguBQA0QBRA0AHgyQAGgyCMgEQCNgEhFAfQhEAeg9AYQg8AZg5AaQgZAMgWAAQgcAAgYgTg");
		this.shape_3.setTransform(62.6586,77.6127);
	
		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#804E37").s().p("AibBZQhCgTBtgLQgHAggKAEIgagGgAAKhaQEZAXi2AhQi1AhgKgGQgLgHgIAdQiqiAEZAXg");
		this.shape_4.setTransform(71.1572,79.3824);
	
		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#804E37").s().p("Ai3BeQhCgTBtgLQgHAggKAEIgagGgAh/hhQDZARB5AiQAlAYgUgBIgdgBQiyAJgqAFQgqAFg6APQjfh7DZAQg");
		this.shape_5.setTransform(73.9907,78.8832);
	
		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f("#804E37").s().p("AjOBYQhCgSBtgLQgHAfgKAEIgagGgAgFhbQCWAMA4AYQAZALAGANQAFANgogBIgggCQiagGgiAFQgnAFgyAVQhwhvDbAQg");
		this.shape_6.setTransform(76.2922,79.4445);
	
		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f("#804E37").s().p("AjpBeQhCgSBugLQgHAfgLAEIgagGgACQADIjHgbQhBgJgXArQhqh3C1AKQCLAIAkALQAuAOAWAOIAJAHIAGAIQAsAYgDABQgDABAbAVQALAJgTAAQgZAAhOgQg");
		this.shape_7.setTransform(78.9481,78.8079);
	
		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f("#804E37").s().p("Aj9BbQhCgSBtgLQgHAfgKAEIgagGgAB7AAQiCgqhGgJQhHgKgPBEQhLhxCvALQCuAKASAJQARAIAIANIAJAHIAHAIQBLAxgEAEQgEAEAkAnQALALgIAAQgUAAiFhDg");
		this.shape_8.setTransform(80.9759,79.1268);
	
		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#804E37").s().p("AENBwQgYgPgTgIQglgQhCggIgggQIgdgPQiMhGg5gPQhBgSgtATQhMgrCzATQCzATAWAeQAVAdAbgCIAiAQQAdgFAIAKQAEADAJAPQAnAZASAOQAVATAOAOQAXAXgJADIgHABQgIAAgNgEgAkohlQgKgJAjgFQAKAVgOAEQgMgCgJgJg");
		this.shape_9.setTransform(87.349,80.675);
	
		this.shape_10 = new cjs.Shape();
		this.shape_10.graphics.f("#804E37").s().p("ADmCAQgShFAqAXQA0A1AVAjQAGAKgHAAQgPAAhRg0gACfBFIgCgCIgBgBQgCgGgGgDQghghg5gbIgDgCIgdgOIgcgQQiOhGg5gQQhAgSglgHQhVgRC0AUQCzATAWAdQAVAdAzgCIACACIAAACIABAAIAAABIAEAHQABACAegIIABgBIAAABQAAABgBAAQAAABAAAAQAAABAAAAQAAABAAABQAAADADADQADAFAGAFIAAABIAHAIIAFAEIAJAIIAFADIABABQAaAQANALIABABQAWASAuAvQgpgWARBEQgigOgigogAk4ihQgEgEAXgOQAKAVgOAEQgMgCgDgFg");
		this.shape_10.setTransform(93.6063,84.7969);
	
		this.shape_11 = new cjs.Shape();
		this.shape_11.graphics.f("#804E37").s().p("ADdCHIACgDQAIAFAHgFQAGACAFgHQAeAQAGArQACANgFAAQgMAAgxhAgADNCEQgdgdgLgDQgLgCADgJQAEgJhJgsQAMAbgigYIgEgCIgtgfIgQgLQgDgCgIgQQgfgEgNgHQh4g6gzgOQhBgSAGgBQgIgXB4ATQB4ATAWAeQAUAbAYAAIADAAIASAJQAbgEAIAJQABAJAIAEIAWAFQgEABAFAHQAtAUATAKQAVAKgMgCQgWgFAFAGQAMAKAKAJIAaAaQgEACAYAfQAXAcglAAIgHAAgAkbinQgCgIACgXQBAAhghAEIgMABQgSAAgBgHg");
		this.shape_11.setTransform(99.7774,87.0558);
	
		this.shape_12 = new cjs.Shape();
		this.shape_12.graphics.f("#804E37").s().p("ADWCHIABgDQAHAEAUgFQgFABAEgGIAFAEQAdAXAPA2QAFASgFAAQgNAAg/hagADGB3QgdgdgKgPQgKgMABgBIhFgnIgJABQgJAAgJAIQgDAGgQgNQgQgNgMgPIgNgQQgDgDADAWQgTgigJgDQgHgEgEgBQgKgCgGgDQh3g6gzgPQhBgSAFAAQgIgYCEAfQCEAfALASQAKASAMgBIAMgBIASAIQAbgEAIAJQACAKAIADIAWAFQgEABAEAIQAuAUALADQAMADgPgCQgPgBARAPQANAKAJAKIAaAaQgEACAbAlQASAbgTAAQgIAAgPgFgAiCjBQgBgIABgXQBAAhAVA2QhTgwgCgIg");
		this.shape_12.setTransform(105.0451,93.5661);
	
		this.shape_13 = new cjs.Shape();
		this.shape_13.graphics.f("#804E37").s().p("ADNBmIABgDQAHAFAUgFQgFABAEgGIAFAEQAdAXAPA1QAFATgFAAQgMAAhAhbgADPBLQgdgcgLgPQgJgNABAAIhGgnQgEABAHAdQAGAdgngTQgygbgDgcIgEgcQgDgCgVAAQAGgMgKgEIgLgEIgQgGQh3g6gzgOQhBgSAGAAQgJgYCEAfQCEAfALASQAKASALgBIAOgCIASAJQAagEAJAJQABAJAIAEIAWAFQgEABAEAHQAuAVAMADQALADgPgCQgOgCARARIAWATIAaAZQgFACAbAmQASAagSAAQgIAAgPgFgACiheQhTgwgCgIQgBgIABgXQAsAaAcATQAIARgBgMQAqAegGAGQgEAEgIAAQgHAAgLgDg");
		this.shape_13.setTransform(111.5236,104.5674);
	
		this.shape_14 = new cjs.Shape();
		this.shape_14.graphics.f("#804E37").s().p("AB2CrQgHgmABhLQAIAyAWAEQAAgKABgHQAHgEACgDIAQAVQAZAhgKAdQgGARgTAPQgJAIgHAAQgRAAgHgogACYArQgcAHgKgfIgJgeQAAAjhGhMIgJABQgEAAgYgGQgrASgDgbIgDgcQgEgDgVAAQAFgMgJgEQgHgDgEgBQgKgDgGgDQhBgfgtgTQhwg8CfAmQCeAlgYAJQgYAKAMgBIAOgCIASAJQAZgEAJAJQABAJAIAEIAWAFQgEABAEAHQgWgJAlARQAlARgLgBQgLgCAbASQA+AmgDABQBoBOgFAsQgBAOgMAAQgZAAhKhGgACVBUIADAEQgCADgHAEQABgLAFAAgAguAQQgIgEgDgDQgDgDAAgFQAAgEADgKQADgKAFgBQAFgBAHAIQAGAIAJABQAIAAgMAOQgJALgHAAIgEgBgACJhsQhTgwgCgIQgBgIABgXQAhAUBSA/IAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQgEAEgIAAQgHAAgLgDg");
		this.shape_14.setTransform(125.5927,111.4314);
	
		this.shape_15 = new cjs.Shape();
		this.shape_15.graphics.f("#804E37").s().p("AhrCJQAKgZAIgSQAUgqAOgDQAVgEAEABQAEABASgBQAHgDAEABIAMADIABAAIAEAFIgBAAIACAAQAiANAjAdIAJAIIAGAHIAFgPQAGgbgMgTIgMgTQgKgKgTgLQgTgKgTgGQgTgGgGAMQg8gBgDgbIgEgcQgEgDgVABQAGgNgKgDIgLgFQgJgCgIgIQgIgIgtgMQgtgMgKghQgjggBWAYQBXAYAbAMQAcAMgGAGQgHAFACAAIASAIQAagEAIAJQABAKAIADIAWAFQgEABAEAIQAbATgFACQgFACALAAQALAAASAQIAWAUIAdAdQAfAUA5ArIAKAIQAdAhijgSQAUAhh9AlQguAOgbAAQg3AAAVg4gAAqh8QhJg1gEgJQgDgIAYACQBHAGgUAPQAJARgBgMQAnAggPAOQgHAHgGAAQgIAAgGgLg");
		this.shape_15.setTransform(140.6149,119.0578);
	
		this.shape_16 = new cjs.Shape();
		this.shape_16.graphics.f("#804E37").s().p("Ai7BxQAVg3AQgVQAIgKAHgCQAUgEAFABQAEABARgBQAHgDAFABIANADIABAAIAEAFIgCgBIACABIAVAJIARAKQgDgFgBgFQgBgSAcgZQgbAMgFgGQgFgHgZALQgsgSgDgcQgDgbgBgBQgDgCgWAAQAGgMgKgEQgGgDAEAGQAFAGgigLQgjgLgHgHQgHgGgxgiQgJgcBFANQBFANAKASQALASAMgBIANgCIASAJQAbgEAIAJQABAJAIAEIAWAFQgEABAFAHQAsAVAMADQAMADgPgCQgPgCARARQAMAKAKAJQAGAGCIAxIA+AXQg4gPgkgIQhAgNgDANQgBAEAEAGQAbAlgygQQg3ACgDgWQgCgXgLAdQgRAGgKgCIAYAUQAnAkiKApQguAOgbAAQg4AAAWg4gABOguQgcgmgIgNQgJgOAoAWQgPgiAmAqQgCgGAKAOQAfAEgDAOQgCAKgbAAIgZgBg");
		this.shape_16.setTransform(150.3981,124.7967);
	
		this.shape_17 = new cjs.Shape();
		this.shape_17.graphics.f("#804E37").s().p("AjXBmQAghUAUgEQAVgEAEAAQAEACARgCQAHgDAGACIAMADIABAAIAEAFIAAAAIABAAQASAHATAMQgKgQAVgYIANgNQgbANgGgIQgFgHgZAMIgiADQh+AIAIgIQACgDAVgGIAogMQCMgXiEgiQgJgHAEgFIgZgHQgigLgIgGQgHgIAMgNQgBgSAnAAQAnAAAGAQQAGAQAMgBIANgCIASAIQAbgEAIAJQABAKAIAEIAXAFQgFABAFAHQAsAVAMADQAMACgPgBQgPgCARAQICOAtQA+ASAJADQASADgFAdQi2gyAaAlQAbAmgygRQg3ACgCgWQgDgXgKAeQgRAFgLgCQANAJAMALQAmAkiKApQguAOgbAAQg4AAAWg4gAB0g0QgpghgIgNQgIgOATADQAFgOAmAqQgCgHALAOQAeAEgCAaQgBALgIAAQgKAAgXgTg");
		this.shape_17.setTransform(154.4487,129.0001);
	
		this.shape_18 = new cjs.Shape();
		this.shape_18.graphics.f("#804E37").s().p("AibBVQAghTAUgEQAUgFAFACQAEABARgBQAHgEAFACIANADIABAAIAEAEIgCAAIACAAQATAHARAMQgLgTAjgiIABAAIgBAAQgbANgFgHQgEgIgZANIhRAFQlICFDhiVQAqgbA9gmIgOgLQABgCgRgGQgjgLgHgHQgHgHAuAFIArAFQAQACAJALQAJAGAHgCQAGgCAIgSQAbgEAKAiQgBgQAIAEQAGABAQAMQAnAiAPgDQAOgEBYAgQAPgNgHgRQgNgcAEgDQAFgOAmAqQgCgGALANQA+ANgLAZIgDAGQgNATgZgGQAsAOAIABQASADgFAdQi2gyAaAlQAbAlgygQQg3ACgDgXQgCgVgLAcQgRAGgLgCIAZAUQAnAkiKApQguAOgbAAQg4AAAWg4g");
		this.shape_18.setTransform(149.8458,131.9648);
	
		this.shape_19 = new cjs.Shape();
		this.shape_19.graphics.f("#804E37").s().p("AhxBSQAghTAVgEQAUgFAEABQAEABASgBQAHgDAFABIALAEIABAAIAFAEIgCAAIACABQASAFATAMQgNgTAmgiQgcANgFgHQgFgHgZAMIhRAGQmFCdDCiwIAlgOQANgchkALQhSAJBjgZIA0gMQCpgnARACQARACAIAKQAJAGAHgCQAHgCAJgGQAYgQASAWQAHABBjAeQgEAAAPAEIAhAJIAIgJQAJgHAPgKQBmAMAUAFQAaAIhrgDIAGAHQBFAOgVAeQgNATgYgGQAsANAIACQASADgGAdQi2gyAbAkQAaAmgygRQg2ACgDgWQgDgVgLAcQgQAGgLgCIAYAUQAoAkiKApQgvANgbAAQg3AAAVg3gADAg8QgFgDABgFIgMgBQgNAAAdAJg");
		this.shape_19.setTransform(147.4476,137.2729);
	
		this.shape_20 = new cjs.Shape();
		this.shape_20.graphics.f("#804E37").s().p("AhxBSQAghTAUgEQAVgFAEABQAEACASgBQAGgEAGACIALADIABAAIAEAFIgBgBQAAABABAAQAAAAAAAAQAAAAAAAAQABAAAAAAQASAGATAMQgNgUAlghQgbANgFgIQgGgHgZAMIhQAGQmFCdDCiwIAlgNQANgdhkALQhlALCqgnIBRgSQBdgUAMABQARACAIAKQAJAHAHgCQAHgCAJgHQAYgQASAXIAQAEIBaAaQgIABA0AMQAIgLAYgOQDnAai+gFIAGAHQBFAOgVAeQgNATgYgGIA0APQARADgFAdQi2gyAaAlQAbAlgygQQg3ACgCgXQgDgVgLAcQgQAGgMgCQANAJAMALQAnAkiKApQguAOgbAAQg3AAAVg4gAC/g7QgEgEAAgFIgMgBQgLAAAbAKg");
		this.shape_20.setTransform(148.8296,140.3477);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},7).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[]},1).wait(24));
	
		this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(139.8,95.6,97.19999999999999,58.5);
// library properties:
lib.properties = {
	id: 'F15B08081EC66A4580C4FA61AB570BE6',
	width: 280,
	height: 126,
	fps: 30,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"./public/images/coffee_cup_animate_sm_atlas_1.png", id:"coffee_cup_animate_sm_atlas_1"}
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