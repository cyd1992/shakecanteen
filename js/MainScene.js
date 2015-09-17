/**
 * Created by cong on 2015/9/16.
 */

var MainScene = cc.Scene.extend({

    westCallback:function(){
        console.log("west");
        cc.director.runScene(new WestScene());
    },
    eastCallback:function(){
        console.log("east");
    },

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

        var westItem = new cc.MenuItemImage("img/west.png","img/west.png",this.westCallback,this);
        var eastItem = new cc.MenuItemImage("img/east.png","img/east.png",this.eastCallback,this);

        var menu = new cc.Menu(westItem,eastItem);

        menu.x = 0;
        menu.y = 0;

        westItem.x = size.width / 2;
        westItem.y = size.height /3 * 2;
        eastItem.x = size.width / 2;
        eastItem.y = size.height /3;

        this.addChild(menu,1);





//        var label = cc.LabelTTF.create("Hello World", "Arial", 40);
//        label.setPosition(size.width / 2, size.height / 2);
//        label.color = cc.color(0,0,255);

//        this.addChild(label, 1);

    }

})