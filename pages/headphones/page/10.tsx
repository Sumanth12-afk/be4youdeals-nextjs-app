import Link from "next/link";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { addToWishlist } from "../../../lib/wishlistUtils";

export default function HeadphonesPage10() {
  const headphones = [
    {
      title: `Wireless Earbuds, Bluetooth 5.4 Ear Buds LED Power Display Headphones Bass Stereo, Bluetooth Earbuds in-Ear Noise Cancelling Mic, 40H Playback Mini Case IP7 Waterproof Sports Earphones for Android iOS`,
      image: `https://m.media-amazon.com/images/I/614gb9uXQuL._AC_UY218_.jpg https://m.media-amazon.com/images/I/11++B3A2NEL._SS200_.png`,
      price: `$16.99 $24.99`,
      rating: `4.3`,
      count: `(12K) $16.99$16.99 List: $24.99 <img alt="Climate Pledge Friendly" src="https://m.media-amazon.com/images/I/21AGu0JFvKL.svg" height="24px" width="186px"/> Discover more products with sustainability features. Learn more`,
      link: `https://www.amazon.com/Bluetooth-Headphones-Cancelling-Waterproof-Earphones/dp/B0C1BTXM9W/ref=cs_sr_dp_1?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.-humR6AtW7ZXd_ShBC20OYnK3H8dgudeghCOYAWkaxMa1rjjszIwQHyTALvY4koWR6WIjt-O8WFLCRkjqY6-BfrZsqdQGg12EAJhTFIvS9eOH-3t-C-y-vcmfvyfTTEtZ8BIE05WcBdUZ_mdiOHo0k8fZMsxqHiOhDSzZg9z2Qo.RmVGtFnv70ul2dAUdVwf0n9OiABy0mhq2Cz2t7ZiLZw&dib_tag=se&keywords=headphones&qid=1751887867&sprefix=headphones%2Caps%2C335&sr=8-89&xpid=FAKMVZkuWs17S https://www.amazon.com/Bluetooth-Headphones-Cancelling-Waterproof-Earphones/dp/B0DK6LNZXW/ref=cs_sr_dp_2?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.-humR6AtW7ZXd_ShBC20OYnK3H8dgudeghCOYAWkaxMa1rjjszIwQHyTALvY4koWR6WIjt-O8WFLCRkjqY6-BfrZsqdQGg12EAJhTFIvS9eOH-3t-C-y-vcmfvyfTTEtZ8BIE05WcBdUZ_mdiOHo0k8fZMsxqHiOhDSzZg9z2Qo.RmVGtFnv70ul2dAUdVwf0n9OiABy0mhq2Cz2t7ZiLZw&dib_tag=se&keywords=headphones&qid=1751887867&sprefix=headphones%2Caps%2C335&sr=8-89&xpid=FAKMVZkuWs17S https://www.amazon.com/Bluetooth-Headphones-Cancelling-Waterproof-Earphones/dp/B0D2HJDH94/ref=cs_sr_dp_3?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.-humR6AtW7ZXd_ShBC20OYnK3H8dgudeghCOYAWkaxMa1rjjszIwQHyTALvY4koWR6WIjt-O8WFLCRkjqY6-BfrZsqdQGg12EAJhTFIvS9eOH-3t-C-y-vcmfvyfTTEtZ8BIE05WcBdUZ_mdiOHo0k8fZMsxqHiOhDSzZg9z2Qo.RmVGtFnv70ul2dAUdVwf0n9OiABy0mhq2Cz2t7ZiLZw&dib_tag=se&keywords=headphones&qid=1751887867&sprefix=headphones%2Caps%2C335&sr=8-89&xpid=FAKMVZkuWs17S https://www.amazon.com/Bluetooth-Headphones-Cancelling-Waterproof-Earphones/dp/B0C8TSJX9Z/ref=cs_sr_dp_4?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.-humR6AtW7ZXd_ShBC20OYnK3H8dgudeghCOYAWkaxMa1rjjszIwQHyTALvY4koWR6WIjt-O8WFLCRkjqY6-BfrZsqdQGg12EAJhTFIvS9eOH-3t-C-y-vcmfvyfTTEtZ8BIE05WcBdUZ_mdiOHo0k8fZMsxqHiOhDSzZg9z2Qo.RmVGtFnv70ul2dAUdVwf0n9OiABy0mhq2Cz2t7ZiLZw&dib_tag=se&keywords=headphones&qid=1751887867&sprefix=headphones%2Caps%2C335&sr=8-89&xpid=FAKMVZkuWs17S https://www.amazon.com/Bluetooth-Headphones-Cancelling-Waterproof-Earphones/dp/B0CHYJS9D7/ref=cs_sr_dp_5?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.-humR6AtW7ZXd_ShBC20OYnK3H8dgudeghCOYAWkaxMa1rjjszIwQHyTALvY4koWR6WIjt-O8WFLCRkjqY6-BfrZsqdQGg12EAJhTFIvS9eOH-3t-C-y-vcmfvyfTTEtZ8BIE05WcBdUZ_mdiOHo0k8fZMsxqHiOhDSzZg9z2Qo.RmVGtFnv70ul2dAUdVwf0n9OiABy0mhq2Cz2t7ZiLZw&dib_tag=se&keywords=headphones&qid=1751887867&sprefix=headphones%2Caps%2C335&sr=8-89&xpid=FAKMVZkuWs17S https://www.amazon.com/Bluetooth-Headphones-Cancelling-Waterproof-Earphones/dp/B0FBWJMQ8R/ref=cs_sr_dp_6?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.-humR6AtW7ZXd_ShBC20OYnK3H8dgudeghCOYAWkaxMa1rjjszIwQHyTALvY4koWR6WIjt-O8WFLCRkjqY6-BfrZsqdQGg12EAJhTFIvS9eOH-3t-C-y-vcmfvyfTTEtZ8BIE05WcBdUZ_mdiOHo0k8fZMsxqHiOhDSzZg9z2Qo.RmVGtFnv70ul2dAUdVwf0n9OiABy0mhq2Cz2t7ZiLZw&dib_tag=se&keywords=headphones&qid=1751887867&sprefix=headphones%2Caps%2C335&sr=8-89&xpid=FAKMVZkuWs17S`
    },
    {
      title: `Turtle Beach Stealth 500 Wireless Amplified Gaming Headset for PS5, PS4, PC, & Mobile – 40-Hr Battery, Bluetooth, Memory Foam Cushions, Flip-to-Mute Mic, EQ Presets, Companion App – Black`,
      image: `https://m.media-amazon.com/images/I/71cHJujGTHL._AC_UY218_.jpg`,
      price: `$73.99 $79.99`,
      rating: `4.1`,
      count: `(695) $73.99$73.99 List: $79.99`,
      link: `https://www.amazon.com/Turtle-Stealth-Wireless-Amplified-Headset-Nintendo/dp/B0CYWJJLBY/ref=cs_sr_dp_1?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.-humR6AtW7ZXd_ShBC20OYnK3H8dgudeghCOYAWkaxMa1rjjszIwQHyTALvY4koWR6WIjt-O8WFLCRkjqY6-BfrZsqdQGg12EAJhTFIvS9eOH-3t-C-y-vcmfvyfTTEtZ8BIE05WcBdUZ_mdiOHo0k8fZMsxqHiOhDSzZg9z2Qo.RmVGtFnv70ul2dAUdVwf0n9OiABy0mhq2Cz2t7ZiLZw&dib_tag=se&keywords=headphones&qid=1751887867&sprefix=headphones%2Caps%2C335&sr=8-90&xpid=FAKMVZkuWs17S https://www.amazon.com/Turtle-Stealth-Wireless-Amplified-Headset-Nintendo/dp/B0CYW96C5F/ref=cs_sr_dp_2?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.-humR6AtW7ZXd_ShBC20OYnK3H8dgudeghCOYAWkaxMa1rjjszIwQHyTALvY4koWR6WIjt-O8WFLCRkjqY6-BfrZsqdQGg12EAJhTFIvS9eOH-3t-C-y-vcmfvyfTTEtZ8BIE05WcBdUZ_mdiOHo0k8fZMsxqHiOhDSzZg9z2Qo.RmVGtFnv70ul2dAUdVwf0n9OiABy0mhq2Cz2t7ZiLZw&dib_tag=se&keywords=headphones&qid=1751887867&sprefix=headphones%2Caps%2C335&sr=8-90&xpid=FAKMVZkuWs17S`
    },
    {
      title: `Wireless Earbuds, Bluetooth 5.4 Ear Buds LED Power Display Headphones Bass Stereo, Bluetooth Earbuds in-Ear Noise Cancelling Mic, 40H Playback Mini Case IP7 Waterproof Sports Earphones for Android iOS`,
      image: `https://m.media-amazon.com/images/I/614gb9uXQuL._AC_UY218_.jpg https://m.media-amazon.com/images/I/11++B3A2NEL._SS200_.png`,
      price: `$16.99 $24.99`,
      rating: `4.3`,
      count: `(12K) $16.99$16.99 List: $24.99 <img alt="Climate Pledge Friendly" src="https://m.media-amazon.com/images/I/21AGu0JFvKL.svg" height="24px" width="186px"/> Discover more products with sustainability features. Learn more`,
      link: `https://www.amazon.com/Bluetooth-Headphones-Cancelling-Waterproof-Earphones/dp/B0C1BTXM9W/ref=cs_sr_dp_1?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.4RrlQWDsL5JK3kbIiQy9whY1EHo0XSdIN3ILCzQmEFlo5v9UOPnz9Ve1C6obtZs6CEQuqayEpX0b4yavNbYSsw.xS1FYmtdNWxSYBMn5wSfrCUXcw3_FqwVoJojLsHNeiI&dib_tag=se&keywords=headphones&qid=1751887888&sprefix=headphones%2Caps%2C335&sr=8-97&xpid=FAKMVZkuWs17S https://www.amazon.com/Bluetooth-Headphones-Cancelling-Waterproof-Earphones/dp/B0DK6LNZXW/ref=cs_sr_dp_2?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.4RrlQWDsL5JK3kbIiQy9whY1EHo0XSdIN3ILCzQmEFlo5v9UOPnz9Ve1C6obtZs6CEQuqayEpX0b4yavNbYSsw.xS1FYmtdNWxSYBMn5wSfrCUXcw3_FqwVoJojLsHNeiI&dib_tag=se&keywords=headphones&qid=1751887888&sprefix=headphones%2Caps%2C335&sr=8-97&xpid=FAKMVZkuWs17S https://www.amazon.com/Bluetooth-Headphones-Cancelling-Waterproof-Earphones/dp/B0D2HJDH94/ref=cs_sr_dp_3?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.4RrlQWDsL5JK3kbIiQy9whY1EHo0XSdIN3ILCzQmEFlo5v9UOPnz9Ve1C6obtZs6CEQuqayEpX0b4yavNbYSsw.xS1FYmtdNWxSYBMn5wSfrCUXcw3_FqwVoJojLsHNeiI&dib_tag=se&keywords=headphones&qid=1751887888&sprefix=headphones%2Caps%2C335&sr=8-97&xpid=FAKMVZkuWs17S https://www.amazon.com/Bluetooth-Headphones-Cancelling-Waterproof-Earphones/dp/B0C8TSJX9Z/ref=cs_sr_dp_4?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.4RrlQWDsL5JK3kbIiQy9whY1EHo0XSdIN3ILCzQmEFlo5v9UOPnz9Ve1C6obtZs6CEQuqayEpX0b4yavNbYSsw.xS1FYmtdNWxSYBMn5wSfrCUXcw3_FqwVoJojLsHNeiI&dib_tag=se&keywords=headphones&qid=1751887888&sprefix=headphones%2Caps%2C335&sr=8-97&xpid=FAKMVZkuWs17S https://www.amazon.com/Bluetooth-Headphones-Cancelling-Waterproof-Earphones/dp/B0CHYJS9D7/ref=cs_sr_dp_5?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.4RrlQWDsL5JK3kbIiQy9whY1EHo0XSdIN3ILCzQmEFlo5v9UOPnz9Ve1C6obtZs6CEQuqayEpX0b4yavNbYSsw.xS1FYmtdNWxSYBMn5wSfrCUXcw3_FqwVoJojLsHNeiI&dib_tag=se&keywords=headphones&qid=1751887888&sprefix=headphones%2Caps%2C335&sr=8-97&xpid=FAKMVZkuWs17S https://www.amazon.com/Bluetooth-Headphones-Cancelling-Waterproof-Earphones/dp/B0FBWJMQ8R/ref=cs_sr_dp_6?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.4RrlQWDsL5JK3kbIiQy9whY1EHo0XSdIN3ILCzQmEFlo5v9UOPnz9Ve1C6obtZs6CEQuqayEpX0b4yavNbYSsw.xS1FYmtdNWxSYBMn5wSfrCUXcw3_FqwVoJojLsHNeiI&dib_tag=se&keywords=headphones&qid=1751887888&sprefix=headphones%2Caps%2C335&sr=8-97&xpid=FAKMVZkuWs17S`
    },
    {
      title: `Bose QuietComfort Ultra Bluetooth Headphones, Wireless Headphones with Spatial Audio, Over Ear Noise Cancelling with Mic, Up to 24 Hours of Playtime, Lunar Blue - Limited Edition Color`,
      image: `https://m.media-amazon.com/images/I/61fJZu8p1FL._AC_UY218_.jpg`,
      price: `$449.00 $89.80`,
      rating: `4.2`,
      count: `(6.9K) $449.00$449.00`,
      link: `https://www.amazon.com/Bose-QuietComfort-Bluetooth-Headphones-Cancelling/dp/B0D4ZC4XMT/ref=cs_sr_dp_1?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.slIzQVbvSI3SChQpPn4qcvjj5WncJbA2p-6ZqUkeO_JHO6R941jOri5lLPkbGBKXNywKsR9sObShGQ_xtAiMqbVRcUTExCS9JISbLenyI5c3S3DMcKkiDitGdR8arnyhjQOYuyGUxZIQidXZeqm6oe3YWtfBknM6qRVUH70EMh8.DTeThyAUUlWv_9noR1iau_9ZIzTtol9EwIh1Eied4ug&dib_tag=se&keywords=headphones&qid=1751887888&sprefix=headphones%2Caps%2C335&sr=8-97&ufe=app_do%3Aamzn1.fos.5998aa40-ec6f-4947-a68f-cd087fee0848&xpid=FAKMVZkuWs17S https://www.amazon.com/Bose-QuietComfort-Bluetooth-Headphones-Cancelling/dp/B0CCZ1L489/ref=cs_sr_dp_2?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.slIzQVbvSI3SChQpPn4qcvjj5WncJbA2p-6ZqUkeO_JHO6R941jOri5lLPkbGBKXNywKsR9sObShGQ_xtAiMqbVRcUTExCS9JISbLenyI5c3S3DMcKkiDitGdR8arnyhjQOYuyGUxZIQidXZeqm6oe3YWtfBknM6qRVUH70EMh8.DTeThyAUUlWv_9noR1iau_9ZIzTtol9EwIh1Eied4ug&dib_tag=se&keywords=headphones&qid=1751887888&sprefix=headphones%2Caps%2C335&sr=8-97&ufe=app_do%3Aamzn1.fos.5998aa40-ec6f-4947-a68f-cd087fee0848&xpid=FAKMVZkuWs17S https://www.amazon.com/Bose-QuietComfort-Bluetooth-Headphones-Cancelling/dp/B0DX2LNZ68/ref=cs_sr_dp_3?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.slIzQVbvSI3SChQpPn4qcvjj5WncJbA2p-6ZqUkeO_JHO6R941jOri5lLPkbGBKXNywKsR9sObShGQ_xtAiMqbVRcUTExCS9JISbLenyI5c3S3DMcKkiDitGdR8arnyhjQOYuyGUxZIQidXZeqm6oe3YWtfBknM6qRVUH70EMh8.DTeThyAUUlWv_9noR1iau_9ZIzTtol9EwIh1Eied4ug&dib_tag=se&keywords=headphones&qid=1751887888&sprefix=headphones%2Caps%2C335&sr=8-97&ufe=app_do%3Aamzn1.fos.5998aa40-ec6f-4947-a68f-cd087fee0848&xpid=FAKMVZkuWs17S https://www.amazon.com/Bose-QuietComfort-Bluetooth-Headphones-Cancelling/dp/B0D4ZCH5HS/ref=cs_sr_dp_4?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.slIzQVbvSI3SChQpPn4qcvjj5WncJbA2p-6ZqUkeO_JHO6R941jOri5lLPkbGBKXNywKsR9sObShGQ_xtAiMqbVRcUTExCS9JISbLenyI5c3S3DMcKkiDitGdR8arnyhjQOYuyGUxZIQidXZeqm6oe3YWtfBknM6qRVUH70EMh8.DTeThyAUUlWv_9noR1iau_9ZIzTtol9EwIh1Eied4ug&dib_tag=se&keywords=headphones&qid=1751887888&sprefix=headphones%2Caps%2C335&sr=8-97&ufe=app_do%3Aamzn1.fos.5998aa40-ec6f-4947-a68f-cd087fee0848&xpid=FAKMVZkuWs17S https://www.amazon.com/Bose-QuietComfort-Bluetooth-Headphones-Cancelling/dp/B0CN9FTKJ4/ref=cs_sr_dp_5?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.slIzQVbvSI3SChQpPn4qcvjj5WncJbA2p-6ZqUkeO_JHO6R941jOri5lLPkbGBKXNywKsR9sObShGQ_xtAiMqbVRcUTExCS9JISbLenyI5c3S3DMcKkiDitGdR8arnyhjQOYuyGUxZIQidXZeqm6oe3YWtfBknM6qRVUH70EMh8.DTeThyAUUlWv_9noR1iau_9ZIzTtol9EwIh1Eied4ug&dib_tag=se&keywords=headphones&qid=1751887888&sprefix=headphones%2Caps%2C335&sr=8-97&ufe=app_do%3Aamzn1.fos.5998aa40-ec6f-4947-a68f-cd087fee0848&xpid=FAKMVZkuWs17S https://www.amazon.com/Bose-QuietComfort-Bluetooth-Headphones-Cancelling/dp/B0CCZ1HQ39/ref=cs_sr_dp_6?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.slIzQVbvSI3SChQpPn4qcvjj5WncJbA2p-6ZqUkeO_JHO6R941jOri5lLPkbGBKXNywKsR9sObShGQ_xtAiMqbVRcUTExCS9JISbLenyI5c3S3DMcKkiDitGdR8arnyhjQOYuyGUxZIQidXZeqm6oe3YWtfBknM6qRVUH70EMh8.DTeThyAUUlWv_9noR1iau_9ZIzTtol9EwIh1Eied4ug&dib_tag=se&keywords=headphones&qid=1751887888&sprefix=headphones%2Caps%2C335&sr=8-97&ufe=app_do%3Aamzn1.fos.5998aa40-ec6f-4947-a68f-cd087fee0848&xpid=FAKMVZkuWs17S`
    },
    {
      title: `kurdene Wireless Earbuds Bluetooth Headphones Sport,Over Ear Buds with Deep Bass Sound,60Hrs Playtime Earphones Redesigned Comfort Fit with Earhooks for Running,Meeting,Workout-Black`,
      image: `https://m.media-amazon.com/images/I/715BmHltS+L._AC_UY218_.jpg`,
      price: `$9.99`,
      rating: `4.3`,
      count: `(2.6K) $9.99$9.99`,
      link: `https://www.amazon.com/kurdene-Bluetooth-Headphones-Redesigned-Workout-Black/dp/B0DRBPMYJQ/ref=cs_sr_dp_1?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.slIzQVbvSI3SChQpPn4qcvjj5WncJbA2p-6ZqUkeO_JHO6R941jOri5lLPkbGBKXNywKsR9sObShGQ_xtAiMqbVRcUTExCS9JISbLenyI5c3S3DMcKkiDitGdR8arnyhjQOYuyGUxZIQidXZeqm6oe3YWtfBknM6qRVUH70EMh8.DTeThyAUUlWv_9noR1iau_9ZIzTtol9EwIh1Eied4ug&dib_tag=se&keywords=headphones&qid=1751887888&sprefix=headphones%2Caps%2C335&sr=8-100&xpid=FAKMVZkuWs17S https://www.amazon.com/kurdene-Bluetooth-Headphones-Redesigned-Workout-Black/dp/B0DRNB3F2M/ref=cs_sr_dp_2?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.slIzQVbvSI3SChQpPn4qcvjj5WncJbA2p-6ZqUkeO_JHO6R941jOri5lLPkbGBKXNywKsR9sObShGQ_xtAiMqbVRcUTExCS9JISbLenyI5c3S3DMcKkiDitGdR8arnyhjQOYuyGUxZIQidXZeqm6oe3YWtfBknM6qRVUH70EMh8.DTeThyAUUlWv_9noR1iau_9ZIzTtol9EwIh1Eied4ug&dib_tag=se&keywords=headphones&qid=1751887888&sprefix=headphones%2Caps%2C335&sr=8-100&xpid=FAKMVZkuWs17S https://www.amazon.com/kurdene-Bluetooth-Headphones-Redesigned-Workout-Black/dp/B0DRBQ69MS/ref=cs_sr_dp_3?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.slIzQVbvSI3SChQpPn4qcvjj5WncJbA2p-6ZqUkeO_JHO6R941jOri5lLPkbGBKXNywKsR9sObShGQ_xtAiMqbVRcUTExCS9JISbLenyI5c3S3DMcKkiDitGdR8arnyhjQOYuyGUxZIQidXZeqm6oe3YWtfBknM6qRVUH70EMh8.DTeThyAUUlWv_9noR1iau_9ZIzTtol9EwIh1Eied4ug&dib_tag=se&keywords=headphones&qid=1751887888&sprefix=headphones%2Caps%2C335&sr=8-100&xpid=FAKMVZkuWs17S https://www.amazon.com/kurdene-Bluetooth-Headphones-Redesigned-Workout-Black/dp/B0F93BTM85/ref=cs_sr_dp_4?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.slIzQVbvSI3SChQpPn4qcvjj5WncJbA2p-6ZqUkeO_JHO6R941jOri5lLPkbGBKXNywKsR9sObShGQ_xtAiMqbVRcUTExCS9JISbLenyI5c3S3DMcKkiDitGdR8arnyhjQOYuyGUxZIQidXZeqm6oe3YWtfBknM6qRVUH70EMh8.DTeThyAUUlWv_9noR1iau_9ZIzTtol9EwIh1Eied4ug&dib_tag=se&keywords=headphones&qid=1751887888&sprefix=headphones%2Caps%2C335&sr=8-100&xpid=FAKMVZkuWs17S https://www.amazon.com/kurdene-Bluetooth-Headphones-Redesigned-Workout-Black/dp/B0DRBSPHTB/ref=cs_sr_dp_5?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.slIzQVbvSI3SChQpPn4qcvjj5WncJbA2p-6ZqUkeO_JHO6R941jOri5lLPkbGBKXNywKsR9sObShGQ_xtAiMqbVRcUTExCS9JISbLenyI5c3S3DMcKkiDitGdR8arnyhjQOYuyGUxZIQidXZeqm6oe3YWtfBknM6qRVUH70EMh8.DTeThyAUUlWv_9noR1iau_9ZIzTtol9EwIh1Eied4ug&dib_tag=se&keywords=headphones&qid=1751887888&sprefix=headphones%2Caps%2C335&sr=8-100&xpid=FAKMVZkuWs17S https://www.amazon.com/kurdene-Bluetooth-Headphones-Redesigned-Workout-Black/dp/B08HYST66T/ref=cs_sr_dp_6?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.slIzQVbvSI3SChQpPn4qcvjj5WncJbA2p-6ZqUkeO_JHO6R941jOri5lLPkbGBKXNywKsR9sObShGQ_xtAiMqbVRcUTExCS9JISbLenyI5c3S3DMcKkiDitGdR8arnyhjQOYuyGUxZIQidXZeqm6oe3YWtfBknM6qRVUH70EMh8.DTeThyAUUlWv_9noR1iau_9ZIzTtol9EwIh1Eied4ug&dib_tag=se&keywords=headphones&qid=1751887888&sprefix=headphones%2Caps%2C335&sr=8-100&xpid=FAKMVZkuWs17S`
    },
    {
      title: `LORELEI B-C6 Wireless Over Ear Headphones, 50H Playtime Foldable Lightweight Bluetooth Headsets, Deep Bass, Built-in Microphone, Memory Foam Earmuff, for Travel, Home Office (Beige White)`,
      image: `https://m.media-amazon.com/images/I/6187B9BzlrL._AC_UY218_.jpg`,
      price: `$21.99 $26.99`,
      rating: `4.3`,
      count: `(1.1K) $21.99$21.99 Typical: $26.99`,
      link: `https://www.amazon.com/LORELEI-B-C6-Headphones-Lightweight-Microphone/dp/B0BRN1KPVB/ref=cs_sr_dp_1?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.slIzQVbvSI3SChQpPn4qcvjj5WncJbA2p-6ZqUkeO_JHO6R941jOri5lLPkbGBKXNywKsR9sObShGQ_xtAiMqbVRcUTExCS9JISbLenyI5c3S3DMcKkiDitGdR8arnyhjQOYuyGUxZIQidXZeqm6oe3YWtfBknM6qRVUH70EMh8.DTeThyAUUlWv_9noR1iau_9ZIzTtol9EwIh1Eied4ug&dib_tag=se&keywords=headphones&qid=1751887888&sprefix=headphones%2Caps%2C335&sr=8-101&xpid=FAKMVZkuWs17S https://www.amazon.com/LORELEI-B-C6-Headphones-Lightweight-Microphone/dp/B0BRN2Q7LM/ref=cs_sr_dp_2?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.slIzQVbvSI3SChQpPn4qcvjj5WncJbA2p-6ZqUkeO_JHO6R941jOri5lLPkbGBKXNywKsR9sObShGQ_xtAiMqbVRcUTExCS9JISbLenyI5c3S3DMcKkiDitGdR8arnyhjQOYuyGUxZIQidXZeqm6oe3YWtfBknM6qRVUH70EMh8.DTeThyAUUlWv_9noR1iau_9ZIzTtol9EwIh1Eied4ug&dib_tag=se&keywords=headphones&qid=1751887888&sprefix=headphones%2Caps%2C335&sr=8-101&xpid=FAKMVZkuWs17S https://www.amazon.com/LORELEI-B-C6-Headphones-Lightweight-Microphone/dp/B0BRN35PSD/ref=cs_sr_dp_3?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.slIzQVbvSI3SChQpPn4qcvjj5WncJbA2p-6ZqUkeO_JHO6R941jOri5lLPkbGBKXNywKsR9sObShGQ_xtAiMqbVRcUTExCS9JISbLenyI5c3S3DMcKkiDitGdR8arnyhjQOYuyGUxZIQidXZeqm6oe3YWtfBknM6qRVUH70EMh8.DTeThyAUUlWv_9noR1iau_9ZIzTtol9EwIh1Eied4ug&dib_tag=se&keywords=headphones&qid=1751887888&sprefix=headphones%2Caps%2C335&sr=8-101&xpid=FAKMVZkuWs17S https://www.amazon.com/LORELEI-B-C6-Headphones-Lightweight-Microphone/dp/B0CGV9X3VH/ref=cs_sr_dp_4?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.slIzQVbvSI3SChQpPn4qcvjj5WncJbA2p-6ZqUkeO_JHO6R941jOri5lLPkbGBKXNywKsR9sObShGQ_xtAiMqbVRcUTExCS9JISbLenyI5c3S3DMcKkiDitGdR8arnyhjQOYuyGUxZIQidXZeqm6oe3YWtfBknM6qRVUH70EMh8.DTeThyAUUlWv_9noR1iau_9ZIzTtol9EwIh1Eied4ug&dib_tag=se&keywords=headphones&qid=1751887888&sprefix=headphones%2Caps%2C335&sr=8-101&xpid=FAKMVZkuWs17S`
    },
    {
      title: `iClever BTH12 Kids Bluetooth Headphones,Colorful LED Lights Kids Headphones Wireless,74/85dBA Safe Volume,85H Playtime,Fast Charging,Bluetooth 5.2,Over Ear,Built-in Mic for iPad/Tablet/Airplane,Blue`,
      image: `https://m.media-amazon.com/images/I/61uVhmVHqFL._AC_UY218_.jpg https://m.media-amazon.com/images/I/11++B3A2NEL._SS200_.png`,
      price: `$21.99 $36.99`,
      rating: `4.6`,
      count: `(10.7K) $21.99$21.99 List: $36.99 <img alt="Climate Pledge Friendly" src="https://m.media-amazon.com/images/I/21AGu0JFvKL.svg" height="24px" width="186px"/> Discover more products with sustainability features. Learn more`,
      link: `https://www.amazon.com/iClever-Headphones-Colorful-Wireless-Bluetooth/dp/B0895PBJCQ/ref=cs_sr_dp_1?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.slIzQVbvSI3SChQpPn4qcvjj5WncJbA2p-6ZqUkeO_JHO6R941jOri5lLPkbGBKXNywKsR9sObShGQ_xtAiMqbVRcUTExCS9JISbLenyI5c3S3DMcKkiDitGdR8arnyhjQOYuyGUxZIQidXZeqm6oe3YWtfBknM6qRVUH70EMh8.DTeThyAUUlWv_9noR1iau_9ZIzTtol9EwIh1Eied4ug&dib_tag=se&keywords=headphones&qid=1751887888&sprefix=headphones%2Caps%2C335&sr=8-102&xpid=FAKMVZkuWs17S https://www.amazon.com/iClever-Headphones-Colorful-Wireless-Bluetooth/dp/B0DBHH6Y2R/ref=cs_sr_dp_2?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.slIzQVbvSI3SChQpPn4qcvjj5WncJbA2p-6ZqUkeO_JHO6R941jOri5lLPkbGBKXNywKsR9sObShGQ_xtAiMqbVRcUTExCS9JISbLenyI5c3S3DMcKkiDitGdR8arnyhjQOYuyGUxZIQidXZeqm6oe3YWtfBknM6qRVUH70EMh8.DTeThyAUUlWv_9noR1iau_9ZIzTtol9EwIh1Eied4ug&dib_tag=se&keywords=headphones&qid=1751887888&sprefix=headphones%2Caps%2C335&sr=8-102&xpid=FAKMVZkuWs17S https://www.amazon.com/iClever-Headphones-Colorful-Wireless-Bluetooth/dp/B0895PVYV8/ref=cs_sr_dp_3?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.slIzQVbvSI3SChQpPn4qcvjj5WncJbA2p-6ZqUkeO_JHO6R941jOri5lLPkbGBKXNywKsR9sObShGQ_xtAiMqbVRcUTExCS9JISbLenyI5c3S3DMcKkiDitGdR8arnyhjQOYuyGUxZIQidXZeqm6oe3YWtfBknM6qRVUH70EMh8.DTeThyAUUlWv_9noR1iau_9ZIzTtol9EwIh1Eied4ug&dib_tag=se&keywords=headphones&qid=1751887888&sprefix=headphones%2Caps%2C335&sr=8-102&xpid=FAKMVZkuWs17S https://www.amazon.com/iClever-Headphones-Colorful-Wireless-Bluetooth/dp/B08HDG99TP/ref=cs_sr_dp_4?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.slIzQVbvSI3SChQpPn4qcvjj5WncJbA2p-6ZqUkeO_JHO6R941jOri5lLPkbGBKXNywKsR9sObShGQ_xtAiMqbVRcUTExCS9JISbLenyI5c3S3DMcKkiDitGdR8arnyhjQOYuyGUxZIQidXZeqm6oe3YWtfBknM6qRVUH70EMh8.DTeThyAUUlWv_9noR1iau_9ZIzTtol9EwIh1Eied4ug&dib_tag=se&keywords=headphones&qid=1751887888&sprefix=headphones%2Caps%2C335&sr=8-102&xpid=FAKMVZkuWs17S https://www.amazon.com/iClever-Headphones-Colorful-Wireless-Bluetooth/dp/B0D2LCCB4P/ref=cs_sr_dp_5?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.slIzQVbvSI3SChQpPn4qcvjj5WncJbA2p-6ZqUkeO_JHO6R941jOri5lLPkbGBKXNywKsR9sObShGQ_xtAiMqbVRcUTExCS9JISbLenyI5c3S3DMcKkiDitGdR8arnyhjQOYuyGUxZIQidXZeqm6oe3YWtfBknM6qRVUH70EMh8.DTeThyAUUlWv_9noR1iau_9ZIzTtol9EwIh1Eied4ug&dib_tag=se&keywords=headphones&qid=1751887888&sprefix=headphones%2Caps%2C335&sr=8-102&xpid=FAKMVZkuWs17S https://www.amazon.com/iClever-Headphones-Colorful-Wireless-Bluetooth/dp/B0CB8DNLNF/ref=cs_sr_dp_6?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.slIzQVbvSI3SChQpPn4qcvjj5WncJbA2p-6ZqUkeO_JHO6R941jOri5lLPkbGBKXNywKsR9sObShGQ_xtAiMqbVRcUTExCS9JISbLenyI5c3S3DMcKkiDitGdR8arnyhjQOYuyGUxZIQidXZeqm6oe3YWtfBknM6qRVUH70EMh8.DTeThyAUUlWv_9noR1iau_9ZIzTtol9EwIh1Eied4ug&dib_tag=se&keywords=headphones&qid=1751887888&sprefix=headphones%2Caps%2C335&sr=8-102&xpid=FAKMVZkuWs17S`
    },
    {
      title: `AILIHEN C8 Headphones Wired, On-Ear Kids Headphones with Microphone and Volume Control Foldable Corded Stereo 3.5mm Headset for School Teens Smartphones Chromebook Laptop Tablets Travel (Black Blue)`,
      image: `https://m.media-amazon.com/images/I/814EY-F9uOL._AC_UY218_.jpg https://m.media-amazon.com/images/I/11++B3A2NEL._SS200_.png`,
      price: `$13.99 $21.99`,
      rating: `4.4`,
      count: `(32.9K) $13.99$13.99 List: $21.99 <img alt="Climate Pledge Friendly" src="https://m.media-amazon.com/images/I/21AGu0JFvKL.svg" height="24px" width="186px"/> Discover more products with sustainability features. Learn more`,
      link: `https://www.amazon.com/AILIHEN-C8-Headphones-Lightweight-Smartphones/dp/B01EF5DBZ6/ref=cs_sr_dp_1?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.slIzQVbvSI3SChQpPn4qcvjj5WncJbA2p-6ZqUkeO_JHO6R941jOri5lLPkbGBKXNywKsR9sObShGQ_xtAiMqbVRcUTExCS9JISbLenyI5c3S3DMcKkiDitGdR8arnyhjQOYuyGUxZIQidXZeqm6oe3YWtfBknM6qRVUH70EMh8.DTeThyAUUlWv_9noR1iau_9ZIzTtol9EwIh1Eied4ug&dib_tag=se&keywords=headphones&qid=1751887888&sprefix=headphones%2Caps%2C335&sr=8-105&xpid=FAKMVZkuWs17S https://www.amazon.com/AILIHEN-C8-Headphones-Lightweight-Smartphones/dp/B01EF5DBTC/ref=cs_sr_dp_2?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.slIzQVbvSI3SChQpPn4qcvjj5WncJbA2p-6ZqUkeO_JHO6R941jOri5lLPkbGBKXNywKsR9sObShGQ_xtAiMqbVRcUTExCS9JISbLenyI5c3S3DMcKkiDitGdR8arnyhjQOYuyGUxZIQidXZeqm6oe3YWtfBknM6qRVUH70EMh8.DTeThyAUUlWv_9noR1iau_9ZIzTtol9EwIh1Eied4ug&dib_tag=se&keywords=headphones&qid=1751887888&sprefix=headphones%2Caps%2C335&sr=8-105&xpid=FAKMVZkuWs17S https://www.amazon.com/AILIHEN-C8-Headphones-Lightweight-Smartphones/dp/B07L8THZRT/ref=cs_sr_dp_3?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.slIzQVbvSI3SChQpPn4qcvjj5WncJbA2p-6ZqUkeO_JHO6R941jOri5lLPkbGBKXNywKsR9sObShGQ_xtAiMqbVRcUTExCS9JISbLenyI5c3S3DMcKkiDitGdR8arnyhjQOYuyGUxZIQidXZeqm6oe3YWtfBknM6qRVUH70EMh8.DTeThyAUUlWv_9noR1iau_9ZIzTtol9EwIh1Eied4ug&dib_tag=se&keywords=headphones&qid=1751887888&sprefix=headphones%2Caps%2C335&sr=8-105&xpid=FAKMVZkuWs17S https://www.amazon.com/AILIHEN-C8-Headphones-Lightweight-Smartphones/dp/B01EF5DBV0/ref=cs_sr_dp_4?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.slIzQVbvSI3SChQpPn4qcvjj5WncJbA2p-6ZqUkeO_JHO6R941jOri5lLPkbGBKXNywKsR9sObShGQ_xtAiMqbVRcUTExCS9JISbLenyI5c3S3DMcKkiDitGdR8arnyhjQOYuyGUxZIQidXZeqm6oe3YWtfBknM6qRVUH70EMh8.DTeThyAUUlWv_9noR1iau_9ZIzTtol9EwIh1Eied4ug&dib_tag=se&keywords=headphones&qid=1751887888&sprefix=headphones%2Caps%2C335&sr=8-105&xpid=FAKMVZkuWs17S https://www.amazon.com/AILIHEN-C8-Headphones-Lightweight-Smartphones/dp/B07L8SR1D7/ref=cs_sr_dp_5?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.slIzQVbvSI3SChQpPn4qcvjj5WncJbA2p-6ZqUkeO_JHO6R941jOri5lLPkbGBKXNywKsR9sObShGQ_xtAiMqbVRcUTExCS9JISbLenyI5c3S3DMcKkiDitGdR8arnyhjQOYuyGUxZIQidXZeqm6oe3YWtfBknM6qRVUH70EMh8.DTeThyAUUlWv_9noR1iau_9ZIzTtol9EwIh1Eied4ug&dib_tag=se&keywords=headphones&qid=1751887888&sprefix=headphones%2Caps%2C335&sr=8-105&xpid=FAKMVZkuWs17S https://www.amazon.com/AILIHEN-C8-Headphones-Lightweight-Smartphones/dp/B08GKNSTV1/ref=cs_sr_dp_6?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.slIzQVbvSI3SChQpPn4qcvjj5WncJbA2p-6ZqUkeO_JHO6R941jOri5lLPkbGBKXNywKsR9sObShGQ_xtAiMqbVRcUTExCS9JISbLenyI5c3S3DMcKkiDitGdR8arnyhjQOYuyGUxZIQidXZeqm6oe3YWtfBknM6qRVUH70EMh8.DTeThyAUUlWv_9noR1iau_9ZIzTtol9EwIh1Eied4ug&dib_tag=se&keywords=headphones&qid=1751887888&sprefix=headphones%2Caps%2C335&sr=8-105&xpid=FAKMVZkuWs17S`
    }
  ];

  const pages = Array.from({ length: 10 }, (_, i) => i + 1);

          const handleAddToWishlist = (headphone: any) => {
    const result = addToWishlist({
      name: headphone.title === "nan" ? "Premium Headphones" : headphone.title.split(' ').slice(0, 8).join(' '),
      price: headphone.price.split(' ')[0], // Take first price only
      image: headphone.image.split(' ')[0], // Take first image only
      category: "Headphones",
      link: headphone.link.split(' ')[0] // Take first link only
    });

    if (result.success) {
      toast(result.message, {
        icon: '🎉',
        style: {
          background: 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)',
          color: 'white',
          borderRadius: '16px',
          padding: '12px 20px',
          fontSize: '14px',
          fontWeight: '600',
          boxShadow: '0 10px 25px rgba(236, 72, 153, 0.3)'
        },
        duration: 3000,
        position: 'bottom-center'
      });
    } else {
      toast(result.message, {
        icon: result.message.includes('limit') ? '⚠️' : '💔',
        style: {
          background: result.message.includes('limit') 
            ? 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)'
            : 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
          color: 'white',
          borderRadius: '16px',
          padding: '12px 20px',
          fontSize: '14px',
          fontWeight: '600'
        },
        duration: 3000,
        position: 'bottom-center'
      });
    }
  };

  const handleBuyClick = (link: string, productName: string) => {
    // Extract only the first valid Amazon link from the concatenated string
    const firstLink = link.split(' ')[0];
    
    toast(`🛒 Redirecting to Amazon for ${productName}...`, {
      icon: '🚀',
      style: {
        background: 'linear-gradient(135deg, #4f46e5 0%, #06b6d4 100%)',
        color: 'white',
        borderRadius: '16px',
        padding: '12px 20px',
        fontSize: '14px',
        fontWeight: '600',
        boxShadow: '0 10px 25px rgba(79, 70, 229, 0.3)'
      },
      duration: 2000,
      position: 'bottom-center'
    });
    
    // Use a more browser-friendly redirect method
    setTimeout(() => {
      try {
        // Try to open in new tab first
        const newWindow = window.open(firstLink, '_blank');
        
        // If popup is blocked, redirect in same tab
        if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
          // Fallback: redirect in same tab
          window.location.href = firstLink;
        }
      } catch (error) {
        // Final fallback: redirect in same tab
        window.location.href = firstLink;
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full opacity-10 blur-3xl floating-3d"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-cyan-500 rounded-full opacity-15 blur-3xl floating-3d" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-indigo-500 rounded-full opacity-8 blur-3xl floating-3d" style={{animationDelay: '4s'}}></div>
      </div>

      <main className="relative z-10 px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
            🎧 Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Headphones</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover the best deals on premium headphones with exceptional sound quality
          </p>
          <div className="mt-6 inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
            <span className="text-cyan-400 font-semibold mr-2">Page 10</span>
            <span className="text-gray-400">•</span>
            <span className="text-white ml-2">{headphones.length} Products</span>
          </div>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {headphones.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10 shadow-2xl group overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                
                <button
                  onClick={() => handleAddToWishlist(item.title.substring(0, 30) + "...")}
                  className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-pink-500 rounded-full backdrop-blur-sm border border-white/20 text-gray-400 hover:text-white transition-all duration-300 z-10"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>

                <div className="relative mb-6 h-48 bg-white/5 rounded-2xl overflow-hidden">
                  <img 
                    src={item.image.split(' ')[0]} 
                    alt={item.title} 
                    className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-300" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                </div>

                <h2 className="text-lg font-bold text-white mb-3 line-clamp-2 group-hover:text-cyan-400 transition-colors">
                  {item.title.length > 60 ? item.title.substring(0, 60) + "..." : item.title}
                </h2>

                <div className="flex items-center mb-3">
                  <span className="text-yellow-400 text-lg mr-2">⭐</span>
                  <span className="text-white font-semibold">{item.rating}</span>
                  <span className="text-gray-400 text-sm ml-2">({item.count.replace(/[^\d.K]/g, '')})</span>
                </div>

                <div className="mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-black text-green-400">
                      ${item.price.split(' ')[0].replace('$', '')}
                    </span>
                    {item.price.includes(' ') && item.price.split(' ').length > 1 && (
                      <span className="text-gray-400 line-through text-lg">
                        {item.price.split(' ')[1]}
                      </span>
                    )}
                  </div>
                  {item.price.includes(' ') && item.price.split(' ').length > 1 && (
                    <span className="text-green-400 text-sm font-semibold">
                      You save: ${(parseFloat(item.price.split(' ')[1].replace('$', '')) - parseFloat(item.price.split(' ')[0].replace('$', ''))).toFixed(2)}
                    </span>
                  )}
                </div>

                <button
                  onClick={() => handleBuyClick(item.link, item.title.substring(0, 30) + "...")}
                  className="w-full bg-gradient-to-r from-orange-400 to-yellow-300 text-black font-bold py-3 px-6 rounded-2xl text-sm shadow-2xl hover:scale-105 hover:from-orange-500 hover:to-yellow-400 transition-all duration-300 relative overflow-hidden"
                >
                  <span className="flex items-center justify-center gap-2">
                    <span>🛒</span>
                    <span>Buy on Amazon</span>
                  </span>
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 flex justify-center gap-3 flex-wrap"
        >
          {pages.map((p) => (
            <Link href={`/headphones/page/${p}`} key={p}>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`w-12 h-12 rounded-full font-bold transition-all duration-300 ${
                  p === 10 
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg' 
                    : 'bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20'
                }`}
              >
                {p}
              </motion.button>
            </Link>
          ))}
        </motion.div>
      </main>
    </div>
  );
}
