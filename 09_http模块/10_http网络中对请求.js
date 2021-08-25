const http = require('http');
// http的get请求
// http.get('http://localhost:8080', (res) => {
//     res.on('data', (data)=> {
//         console.log(data.toString());
//     });
//     res.on('end', () => {
//         console.log('请求到所有数据了');
//     })
// });

// http的post请求
const respost = http.request({
    method: 'POST',
    hostname: 'localhost',
    port: 8080
}, (res) => {
    res.on('data', (data) => {
        console.log(data.toString());
    });
    res.on('end', () => {
        console.log('请求结束了');
    })
});

respost.end()
