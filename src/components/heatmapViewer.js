import React, { useEffect } from 'react';
import * as heatmap from 'heatmap.js';
// const temp = [
//     {
//         x: 107.091875,
//         y: 549.730625,
//     },
//     {
//         x: 422.89843749999994,
//         y: 257.96250000000003,
//     },
//     {
//         x: 414.88562499999995,
//         y: 259.36156250000005,
//     },
//     {
//         x: 409.289375,
//         y: 231.88906250000002,
//     },
//     {
//         x: 409.92531249999996,
//         y: 228.07343750000004,
//     },
//     {
//         x: 412.850625,
//         y: 231.50750000000002,
//     },
//     {
//         x: 416.41187499999995,
//         y: 226.29281250000003,
//     },
//     {
//         x: 211.76718749999998,
//         y: 324.73593750000003,
//     },
//     {
//         x: 186.45687499999997,
//         y: 338.2178125,
//     },
//     {
//         x: 174.50124999999997,
//         y: 343.0509375000001,
//     },
//     {
//         x: 170.94,
//         y: 343.30531249999996,
//     },
//     {
//         x: 159.8746875,
//         y: 341.90625,
//     },
//     {
//         x: 138.88875,
//         y: 344.5771875,
//     },
//     {
//         x: 136.21781249999998,
//         y: 343.81406250000003,
//     },
//     {
//         x: 139.7790625,
//         y: 343.30531249999996,
//     },
//     {
//         x: 144.739375,
//         y: 346.6121875,
//     },
//     {
//         x: 149.82687499999997,
//         y: 351.9540625000001,
//     },
//     {
//         x: 148.55499999999998,
//         y: 352.7171875,
//     },
//     {
//         x: 145.5025,
//         y: 352.84437499999996,
//     },
//     {
//         x: 144.10343749999998,
//         y: 356.7871875,
//     },
//     {
//         x: 139.2703125,
//         y: 355.2609375,
//     },
//     {
//         x: 132.1478125,
//         y: 351.31812500000007,
//     },
//     {
//         x: 129.985625,
//         y: 350.68218750000005,
//     },
//     {
//         x: 131.8934375,
//         y: 353.35312500000003,
//     },
//     {
//         x: 129.6040625,
//         y: 353.6075,
//     },
//     {
//         x: 119.93781249999999,
//         y: 350.17343750000003,
//     },
//     {
//         x: 112.81531249999999,
//         y: 345.46750000000003,
//     },
//     {
//         x: 102.25874999999999,
//         y: 337.96343750000005,
//     },
//     {
//         x: 71.3521875,
//         y: 329.06031250000007,
//     },
//     {
//         x: 68.8084375,
//         y: 327.91562500000003,
//     },
//     {
//         x: 62.83062499999999,
//         y: 326.38937500000003,
//     },
//     {
//         x: 58.379062499999996,
//         y: 325.7534375,
//     },
//     {
//         x: 11.574062499999998,
//         y: 298.6625,
//     },
//     {
//         x: 2.5437499999999997,
//         y: 282.7640625,
//     },
//     {
//         x: -0.6359374999999999,
//         y: 236.72218750000005,
//     },
//     {
//         x: -0.91575,
//         y: 231.25312500000004,
//     },
//     {
//         x: -1.11925,
//         y: 223.36750000000004,
//     },
//     {
//         x: -1.32275,
//         y: 217.51687500000003,
//     },
//     {
//         x: -1.2718749999999999,
//         y: 210.90312500000005,
//     },
//     {
//         x: -1.5771249999999999,
//         y: 204.79812500000003,
//     },
//     {
//         x: -1.7043125000000001,
//         y: 195.51343750000004,
//     },
//     {
//         x: -1.6025625,
//         y: 191.18906250000003,
//     },
//     {
//         x: -1.5008125,
//         y: 187.11906250000004,
//     },
//     {
//         x: -1.8569375,
//         y: 187.62781250000003,
//     },
//     {
//         x: -2.0095625,
//         y: 188.51812500000005,
//     },
//     {
//         x: -1.9586875,
//         y: 187.75500000000005,
//     },
//     {
//         x: -1.984125,
//         y: 187.50062500000004,
//     },
//     {
//         x: -1.9586875,
//         y: 185.08406250000002,
//     },
//     {
//         x: -2.2385,
//         y: 180.75968750000004,
//     },
//     {
//         x: -2.442,
//         y: 176.30812500000005,
//     },
//     {
//         x: -2.74725,
//         y: 173.51000000000002,
//     },
//     {
//         x: -3.1542499999999998,
//         y: 173.89156250000005,
//     },
//     {
//         x: -3.306875,
//         y: 174.65468750000005,
//     },
//     {
//         x: -2.798125,
//         y: 173.38281250000003,
//     },
//     {
//         x: -2.6455,
//         y: 172.74687500000005,
//     },
//     {
//         x: -2.3656875,
//         y: 171.98375000000004,
//     },
//     {
//         x: -1.9078125000000001,
//         y: 168.80406250000004,
//     },
//     {
//         x: -1.52625,
//         y: 167.15062500000002,
//     },
//     {
//         x: -1.6025625,
//         y: 167.02343750000003,
//     },
//     {
//         x: -1.4244999999999999,
//         y: 166.76906250000005,
//     },
//     {
//         x: -1.3990625,
//         y: 167.02343750000003,
//     },
//     {
//         x: -1.4244999999999999,
//         y: 167.53218750000005,
//     },
//     {
//         x: -1.4244999999999999,
//         y: 166.89625000000004,
//     },
//     {
//         x: -1.5008125,
//         y: 166.76906250000005,
//     },
//     {
//         x: -1.5008125,
//         y: 166.00593750000002,
//     },
//     {
//         x: -1.6025625,
//         y: 165.49718750000005,
//     },
//     {
//         x: -1.6280000000000001,
//         y: 163.97093750000002,
//     },
//     {
//         x: -1.7551875,
//         y: 127.34093750000004,
//     },
//     {
//         x: -1.9332499999999997,
//         y: 125.43312500000003,
//     },
//     {
//         x: -2.0095625,
//         y: 123.65250000000005,
//     },
//     {
//         x: -1.9332499999999997,
//         y: 121.36312500000004,
//     },
//     {
//         x: -2.0095625,
//         y: 120.60000000000004,
//     },
//     {
//         x: -1.8315,
//         y: 118.94656250000004,
//     },
//     {
//         x: -1.4244999999999999,
//         y: 116.14843750000004,
//     },
//     {
//         x: -1.2464375,
//         y: 112.58718750000004,
//     },
//     {
//         x: -1.068375,
//         y: 110.04343750000005,
//     },
//     {
//         x: -0.9411875000000001,
//         y: 105.71906250000004,
//     },
//     {
//         x: -0.8394374999999998,
//         y: 102.53937500000004,
//     },
//     {
//         x: -0.7885624999999999,
//         y: 98.85093750000006,
//     },
//     {
//         x: -0.6105,
//         y: 95.28968750000004,
//     },
//     {
//         x: -0.7376874999999999,
//         y: 90.45656250000005,
//     },
//     {
//         x: -0.7376874999999999,
//         y: 84.09718750000005,
//     },
//     {
//         x: -0.7376874999999999,
//         y: 77.35625000000005,
//     },
//     {
//         x: -0.8903125,
//         y: 74.30375000000004,
//     },
//     {
//         x: -1.1446874999999999,
//         y: 69.59781250000006,
//     },
//     {
//         x: -1.3990625,
//         y: 69.34343750000005,
//     },
//     {
//         x: -1.5008125,
//         y: 64.51031250000005,
//     },
//     {
//         x: -1.6534375,
//         y: 61.20343750000004,
//     },
//     {
//         x: -1.8315,
//         y: 58.78687500000006,
//     },
//     {
//         x: -1.8823750000000001,
//         y: 59.16843750000005,
//     },
//     {
//         x: -1.5516874999999999,
//         y: 55.352812500000056,
//     },
//     {
//         x: -1.5516874999999999,
//         y: 55.22562500000004,
//     },
//     {
//         x: -1.52625,
//         y: 54.208125000000045,
//     },
//     {
//         x: -1.3481874999999999,
//         y: 53.19062500000005,
//     },
//     {
//         x: -1.4753749999999999,
//         y: 51.53718750000005,
//     },
//     {
//         x: -1.5516874999999999,
//         y: 50.26531250000005,
//     },
//     {
//         x: -1.5516874999999999,
//         y: 48.23031250000004,
//     },
//     {
//         x: -1.8060625,
//         y: 49.50218750000004,
//     },
//     {
//         x: -1.9078125000000001,
//         y: 48.993437500000056,
//     },
//     {
//         x: 134.81875,
//         y: 118.69218750000005,
//     },
//     {
//         x: 570.4359374999999,
//         y: 126.95937500000004,
//     },
//     {
//         x: 696.3515625,
//         y: 171.47500000000005,
//     },
//     {
//         x: 704.4915624999999,
//         y: 170.71187500000005,
//     },
//     {
//         x: 708.68875,
//         y: 169.94875000000005,
//     },
//     {
//         x: 706.2721874999999,
//         y: 167.91375000000002,
//     },
//     {
//         x: 707.2896875,
//         y: 165.62437500000004,
//     },
//     {
//         x: 705.3818749999999,
//         y: 164.86125000000004,
//     },
//     {
//         x: 704.61875,
//         y: 126.06906250000004,
//     },
//     {
//         x: 703.8556249999999,
//         y: 124.16125000000004,
//     },
//     {
//         x: 705.5090625,
//         y: 123.14375000000004,
//     },
//     {
//         x: 707.1624999999999,
//         y: 123.90687500000004,
//     },
//     {
//         x: 712.504375,
//         y: 123.52531250000004,
//     },
//     {
//         x: 718.1006249999999,
//         y: 120.85437500000005,
//     },
//     {
//         x: 722.0434375,
//         y: 117.92906250000006,
//     },
//     {
//         x: 725.223125,
//         y: 113.98625000000004,
//     },
//     {
//         x: 727.766875,
//         y: 110.80656250000004,
//     },
//     {
//         x: 729.9290624999999,
//         y: 106.73656250000003,
//     },
//     {
//         x: 730.8193749999999,
//         y: 101.77625000000005,
//     },
//     {
//         x: 732.3456249999999,
//         y: 98.85093750000006,
//     },
//     {
//         x: 731.2009374999999,
//         y: 96.18000000000004,
//     },
//     {
//         x: 730.8193749999999,
//         y: 92.61875000000005,
//     },
//     {
//         x: 728.9115625,
//         y: 89.43906250000005,
//     },
//     {
//         x: 728.4028125,
//         y: 87.27687500000005,
//     },
//     {
//         x: 726.3678125,
//         y: 83.97000000000006,
//     },
//     {
//         x: 725.0959375,
//         y: 81.04468750000005,
//     },
//     {
//         x: 724.0784374999998,
//         y: 76.59312500000006,
//     },
//     {
//         x: 723.95125,
//         y: 72.14156250000005,
//     },
//     {
//         x: 723.188125,
//         y: 67.30843750000004,
//     },
//     {
//         x: 723.8240625,
//         y: 63.23843750000005,
//     },
//     {
//         x: 724.7143749999999,
//         y: 58.278125000000045,
//     },
//     {
//         x: 725.223125,
//         y: 53.69937500000005,
//     },
//     {
//         x: 726.8765625,
//         y: 48.993437500000056,
//     },
//     {
//         x: 728.5299999999999,
//         y: 45.55937500000005,
//     },
//     {
//         x: 731.7096874999999,
//         y: 41.99812500000005,
//     },
//     {
//         x: 734.7621875,
//         y: 38.05531250000004,
//     },
//     {
//         x: 737.5603124999999,
//         y: 37.67375000000005,
//     },
//     {
//         x: 740.485625,
//         y: 35.511562500000046,
//     },
//     {
//         x: 742.6478124999999,
//         y: 32.58625000000005,
//     },
//     {
//         x: 742.0118749999999,
//         y: 28.134687500000048,
//     },
//     {
//         x: 741.1215625,
//         y: 21.90250000000006,
//     },
//     {
//         x: 743.4109374999999,
//         y: 19.613125000000043,
//     },
//     {
//         x: 744.9371875,
//         y: 14.016875000000056,
//     },
//     {
//         x: 498.57499999999993,
//         y: 93.25468750000005,
//     },
//     {
//         x: 80.7640625,
//         y: 235.70468750000003,
//     },
//     {
//         x: 56.598437499999996,
//         y: 250.71281250000004,
//     },
//     {
//         x: 44.006875,
//         y: 251.094375,
//     },
//     {
//         x: 32.814375,
//         y: 250.33125000000004,
//     },
//     {
//         x: 28.362812499999997,
//         y: 251.47593750000004,
//     },
//     {
//         x: 21.7490625,
//         y: 255.54593750000004,
//     },
//     {
//         x: 17.80625,
//         y: 255.92750000000004,
//     },
//     {
//         x: 12.718749999999998,
//         y: 258.72562500000004,
//     },
//     {
//         x: 10.8109375,
//         y: 260.1246875,
//     },
//     {
//         x: 7.885624999999999,
//         y: 261.90531250000004,
//     },
//     {
//         x: 5.9778125,
//         y: 259.9975,
//     },
//     {
//         x: -0.3306875,
//         y: 260.25187500000004,
//     },
//     {
//         x: -0.6359374999999999,
//         y: 255.67312500000003,
//     },
//     {
//         x: -0.8140000000000001,
//         y: 252.87500000000003,
//     },
//     {
//         x: -0.5850624999999999,
//         y: 249.9496875,
//     },
//     {
//         x: -0.7122499999999999,
//         y: 249.44093750000005,
//     },
//     {
//         x: -0.7376874999999999,
//         y: 247.9146875,
//     },
//     {
//         x: -0.8140000000000001,
//         y: 247.9146875,
//     },
//     {
//         x: -1.0429374999999999,
//         y: 249.05937500000005,
//     },
//     {
//         x: -1.6280000000000001,
//         y: 248.67781250000002,
//     },
//     {
//         x: -1.7043125000000001,
//         y: 247.02437500000005,
//     },
//     {
//         x: -1.4753749999999999,
//         y: 246.51562500000003,
//     },
//     {
//         x: 9.030312499999999,
//         y: 252.62062500000005,
//     },
//     {
//         x: 11.8284375,
//         y: 252.62062500000005,
//     },
//     {
//         x: 17.170312499999998,
//         y: 251.094375,
//     },
//     {
//         x: 78.9834375,
//         y: 258.34406250000006,
//     },
//     {
//         x: 86.4875,
//         y: 256.18187500000005,
//     },
//     {
//         x: 93.9915625,
//         y: 254.40125,
//     },
//     {
//         x: 97.29843749999999,
//         y: 254.52843750000005,
//     },
//     {
//         x: 97.5528125,
//         y: 253.38375000000005,
//     },
//     {
//         x: 95.645,
//         y: 251.094375,
//     },
//     {
//         x: 91.70218749999998,
//         y: 249.56812500000004,
//     },
//     {
//         x: 89.79437499999999,
//         y: 248.80500000000004,
//     },
//     {
//         x: 90.93906249999999,
//         y: 250.45843750000003,
//     },
//     {
//         x: 91.829375,
//         y: 249.9496875,
//     },
//     {
//         x: 91.95656249999999,
//         y: 250.20406250000005,
//     },
//     {
//         x: 94.6275,
//         y: 250.45843750000003,
//     },
//     {
//         x: 97.42562499999998,
//         y: 250.58562500000002,
//     },
//     {
//         x: 98.18875,
//         y: 248.42343750000003,
//     },
//     {
//         x: 98.8246875,
//         y: 248.42343750000003,
//     },
//     {
//         x: 99.96937499999999,
//         y: 249.9496875,
//     },
//     {
//         x: 96.78968749999999,
//         y: 251.98468750000004,
//     },
//     {
//         x: 95.51781249999999,
//         y: 252.87500000000003,
//     },
//     {
//         x: 95.13624999999999,
//         y: 256.30906250000004,
//     },
//     {
//         x: 93.4828125,
//         y: 258.59843750000005,
//     },
//     {
//         x: 93.864375,
//         y: 260.37906250000003,
//     },
//     {
//         x: 92.7196875,
//         y: 260.88781250000005,
//     },
//     {
//         x: 91.829375,
//         y: 262.28687500000007,
//     },
//     {
//         x: 91.32062499999999,
//         y: 263.05,
//     },
//     {
//         x: 92.59249999999999,
//         y: 261.52375000000006,
//     },
//     {
//         x: 94.24593749999998,
//         y: 260.50625,
//     },
//     {
//         x: 95.77218749999999,
//         y: 259.10718750000007,
//     },
//     {
//         x: 102.25874999999999,
//         y: 258.59843750000005,
//     },
//     {
//         x: 106.96468749999998,
//         y: 258.8528125,
//     },
//     {
//         x: 112.68812499999999,
//         y: 259.23437500000006,
//     },
//     {
//         x: 118.41156249999999,
//         y: 261.14218750000003,
//     },
//     {
//         x: 123.62625,
//         y: 260.88781250000005,
//     },
//     {
//         x: 130.74874999999997,
//         y: 261.52375000000006,
//     },
//     {
//         x: 135.58187499999997,
//         y: 261.3965625,
//     },
//     {
//         x: 129.22249999999997,
//         y: 261.01500000000004,
//     },
//     {
//         x: 103.9121875,
//         y: 264.83062500000005,
//     },
//     {
//         x: 89.9215625,
//         y: 264.70343750000006,
//     },
//     {
//         x: 79.7465625,
//         y: 265.2121875,
//     },
//     {
//         x: 2.9253124999999995,
//         y: 273.3521875,
//     },
//     {
//         x: 0.38156249999999997,
//         y: 271.69875,
//     },
//     {
//         x: -0.20350000000000001,
//         y: 266.4840625,
//     },
//     {
//         x: -0.8394374999999998,
//         y: 265.59375000000006,
//     },
//     {
//         x: -1.0174999999999998,
//         y: 262.66843750000004,
//     },
//     {
//         x: -0.9411875000000001,
//         y: 260.6334375,
//     },
//     {
//         x: -0.8648750000000001,
//         y: 258.216875,
//     },
//     {
//         x: -1.11925,
//         y: 257.83531250000004,
//     },
//     {
//         x: -1.4499374999999999,
//         y: 259.9975,
//     },
//     {
//         x: -1.4499374999999999,
//         y: 262.79562500000003,
//     },
//     {
//         x: -1.5008125,
//         y: 263.43156250000004,
//     },
//     {
//         x: -1.6534375,
//         y: 264.95781250000005,
//     },
//     {
//         x: -1.7043125000000001,
//         y: 264.4490625,
//     },
//     {
//         x: -1.7297500000000001,
//         y: 261.77812500000005,
//     },
//     {
//         x: -1.9586875,
//         y: 259.36156250000005,
//     },
//     {
//         x: -2.0095625,
//         y: 256.8178125,
//     },
//     {
//         x: -1.9586875,
//         y: 252.74781250000004,
//     },
//     {
//         x: -2.1113125,
//         y: 249.31375000000003,
//     },
//     {
//         x: -2.0095625,
//         y: 245.24375000000003,
//     },
//     {
//         x: -1.7297500000000001,
//         y: 241.68250000000003,
//     },
//     {
//         x: -1.7551875,
//         y: 237.10375000000002,
//     },
//     {
//         x: -1.6788749999999997,
//         y: 233.41531250000003,
//     },
//     {
//         x: -1.6788749999999997,
//         y: 229.34531250000003,
//     },
//     {
//         x: -1.7551875,
//         y: 225.656875,
//     },
//     {
//         x: -1.8569375,
//         y: 217.89843750000003,
//     },
//     {
//         x: -1.6534375,
//         y: 198.69312500000004,
//     },
//     {
//         x: -1.6025625,
//         y: 186.22875000000002,
//     },
//     {
//         x: -1.5516874999999999,
//         y: 170.83906250000004,
//     },
//     {
//         x: -1.5516874999999999,
//         y: 162.69906250000003,
//     },
//     {
//         x: -1.6534375,
//         y: 162.82625000000002,
//     },
//     {
//         x: -1.7551875,
//         y: 124.67000000000004,
//     },
//     {
//         x: -1.9078125000000001,
//         y: 110.17062500000004,
//     },
//     {
//         x: -1.6788749999999997,
//         y: 93.50906250000006,
//     },
//     {
//         x: -1.32275,
//         y: 80.53593750000005,
//     },
//     {
//         x: -1.2973124999999999,
//         y: 75.06687500000005,
//     },
//     {
//         x: -1.4244999999999999,
//         y: 70.10656250000004,
//     },
//     {
//         x: -1.5516874999999999,
//         y: 64.63750000000005,
//     },
//     {
//         x: -1.5516874999999999,
//         y: 60.05875000000005,
//     },
//     {
//         x: -1.6280000000000001,
//         y: 51.028437500000045,
//     },
//     {
//         x: -1.373625,
//         y: 46.06812500000006,
//     },
//     {
//         x: -1.4244999999999999,
//         y: 35.511562500000046,
//     },
//     {
//         x: -1.3481874999999999,
//         y: 27.75312500000005,
//     },
//     {
//         x: -1.1955625,
//         y: 24.827812500000054,
//     },
//     {
//         x: -1.068375,
//         y: 22.284062500000054,
//     },
//     {
//         x: -0.9920625,
//         y: 20.503437500000047,
//     },
//     {
//         x: -0.7376874999999999,
//         y: 18.21406250000005,
//     },
//     {
//         x: -0.763125,
//         y: 13.889687500000045,
//     },
//     {
//         x: -0.7885624999999999,
//         y: 13.63531250000006,
//     },
//     {
//         x: -0.763125,
//         y: 11.72750000000006,
//     },
//     {
//         x: -0.763125,
//         y: 8.929375000000038,
//     },
//     {
//         x: -0.5850624999999999,
//         y: 5.622500000000046,
//     },
//     {
//         x: -0.35612499999999997,
//         y: 0.6621875000000386,
//     },
//     {
//         x: -0.25437499999999996,
//         y: -0.8850624999999923,
//     },
//     {
//         x: -0.0763125,
//         y: -1.4446874999999892,
//     },
//     {
//         x: -0.152625,
//         y: -1.6990624999999893,
//     },
//     {
//         x: -0.2798125,
//         y: -1.8771249999999864,
//     },
//     {
//         x: -0.457875,
//         y: -1.9279999999999906,
//     },
//     {
//         x: -0.661375,
//         y: -1.953437499999989,
//     },
//     {
//         x: -0.8903125,
//         y: -2.1060624999999877,
//     },
//     {
//         x: 323.6921875,
//         y: 17.578125000000053,
//     },
//     {
//         x: 614.315625,
//         y: 65.90937500000005,
//     },
//     {
//         x: 642.9328125,
//         y: 64.38312500000005,
//     },
//     {
//         x: 654.8884374999999,
//         y: 61.83937500000005,
//     },
//     {
//         x: 664.3003124999999,
//         y: 58.02375000000004,
//     },
//     {
//         x: 672.313125,
//         y: 56.49750000000004,
//     },
//     {
//         x: 676.7646874999999,
//         y: 55.48000000000005,
//     },
//     {
//         x: 680.7075,
//         y: 56.37031250000005,
//     },
//     {
//         x: 684.6503124999999,
//         y: 54.71687500000005,
//     },
//     {
//         x: 683.6328125,
//         y: 54.58968750000004,
//     },
//     {
//         x: 674.6025,
//         y: 50.138125000000045,
//     },
//     {
//         x: 669.260625,
//         y: 50.01093750000005,
//     },
//     {
//         x: 660.6118749999999,
//         y: 47.46718750000005,
//     },
//     {
//         x: 651.454375,
//         y: 45.94093750000005,
//     },
//     {
//         x: 643.06,
//         y: 43.397187500000044,
//     },
//     {
//         x: 640.1346874999999,
//         y: 40.98062500000006,
//     },
//     {
//         x: 641.7881249999999,
//         y: 36.14750000000004,
//     },
//     {
//         x: 646.6212499999999,
//         y: 32.45906250000005,
//     },
//     {
//         x: 650.0553125,
//         y: 29.406562500000046,
//     },
//     {
//         x: 654.7612499999999,
//         y: 24.319062500000047,
//     },
//     {
//         x: 659.8487499999999,
//         y: 18.08687500000006,
//     },
//     {
//         x: 662.7740625,
//         y: 16.179062500000057,
//     },
//     {
//         x: 662.138125,
//         y: 14.90718750000006,
//     },
//     {
//         x: 651.3271874999999,
//         y: 16.815000000000058,
//     },
//     {
//         x: 644.7134374999999,
//         y: 18.468437500000054,
//     },
//     {
//         x: 640.0074999999999,
//         y: 19.613125000000043,
//     },
//     {
//         x: 634.5384374999999,
//         y: 19.86750000000005,
//     },
//     {
//         x: 629.9596875,
//         y: 22.02968750000005,
//     },
//     {
//         x: 627.034375,
//         y: 22.156875000000046,
//     },
//     {
//         x: 623.8546875,
//         y: 23.301562500000053,
//     },
//     {
//         x: 618.1312499999999,
//         y: 27.880312500000045,
//     },
//     {
//         x: 450.8796875,
//         y: 123.77968750000004,
//     },
//     {
//         x: 434.98125,
//         y: 128.35843750000004,
//     },
//     {
//         x: 421.88093749999996,
//         y: 126.70500000000004,
//     },
//     {
//         x: 413.35937499999994,
//         y: 127.97687500000004,
//     },
//     {
//         x: 400.8949999999999,
//         y: 126.32343750000004,
//     },
//     {
//         x: 393.6453125,
//         y: 126.95937500000004,
//     },
//     {
//         x: 388.17625,
//         y: 126.32343750000004,
//     },
//     {
//         x: 385.12375,
//         y: 126.19625000000005,
//     },
//     {
//         x: 382.9615625,
//         y: 130.39343750000003,
//     },
//     {
//         x: 381.43531249999995,
//         y: 132.93718750000005,
//     },
//     {
//         x: 381.9440625,
//         y: 169.69437500000004,
//     },
//     {
//         x: 382.45281249999994,
//         y: 171.34781250000006,
//     },
//     {
//         x: 382.19843749999995,
//         y: 172.87406250000004,
//     },
//     {
//         x: 383.72468749999996,
//         y: 173.00125000000003,
//     },
//     {
//         x: 384.10625,
//         y: 174.01875000000004,
//     },
//     {
//         x: 382.325625,
//         y: 175.67218750000006,
//     },
//     {
//         x: 382.325625,
//         y: 176.18093750000003,
//     },
//     {
//         x: 381.9440625,
//         y: 175.92656250000005,
//     },
//     {
//         x: 382.83437499999997,
//         y: 177.07125000000005,
//     },
//     {
//         x: 384.61499999999995,
//         y: 177.83437500000005,
//     },
//     {
//         x: 387.15874999999994,
//         y: 178.21593750000005,
//     },
//     {
//         x: 380.79937499999994,
//         y: 182.66750000000005,
//     },
//     {
//         x: 371.3875,
//         y: 183.04906250000002,
//     },
//     {
//         x: 359.94062499999995,
//         y: 191.06187500000004,
//     },
//     {
//         x: 312.626875,
//         y: 221.45968750000006,
//     },
//     {
//         x: 281.97468749999996,
//         y: 229.47250000000003,
//     },
//     {
//         x: 257.17312499999997,
//         y: 231.88906250000002,
//     },
//     {
//         x: 245.59906249999997,
//         y: 231.88906250000002,
//     },
//     {
//         x: 238.858125,
//         y: 230.74437500000002,
//     },
//     {
//         x: 226.2665625,
//         y: 230.10843750000004,
//     },
//     {
//         x: 224.9946875,
//         y: 228.70937500000002,
//     },
//     {
//         x: 223.46843749999996,
//         y: 228.20062500000003,
//     },
//     {
//         x: 221.1790625,
//         y: 227.05593750000003,
//     },
//     {
//         x: 213.5478125,
//         y: 228.20062500000003,
//     },
//     {
//         x: 186.0753125,
//         y: 231.25312500000004,
//     },
//     {
//         x: 175.64593749999997,
//         y: 230.36281250000005,
//     },
//     {
//         x: 158.47562499999998,
//         y: 231.25312500000004,
//     },
//     {
//         x: 108.23656249999999,
//         y: 240.91937500000003,
//     },
//     {
//         x: 101.11406249999999,
//         y: 241.30093750000003,
//     },
//     {
//         x: 98.18875,
//         y: 240.02906250000004,
//     },
//     {
//         x: 96.78968749999999,
//         y: 239.90187500000005,
//     },
//     {
//         x: 96.5353125,
//         y: 239.77468750000003,
//     },
//     {
//         x: 99.20625,
//         y: 239.39312500000005,
//     },
//     {
//         x: 101.11406249999999,
//         y: 241.68250000000003,
//     },
//     {
//         x: 101.3684375,
//         y: 243.20875000000004,
//     },
//     {
//         x: 101.87718749999999,
//         y: 244.22625000000002,
//     },
//     {
//         x: 102.8946875,
//         y: 245.62531250000004,
//     },
//     {
//         x: 103.40343749999998,
//         y: 245.87968750000005,
//     },
//     {
//         x: 103.021875,
//         y: 247.15156250000004,
//     },
//     {
//         x: 103.530625,
//         y: 245.24375000000003,
//     },
//     {
//         x: 104.42093749999998,
//         y: 245.11656250000004,
//     },
//     {
//         x: 102.8946875,
//         y: 242.57281250000005,
//     },
//     {
//         x: 103.78499999999998,
//         y: 242.57281250000005,
//     },
//     {
//         x: 106.45593749999999,
//         y: 241.68250000000003,
//     },
//     {
//         x: 106.7103125,
//         y: 240.66500000000005,
//     },
//     {
//         x: 108.23656249999999,
//         y: 239.26593750000004,
//     },
//     {
//         x: 109.2540625,
//         y: 238.50281250000003,
//     },
//     {
//         x: 110.01718749999999,
//         y: 238.88437500000003,
//     },
//     {
//         x: 111.925,
//         y: 236.59500000000003,
//     },
//     {
//         x: 118.284375,
//         y: 234.43281250000004,
//     },
//     {
//         x: 125.02531249999998,
//         y: 232.39781250000004,
//     },
//     {
//         x: 131.8934375,
//         y: 231.50750000000002,
//     },
//     {
//         x: 140.0334375,
//         y: 229.59968750000002,
//     },
//     {
//         x: 147.66468749999999,
//         y: 228.8365625,
//     },
//     {
//         x: 154.02406249999999,
//         y: 229.21812500000004,
//     },
//     {
//         x: 162.6728125,
//         y: 228.07343750000004,
//     },
//     {
//         x: 175.13718749999998,
//         y: 225.52968750000002,
//     },
//     {
//         x: 191.41718749999998,
//         y: 222.98593750000003,
//     },
//     {
//         x: 199.04843749999998,
//         y: 221.84125000000003,
//     },
//     {
//         x: 201.21062499999996,
//         y: 218.1528125,
//     },
//     {
//         x: 200.44749999999996,
//         y: 215.99062500000002,
//     },
//     {
//         x: 199.81156249999998,
//         y: 215.60906250000002,
//     },
//     {
//         x: 198.66687499999998,
//         y: 216.11781250000004,
//     },
//     {
//         x: 197.14062499999997,
//         y: 216.62656250000003,
//     },
//     {
//         x: 199.30281249999996,
//         y: 216.37218750000005,
//     },
//     {
//         x: 199.5571875,
//         y: 215.48187500000003,
//     },
// ];
const HeatmapViewer = ({ result = [], className, style, id = 'heatmapContainer', config }) => {
    useEffect(() => {
        const heatmapInstance = heatmap.create({
            container: document.getElementById(id),
            ...config,
        });
        if (result?.length) {
            const dataPoint = result.map((e) => ({
                x: e.x > 0 ? Math.round(e.x) : 0,
                y: e.y > 0 ? Math.round(e.y) : 0,
                value: 1,
            }));
            const data = {
                max: 2,
                min: 0,
                data: dataPoint,
            };
            console.log('HeatmapViewerData', data);
            heatmapInstance.setData(data);
        }
    });
    useEffect(() => {
        const canvas = document.getElementById('gazePlot');
        canvas.width = document.body.clientWidth; //document.width is obsolete
        canvas.height = document.body.clientHeight; //document.height is obsolete
        // canvasW = canvas.width;
        // canvasH = canvas.height;
        let tempGroup = [];
        const gazePlotData = result.reduce(
            (result, values, inx, arr) => {
                const x = Math.round(values.x);
                const y = Math.round(values.y);
                const saccadStep = 100;
                const dist = ({ x, y }, inx, arr) =>
                    inx > 0
                        ? Math.round(
                              Math.sqrt((x - arr[inx - 1].x) ** 2 + (y - arr[inx - 1].y) ** 2),
                          )
                        : 0;
                const distance = dist({ x, y }, inx, arr);
                if (distance <= saccadStep && inx > 0) {
                    tempGroup.push({ x, y });
                }
                if (distance > saccadStep && inx > 0) {
                    if (tempGroup.length) {
                        result.pop();
                        const lastRes = result[result.length - 1];
                        const groupMediana = [lastRes, ...tempGroup].reduce(
                            (res, val, groupIdx, groupArr) => {
                                const middleX = Math.round((res.x + val.x) / 2);
                                const middleY = Math.round((res.y + val.y) / 2);
                                const middlePoint = {
                                    x: middleX,
                                    y: middleY,
                                    size: groupArr.length * 0.5 || 1,
                                    points: groupArr.length,
                                    dist: dist({ x: middleX, y: middleY }, inx, arr),
                                    arr: groupArr,
                                };
                                return middlePoint;
                            },
                            { x: 0, y: 0, dist: 0, size: 1, points: 1 },
                        );
                        result.push(groupMediana);
                        tempGroup = [];
                    }
                    result.push({
                        x,
                        y,
                        size: 1,
                        dist: distance,
                        points: 1,
                    });
                }
                return result;
            },
            [{ x: 0, y: 0, dist: 0, size: 1, points: 1 }],
        );
        console.log({ gazePlotData });
        const fixPoits = gazePlotData.filter(({ points }) => points > 1);
        const fixPointsAmount = fixPoits.length;
        const fixPointsMedSize =
            fixPoits.reduce((res, val) => res + val.points, 0) / fixPointsAmount;
        const sakkadeMedLenght = fixPoits.reduce((res, val) => res + val.dist, 0) / fixPointsAmount;
        console.log('ficsation point amount', fixPointsAmount);
        console.log('aproximate amount focus point in ficsation point', fixPointsMedSize);
        console.log('aproximate sakkade lenght', sakkadeMedLenght);
        console.log('k=sakkadeMedLenght/allPointsAmount', sakkadeMedLenght / gazePlotData.length);

        if (canvas.getContext) {
            const ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            // ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
            // ctx.globalAlpha = 1;
            // ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.beginPath();
            // all points are given as x (from left to right), y (from top to bottom)
            ctx.font = '40px serif';
            ctx.fillStyle = '#c82124';
            gazePlotData.forEach(({ x, y, size }, inx, arr) => {
                if (inx === 0) {
                    ctx.moveTo(x, y);
                    ctx.fillText('start', x, y);
                }

                ctx.lineTo(x, y);
                ctx.stroke();
                ctx.arc(x, y, 10 * size, 0, Math.PI * 2, true);
                // ctx.closePath();
                // ctx.fill();
                // ctx.fillText(size, x, y);
                if (inx === arr.length - 1) {
                    ctx.fillText('end', x, y);
                }
            });
        }
    });

    return (
        <div style={{ width: '100%', height: '100%', ...style }} className={className}>
            <canvas
                style={{ aspectRatio: 'auto', position: 'absolute', zIndex: 1 }}
                id="gazePlot"
            ></canvas>
            <div style={{ width: '100%', height: '100%' }} id={id || 'heatmapContainer'}></div>
        </div>
    );
};

export default HeatmapViewer;
