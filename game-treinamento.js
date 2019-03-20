(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"game_treinamento_atlas_", frames: [[1963,3912,400,226],[3732,3380,327,119],[1467,3912,494,481],[3339,3591,300,193],[4061,3447,101,3],[1467,3380,943,530],[2412,3380,925,536],[3732,3568,84,64],[3732,3501,480,65],[4061,3380,480,65],[3339,3380,391,209],[3339,3786,523,88],[0,3380,1465,3233],[0,0,6894,3378]]}
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



(lib.CanelinhaSemVestes = function() {
	this.spriteSheet = ss["game_treinamento_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Cenário = function() {
	this.spriteSheet = ss["game_treinamento_atlas_"];
	this.gotoAndStop(13);
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

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AmAGBQigifAAjiQAAjhCgifQCfigDhAAQDiAACfCgQCgCfAADhQAADiigCfQifCgjiAAQjhAAifigg");
	this.shape.setTransform(54.5,54.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.player, new cjs.Rectangle(0,0,108.9,108.9), null);


(lib.go = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap47();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

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
	this.frame_9 = function() {
		this.stop();
		this.go_btn.on('click', function(){
		    this.parent.play();
		});
	}
	this.frame_14 = function() {
		this.stop();
		this.go_btn.on('click', function(){
		    this.parent.play();
		});
	}
	this.frame_15 = function() {
		this.stop();
		this.go_btn.on('click', function(){
		    this.parent.play();
		});
		this.aviso_mc.on('click',function(){
			this.play();
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(5).call(this.frame_14).wait(1).call(this.frame_15).wait(1));

	// player
	this.instance = new lib.player();
	this.instance.parent = this;
	this.instance.setTransform(92.5,643.7,1,1,0,0,0,54.5,54.5);

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

	// conteudo
	this.instance_4 = new lib.titulo();
	this.instance_4.parent = this;
	this.instance_4.setTransform(1033,479.5,1,1,0,0,0,247,240.5);

	this.go_btn = new lib.go();
	this.go_btn.parent = this;
	this.go_btn.setTransform(640,621,1,1,0,0,0,42,32);
	new cjs.ButtonHelper(this.go_btn, 0, 1, 1);

	this.instance_5 = new lib.Bitmap46();
	this.instance_5.parent = this;
	this.instance_5.setTransform(178,142);

	this.instance_6 = new lib.Bitmap50();
	this.instance_6.parent = this;
	this.instance_6.setTransform(325,223);

	this.instance_7 = new lib.CanelinhaSemVestes();
	this.instance_7.parent = this;
	this.instance_7.setTransform(147,223,0.132,0.132);

	this.aviso_mc = new lib.aviso1();
	this.aviso_mc.parent = this;
	this.aviso_mc.setTransform(858.7,209,1,1,0,0,0,261.5,44);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_5},{t:this.go_btn,p:{x:640,y:621}}]},9).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.go_btn,p:{x:541.5,y:494.8}}]},5).to({state:[{t:this.instance_7},{t:this.aviso_mc}]},1).wait(1));

	// cenario
	this.instance_8 = new lib.Bitmap38();
	this.instance_8.parent = this;
	this.instance_8.setTransform(0,-2,3.207,3.207);

	this.instance_9 = new lib.Bitmap45();
	this.instance_9.parent = this;
	this.instance_9.setTransform(0,0,1.357,1.358);

	this.instance_10 = new lib.Cenário();
	this.instance_10.parent = this;
	this.instance_10.setTransform(1280,0,0.155,0.213,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).to({state:[{t:this.instance_9}]},9).to({state:[{t:this.instance_10}]},5).wait(2));

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
		{src:"images/game_treinamento_atlas_.png?1553045170285", id:"game_treinamento_atlas_"},
		{src:"sounds/Walk_In_The_Park.mp3?1553045170331", id:"Walk_In_The_Park"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;