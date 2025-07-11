import Link from "next/link";

export default function LaptopPage3() {
  const laptops = [
    {
      title: `Lenovo {SmartChoice)Chromebook Intel Celeron N4500 (4GB RAM/64GB eMMC 5.1/11.6 Inch (29.46cm)/HD Display/2Wx2 Stereo Speakers/HD Camera/Chrome OS/Blue/1.21Kg), 82UY0014HA`,
      image: `https://m.media-amazon.com/images/I/71eHrg3+O7L._AC_UY218_.jpg`,
      price: `₹15,990`,
      rating: `3.6`,
      count: `(7)`,
      link: `https://www.amazon.in/Lenovo-SmartChoice-Chromebook-Speakers-82UY0014HA/dp/B0F2TMZJ24/ref=sr_1_10?crid=102YFPKZ8SCP8&dib=eyJ2IjoiMSJ9.Go3x0Lm7fOW24YmXrgcerw9S_neIZ54NQ3dDnUm3ppPQUK7vbn_T_AqK15Z5S4TbgrFdDMTUNMbMQsAnIDQBRRhXQkbHsIcS7jeBBu89u2v8O8HdSsNGQNUhyIFyVEqFhkIT5XU4RGkz4yKUSzJ_mVeOjGLCARLyvSso_9tSJSnNj8de7Ri4gv6-IJ6BFYyKYBJryJHKLavTx05A4hIo5Xf_7kT9yH4CuDvC9C3H7Ww.pPeKs1ZS8k9xTLINExq8SnRn6wMr1dnGSXHTowOmqqk&dib_tag=se&keywords=laptops&qid=1751882837&sprefix=laptops%2Caps%2C214&sr=8-10`
    },
    {
      title: `Lenovo LOQ 2024 12Th Gen Intel Core I5-12450HX | NVIDIA RTX 2050 4GB (12GB RAM/512GB SSD/15.6\" (39.6Cm)/Windows 11/Office Home 2024/100% Srgb/3 Mon. Game Pass/Grey/2.4Kg), 83GS00LJIN Gaming Laptop`,
      image: `https://m.media-amazon.com/images/I/81b4LYOyFVL._AC_UY218_.jpg`,
      price: `₹63,990`,
      rating: `N/A`,
      count: ``,
      link: `https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo0ODExNTcwMzIzNzQ3NjY2OjE3NTE4ODI4Mzc6c3BfbXRmOjMwMDU3ODMxMTkzMzczMjo6MDo6&url=%2FLenovo-I5-12450HX-NVIDIA-Windows-83GS00LJIN%2Fdp%2FB0DPQJBMVK%2Fref%3Dsr_1_11_sspa%3Fcrid%3D102YFPKZ8SCP8%26dib%3DeyJ2IjoiMSJ9.Go3x0Lm7fOW24YmXrgcerw9S_neIZ54NQ3dDnUm3ppPQUK7vbn_T_AqK15Z5S4TbgrFdDMTUNMbMQsAnIDQBRRhXQkbHsIcS7jeBBu89u2v8O8HdSsNGQNUhyIFyVEqFhkIT5XU4RGkz4yKUSzJ_mVeOjGLCARLyvSso_9tSJSnNj8de7Ri4gv6-IJ6BFYyKYBJryJHKLavTx05A4hIo5Xf_7kT9yH4CuDvC9C3H7Ww.pPeKs1ZS8k9xTLINExq8SnRn6wMr1dnGSXHTowOmqqk%26dib_tag%3Dse%26keywords%3Dlaptops%26qid%3D1751882837%26sprefix%3Dlaptops%252Caps%252C214%26sr%3D8-11-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1&cr=DUB`
    },
    {
      title: `Lenovo Smartchoice Ideapad Slim 3 13Th Gen Intel Core I7-13620H 15.3 Inch(38.8Cm) WUXGA IPS Laptop(16GB RAM/512GB SSD/Windows 11/Office Home 2024/Backlit Keyboard/1Yr ADP Free/Grey/1.6Kg),83K100CJIN`,
      image: `https://m.media-amazon.com/images/I/71HMPbAf-iL._AC_UY218_.jpg`,
      price: `₹65,990`,
      rating: `4.0`,
      count: `(38)`,
      link: `https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo0ODExNTcwMzIzNzQ3NjY2OjE3NTE4ODI4Mzc6c3BfbXRmOjMwMDUzNDkzNTA3MzQzMjo6MDo6&url=%2FLenovo-Smartchoice-I7-13620H-Keyboard-83K100CJIN%2Fdp%2FB0F2162VGQ%2Fref%3Dsr_1_12_sspa%3Fcrid%3D102YFPKZ8SCP8%26dib%3DeyJ2IjoiMSJ9.Go3x0Lm7fOW24YmXrgcerw9S_neIZ54NQ3dDnUm3ppPQUK7vbn_T_AqK15Z5S4TbgrFdDMTUNMbMQsAnIDQBRRhXQkbHsIcS7jeBBu89u2v8O8HdSsNGQNUhyIFyVEqFhkIT5XU4RGkz4yKUSzJ_mVeOjGLCARLyvSso_9tSJSnNj8de7Ri4gv6-IJ6BFYyKYBJryJHKLavTx05A4hIo5Xf_7kT9yH4CuDvC9C3H7Ww.pPeKs1ZS8k9xTLINExq8SnRn6wMr1dnGSXHTowOmqqk%26dib_tag%3Dse%26keywords%3Dlaptops%26qid%3D1751882837%26sprefix%3Dlaptops%252Caps%252C214%26sr%3D8-12-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1&cr=DUB`
    },
    {
      title: `HP 15s, 12th Gen Intel Core i3-1215U Laptop (8GB DDR4, 512GB SSD) Anti-Glare, 15.6\"/39.6cm,FHD, Win 11, MS Office 21, Silver, 1.69kg, Intel UHD Graphics, HD Camera, Dual Speakers, fy5006tu`,
      image: `https://m.media-amazon.com/images/I/71+gQ9gOTuL._AC_UY218_.jpg`,
      price: `₹33,990`,
      rating: `4.0`,
      count: `(1.4K)`,
      link: `https://www.amazon.in/HP-i3-1215U-Anti-Glare-15-6inch-Graphics/dp/B0CJBL2QWY/ref=sr_1_13?crid=102YFPKZ8SCP8&dib=eyJ2IjoiMSJ9.Go3x0Lm7fOW24YmXrgcerw9S_neIZ54NQ3dDnUm3ppPQUK7vbn_T_AqK15Z5S4TbgrFdDMTUNMbMQsAnIDQBRRhXQkbHsIcS7jeBBu89u2v8O8HdSsNGQNUhyIFyVEqFhkIT5XU4RGkz4yKUSzJ_mVeOjGLCARLyvSso_9tSJSnNj8de7Ri4gv6-IJ6BFYyKYBJryJHKLavTx05A4hIo5Xf_7kT9yH4CuDvC9C3H7Ww.pPeKs1ZS8k9xTLINExq8SnRn6wMr1dnGSXHTowOmqqk&dib_tag=se&keywords=laptops&qid=1751882837&sprefix=laptops%2Caps%2C214&sr=8-13`
    },
    {
      title: `Chuwi HeroBook Pro 14.1'' Intel Celeron N4020 Laptop with 8GB RAM, 256GB SSD, Windows 11, 1TB Expand, FHD IPS, Ultra Slim, USB3.0, Mini-HDMI, Webcam`,
      image: `https://m.media-amazon.com/images/I/61JEULUT8QL._AC_UY218_.jpg`,
      price: `₹17,990`,
      rating: `3.5`,
      count: `(3.2K)`,
      link: `https://www.amazon.in/Chuwi-HeroBook-Pro-Celeron-Mini-HDMI/dp/B0D9RXH8X5/ref=sr_1_14?crid=102YFPKZ8SCP8&dib=eyJ2IjoiMSJ9.Go3x0Lm7fOW24YmXrgcerw9S_neIZ54NQ3dDnUm3ppPQUK7vbn_T_AqK15Z5S4TbgrFdDMTUNMbMQsAnIDQBRRhXQkbHsIcS7jeBBu89u2v8O8HdSsNGQNUhyIFyVEqFhkIT5XU4RGkz4yKUSzJ_mVeOjGLCARLyvSso_9tSJSnNj8de7Ri4gv6-IJ6BFYyKYBJryJHKLavTx05A4hIo5Xf_7kT9yH4CuDvC9C3H7Ww.pPeKs1ZS8k9xTLINExq8SnRn6wMr1dnGSXHTowOmqqk&dib_tag=se&keywords=laptops&qid=1751882837&sprefix=laptops%2Caps%2C214&sr=8-14`
    },
    {
      title: `HP 255 G10, AMD Ryzen 3 7320U Quad Core -(8 GB/512 GB SSD/AMD Radeon Graphics) Thin and Light Business Laptop/15.6\" HD Display/Turbo Silver/1.5 kg`,
      image: `https://m.media-amazon.com/images/I/71YZQa3BTEL._AC_UY218_.jpg`,
      price: `₹25,993`,
      rating: `2.5`,
      count: `(13)`,
      link: `https://www.amazon.in/HP-Radeon-Graphics-Business-Display/dp/B0F6TJ164J/ref=sr_1_15?crid=102YFPKZ8SCP8&dib=eyJ2IjoiMSJ9.Go3x0Lm7fOW24YmXrgcerw9S_neIZ54NQ3dDnUm3ppPQUK7vbn_T_AqK15Z5S4TbgrFdDMTUNMbMQsAnIDQBRRhXQkbHsIcS7jeBBu89u2v8O8HdSsNGQNUhyIFyVEqFhkIT5XU4RGkz4yKUSzJ_mVeOjGLCARLyvSso_9tSJSnNj8de7Ri4gv6-IJ6BFYyKYBJryJHKLavTx05A4hIo5Xf_7kT9yH4CuDvC9C3H7Ww.pPeKs1ZS8k9xTLINExq8SnRn6wMr1dnGSXHTowOmqqk&dib_tag=se&keywords=laptops&qid=1751882837&sprefix=laptops%2Caps%2C214&sr=8-15`
    },
    {
      title: `Acer [SmartChoice Aspire Lite AMD Ryzen 5-5625U Processor, 16 GB/512 GB, Full HD, 15.6\"/39.62 cm, Windows 11 Home, Steel Gray, 1.59 kg, AL15-41, Metal Body, Thin and Light Laptop`,
      image: `https://m.media-amazon.com/images/I/61k0gpxQwCL._AC_UY218_.jpg`,
      price: `₹34,990`,
      rating: `3.9`,
      count: `(1.2K)`,
      link: `https://www.amazon.in/5-5625U-Premium-Windows-AL15-41-Display/dp/B0DG2GCTD7/ref=sr_1_16?crid=102YFPKZ8SCP8&dib=eyJ2IjoiMSJ9.Go3x0Lm7fOW24YmXrgcerw9S_neIZ54NQ3dDnUm3ppPQUK7vbn_T_AqK15Z5S4TbgrFdDMTUNMbMQsAnIDQBRRhXQkbHsIcS7jeBBu89u2v8O8HdSsNGQNUhyIFyVEqFhkIT5XU4RGkz4yKUSzJ_mVeOjGLCARLyvSso_9tSJSnNj8de7Ri4gv6-IJ6BFYyKYBJryJHKLavTx05A4hIo5Xf_7kT9yH4CuDvC9C3H7Ww.pPeKs1ZS8k9xTLINExq8SnRn6wMr1dnGSXHTowOmqqk&dib_tag=se&keywords=laptops&qid=1751882837&sprefix=laptops%2Caps%2C214&sr=8-16`
    },
    {
      title: `Lenovo V15 G4 AMD Athlon Silver 7120U Laptop 8GB LPDDR5 Ram, 512 GB SSD PCIe, Windows 11 Lifetime Validity,15.6\" FHD Screen, AMD Radeon 610M, Silver, 1 Year Brand Warranty`,
      image: `https://m.media-amazon.com/images/I/51+SoS8bWbL._AC_UY218_.jpg`,
      price: `₹25,980`,
      rating: `4.0`,
      count: `(191)`,
      link: `https://www.amazon.in/Lenovo-V15-Lifetime-Validity-Warranty/dp/B0CL7CMTXS/ref=sr_1_17?crid=102YFPKZ8SCP8&dib=eyJ2IjoiMSJ9.Go3x0Lm7fOW24YmXrgcerw9S_neIZ54NQ3dDnUm3ppPQUK7vbn_T_AqK15Z5S4TbgrFdDMTUNMbMQsAnIDQBRRhXQkbHsIcS7jeBBu89u2v8O8HdSsNGQNUhyIFyVEqFhkIT5XU4RGkz4yKUSzJ_mVeOjGLCARLyvSso_9tSJSnNj8de7Ri4gv6-IJ6BFYyKYBJryJHKLavTx05A4hIo5Xf_7kT9yH4CuDvC9C3H7Ww.pPeKs1ZS8k9xTLINExq8SnRn6wMr1dnGSXHTowOmqqk&dib_tag=se&keywords=laptops&qid=1751882837&sprefix=laptops%2Caps%2C214&sr=8-17`
    }
  ];

  const pages = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold text-yellow-600 mb-6 text-center">Laptops – Page 3</h1>
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
            <button className={`px-3 py-1 border rounded ${p === 3 ? 'bg-yellow-400 text-white' : 'bg-white text-yellow-600'}`}>
              {p}
            </button>
          </Link>
        ))}
    
      </div>
    </main>
  );
}