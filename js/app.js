/**
 * Created by cong on 2015/9/16.
 */

// app.js

window.onload = function(){

    var width = window.innerWidth;
    var height = window.innerHeight;

    if(width>height) width = height / 960 * 540 ;

    $("canvas").attr({"width" : width+"px",
            "height": height +"px"}
    );

    cc.game.onStart = function(){
        //load resources
        // cc.LoaderScene.preload(["img/back.png"], function () {
//        var MyScene = cc.Scene.extend({
//            ctor:function () {
//                this._super();
//                var size = cc.director.getWinSize();
//                var sprite = cc.Sprite.create("img/back.png");
//                sprite.setPosition(size.width / 2, size.height / 2);
//                sprite.setScale(0.8);
//                this.addChild(sprite, 0);
//
//                var label = cc.LabelTTF.create("Hello World", "Arial", 40);
//                label.setPosition(size.width / 2, size.height / 2);
//                label.color = cc.colot(0,0,255);
//
//                this.addChild(label, 1);
//            }
//        });
        cc.director.runScene(new MainScene());
        var size = cc.director.getWinSize();
        console.log(size.width +'  '+size.height);
        // }, this);
    };
    cc.game.run("gameCanvas");
};
