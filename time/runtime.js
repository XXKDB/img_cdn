// 设备识别
function IsPC(){  
  var userAgentInfo = navigator.userAgent;
  var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows", "iPad", "iOS", "Macintosh");  
  var flag = true;  
  for (var v = 0; v < Agents.length; v++) {  
      if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }  
  }  
  return flag;  
}

if (/(iPad|iPhone|iOS|Macintosh)/i.test(navigator.userAgent)) {
    function show_runtime() {
      window.setTimeout("show_runtime()", 1000);
      X = new Date("10/12/2021 00:00:00");
      Y = new Date();
      T = (Y.getTime() - X.getTime());
      M = 24 * 60 * 60 * 1000;
      a = T / M;
      A = Math.floor(a);
      b = (a - A) * 24;
      B = Math.floor(b);
      c = (b - B) * 60;
      C = Math.floor((b - B) * 60);
      D = Math.floor((c - C) * 60);
      N = parseInt(A / 365);
      Ho = (Y.getHours());
      //创建补0函数
      function p(s) {
          return s < 10 ? '0' + s: s;
      }
      
        //早上7点到晚上10点营业
    if (Ho<=18&&Ho>=7){
      currentTimeHtml ="<img class='boardsign' src='https://img.shields.io/badge/小破站-营业中-6adea8?style=social&logo=cakephp' title='距离百年老店也就差不到一百年~'><div id='runtime'>" + p(N) + ' 年 ' + p(A) + ' 天 ' +  p(B) + ' : ' +  p(C) + ' : ' +  p(D) + '</div>';
    }
    else{
      currentTimeHtml ="<img class='boardsign' src='https://img.shields.io/badge/小破站-打烊了-6adea8?style=social&logo=coffeescript' title='这个点了应该去睡觉啦，熬夜对身体不好哦'><div id='runtime'>" + p(N) + ' 年 ' + p(A) + ' 天 ' + p(B) + ' : ' + p(C) + ' : ' + p(D) + '</div>';
    }
          //覆写挂载标签的内容
      document.getElementById("workboard").innerHTML = currentTimeHtml;
    }
  show_runtime();
} else {
  setInterval(() => {
    let create_time = Math.round(new Date('2019-04-17 00:00:00').getTime() / 1000); //在此行修改建站时间
    let timestamp = Math.round((new Date().getTime()) / 1000);
    let second = timestamp - create_time;
    let time = new Array(0, 0, 0, 0, 0);
  
    var nol = function(h){
      return h>9?h:'0'+h;
    }
    if (second >= 365 * 24 * 3600) {
      time[0] = parseInt(second / (365 * 24 * 3600));
      second %= 365 * 24 * 3600;
    }
    if (second >= 24 * 3600) {
      time[1] = parseInt(second / (24 * 3600));
      second %= 24 * 3600;
    }
    if (second >= 3600) {
      time[2] = nol(parseInt(second / 3600));
      second %= 3600;
    }
    if (second >= 60) {
      time[3] = nol(parseInt(second / 60));
      second %= 60;
    }
    if (second > 0) {
      time[4] = nol(second);
    }
    if ((Number(time[2])<22) && (Number(time[2])>7)){
      currentTimeHtml ="<img class='boardsign' src='https://img.shields.io/badge/小破站-营业中-6adea8?style=social&logo=cakephp' title='距离百年老店也就差不到一百年~'><div id='runtime'>" + time[0] + ' YEAR ' + time[1] + ' DAYS ' + time[2] + ' : ' + time[3] + ' : ' + time[4] + '</div>';
    }
    else{
      currentTimeHtml ="<img class='boardsign' src='https://img.shields.io/badge/小破站-打烊了-6adea8?style=social&logo=coffeescript' title='这个点了应该去睡觉啦，熬夜对身体不好哦'><div id='runtime'>" + time[0] + ' YEAR ' + time[1] + ' DAYS ' + time[2] + ' : ' + time[3] + ' : ' + time[4] + '</div>';
    }
    document.getElementById("workboard").innerHTML = currentTimeHtml;
  }, 1000);
}







