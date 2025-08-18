import Link from "next/link";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { addToWishlist } from "../../../lib/wishlistUtils";

export default function HeadphonesPage9() {
  const headphones = [
    {
      title: `RORSOU R10 Over-Ear Headphones with Microphone, Lightweight Folding Stereo Bass Headset with 1.5M No-Tangle Cord, Portable Wired Headphones for Smartphone Tablet Computer MP3 / 4 (Black)`,
      image: `https://m.media-amazon.com/images/I/61z-rTknwVS._AC_UY218_.jpg`,
      price: `$14.99`,
      rating: `4.5`,
      count: `(11K) $14.99$14.99`,
      link: `https://www.amazon.com/RORSOU-R10-Headphones-Microphone-Lightweight/dp/B094NC89P9/ref=cs_sr_dp_1?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.pKu-GSAkzRuQDq-bNVaGTeGyLvJwNeTjnoxLBSyXMWE5Xca5H5GAINb_ptX29aPTcd8x_Q1LJHnSL3BwUg4hgw.K5mp-pGI0krsc9YNhUKJDher6M-dl5H3nNahBd-5rs8&dib_tag=se&keywords=headphones&qid=1751887867&sprefix=headphones%2Caps%2C335&sr=8-83&xpid=FAKMVZkuWs17S https://www.amazon.com/RORSOU-R10-Headphones-Microphone-Lightweight/dp/B094NBBCLR/ref=cs_sr_dp_2?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.pKu-GSAkzRuQDq-bNVaGTeGyLvJwNeTjnoxLBSyXMWE5Xca5H5GAINb_ptX29aPTcd8x_Q1LJHnSL3BwUg4hgw.K5mp-pGI0krsc9YNhUKJDher6M-dl5H3nNahBd-5rs8&dib_tag=se&keywords=headphones&qid=1751887867&sprefix=headphones%2Caps%2C335&sr=8-83&xpid=FAKMVZkuWs17S https://www.amazon.com/RORSOU-R10-Headphones-Microphone-Lightweight/dp/B0CS5ZK9L9/ref=cs_sr_dp_3?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.pKu-GSAkzRuQDq-bNVaGTeGyLvJwNeTjnoxLBSyXMWE5Xca5H5GAINb_ptX29aPTcd8x_Q1LJHnSL3BwUg4hgw.K5mp-pGI0krsc9YNhUKJDher6M-dl5H3nNahBd-5rs8&dib_tag=se&keywords=headphones&qid=1751887867&sprefix=headphones%2Caps%2C335&sr=8-83&xpid=FAKMVZkuWs17S https://www.amazon.com/RORSOU-R10-Headphones-Microphone-Lightweight/dp/B09G36XPG9/ref=cs_sr_dp_4?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.pKu-GSAkzRuQDq-bNVaGTeGyLvJwNeTjnoxLBSyXMWE5Xca5H5GAINb_ptX29aPTcd8x_Q1LJHnSL3BwUg4hgw.K5mp-pGI0krsc9YNhUKJDher6M-dl5H3nNahBd-5rs8&dib_tag=se&keywords=headphones&qid=1751887867&sprefix=headphones%2Caps%2C335&sr=8-83&xpid=FAKMVZkuWs17S https://www.amazon.com/RORSOU-R10-Headphones-Microphone-Lightweight/dp/B094NBZ8P3/ref=cs_sr_dp_5?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.pKu-GSAkzRuQDq-bNVaGTeGyLvJwNeTjnoxLBSyXMWE5Xca5H5GAINb_ptX29aPTcd8x_Q1LJHnSL3BwUg4hgw.K5mp-pGI0krsc9YNhUKJDher6M-dl5H3nNahBd-5rs8&dib_tag=se&keywords=headphones&qid=1751887867&sprefix=headphones%2Caps%2C335&sr=8-83&xpid=FAKMVZkuWs17S https://www.amazon.com/RORSOU-R10-Headphones-Microphone-Lightweight/dp/B094N7YJM5/ref=cs_sr_dp_6?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.pKu-GSAkzRuQDq-bNVaGTeGyLvJwNeTjnoxLBSyXMWE5Xca5H5GAINb_ptX29aPTcd8x_Q1LJHnSL3BwUg4hgw.K5mp-pGI0krsc9YNhUKJDher6M-dl5H3nNahBd-5rs8&dib_tag=se&keywords=headphones&qid=1751887867&sprefix=headphones%2Caps%2C335&sr=8-83&xpid=FAKMVZkuWs17S`
    },
    {
      title: `Kids Headphones, Wired Headphones for Kids Over Ear with Microphone, 85/94dB Volume Limiter Headphone for Girls Boys, Foldable Headphone for Learning & Entertainment,Gradient Purple`,
      image: `https://m.media-amazon.com/images/I/61gbKbbWLNL._AC_UY218_.jpg`,
      price: `$14.34 $18.99`,
      rating: `4.6`,
      count: `(2.9K) $14.34$14.34 List: $18.99`,
      link: `https://www.amazon.com/Headphones-Microphone-Limiter-Foldable-Gradient/dp/B0C9MYNRWC/ref=cs_sr_dp_1?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.-humR6AtW7ZXd_ShBC20OYnK3H8dgudeghCOYAWkaxMa1rjjszIwQHyTALvY4koWR6WIjt-O8WFLCRkjqY6-BfrZsqdQGg12EAJhTFIvS9eOH-3t-C-y-vcmfvyfTTEtZ8BIE05WcBdUZ_mdiOHo0k8fZMsxqHiOhDSzZg9z2Qo.RmVGtFnv70ul2dAUdVwf0n9OiABy0mhq2Cz2t7ZiLZw&dib_tag=se&keywords=headphones&qid=1751887867&sprefix=headphones%2Caps%2C335&sr=8-81&xpid=FAKMVZkuWs17S https://www.amazon.com/Headphones-Microphone-Limiter-Foldable-Gradient/dp/B0B5ML4KRB/ref=cs_sr_dp_2?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.-humR6AtW7ZXd_ShBC20OYnK3H8dgudeghCOYAWkaxMa1rjjszIwQHyTALvY4koWR6WIjt-O8WFLCRkjqY6-BfrZsqdQGg12EAJhTFIvS9eOH-3t-C-y-vcmfvyfTTEtZ8BIE05WcBdUZ_mdiOHo0k8fZMsxqHiOhDSzZg9z2Qo.RmVGtFnv70ul2dAUdVwf0n9OiABy0mhq2Cz2t7ZiLZw&dib_tag=se&keywords=headphones&qid=1751887867&sprefix=headphones%2Caps%2C335&sr=8-81&xpid=FAKMVZkuWs17S https://www.amazon.com/Headphones-Microphone-Limiter-Foldable-Gradient/dp/B0D3Z692DG/ref=cs_sr_dp_3?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.-humR6AtW7ZXd_ShBC20OYnK3H8dgudeghCOYAWkaxMa1rjjszIwQHyTALvY4koWR6WIjt-O8WFLCRkjqY6-BfrZsqdQGg12EAJhTFIvS9eOH-3t-C-y-vcmfvyfTTEtZ8BIE05WcBdUZ_mdiOHo0k8fZMsxqHiOhDSzZg9z2Qo.RmVGtFnv70ul2dAUdVwf0n9OiABy0mhq2Cz2t7ZiLZw&dib_tag=se&keywords=headphones&qid=1751887867&sprefix=headphones%2Caps%2C335&sr=8-81&xpid=FAKMVZkuWs17S https://www.amazon.com/Headphones-Microphone-Limiter-Foldable-Gradient/dp/B0CHRG3ML1/ref=cs_sr_dp_4?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.-humR6AtW7ZXd_ShBC20OYnK3H8dgudeghCOYAWkaxMa1rjjszIwQHyTALvY4koWR6WIjt-O8WFLCRkjqY6-BfrZsqdQGg12EAJhTFIvS9eOH-3t-C-y-vcmfvyfTTEtZ8BIE05WcBdUZ_mdiOHo0k8fZMsxqHiOhDSzZg9z2Qo.RmVGtFnv70ul2dAUdVwf0n9OiABy0mhq2Cz2t7ZiLZw&dib_tag=se&keywords=headphones&qid=1751887867&sprefix=headphones%2Caps%2C335&sr=8-81&xpid=FAKMVZkuWs17S https://www.amazon.com/Headphones-Microphone-Limiter-Foldable-Gradient/dp/B0CX4QX7RY/ref=cs_sr_dp_5?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.-humR6AtW7ZXd_ShBC20OYnK3H8dgudeghCOYAWkaxMa1rjjszIwQHyTALvY4koWR6WIjt-O8WFLCRkjqY6-BfrZsqdQGg12EAJhTFIvS9eOH-3t-C-y-vcmfvyfTTEtZ8BIE05WcBdUZ_mdiOHo0k8fZMsxqHiOhDSzZg9z2Qo.RmVGtFnv70ul2dAUdVwf0n9OiABy0mhq2Cz2t7ZiLZw&dib_tag=se&keywords=headphones&qid=1751887867&sprefix=headphones%2Caps%2C335&sr=8-81&xpid=FAKMVZkuWs17S https://www.amazon.com/Headphones-Microphone-Limiter-Foldable-Gradient/dp/B0D3VJDZ49/ref=cs_sr_dp_6?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.-humR6AtW7ZXd_ShBC20OYnK3H8dgudeghCOYAWkaxMa1rjjszIwQHyTALvY4koWR6WIjt-O8WFLCRkjqY6-BfrZsqdQGg12EAJhTFIvS9eOH-3t-C-y-vcmfvyfTTEtZ8BIE05WcBdUZ_mdiOHo0k8fZMsxqHiOhDSzZg9z2Qo.RmVGtFnv70ul2dAUdVwf0n9OiABy0mhq2Cz2t7ZiLZw&dib_tag=se&keywords=headphones&qid=1751887867&sprefix=headphones%2Caps%2C335&sr=8-81&xpid=FAKMVZkuWs17S`
    },
    {
      title: `Active Noise Cancelling Headphones, 100H Playtime Headphones Wireless Bluetooth, Bluetooth Headphone with Mic, Over Ear Wireless Headphone with Deep Bass,Fast Charging for Travel`,
      image: `https://m.media-amazon.com/images/I/71lK455gisL._AC_UY218_.jpg`,
      price: `$27.99`,
      rating: `4.3`,
      count: `(1.8K) $27.99$27.99`,
      link: `https://www.amazon.com/Cancelling-Headphones-Playtime-Bluetooth-Microphone/dp/B0BVRJXH27/ref=cs_sr_dp_1?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.-humR6AtW7ZXd_ShBC20OYnK3H8dgudeghCOYAWkaxMa1rjjszIwQHyTALvY4koWR6WIjt-O8WFLCRkjqY6-BfrZsqdQGg12EAJhTFIvS9eOH-3t-C-y-vcmfvyfTTEtZ8BIE05WcBdUZ_mdiOHo0k8fZMsxqHiOhDSzZg9z2Qo.RmVGtFnv70ul2dAUdVwf0n9OiABy0mhq2Cz2t7ZiLZw&dib_tag=se&keywords=headphones&qid=1751887867&sprefix=headphones%2Caps%2C335&sr=8-82&xpid=FAKMVZkuWs17S https://www.amazon.com/Cancelling-Headphones-Playtime-Bluetooth-Microphone/dp/B0CM6LG6T2/ref=cs_sr_dp_2?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.-humR6AtW7ZXd_ShBC20OYnK3H8dgudeghCOYAWkaxMa1rjjszIwQHyTALvY4koWR6WIjt-O8WFLCRkjqY6-BfrZsqdQGg12EAJhTFIvS9eOH-3t-C-y-vcmfvyfTTEtZ8BIE05WcBdUZ_mdiOHo0k8fZMsxqHiOhDSzZg9z2Qo.RmVGtFnv70ul2dAUdVwf0n9OiABy0mhq2Cz2t7ZiLZw&dib_tag=se&keywords=headphones&qid=1751887867&sprefix=headphones%2Caps%2C335&sr=8-82&xpid=FAKMVZkuWs17S https://www.amazon.com/Cancelling-Headphones-Playtime-Bluetooth-Microphone/dp/B0CL4XQ7NF/ref=cs_sr_dp_3?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.-humR6AtW7ZXd_ShBC20OYnK3H8dgudeghCOYAWkaxMa1rjjszIwQHyTALvY4koWR6WIjt-O8WFLCRkjqY6-BfrZsqdQGg12EAJhTFIvS9eOH-3t-C-y-vcmfvyfTTEtZ8BIE05WcBdUZ_mdiOHo0k8fZMsxqHiOhDSzZg9z2Qo.RmVGtFnv70ul2dAUdVwf0n9OiABy0mhq2Cz2t7ZiLZw&dib_tag=se&keywords=headphones&qid=1751887867&sprefix=headphones%2Caps%2C335&sr=8-82&xpid=FAKMVZkuWs17S https://www.amazon.com/Cancelling-Headphones-Playtime-Bluetooth-Microphone/dp/B0DHZP9JXF/ref=cs_sr_dp_4?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.-humR6AtW7ZXd_ShBC20OYnK3H8dgudeghCOYAWkaxMa1rjjszIwQHyTALvY4koWR6WIjt-O8WFLCRkjqY6-BfrZsqdQGg12EAJhTFIvS9eOH-3t-C-y-vcmfvyfTTEtZ8BIE05WcBdUZ_mdiOHo0k8fZMsxqHiOhDSzZg9z2Qo.RmVGtFnv70ul2dAUdVwf0n9OiABy0mhq2Cz2t7ZiLZw&dib_tag=se&keywords=headphones&qid=1751887867&sprefix=headphones%2Caps%2C335&sr=8-82&xpid=FAKMVZkuWs17S`
    },
    {
      title: `Bose QuietComfort Ultra Bluetooth Headphones, Wireless Headphones with Spatial Audio, Over Ear Noise Cancelling with Mic, Up to 24 Hours of Playtime, Lunar Blue - Limited Edition Color`,
      image: `https://m.media-amazon.com/images/I/61fJZu8p1FL._AC_UY218_.jpg`,
      price: `$449.00 $89.80`,
      rating: `4.2`,
      count: `(6.9K) $449.00$449.00`,
      link: `https://www.amazon.com/Bose-QuietComfort-Bluetooth-Headphones-Cancelling/dp/B0D4ZC4XMT/ref=cs_sr_dp_1?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.-humR6AtW7ZXd_ShBC20OYnK3H8dgudeghCOYAWkaxMa1rjjszIwQHyTALvY4koWR6WIjt-O8WFLCRkjqY6-BfrZsqdQGg12EAJhTFIvS9eOH-3t-C-y-vcmfvyfTTEtZ8BIE05WcBdUZ_mdiOHo0k8fZMsxqHiOhDSzZg9z2Qo.RmVGtFnv70ul2dAUdVwf0n9OiABy0mhq2Cz2t7ZiLZw&dib_tag=se&keywords=headphones&qid=1751887867&sprefix=headphones%2Caps%2C335&sr=8-83&ufe=app_do%3Aamzn1.fos.5998aa40-ec6f-4947-a68f-cd087fee0848&xpid=FAKMVZkuWs17S https://www.amazon.com/Bose-QuietComfort-Bluetooth-Headphones-Cancelling/dp/B0CCZ1L489/ref=cs_sr_dp_2?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.-humR6AtW7ZXd_ShBC20OYnK3H8dgudeghCOYAWkaxMa1rjjszIwQHyTALvY4koWR6WIjt-O8WFLCRkjqY6-BfrZsqdQGg12EAJhTFIvS9eOH-3t-C-y-vcmfvyfTTEtZ8BIE05WcBdUZ_mdiOHo0k8fZMsxqHiOhDSzZg9z2Qo.RmVGtFnv70ul2dAUdVwf0n9OiABy0mhq2Cz2t7ZiLZw&dib_tag=se&keywords=headphones&qid=1751887867&sprefix=headphones%2Caps%2C335&sr=8-83&ufe=app_do%3Aamzn1.fos.5998aa40-ec6f-4947-a68f-cd087fee0848&xpid=FAKMVZkuWs17S https://www.amazon.com/Bose-QuietComfort-Bluetooth-Headphones-Cancelling/dp/B0DX2LNZ68/ref=cs_sr_dp_3?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.-humR6AtW7ZXd_ShBC20OYnK3H8dgudeghCOYAWkaxMa1rjjszIwQHyTALvY4koWR6WIjt-O8WFLCRkjqY6-BfrZsqdQGg12EAJhTFIvS9eOH-3t-C-y-vcmfvyfTTEtZ8BIE05WcBdUZ_mdiOHo0k8fZMsxqHiOhDSzZg9z2Qo.RmVGtFnv70ul2dAUdVwf0n9OiABy0mhq2Cz2t7ZiLZw&dib_tag=se&keywords=headphones&qid=1751887867&sprefix=headphones%2Caps%2C335&sr=8-83&ufe=app_do%3Aamzn1.fos.5998aa40-ec6f-4947-a68f-cd087fee0848&xpid=FAKMVZkuWs17S https://www.amazon.com/Bose-QuietComfort-Bluetooth-Headphones-Cancelling/dp/B0D4ZCH5HS/ref=cs_sr_dp_4?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.-humR6AtW7ZXd_ShBC20OYnK3H8dgudeghCOYAWkaxMa1rjjszIwQHyTALvY4koWR6WIjt-O8WFLCRkjqY6-BfrZsqdQGg12EAJhTFIvS9eOH-3t-C-y-vcmfvyfTTEtZ8BIE05WcBdUZ_mdiOHo0k8fZMsxqHiOhDSzZg9z2Qo.RmVGtFnv70ul2dAUdVwf0n9OiABy0mhq2Cz2t7ZiLZw&dib_tag=se&keywords=headphones&qid=1751887867&sprefix=headphones%2Caps%2C335&sr=8-83&ufe=app_do%3Aamzn1.fos.5998aa40-ec6f-4947-a68f-cd087fee0848&xpid=FAKMVZkuWs17S https://www.amazon.com/Bose-QuietComfort-Bluetooth-Headphones-Cancelling/dp/B0CN9FTKJ4/ref=cs_sr_dp_5?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.-humR6AtW7ZXd_ShBC20OYnK3H8dgudeghCOYAWkaxMa1rjjszIwQHyTALvY4koWR6WIjt-O8WFLCRkjqY6-BfrZsqdQGg12EAJhTFIvS9eOH-3t-C-y-vcmfvyfTTEtZ8BIE05WcBdUZ_mdiOHo0k8fZMsxqHiOhDSzZg9z2Qo.RmVGtFnv70ul2dAUdVwf0n9OiABy0mhq2Cz2t7ZiLZw&dib_tag=se&keywords=headphones&qid=1751887867&sprefix=headphones%2Caps%2C335&sr=8-83&ufe=app_do%3Aamzn1.fos.5998aa40-ec6f-4947-a68f-cd087fee0848&xpid=FAKMVZkuWs17S https://www.amazon.com/Bose-QuietComfort-Bluetooth-Headphones-Cancelling/dp/B0CCZ1HQ39/ref=cs_sr_dp_6?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.-humR6AtW7ZXd_ShBC20OYnK3H8dgudeghCOYAWkaxMa1rjjszIwQHyTALvY4koWR6WIjt-O8WFLCRkjqY6-BfrZsqdQGg12EAJhTFIvS9eOH-3t-C-y-vcmfvyfTTEtZ8BIE05WcBdUZ_mdiOHo0k8fZMsxqHiOhDSzZg9z2Qo.RmVGtFnv70ul2dAUdVwf0n9OiABy0mhq2Cz2t7ZiLZw&dib_tag=se&keywords=headphones&qid=1751887867&sprefix=headphones%2Caps%2C335&sr=8-83&ufe=app_do%3Aamzn1.fos.5998aa40-ec6f-4947-a68f-cd087fee0848&xpid=FAKMVZkuWs17S`
    },
    {
      title: `DOQAUS Over Ear Bluetooth Headphones Wireless, 90H Playtime, BT 5.4, 9 EQ Modes, HiFi Deep Bass, Movie & Sleep Mode, White Noises w/App Control, Memory Foam Cups for Travel, Gym, Workout, PC, Phone`,
      image: `https://m.media-amazon.com/images/I/71kGCuDB0yL._AC_UY218_.jpg https://m.media-amazon.com/images/I/11++B3A2NEL._SS200_.png`,
      price: `$21.99`,
      rating: `4.4`,
      count: `(7.4K) $21.99$21.99 <img alt="Climate Pledge Friendly" src="https://m.media-amazon.com/images/I/21AGu0JFvKL.svg" height="24px" width="186px"/> Discover more products with sustainability features. Learn more`,
      link: `https://www.amazon.com/DOQAUS-Bluetooth-Headphones-Wireless-Playtime/dp/B0BG7BYG3M/ref=cs_sr_dp_1?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.-humR6AtW7ZXd_ShBC20OYnK3H8dgudeghCOYAWkaxMa1rjjszIwQHyTALvY4koWR6WIjt-O8WFLCRkjqY6-BfrZsqdQGg12EAJhTFIvS9eOH-3t-C-y-vcmfvyfTTEtZ8BIE05WcBdUZ_mdiOHo0k8fZMsxqHiOhDSzZg9z2Qo.RmVGtFnv70ul2dAUdVwf0n9OiABy0mhq2Cz2t7ZiLZw&dib_tag=se&keywords=headphones&qid=1751887867&sprefix=headphones%2Caps%2C335&sr=8-84&xpid=FAKMVZkuWs17S https://www.amazon.com/DOQAUS-Bluetooth-Headphones-Wireless-Playtime/dp/B0D56TGHWW/ref=cs_sr_dp_2?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.-humR6AtW7ZXd_ShBC20OYnK3H8dgudeghCOYAWkaxMa1rjjszIwQHyTALvY4koWR6WIjt-O8WFLCRkjqY6-BfrZsqdQGg12EAJhTFIvS9eOH-3t-C-y-vcmfvyfTTEtZ8BIE05WcBdUZ_mdiOHo0k8fZMsxqHiOhDSzZg9z2Qo.RmVGtFnv70ul2dAUdVwf0n9OiABy0mhq2Cz2t7ZiLZw&dib_tag=se&keywords=headphones&qid=1751887867&sprefix=headphones%2Caps%2C335&sr=8-84&xpid=FAKMVZkuWs17S https://www.amazon.com/DOQAUS-Bluetooth-Headphones-Wireless-Playtime/dp/B0DPB6X3HK/ref=cs_sr_dp_3?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.-humR6AtW7ZXd_ShBC20OYnK3H8dgudeghCOYAWkaxMa1rjjszIwQHyTALvY4koWR6WIjt-O8WFLCRkjqY6-BfrZsqdQGg12EAJhTFIvS9eOH-3t-C-y-vcmfvyfTTEtZ8BIE05WcBdUZ_mdiOHo0k8fZMsxqHiOhDSzZg9z2Qo.RmVGtFnv70ul2dAUdVwf0n9OiABy0mhq2Cz2t7ZiLZw&dib_tag=se&keywords=headphones&qid=1751887867&sprefix=headphones%2Caps%2C335&sr=8-84&xpid=FAKMVZkuWs17S https://www.amazon.com/DOQAUS-Bluetooth-Headphones-Wireless-Playtime/dp/B0D1XHBQDM/ref=cs_sr_dp_4?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.-humR6AtW7ZXd_ShBC20OYnK3H8dgudeghCOYAWkaxMa1rjjszIwQHyTALvY4koWR6WIjt-O8WFLCRkjqY6-BfrZsqdQGg12EAJhTFIvS9eOH-3t-C-y-vcmfvyfTTEtZ8BIE05WcBdUZ_mdiOHo0k8fZMsxqHiOhDSzZg9z2Qo.RmVGtFnv70ul2dAUdVwf0n9OiABy0mhq2Cz2t7ZiLZw&dib_tag=se&keywords=headphones&qid=1751887867&sprefix=headphones%2Caps%2C335&sr=8-84&xpid=FAKMVZkuWs17S https://www.amazon.com/DOQAUS-Bluetooth-Headphones-Wireless-Playtime/dp/B0DPB5T27D/ref=cs_sr_dp_5?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.-humR6AtW7ZXd_ShBC20OYnK3H8dgudeghCOYAWkaxMa1rjjszIwQHyTALvY4koWR6WIjt-O8WFLCRkjqY6-BfrZsqdQGg12EAJhTFIvS9eOH-3t-C-y-vcmfvyfTTEtZ8BIE05WcBdUZ_mdiOHo0k8fZMsxqHiOhDSzZg9z2Qo.RmVGtFnv70ul2dAUdVwf0n9OiABy0mhq2Cz2t7ZiLZw&dib_tag=se&keywords=headphones&qid=1751887867&sprefix=headphones%2Caps%2C335&sr=8-84&xpid=FAKMVZkuWs17S https://www.amazon.com/DOQAUS-Bluetooth-Headphones-Wireless-Playtime/dp/B0C5DPQ4NK/ref=cs_sr_dp_6?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.-humR6AtW7ZXd_ShBC20OYnK3H8dgudeghCOYAWkaxMa1rjjszIwQHyTALvY4koWR6WIjt-O8WFLCRkjqY6-BfrZsqdQGg12EAJhTFIvS9eOH-3t-C-y-vcmfvyfTTEtZ8BIE05WcBdUZ_mdiOHo0k8fZMsxqHiOhDSzZg9z2Qo.RmVGtFnv70ul2dAUdVwf0n9OiABy0mhq2Cz2t7ZiLZw&dib_tag=se&keywords=headphones&qid=1751887867&sprefix=headphones%2Caps%2C335&sr=8-84&xpid=FAKMVZkuWs17S`
    },
    {
      title: `RUNOLIM Hybrid Active Noise Cancelling Headphones, Wireless Over Ear Bluetooth Headphones with Microphone, 70H Playtime, Foldable Headphone with HiFi Audio, Deep Bass for Home Travel Office`,
      image: `https://m.media-amazon.com/images/I/61qZS7I49GL._AC_UY218_.jpg`,
      price: `$19.99 $23.99`,
      rating: `4.4`,
      count: `(6.4K) $19.99$19.99 List Price: $23.99`,
      link: `https://www.amazon.com/Cancelling-Headphones-Wireless-Bluetooth-Microphone/dp/B0BKPRTRXK/ref=cs_sr_dp_1?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.-humR6AtW7ZXd_ShBC20OYnK3H8dgudeghCOYAWkaxMa1rjjszIwQHyTALvY4koWR6WIjt-O8WFLCRkjqY6-BfrZsqdQGg12EAJhTFIvS9eOH-3t-C-y-vcmfvyfTTEtZ8BIE05WcBdUZ_mdiOHo0k8fZMsxqHiOhDSzZg9z2Qo.RmVGtFnv70ul2dAUdVwf0n9OiABy0mhq2Cz2t7ZiLZw&dib_tag=se&keywords=headphones&qid=1751887867&sprefix=headphones%2Caps%2C335&sr=8-85&xpid=FAKMVZkuWs17S https://www.amazon.com/Cancelling-Headphones-Wireless-Bluetooth-Microphone/dp/B0BR9QJS5R/ref=cs_sr_dp_2?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.-humR6AtW7ZXd_ShBC20OYnK3H8dgudeghCOYAWkaxMa1rjjszIwQHyTALvY4koWR6WIjt-O8WFLCRkjqY6-BfrZsqdQGg12EAJhTFIvS9eOH-3t-C-y-vcmfvyfTTEtZ8BIE05WcBdUZ_mdiOHo0k8fZMsxqHiOhDSzZg9z2Qo.RmVGtFnv70ul2dAUdVwf0n9OiABy0mhq2Cz2t7ZiLZw&dib_tag=se&keywords=headphones&qid=1751887867&sprefix=headphones%2Caps%2C335&sr=8-85&xpid=FAKMVZkuWs17S https://www.amazon.com/Cancelling-Headphones-Wireless-Bluetooth-Microphone/dp/B0BR9PWNKQ/ref=cs_sr_dp_3?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.-humR6AtW7ZXd_ShBC20OYnK3H8dgudeghCOYAWkaxMa1rjjszIwQHyTALvY4koWR6WIjt-O8WFLCRkjqY6-BfrZsqdQGg12EAJhTFIvS9eOH-3t-C-y-vcmfvyfTTEtZ8BIE05WcBdUZ_mdiOHo0k8fZMsxqHiOhDSzZg9z2Qo.RmVGtFnv70ul2dAUdVwf0n9OiABy0mhq2Cz2t7ZiLZw&dib_tag=se&keywords=headphones&qid=1751887867&sprefix=headphones%2Caps%2C335&sr=8-85&xpid=FAKMVZkuWs17S`
    },
    {
      title: `Redragon H510 Zeus Wired Gaming Headset - 7.1 Surround Sound - Memory Foam Ear Pads - 53MM Drivers - Detachable Microphone, Works for Multi-Platforms PC, PS4/3 & Xbox One/Series X, NS`,
      image: `https://m.media-amazon.com/images/I/61pZ6-z6PvL._AC_UY218_.jpg`,
      price: `$59.99`,
      rating: `4.2`,
      count: `(4.7K) $59.99$59.99`,
      link: `https://www.amazon.com/Redragon-H510-Wired-Gaming-Headset/dp/B07PSCCC78/ref=cs_sr_dp_1?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.-humR6AtW7ZXd_ShBC20OYnK3H8dgudeghCOYAWkaxMa1rjjszIwQHyTALvY4koWR6WIjt-O8WFLCRkjqY6-BfrZsqdQGg12EAJhTFIvS9eOH-3t-C-y-vcmfvyfTTEtZ8BIE05WcBdUZ_mdiOHo0k8fZMsxqHiOhDSzZg9z2Qo.RmVGtFnv70ul2dAUdVwf0n9OiABy0mhq2Cz2t7ZiLZw&dib_tag=se&keywords=headphones&qid=1751887867&sprefix=headphones%2Caps%2C335&sr=8-86&xpid=FAKMVZkuWs17S https://www.amazon.com/Redragon-H510-Wired-Gaming-Headset/dp/B0BQ39GYQ4/ref=cs_sr_dp_2?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.-humR6AtW7ZXd_ShBC20OYnK3H8dgudeghCOYAWkaxMa1rjjszIwQHyTALvY4koWR6WIjt-O8WFLCRkjqY6-BfrZsqdQGg12EAJhTFIvS9eOH-3t-C-y-vcmfvyfTTEtZ8BIE05WcBdUZ_mdiOHo0k8fZMsxqHiOhDSzZg9z2Qo.RmVGtFnv70ul2dAUdVwf0n9OiABy0mhq2Cz2t7ZiLZw&dib_tag=se&keywords=headphones&qid=1751887867&sprefix=headphones%2Caps%2C335&sr=8-86&xpid=FAKMVZkuWs17S https://www.amazon.com/Redragon-H510-Wired-Gaming-Headset/dp/B08XHR3QCB/ref=cs_sr_dp_3?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.-humR6AtW7ZXd_ShBC20OYnK3H8dgudeghCOYAWkaxMa1rjjszIwQHyTALvY4koWR6WIjt-O8WFLCRkjqY6-BfrZsqdQGg12EAJhTFIvS9eOH-3t-C-y-vcmfvyfTTEtZ8BIE05WcBdUZ_mdiOHo0k8fZMsxqHiOhDSzZg9z2Qo.RmVGtFnv70ul2dAUdVwf0n9OiABy0mhq2Cz2t7ZiLZw&dib_tag=se&keywords=headphones&qid=1751887867&sprefix=headphones%2Caps%2C335&sr=8-86&xpid=FAKMVZkuWs17S https://www.amazon.com/Redragon-H510-Wired-Gaming-Headset/dp/B0D1DNP96T/ref=cs_sr_dp_4?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.-humR6AtW7ZXd_ShBC20OYnK3H8dgudeghCOYAWkaxMa1rjjszIwQHyTALvY4koWR6WIjt-O8WFLCRkjqY6-BfrZsqdQGg12EAJhTFIvS9eOH-3t-C-y-vcmfvyfTTEtZ8BIE05WcBdUZ_mdiOHo0k8fZMsxqHiOhDSzZg9z2Qo.RmVGtFnv70ul2dAUdVwf0n9OiABy0mhq2Cz2t7ZiLZw&dib_tag=se&keywords=headphones&qid=1751887867&sprefix=headphones%2Caps%2C335&sr=8-86&xpid=FAKMVZkuWs17S`
    },
    {
      title: `MIDOLA Kids Headphones Bluetooth 5.3 Wireless 60H Play Time Volume Limit 85/110dB Over Ear Foldable Protection Headset/Wired AUX Cord Mic for Children Boy Girl Travel School Phone Pad Tablet Pink`,
      image: `https://m.media-amazon.com/images/I/512dld8zkCL._AC_UY218_.jpg`,
      price: `$15.99`,
      rating: `4.4`,
      count: `(14.1K) $15.99$15.99`,
      link: `https://www.amazon.com/Headphone-Bluetooth-Wireless-Protection-Cellphone/dp/B07W4WCF5P/ref=cs_sr_dp_1?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.-humR6AtW7ZXd_ShBC20OYnK3H8dgudeghCOYAWkaxMa1rjjszIwQHyTALvY4koWR6WIjt-O8WFLCRkjqY6-BfrZsqdQGg12EAJhTFIvS9eOH-3t-C-y-vcmfvyfTTEtZ8BIE05WcBdUZ_mdiOHo0k8fZMsxqHiOhDSzZg9z2Qo.RmVGtFnv70ul2dAUdVwf0n9OiABy0mhq2Cz2t7ZiLZw&dib_tag=se&keywords=headphones&qid=1751887867&sprefix=headphones%2Caps%2C335&sr=8-88&xpid=FAKMVZkuWs17S https://www.amazon.com/Headphone-Bluetooth-Wireless-Protection-Cellphone/dp/B08HCSNB5T/ref=cs_sr_dp_2?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.-humR6AtW7ZXd_ShBC20OYnK3H8dgudeghCOYAWkaxMa1rjjszIwQHyTALvY4koWR6WIjt-O8WFLCRkjqY6-BfrZsqdQGg12EAJhTFIvS9eOH-3t-C-y-vcmfvyfTTEtZ8BIE05WcBdUZ_mdiOHo0k8fZMsxqHiOhDSzZg9z2Qo.RmVGtFnv70ul2dAUdVwf0n9OiABy0mhq2Cz2t7ZiLZw&dib_tag=se&keywords=headphones&qid=1751887867&sprefix=headphones%2Caps%2C335&sr=8-88&xpid=FAKMVZkuWs17S https://www.amazon.com/Headphone-Bluetooth-Wireless-Protection-Cellphone/dp/B07DXP45Q7/ref=cs_sr_dp_3?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.-humR6AtW7ZXd_ShBC20OYnK3H8dgudeghCOYAWkaxMa1rjjszIwQHyTALvY4koWR6WIjt-O8WFLCRkjqY6-BfrZsqdQGg12EAJhTFIvS9eOH-3t-C-y-vcmfvyfTTEtZ8BIE05WcBdUZ_mdiOHo0k8fZMsxqHiOhDSzZg9z2Qo.RmVGtFnv70ul2dAUdVwf0n9OiABy0mhq2Cz2t7ZiLZw&dib_tag=se&keywords=headphones&qid=1751887867&sprefix=headphones%2Caps%2C335&sr=8-88&xpid=FAKMVZkuWs17S https://www.amazon.com/Headphone-Bluetooth-Wireless-Protection-Cellphone/dp/B0BGLTWJDJ/ref=cs_sr_dp_4?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.-humR6AtW7ZXd_ShBC20OYnK3H8dgudeghCOYAWkaxMa1rjjszIwQHyTALvY4koWR6WIjt-O8WFLCRkjqY6-BfrZsqdQGg12EAJhTFIvS9eOH-3t-C-y-vcmfvyfTTEtZ8BIE05WcBdUZ_mdiOHo0k8fZMsxqHiOhDSzZg9z2Qo.RmVGtFnv70ul2dAUdVwf0n9OiABy0mhq2Cz2t7ZiLZw&dib_tag=se&keywords=headphones&qid=1751887867&sprefix=headphones%2Caps%2C335&sr=8-88&xpid=FAKMVZkuWs17S https://www.amazon.com/Headphone-Bluetooth-Wireless-Protection-Cellphone/dp/B0B4YZJQJX/ref=cs_sr_dp_5?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.-humR6AtW7ZXd_ShBC20OYnK3H8dgudeghCOYAWkaxMa1rjjszIwQHyTALvY4koWR6WIjt-O8WFLCRkjqY6-BfrZsqdQGg12EAJhTFIvS9eOH-3t-C-y-vcmfvyfTTEtZ8BIE05WcBdUZ_mdiOHo0k8fZMsxqHiOhDSzZg9z2Qo.RmVGtFnv70ul2dAUdVwf0n9OiABy0mhq2Cz2t7ZiLZw&dib_tag=se&keywords=headphones&qid=1751887867&sprefix=headphones%2Caps%2C335&sr=8-88&xpid=FAKMVZkuWs17S https://www.amazon.com/Headphone-Bluetooth-Wireless-Protection-Cellphone/dp/B07W61DC9W/ref=cs_sr_dp_6?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.-humR6AtW7ZXd_ShBC20OYnK3H8dgudeghCOYAWkaxMa1rjjszIwQHyTALvY4koWR6WIjt-O8WFLCRkjqY6-BfrZsqdQGg12EAJhTFIvS9eOH-3t-C-y-vcmfvyfTTEtZ8BIE05WcBdUZ_mdiOHo0k8fZMsxqHiOhDSzZg9z2Qo.RmVGtFnv70ul2dAUdVwf0n9OiABy0mhq2Cz2t7ZiLZw&dib_tag=se&keywords=headphones&qid=1751887867&sprefix=headphones%2Caps%2C335&sr=8-88&xpid=FAKMVZkuWs17S`
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
    
    setTimeout(() => {
      window.open(firstLink, '_blank', 'noopener,noreferrer');
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
            <span className="text-cyan-400 font-semibold mr-2">Page 9</span>
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
                    src={item.image} 
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
                  p === 9 
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
