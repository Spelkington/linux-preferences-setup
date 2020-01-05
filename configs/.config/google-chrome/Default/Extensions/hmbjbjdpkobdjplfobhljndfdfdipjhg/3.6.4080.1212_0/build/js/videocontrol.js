"use strict";var videocontrol=function(){var o=640,d=360,h=3,E=3,m=!1,C=2,M=!1,H=!1;var i=0,r=1,n=2,a=3,c=i;var s=12,u=0;return{reset:function(){c=i,E=H?2:h},decidePrefLevel:function(e,t,i){if(/Celeron.+\d{4}U/i.test(i)){i.includes("3215U")&&(M=!0);var r=i.replace(/.+(\d{4})U.+/i,"$1"),n=parseInt(r),a=i.replace(/.+ ([\d\.]+)GHz/i,"$1"),o=parseFloat(a);return 3215<=n&&2<=e&&1.6<=o?void(E=h=4):void(C=1)}if(/Celeron.+\d{4}Y/i.test(i)){var d=i.replace(/.+(\d{4})Y.+/i,"$1");3965<=parseInt(d)&&(E=h=4)}else if(/Celeron.+N\d{4}/i.test(i)){var c=i.replace(/.+N(\d{4}).+/i,"$1"),s=parseInt(c),u=i.replace(/.+ ([\d\.]+)GHz/i,"$1");parseFloat(u),4e3<=s?E=h=4:3350<=s?C=1:(C=0,s<=3060&&(E=2,H=!0))}else{if(/Core.+(i[579]|m[357]|i3-[789])/i.test(i)){for(var v=["6Y30","6Y54","6Y57","6Y75","7Y30","7Y54","7Y57","7Y75"],f=!1,l=0;l<v.length;l++)if(i.includes(v[l])){f=!0;break}return m=f?!(E=h=4):(E=h=4,!0),void(C=3)}if(/aarch/.test(t))return 6<=e&&(E=h=4),void(C=e<=4?0:1);if(!/Rockchip/.test(i))return/Pentium/.test(i)?(i.includes("4415U")&&(E=h=4,m=!0,C=3),void(i.includes("4405Y")&&(E=h=4))):void 0;C=e<=4?0:1}},decideDyPrefLevel:function(e){if(0===g.getMeetingStatusObj().meetingNo)return E;0===u&&(u=Date.now()),s=H?s:5;var t=Date.now();if(t-u<1e3*s)return E;if(u=t,M)switch(c){case i:85<e?c=r:(c=i,E++);break;case r:c=85<e?n:i;break;case n:85<e?(c=n,E--):c=a;break;case a:c=85-e<23?a:i}else H?s=85<=e?(E-=1,6):(75<=e&&e<85||(E+=1),12):85<e?E-=1:E+=1;return E<0&&(E=0),h<E&&(E=h),E},getResolution:function(){return m?{width:1280,height:720}:{width:o,height:d}},openMediaError:function(t,i){var r=i.constraints,n=i.successCb,a=i.failCb;if(r.video||a(t),"ConstraintNotSatisfiedError"===t.name){if(r.video.mandatory){if(r.video.mandatory.minWidth===o&&r.video.mandatory.minHeight===d)return void a(e);r.video.mandatory.minWidth=o,r.video.mandatory.maxWidth=o,r.video.mandatory.minHeight=d,r.video.mandatory.maxHeight=d}else r.video.width.exact=o,r.video.height.exact=d;navigator.mediaDevices.getUserMedia(r).then(n).catch(a)}else a(t)},getStaticPrefLevel:function(){return h},getShareFrameRate:function(){switch(C){case 0:return 3;case 1:return 5;case 2:return 10;case 3:return 20;default:return 10}},getMachineLevel:function(){return C},getIsPoolPerfCPU:function(){return H},MACHINE_PERFORMANCE_LEVEL_LOW:0,MACHINE_PERFORMANCE_LEVEL_MEDIUM:1,MACHINE_PERFORMANCE_LEVEL_HIGHT:2,MACHINE_PERFORMANCE_LEVEL_HIGHTEST:3}}();