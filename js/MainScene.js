/**
 * Created by cong on 2015/9/16.
 */

var MainScene = cc.Scene.extend({
    ctor:function(){
        this._super();
        var size = cc.director.getWinSize();
//        var sprite = cc.Sprite.create("img/back.png");
//        sprite.setPosition(size.width / 2, size.height / 2);
//        sprite.setScale(0.8);
//        this.addChild(sprite, 0);

        var layer = new cc.LayerColor(cc.color(180,180,180));
        layer.ignoreAnchor = false;
        layer.x = size.width / 2;
        layer.y = size.height / 2;
        this.addChild(layer);

        var westButton = new cc.Sprite.create("img/west.png");
        westButton.setPosition(size.width / 2, size.height / 3 *2);
        this.addChild(westButton,2);

        var eastButton = new cc.Sprite.create("img/east.png");
        eastButton.setPosition(size.width / 2, size.height / 3 );
        this.addChild(eastButton,2);

//        var label = cc.LabelTTF.create("Hello World", "Arial", 40);
//        label.setPosition(size.width / 2, size.height / 2);
//        label.color = cc.color(0,0,255);

//        this.addChild(label, 1);

    }

})