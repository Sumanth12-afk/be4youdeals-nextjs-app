import Link from "next/link";

export default function LaptopPage4() {
  const laptops = [
    {
      title: `Lenovo V14 G3, 12th Gen Intel Core i7-1255U Upto 4.70Ghz (16GB RAM/512GB SSD/Windows 11) 14.0\" FHD Display Thin and Light Laptop/Iron Grey /1.70 kg 1 Year Onsite Brand Warranty`,
      image: `https://m.media-amazon.com/images/I/519RoeX1P4L._AC_UY218_.jpg`,
      price: `₹45,990`,
      rating: `4.0`,
      count: `(55)`,
      link: `https://www.amazon.in/Lenovo-i7-1255U-4-70Ghz-Windows-Warranty/dp/B0F32ZBDNJ/ref=sr_1_18?crid=102YFPKZ8SCP8&dib=eyJ2IjoiMSJ9.Go3x0Lm7fOW24YmXrgcerw9S_neIZ54NQ3dDnUm3ppPQUK7vbn_T_AqK15Z5S4TbgrFdDMTUNMbMQsAnIDQBRRhXQkbHsIcS7jeBBu89u2v8O8HdSsNGQNUhyIFyVEqFhkIT5XU4RGkz4yKUSzJ_mVeOjGLCARLyvSso_9tSJSnNj8de7Ri4gv6-IJ6BFYyKYBJryJHKLavTx05A4hIo5Xf_7kT9yH4CuDvC9C3H7Ww.pPeKs1ZS8k9xTLINExq8SnRn6wMr1dnGSXHTowOmqqk&dib_tag=se&keywords=laptops&qid=1751882837&sprefix=laptops%2Caps%2C214&sr=8-18`
    },
    {
      title: `Acer Aspire 3 Laptop Intel Core Celeron N4500 Processor Laptop (8 GB LPDDR4X SDRAM/256 GB SSD/Win11 Home/38 WHR/HD Webcam) A324-45 with 35.56 cm (14\") HD Display, Pure Silver, 1.3 KG`,
      image: `https://m.media-amazon.com/images/I/61Y8j1QN5YL._AC_UY218_.jpg`,
      price: `₹21,490`,
      rating: `3.4`,
      count: `(397)`,
      link: `https://www.amazon.in/Acer-Celeron-Processor-LPDDR4X-A324-45/dp/B0D7PSYS6B/ref=sr_1_19?crid=102YFPKZ8SCP8&dib=eyJ2IjoiMSJ9.Go3x0Lm7fOW24YmXrgcerw9S_neIZ54NQ3dDnUm3ppPQUK7vbn_T_AqK15Z5S4TbgrFdDMTUNMbMQsAnIDQBRRhXQkbHsIcS7jeBBu89u2v8O8HdSsNGQNUhyIFyVEqFhkIT5XU4RGkz4yKUSzJ_mVeOjGLCARLyvSso_9tSJSnNj8de7Ri4gv6-IJ6BFYyKYBJryJHKLavTx05A4hIo5Xf_7kT9yH4CuDvC9C3H7Ww.pPeKs1ZS8k9xTLINExq8SnRn6wMr1dnGSXHTowOmqqk&dib_tag=se&keywords=laptops&qid=1751882837&sprefix=laptops%2Caps%2C214&sr=8-19`
    },
    {
      title: `JioBook 11 with Lifetime Office/Android 4G Laptop Mediatek 8788 (JioOS) / Octa-core/ 4GB RAM / 64 eMMC Storage/Thin and Light Laptop (11.6 inch, 990 Grams)/ Dual Band WiFi + SIM/Blue`,
      image: `https://m.media-amazon.com/images/I/61IDcxw27+L._AC_UY218_.jpg`,
      price: `₹12,990`,
      rating: `3.0`,
      count: `(400)`,
      link: `https://www.amazon.in/JioBook-Octa-Core-LPDDR4-JioOS-Expandable/dp/B0CKX9PY1H/ref=sr_1_20?crid=102YFPKZ8SCP8&dib=eyJ2IjoiMSJ9.Go3x0Lm7fOW24YmXrgcerw9S_neIZ54NQ3dDnUm3ppPQUK7vbn_T_AqK15Z5S4TbgrFdDMTUNMbMQsAnIDQBRRhXQkbHsIcS7jeBBu89u2v8O8HdSsNGQNUhyIFyVEqFhkIT5XU4RGkz4yKUSzJ_mVeOjGLCARLyvSso_9tSJSnNj8de7Ri4gv6-IJ6BFYyKYBJryJHKLavTx05A4hIo5Xf_7kT9yH4CuDvC9C3H7Ww.pPeKs1ZS8k9xTLINExq8SnRn6wMr1dnGSXHTowOmqqk&dib_tag=se&keywords=laptops&qid=1751882837&sprefix=laptops%2Caps%2C214&sr=8-20`
    },
    {
      title: `HP Victus, 12th Gen Intel Core i7-12650H,NVIDIA RTX 3050, 16GB DDR4, 512GB SSD (Win11, Office21, Blue,2.3kg) 144Hz, 9MS, IPS, 15.6-inch(39.6cm), Flicker-Free Gaming Laptop, Enhanced Cooling, fa1382TX`,
      image: `https://m.media-amazon.com/images/I/718zbAOG7HL._AC_UY218_.jpg`,
      price: `₹69,490`,
      rating: `3.5`,
      count: `(29)`,
      link: `https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo0ODExNTcwMzIzNzQ3NjY2OjE3NTE4ODI4Mzc6c3BfYnRmOjMwMDUzMzUxNjE0MTMzMjo6MDo6&url=%2FHP-i7-12650H-15-6-inch-Response-fa1382TX%2Fdp%2FB0D81CWDSX%2Fref%3Dsr_1_21_sspa%3Fcrid%3D102YFPKZ8SCP8%26dib%3DeyJ2IjoiMSJ9.Go3x0Lm7fOW24YmXrgcerw9S_neIZ54NQ3dDnUm3ppPQUK7vbn_T_AqK15Z5S4TbgrFdDMTUNMbMQsAnIDQBRRhXQkbHsIcS7jeBBu89u2v8O8HdSsNGQNUhyIFyVEqFhkIT5XU4RGkz4yKUSzJ_mVeOjGLCARLyvSso_9tSJSnNj8de7Ri4gv6-IJ6BFYyKYBJryJHKLavTx05A4hIo5Xf_7kT9yH4CuDvC9C3H7Ww.pPeKs1ZS8k9xTLINExq8SnRn6wMr1dnGSXHTowOmqqk%26dib_tag%3Dse%26keywords%3Dlaptops%26qid%3D1751882837%26sprefix%3Dlaptops%252Caps%252C214%26sr%3D8-21-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9idGY%26psc%3D1&cr=DUB`
    },
    {
      title: `HP Smartchoice Victus, AMD Ryzen 5 8645HS, 6GB RTX 3050 AI Gaming Laptop, 31 TOPS Upgradable (Upto 32GB) 16GB DDR5, 512GB SSD, 144Hz,IPS, 15.6\"/39.6cm, FHD, Win11, M365* Office24,Blue, 2.3kg, fb3009AX`,
      image: `https://m.media-amazon.com/images/I/71rqzBi-2CL._AC_UY218_.jpg`,
      price: `₹67,990`,
      rating: `3.3`,
      count: `(17)`,
      link: `https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo0ODExNTcwMzIzNzQ3NjY2OjE3NTE4ODI4Mzc6c3BfYnRmOjMwMDU4OTI0MzQ0NTEzMjo6MDo6&url=%2FHP-Smartchoice-Upgradable-Office24-fb3009AX%2Fdp%2FB0DTYX4VMP%2Fref%3Dsr_1_22_sspa%3Fcrid%3D102YFPKZ8SCP8%26dib%3DeyJ2IjoiMSJ9.Go3x0Lm7fOW24YmXrgcerw9S_neIZ54NQ3dDnUm3ppPQUK7vbn_T_AqK15Z5S4TbgrFdDMTUNMbMQsAnIDQBRRhXQkbHsIcS7jeBBu89u2v8O8HdSsNGQNUhyIFyVEqFhkIT5XU4RGkz4yKUSzJ_mVeOjGLCARLyvSso_9tSJSnNj8de7Ri4gv6-IJ6BFYyKYBJryJHKLavTx05A4hIo5Xf_7kT9yH4CuDvC9C3H7Ww.pPeKs1ZS8k9xTLINExq8SnRn6wMr1dnGSXHTowOmqqk%26dib_tag%3Dse%26keywords%3Dlaptops%26qid%3D1751882837%26sprefix%3Dlaptops%252Caps%252C214%26sr%3D8-22-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9idGY%26psc%3D1&cr=DUB`
    },
    {
      title: `ShineXPro Microfiber Cloth For Car - Puremagic 1100 Gsm Twisted Loop Super Absorbent Towel - Edgeless Design With Plush Pile, Lint Free Cloth For Drying & Detailing, Transparent`,
      image: `https://m.media-amazon.com/images/I/71tPu1JwI8L._AC_UL640_QL65_.jpg https://m.media-amazon.com/images/I/71tPu1JwI8L._AC_UL640_QL65_.jpg`,
      price: `₹599`,
      rating: `4.4`,
      count: `(8.3K)`,
      link: ``
    },
    {
      title: `ShineXPro Microfiber Cloth For Car - Puremagic 1100 Gsm Twisted Loop Super Absorbent Towel - Edgeless Design With Plush Pile, Lint Free Cloth For Drying & Detailing, Transparent`,
      image: `https://m.media-amazon.com/images/I/71tPu1JwI8L._AC_UL640_QL65_.jpg https://m.media-amazon.com/images/I/71tPu1JwI8L._AC_UL640_QL65_.jpg`,
      price: `₹599`,
      rating: `4.4`,
      count: `(8.3K)`,
      link: ``
    },
    {
      title: `HP 15, 13th Gen Intel Core i5-1335U (16GB DDR4, 512GB SSD) FHD, Anti-Glare, Micro-Edge, 15.6''/39.6cm, Win11, M365 Basic(1yr)* Office24, Silver,1.59kg, fd0577TU, Iris Xe, FHD Camera w/Shutter Laptop`,
      image: `https://m.media-amazon.com/images/I/71bagLp2sXL._AC_UY218_.jpg`,
      price: `₹55,990`,
      rating: `3.6`,
      count: `(20)`,
      link: `https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo0MjE3NTQxMzQzODM3NjE4OjE3NTE4ODMyMjE6c3BfYXRmX25leHQ6MzAwNTU5NjYxMTA1ODMyOjowOjo&url=%2FHP-i5-1335U-Anti-Glare-Micro-Edge-fd0577TU%2Fdp%2FB0F4R6H3NB%2Fref%3Dsr_1_17_sspa%3Fcrid%3D102YFPKZ8SCP8%26dib%3DeyJ2IjoiMSJ9.74iU4IFkr14wypO0hA2myTQVosQC-1XdYnI8ZWZ0a4nGjHj071QN20LucGBJIEps.y6_jNvoW_3ZCO3nAYOqx_IZaRyQKV8i4vRhnfOKxKO0%26dib_tag%3Dse%26keywords%3Dlaptops%26qid%3D1751883221%26sprefix%3Dlaptops%252Caps%252C214%26sr%3D8-17-spons%26xpid%3D6G9gll5HrzPUY%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGZfbmV4dA%26psc%3D1&cr=DUB`
    }
  ];

  const pages = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold text-yellow-600 mb-6 text-center">Laptops – Page 4</h1>
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
            <button className={`px-3 py-1 border rounded ${p === 4 ? 'bg-yellow-400 text-white' : 'bg-white text-yellow-600'}`}>
              {p}
            </button>
          </Link>
        ))}
    
      </div>
    </main>
  );
}