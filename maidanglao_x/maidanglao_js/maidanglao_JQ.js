$("#desserts").hide(0);
$("#hamburgs").hide(0);
$("#snacks").hide(0);
$(".title1").hide(0);
$("#love_foods").hide(0);

// 麦当劳块鼠标悬停显示、移除消失
$(function title_float() {
    $("#title_1").on("mouseover", function () {
        $(".title1").fadeIn(200);
    });
    $("#title_1").on("mouseleave", function () {
        $(".title1").fadeOut(200);
    });
});
// 中间logo点击事件——活动页
// *多个元素绑定同一事件
$(function titlelogo_click() {
    $("#title_1, #only_logo").on("click", function home() {
        $("#love_foods").hide();
        $("#activity").show();
    });
});

// 热爱美食点击事件——食物选购
$(function title2_click() {
    $("#title_2").on("click", function () {
        $("#activity").hide();
        $("#love_foods").show();
    });
});

// 切换食品菜单
$(function food_menu_select() {
    var allpanel = ["drinks", "desserts", "hamburgs", "snacks"];
    $(".foods_re_img").on("click", function () {
        var panelid = $(this).attr("data-panelid");
        // 先隐藏所有，背景颜色初始化
        $(".foods_re_text").css({ color: "black" });
        $(".foods_re_img").css({ "background-color": "#DEB887", color: "black" });
        allpanel.forEach((i) => {
            if (i != $("#" + panelid)) {
                {
                    $("#" + i).hide();
                }
            }
        });
        //    显示
        if ($("#" + panelid).attr("display") != "none") $("#" + panelid).toggle();
        $(this).css({ "background-color": "#FDE66A" }); //对应模块背景变色
        $(this.parentElement.lastElementChild).css({ color: "red" }); //对应的字变色
        // $('#' + panelid).fadeOut();
    });
});
