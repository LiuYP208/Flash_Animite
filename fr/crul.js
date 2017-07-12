/**
 * Created by lenovo on 2017/7/13.
 */

var demo = ' curl http://www.linuxidc.com > page.html';
//var TimeStr = 20170709130500;
var moment = require('moment');
//min_15();
function min_15() {
//var m_Layer1 = 'FY4A-_LMI---_N_REGX_1047E_L1B_EVT-_SING_NUL_20170709130500_20170709131859_7800M_N';
    var m_Moment = moment('2017-07-07 08:45');
//console.log(m_Moment.format('YYYYMMDDHHmm'));
    for (var i = 0; i < 15; i++) {
        var Base = m_Moment.add(15, 'minutes');
        var str = Base.format('YYYYMMDDHHmm');
        var m_Str = '';
        for (var t = 0; t < 15; t++) {
            var m_Num = i * 15 + 11 + t;
            if (t == 14) {
                m_Str = m_Str + m_Num;
            }
            else {
                m_Str = m_Str + m_Num + '_';
            }
        }
        m_curl = 'curl  http://123.56.135.196:6001/api/test/flash/fr/' + m_Str + ' > ' + str + '.kml ';
        //var m_curl = 'curl  http://123.56.135.196:6001/api/test/flash/fr/' + i + ' > ' + str + '.kml ';
        console.log(m_curl);
    }
}
min_1();
function min_1() {
//var m_Layer1 = 'FY4A-_LMI---_N_REGX_1047E_L1B_EVT-_SING_NUL_20170709130500_20170709131859_7800M_N';
    var m_Moment = moment('2017-07-07 08:49');
//console.log(m_Moment.format('YYYYMMDDHHmm'));
    for (var i = 1; i <= 235; i++) {
        var Base = m_Moment.add(1, 'minutes');
        var str = Base.format('YYYYMMDDHHmm');

        //m_curl = 'curl  http://123.56.135.196:6001/api/test/flash/fr/' + m_Str + ' > ' + str + '.kml ';
        var m_curl = 'curl  http://123.56.135.196:6001/api/test/flash/fr/' + i + ' > ' + str + '.kml ';
        console.log(m_curl);
    }
}