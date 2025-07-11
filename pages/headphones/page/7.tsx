import Link from "next/link";

export default function HeadphonesPage7() {
  const headphones = [
    {
      title: `NDO Wireless Earbuds Bluetooth 5.3 Headphones Sport,IPX7 Waterproof Sports Earphones with Earhooks,48H Playtime,Lightweight 7.8g,Fast Charging Case,Noise Cancelling Mic for Running Gym Workout-Black`,
      image: `https://m.media-amazon.com/images/I/618l7TKQtAL._AC_UY218_.jpg`,
      price: `$22.99 $229.99`,
      rating: `4.9`,
      count: `Leave ad feedback (1.9K) $22.99$22.99 Typical: $229.99`,
      link: `https://www.amazon.com/deals`
    },
    {
      title: `JBL Tune 520BT - Wireless On-Ear Headphones, Up to 57H Battery Life and Speed Charge, Lightweight, Comfortable and Foldable Design, Hands-Free Calls with Voice Aware (Purple)`,
      image: `https://m.media-amazon.com/images/I/61mz7WxnjdL._AC_UY218_.jpg`,
      price: `$39.95 $59.95`,
      rating: `4.6`,
      count: `(6.1K) $39.95$39.95 List: $59.95`,
      link: `https://www.amazon.com/deals https://www.amazon.com/JBL-Tune-520BT-Ear-Lightweight/dp/B0CQ1HP3RX/ref=cs_sr_dp_1?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.blHWPNT2th89wIW5FCrlYKjLO7dnit2s2fTrpUi2xUHGjHj071QN20LucGBJIEps.jDxUb81S7V_FeFyE3KZdxnv6gPvUmIOWHzDHJSMU4IY&dib_tag=se&keywords=headphones&qid=1751887841&sprefix=headphones%2Caps%2C335&sr=8-67&xpid=FAKMVZkuWs17S https://www.amazon.com/JBL-Tune-520BT-Ear-Lightweight/dp/B0C1HGKNG7/ref=cs_sr_dp_2?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.blHWPNT2th89wIW5FCrlYKjLO7dnit2s2fTrpUi2xUHGjHj071QN20LucGBJIEps.jDxUb81S7V_FeFyE3KZdxnv6gPvUmIOWHzDHJSMU4IY&dib_tag=se&keywords=headphones&qid=1751887841&sprefix=headphones%2Caps%2C335&sr=8-67&xpid=FAKMVZkuWs17S https://www.amazon.com/JBL-Tune-520BT-Ear-Lightweight/dp/B0CGMV5TMR/ref=cs_sr_dp_3?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.blHWPNT2th89wIW5FCrlYKjLO7dnit2s2fTrpUi2xUHGjHj071QN20LucGBJIEps.jDxUb81S7V_FeFyE3KZdxnv6gPvUmIOWHzDHJSMU4IY&dib_tag=se&keywords=headphones&qid=1751887841&sprefix=headphones%2Caps%2C335&sr=8-67&xpid=FAKMVZkuWs17S https://www.amazon.com/JBL-Tune-520BT-Ear-Lightweight/dp/B0CBL1TQMP/ref=cs_sr_dp_4?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.blHWPNT2th89wIW5FCrlYKjLO7dnit2s2fTrpUi2xUHGjHj071QN20LucGBJIEps.jDxUb81S7V_FeFyE3KZdxnv6gPvUmIOWHzDHJSMU4IY&dib_tag=se&keywords=headphones&qid=1751887841&sprefix=headphones%2Caps%2C335&sr=8-67&xpid=FAKMVZkuWs17S`
    },
    {
      title: `Razer BlackShark V2 X Gaming Headset: 7.1 Surround Sound - 50mm Drivers - Memory Foam Cushion - For PC, PS4, PS5, Switch - 3.5mm Audio Jack - Black`,
      image: `https://m.media-amazon.com/images/I/51FRJHB7XOL._AC_UY218_.jpg https://m.media-amazon.com/images/I/11++B3A2NEL._SS200_.png`,
      price: `$39.98 $59.99`,
      rating: `4.4`,
      count: `(21.9K) $39.98$39.98 List: $59.99 <img alt="Climate Pledge Friendly" src="https://m.media-amazon.com/images/I/21AGu0JFvKL.svg" height="24px" width="186px"/> Discover more products with sustainability features. Learn more`,
      link: `https://www.amazon.com/Razer-BlackShark-V2-Gaming-Headset/dp/B086PKMZ21/ref=cs_sr_dp_1?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.blHWPNT2th89wIW5FCrlYKjLO7dnit2s2fTrpUi2xUHGjHj071QN20LucGBJIEps.jDxUb81S7V_FeFyE3KZdxnv6gPvUmIOWHzDHJSMU4IY&dib_tag=se&keywords=headphones&qid=1751887841&sprefix=headphones%2Caps%2C335&sr=8-68&xpid=FAKMVZkuWs17S https://www.amazon.com/Razer-BlackShark-V2-Gaming-Headset/dp/B09CLWQ45V/ref=cs_sr_dp_2?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.blHWPNT2th89wIW5FCrlYKjLO7dnit2s2fTrpUi2xUHGjHj071QN20LucGBJIEps.jDxUb81S7V_FeFyE3KZdxnv6gPvUmIOWHzDHJSMU4IY&dib_tag=se&keywords=headphones&qid=1751887841&sprefix=headphones%2Caps%2C335&sr=8-68&xpid=FAKMVZkuWs17S https://www.amazon.com/Razer-BlackShark-V2-Gaming-Headset/dp/B0DW18XKPV/ref=cs_sr_dp_3?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.blHWPNT2th89wIW5FCrlYKjLO7dnit2s2fTrpUi2xUHGjHj071QN20LucGBJIEps.jDxUb81S7V_FeFyE3KZdxnv6gPvUmIOWHzDHJSMU4IY&dib_tag=se&keywords=headphones&qid=1751887841&sprefix=headphones%2Caps%2C335&sr=8-68&xpid=FAKMVZkuWs17S https://www.amazon.com/Razer-BlackShark-V2-Gaming-Headset/dp/B0DW1JBR3P/ref=cs_sr_dp_4?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.blHWPNT2th89wIW5FCrlYKjLO7dnit2s2fTrpUi2xUHGjHj071QN20LucGBJIEps.jDxUb81S7V_FeFyE3KZdxnv6gPvUmIOWHzDHJSMU4IY&dib_tag=se&keywords=headphones&qid=1751887841&sprefix=headphones%2Caps%2C335&sr=8-68&xpid=FAKMVZkuWs17S`
    },
    {
      title: `Wireless Earbuds Bluetooth 5.4 Headphones Bass Stereo Ear Buds with Noise Cancelling Mic LED Display in Ear Earphones IP7 Waterproof 36H Playtime for Laptop Pad Phones Sports Workout White`,
      image: `https://m.media-amazon.com/images/I/61mzvE511WL._AC_UY218_.jpg https://m.media-amazon.com/images/I/11++B3A2NEL._SS200_.png`,
      price: `$21.99`,
      rating: `4.5`,
      count: `(14.5K) $21.99$21.99 <img alt="Climate Pledge Friendly" src="https://m.media-amazon.com/images/I/21AGu0JFvKL.svg" height="24px" width="186px"/> Discover more products with sustainability features. Learn more`,
      link: `https://www.amazon.com/Bluetooth-Headphones-Cancelling-Earphones-Waterproof/dp/B0CX1SZPH3/ref=cs_sr_dp_1?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.blHWPNT2th89wIW5FCrlYKjLO7dnit2s2fTrpUi2xUHGjHj071QN20LucGBJIEps.jDxUb81S7V_FeFyE3KZdxnv6gPvUmIOWHzDHJSMU4IY&dib_tag=se&keywords=headphones&qid=1751887841&sprefix=headphones%2Caps%2C335&sr=8-69&xpid=FAKMVZkuWs17S https://www.amazon.com/Bluetooth-Headphones-Cancelling-Earphones-Waterproof/dp/B0DC95VBG5/ref=cs_sr_dp_2?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.blHWPNT2th89wIW5FCrlYKjLO7dnit2s2fTrpUi2xUHGjHj071QN20LucGBJIEps.jDxUb81S7V_FeFyE3KZdxnv6gPvUmIOWHzDHJSMU4IY&dib_tag=se&keywords=headphones&qid=1751887841&sprefix=headphones%2Caps%2C335&sr=8-69&xpid=FAKMVZkuWs17S https://www.amazon.com/Bluetooth-Headphones-Cancelling-Earphones-Waterproof/dp/B0D9XH3LMS/ref=cs_sr_dp_3?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.blHWPNT2th89wIW5FCrlYKjLO7dnit2s2fTrpUi2xUHGjHj071QN20LucGBJIEps.jDxUb81S7V_FeFyE3KZdxnv6gPvUmIOWHzDHJSMU4IY&dib_tag=se&keywords=headphones&qid=1751887841&sprefix=headphones%2Caps%2C335&sr=8-69&xpid=FAKMVZkuWs17S https://www.amazon.com/Bluetooth-Headphones-Cancelling-Earphones-Waterproof/dp/B0DPFLPCHZ/ref=cs_sr_dp_4?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.blHWPNT2th89wIW5FCrlYKjLO7dnit2s2fTrpUi2xUHGjHj071QN20LucGBJIEps.jDxUb81S7V_FeFyE3KZdxnv6gPvUmIOWHzDHJSMU4IY&dib_tag=se&keywords=headphones&qid=1751887841&sprefix=headphones%2Caps%2C335&sr=8-69&xpid=FAKMVZkuWs17S https://www.amazon.com/Bluetooth-Headphones-Cancelling-Earphones-Waterproof/dp/B0DS5TYJVB/ref=cs_sr_dp_5?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.blHWPNT2th89wIW5FCrlYKjLO7dnit2s2fTrpUi2xUHGjHj071QN20LucGBJIEps.jDxUb81S7V_FeFyE3KZdxnv6gPvUmIOWHzDHJSMU4IY&dib_tag=se&keywords=headphones&qid=1751887841&sprefix=headphones%2Caps%2C335&sr=8-69&xpid=FAKMVZkuWs17S https://www.amazon.com/Bluetooth-Headphones-Cancelling-Earphones-Waterproof/dp/B0CX1VQQWK/ref=cs_sr_dp_6?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.blHWPNT2th89wIW5FCrlYKjLO7dnit2s2fTrpUi2xUHGjHj071QN20LucGBJIEps.jDxUb81S7V_FeFyE3KZdxnv6gPvUmIOWHzDHJSMU4IY&dib_tag=se&keywords=headphones&qid=1751887841&sprefix=headphones%2Caps%2C335&sr=8-69&xpid=FAKMVZkuWs17S`
    },
    {
      title: `HyperX Cloud III – Wired Gaming Headset, PC, PS5, Xbox Series X|S, Angled 53mm Drivers, DTS Spatial Audio, Memory Foam, Durable Frame, Ultra-Clear 10mm Mic, USB-C, USB-A, 3.5mm – Black/Red`,
      image: `https://m.media-amazon.com/images/I/71pz2njkNRL._AC_UY218_.jpg`,
      price: `$77.99 $99.99 $26.00`,
      rating: `4.4`,
      count: `(8.4K) $77.99$77.99 List: $99.99`,
      link: `https://www.amazon.com/HyperX-Cloud-III-Ultra-Clear-USB/dp/B0C3BV19Q3/ref=cs_sr_dp_1?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.tMrwHJFmTaQNG_efIYKxyTaNCxQl-zhmoPbSGlHQYPynr6FZtoaELSrwCugB_fuOhHWB1U4MPlktyTDtEVwmVcNIRwoXN8CGPlzeIR7x6e1r6BfAEAPq4oVB_nZ1lCVyzLuJfZhnUAS52Npr5k-g-zJusxXPZnSK8rIPnBLCeVCTG8YxAFY9Bek0tf2WKqxC.vaqQhaDZo6hoCnLc-sY4Ycd5Kx2T7K_X85nzh3uczPE&dib_tag=se&keywords=headphones&qid=1751887841&sprefix=headphones%2Caps%2C335&sr=8-65&ufe=app_do%3Aamzn1.fos.9fe8cbfa-bf43-43d1-a707-3f4e65a4b666&xpid=FAKMVZkuWs17S https://www.amazon.com/HyperX-Cloud-III-Ultra-Clear-USB/dp/B0CBQYKFR2/ref=cs_sr_dp_2?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.tMrwHJFmTaQNG_efIYKxyTaNCxQl-zhmoPbSGlHQYPynr6FZtoaELSrwCugB_fuOhHWB1U4MPlktyTDtEVwmVcNIRwoXN8CGPlzeIR7x6e1r6BfAEAPq4oVB_nZ1lCVyzLuJfZhnUAS52Npr5k-g-zJusxXPZnSK8rIPnBLCeVCTG8YxAFY9Bek0tf2WKqxC.vaqQhaDZo6hoCnLc-sY4Ycd5Kx2T7K_X85nzh3uczPE&dib_tag=se&keywords=headphones&qid=1751887841&sprefix=headphones%2Caps%2C335&sr=8-65&ufe=app_do%3Aamzn1.fos.9fe8cbfa-bf43-43d1-a707-3f4e65a4b666&xpid=FAKMVZkuWs17S`
    },
    {
      title: `Soundcore V20i by Anker Open-Ear Headphones, Adjustable Ear Hooks, Ultra-Comfort, Snug Fit, Powerful Sound, Clear Calls, IP55, 36H Playtime, Bluetooth 5.4 Wireless Earbuds, Multipoint Connection`,
      image: `https://m.media-amazon.com/images/I/517WiAmP8qL._AC_UY218_.jpg https://m.media-amazon.com/images/I/11++B3A2NEL._SS200_.png`,
      price: `$26.99 $49.99`,
      rating: `4.4`,
      count: `(4.6K) $26.99$26.99 List Price: $49.99 <img alt="Climate Pledge Friendly" src="https://m.media-amazon.com/images/I/21AGu0JFvKL.svg" height="24px" width="186px"/> Discover more products with sustainability features. Learn more`,
      link: `https://www.amazon.com/Soundcore-Headphones-Adjustable-Ultra-Comfort-Multipoint/dp/B0D2XRXNGY/ref=cs_sr_dp_1?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.tMrwHJFmTaQNG_efIYKxyTaNCxQl-zhmoPbSGlHQYPynr6FZtoaELSrwCugB_fuOhHWB1U4MPlktyTDtEVwmVcNIRwoXN8CGPlzeIR7x6e1r6BfAEAPq4oVB_nZ1lCVyzLuJfZhnUAS52Npr5k-g-zJusxXPZnSK8rIPnBLCeVCTG8YxAFY9Bek0tf2WKqxC.vaqQhaDZo6hoCnLc-sY4Ycd5Kx2T7K_X85nzh3uczPE&dib_tag=se&keywords=headphones&qid=1751887841&sprefix=headphones%2Caps%2C335&sr=8-66&xpid=FAKMVZkuWs17S https://www.amazon.com/Soundcore-Headphones-Adjustable-Ultra-Comfort-Multipoint/dp/B0D31C567W/ref=cs_sr_dp_2?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.tMrwHJFmTaQNG_efIYKxyTaNCxQl-zhmoPbSGlHQYPynr6FZtoaELSrwCugB_fuOhHWB1U4MPlktyTDtEVwmVcNIRwoXN8CGPlzeIR7x6e1r6BfAEAPq4oVB_nZ1lCVyzLuJfZhnUAS52Npr5k-g-zJusxXPZnSK8rIPnBLCeVCTG8YxAFY9Bek0tf2WKqxC.vaqQhaDZo6hoCnLc-sY4Ycd5Kx2T7K_X85nzh3uczPE&dib_tag=se&keywords=headphones&qid=1751887841&sprefix=headphones%2Caps%2C335&sr=8-66&xpid=FAKMVZkuWs17S https://www.amazon.com/Soundcore-Headphones-Adjustable-Ultra-Comfort-Multipoint/dp/B0D319J6T2/ref=cs_sr_dp_3?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.tMrwHJFmTaQNG_efIYKxyTaNCxQl-zhmoPbSGlHQYPynr6FZtoaELSrwCugB_fuOhHWB1U4MPlktyTDtEVwmVcNIRwoXN8CGPlzeIR7x6e1r6BfAEAPq4oVB_nZ1lCVyzLuJfZhnUAS52Npr5k-g-zJusxXPZnSK8rIPnBLCeVCTG8YxAFY9Bek0tf2WKqxC.vaqQhaDZo6hoCnLc-sY4Ycd5Kx2T7K_X85nzh3uczPE&dib_tag=se&keywords=headphones&qid=1751887841&sprefix=headphones%2Caps%2C335&sr=8-66&xpid=FAKMVZkuWs17S`
    },
    {
      title: `Bluetooth Wireless Headphones 16H Playtime Earbuds with Mic Stereo in-Ear Earphones, IPX7 Waterproof Sports Sound Isolation Headsets for Running, Gym, Workout`,
      image: `https://m.media-amazon.com/images/I/61y8xIywvgL._AC_UY218_.jpg`,
      price: `$18.99 $27.99`,
      rating: `4.4`,
      count: `(2.3K) $18.99$18.99 List: $27.99`,
      link: `https://www.amazon.com/JOYWISE-Bluetooth-Headphones-Earphones-Waterproof/dp/B0BTLVHMHW/ref=cs_sr_dp_1?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.tMrwHJFmTaQNG_efIYKxyTaNCxQl-zhmoPbSGlHQYPynr6FZtoaELSrwCugB_fuOhHWB1U4MPlktyTDtEVwmVcNIRwoXN8CGPlzeIR7x6e1r6BfAEAPq4oVB_nZ1lCVyzLuJfZhnUAS52Npr5k-g-zJusxXPZnSK8rIPnBLCeVCTG8YxAFY9Bek0tf2WKqxC.vaqQhaDZo6hoCnLc-sY4Ycd5Kx2T7K_X85nzh3uczPE&dib_tag=se&keywords=headphones&qid=1751887841&sprefix=headphones%2Caps%2C335&sr=8-67&xpid=FAKMVZkuWs17S https://www.amazon.com/JOYWISE-Bluetooth-Headphones-Earphones-Waterproof/dp/B0CTY16FMX/ref=cs_sr_dp_2?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.tMrwHJFmTaQNG_efIYKxyTaNCxQl-zhmoPbSGlHQYPynr6FZtoaELSrwCugB_fuOhHWB1U4MPlktyTDtEVwmVcNIRwoXN8CGPlzeIR7x6e1r6BfAEAPq4oVB_nZ1lCVyzLuJfZhnUAS52Npr5k-g-zJusxXPZnSK8rIPnBLCeVCTG8YxAFY9Bek0tf2WKqxC.vaqQhaDZo6hoCnLc-sY4Ycd5Kx2T7K_X85nzh3uczPE&dib_tag=se&keywords=headphones&qid=1751887841&sprefix=headphones%2Caps%2C335&sr=8-67&xpid=FAKMVZkuWs17S https://www.amazon.com/JOYWISE-Bluetooth-Headphones-Earphones-Waterproof/dp/B0CB3WJ9PV/ref=cs_sr_dp_3?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.tMrwHJFmTaQNG_efIYKxyTaNCxQl-zhmoPbSGlHQYPynr6FZtoaELSrwCugB_fuOhHWB1U4MPlktyTDtEVwmVcNIRwoXN8CGPlzeIR7x6e1r6BfAEAPq4oVB_nZ1lCVyzLuJfZhnUAS52Npr5k-g-zJusxXPZnSK8rIPnBLCeVCTG8YxAFY9Bek0tf2WKqxC.vaqQhaDZo6hoCnLc-sY4Ycd5Kx2T7K_X85nzh3uczPE&dib_tag=se&keywords=headphones&qid=1751887841&sprefix=headphones%2Caps%2C335&sr=8-67&xpid=FAKMVZkuWs17S https://www.amazon.com/JOYWISE-Bluetooth-Headphones-Earphones-Waterproof/dp/B0CTXZ8WVR/ref=cs_sr_dp_4?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.tMrwHJFmTaQNG_efIYKxyTaNCxQl-zhmoPbSGlHQYPynr6FZtoaELSrwCugB_fuOhHWB1U4MPlktyTDtEVwmVcNIRwoXN8CGPlzeIR7x6e1r6BfAEAPq4oVB_nZ1lCVyzLuJfZhnUAS52Npr5k-g-zJusxXPZnSK8rIPnBLCeVCTG8YxAFY9Bek0tf2WKqxC.vaqQhaDZo6hoCnLc-sY4Ycd5Kx2T7K_X85nzh3uczPE&dib_tag=se&keywords=headphones&qid=1751887841&sprefix=headphones%2Caps%2C335&sr=8-67&xpid=FAKMVZkuWs17S`
    },
    {
      title: `JBL Endurance Run 2 Wired - Waterproof Wired Sports in-Ear Headphones, Pure Bass Sound, Hands-Free Calls, Never Hurt. Never Fall Out. (Black)`,
      image: `https://m.media-amazon.com/images/I/41nj8ktMOaL._AC_UY218_.jpg`,
      price: `$14.95 $19.95`,
      rating: `4.5`,
      count: `(16.8K) $14.95$14.95 List: $19.95`,
      link: `https://www.amazon.com/deals https://www.amazon.com/JBL-Endurance-Run-Wired-Ear/dp/B0C5NQSPMN/ref=cs_sr_dp_1?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.tMrwHJFmTaQNG_efIYKxyTaNCxQl-zhmoPbSGlHQYPynr6FZtoaELSrwCugB_fuOhHWB1U4MPlktyTDtEVwmVcNIRwoXN8CGPlzeIR7x6e1r6BfAEAPq4oVB_nZ1lCVyzLuJfZhnUAS52Npr5k-g-zJusxXPZnSK8rIPnBLCeVCTG8YxAFY9Bek0tf2WKqxC.vaqQhaDZo6hoCnLc-sY4Ycd5Kx2T7K_X85nzh3uczPE&dib_tag=se&keywords=headphones&qid=1751887841&sprefix=headphones%2Caps%2C335&sr=8-69&xpid=FAKMVZkuWs17S https://www.amazon.com/JBL-Endurance-Run-Wired-Ear/dp/B07NVXJNHG/ref=cs_sr_dp_2?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.tMrwHJFmTaQNG_efIYKxyTaNCxQl-zhmoPbSGlHQYPynr6FZtoaELSrwCugB_fuOhHWB1U4MPlktyTDtEVwmVcNIRwoXN8CGPlzeIR7x6e1r6BfAEAPq4oVB_nZ1lCVyzLuJfZhnUAS52Npr5k-g-zJusxXPZnSK8rIPnBLCeVCTG8YxAFY9Bek0tf2WKqxC.vaqQhaDZo6hoCnLc-sY4Ycd5Kx2T7K_X85nzh3uczPE&dib_tag=se&keywords=headphones&qid=1751887841&sprefix=headphones%2Caps%2C335&sr=8-69&xpid=FAKMVZkuWs17S https://www.amazon.com/JBL-Endurance-Run-Wired-Ear/dp/B07B4G7DNY/ref=cs_sr_dp_3?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.tMrwHJFmTaQNG_efIYKxyTaNCxQl-zhmoPbSGlHQYPynr6FZtoaELSrwCugB_fuOhHWB1U4MPlktyTDtEVwmVcNIRwoXN8CGPlzeIR7x6e1r6BfAEAPq4oVB_nZ1lCVyzLuJfZhnUAS52Npr5k-g-zJusxXPZnSK8rIPnBLCeVCTG8YxAFY9Bek0tf2WKqxC.vaqQhaDZo6hoCnLc-sY4Ycd5Kx2T7K_X85nzh3uczPE&dib_tag=se&keywords=headphones&qid=1751887841&sprefix=headphones%2Caps%2C335&sr=8-69&xpid=FAKMVZkuWs17S https://www.amazon.com/JBL-Endurance-Run-Wired-Ear/dp/B07QVF16RN/ref=cs_sr_dp_4?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.tMrwHJFmTaQNG_efIYKxyTaNCxQl-zhmoPbSGlHQYPynr6FZtoaELSrwCugB_fuOhHWB1U4MPlktyTDtEVwmVcNIRwoXN8CGPlzeIR7x6e1r6BfAEAPq4oVB_nZ1lCVyzLuJfZhnUAS52Npr5k-g-zJusxXPZnSK8rIPnBLCeVCTG8YxAFY9Bek0tf2WKqxC.vaqQhaDZo6hoCnLc-sY4Ycd5Kx2T7K_X85nzh3uczPE&dib_tag=se&keywords=headphones&qid=1751887841&sprefix=headphones%2Caps%2C335&sr=8-69&xpid=FAKMVZkuWs17S https://www.amazon.com/JBL-Endurance-Run-Wired-Ear/dp/B07B4FZS3Q/ref=cs_sr_dp_5?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.tMrwHJFmTaQNG_efIYKxyTaNCxQl-zhmoPbSGlHQYPynr6FZtoaELSrwCugB_fuOhHWB1U4MPlktyTDtEVwmVcNIRwoXN8CGPlzeIR7x6e1r6BfAEAPq4oVB_nZ1lCVyzLuJfZhnUAS52Npr5k-g-zJusxXPZnSK8rIPnBLCeVCTG8YxAFY9Bek0tf2WKqxC.vaqQhaDZo6hoCnLc-sY4Ycd5Kx2T7K_X85nzh3uczPE&dib_tag=se&keywords=headphones&qid=1751887841&sprefix=headphones%2Caps%2C335&sr=8-69&xpid=FAKMVZkuWs17S`
    }
  ];

  const pages = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold text-yellow-600 mb-6 text-center">Headphones – Page 7</h1>
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
            <button className={`px-3 py-1 border rounded ${p === 7 ? 'bg-yellow-400 text-white' : 'bg-white text-yellow-600'}`}>
              {p}
            </button>
          </Link>
        ))}
    
      </div>
    </main>
  );
}