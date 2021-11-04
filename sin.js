//shen i nin
var obj = JSON.parse($response.body);
var timestamp = (new Date()).valueOf(); //时间戳,转JSON日期默认是标准时区
obj.data.records[0]["reportTime"] = new Date(timestamp).toJSON().substr(0, 19).replace('T', ' ');
obj.data.records[0]["sampleTime"] = new Date(timestamp-11*3600*1000).toJSON().substr(0, 19).replace('T', ' ');
$done({body: JSON.stringify(obj)});
