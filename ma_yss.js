//时间戳取当天0点
function get0(timestamp){
  return timestamp - (timestamp+3600*8)%86400;
}

//中国时区导出标准时间格式
function goodtime(time,second=true){
  time.setMinutes(time.getMinutes()-time.getTimezoneOffset());
  return time.toJSON().substr(0,second?19:16).replace('T', ' ');
}

var body = JSON.parse($response.body);
var timestamp = Math.round((new Date()).valueOf()/1000); //当前时间戳
body.data.records[0]["显示时间"] = goodtime(new Date((timestamp-2*3600-15*60-22)*1000),false);
body.data.records[0]["申报时间"] = body.data.records[0]["检测日期"] = goodtime(new Date((timestamp-2*3600-15*60-22)*1000));
body.data.records[0]["采样日期"] = goodtime(new Date((get0(timestamp)-4*3600-25*60-35)*1000));
$done({body:JSON.stringify(body)});
