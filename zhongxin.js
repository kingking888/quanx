var body = $response.body;
body = body.replace("<stockNum>0</stockNum>","<stockNum>5</stockNum>");
body = body.replace(/<sale_begin_time>.*<\/sale_begin_time>/g,"<sale_begin_time>1637723600000</sale_begin_time>");
$done({body});
