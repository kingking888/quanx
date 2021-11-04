//shen i nin
var obj = JSON.parse($response.body);
    obj.data.records[0]["reportTime"] = new Date().toJSON().substr(0, 16).replace('T', ' ');
    obj.data.records[0]["sampleTime"] = new Date().toJSON().substr(0, 16).replace('T', ' ');
$done({body: JSON.stringify(obj)});
