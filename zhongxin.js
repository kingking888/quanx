var body = $response.body;
body = body.replace("<stockNum>0</stockNum>","<stockNum>5</stockNum>");
$done({body});
