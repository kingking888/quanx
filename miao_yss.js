var body = JSON.parse($response.body);
var timestamp = (new Date()).valueOf()-86400000*15;
body.data.records[0]["第二针接种日期"] = (new Date(timestamp)).toJSON().substr(0,10);
$done({body:JSON.stringify(body)});
