window.screenOrientation = "portrait";
 loadLib("libs/laya.core.js");
 loadLib("libs/laya.ui.js");
 loadLib("libs/laya.d3.js"); 
 loadLib("libs/laya.physics3D.js"); 


 window.curLang = "en";
if (window.YaGames) {
    YaGames.init().then(ysdk => {
        console.log('Yandex SDK initialized');
        window.ysdk = ysdk;
        if(ysdk.environment.i18n.lang == "ru") {
            window.curLang = "ru";
        }else if(ysdk.environment.i18n.lang == "tr"){
            window.curLang = "tr";
        }else{
            window.curLang = "en";
        }
        loadLib("./js/bundle.js");
    });
}else{
    window.curLang = "ru";
    loadLib("./js/bundle.js");
}


window.createLabel= function(text, attr) {
    var label = new Laya.Label();
    label.text = text;
    label.name = attr && attr.name ? attr.name : "";
    label.color = attr && attr.color ? attr.color : "#ffffff";
    label.fontSize = attr && attr.fontSize ? attr.fontSize : 20;
    if(attr.bold){
        label.bold = true;
    }
    if(attr.stroke){
        label.stroke = attr.stroke;
    }
    return label;
}

window.showToast = function (title) {
    Laya.stage.removeChild(Laya.stage.getChildByName("showToast"));
    var bgimg = new Laya.Image("bg_toast.png");
    bgimg.name = "showToast";
    var lal = new Laya.Label(title);
    lal.centerY = 0;
    lal.width = 500;
    lal.fontSize = 30;
    lal.bold = true;
    lal.font = "YaHei";
    lal.color = "#ffffff";
    lal.align = "center";
    lal.valign = "middle";
    lal.overflow = "hidden";
    lal.centerX = 0;
    bgimg.centerX = 0;
    bgimg.centerY = -200;
    bgimg.zOrder = 1000;
    bgimg.addChild(lal);
    Laya.stage.addChild(bgimg);
    Laya.timer.once(2500, Laya.stage, function s() {
        bgimg.visible = false;
        bgimg.removeChildren();
        Laya.stage.removeChild(bgimg);
    });
}
		my.init({
                 gamemonetizeId: "grdsyywqgxi2s5zf5jwjrui2itf579dq",
                 complete: () => {
          console.log('gamemonetizeId');
	}
	         })
window.showRewardAds = function (cb, close) {
			my.r(() => {
	window.showToast(window.getLangByKey("video_success"))
            cb();
				});

}

window.getLangByKey = function (enkey) {
    let curIndex = 0;
    if (window["curLang"] == "ru") {
        curIndex = 1;
    } else if (window["curLang"] == "tr") {
        curIndex = 2;
    }
    let keys = {
        "NoCoin": ["Not Enough Coin", "Not Enough Coin", "Yeterli değil"],
        "Fail": ["Fail", "Fail", "Başarısızlık"],
        "Reward": ["Reward ", "Reward ", "ödüllendir"],
        "video_success": ["Get video rewards!", "Get video rewards!", "Video ödülleri alın!"],
        "video_fail": ["Video is wrong, please try later!", "Video is wrong, please try later!", "video yanlış lütfen daha sonra deneyiniz"],
        "get_sign_reward": ["Sign in successfully!", "Sign in successfully!", "Başarıyla oturum açın!"],
        "get_three_more": [" Choose three more box", "Choose three more box", "Üç kutu seç"],
        "hurt": ["Hurt", "Hurt", "Acıtmak"],
        "speed": ["Speed", "Speed", "Hız"],
        "range": ["Range", "Range", "Aralık"],
        "max": ["MAX", "MAX", "MAKS."],
        "unlock": ["Unlock", "Unlock", "Kilidini aç"],
        "pass": ["Pass", "Pass", "geçmek"],
        
    }
    if (!keys[enkey]) {
        return enkey
    }
    console.log()
    return " " + keys[enkey][curIndex];
}