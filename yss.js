var obj = JSON.parse($response.body);

if(obj.data.records.length==1){
//    obj.data.records[0]["第二针批号"] = obj.data.records[0]["第一针批号"];
 //   obj.data.records[0]["第二针厂家名称"] = obj.data.records[0]["第一针厂家名称"];
  //  obj.data.records[0]["第二针疫苗名称"] = obj.data.records[0]["第一针疫苗名称"];
   // obj.data.records[0]["第二针接种地点"] = obj.data.records[0]["第一针接种地点"];
    //obj.data.records[0]["第二针接种日期"] = obj.data.records[0]["第一针接种日期"];
   // obj.data.records[0]["标签"] = "第2剂已接种";
   // obj.data.records[0]["申报时间"] = new Date().toJSON().substr(0, 16).replace('T', ' ');

}else{
    var timestamp = (new Date()).valueOf(); //时间戳,转JSON日期默认是标准时区
    obj.data.records[0]["显示时间"] = new Date(timestamp).toJSON().substr(0, 16).replace('T', ' ');
    obj.data.records[0]["申报时间"] = obj.data.records[0]["检测日期"] = new Date(timestamp).toJSON().substr(0, 19).replace('T', ' ');
    obj.data.records[0]["采样时间"] = new Date(timestamp-10*3600*1000).toJSON().substr(0, 19).replace('T', ' ');
}
$done({body: JSON.stringify(obj)});
