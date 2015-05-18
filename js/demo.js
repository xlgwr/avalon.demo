// JavaScript source code
var demo = avalon.define({
    $id: 'demo',
    message: 'good demo',
    rdata: '',
    dataset: {
        a: false,
        b: false,
        other: ''
    },
    onclick: function (e) {
        demo.message = demo.rdata;
        if (demo.rdata) {
            avalon.log("true0");

            avalon.log("data0:" + demo.dataset[demo.rdata]);

            if (demo.dataset[demo.rdata] !== undefined) {
                if (demo.dataset[demo.rdata]) {
                    demo.dataset[demo.rdata] = false;
                }
                avalon.log("0:" + demo.dataset[demo.rdata]);
                demo.dataset[demo.rdata] = true;
            } else {
                avalon.log("1:" + demo.rdata);
                demo.other = demo.rdata;
            }
        } else {
            avalon.log("false0");
        }
    },
    ckRadio: function (curr) {
        setTimeout(function () {
            avalon.log(curr);
            avalon.log(curr.checked);
        }, 1000);
    }

}, function (vm) {
    avalon.scan();
});
