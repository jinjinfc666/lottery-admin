//json格式的时间转换为Date
function ConvertJSONDateToJSDateObject(JSONDateString) {
    var date = new Date(parseInt(JSONDateString.replace("/Date(", "").replace(")/", ""), 10));
    var year = date.getFullYear();
    var month = date.getMonth + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
    var currentDate = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    if(hour<10){
        hour="0"+hour;
    }
    if(minute<10){
        minute="0"+minute;
    }
    if(second<10){
       second="0"+second; 
    }
    var datastr = year + "-" + month + "-" + currentDate + " " + hour + ":" + minute + ":" + second;
    return datastr;
}
//比较时间大小
function CompareDate(d1,d2)
{
  return ((new Date(d1.replace(/-/g,"\/"))) > (new Date(d2.replace(/-/g,"\/"))));
}
//默认时间
function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = year + seperator1 + month + seperator1 + strDate;
    return currentdate;
}
//昨天
function yestoday(){
    var day1 = new Date();
    day1.setTime(day1.getTime()-24*60*60*1000);
    var s1 = day1.getFullYear()+"-" + (day1.getMonth()+1) + "-" + day1.getDate();
    return s1;
}
//明天
function tomorrow(){
    var day1 = new Date();
    day1.setTime(day1.getTime()+24*60*60*1000);
    var s1 = day1.getFullYear()+"-" + (day1.getMonth()+1) + "-" + day1.getDate();
    return s1;
}
//今天
function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = year + seperator1 + month + seperator1 + strDate;
    return currentdate;
}
//错误信息匹配和存储
function getErroe(demo){
    var m = new Map(
            [
                ["000001", "参数错误!!"],
                ["000002", "没有权限!!"],
                ["000003", "用户存在!!"],
                ["000004", "Account operation is required!!"],
                ["009999", "Others!!"],
                
                ["090001", "configuration of tl-cloud is wrong!!"],
                ["090002", "Failed to push order!!"],
                ["090003", "Failed to cancel order!!"],
                ["090004", "No order existing!!"],
                
                ["090005", "configuration of cai-pay is wrong!!"],
                ["090006", "Can not sign the parameters!!"],
                ["090007", "No Receiver bank card is specified!!"],
                
                ["010001", "The user is existing!!"],
                ["010002", "No general agency!!"],
                ["010003", "No valid user!!"],
                ["010004", "Invalid user name!!"],
                ["010005", "Invalid user login pwd!!"],
                ["010006", "Invalid user fund pwd!!"],
                ["010007", "Invalid Email!!"],
                ["010008", "Invalid Phone number!!"],
                ["010009", "Invalid Real name!!"],
                ["010010", "Invalid User type!!"],
                ["010011", "Invalid Platform rebate!!"],
                ["010012", "Failed save user!!"],
                ["010013", "Failed register user!!"],
                
                ["010014", "Old fund password error!!"],
                ["010015", "Old login password error!!"],
                ["010016", "The real name is binding and cannot be modified. If necessary, please contact customer service.!!"],
                ["010017", "The email is binding and cannot be modified. If necessary, please contact customer service.!!"],
                ["010018", "The phone num is binding and cannot be modified. If necessary, please contact customer service.!!"],
                ["010019", "The bank card  has been bound by other users. Please re-input the bank card.!!"],
                ["010020", "Invalid bank card!!"],
                ["010021", "Users bind up to %d bank cards!!"],
                ["010022", "Failed Reset login password by SMS!!"],
                ["010023", "Failed Reset login password by Email!!"],
                ["010024", "Participation in activities must meet the minimum deposit amount of %s, your current deposit amount of %s !!"],
                ["010025", "Participation in activities must meet the minimum flowing water rate of %s times, your current flowing water rate of %s times!!"],
                ["010026", "The activity can only take part in one time!!"],
                ["010027", "Participation in activities must meet the minimum bet amount of %s times, your current bet amount of %s times!!"],
                ["010028", "Wallet is invalid!!"],
                ["010029", "User point not enough!!!"],
                ["010030", "This promo invalid!!!"],
                ["010031", "This order info error!!!"],
                ["010032", "Withdrawal password error!!!"],
                ["010033", "Withdrawal befor please bind bank card!!!"],
                ["010034", "Withdrawal bank card info error!!!"],
                ["010035", "Minimum withdrawals %s, maximum withdrawals %s!!!"],
                ["010036", "Daily withdrawals can be %s times,You can withdrawals %s times today!!!"],
                ["010037", "User balance not enough !!!"],
                ["010038", "The current user flow is %s, less than %s, transaction fail !!!"],
                ["010039", "This wallet is freeze!!!!"],
                ["010040", "The same IP(%s) can only register %s demo users!!!!"],
                ["010041", "Demo user disable current function!!!!"],
                ["010042", "这个用户没有银行卡!!!!"],
		["010043","这个用户不是代理!!!"],
		["010044","平台返点错误!!!"],
                
                ["020001", "Invalid SMS!!"],
                ["020002", "Invalid SMS URL!!"],
                ["020003", "Failed sending Email!!"],
                ["020004", "Invalid Email!!"],
                
                ["030001", "Invalid lottery type!!"],
                ["030002", "The game is over today!!"],
                ["030003", "The game does not yet start!!"],
                ["030004", "Please first configure the play type!!"],
                ["030005", "Invalid zh flag!!"],
                ["030006", "At least one order is required!!"],
                ["030007", "Only one order is allowed under non zhui hao!!"],
                ["030008", "The issue is expired!!"],
                ["030009", "Balance is insufficient!!"],
                ["030010", "No Play Type!!"],
                ["030011", "Invalid Play Type!!"],
                ["030012", "Invalid Play Bet number!!"],
                ["030013", "Failed to process beting number!!"],
                
                ["040001", "Message title is empty!!"],
                ["040002", "Message content is empty!!"],
                ["040003", "Notify receiver type error!!"],
                ["040004", "Notify receiver error!!"],
		["010045","一天只能签到一次!!!"],
                
                ["050001", "No Permission to access resource!!"],
                ["050002", "Invalid betting times!!"],
                ["050003", "Invalid betting money unit!!"],
                ["050004", "Error log out!!"],
                
                ["060001", "This pay type is disable!!!"],
                ["060002", "This pay type payment amount more than maximum %d !!!"],
                
                ["070001", "Invalid captcha!!!"],
                
                ["080001", "Invalid issue status!!!"],
                ["080002", "Not allowed to manual draw result!!!"],
                
                ["100001","玩法已经存在!!!"],
		["100002","玩法不存在!!!"],
		["110001","这条充值申请不存在或以过期!!!"],
		["110002","这条提现申请不存在或以过期!!!"],
		/**************IP module*************************/
		["120001","ip already exists!!!"],
		["120002","这条数据不存在 or 修改后的ip已存在!!!"],
		/**************payType module*************************/
		["130001","充值方式已存在!!!"],
		["130002","充值方式不存在!!!"],
		/**************payChannel module*************************/
		["140001","充值渠道不存在!!!"],
		/**************payChannel module*************************/
		["150001","系统角色已存在!!!"],
		["150002","系统角色不存在!!!"],
		/**************SysCode module*************************/
		["160001","代码类型已经存在!!!"],
		["160002","代码值已经存在!!!"],
		/**************userBank module*************************/
		["170001","此银行卡不存在!!!"]
                
                
                
                
            ]
            );
    return m.get(demo);
}
function getDifferenceTime(startTime,endTime){
    var dateDiff = endTime.getTime() - startTime;//时间差的毫秒数
    var dateDiff1=dateDiff/1000/60;
    return dateDiff1;
}
function updateToken(){
    var startTime=sessionStorage.getItem("startTime");
    var nowTime=new Date();
    var dateDiff1=getDifferenceTime(startTime,nowTime);
    if(dateDiff1>=25&&dateDiff1<=30){
        var refresh_token=sessionStorage.getItem("refresh_token");
        var domain=parseDomain1();
        var url=domain+"/lottery-api/oauth/token";
        $.ajax({
            url: url,
            type: "POST",
            async: false, // 设置同步方式
            data: {
                grant_type:"refresh_token",
                client_id:"lottery-admin",
                client_secret:"secret_1",
                refresh_token:refresh_token
            },
            dataType: "json",
            error: function () {
                alert("更新失败!!!");
            },
            success: function (data) {
                sessionStorage.setItem("access_token",data.access_token);
                sessionStorage.setItem("refresh_token",data.refresh_token);
                sessionStorage.setItem("startTime",new Date().getTime());
                alert(data.access_token);
                alert(new Date());
            }
        });
    }else if(dateDiff1>30){
        alert("登录已过期!请重新登录!!!");
        var domain1=parseDomain2();
        var url = domain1+"/lottery-ui/index.html";
        top.location.href = url;
    }else{
        return true;
    }
}
function parseDomain1() {
    var currURL = location.href;
    var domain = '';
    if (currURL.indexOf("http") >= 0) {
        if (currURL.indexOf("/", currURL.indexOf("http") + 7) > 0) {
            domain = currURL.substring(0, currURL.indexOf("/", currURL
                    .indexOf("http") + 7));
        } else {
            domain = currURL;
        }
    }
    if (typeof domain == 'undefined' || domain.length == 0) {
        return '';
    }
    if (domain.indexOf(":", 7) > 0) {
        domain = domain.substring(0, domain.indexOf(":", 7));
    }
    return domain;
}
function parseDomain2() {
    var currURL = location.href;
    var domain = '';
    if (currURL.indexOf("http") >= 0) {
        if (currURL.indexOf("/", currURL.indexOf("http") + 7) > 0) {
            domain = currURL.substring(0, currURL.indexOf("/", currURL
                    .indexOf("http") + 7));
        } else {
            domain = currURL;
        }
    }
    if (typeof domain == 'undefined' || domain.length == 0) {
        return '';
    }
    return domain;
}