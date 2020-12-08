function loginFocus(o){$(o).siblings("span").hide();}
function loginBlur(o){if($(o).val()==""){$(o).siblings("span").show();return false;}else{$(o).siblings("span").hide();return true;}}
function indexSubmit(){if($("#email").val()==""){$(".loginTip").html("请输入邮箱");return false;}else{var reg=/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;if(!reg.test($("#email").val())){$(".loginTip").html("请输入正确的邮箱格式");return false;}}
if($("#password").val()==""){$(".loginTip").html("请输入密码");return false;}}
function checkLogin1(){$(".loginTip").html("正在登录....");$.ajax({type:"post",url:"/ajax/login/",data:"action=ajaxlogin"+"&email="+$("#email").val()+"&password="+$("#password").val(),dataType:"json",success:function(res){if(res.status==0){$(".loginTip").html(res.msg);return false;}}});}
function lguOver(){$(".lgu-info").addClass("lgu-active");$(".sele-user").show();}
function lguOut(){$(".lgu-info").removeClass("lgu-active");$(".sele-user").hide();}
PUB.Ajax({url:"/e/member/loginjs/"}).then(function(rs){$(".login-i").html(rs.html);});if($(".indexRightA").length){PUB.Ajax({url:"/e/member/loginjs/",data:"location=index",}).done(function(rs){$(".indexRightA").html(rs.ihtml);});}
function qd_action(){PUB.Ajax({url:"/ajax/qiandao/",}).done(function(res){if(res.status==1){$("body").append("<div class='qd_musk'></div><div id='qd_success'>"+res.message+"</div>");setInterval(function(){$(".qd_musk,#qd_success").remove();},2000);}});}