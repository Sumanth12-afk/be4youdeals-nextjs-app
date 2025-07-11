import Link from "next/link";

export default function HeadphonesPage4() {
  const headphones = [
    {
      title: `Sony MDR7506 Professional Large Diaphragm Headphone`,
      image: `https://m.media-amazon.com/images/I/51F-Ok9xuzL._AC_UY218_.jpg`,
      price: `$83.00 $99.99 $27.67`,
      rating: `4.7`,
      count: `(26.7K) $83.00$83.00 List: $99.99`,
      link: `https://www.amazon.com/deals`
    },
    {
      title: `TOZO A1 Wireless Earbuds Bluetooth 5.3 Light Weight in Ear IPX5 Waterproof Headphones 2 Mic for AI Calls, Immersive Premium Sound Bass Headset with Charging Case, 32 Presets EQ Customization via App`,
      image: `https://m.media-amazon.com/images/I/71W3sbCbttL._AC_UY218_.jpg https://m.media-amazon.com/images/I/11++B3A2NEL._SS200_.png`,
      price: `$13.99 $19.99`,
      rating: `4.3`,
      count: `(101.6K) $13.99$13.99 List Price: $19.99 <img alt="Climate Pledge Friendly" src="https://m.media-amazon.com/images/I/21AGu0JFvKL.svg" height="24px" width="186px"/> Discover more products with sustainability features. Learn more`,
      link: `https://www.amazon.com/A1/dp/B09FT58QQP/ref=cs_sr_dp_1?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.ry95J0PA1dosutsI1n_0eez4rQwy1b29OIbNNMbI1t8F72EnlHK9D7mAI-chS9_eh5gK9IK1GmLznWs1ClNJ08rcdknLBm2qVU0h1Iglh57uBzI1Afszb_cui-Vh09VVNwwsswt4_oAQ8azJG8z3mq16eiJrGOdayJmYDKkOCsA.Pl22V4DsbQEQtsOZMrJ0hetoP6lDrMQxHJZ22xSuM58&dib_tag=se&keywords=headphones&qid=1751887799&sprefix=headphones%2Caps%2C335&sr=8-33&xpid=FAKMVZkuWs17S https://www.amazon.com/A1/dp/B09ZYCFDBL/ref=cs_sr_dp_2?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.ry95J0PA1dosutsI1n_0eez4rQwy1b29OIbNNMbI1t8F72EnlHK9D7mAI-chS9_eh5gK9IK1GmLznWs1ClNJ08rcdknLBm2qVU0h1Iglh57uBzI1Afszb_cui-Vh09VVNwwsswt4_oAQ8azJG8z3mq16eiJrGOdayJmYDKkOCsA.Pl22V4DsbQEQtsOZMrJ0hetoP6lDrMQxHJZ22xSuM58&dib_tag=se&keywords=headphones&qid=1751887799&sprefix=headphones%2Caps%2C335&sr=8-33&xpid=FAKMVZkuWs17S https://www.amazon.com/A1/dp/B09ZYDRRK2/ref=cs_sr_dp_3?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.ry95J0PA1dosutsI1n_0eez4rQwy1b29OIbNNMbI1t8F72EnlHK9D7mAI-chS9_eh5gK9IK1GmLznWs1ClNJ08rcdknLBm2qVU0h1Iglh57uBzI1Afszb_cui-Vh09VVNwwsswt4_oAQ8azJG8z3mq16eiJrGOdayJmYDKkOCsA.Pl22V4DsbQEQtsOZMrJ0hetoP6lDrMQxHJZ22xSuM58&dib_tag=se&keywords=headphones&qid=1751887799&sprefix=headphones%2Caps%2C335&sr=8-33&xpid=FAKMVZkuWs17S https://www.amazon.com/A1/dp/B0D4DXPPN8/ref=cs_sr_dp_4?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.ry95J0PA1dosutsI1n_0eez4rQwy1b29OIbNNMbI1t8F72EnlHK9D7mAI-chS9_eh5gK9IK1GmLznWs1ClNJ08rcdknLBm2qVU0h1Iglh57uBzI1Afszb_cui-Vh09VVNwwsswt4_oAQ8azJG8z3mq16eiJrGOdayJmYDKkOCsA.Pl22V4DsbQEQtsOZMrJ0hetoP6lDrMQxHJZ22xSuM58&dib_tag=se&keywords=headphones&qid=1751887799&sprefix=headphones%2Caps%2C335&sr=8-33&xpid=FAKMVZkuWs17S https://www.amazon.com/A1/dp/B0D4DZQJ3P/ref=cs_sr_dp_5?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.ry95J0PA1dosutsI1n_0eez4rQwy1b29OIbNNMbI1t8F72EnlHK9D7mAI-chS9_eh5gK9IK1GmLznWs1ClNJ08rcdknLBm2qVU0h1Iglh57uBzI1Afszb_cui-Vh09VVNwwsswt4_oAQ8azJG8z3mq16eiJrGOdayJmYDKkOCsA.Pl22V4DsbQEQtsOZMrJ0hetoP6lDrMQxHJZ22xSuM58&dib_tag=se&keywords=headphones&qid=1751887799&sprefix=headphones%2Caps%2C335&sr=8-33&xpid=FAKMVZkuWs17S https://www.amazon.com/A1/dp/B0CMSYTP6Q/ref=cs_sr_dp_6?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.ry95J0PA1dosutsI1n_0eez4rQwy1b29OIbNNMbI1t8F72EnlHK9D7mAI-chS9_eh5gK9IK1GmLznWs1ClNJ08rcdknLBm2qVU0h1Iglh57uBzI1Afszb_cui-Vh09VVNwwsswt4_oAQ8azJG8z3mq16eiJrGOdayJmYDKkOCsA.Pl22V4DsbQEQtsOZMrJ0hetoP6lDrMQxHJZ22xSuM58&dib_tag=se&keywords=headphones&qid=1751887799&sprefix=headphones%2Caps%2C335&sr=8-33&xpid=FAKMVZkuWs17S`
    },
    {
      title: `Bose QuietComfort 45 Bluetooth Wireless Noise Cancelling Headphones - Triple Black (Renewed)`,
      image: `https://m.media-amazon.com/images/I/51smLBpimbL._AC_UY218_.jpg`,
      price: `$168.00 $329.00`,
      rating: `4.2`,
      count: `(1.1K) $168.00$168.00 New Price: $329.00`,
      link: `https://www.amazon.com/Bose-QuietComfort-Bluetooth-Cancelling-Headphones/dp/B09HL9MQ64/ref=cs_sr_dp_1?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.ry95J0PA1dosutsI1n_0eez4rQwy1b29OIbNNMbI1t8F72EnlHK9D7mAI-chS9_eh5gK9IK1GmLznWs1ClNJ08rcdknLBm2qVU0h1Iglh57uBzI1Afszb_cui-Vh09VVNwwsswt4_oAQ8azJG8z3mq16eiJrGOdayJmYDKkOCsA.Pl22V4DsbQEQtsOZMrJ0hetoP6lDrMQxHJZ22xSuM58&dib_tag=se&keywords=headphones&qid=1751887799&sprefix=headphones%2Caps%2C335&sr=8-34&xpid=FAKMVZkuWs17S https://www.amazon.com/Bose-QuietComfort-Bluetooth-Cancelling-Headphones/dp/B0BNXRRTQ7/ref=cs_sr_dp_2?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.ry95J0PA1dosutsI1n_0eez4rQwy1b29OIbNNMbI1t8F72EnlHK9D7mAI-chS9_eh5gK9IK1GmLznWs1ClNJ08rcdknLBm2qVU0h1Iglh57uBzI1Afszb_cui-Vh09VVNwwsswt4_oAQ8azJG8z3mq16eiJrGOdayJmYDKkOCsA.Pl22V4DsbQEQtsOZMrJ0hetoP6lDrMQxHJZ22xSuM58&dib_tag=se&keywords=headphones&qid=1751887799&sprefix=headphones%2Caps%2C335&sr=8-34&xpid=FAKMVZkuWs17S https://www.amazon.com/Bose-QuietComfort-Bluetooth-Cancelling-Headphones/dp/B0BNK5GWB4/ref=cs_sr_dp_3?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.ry95J0PA1dosutsI1n_0eez4rQwy1b29OIbNNMbI1t8F72EnlHK9D7mAI-chS9_eh5gK9IK1GmLznWs1ClNJ08rcdknLBm2qVU0h1Iglh57uBzI1Afszb_cui-Vh09VVNwwsswt4_oAQ8azJG8z3mq16eiJrGOdayJmYDKkOCsA.Pl22V4DsbQEQtsOZMrJ0hetoP6lDrMQxHJZ22xSuM58&dib_tag=se&keywords=headphones&qid=1751887799&sprefix=headphones%2Caps%2C335&sr=8-34&xpid=FAKMVZkuWs17S`
    },
    {
      title: `Beats Flex Wireless Earbuds - Apple W1 Headphone Chip, Magnetic Earphones, Class 1 Bluetooth, 12 Hours of Listening Time, Built-in Microphone - Black`,
      image: `https://m.media-amazon.com/images/I/61rFK7dfbUL._AC_UY218_.jpg`,
      price: `$39.99 $69.95`,
      rating: `4.2`,
      count: `(56.4K) $39.99$39.99 List: $69.95`,
      link: `https://www.amazon.com/Beats-Flex-Wireless-Earphones-Built/dp/B08L6ZYW21/ref=cs_sr_dp_1?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.ry95J0PA1dosutsI1n_0eez4rQwy1b29OIbNNMbI1t8F72EnlHK9D7mAI-chS9_eh5gK9IK1GmLznWs1ClNJ08rcdknLBm2qVU0h1Iglh57uBzI1Afszb_cui-Vh09VVNwwsswt4_oAQ8azJG8z3mq16eiJrGOdayJmYDKkOCsA.Pl22V4DsbQEQtsOZMrJ0hetoP6lDrMQxHJZ22xSuM58&dib_tag=se&keywords=headphones&qid=1751887799&sprefix=headphones%2Caps%2C335&sr=8-35&xpid=FAKMVZkuWs17S https://www.amazon.com/Beats-Flex-Wireless-Earphones-Built/dp/B08QBCXZXP/ref=cs_sr_dp_2?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.ry95J0PA1dosutsI1n_0eez4rQwy1b29OIbNNMbI1t8F72EnlHK9D7mAI-chS9_eh5gK9IK1GmLznWs1ClNJ08rcdknLBm2qVU0h1Iglh57uBzI1Afszb_cui-Vh09VVNwwsswt4_oAQ8azJG8z3mq16eiJrGOdayJmYDKkOCsA.Pl22V4DsbQEQtsOZMrJ0hetoP6lDrMQxHJZ22xSuM58&dib_tag=se&keywords=headphones&qid=1751887799&sprefix=headphones%2Caps%2C335&sr=8-35&xpid=FAKMVZkuWs17S https://www.amazon.com/Beats-Flex-Wireless-Earphones-Built/dp/B08QBJFNSV/ref=cs_sr_dp_3?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.ry95J0PA1dosutsI1n_0eez4rQwy1b29OIbNNMbI1t8F72EnlHK9D7mAI-chS9_eh5gK9IK1GmLznWs1ClNJ08rcdknLBm2qVU0h1Iglh57uBzI1Afszb_cui-Vh09VVNwwsswt4_oAQ8azJG8z3mq16eiJrGOdayJmYDKkOCsA.Pl22V4DsbQEQtsOZMrJ0hetoP6lDrMQxHJZ22xSuM58&dib_tag=se&keywords=headphones&qid=1751887799&sprefix=headphones%2Caps%2C335&sr=8-35&xpid=FAKMVZkuWs17S https://www.amazon.com/Beats-Flex-Wireless-Earphones-Built/dp/B08L6ZPV7T/ref=cs_sr_dp_4?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.ry95J0PA1dosutsI1n_0eez4rQwy1b29OIbNNMbI1t8F72EnlHK9D7mAI-chS9_eh5gK9IK1GmLznWs1ClNJ08rcdknLBm2qVU0h1Iglh57uBzI1Afszb_cui-Vh09VVNwwsswt4_oAQ8azJG8z3mq16eiJrGOdayJmYDKkOCsA.Pl22V4DsbQEQtsOZMrJ0hetoP6lDrMQxHJZ22xSuM58&dib_tag=se&keywords=headphones&qid=1751887799&sprefix=headphones%2Caps%2C335&sr=8-35&xpid=FAKMVZkuWs17S`
    },
    {
      title: `OneOdio Wired Over Ear Headphones Hi-Res Studio Monitor & Mixing DJ Stereo Headsets with 50mm Drivers and 1/4 to 3.5mm Jack for AMP Computer Recording Podcast Keyboard Guitar Laptop - Black`,
      image: `https://m.media-amazon.com/images/I/71MzTsi7UjL._AC_UY218_.jpg`,
      price: `$31.99`,
      rating: `4.4`,
      count: `(46.2K) $31.99$31.99`,
      link: `https://www.amazon.com/OneOdio-PRO1030-DJ-Headphone-Black/dp/B01N6ZJH96/ref=cs_sr_dp_1?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.ry95J0PA1dosutsI1n_0eez4rQwy1b29OIbNNMbI1t8F72EnlHK9D7mAI-chS9_eh5gK9IK1GmLznWs1ClNJ08rcdknLBm2qVU0h1Iglh57uBzI1Afszb_cui-Vh09VVNwwsswt4_oAQ8azJG8z3mq16eiJrGOdayJmYDKkOCsA.Pl22V4DsbQEQtsOZMrJ0hetoP6lDrMQxHJZ22xSuM58&dib_tag=se&keywords=headphones&qid=1751887799&sprefix=headphones%2Caps%2C335&sr=8-36&xpid=FAKMVZkuWs17S https://www.amazon.com/OneOdio-PRO1030-DJ-Headphone-Black/dp/B08BV6R26Z/ref=cs_sr_dp_2?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.ry95J0PA1dosutsI1n_0eez4rQwy1b29OIbNNMbI1t8F72EnlHK9D7mAI-chS9_eh5gK9IK1GmLznWs1ClNJ08rcdknLBm2qVU0h1Iglh57uBzI1Afszb_cui-Vh09VVNwwsswt4_oAQ8azJG8z3mq16eiJrGOdayJmYDKkOCsA.Pl22V4DsbQEQtsOZMrJ0hetoP6lDrMQxHJZ22xSuM58&dib_tag=se&keywords=headphones&qid=1751887799&sprefix=headphones%2Caps%2C335&sr=8-36&xpid=FAKMVZkuWs17S https://www.amazon.com/OneOdio-PRO1030-DJ-Headphone-Black/dp/B07X43JBY8/ref=cs_sr_dp_3?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.ry95J0PA1dosutsI1n_0eez4rQwy1b29OIbNNMbI1t8F72EnlHK9D7mAI-chS9_eh5gK9IK1GmLznWs1ClNJ08rcdknLBm2qVU0h1Iglh57uBzI1Afszb_cui-Vh09VVNwwsswt4_oAQ8azJG8z3mq16eiJrGOdayJmYDKkOCsA.Pl22V4DsbQEQtsOZMrJ0hetoP6lDrMQxHJZ22xSuM58&dib_tag=se&keywords=headphones&qid=1751887799&sprefix=headphones%2Caps%2C335&sr=8-36&xpid=FAKMVZkuWs17S https://www.amazon.com/OneOdio-PRO1030-DJ-Headphone-Black/dp/B08BTFXHHN/ref=cs_sr_dp_4?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.ry95J0PA1dosutsI1n_0eez4rQwy1b29OIbNNMbI1t8F72EnlHK9D7mAI-chS9_eh5gK9IK1GmLznWs1ClNJ08rcdknLBm2qVU0h1Iglh57uBzI1Afszb_cui-Vh09VVNwwsswt4_oAQ8azJG8z3mq16eiJrGOdayJmYDKkOCsA.Pl22V4DsbQEQtsOZMrJ0hetoP6lDrMQxHJZ22xSuM58&dib_tag=se&keywords=headphones&qid=1751887799&sprefix=headphones%2Caps%2C335&sr=8-36&xpid=FAKMVZkuWs17S https://www.amazon.com/OneOdio-PRO1030-DJ-Headphone-Black/dp/B07RW4V3MC/ref=cs_sr_dp_5?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.ry95J0PA1dosutsI1n_0eez4rQwy1b29OIbNNMbI1t8F72EnlHK9D7mAI-chS9_eh5gK9IK1GmLznWs1ClNJ08rcdknLBm2qVU0h1Iglh57uBzI1Afszb_cui-Vh09VVNwwsswt4_oAQ8azJG8z3mq16eiJrGOdayJmYDKkOCsA.Pl22V4DsbQEQtsOZMrJ0hetoP6lDrMQxHJZ22xSuM58&dib_tag=se&keywords=headphones&qid=1751887799&sprefix=headphones%2Caps%2C335&sr=8-36&xpid=FAKMVZkuWs17S https://www.amazon.com/OneOdio-PRO1030-DJ-Headphone-Black/dp/B07G748HKJ/ref=cs_sr_dp_6?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.ry95J0PA1dosutsI1n_0eez4rQwy1b29OIbNNMbI1t8F72EnlHK9D7mAI-chS9_eh5gK9IK1GmLznWs1ClNJ08rcdknLBm2qVU0h1Iglh57uBzI1Afszb_cui-Vh09VVNwwsswt4_oAQ8azJG8z3mq16eiJrGOdayJmYDKkOCsA.Pl22V4DsbQEQtsOZMrJ0hetoP6lDrMQxHJZ22xSuM58&dib_tag=se&keywords=headphones&qid=1751887799&sprefix=headphones%2Caps%2C335&sr=8-36&xpid=FAKMVZkuWs17S`
    },
    {
      title: `Logitech H390 Wired Headset for PC/Laptop, Stereo Headphones with Noise Cancelling Microphone, USB-A, In-Line Controls, Works with Chromebook`,
      image: `https://m.media-amazon.com/images/I/6144+3nBNhL._AC_UY218_.jpg`,
      price: `$24.99`,
      rating: `4.3`,
      count: `(68.2K) $24.99$24.99`,
      link: `https://www.amazon.com/Logitech-Headset-H390-Noise-Cancelling/dp/B000UXZQ42/ref=cs_sr_dp_1?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.ry95J0PA1dosutsI1n_0eez4rQwy1b29OIbNNMbI1t8F72EnlHK9D7mAI-chS9_eh5gK9IK1GmLznWs1ClNJ08rcdknLBm2qVU0h1Iglh57uBzI1Afszb_cui-Vh09VVNwwsswt4_oAQ8azJG8z3mq16eiJrGOdayJmYDKkOCsA.Pl22V4DsbQEQtsOZMrJ0hetoP6lDrMQxHJZ22xSuM58&dib_tag=se&keywords=headphones&qid=1751887799&sprefix=headphones%2Caps%2C335&sr=8-37&xpid=FAKMVZkuWs17S https://www.amazon.com/Logitech-Headset-H390-Noise-Cancelling/dp/B09XQ5WSF5/ref=cs_sr_dp_2?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.ry95J0PA1dosutsI1n_0eez4rQwy1b29OIbNNMbI1t8F72EnlHK9D7mAI-chS9_eh5gK9IK1GmLznWs1ClNJ08rcdknLBm2qVU0h1Iglh57uBzI1Afszb_cui-Vh09VVNwwsswt4_oAQ8azJG8z3mq16eiJrGOdayJmYDKkOCsA.Pl22V4DsbQEQtsOZMrJ0hetoP6lDrMQxHJZ22xSuM58&dib_tag=se&keywords=headphones&qid=1751887799&sprefix=headphones%2Caps%2C335&sr=8-37&xpid=FAKMVZkuWs17S https://www.amazon.com/Logitech-Headset-H390-Noise-Cancelling/dp/B09XQLFVJ3/ref=cs_sr_dp_3?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.ry95J0PA1dosutsI1n_0eez4rQwy1b29OIbNNMbI1t8F72EnlHK9D7mAI-chS9_eh5gK9IK1GmLznWs1ClNJ08rcdknLBm2qVU0h1Iglh57uBzI1Afszb_cui-Vh09VVNwwsswt4_oAQ8azJG8z3mq16eiJrGOdayJmYDKkOCsA.Pl22V4DsbQEQtsOZMrJ0hetoP6lDrMQxHJZ22xSuM58&dib_tag=se&keywords=headphones&qid=1751887799&sprefix=headphones%2Caps%2C335&sr=8-37&xpid=FAKMVZkuWs17S`
    },
    {
      title: `Sony MDREX15AP In-Ear Earbud Headphones with Mic, Black (MDREX15AP/B)`,
      image: `https://m.media-amazon.com/images/I/61AZ9rCOSZL._AC_UY218_.jpg`,
      price: `$6.99 $19.99`,
      rating: `4.3`,
      count: `(36.1K) $6.99$6.99 List: $19.99`,
      link: `https://www.amazon.com/Sony-MDREX15AP-B-Black/dp/B00JG2WRUO/ref=cs_sr_dp_1?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.ry95J0PA1dosutsI1n_0eez4rQwy1b29OIbNNMbI1t8F72EnlHK9D7mAI-chS9_eh5gK9IK1GmLznWs1ClNJ08rcdknLBm2qVU0h1Iglh57uBzI1Afszb_cui-Vh09VVNwwsswt4_oAQ8azJG8z3mq16eiJrGOdayJmYDKkOCsA.Pl22V4DsbQEQtsOZMrJ0hetoP6lDrMQxHJZ22xSuM58&dib_tag=se&keywords=headphones&qid=1751887799&sprefix=headphones%2Caps%2C335&sr=8-38&xpid=FAKMVZkuWs17S https://www.amazon.com/Sony-MDREX15AP-B-Black/dp/B00IJXBX74/ref=cs_sr_dp_2?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.ry95J0PA1dosutsI1n_0eez4rQwy1b29OIbNNMbI1t8F72EnlHK9D7mAI-chS9_eh5gK9IK1GmLznWs1ClNJ08rcdknLBm2qVU0h1Iglh57uBzI1Afszb_cui-Vh09VVNwwsswt4_oAQ8azJG8z3mq16eiJrGOdayJmYDKkOCsA.Pl22V4DsbQEQtsOZMrJ0hetoP6lDrMQxHJZ22xSuM58&dib_tag=se&keywords=headphones&qid=1751887799&sprefix=headphones%2Caps%2C335&sr=8-38&xpid=FAKMVZkuWs17S https://www.amazon.com/Sony-MDREX15AP-B-Black/dp/B00IJXCNMI/ref=cs_sr_dp_3?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.ry95J0PA1dosutsI1n_0eez4rQwy1b29OIbNNMbI1t8F72EnlHK9D7mAI-chS9_eh5gK9IK1GmLznWs1ClNJ08rcdknLBm2qVU0h1Iglh57uBzI1Afszb_cui-Vh09VVNwwsswt4_oAQ8azJG8z3mq16eiJrGOdayJmYDKkOCsA.Pl22V4DsbQEQtsOZMrJ0hetoP6lDrMQxHJZ22xSuM58&dib_tag=se&keywords=headphones&qid=1751887799&sprefix=headphones%2Caps%2C335&sr=8-38&xpid=FAKMVZkuWs17S`
    },
    {
      title: `JLab Go Air Pop+ True Wireless Earbuds, in Ear Headphones, Bluetooth Earphones, 35H Playtime Ear Buds, Bluetooth Earbuds with Microphone, USB-C Charging Case, Dual Connect, EQ3 Sound, Black`,
      image: `https://m.media-amazon.com/images/I/714e6+cl0kL._AC_UY218_.jpg`,
      price: `$24.99`,
      rating: `4.4`,
      count: `(6.6K) $24.99$24.99`,
      link: `https://www.amazon.com/JLab-Bluetooth-Resistance-Connection-Signature/dp/B0CXGXT6W8/ref=cs_sr_dp_1?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.ry95J0PA1dosutsI1n_0eez4rQwy1b29OIbNNMbI1t8F72EnlHK9D7mAI-chS9_eh5gK9IK1GmLznWs1ClNJ08rcdknLBm2qVU0h1Iglh57uBzI1Afszb_cui-Vh09VVNwwsswt4_oAQ8azJG8z3mq16eiJrGOdayJmYDKkOCsA.Pl22V4DsbQEQtsOZMrJ0hetoP6lDrMQxHJZ22xSuM58&dib_tag=se&keywords=headphones&qid=1751887799&sprefix=headphones%2Caps%2C335&sr=8-39&xpid=FAKMVZkuWs17S https://www.amazon.com/JLab-Bluetooth-Resistance-Connection-Signature/dp/B0DGK3V836/ref=cs_sr_dp_2?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.ry95J0PA1dosutsI1n_0eez4rQwy1b29OIbNNMbI1t8F72EnlHK9D7mAI-chS9_eh5gK9IK1GmLznWs1ClNJ08rcdknLBm2qVU0h1Iglh57uBzI1Afszb_cui-Vh09VVNwwsswt4_oAQ8azJG8z3mq16eiJrGOdayJmYDKkOCsA.Pl22V4DsbQEQtsOZMrJ0hetoP6lDrMQxHJZ22xSuM58&dib_tag=se&keywords=headphones&qid=1751887799&sprefix=headphones%2Caps%2C335&sr=8-39&xpid=FAKMVZkuWs17S https://www.amazon.com/JLab-Bluetooth-Resistance-Connection-Signature/dp/B0D879KKMF/ref=cs_sr_dp_3?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.ry95J0PA1dosutsI1n_0eez4rQwy1b29OIbNNMbI1t8F72EnlHK9D7mAI-chS9_eh5gK9IK1GmLznWs1ClNJ08rcdknLBm2qVU0h1Iglh57uBzI1Afszb_cui-Vh09VVNwwsswt4_oAQ8azJG8z3mq16eiJrGOdayJmYDKkOCsA.Pl22V4DsbQEQtsOZMrJ0hetoP6lDrMQxHJZ22xSuM58&dib_tag=se&keywords=headphones&qid=1751887799&sprefix=headphones%2Caps%2C335&sr=8-39&xpid=FAKMVZkuWs17S https://www.amazon.com/JLab-Bluetooth-Resistance-Connection-Signature/dp/B0D5P9TL5Z/ref=cs_sr_dp_4?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.ry95J0PA1dosutsI1n_0eez4rQwy1b29OIbNNMbI1t8F72EnlHK9D7mAI-chS9_eh5gK9IK1GmLznWs1ClNJ08rcdknLBm2qVU0h1Iglh57uBzI1Afszb_cui-Vh09VVNwwsswt4_oAQ8azJG8z3mq16eiJrGOdayJmYDKkOCsA.Pl22V4DsbQEQtsOZMrJ0hetoP6lDrMQxHJZ22xSuM58&dib_tag=se&keywords=headphones&qid=1751887799&sprefix=headphones%2Caps%2C335&sr=8-39&xpid=FAKMVZkuWs17S https://www.amazon.com/JLab-Bluetooth-Resistance-Connection-Signature/dp/B0CYN6TKMB/ref=cs_sr_dp_5?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.ry95J0PA1dosutsI1n_0eez4rQwy1b29OIbNNMbI1t8F72EnlHK9D7mAI-chS9_eh5gK9IK1GmLznWs1ClNJ08rcdknLBm2qVU0h1Iglh57uBzI1Afszb_cui-Vh09VVNwwsswt4_oAQ8azJG8z3mq16eiJrGOdayJmYDKkOCsA.Pl22V4DsbQEQtsOZMrJ0hetoP6lDrMQxHJZ22xSuM58&dib_tag=se&keywords=headphones&qid=1751887799&sprefix=headphones%2Caps%2C335&sr=8-39&xpid=FAKMVZkuWs17S https://www.amazon.com/JLab-Bluetooth-Resistance-Connection-Signature/dp/B0D878XJX9/ref=cs_sr_dp_6?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.ry95J0PA1dosutsI1n_0eez4rQwy1b29OIbNNMbI1t8F72EnlHK9D7mAI-chS9_eh5gK9IK1GmLznWs1ClNJ08rcdknLBm2qVU0h1Iglh57uBzI1Afszb_cui-Vh09VVNwwsswt4_oAQ8azJG8z3mq16eiJrGOdayJmYDKkOCsA.Pl22V4DsbQEQtsOZMrJ0hetoP6lDrMQxHJZ22xSuM58&dib_tag=se&keywords=headphones&qid=1751887799&sprefix=headphones%2Caps%2C335&sr=8-39&xpid=FAKMVZkuWs17S`
    }
  ];

  const pages = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold text-yellow-600 mb-6 text-center">Headphones – Page 4</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {headphones.map((item, index) => (
          <div key={index} className="border rounded-lg p-4 shadow bg-white">
            <img src={item.image} alt={item.title} className="w-full h-48 object-contain mb-2" />
            <h2 className="text-lg font-semibold text-yellow-700">{item.title}</h2>
            <p className="text-sm text-gray-600 mb-1">{item.price} — ⭐ {item.rating} {item.count}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer"
              className="inline-block mt-2 bg-yellow-500 hover:bg-yellow-600 text-white text-sm px-4 py-2 rounded">
              Buy on Amazon
            </a>
          </div>
        ))}
      </div>
      <div className="mt-10 flex justify-center gap-2 flex-wrap">

        {pages.map((p) => (
          <Link href={`/headphones/page/${p}`} key={p}>
            <button className={`px-3 py-1 border rounded ${p === 4 ? 'bg-yellow-400 text-white' : 'bg-white text-yellow-600'}`}>
              {p}
            </button>
          </Link>
        ))}
    
      </div>
    </main>
  );
}