function get0(timestamp){
  return timestamp - (timestamp+3600*8)%86400;
}

function goodtime(time,second=true){
  time.setMinutes(time.getMinutes()-time.getTimezoneOffset());
  return time.toJSON().substr(0,second?19:16).replace('T', ' ');
}

var body = JSON.parse($response.body);
var timestamp = Math.round((new Date()).valueOf()/1000); //当前时间戳
body.data.records[0]["reportTime"] = goodtime(new Date((timestamp-2*3600-15*60-22)*1000));
body.data.records[0]["sampleTime"] = goodtime(new Date((get0(timestamp)-4*3600-25*60-35)*1000));

body.data.records.push(JSON.parse(JSON.stringify(body.data.records[0])));
body.data.records[1]["reportTime"] = goodtime(new Date((timestamp-3*3600-13*60-36-86400)*1000));
body.data.records[1]["sampleTime"] = goodtime(new Date((get0(timestamp)-6*3600-32*60-23-86400)*1000));


body.data.records.push(JSON.parse(JSON.stringify(body.data.records[0])));
body.data.records[2]["reportTime"] = goodtime(new Date((timestamp-6*3600-25*60-28-172800)*1000));
body.data.records[2]["sampleTime"] = goodtime(new Date((get0(timestamp)-7*3600-43*60-55-172800)*1000));


$done({body:JSON.stringify(body)});
