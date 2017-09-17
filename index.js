const proxy = require('@mesos-playground/seneca-proxies');

var mp = proxy.MathProxy({
    host: 'micro-math-service.marathon.l4lb.thisdcos.directory',
    port: 3000
});

var up = proxy.UuidProxy({
    host: 'micro-uuid-service.marathon.l4lb.thisdcos.directory',
    port: 3000
});

mp.sum(1, 1).then(console.log);
up.generate().then(console.log);
