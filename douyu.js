(function () {
    var ii = 0,TT = true,zb_name;
    function dy() {
        var aa = setInterval(function () {
            //  console.log('bb');
            if ($(".peck-cdn").text() == "领取" && !$(".peck-cdn").is(":hidden")) {
                $(".peck-cdn,#right_col_peck").click();
                console.log("点击");
                TT = false;
                ii++;
            } else if ($(".peck-cdn").is(":hidden")) {
                console.log("!点击");
                clearInterval(aa);
            }
        }, 10);        
        var bb = setInterval(function () {
            // console.log('aa');
            if (!$(".peck-cdn").is(":hidden")) {
                // console.log($("#sendmsg span").text());

               if(document.getElementById("sendmsg").childNodes.item(0).childNodes.item(0)==null){
                  if(chart_content!=$("#chart_content").val()){
                    chart_content ='喜欢 ' + zb_name + ' 的朋友请点一下关注~！    ' + textRandom(4);
                  }
                  $("#chart_content").val(chart_content);
                  ctrlclear('chat_line_list');
                  $("#sendmsg_but").click();
                  console.log("发送");
                }else{
                  console.log("正在倒计时被限制发送了！");
                }
                TT = false;
                ii++;
            } else {
                clearInterval(bb);
                console.log("!发送");
                // 关闭窗口
                if($('#right_col_peck').css("display")=="none" && $(".js_r_btn.follow_btn.yet").css("display")=="none" && ii>=2){
                    console.log("即将关闭窗口");
                    popUp();
                }
                $("#chart_content").val('');
                TT = true;
            }
        }, 250);
    }
    function _start__() {
        if(document.getElementById("chat_line_list")!=null){
            $(".peck-cdn").bind('DOMNodeInserted',function (){
                if($(".peck-cdn").is(":hidden")){
                    TT = true;
                }
                // console.log(TT);
                if(TT == true && $(".loginShow.fl.js_login_no").css("display")=="none"){
                    zb_name = $('.zb_name').text();
                    WebRoom = $('#WebRoom');
                    // 双击恢复直播
                    $('#live_videobar').dblclick(function (){
                        WebRoom.html(WebRoom.html().replace(/Status=false/,"Status=true"));
                    });
                    // 关闭直播
                    WebRoom.html(WebRoom.html().replace(/Status=true/,"Status=false"));
                    dy();
                }
            });
            clearInterval(EE);
            console.log('t');
        }else{
            console.info('当前不是在直播间');
            clearInterval(EE);
        }
    }
    // 随机字符串、数字、符号
    function textRandom(num)
    {
        var text="";
        for(i=1;i<=num;i++)
        {
            var strRadom=Math.floor(Math.random() * 100) +1;
            text = String.fromCharCode(strRadom) + text;
        }
        return text;
    }
    function popUp(){
        var e;
        $.dialog({icon: "question",content:'如果不想看到这个提示，<br/>请点一下<a class="js_r_btn follow_btn gz" href="javascript:;" title="关注">关注</a>，<br/>以后就没有这个提示了！',lock: true,cancelVal: "取消",cancel: function() {
            clearInterval(e);
            $.dialog.tips_black("已取消关闭窗口！", 3);
        },init: function() {
            var h = this, f = 6;
            var g = function() {
                h.title("<b style='color: #F3FF00;'>" + f + "</b>秒后关闭当前窗口！");
                if(!$(".peck-cdn").is(":hidden")){
                    $.dialog.tips_black("检测到火箭，取消关闭窗口！", 3);
                    h.close();
                }
                if(f===0){
                    window.close();
                }
                !f && h.close();
                f--
            };
            e = setInterval(g, 1000);
            g();
            // 点击关注
            $(".js_r_btn.follow_btn.gz").click(function (){
                clearInterval(e);
                follow_room();
                h.close();
                $.dialog.tips_black("已取消关闭窗口！", 3);
            }).css({"float":"none","display":"none"});
            $(".js_r_btn.follow_btn.gz").fadeIn(1000);
        },close: function() {
            clearInterval(e);
        }}).show();
    }
    var EE = setInterval(function () {
        if($(".peck-cdn").text()!=""){
            console.log('EE');
            _start__();
        }
    }, 3000);
})();
