var body = $response.body;
body = body.replace("<stockNum>0</stockNum>","<stockNum>5</stockNum>");
body = body.replace("1637823600","1637723600");
$done({body});
