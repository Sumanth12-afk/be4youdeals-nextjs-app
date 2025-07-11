import Link from "next/link";

export default function LaptopPage1() {
  const laptops = [
    {
      title: `HP 15, 13th Gen Intel Core i5-1335U (16GB DDR4, 512GB SSD) FHD, Anti-Glare, Micro-Edge, 15.6''/39.6cm, Win11, M365 Basic(1yr)* Office24, Silver,1.59kg, fd0577TU, Iris Xe, FHD Camera w/Shutter Laptop`,
      image: `https://m.media-amazon.com/images/I/71bagLp2sXL._AC_UY218_.jpg`,
      price: `₹55,990`,
      rating: `3.6`,
      count: `(20)`,
      link: `https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo0ODExNTcwMzIzNzQ3NjY2OjE3NTE4ODI4Mzc6c3BfYXRmOjMwMDU1OTY2MTEwNTgzMjo6MDo6&url=%2FHP-i5-1335U-Anti-Glare-Micro-Edge-fd0577TU%2Fdp%2FB0F4R6H3NB%2Fref%3Dsr_1_1_sspa%3Fcrid%3D102YFPKZ8SCP8%26dib%3DeyJ2IjoiMSJ9.Go3x0Lm7fOW24YmXrgcerw9S_neIZ54NQ3dDnUm3ppPQUK7vbn_T_AqK15Z5S4TbgrFdDMTUNMbMQsAnIDQBRRhXQkbHsIcS7jeBBu89u2v8O8HdSsNGQNUhyIFyVEqFhkIT5XU4RGkz4yKUSzJ_mVeOjGLCARLyvSso_9tSJSnNj8de7Ri4gv6-IJ6BFYyKYBJryJHKLavTx05A4hIo5Xf_7kT9yH4CuDvC9C3H7Ww.pPeKs1ZS8k9xTLINExq8SnRn6wMr1dnGSXHTowOmqqk%26dib_tag%3Dse%26keywords%3Dlaptops%26qid%3D1751882837%26sprefix%3Dlaptops%252Caps%252C214%26sr%3D8-1-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1&cr=DUB`
    },
    {
      title: `HP Victus, 13th Gen Intel Core i5-13420H, 6 GB RTX 3050 Gaming Laptop, (Upgradable 16GB DDR4, 512GB SSD) 144Hz,300 nits, IPS, 15.6inch(39.6cm) FHD, Win 11, M365* Office24, Mica Silver,2.3kg, fa2700TX`,
      image: `https://m.media-amazon.com/images/I/71UDN7Akd9L._AC_UY218_.jpg`,
      price: `₹70,990`,
      rating: `2.5`,
      count: `(4)`,
      link: `https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo0ODExNTcwMzIzNzQ3NjY2OjE3NTE4ODI4Mzc6c3BfYXRmOjMwMDQ5NTM0NDY2OTEzMjo6MDo6&url=%2FHP-i5-13420H-Upgradable-15-6inch-fa2700TX%2Fdp%2FB0DTYZ2CG8%2Fref%3Dsr_1_2_sspa%3Fcrid%3D102YFPKZ8SCP8%26dib%3DeyJ2IjoiMSJ9.Go3x0Lm7fOW24YmXrgcerw9S_neIZ54NQ3dDnUm3ppPQUK7vbn_T_AqK15Z5S4TbgrFdDMTUNMbMQsAnIDQBRRhXQkbHsIcS7jeBBu89u2v8O8HdSsNGQNUhyIFyVEqFhkIT5XU4RGkz4yKUSzJ_mVeOjGLCARLyvSso_9tSJSnNj8de7Ri4gv6-IJ6BFYyKYBJryJHKLavTx05A4hIo5Xf_7kT9yH4CuDvC9C3H7Ww.pPeKs1ZS8k9xTLINExq8SnRn6wMr1dnGSXHTowOmqqk%26dib_tag%3Dse%26keywords%3Dlaptops%26qid%3D1751882837%26sprefix%3Dlaptops%252Caps%252C214%26sr%3D8-2-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1&cr=DUB`
    },
    {
      title: `Lenovo IdeaPad Slim 3, Intel Core i5-12450H, 12th Gen, 16GB RAM, 512GB SSD, FHD IPS, 14\"/35.5cm, Windows 11, MS Office Home 2024, Grey, 1.37Kg, 83EQ0073IN, 1Yr ADP Free, Thin & Light Laptop`,
      image: `https://m.media-amazon.com/images/I/81fvJauBWDL._AC_UY218_.jpg`,
      price: `₹48,400`,
      rating: `3.9`,
      count: `(604)`,
      link: `https://www.amazon.in/Lenovo-IdeaPad-i5-12450H-Windows-83EQ0073IN/dp/B0DRNSHRKK/ref=sr_1_3?crid=102YFPKZ8SCP8&dib=eyJ2IjoiMSJ9.Go3x0Lm7fOW24YmXrgcerw9S_neIZ54NQ3dDnUm3ppPQUK7vbn_T_AqK15Z5S4TbgrFdDMTUNMbMQsAnIDQBRRhXQkbHsIcS7jeBBu89u2v8O8HdSsNGQNUhyIFyVEqFhkIT5XU4RGkz4yKUSzJ_mVeOjGLCARLyvSso_9tSJSnNj8de7Ri4gv6-IJ6BFYyKYBJryJHKLavTx05A4hIo5Xf_7kT9yH4CuDvC9C3H7Ww.pPeKs1ZS8k9xTLINExq8SnRn6wMr1dnGSXHTowOmqqk&dib_tag=se&keywords=laptops&qid=1751882837&sprefix=laptops%2Caps%2C214&sr=8-3`
    },
    {
      title: `Dell Inspiron 15-3530 Laptop - 15.6 inch FHD, 13th Gen Intel Core i3-1305U, 8GB RAM, 512GB SSD, Win 11 + Office H&S 2024, Standard Keyboard, Platinum Silver, 1 Year Onsite Hardware Service, 1.62 Kg`,
      image: `https://m.media-amazon.com/images/I/61j8sfFCCPL._AC_UY218_.jpg`,
      price: `₹35,590`,
      rating: `3.9`,
      count: `(160)`,
      link: `https://www.amazon.in/Dell-Inspiron-15-3530-Laptop-i3-1305U/dp/B0DSFRYRQY/ref=sr_1_4?crid=102YFPKZ8SCP8&dib=eyJ2IjoiMSJ9.Go3x0Lm7fOW24YmXrgcerw9S_neIZ54NQ3dDnUm3ppPQUK7vbn_T_AqK15Z5S4TbgrFdDMTUNMbMQsAnIDQBRRhXQkbHsIcS7jeBBu89u2v8O8HdSsNGQNUhyIFyVEqFhkIT5XU4RGkz4yKUSzJ_mVeOjGLCARLyvSso_9tSJSnNj8de7Ri4gv6-IJ6BFYyKYBJryJHKLavTx05A4hIo5Xf_7kT9yH4CuDvC9C3H7Ww.pPeKs1ZS8k9xTLINExq8SnRn6wMr1dnGSXHTowOmqqk&dib_tag=se&keywords=laptops&qid=1751882837&sprefix=laptops%2Caps%2C214&sr=8-4`
    },
    {
      title: `Acer Aspire 3, Intel Core Celeron N4500, 8GB LPDDR4X, 512GB SSD, HD, 14\"/35.56cm, Windows 11 Home, Pure Silver, 1.3KG, A324-45, HD Webcam, 38 WHR Laptop`,
      image: `https://m.media-amazon.com/images/I/61Y8j1QN5YL._AC_UY218_.jpg`,
      price: `₹22,990`,
      rating: `3.4`,
      count: `(397)`,
      link: `https://www.amazon.in/Acer-Celeron-Processor-LPDDR4X-A324-45/dp/B0D7PSTHRD/ref=sr_1_5?crid=102YFPKZ8SCP8&dib=eyJ2IjoiMSJ9.Go3x0Lm7fOW24YmXrgcerw9S_neIZ54NQ3dDnUm3ppPQUK7vbn_T_AqK15Z5S4TbgrFdDMTUNMbMQsAnIDQBRRhXQkbHsIcS7jeBBu89u2v8O8HdSsNGQNUhyIFyVEqFhkIT5XU4RGkz4yKUSzJ_mVeOjGLCARLyvSso_9tSJSnNj8de7Ri4gv6-IJ6BFYyKYBJryJHKLavTx05A4hIo5Xf_7kT9yH4CuDvC9C3H7Ww.pPeKs1ZS8k9xTLINExq8SnRn6wMr1dnGSXHTowOmqqk&dib_tag=se&keywords=laptops&qid=1751882837&sprefix=laptops%2Caps%2C214&sr=8-5`
    },
    {
      title: `nan`,
      image: `https://m.media-amazon.com/images/I/71D9HSayVSL._AC_UL320_.jpg https://m.media-amazon.com/images/I/61LOOMpEgxL._AC_UL320_.jpg https://m.media-amazon.com/images/I/71Ie8YsWrFL._AC_UL320_.jpg https://m.media-amazon.com/images/I/81tmCrtiRgL._AC_UL320_.jpg`,
      price: `₹60,990 ₹76,962 ₹69,990 ₹70,990`,
      rating: `4.0 4.0 5.0 4.0`,
      count: `(38) (1.1K) (2) (605)`,
      link: `https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo3MDM0MTE5Mzk3MjEyNDQ0OjE3NTE4ODI4Mzc6c3Bfc2VhcmNoX3RoZW1hdGljOjMwMDU2OTY5NDMwMzUzMjo6MDo6&url=%2FLenovo-IdeaPad-i5-13420H-Backlit-83K100CGIN%2Fdp%2FB0F637DPFW%2Fref%3Dsxin_15_pa_sp_search_thematic_sspa%3Fcontent-id%3Damzn1.sym.739e670d-dfb3-4be0-9815-d8c5c0372e07%253Aamzn1.sym.739e670d-dfb3-4be0-9815-d8c5c0372e07%26crid%3D102YFPKZ8SCP8%26cv_ct_cx%3Dlaptops%26keywords%3Dlaptops%26pd_rd_i%3DB0F637DPFW%26pd_rd_r%3D13822b75-47c0-427b-962f-4fe60861d6d7%26pd_rd_w%3DlgIrt%26pd_rd_wg%3DcxdKi%26pf_rd_p%3D739e670d-dfb3-4be0-9815-d8c5c0372e07%26pf_rd_r%3DT4DDDDA1RMAK8P0YS5Q5%26qid%3D1751882837%26sbo%3DRZvfv%252F%252FHxDF%252BO5021pAnSA%253D%253D%26sprefix%3Dlaptops%252Caps%252C214%26sr%3D1-1-66673dcf-083f-43ba-b782-d4a436cc5cfb-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM%26psc%3D1&cr=DUB https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo3MDM0MTE5Mzk3MjEyNDQ0OjE3NTE4ODI4Mzc6c3Bfc2VhcmNoX3RoZW1hdGljOjMwMDQ1NjEyMTE0NDYzMjo6Mjo6&url=%2FDell-Smartchoice-G15-5530-Gaming-i5-13450HX%2Fdp%2FB0CRKXDX83%2Fref%3Dsxin_15_pa_sp_search_thematic_sspa%3Fcontent-id%3Damzn1.sym.739e670d-dfb3-4be0-9815-d8c5c0372e07%253Aamzn1.sym.739e670d-dfb3-4be0-9815-d8c5c0372e07%26crid%3D102YFPKZ8SCP8%26cv_ct_cx%3Dlaptops%26keywords%3Dlaptops%26pd_rd_i%3DB0CRKXDX83%26pd_rd_r%3D13822b75-47c0-427b-962f-4fe60861d6d7%26pd_rd_w%3DlgIrt%26pd_rd_wg%3DcxdKi%26pf_rd_p%3D739e670d-dfb3-4be0-9815-d8c5c0372e07%26pf_rd_r%3DT4DDDDA1RMAK8P0YS5Q5%26qid%3D1751882837%26sbo%3DRZvfv%252F%252FHxDF%252BO5021pAnSA%253D%253D%26sprefix%3Dlaptops%252Caps%252C214%26sr%3D1-2-66673dcf-083f-43ba-b782-d4a436cc5cfb-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM%26psc%3D1&cr=DUB https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo3MDM0MTE5Mzk3MjEyNDQ0OjE3NTE4ODI4Mzc6c3Bfc2VhcmNoX3RoZW1hdGljOjMwMDYxNjM0NjgxODMzMjo6Mzo6&url=%2FMSI-i7-12650H-Windows-GeForce-B12UC-2239IN%2Fdp%2FB0DQPTMBKM%2Fref%3Dsxin_15_pa_sp_search_thematic_sspa%3Fcontent-id%3Damzn1.sym.739e670d-dfb3-4be0-9815-d8c5c0372e07%253Aamzn1.sym.739e670d-dfb3-4be0-9815-d8c5c0372e07%26crid%3D102YFPKZ8SCP8%26cv_ct_cx%3Dlaptops%26keywords%3Dlaptops%26pd_rd_i%3DB0DQPTMBKM%26pd_rd_r%3D13822b75-47c0-427b-962f-4fe60861d6d7%26pd_rd_w%3DlgIrt%26pd_rd_wg%3DcxdKi%26pf_rd_p%3D739e670d-dfb3-4be0-9815-d8c5c0372e07%26pf_rd_r%3DT4DDDDA1RMAK8P0YS5Q5%26qid%3D1751882837%26sbo%3DRZvfv%252F%252FHxDF%252BO5021pAnSA%253D%253D%26sprefix%3Dlaptops%252Caps%252C214%26sr%3D1-3-66673dcf-083f-43ba-b782-d4a436cc5cfb-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM%26psc%3D1&cr=DUB https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo3MDM0MTE5Mzk3MjEyNDQ0OjE3NTE4ODI4Mzc6c3Bfc2VhcmNoX3RoZW1hdGljOjMwMDQ1NjEyMTE0NjMzMjo6NDo6&url=%2FLenovo-Smartchoice-i5-12450HX-Graphics-83GS003UIN%2Fdp%2FB0CX8XPKWJ%2Fref%3Dsxin_15_pa_sp_search_thematic_sspa%3Fcontent-id%3Damzn1.sym.739e670d-dfb3-4be0-9815-d8c5c0372e07%253Aamzn1.sym.739e670d-dfb3-4be0-9815-d8c5c0372e07%26crid%3D102YFPKZ8SCP8%26cv_ct_cx%3Dlaptops%26keywords%3Dlaptops%26pd_rd_i%3DB0CX8XPKWJ%26pd_rd_r%3D13822b75-47c0-427b-962f-4fe60861d6d7%26pd_rd_w%3DlgIrt%26pd_rd_wg%3DcxdKi%26pf_rd_p%3D739e670d-dfb3-4be0-9815-d8c5c0372e07%26pf_rd_r%3DT4DDDDA1RMAK8P0YS5Q5%26qid%3D1751882837%26sbo%3DRZvfv%252F%252FHxDF%252BO5021pAnSA%253D%253D%26sprefix%3Dlaptops%252Caps%252C214%26sr%3D1-4-66673dcf-083f-43ba-b782-d4a436cc5cfb-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM%26psc%3D1&cr=DUB`
    },
    {
      title: `nan`,
      image: `https://m.media-amazon.com/images/I/71D9HSayVSL._AC_UL320_.jpg`,
      price: `₹60,990`,
      rating: `4.0`,
      count: `(38)`,
      link: `https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo3MDM0MTE5Mzk3MjEyNDQ0OjE3NTE4ODI4Mzc6c3Bfc2VhcmNoX3RoZW1hdGljOjMwMDU2OTY5NDMwMzUzMjo6MDo6&url=%2FLenovo-IdeaPad-i5-13420H-Backlit-83K100CGIN%2Fdp%2FB0F637DPFW%2Fref%3Dsxin_15_pa_sp_search_thematic_sspa%3Fcontent-id%3Damzn1.sym.739e670d-dfb3-4be0-9815-d8c5c0372e07%253Aamzn1.sym.739e670d-dfb3-4be0-9815-d8c5c0372e07%26crid%3D102YFPKZ8SCP8%26cv_ct_cx%3Dlaptops%26keywords%3Dlaptops%26pd_rd_i%3DB0F637DPFW%26pd_rd_r%3D13822b75-47c0-427b-962f-4fe60861d6d7%26pd_rd_w%3DlgIrt%26pd_rd_wg%3DcxdKi%26pf_rd_p%3D739e670d-dfb3-4be0-9815-d8c5c0372e07%26pf_rd_r%3DT4DDDDA1RMAK8P0YS5Q5%26qid%3D1751882837%26sbo%3DRZvfv%252F%252FHxDF%252BO5021pAnSA%253D%253D%26sprefix%3Dlaptops%252Caps%252C214%26sr%3D1-1-66673dcf-083f-43ba-b782-d4a436cc5cfb-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM%26psc%3D1&cr=DUB`
    },
    {
      title: `nan`,
      image: `https://m.media-amazon.com/images/I/61LOOMpEgxL._AC_UL320_.jpg`,
      price: `₹76,962`,
      rating: `4.0`,
      count: `(1.1K)`,
      link: `https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo3MDM0MTE5Mzk3MjEyNDQ0OjE3NTE4ODI4Mzc6c3Bfc2VhcmNoX3RoZW1hdGljOjMwMDQ1NjEyMTE0NDYzMjo6Mjo6&url=%2FDell-Smartchoice-G15-5530-Gaming-i5-13450HX%2Fdp%2FB0CRKXDX83%2Fref%3Dsxin_15_pa_sp_search_thematic_sspa%3Fcontent-id%3Damzn1.sym.739e670d-dfb3-4be0-9815-d8c5c0372e07%253Aamzn1.sym.739e670d-dfb3-4be0-9815-d8c5c0372e07%26crid%3D102YFPKZ8SCP8%26cv_ct_cx%3Dlaptops%26keywords%3Dlaptops%26pd_rd_i%3DB0CRKXDX83%26pd_rd_r%3D13822b75-47c0-427b-962f-4fe60861d6d7%26pd_rd_w%3DlgIrt%26pd_rd_wg%3DcxdKi%26pf_rd_p%3D739e670d-dfb3-4be0-9815-d8c5c0372e07%26pf_rd_r%3DT4DDDDA1RMAK8P0YS5Q5%26qid%3D1751882837%26sbo%3DRZvfv%252F%252FHxDF%252BO5021pAnSA%253D%253D%26sprefix%3Dlaptops%252Caps%252C214%26sr%3D1-2-66673dcf-083f-43ba-b782-d4a436cc5cfb-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM%26psc%3D1&cr=DUB`
    }
  ];

  const pages = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold text-yellow-600 mb-6 text-center">Laptops – Page 1</h1>
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
            <button className={`px-3 py-1 border rounded ${p === 1 ? 'bg-yellow-400 text-white' : 'bg-white text-yellow-600'}`}>
              {p}
            </button>
          </Link>
        ))}
    
      </div>
    </main>
  );
}