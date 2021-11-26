var body = $response.body;
body = body.replace("<stockNum>0</stockNum>","<stockNum>5</stockNum>");
body = body.replace(/<sale_begin_time>.*<\/sale_begin_time>/g,"<sale_begin_time>1637723600000</sale_begin_time>");

body = body.replace("<ret_code>100103</ret_code>","<ret_code>100000</ret_code>");

body = body.replace("<total_count>0</total_count>","<total_count>123</total_count>");

$done({body});
