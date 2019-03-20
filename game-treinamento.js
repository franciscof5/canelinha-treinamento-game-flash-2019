(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"game_treinamento_atlas_", frames: [[2205,3090,400,226],[2231,1625,327,119],[2194,1943,494,481],[2231,1430,300,193],[1949,2420,101,3],[2749,2437,943,530],[2749,2969,925,536],[1949,2354,84,64],[2205,3408,480,65],[1467,2354,480,65],[2231,1219,391,209],[2205,3318,523,88],[1488,3090,715,591],[2761,0,1180,1216],[0,0,1465,3233],[0,3235,1486,812],[1467,1219,762,722],[2761,1218,1006,1217],[2459,3507,969,266],[1488,3683,969,267],[1467,1943,725,409],[1467,0,1292,1217],[1467,2437,1280,651]]}
];


// symbols:



(lib.Bitmap38 = function() {
	this.spriteSheet = ss["game_treinamento_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap41 = function() {
	this.spriteSheet = ss["game_treinamento_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap42 = function() {
	this.spriteSheet = ss["game_treinamento_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap43 = function() {
	this.spriteSheet = ss["game_treinamento_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap44 = function() {
	this.spriteSheet = ss["game_treinamento_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap45 = function() {
	this.spriteSheet = ss["game_treinamento_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap46 = function() {
	this.spriteSheet = ss["game_treinamento_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap47 = function() {
	this.spriteSheet = ss["game_treinamento_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap48 = function() {
	this.spriteSheet = ss["game_treinamento_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap49 = function() {
	this.spriteSheet = ss["game_treinamento_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap50 = function() {
	this.spriteSheet = ss["game_treinamento_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap51 = function() {
	this.spriteSheet = ss["game_treinamento_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CalçaIntervel = function() {
	this.spriteSheet = ss["game_treinamento_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CamisetaIntervel = function() {
	this.spriteSheet = ss["game_treinamento_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CanelinhaSemVestes = function() {
	this.spriteSheet = ss["game_treinamento_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CapaceteIntervel = function() {
	this.spriteSheet = ss["game_treinamento_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.Luvas = function() {
	this.spriteSheet = ss["game_treinamento_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.Regata = function() {
	this.spriteSheet = ss["game_treinamento_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.Sapato4 = function() {
	this.spriteSheet = ss["game_treinamento_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.SapatoSocial = function() {
	this.spriteSheet = ss["game_treinamento_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.Shorts = function() {
	this.spriteSheet = ss["game_treinamento_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.Social = function() {
	this.spriteSheet = ss["game_treinamento_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.WhatsAppImage20190320at014026 = function() {
	this.spriteSheet = ss["game_treinamento_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.sapato2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Sapato4();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.178,0.178);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sapato2, new cjs.Rectangle(0,0,172.6,47.4), null);


(lib.sapato1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SapatoSocial();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.204,0.204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sapato1, new cjs.Rectangle(0,0,197.5,54.4), null);


(lib.x = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(5,1,1).p("AAAAGIAAiIAAACDIAAh9ICDAAAiCAGICCAA");
	this.shape.setTransform(13.1,13.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.x, new cjs.Rectangle(-2.5,-2.5,31.2,31.2), null);


(lib.titulo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap44();
	this.instance.parent = this;
	this.instance.setTransform(197,308);

	this.instance_1 = new lib.Bitmap43();
	this.instance_1.parent = this;
	this.instance_1.setTransform(97,113);

	this.instance_2 = new lib.Bitmap42();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.titulo, new cjs.Rectangle(0,0,494,481), null);


(lib.player = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		playSound("Walk_In_The_Park");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEFEFE").s().p("AC/EqIgDAAIgIAAIgCAAIgQAAIgDAAIgIAAIgBgBQgEgBgFAAIgBgDQgFgCgIgBIgCAAQgegSgQghIAAgCQAAgKgFgDIAAgEIAAgIIAAgCIAAgVIAAgDIAAgIQAEgBgBgHIgBgDIAAgDIAAgCQAWgtAzgOIACAAIAoAAIADAAQAKAAAHAFIACABIABAAQADh6gEh0IgDAAIgGAAIAAgBIgKgCIAAgBQgFgCgGABIgDAAIgCAAIgBgCIgHgBIgBgBQgEgBgGgBIgCAAIghgFIAAgCIgKgBIgDAAIAAgBQgGgBgFgBIAAgBIgLgBIgCAAIgBgBIgKgCIgCAAQgVgEgWgDIAAgCQgHgBgHgBIAAgBIgLgBIAAgBIgJgBIgDAAIAAgCQgFgCgGAAIgCAAIgBgBIgHgBIgBgBIgPgBIgDgBQgGgDgKAAIgBgBIgKgBIAAE4IAAACIAAAWIAAADIAAAFIAAADIgCAAIAAAIIAAADIgBAAQgBAFgEAAIAAAFIAAADIAAADQgPAbgbAQIgDAAQgGAAgCACIAAADIgDAAIgIAAIAAACIgCABQgGAEgLgCIgCAAIgLAAIgDAAIgFAAIAAgBIgLgCIgDAAIAAgCQgFgDgIAAIAAgCQgCgDgGAAIgCgBQgggRgLgmIAAgDQABgIgEgDIAAgDIAAgjIAAgCIAAgCQASg9BEgLIACgBIALAAIADAAIAFAAIADAAQACAFAJgCIACgBQAHgBACAEIACAAQAMACAAgdQgEiIAAiKIAAgDIAAgFQALgeAigHIADAAIAIAAIADAAIAIAAIACAAQACAEAHgCIACAAIADAAQAAAFAIgCIADgBQAAAGAIgCIACAAIADAAQABAEAHgBIACAAQACAEAGgCIACgBIADAAQABAFAHgBIADgBIACAAQABAFAHgBIADAAIAFAAIADAAQAAAEAIgCIADAAIADAAQAAAEAFgBIADgBQAAAFAIgBIACAAIADAAQACAEAIgCIADAAQABAFAHgCIADgBQACAFAIgBIADAAIADAAQABAEAHgCIADAAIAFAAIADAAQABAFAHgCIADgBIACAAQAAAFAIgCIADAAQAHAGAMgBIACAAQABAFAHgCIADAAQADAFAKgCIADAAQARABAMAEIADAAQADAFAFABIADAAQARALAGAVIABADIAAGaIAAAEIgDAAIAAAKIAAADIAAADQgPAsgsARIgDAAIgKADIAAACIgDAAg");
	this.shape.setTransform(47.2,50.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("ACyEWIgCAAIgIAAIgCAAIgPAAIgDAAIgHAAIgBgCQgEgBgFAAIgBgCQgFgCgHgBIgCAAQgcgRgPgeIAAgDQABgJgFgDIAAgDIAAgHIAAgDIAAgUIAAgCIAAgIQAEAAgCgHIAAgCIAAgDIAAgDQAUgpAvgNIADAAIAlAAIACAAQAKAAAGAEIACABIABAAQADhxgEhsIgDAAIgEAAIgBgCIgKAAIAAgCIgJgBIgDAAIgCAAIgBgBIgHgBIAAgCQgFgBgFAAIgCAAIgegFIAAgCIgKgBIgDAAIAAgBIgKgBIAAgBIgJgBIgDAAIAAgBIgKgCIgCAAQgUgEgUgDIAAgCIgNgBIAAgBIgKgBIAAgBIgJgBIgCAAIAAgCIgKgBIgDAAIAAgCQgDgBgEAAIgBgBQgHgCgHABIgDAAQgGgDgJAAIAAgBIgJgBIAAEiIAAACIAAAUIAAAEIAAAEIAAACIgDAAIAAAIIAAACIgBAAQAAAGgEgBIAAAGIAAACIAAACQgOAagaAPIgCAAQgFAAgDACIAAACIgCAAIgIAAIAAADIgCAAQgFAFgKgDIgDAAIgKAAIgCAAIgFAAIAAgBIgKgBIgDAAIAAgCQgFgDgHAAIgBgCQgCgDgEAAIgDgBQgdgPgLglIAAgCQACgHgEgDIAAgCIAAghIAAgCIAAgCQARg5A+gLIADAAIAKAAIACAAIAFAAIADAAQACAFAIgDIACAAQAHgBACAEIABAAQAMACgBgbQgDh/AAiBIAAgCIAAgFQALgcAfgHIACAAIAIAAIACAAIAIAAIACAAQABAFAHgCIACAAIADAAQAAAEAHgCIADAAQABAEAGgBIADAAIACAAQABAEAHgBIACgBQABAFAHgCIABgBIADAAQAAAFAHgCIADAAIACAAQABAEAHgBIACAAIAFAAIADAAQAAAEAHgCIADAAIACAAQAAAFAFgCIADgBQAAAFAHgBIACgBIADAAQACAEAIgBIACAAQABAEAHgCIACAAQADAEAHgCIADAAIACAAQABAFAHgBIACgBIAFAAIADAAQABAFAGgCIADAAIACAAQABADAHgBIACAAQAHAEALABIACAAQABAFAHgCIACAAQADAEAKgCIACAAQAPABANAEIACAAQADAEAEABIADAAQAQALAGATIAAACIAAF/IAAADIgCAAIAAAJIAAADIgBADQgOApgoAQIgCAAIgLACIAAADIgCAAg");
	this.shape_1.setTransform(50.4,53.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AmAGBQigifAAjiQAAjhCgifQCfigDhAAQDiAACfCgQCgCfAADhQAADiigCfQifCgjiAAQjhAAifigg");
	this.shape_2.setTransform(54.5,54.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.player, new cjs.Rectangle(0,0,108.9,108.9), null);


(lib.cen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.WhatsAppImage20190320at014026();
	this.instance.parent = this;
	this.instance.setTransform(-640,-363,1,1.113);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cen, new cjs.Rectangle(-640,-363,1280,724.4), null);


(lib.luvas1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Luvas();
	this.instance.parent = this;
	this.instance.setTransform(-64,-61,0.169,0.169);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.luvas1, new cjs.Rectangle(-64,-61,128.5,121.7), null);


(lib.go_interno = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap47();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.go_interno, new cjs.Rectangle(0,0,84,64), null);


(lib.capacete = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CapaceteIntervel();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.096,0.096);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.capacete, new cjs.Rectangle(0,0,142,77.6), null);


(lib.canelinha_nu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CanelinhaSemVestes();
	this.instance.parent = this;
	this.instance.setTransform(-97,-214,0.132,0.132);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.canelinha_nu, new cjs.Rectangle(-97,-214,193.9,427.9), null);


(lib.camiseta3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Regata();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.117,0.117);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.camiseta3, new cjs.Rectangle(0,0,118.1,142.9), null);


(lib.camiseta2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Social();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.122,0.122);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.camiseta2, new cjs.Rectangle(0,0,157,147.9), null);


(lib.camiseta1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CamisetaIntervel();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.146,0.146);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.camiseta1, new cjs.Rectangle(0,0,172.7,177.9), null);


(lib.calca2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Shorts();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.251,0.251);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.calca2, new cjs.Rectangle(0,0,181.9,102.6), null);


(lib.calca1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CalçaIntervel();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.213,0.213);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.calca1, new cjs.Rectangle(0,0,152.3,125.9), null);


(lib.go = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.go_interno();
	this.instance.parent = this;
	this.instance.setTransform(42,32,1,1,0,0,0,42,32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,84,64);


(lib.fechar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.x();
	this.instance.parent = this;
	this.instance.setTransform(14.8,15.1,0.567,0.567,45,0,0,13.1,13.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(5,1,1).p("ACUAAQAAA9grAsQgsArg9AAQg9AAgrgrQgrgsAAg9QAAg9ArgrQArgrA9AAQA9AAAsArQArArAAA9g");
	this.shape.setTransform(14.8,14.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,34.6,34.6);


(lib.aviso1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 1
	this.instance = new lib.Bitmap51();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

	// Layer 3
	this.fechar_btn = new lib.fechar();
	this.fechar_btn.parent = this;
	this.fechar_btn.setTransform(589.1,-22.9,1,1,0,0,0,14.8,14.8);
	new cjs.ButtonHelper(this.fechar_btn, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.678)").s().p("AhoBoQgrgqAAg+QAAg8ArgsQArgrA9AAQA9AAAsArQArAsAAA8QAAA+grAqQgsAsg9AAQg9AAgrgsg");
	this.shape.setTransform(563.3,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.fechar_btn}]}).to({state:[]},1).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.678)").s().p("EgxGALMIAA2XMBiNAAAIAAWXg");
	this.shape_1.setTransform(283.3,48.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31,-40.2,637.4,160.5);


// stage content:
(lib.gametreinamento = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		/*this.on('click', function(){
		    this.play();
		});*/
		this.go_btn.on('click', function(){
		    this.parent.play();
		});
	}
	this.frame_9 = function() {
		this.stop();
		this.go_btn.on('click', function(){
		    this.play();
		});
	}
	this.frame_14 = function() {
		this.stop();
		
		this.go_btn.on('click', function(){
		    this.play();
		});
		/*
		this.on('click', function(){
		    this.play();
		});*/
	}
	this.frame_15 = function() {
		this.stop();
		this.go_btn.on('click', function () {
			this.play();
		});
		/*this.on('click', function () {
			this.aviso_mc.play();
		});*/
		this.aviso_mc.on('click', function () {
			this.play();
		});
		
		this.luvas1_mc.addEventListener(("pressmove" || "touchstart"), Drag.bind(this));
		this.luvas1_mc.addEventListener(("pressup"), Solta.bind(this));
		
		this.camiseta1_mc.addEventListener(("pressmove" || "touchstart"), Drag.bind(this));
		this.camiseta1_mc.addEventListener(("pressup"), Solta.bind(this));
		
		this.camiseta2_mc.addEventListener(("pressmove" || "touchstart"), Drag.bind(this));
		this.camiseta3_mc.addEventListener(("pressmove" || "touchstart"), Drag.bind(this));
		
		this.calca1_mc.addEventListener(("pressmove" || "touchstart"), Drag.bind(this));
		this.calca2_mc.addEventListener(("pressmove" || "touchstart"), Drag.bind(this));
		
		this.sapato1_mc.addEventListener(("pressmove" || "touchstart"), Drag.bind(this));
		this.sapato2_mc.addEventListener(("pressmove" || "touchstart"), Drag.bind(this));
		
		this.capacete1_mc.addEventListener(("pressmove" || "touchstart"), Drag.bind(this));
		
		this.win = false;  
		this.resetPosition = true;  
		this.ox;
		this.oy;
		
		this.luvas1_mc.certo = 1;
		this.luvas1_mc.ox = this.luvas1_mc.x;
		this.luvas1_mc.oy = this.luvas1_mc.y;
		/*
		this.luvas1_mc.on("click", function(evt){
			//var p = stage.localToGlobal(evt.stageX, evt.stageY);
			var p = stage.globalToLocal(evt.stageX, evt.stageY);
			console.log('p', p.x);
			console.log('p', evt.stageX);
			console.log('p', evt.x);
			evt.ox = p.x;
			evt.oy = p.y;
			this.ox1 = p.x;
			this.oy1 = p.y;
			this.luvas1_mc.ox = p.x;
			this.luvas1_mc.oy = p.y;
			this.parent.ox = p.x;
			stage.luvas1_mc.oy = p.y;
		})*/
		
		function Drag(evt) {
			//function(evt){
		    var p = stage.globalToLocal(evt.stageX, evt.stageY);
		    evt.currentTarget.x = p.x;
		    evt.currentTarget.y = p.y;
		}
			
		function Solta(evt) {
			var p = stage.globalToLocal(evt.stageX, evt.stageY);
		    
		    if(intersect(evt.currentTarget, this.canelinha_nu_mc)) {
				console.log('FOI');
				evt.currentTarget.x = p.x;
				evt.currentTarget.y = p.y;
			} else {
				console.log('N FOI');
				evt.currentTarget.x = evt.ox;
				evt.currentTarget.y = evt.currentTarget.oy;
			}
		}
		//returns true or false
		function intersect(drag, target) {
			//var pt = stage.globalToLocal(target.x, target.y); //-----This line
			var pt = stage.localToGlobal(drag.x, drag.y); //-----This line
			console.log('ptx', pt.x);
			console.log('dragx', drag.x);
			console.log('targetx', target.x);
			console.log('thisx', this.x);
			console.log('this.ox', this.ox);
			console.log('this.ox1', this.ox1);
			console.log('drag.ox', drag.ox);
			
			console.log('pty', pt.y);
			console.log('dragy', drag.y);
			console.log('targety', target.y);
			console.log('thisy', this.y);
			console.log('this.oy', this.parent.oy);
			console.log('this.oy1', this.oy1);
			console.log('drag.oy', drag.oy);
			
			//console.log('stage.luvas1_mc.certo', stage.luvas1_mc.certo);
			console.log('this.certo', this.certo);
			console.log('drag.certo', drag.certo);
			
			//console.log('this.target', this.target.x);
			cond1 = pt.x<(140+50) && pt.x>(140-50);
			cond2 = pt.y<(250+100) && pt.y>(250-100);
			console.log('cond1', cond1);
			console.log('cond2', cond2);
			if (cond1 && cond2) {
				console.log('certo');
				if(drag.certo) {
					console.log('AAAAAAAAAAAAAAAAAAAAAAEEEEEEEW');
				}
				return true;
			} else {
				console.log('certo');
				return false;
			}
		}
		
		/*
		this.piecePrefix = "camiseta";  
		this.slotPrefix = "canelinha_nu_mc";  
		  
		this.start = function()  
		{  
			 for (var i = 0, total = this.pieces.children.length; i < total; i++)  
			 {  
				  var piece = this.pieces.children[i];  
				  piece.originalX = piece.x;  
				  piece.originalY = piece.y;  
			 }  
		  
			 this.on("mousedown", this.mouseDownHandler.bind(this));  
			 this.on("pressmove", this.pressMoveHandler.bind(this));  
			 this.on("pressup", this.pressUpHandler.bind(this));  
		}.bind(this);  
		  
		this.mouseDownHandler = function(e)  
		{  
			 if (e.target.parent == this.pieces)  
				  this.pieces.setChildIndex(e.target, this.pieces.children.length - 1);  
		};  
		  
		this.pressMoveHandler = function(e)  
		{  
			 if (e.target.parent == this.pieces)  
			 {  
				  e.target.x = e.stageX / stage.scaleX;  
				  e.target.y = e.stageY / stage.scaleY;  
			 }  
		};  
		  
		this.pressUpHandler = function(e)  
		{  
			 var target = e.target;  
			 var slot;  
			 var objects;  
		  
			 if (!target || target.parent != this.pieces)  
				  return;  
		  
			 objects = this.slots.getObjectsUnderPoint(target.x, target.y);  
		  
			 if (objects.length == 0)  
			 {  
				  this.returnToOrigin(target);  
				  return;  
			 }  
		  
			 slot = objects[0].parent;  
		  
			 if (slot)  
			 {  
				  if (target.name.replace(this.piecePrefix, "") == slot.name.replace(this.slotPrefix, ""))  
				  {  
					   target.x = slot.x;  
					   target.y = slot.y;  
					   target.mouseEnabled = false;  
					   target.alpha = 0.5;  
					   target.inPlace = true;  
				  }  
				  else  
					   this.returnToOrigin(target);  
			 }  
		  
			 for (i = 0, total = this.pieces.children.length; i < total; i++)  
				  if (!this.pieces.getChildAt(i).inPlace)  
					   return;  
		  
			 this.onWin();  
		};  
		  
		this.returnToOrigin = function(obj)  
		{  
			 if (this.resetPosition)  
			 {  
				  obj.x = obj.originalX;  
				  obj.y = obj.originalY;  
			 }  
		}.bind(this);  
		  
		this.onWin = function()  
		{  
			 this.win = true;  
			 exportRoot.gotoAndStop(1);  
		}.bind(this);  
		  
		stage.on("drawstart", this.start, this, true);  
		
		/*
		//dragger object
		var dragger = this.luvas1_mc;
		//Correct and incorrect drop spaces.
		var right = this.canelinha_nu_mc;
		var wrong = this.camiseta1_mc;
		var px;
		var py;
		
		dragger.on("pressmove", function(evt){
		    //evt.currentTarget._goto(0);
		    evt.x = evt.stageX;
		    evt.y = evt.stageY;
		
		    //can remove this whole thing in the final version
		    if(intersect(evt, right)){
		        evt.alpha=.5;
		
		    }else if(intersect(evt, wrong)){
		        evt.alpha=.2;
		
		    }else{
		        evt.alpha=1;
		    }
		
		    stage.update(evt);
		}, this);
		
		dragger.on("pressup", function(evt){
		    //lock position of drag object and play animation if any
		    
		
		    //remove the alpha changes in final
		    if(intersect(evt, right)){
		        dragger.mouseEnabled = false;
		        dragger.play();
		        //exportRoot.fb_reading.gotoAndPlay(1);
		        evt.alpha=1;
				dragger.x = dragger.x;
				dragger.y = dragger.y;
		    }else if(intersect(evt, wrong)){
		        dragger.mouseEnabled = false;;
		        dragger.play();
		        //exportRoot.fb_reading.gotoAndPlay(50);
		        evt.currentTarget.alpha=1;
		    }
		
		    stage.update(evt);
		}, this);
		
		//returns true or false
		function intersect(drag, target) {
			var pt = drag.globalToLocal(target.x, target.y); //-----This line
			if (target.hitTest(pt.x, pt.y)) {
				console.log('certo');
				return true;
			} else {
				console.log('certo');
				return false;
			}
		}
		/*this.luvas1_mc.on("pressmove", function(evt){
		    var p = stage.globalToLocal(evt.stageX, evt.stageY);
		    evt.currentTarget.x = p.x;
		    evt.currentTarget.y = p.y;
		});*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(5).call(this.frame_14).wait(1).call(this.frame_15).wait(1));

	// player
	this.instance = new lib.player();
	this.instance.parent = this;
	this.instance.setTransform(38,589.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(16));

	// logo-top
	this.instance_1 = new lib.Bitmap41();
	this.instance_1.parent = this;
	this.instance_1.setTransform(901,23);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(16));

	// titulo
	this.instance_2 = new lib.Bitmap48();
	this.instance_2.parent = this;
	this.instance_2.setTransform(58,53);

	this.instance_3 = new lib.Bitmap49();
	this.instance_3.parent = this;
	this.instance_3.setTransform(67,23);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},9).to({state:[{t:this.instance_3}]},5).wait(2));

	// aviso
	this.aviso_mc = new lib.aviso1();
	this.aviso_mc.parent = this;
	this.aviso_mc.setTransform(653.7,294.5,1,1,0,0,0,251.5,44);
	this.aviso_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.aviso_mc).wait(15).to({_off:false},0).wait(1));

	// extra
	this.sapato2_mc = new lib.sapato2();
	this.sapato2_mc.parent = this;
	this.sapato2_mc.setTransform(1134.5,607.6,0.791,0.791,0,0,0,86.4,23.7);

	this.sapato1_mc = new lib.sapato1();
	this.sapato1_mc.parent = this;
	this.sapato1_mc.setTransform(975.8,607.9,0.697,0.697,0,0,0,99,27.3);

	this.luvas1_mc = new lib.luvas1();
	this.luvas1_mc.parent = this;
	this.luvas1_mc.setTransform(745.5,643.8,1,1,0,0,0,64.2,60.9);

	this.capacete1_mc = new lib.capacete();
	this.capacete1_mc.parent = this;
	this.capacete1_mc.setTransform(817,577.4,1.428,1.428,0,0,0,71,38.9);

	this.camiseta3_mc = new lib.camiseta3();
	this.camiseta3_mc.parent = this;
	this.camiseta3_mc.setTransform(656.9,365.6,1.12,1.12,0,0,0,59.1,71.5);

	this.camiseta1_mc = new lib.camiseta1();
	this.camiseta1_mc.parent = this;
	this.camiseta1_mc.setTransform(1036.7,364.4,0.914,0.914,0,0,0,86.3,89.2);

	this.calca2_mc = new lib.calca2();
	this.calca2_mc.parent = this;
	this.calca2_mc.setTransform(1035.1,472,0.515,0.515,0,0,0,91.2,51.5);

	this.calca1_mc = new lib.calca1();
	this.calca1_mc.parent = this;
	this.calca1_mc.setTransform(837.5,299.6,0.617,0.617,0,0,0,76.3,63);

	this.camiseta2_mc = new lib.camiseta2();
	this.camiseta2_mc.parent = this;
	this.camiseta2_mc.setTransform(1201.6,324.5,1,1,-0.4,0,0,78.5,74);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.camiseta2_mc},{t:this.calca1_mc},{t:this.calca2_mc},{t:this.camiseta1_mc},{t:this.camiseta3_mc},{t:this.capacete1_mc},{t:this.luvas1_mc},{t:this.sapato1_mc},{t:this.sapato2_mc}]},15).wait(1));

	// conteudo
	this.go_btn = new lib.go();
	this.go_btn.parent = this;
	this.go_btn.setTransform(1036.5,621.2,1,1,0,0,0,42,32);
	new cjs.ButtonHelper(this.go_btn, 0, 1, 1);

	this.instance_4 = new lib.titulo();
	this.instance_4.parent = this;
	this.instance_4.setTransform(1033,479.5,1,1,0,0,0,247,240.5);

	this.instance_5 = new lib.Bitmap46();
	this.instance_5.parent = this;
	this.instance_5.setTransform(178,142);

	this.instance_6 = new lib.Bitmap50();
	this.instance_6.parent = this;
	this.instance_6.setTransform(325,223);

	this.instance_7 = new lib.CanelinhaSemVestes();
	this.instance_7.parent = this;
	this.instance_7.setTransform(147,223,0.132,0.132);

	this.canelinha_nu_mc = new lib.canelinha_nu();
	this.canelinha_nu_mc.parent = this;
	this.canelinha_nu_mc.setTransform(329.2,601.2,1,1,0,0,0,97,213.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.go_btn,p:{x:1036.5,y:621.2}}]}).to({state:[{t:this.instance_5},{t:this.go_btn,p:{x:640,y:621}}]},9).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.go_btn,p:{x:541.5,y:494.8}}]},5).to({state:[{t:this.canelinha_nu_mc}]},1).wait(1));

	// cenario
	this.instance_8 = new lib.Bitmap38();
	this.instance_8.parent = this;
	this.instance_8.setTransform(0,-2,3.207,3.207);

	this.instance_9 = new lib.Bitmap45();
	this.instance_9.parent = this;
	this.instance_9.setTransform(0,0,1.357,1.358);

	this.cenario_mc = new lib.cen();
	this.cenario_mc.parent = this;
	this.cenario_mc.setTransform(1280,720,1,1,0,0,0,640,360);
	new cjs.ButtonHelper(this.cenario_mc, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).to({state:[{t:this.instance_9}]},9).to({state:[{t:this.cenario_mc}]},5).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(640,358,1282.7,724.7);
// library properties:
lib.properties = {
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/game_treinamento_atlas_.png?1553069048740", id:"game_treinamento_atlas_"},
		{src:"sounds/Walk_In_The_Park.mp3?1553069048775", id:"Walk_In_The_Park"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;