import Link from "next/link";

export default function LaptopPage9() {
  const laptops = [
    {
      title: `Amazon Basics Laptop Bag Sleeve Case Cover Pouch for Men & Women | 15.6 Inch Laptop/MacBook, Office/College Laptop Bag | Side Handle | Multiple Pockets | Water Repellent | Shock Absorber (Black)`,
      image: `https://m.media-amazon.com/images/I/814V5+Ve3VL._AC_UY218_.jpg`,
      price: `₹259`,
      rating: `4.2`,
      count: `(678)`,
      link: `https://www.amazon.in/MacBook-College-Multiple-Repellent-Absorber/dp/B0CPJ7TKSB/ref=sr_1_37?crid=102YFPKZ8SCP8&dib=eyJ2IjoiMSJ9.p028LiN5zkji4vWL4SfgIq3WucsLQrhJXoZqkvB1DIjGjHj071QN20LucGBJIEps.gzHr6x_iYkplpnoQ6M17iy4e8kw98bKDCILRQQPZieo&dib_tag=se&keywords=laptops&qid=1751883242&sprefix=laptops%2Caps%2C214&sr=8-37&xpid=6G9gll5HrzPUY`
    },
    {
      title: `Dyazo 6 Angle Foldable & Portable Laptop Riser Stand Made with Aluminum Alloy |Compatible for Dell, Mac Book Air/Pro, Lenovo Acer Hp Asus & Other Laptop from 11.6 inch to 15.6 Inches- Black`,
      image: `https://m.media-amazon.com/images/I/61MSSzgvXOL._AC_UY218_.jpg`,
      price: `₹379`,
      rating: `4.3`,
      count: `(14.8K)`,
      link: `https://www.amazon.in/Dyazo-Foldable-Portable-Aluminum-Compatible/dp/B099ZXYCWP/ref=sr_1_33?crid=102YFPKZ8SCP8&dib=eyJ2IjoiMSJ9.bgfInI0cZ5NFRk_GtJaXsmUK6i_0xnS2j1z5t21akvI0GhaJGr7Hd8lhHBuYK8IRUjFAP7ySD0TkTLNvpPRj_D7izezotTFLyZItebMmheQ5OjiuM0S9l8tVg49jZ6Kr7VMO1oRXLCVJk_uaqoqMCGdvWzgPP8_UjzCkvSzcg09mag8cB9jlV0L15aFpj-pT.yeeqjiJolTaCbf_zVf99MT9EwCqMOvbPvQkjqS92fNs&dib_tag=se&keywords=laptops&qid=1751883242&sprefix=laptops%2Caps%2C214&sr=8-33&xpid=6G9gll5HrzPUY`
    },
    {
      title: `Lenovo IdeaPad Slim 3, Intel Core i3, 12th Gen, 8GB RAM, 512GB SSD, FHD, 15.6\"/39.62cm, Windows 11, Office Home 2024, Arctic Grey, 1.63Kg, 82RK01ABIN, Intel UHD Graphics, 1Yr ADP Free Laptop`,
      image: `https://m.media-amazon.com/images/I/81+SKGgJ9yL._AC_UY218_.jpg`,
      price: `₹36,190`,
      rating: `4.0`,
      count: `(493)`,
      link: `https://www.amazon.in/Lenovo-IdeaPad-39-62cm-Warranty-82RK006DIN/dp/B0B4JPC8GT/ref=sr_1_34?crid=102YFPKZ8SCP8&dib=eyJ2IjoiMSJ9.bgfInI0cZ5NFRk_GtJaXsmUK6i_0xnS2j1z5t21akvI0GhaJGr7Hd8lhHBuYK8IRUjFAP7ySD0TkTLNvpPRj_D7izezotTFLyZItebMmheQ5OjiuM0S9l8tVg49jZ6Kr7VMO1oRXLCVJk_uaqoqMCGdvWzgPP8_UjzCkvSzcg09mag8cB9jlV0L15aFpj-pT.yeeqjiJolTaCbf_zVf99MT9EwCqMOvbPvQkjqS92fNs&dib_tag=se&keywords=laptops&qid=1751883242&sprefix=laptops%2Caps%2C214&sr=8-34&xpid=6G9gll5HrzPUY`
    },
    {
      title: `EDNITA Mini Laptop Stand for Desk | Portable Metal PC Desk Stand, Aluminium Cooling Pad Mini Clip Compatible with MacBook Apple Laptop, Lenovo, Dell, Hp, Acer & Other Laptops Pack of-2 (Silver)`,
      image: `https://m.media-amazon.com/images/I/61ZejdSL77L._AC_UY218_.jpg`,
      price: `₹198`,
      rating: `4.3`,
      count: `(354)`,
      link: `https://www.amazon.in/EDNITA-Portable-Aluminium-Cooling-Compatible/dp/B0D7Z944C7/ref=sr_1_35?crid=102YFPKZ8SCP8&dib=eyJ2IjoiMSJ9.bgfInI0cZ5NFRk_GtJaXsmUK6i_0xnS2j1z5t21akvI0GhaJGr7Hd8lhHBuYK8IRUjFAP7ySD0TkTLNvpPRj_D7izezotTFLyZItebMmheQ5OjiuM0S9l8tVg49jZ6Kr7VMO1oRXLCVJk_uaqoqMCGdvWzgPP8_UjzCkvSzcg09mag8cB9jlV0L15aFpj-pT.yeeqjiJolTaCbf_zVf99MT9EwCqMOvbPvQkjqS92fNs&dib_tag=se&keywords=laptops&qid=1751883242&sprefix=laptops%2Caps%2C214&sr=8-35&xpid=6G9gll5HrzPUY`
    },
    {
      title: `LS LAPSTER Quality Assured Lapster Universal Silicone 15.6\" Keyboard Protector Skin|| Keyboard Dust Cover|| Keyboard Skin for 15.6\" Laptop 15.6\" Keyguard 3.93 x 11.81 x 0.39 inches`,
      image: `https://m.media-amazon.com/images/I/61VI+sDx5KL._AC_UY218_.jpg`,
      price: `₹99`,
      rating: `3.4`,
      count: `(10K)`,
      link: `https://www.amazon.in/Universal-Silicone-Keyboard-Protector-Keyguard/dp/B0994GP1CX/ref=sr_1_36?crid=102YFPKZ8SCP8&dib=eyJ2IjoiMSJ9.bgfInI0cZ5NFRk_GtJaXsmUK6i_0xnS2j1z5t21akvI0GhaJGr7Hd8lhHBuYK8IRUjFAP7ySD0TkTLNvpPRj_D7izezotTFLyZItebMmheQ5OjiuM0S9l8tVg49jZ6Kr7VMO1oRXLCVJk_uaqoqMCGdvWzgPP8_UjzCkvSzcg09mag8cB9jlV0L15aFpj-pT.yeeqjiJolTaCbf_zVf99MT9EwCqMOvbPvQkjqS92fNs&dib_tag=se&keywords=laptops&qid=1751883242&sprefix=laptops%2Caps%2C214&sr=8-36&xpid=6G9gll5HrzPUY`
    },
    {
      title: `Zebronics NC5500D Powerful Laptop Cooler with Dual 125mm Fans, Silent Operation, Adjustable Fan Speed, Display, Controls, USB, 5 Step Retractable Stand and Mobile Holder`,
      image: `https://m.media-amazon.com/images/I/81RSzw0VAeL._AC_UY218_.jpg`,
      price: `₹799`,
      rating: `3.8`,
      count: `(1.7K)`,
      link: `https://www.amazon.in/Zebronics-Powerful-Operation-Adjustable-Retractable/dp/B0C663VVP1/ref=sr_1_37?crid=102YFPKZ8SCP8&dib=eyJ2IjoiMSJ9.bgfInI0cZ5NFRk_GtJaXsmUK6i_0xnS2j1z5t21akvI0GhaJGr7Hd8lhHBuYK8IRUjFAP7ySD0TkTLNvpPRj_D7izezotTFLyZItebMmheQ5OjiuM0S9l8tVg49jZ6Kr7VMO1oRXLCVJk_uaqoqMCGdvWzgPP8_UjzCkvSzcg09mag8cB9jlV0L15aFpj-pT.yeeqjiJolTaCbf_zVf99MT9EwCqMOvbPvQkjqS92fNs&dib_tag=se&keywords=laptops&qid=1751883242&sprefix=laptops%2Caps%2C214&sr=8-37&xpid=6G9gll5HrzPUY`
    },
    {
      title: `Lenovo IdeaPad Slim 3 13th Gen Intel Core i5-13420H 15.3\"(38.8cm) WUXGA IPS Laptop(16GB RAM/512GB SSD/Win 11/Office Home 2024/Backlit/1Yr ADP Free/Top Metal Cover & IR Camera/Grey/1.6Kg), 83K100CGIN`,
      image: `https://m.media-amazon.com/images/I/71D9HSayVSL._AC_UY218_.jpg`,
      price: `₹60,990`,
      rating: `4.0`,
      count: `(38)`,
      link: `https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo4Mjc3NTE5MjMyOTM0MDEwOjE3NTE4ODMyNDI6c3BfbXRmOjMwMDU2OTY5NDMwMzUzMjo6MDo6&url=%2FLenovo-IdeaPad-i5-13420H-Backlit-83K100CGIN%2Fdp%2FB0F637DPFW%2Fref%3Dsr_1_38_sspa%3Fcrid%3D102YFPKZ8SCP8%26dib%3DeyJ2IjoiMSJ9.bgfInI0cZ5NFRk_GtJaXsmUK6i_0xnS2j1z5t21akvI0GhaJGr7Hd8lhHBuYK8IRUjFAP7ySD0TkTLNvpPRj_D7izezotTFLyZItebMmheQ5OjiuM0S9l8tVg49jZ6Kr7VMO1oRXLCVJk_uaqoqMCGdvWzgPP8_UjzCkvSzcg09mag8cB9jlV0L15aFpj-pT.yeeqjiJolTaCbf_zVf99MT9EwCqMOvbPvQkjqS92fNs%26dib_tag%3Dse%26keywords%3Dlaptops%26qid%3D1751883242%26sprefix%3Dlaptops%252Caps%252C214%26sr%3D8-38-spons%26xpid%3D6G9gll5HrzPUY%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1&cr=DUB`
    },
    {
      title: `HP Victus, 13th Gen Intel Core i5-13420H, 6 GB RTX 3050 Gaming Laptop, (Upgradable 16GB DDR4, 512GB SSD) 144Hz,300 nits, IPS, 15.6inch(39.6cm) FHD, Win 11, M365* Office24, Mica Silver,2.3kg, fa2700TX`,
      image: `https://m.media-amazon.com/images/I/71UDN7Akd9L._AC_UY218_.jpg`,
      price: `₹70,990`,
      rating: `2.5`,
      count: `(4)`,
      link: `https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo4Mjc3NTE5MjMyOTM0MDEwOjE3NTE4ODMyNDI6c3BfbXRmOjMwMDQ5NTM0NDY2OTEzMjo6MDo6&url=%2FHP-i5-13420H-Upgradable-15-6inch-fa2700TX%2Fdp%2FB0DTYZ2CG8%2Fref%3Dsr_1_39_sspa%3Fcrid%3D102YFPKZ8SCP8%26dib%3DeyJ2IjoiMSJ9.bgfInI0cZ5NFRk_GtJaXsmUK6i_0xnS2j1z5t21akvI0GhaJGr7Hd8lhHBuYK8IRUjFAP7ySD0TkTLNvpPRj_D7izezotTFLyZItebMmheQ5OjiuM0S9l8tVg49jZ6Kr7VMO1oRXLCVJk_uaqoqMCGdvWzgPP8_UjzCkvSzcg09mag8cB9jlV0L15aFpj-pT.yeeqjiJolTaCbf_zVf99MT9EwCqMOvbPvQkjqS92fNs%26dib_tag%3Dse%26keywords%3Dlaptops%26qid%3D1751883242%26sprefix%3Dlaptops%252Caps%252C214%26sr%3D8-39-spons%26xpid%3D6G9gll5HrzPUY%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1&cr=DUB`
    }
  ];

  const pages = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold text-yellow-600 mb-6 text-center">Laptops – Page 9</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {laptops.map((laptop, index) => (
          <div key={index} className="border rounded-lg p-4 shadow bg-white">
            <img src={laptop.image} alt={laptop.title} className="w-full h-48 object-contain mb-2" />
            <h2 className="text-lg font-semibold text-yellow-700">{laptop.title}</h2>
            <p className="text-sm text-gray-600 mb-1">{laptop.price} — ⭐ {laptop.rating} {laptop.count}</p>
            <a href={laptop.link} target="_blank" rel="noopener noreferrer"
              className="inline-block mt-2 bg-yellow-500 hover:bg-yellow-600 text-white text-sm px-4 py-2 rounded">
              Buy on Amazon
            </a>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-center gap-2 flex-wrap">

        {pages.map((p) => (
          <Link href={`/laptops/page/${p}`} key={p}>
            <button className={`px-3 py-1 border rounded ${p === 9 ? 'bg-yellow-400 text-white' : 'bg-white text-yellow-600'}`}>
              {p}
            </button>
          </Link>
        ))}
    
      </div>
    </main>
  );
}