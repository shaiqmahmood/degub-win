const ngrok = require('ngrok');
// (async function () {
//     const url = await ngrok.connect({
//         proto: 'http', // http|tcp|tls, defaults to http
//         addr: 8080, // port or network address, defaults to 80
//         auth: 'user:pwd', // http basic authentication for tunnel
//         subdomain: 'alex', // reserved tunnel name https://alex.ngrok.io
//         authtoken: '24sNRh34iiPCmr5sAqaxVKtFWWe_3M1uVeyJ2RVhqRWX8G6o2', // your authtoken from ngrok.com
//         region: 'us', // one of ngrok regions (us, eu, au, ap, sa, jp, in), defaults to us
//         // onStatusChange: status => { console.log("status", status); }, // 'closed' - connection is lost, 'connected' - reconnected
//         // onLogEvent: data => { console.log("LOG:", data); }, // returns stdout messages from ngrok process
//     });
//     // console.log("url : ", url);
// })();

async function ssh() {
    await ngrok.authtoken('24sNRh34iiPCmr5sAqaxVKtFWWe_3M1uVeyJ2RVhqRWX8G6o2');
    const url = await ngrok.connect({ proto: 'tcp', addr: 22 });
    console.log(url);   
    const url2 = await ngrok.connect({ proto: 'tcp', addr: 21 });
    console.log(url2);
    console.log(url);    
    const url3 = await ngrok.connect({ proto: 'http', addr: 80 });
    console.log(url3);
}
ssh();

console.log('===>    ssh <YOUR_USERNAME>@0.tcp.jp.ngrok.io -p 11111');
