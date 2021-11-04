var obj = JSON.parse($response.body);
var timestamp = (new Date()).valueOf(); //时间戳,转JSON日期默认是标准时区
obj.data.records[0]["显示时间"] = new Date(timestamp).toJSON().substr(0, 16).replace('T', ' ');
obj.data.records[0]["申报时间"] = obj.data.records[0]["检测日期"] = new Date(timestamp).toJSON().substr(0, 19).replace('T', ' ');
obj.data.records[0]["采样日期"] = new Date(timestamp-10*3600*1000).toJSON().substr(0, 19).replace('T', ' ');
$done({body: JSON.stringify(obj)});
