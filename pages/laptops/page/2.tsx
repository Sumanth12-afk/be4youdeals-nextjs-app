import Link from "next/link";

export default function LaptopPage2() {
  const laptops = [
    {
      title: `nan`,
      image: `https://m.media-amazon.com/images/I/71Ie8YsWrFL._AC_UL320_.jpg`,
      price: `₹69,990`,
      rating: `5.0`,
      count: `(2)`,
      link: `https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo3MDM0MTE5Mzk3MjEyNDQ0OjE3NTE4ODI4Mzc6c3Bfc2VhcmNoX3RoZW1hdGljOjMwMDYxNjM0NjgxODMzMjo6Mzo6&url=%2FMSI-i7-12650H-Windows-GeForce-B12UC-2239IN%2Fdp%2FB0DQPTMBKM%2Fref%3Dsxin_15_pa_sp_search_thematic_sspa%3Fcontent-id%3Damzn1.sym.739e670d-dfb3-4be0-9815-d8c5c0372e07%253Aamzn1.sym.739e670d-dfb3-4be0-9815-d8c5c0372e07%26crid%3D102YFPKZ8SCP8%26cv_ct_cx%3Dlaptops%26keywords%3Dlaptops%26pd_rd_i%3DB0DQPTMBKM%26pd_rd_r%3D13822b75-47c0-427b-962f-4fe60861d6d7%26pd_rd_w%3DlgIrt%26pd_rd_wg%3DcxdKi%26pf_rd_p%3D739e670d-dfb3-4be0-9815-d8c5c0372e07%26pf_rd_r%3DT4DDDDA1RMAK8P0YS5Q5%26qid%3D1751882837%26sbo%3DRZvfv%252F%252FHxDF%252BO5021pAnSA%253D%253D%26sprefix%3Dlaptops%252Caps%252C214%26sr%3D1-3-66673dcf-083f-43ba-b782-d4a436cc5cfb-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM%26psc%3D1&cr=DUB`
    },
    {
      title: `nan`,
      image: `https://m.media-amazon.com/images/I/81tmCrtiRgL._AC_UL320_.jpg`,
      price: `₹70,990`,
      rating: `4.0`,
      count: `(605)`,
      link: `https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo3MDM0MTE5Mzk3MjEyNDQ0OjE3NTE4ODI4Mzc6c3Bfc2VhcmNoX3RoZW1hdGljOjMwMDQ1NjEyMTE0NjMzMjo6NDo6&url=%2FLenovo-Smartchoice-i5-12450HX-Graphics-83GS003UIN%2Fdp%2FB0CX8XPKWJ%2Fref%3Dsxin_15_pa_sp_search_thematic_sspa%3Fcontent-id%3Damzn1.sym.739e670d-dfb3-4be0-9815-d8c5c0372e07%253Aamzn1.sym.739e670d-dfb3-4be0-9815-d8c5c0372e07%26crid%3D102YFPKZ8SCP8%26cv_ct_cx%3Dlaptops%26keywords%3Dlaptops%26pd_rd_i%3DB0CX8XPKWJ%26pd_rd_r%3D13822b75-47c0-427b-962f-4fe60861d6d7%26pd_rd_w%3DlgIrt%26pd_rd_wg%3DcxdKi%26pf_rd_p%3D739e670d-dfb3-4be0-9815-d8c5c0372e07%26pf_rd_r%3DT4DDDDA1RMAK8P0YS5Q5%26qid%3D1751882837%26sbo%3DRZvfv%252F%252FHxDF%252BO5021pAnSA%253D%253D%26sprefix%3Dlaptops%252Caps%252C214%26sr%3D1-4-66673dcf-083f-43ba-b782-d4a436cc5cfb-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM%26psc%3D1&cr=DUB`
    },
    {
      title: `HEROZ Hacker 50 litres Large Size Nylon Travel Laptop Backpack Water Resistant Slim Durable Computer Book Bag Tracking Fits Up to 17.3-inch Laptop (058- ALL) (Navy Blue)`,
      image: `https://m.media-amazon.com/images/I/81JphHgfc8L._AC_UL640_QL65_.jpg https://m.media-amazon.com/images/I/81JphHgfc8L._AC_UL640_QL65_.jpg`,
      price: `₹1,650`,
      rating: `4.1`,
      count: `(4.3K)`,
      link: ``
    },
    {
      title: `HEROZ Hacker 50 litres Large Size Nylon Travel Laptop Backpack Water Resistant Slim Durable Computer Book Bag Tracking Fits Up to 17.3-inch Laptop (058- ALL) (Navy Blue)`,
      image: `https://m.media-amazon.com/images/I/81JphHgfc8L._AC_UL640_QL65_.jpg https://m.media-amazon.com/images/I/81JphHgfc8L._AC_UL640_QL65_.jpg`,
      price: `₹1,650`,
      rating: `4.1`,
      count: `(4.3K)`,
      link: ``
    },
    {
      title: `HP 15, AMD Ryzen 3 7320U (8GB LPDDR5, 512GB SSD) FHD, Anti-Glare, Micro-Edge, 15.6\"/39.6cm, Win 11, Office 21, Silver, 1.59kg, fc0154AU, AMD Radeon Graphics, 1080p FHD Camera Laptop`,
      image: `https://m.media-amazon.com/images/I/719OMbh40jL._AC_UY218_.jpg`,
      price: `₹30,690`,
      rating: `4.0`,
      count: `(1.6K)`,
      link: `https://www.amazon.in/HP-Laptop-15-6-inch-Graphics-fc0154AU/dp/B0D3HG5CMG/ref=sr_1_6?crid=102YFPKZ8SCP8&dib=eyJ2IjoiMSJ9.Go3x0Lm7fOW24YmXrgcerw9S_neIZ54NQ3dDnUm3ppPQUK7vbn_T_AqK15Z5S4TbgrFdDMTUNMbMQsAnIDQBRRhXQkbHsIcS7jeBBu89u2v8O8HdSsNGQNUhyIFyVEqFhkIT5XU4RGkz4yKUSzJ_mVeOjGLCARLyvSso_9tSJSnNj8de7Ri4gv6-IJ6BFYyKYBJryJHKLavTx05A4hIo5Xf_7kT9yH4CuDvC9C3H7Ww.pPeKs1ZS8k9xTLINExq8SnRn6wMr1dnGSXHTowOmqqk&dib_tag=se&keywords=laptops&qid=1751882837&sprefix=laptops%2Caps%2C214&sr=8-6`
    },
    {
      title: `Lenovo V15 Intel Celeron N4500 15.6\" (39.62 cm) FHD (1920x1080) Antiglare 250 Nits Thin and Light Laptop (8GB RAM/256GB SSD/Windows 11 Home/Black/1Y Onsite/1.7 kg), 82QYA00MIN`,
      image: `https://m.media-amazon.com/images/I/516btukUorL._AC_UY218_.jpg`,
      price: `₹20,290`,
      rating: `3.9`,
      count: `(519)`,
      link: `https://www.amazon.in/Lenovo-Celeron-1920x1080-Antiglare-82QYA00MIN/dp/B0C28FKJXG/ref=sr_1_7?crid=102YFPKZ8SCP8&dib=eyJ2IjoiMSJ9.Go3x0Lm7fOW24YmXrgcerw9S_neIZ54NQ3dDnUm3ppPQUK7vbn_T_AqK15Z5S4TbgrFdDMTUNMbMQsAnIDQBRRhXQkbHsIcS7jeBBu89u2v8O8HdSsNGQNUhyIFyVEqFhkIT5XU4RGkz4yKUSzJ_mVeOjGLCARLyvSso_9tSJSnNj8de7Ri4gv6-IJ6BFYyKYBJryJHKLavTx05A4hIo5Xf_7kT9yH4CuDvC9C3H7Ww.pPeKs1ZS8k9xTLINExq8SnRn6wMr1dnGSXHTowOmqqk&dib_tag=se&keywords=laptops&qid=1751882837&sprefix=laptops%2Caps%2C214&sr=8-7`
    },
    {
      title: `Lenovo IdeaPad Slim 3, Intel Core i5-12450H, 12th Gen, 16GB RAM, 512GB SSD, FHD, 14\"/35.5cm, Windows 11, MS Office Home 2024, Grey, 1.37Kg, 83EQ0072IN, Alexa Built-in, 3 mon. Game Pass Laptop`,
      image: `https://m.media-amazon.com/images/I/81Tj8G57-WL._AC_UY218_.jpg`,
      price: `₹48,990`,
      rating: `3.9`,
      count: `(604)`,
      link: `https://www.amazon.in/Lenovo-IdeaPad-i5-12450H-Windows-83EQ0072IN/dp/B0DP7BZ8FD/ref=sr_1_8?crid=102YFPKZ8SCP8&dib=eyJ2IjoiMSJ9.Go3x0Lm7fOW24YmXrgcerw9S_neIZ54NQ3dDnUm3ppPQUK7vbn_T_AqK15Z5S4TbgrFdDMTUNMbMQsAnIDQBRRhXQkbHsIcS7jeBBu89u2v8O8HdSsNGQNUhyIFyVEqFhkIT5XU4RGkz4yKUSzJ_mVeOjGLCARLyvSso_9tSJSnNj8de7Ri4gv6-IJ6BFYyKYBJryJHKLavTx05A4hIo5Xf_7kT9yH4CuDvC9C3H7Ww.pPeKs1ZS8k9xTLINExq8SnRn6wMr1dnGSXHTowOmqqk&dib_tag=se&keywords=laptops&qid=1751882837&sprefix=laptops%2Caps%2C214&sr=8-8`
    },
    {
      title: `HP 255 G10 ‎‎Laptop (AMD Athlon Silver 7120U/ 8GB RAM / 256GB SSD/Windows 11/15.6 INCH ASH Silver`,
      image: `https://m.media-amazon.com/images/I/71rw7cd14mL._AC_UY218_.jpg`,
      price: `₹22,399`,
      rating: `3.9`,
      count: `(26)`,
      link: `https://www.amazon.in/HP-%E2%80%8E%E2%80%8ELaptop-Athlon-Silver-Windows/dp/B0DV984J97/ref=sr_1_9?crid=102YFPKZ8SCP8&dib=eyJ2IjoiMSJ9.Go3x0Lm7fOW24YmXrgcerw9S_neIZ54NQ3dDnUm3ppPQUK7vbn_T_AqK15Z5S4TbgrFdDMTUNMbMQsAnIDQBRRhXQkbHsIcS7jeBBu89u2v8O8HdSsNGQNUhyIFyVEqFhkIT5XU4RGkz4yKUSzJ_mVeOjGLCARLyvSso_9tSJSnNj8de7Ri4gv6-IJ6BFYyKYBJryJHKLavTx05A4hIo5Xf_7kT9yH4CuDvC9C3H7Ww.pPeKs1ZS8k9xTLINExq8SnRn6wMr1dnGSXHTowOmqqk&dib_tag=se&keywords=laptops&qid=1751882837&sprefix=laptops%2Caps%2C214&sr=8-9`
    }
  ];

  const pages = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold text-yellow-600 mb-6 text-center">Laptops – Page 2</h1>
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
            <button className={`px-3 py-1 border rounded ${p === 2 ? 'bg-yellow-400 text-white' : 'bg-white text-yellow-600'}`}>
              {p}
            </button>
          </Link>
        ))}
    
      </div>
    </main>
  );
}