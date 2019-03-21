(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"game_treinamento_atlas_", frames: [[3644,1624,327,119],[3424,3712,494,481],[3644,1429,300,193],[3943,66,101,3],[2955,2642,943,530],[2955,3174,925,536],[3943,0,84,64],[1992,2438,480,65],[1992,2505,480,65],[3644,1218,391,209],[1467,2438,523,88],[2707,3712,715,591],[2761,0,1180,1216],[0,0,1465,3233],[1467,2642,1486,812],[2761,1218,881,1422],[1282,3456,1423,478],[1467,1219,1006,1217],[1698,3936,969,266],[727,3936,969,267],[0,3888,725,409],[1467,0,1292,1217],[0,3235,1280,651]]}
];


// symbols:



(lib.Bitmap41 = function() {
	this.spriteSheet = ss["game_treinamento_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap42 = function() {
	this.spriteSheet = ss["game_treinamento_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap43 = function() {
	this.spriteSheet = ss["game_treinamento_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap44 = function() {
	this.spriteSheet = ss["game_treinamento_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap45 = function() {
	this.spriteSheet = ss["game_treinamento_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap46 = function() {
	this.spriteSheet = ss["game_treinamento_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap47 = function() {
	this.spriteSheet = ss["game_treinamento_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap48 = function() {
	this.spriteSheet = ss["game_treinamento_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap49 = function() {
	this.spriteSheet = ss["game_treinamento_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap50 = function() {
	this.spriteSheet = ss["game_treinamento_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap51 = function() {
	this.spriteSheet = ss["game_treinamento_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CalçaIntervel = function() {
	this.spriteSheet = ss["game_treinamento_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CamisetaIntervel = function() {
	this.spriteSheet = ss["game_treinamento_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CanelinhaSemVestes = function() {
	this.spriteSheet = ss["game_treinamento_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CapaceteIntervel = function() {
	this.spriteSheet = ss["game_treinamento_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CintodeSegurança = function() {
	this.spriteSheet = ss["game_treinamento_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.LuvasdeVaqueta = function() {
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



(lib.WhatsAppImage20190321at021159 = function() {
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


(lib.cen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.WhatsAppImage20190321at021159();
	this.instance.parent = this;
	this.instance.setTransform(-640,-361,1,1.108);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cen, new cjs.Rectangle(-640,-361,1280,721.6), null);


(lib.luvas1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.LuvasdeVaqueta();
	this.instance.parent = this;
	this.instance.setTransform(212.9,80.6,0.169,0.169,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.luvas1, new cjs.Rectangle(-27,0,239.9,80.6), null);


(lib.go_interno = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap47();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.go_interno, new cjs.Rectangle(0,0,84,64), null);


(lib.cinto = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CintodeSegurança();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.134,0.134);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cinto, new cjs.Rectangle(0,0,117.7,190), null);


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


(lib.x_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.x();
	this.instance.parent = this;
	this.instance.setTransform(10.5,10.5,0.567,0.567,45,0,0,13.1,13.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.x_1, new cjs.Rectangle(-2,-2,25,25), null);


(lib.player = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		playSound("Walk_In_The_Park");
	}
	this.frame_1 = function() {
		this.stop();
		createjs.Sound.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 5
	this.instance = new lib.x_1();
	this.instance.parent = this;
	this.instance.setTransform(58.5,52.2,4.903,4.903,0,0,0,10.6,10.6);
	this.instance.alpha = 0.539;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEFEFE").s().p("AC/EqIgCAAIgIAAIgDAAIgQAAIgDAAIgIAAIAAgBQgFgCgGABIAAgCQgGgDgHgBIgCAAQgfgSgPggIAAgDQAAgKgFgDIAAgEIAAgHIAAgDIAAgVIAAgDIAAgIQAEgBgCgHIAAgDIAAgDIAAgCQAWgtAygOIADAAIAoAAIADAAQAKABAGAEIACAAIACAAQADh5gFh0IgCAAIgFAAIAAgBIgLgCIgBgBQgFgCgFABIgCAAIgDAAIAAgCIgIgBIAAgBQgGgCgFAAIgDAAIgggFIAAgBIgLgCIgCAAIgBgBQgEgBgGgBIAAgBIgKgBIgDAAIgBgBIgKgBIgCgBQgWgEgVgDIgBgCQgGgCgHAAIAAgBIgKgBIAAgBIgKgBIgDAAIAAgCQgFgCgFAAIgDAAIAAgBIgIgBIAAgCIgQAAIgDgBQgGgCgKAAIAAgCIgLgBIAAE4IAAACIAAAWIAAADIAAAFIAAADIgCAAIAAAIIAAACIgCAAQABAHgFgBIAAAFIAAADIAAADQgPAbgbAQIgDAAQgFAAgDACIAAADIgDAAIgIAAIAAADIgCAAQgGAEgLgCIgCAAIgLAAIgDAAIgFAAIgBgBIgKgBIgCAAIgBgDQgFgDgIAAIgBgCQgCgDgFAAIgDgBQgfgRgLgnIAAgCQACgIgFgDIAAgDIAAgjIAAgCIAAgCQASg+BEgKIACgBIALAAIADAAIAFAAIADAAQACAFAIgCIADgBQAIgBABAEIACAAQAMACgBgdQgDiIAAiKIAAgCIAAgGQAMgeAhgHIADAAIAIAAIADAAIAIAAIACAAQACAEAGgCIADAAIADAAQAAAFAIgCIACgBQABAGAHgCIADAAIADAAQAAAEAIgCIADAAQAAAFAIgCIABgBIADAAQAAAGAIgCIADAAIACAAQABAEAHgBIADAAIAFAAIADAAQABAEAHgCIADAAIACAAQAAAEAGgBIACgBQACAFAGgBIADAAIADAAQACAEAJgCIACAAQABAEAHgBIADgBQACAFAJgBIACAAIADAAQABAEAHgCIADAAIAFAAIADAAQAAAFAIgCIACgBIADAAQABAFAHgBIADAAQAHAEAMAAIACAAQABAFAHgCIADAAQAEAFAJgCIADAAQARABANAEIACAAQADAFAFABIADAAQARALAHAVIAAADIAAGbIAAADIgDAAIAAAKIAAADIgBADQgOAsgsARIgCABIgLACIAAACIgDAAg");
	this.shape.setTransform(51.2,51.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("ACyEWIgCAAIgIAAIgCAAIgPAAIgDAAIgHAAIgBgCQgEgBgFAAIgBgCQgFgCgHgBIgCAAQgcgRgPgeIAAgDQABgJgFgDIAAgCIAAgIIAAgDIAAgUIAAgCIAAgIQAEAAgCgHIAAgDIAAgCIAAgDQAUgpAvgNIADAAIAlAAIACAAQAKAAAGAEIACABIABAAQADhxgEhsIgDAAIgEAAIgBgCIgKgBIAAgBIgJgBIgDAAIgCAAIgBgBIgHgBIAAgCQgFgBgFAAIgCAAIgegFIAAgCIgKgBIgDAAIAAgBIgKgBIAAgBIgJgBIgDAAIAAgBIgKgBIgCgBQgUgEgUgDIAAgBIgNgCIAAgBIgKgBIAAgBIgJgBIgCAAIAAgCIgKgBIgDAAIAAgCQgDgBgEAAIgBgBQgHgBgHgBIgDAAQgGgCgJAAIAAgBIgJgBIAAEiIAAACIAAAUIAAAEIAAAEIAAACIgDAAIAAAIIAAADIgBAAQAAAFgEgBIAAAGIAAACIAAACQgOAagaAPIgCAAQgFAAgDACIAAACIgCAAIgIAAIAAADIgCABQgFADgKgCIgDAAIgKAAIgCAAIgFAAIAAgBIgKgBIgDAAIAAgCQgFgDgHAAIgBgCQgCgDgEAAIgDgBQgdgQgLgjIAAgDQACgHgEgDIAAgCIAAghIAAgCIAAgCQARg5A+gLIADAAIAKAAIACAAIAFAAIADAAQACAEAIgBIACAAQAHgCACAEIABAAQAMACgBgbQgDiAAAh/IAAgDIAAgFQALgcAfgHIACAAIAIAAIACAAIAIAAIACAAQABAFAHgCIACgBIADAAQAAAFAHgCIADAAQABAEAGgBIADAAIACAAQABADAHgBIACAAQABAFAHgCIABgBIADAAQAAAFAHgCIADAAIACAAQABAEAHgBIACAAIAFAAIADAAQAAAEAHgCIADAAIACAAQAAAEAFgBIADgBQAAAFAHgBIACgBIADAAQACAEAIgBIACAAQABAEAHgCIACAAQADAFAHgDIADAAIACAAQABAFAHgBIACgBIAFAAIADAAQABAFAGgCIADAAIACAAQABADAHgBIACAAQAHAEALABIACAAQABAFAHgDIACAAQADAFAKgCIACAAQAPABANAEIACAAQADAEAEABIADAAQAQALAGATIAAACIAAF/IAAACIgCAAIAAAKIAAADIgBADQgOApgoAQIgCAAIgLACIAAADIgCAAg");
	this.shape_1.setTransform(54.4,54.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AmAGBQigifAAjiQAAjhCgifQCfigDhAAQDiAACfCgQCgCfAADhQAADiigCfQifCgjiAAQjhAAifigg");
	this.shape_2.setTransform(54.5,54.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,108.9,108.9);


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
	this.instance = new lib.x_1();
	this.instance.parent = this;
	this.instance.setTransform(14.8,15.1,1,1,0,0,0,10.5,10.5);

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
		this.music_mc.on('click', function(){
			this.play();
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
		this.aviso_mc.on('click', function () {
			this.play();
		});
		
		//this.camiseta1_mc.addEventListener(("click"), localInicial.bind(this.camiseta1_mc)); 
		this.camiseta1_mc.addEventListener(("pressmove" || "touchstart"), Drag.bind(this.camiseta1_mc));
		this.camiseta1_mc.addEventListener(("pressup"), Solta.bind(this.camiseta1_mc));
		this.camiseta1_mc.ox = this.camiseta1_mc.x;
		this.camiseta1_mc.oy = this.camiseta1_mc.y;
		this.camiseta1_mc.fx = this.camiseta_final_mc.x;
		this.camiseta1_mc.fy = this.camiseta_final_mc.y;
		this.camiseta1_mc.camiseta = true;
		this.camiseta1_mc.certo = true;
		
		this.camiseta2_mc.addEventListener(("pressmove" || "touchstart"), Drag.bind(this.camiseta2_mc));
		this.camiseta2_mc.addEventListener(("pressup"), Solta.bind(this.camiseta2_mc));
		this.camiseta2_mc.ox = this.camiseta2_mc.x;
		this.camiseta2_mc.oy = this.camiseta2_mc.y;
		this.camiseta2_mc.fx = this.camiseta_final_mc.x;
		this.camiseta2_mc.fy = this.camiseta_final_mc.y;
		this.camiseta2_mc.camiseta = true;
		this.camiseta2_mc.certo = false;
		
		this.camiseta3_mc.addEventListener(("pressmove" || "touchstart"), Drag.bind(this.camiseta3_mc));
		this.camiseta3_mc.addEventListener(("pressup"), Solta.bind(this.camiseta3_mc));
		this.camiseta3_mc.ox = this.camiseta3_mc.x;
		this.camiseta3_mc.oy = this.camiseta3_mc.y;
		this.camiseta3_mc.fx = this.camiseta_final_mc.x;
		this.camiseta3_mc.fy = this.camiseta_final_mc.y;
		this.camiseta3_mc.camiseta = true;
		this.camiseta3_mc.certo = false;
		
		
		this.calca1_mc.addEventListener(("pressmove" || "touchstart"), Drag.bind(this.calca1_mc));
		this.calca1_mc.addEventListener(("pressup"), Solta.bind(this.calca1_mc));
		this.calca1_mc.ox = this.calca1_mc.x;
		this.calca1_mc.oy = this.calca1_mc.y;
		this.calca1_mc.fx = this.calca_final_mc.x;
		this.calca1_mc.fy = this.calca_final_mc.y;
		this.calca1_mc.calca = true;
		this.calca1_mc.certo = true;
		
		this.calca2_mc.addEventListener(("pressmove" || "touchstart"), Drag.bind(this.calca2_mc));
		this.calca2_mc.addEventListener(("pressup"), Solta.bind(this.calca2_mc));
		this.calca2_mc.ox = this.calca2_mc.x;
		this.calca2_mc.oy = this.calca2_mc.y;
		this.calca2_mc.fx = this.calca_final_mc.x;
		this.calca2_mc.fy = this.calca_final_mc.y;
		this.calca2_mc.calca = true;
		this.calca2_mc.certo = false;
		
		
		this.sapato1_mc.addEventListener(("pressmove" || "touchstart"), Drag.bind(this.sapato1_mc));
		this.sapato1_mc.addEventListener(("pressup"), Solta.bind(this.sapato1_mc));
		this.sapato1_mc.ox = this.sapato1_mc.x;
		this.sapato1_mc.oy = this.sapato1_mc.y;
		this.sapato1_mc.fx = this.sapato_final_mc.x;
		this.sapato1_mc.fy = this.sapato_final_mc.y;
		this.sapato1_mc.sapato = true;
		this.sapato1_mc.certo = true;
		
		this.sapato2_mc.addEventListener(("pressmove" || "touchstart"), Drag.bind(this.sapato2_mc));
		this.sapato2_mc.addEventListener(("pressup"), Solta.bind(this.sapato2_mc));
		this.sapato2_mc.ox = this.sapato2_mc.x;
		this.sapato2_mc.oy = this.sapato2_mc.y;
		this.sapato2_mc.fx = this.sapato_final_mc.x;
		this.sapato2_mc.fy = this.sapato_final_mc.y;
		this.sapato2_mc.sapato = true;
		this.sapato2_mc.certo = false;
		
		
		this.cinto1_mc.addEventListener(("pressmove" || "touchstart"), Drag.bind(this.cinto1_mc));
		this.cinto1_mc.addEventListener(("pressup"), Solta.bind(this.cinto1_mc));
		this.cinto1_mc.ox = this.cinto1_mc.x;
		this.cinto1_mc.oy = this.cinto1_mc.y;
		this.cinto1_mc.fx = this.cinto_final_mc.x;
		this.cinto1_mc.fy = this.cinto_final_mc.y;
		this.cinto1_mc.cinto = true;
		this.cinto1_mc.certo = true;
		
		
		this.capacete1_mc.addEventListener(("pressmove" || "touchstart"), Drag.bind(this.capacete1_mc));
		this.capacete1_mc.addEventListener(("pressup"), Solta.bind(this.capacete1_mc));
		this.capacete1_mc.ox = this.capacete1_mc.x;
		this.capacete1_mc.oy = this.capacete1_mc.y;
		this.capacete1_mc.fx = this.capacete_final_mc.x;
		this.capacete1_mc.fy = this.capacete_final_mc.y;
		this.capacete1_mc.cinto = true;
		this.capacete1_mc.certo = true;
		
		this.luvas1_mc.addEventListener(("pressmove" || "touchstart"), Drag.bind(this.luvas1_mc));
		this.luvas1_mc.addEventListener(("pressup"), Solta.bind(this.luvas1_mc));
		this.luvas1_mc.ox = this.luvas1_mc.x;
		this.luvas1_mc.oy = this.luvas1_mc.y;
		this.luvas1_mc.fx = this.luvas_final_mc.x;
		this.luvas1_mc.fy = this.luvas_final_mc.y;
		this.luvas1_mc.cinto = true;
		this.luvas1_mc.certo = true;
		
		this.win = false;  
		
		function Drag(evt) {
			//function(evt){
		    var p = stage.globalToLocal(evt.stageX, evt.stageY);
		    evt.currentTarget.x = p.x;
		    evt.currentTarget.y = p.y;
		}
		stage.camiseta_colocada = false;
		stage.camiseta_colocada_certa = false;
		stage.calca_colocada = false;
		stage.calca_colocada_certa = false;
		stage.sapato_colocada = false;
		stage.sapato_colocada_certa = false;
		
		stage.cinto_colocada = false;
		stage.cinto_colocada_certa = false;
		stage.capacete_colocada = false;
		stage.capacete_colocada_certa = false;
		stage.luvas_colocada = false;
		stage.luvas_colocada_certa = false;
		
		
		function Solta(evt) {
			var p = stage.globalToLocal(evt.stageX, evt.stageY);
		    console.log("Solta()");
			dropouNaArea=intersect(evt.currentTarget);
		    if(dropouNaArea) {
				console.log("dropouNaArea");
				console.log("evt.currentTarget.camiseta", evt.currentTarget.camiseta);
				if(evt.currentTarget.camiseta) {
					if(!stage.camiseta_colocada) {
						evt.currentTarget.x = evt.currentTarget.fx;
						evt.currentTarget.y = evt.currentTarget.fy;
						stage.camiseta_colocada = true;
						stage.camiseta_colocada_certa = evt.currentTarget.certo;
					} else {
						console.log("JA COLOCADA");
						evt.currentTarget.x = evt.currentTarget.ox;
						evt.currentTarget.y = evt.currentTarget.oy;
					}
				} else if(evt.currentTarget.calca) {
					if(!stage.calca_colocada) {
						evt.currentTarget.x = evt.currentTarget.fx;
						evt.currentTarget.y = evt.currentTarget.fy;
						stage.calca_colocada = true;
						stage.calca_colocada_certa = evt.currentTarget.certo;
					} else {
						console.log("JA COLOCADA");
						evt.currentTarget.x = evt.currentTarget.ox;
						evt.currentTarget.y = evt.currentTarget.oy;
					}
				} else if (evt.currentTarget.sapato) {
					if(!stage.sapato_colocada) {
						evt.currentTarget.x = evt.currentTarget.fx;
						evt.currentTarget.y = evt.currentTarget.fy;
						stage.sapato_colocada = true;
						stage.sapato_colocada_certa = evt.currentTarget.certo;
					} else {
						console.log("JA COLOCADA");
						evt.currentTarget.x = evt.currentTarget.ox;
						evt.currentTarget.y = evt.currentTarget.oy;
					}
				} else {
					evt.currentTarget.x = evt.currentTarget.fx;
					evt.currentTarget.y = evt.currentTarget.fy;
				}
			} else {
				if(evt.currentTarget.camiseta) {
					if(stage.camiseta_colocada) {
						stage.camiseta_colocada = false;
					}
				}
				
				if(evt.currentTarget.calca) {
					if(stage.calca_colocada) {
						stage.calca_colocada = false;
					}
				}
				
				if(evt.currentTarget.sapato) {
					if(stage.sapato_colocada) {
						stage.sapato_colocada = false;
					}
				}
				evt.currentTarget.x = evt.currentTarget.ox;
				evt.currentTarget.y = evt.currentTarget.oy;
			}
			checkWin();
		}
		function checkWin() {
			console.log("checkWin(camiseta_colocada_certa)", stage.camiseta_colocada_certa);
			console.log("checkWin(calca_colocada_certa)", stage.calca_colocada_certa);
			console.log("checkWin(sapato_colocada_certa)", stage.sapato_colocada_certa);
			if(stage.camiseta_colocada_certa && stage.calca_colocada_certa && stage.sapato_colocada_certa) {
				console.log("WWWWWWWWWWWIIIIIIIIIIIIIN");
			} else {
				console.log("NOT WWWWWWWWWWWIIIIIIIIIIIIIN");
			}
		}
		//returns true or false
		function intersect(drag) {
			//var pt = stage.globalToLocal(target.x, target.y); //-----This line
			var pt = stage.localToGlobal(drag.x, drag.y); //-----This line
			
			//console.log('this.target', this.target.x);
			cond1 = pt.x<(140+50) && pt.x>(140-50);
			cond2 = pt.y<(250+100) && pt.y>(250-160);
			if (cond1 && cond2) {
				return true;
			} else {
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
	this.music_mc = new lib.player();
	this.music_mc.parent = this;
	this.music_mc.setTransform(38,589.2);

	this.timeline.addTween(cjs.Tween.get(this.music_mc).wait(16));

	// logo-top
	this.instance = new lib.Bitmap41();
	this.instance.parent = this;
	this.instance.setTransform(994,21,0.753,0.753);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(16));

	// titulo
	this.instance_1 = new lib.Bitmap48();
	this.instance_1.parent = this;
	this.instance_1.setTransform(58,53);

	this.text = new cjs.Text("", "12px 'TimesNewRomanPSMT'", "#999999");
	this.text.lineHeight = 15;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(356.1,49.2);

	this.instance_2 = new lib.Bitmap49();
	this.instance_2.parent = this;
	this.instance_2.setTransform(67,23);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},9).to({state:[{t:this.instance_2},{t:this.text}]},5).wait(2));

	// aviso
	this.aviso_mc = new lib.aviso1();
	this.aviso_mc.parent = this;
	this.aviso_mc.setTransform(653.7,294.5,1,1,0,0,0,251.5,44);
	this.aviso_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.aviso_mc).wait(15).to({_off:false},0).wait(1));

	// extra
	this.luvas_final_mc = new lib.luvas1();
	this.luvas_final_mc.parent = this;
	this.luvas_final_mc.setTransform(205.1,495.1,0.665,0.491,0,0,0,64.2,61.1);
	this.luvas_final_mc.alpha = 0.012;

	this.capacete_final_mc = new lib.capacete();
	this.capacete_final_mc.parent = this;
	this.capacete_final_mc.setTransform(236.6,210.6,1.428,1.428,0,0,0,71,38.9);
	this.capacete_final_mc.alpha = 0.012;

	this.cinto_final_mc = new lib.cinto();
	this.cinto_final_mc.parent = this;
	this.cinto_final_mc.setTransform(225,428.3,1,1,0,0,0,58.9,95);
	this.cinto_final_mc.alpha = 0;

	this.cinto1_mc = new lib.cinto();
	this.cinto1_mc.parent = this;
	this.cinto1_mc.setTransform(474.9,470,1,1,0,0,0,58.9,95);

	this.sapato_final_mc = new lib.sapato1();
	this.sapato_final_mc.parent = this;
	this.sapato_final_mc.setTransform(226.1,587,0.697,0.697,0,0,0,99,27.3);
	this.sapato_final_mc.alpha = 0.039;

	this.calca_final_mc = new lib.calca1();
	this.calca_final_mc.parent = this;
	this.calca_final_mc.setTransform(226.7,530.1,0.617,0.617,0,0,0,76.3,63);
	this.calca_final_mc.alpha = 0.039;

	this.camiseta_final_mc = new lib.camiseta1();
	this.camiseta_final_mc.parent = this;
	this.camiseta_final_mc.setTransform(225.8,419.9,0.914,0.914,0,0,0,86.3,89.2);
	this.camiseta_final_mc.alpha = 0;

	this.sapato2_mc = new lib.sapato2();
	this.sapato2_mc.parent = this;
	this.sapato2_mc.setTransform(1134.5,607.6,0.791,0.791,0,0,0,86.4,23.7);

	this.sapato1_mc = new lib.sapato1();
	this.sapato1_mc.parent = this;
	this.sapato1_mc.setTransform(975.8,607.9,0.697,0.697,0,0,0,99,27.3);

	this.luvas1_mc = new lib.luvas1();
	this.luvas1_mc.parent = this;
	this.luvas1_mc.setTransform(749.9,631.1,0.665,0.491,0,0,0,64.2,61.1);

	this.capacete1_mc = new lib.capacete();
	this.capacete1_mc.parent = this;
	this.capacete1_mc.setTransform(817,577.4,1.428,1.428,0,0,0,71,38.9);

	this.camiseta3_mc = new lib.camiseta3();
	this.camiseta3_mc.parent = this;
	this.camiseta3_mc.setTransform(656.9,365.6,1.12,1.12,0,0,0,59.1,71.5);

	this.camiseta1_mc = new lib.camiseta1();
	this.camiseta1_mc.parent = this;
	this.camiseta1_mc.setTransform(1037,385.4,0.914,0.914,0,0,0,86.3,89.2);

	this.calca2_mc = new lib.calca2();
	this.calca2_mc.parent = this;
	this.calca2_mc.setTransform(1035.1,472,0.515,0.515,0,0,0,91.2,51.5);

	this.calca1_mc = new lib.calca1();
	this.calca1_mc.parent = this;
	this.calca1_mc.setTransform(837.5,299.6,0.617,0.617,0,0,0,76.3,63);

	this.camiseta2_mc = new lib.camiseta2();
	this.camiseta2_mc.parent = this;
	this.camiseta2_mc.setTransform(1201.6,324.5,1.097,1.097,-0.4,0,0,78.6,74);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.camiseta2_mc},{t:this.calca1_mc},{t:this.calca2_mc},{t:this.camiseta1_mc},{t:this.camiseta3_mc},{t:this.capacete1_mc},{t:this.luvas1_mc},{t:this.sapato1_mc},{t:this.sapato2_mc},{t:this.camiseta_final_mc},{t:this.calca_final_mc},{t:this.sapato_final_mc},{t:this.cinto1_mc},{t:this.cinto_final_mc},{t:this.capacete_final_mc},{t:this.luvas_final_mc}]},15).wait(1));

	// conteudo
	this.go_btn = new lib.go();
	this.go_btn.parent = this;
	this.go_btn.setTransform(1036.5,621.2,1,1,0,0,0,42,32);
	new cjs.ButtonHelper(this.go_btn, 0, 1, 1);

	this.instance_3 = new lib.titulo();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1033,479.5,1,1,0,0,0,247,240.5);

	this.instance_4 = new lib.Bitmap46();
	this.instance_4.parent = this;
	this.instance_4.setTransform(178,142);

	this.instance_5 = new lib.Bitmap50();
	this.instance_5.parent = this;
	this.instance_5.setTransform(325,223);

	this.instance_6 = new lib.CanelinhaSemVestes();
	this.instance_6.parent = this;
	this.instance_6.setTransform(147,223,0.132,0.132);

	this.canelinha_nu_mc = new lib.canelinha_nu();
	this.canelinha_nu_mc.parent = this;
	this.canelinha_nu_mc.setTransform(329.2,601.2,1,1,0,0,0,97,213.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.go_btn,p:{x:1036.5,y:621.2}}]}).to({state:[{t:this.instance_4},{t:this.go_btn,p:{x:640,y:621}}]},9).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.go_btn,p:{x:541.5,y:494.8}}]},5).to({state:[{t:this.canelinha_nu_mc}]},1).wait(1));

	// cenario
	this.cenario_mc = new lib.cen();
	this.cenario_mc.parent = this;
	this.cenario_mc.setTransform(1280,720,1,1,0,0,0,640,360);
	new cjs.ButtonHelper(this.cenario_mc, 0, 1, 1);

	this.instance_7 = new lib.Bitmap45();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,0,1.357,1.358);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.cenario_mc}]}).to({state:[{t:this.instance_7}]},9).to({state:[{t:this.cenario_mc}]},5).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(640,359,1280,721.6);
// library properties:
lib.properties = {
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/game_treinamento_atlas_.png?1553147669941", id:"game_treinamento_atlas_"},
		{src:"sounds/Walk_In_The_Park.mp3?1553147670080", id:"Walk_In_The_Park"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;