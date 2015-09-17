/**
 * Created by cong on 2015/9/16.
 */

var WestScene = cc.Scene.extend({

    ctor:function(){
        this._super();
        var size = cc.director.getWinSize();

        var layer = new cc.LayerColor(cc.color(180,180,180));
        layer.ignoreAnchor = false;
        layer.x = size.width / 2;
        layer.y = size.height / 2;
        this.addChild(layer);
    }

})
