import Link from "next/link";

export default function LaptopPage5() {
  const laptops = [
    {
      title: `Lenovo LOQ 2024 12Th Gen Intel Core I5-12450HX | NVIDIA RTX 2050 4GB (12GB RAM/512GB SSD/15.6\" (39.6Cm)/Windows 11/Office Home 2024/100% Srgb/3 Mon. Game Pass/Grey/2.4Kg), 83GS00LJIN Gaming Laptop`,
      image: `https://m.media-amazon.com/images/I/81b4LYOyFVL._AC_UY218_.jpg`,
      price: `₹63,990`,
      rating: `N/A`,
      count: ``,
      link: `https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo0MjE3NTQxMzQzODM3NjE4OjE3NTE4ODMyMjE6c3BfYXRmX25leHQ6MzAwNTc4MzExOTMzNzMyOjowOjo&url=%2FLenovo-I5-12450HX-NVIDIA-Windows-83GS00LJIN%2Fdp%2FB0DPQJBMVK%2Fref%3Dsr_1_18_sspa%3Fcrid%3D102YFPKZ8SCP8%26dib%3DeyJ2IjoiMSJ9.74iU4IFkr14wypO0hA2myTQVosQC-1XdYnI8ZWZ0a4nGjHj071QN20LucGBJIEps.y6_jNvoW_3ZCO3nAYOqx_IZaRyQKV8i4vRhnfOKxKO0%26dib_tag%3Dse%26keywords%3Dlaptops%26qid%3D1751883221%26sprefix%3Dlaptops%252Caps%252C214%26sr%3D8-18-spons%26xpid%3D6G9gll5HrzPUY%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGZfbmV4dA%26psc%3D1&cr=DUB`
    },
    {
      title: `Lenovo V15 G4 AMD Ryzen 5 7520U 15.6 inch FHD Thin & Lite Laptop, AMD Graphics, 16GB DDR5 5500Mhz Ram, 512GB SSD NVMe, Windows 11, Dolby Audio, Arctic Grey, 1 Year Onsite Brand Warranty`,
      image: `https://m.media-amazon.com/images/I/51bfKFtNSQL._AC_UY218_.jpg`,
      price: `₹34,750`,
      rating: `4.0`,
      count: `(74)`,
      link: `https://www.amazon.in/Lenovo-Graphics-5500Mhz-Windows-Warranty/dp/B0F29HNJL1/ref=sr_1_19?crid=102YFPKZ8SCP8&dib=eyJ2IjoiMSJ9.74iU4IFkr14wypO0hA2myTQVosQC-1XdYnI8ZWZ0a4nGjHj071QN20LucGBJIEps.y6_jNvoW_3ZCO3nAYOqx_IZaRyQKV8i4vRhnfOKxKO0&dib_tag=se&keywords=laptops&qid=1751883221&sprefix=laptops%2Caps%2C214&sr=8-19&xpid=6G9gll5HrzPUY`
    },
    {
      title: `Dell Inspiron 3535, AMD Ryzen 5-7530U, 16 GB RAM, 512 GB SSD, FHD IPS 15.6\"/39.62 cm, 120Hz, Windows 11, MS Office 2024, Platinum Silver, 1.67 kg, Thin & Light Laptop`,
      image: `https://m.media-amazon.com/images/I/61zegicE0CL._AC_UY218_.jpg`,
      price: `₹42,840`,
      rating: `4.1`,
      count: `(10)`,
      link: `https://www.amazon.in/Dell-Inspiron-5-7530U-Windows-Platinum/dp/B0DSFRQTGB/ref=sr_1_20?crid=102YFPKZ8SCP8&dib=eyJ2IjoiMSJ9.74iU4IFkr14wypO0hA2myTQVosQC-1XdYnI8ZWZ0a4nGjHj071QN20LucGBJIEps.y6_jNvoW_3ZCO3nAYOqx_IZaRyQKV8i4vRhnfOKxKO0&dib_tag=se&keywords=laptops&qid=1751883221&sprefix=laptops%2Caps%2C214&sr=8-20&xpid=6G9gll5HrzPUY`
    },
    {
      title: `Lenovo Smartchoice Ideapad Slim 3 13Th Gen Intel Core I7-13620H 15.3 Inch(38.8Cm) WUXGA IPS Laptop(16GB RAM/512GB SSD/Windows 11/Office Home 2024/Backlit Keyboard/1Yr ADP Free/Grey/1.6Kg),83K100CJIN`,
      image: `https://m.media-amazon.com/images/I/71HMPbAf-iL._AC_UY218_.jpg`,
      price: `₹65,990`,
      rating: `4.0`,
      count: `(38)`,
      link: `https://www.amazon.in/Lenovo-Smartchoice-I7-13620H-Keyboard-83K100CJIN/dp/B0F2162VGQ/ref=sr_1_21?crid=102YFPKZ8SCP8&dib=eyJ2IjoiMSJ9.74iU4IFkr14wypO0hA2myTQVosQC-1XdYnI8ZWZ0a4nGjHj071QN20LucGBJIEps.y6_jNvoW_3ZCO3nAYOqx_IZaRyQKV8i4vRhnfOKxKO0&dib_tag=se&keywords=laptops&qid=1751883221&sprefix=laptops%2Caps%2C214&sr=8-21&xpid=6G9gll5HrzPUY`
    },
    {
      title: `STRIFF Adjustable Laptop Tabletop Stand Patented Riser Ventilated Portable Foldable Compatible with MacBook Notebook Tablet Tray Desk Table Book with Free Phone Stand (Black)`,
      image: `https://m.media-amazon.com/images/I/71Zf9uUp+GL._AC_UY218_.jpg`,
      price: `₹249`,
      rating: `4.3`,
      count: `(39.7K)`,
      link: `https://www.amazon.in/STRIFF-Adjustable-Patented-Ventilated-Compatible/dp/B07XCM6T4N/ref=sr_1_17?crid=102YFPKZ8SCP8&dib=eyJ2IjoiMSJ9.Df9DXYw7bdu7K-16DTL82L-gX6MPpo8SmBLOkhEyVjd6kHFky4PbBK7FmZf_B_vB7BrUDvf0IrVZGzQ_zfH71FXd9Rv5OM7beWHVoyfGOKneXb3gdEo6FxhUmgsqmv4a4hZO3YHVFJ_M2b-tHlE1gZsf9meYD8nCnW8tdDdkGGZW3GgO7jmoyXNsXeBx631a.IW0awvYQCxh7WJGkuNQ2W9mtvSTJW17cOVJU5RWmKHc&dib_tag=se&keywords=laptops&qid=1751883221&sprefix=laptops%2Caps%2C214&sr=8-17&xpid=6G9gll5HrzPUY`
    },
    {
      title: `HP 15, AMD Ryzen 5 7520U (8GB LPDDR5, 512GB SSD) Anti-Glare, FHD,15.6-inch (39.6 cm) Win 11, Office 21, FHD Camera with Privacy Shutter,15s-fc0155AU`,
      image: `https://m.media-amazon.com/images/I/71hox+BTuKL._AC_UY218_.jpg`,
      price: `₹35,990`,
      rating: `3.9`,
      count: `(19)`,
      link: `https://www.amazon.in/HP-RyzenTM-15-6-inch-Speakers-15s-fc0155AU/dp/B0CY2R1G3G/ref=sr_1_18?crid=102YFPKZ8SCP8&dib=eyJ2IjoiMSJ9.Df9DXYw7bdu7K-16DTL82L-gX6MPpo8SmBLOkhEyVjd6kHFky4PbBK7FmZf_B_vB7BrUDvf0IrVZGzQ_zfH71FXd9Rv5OM7beWHVoyfGOKneXb3gdEo6FxhUmgsqmv4a4hZO3YHVFJ_M2b-tHlE1gZsf9meYD8nCnW8tdDdkGGZW3GgO7jmoyXNsXeBx631a.IW0awvYQCxh7WJGkuNQ2W9mtvSTJW17cOVJU5RWmKHc&dib_tag=se&keywords=laptops&qid=1751883221&sprefix=laptops%2Caps%2C214&sr=8-18&xpid=6G9gll5HrzPUY`
    },
    {
      title: `Lenovo V15 AMD Ryzen 3 7320U 15.6\" (39.62cm) FHD 250 Nits Antiglare Thin and Light Laptop (8GB/512GB SSD/Windows 11 Home/Arctic Grey/1.63 Kg), 83CQ000XIN`,
      image: `https://m.media-amazon.com/images/I/41kIqmz4S3L._AC_UY218_.jpg`,
      price: `₹26,990`,
      rating: `3.7`,
      count: `(69)`,
      link: `https://www.amazon.in/Lenovo-39-62cm-Antiglare-Windows-83CQ000XIN/dp/B0DVGQPW13/ref=sr_1_19?crid=102YFPKZ8SCP8&dib=eyJ2IjoiMSJ9.Df9DXYw7bdu7K-16DTL82L-gX6MPpo8SmBLOkhEyVjd6kHFky4PbBK7FmZf_B_vB7BrUDvf0IrVZGzQ_zfH71FXd9Rv5OM7beWHVoyfGOKneXb3gdEo6FxhUmgsqmv4a4hZO3YHVFJ_M2b-tHlE1gZsf9meYD8nCnW8tdDdkGGZW3GgO7jmoyXNsXeBx631a.IW0awvYQCxh7WJGkuNQ2W9mtvSTJW17cOVJU5RWmKHc&dib_tag=se&keywords=laptops&qid=1751883221&sprefix=laptops%2Caps%2C214&sr=8-19&xpid=6G9gll5HrzPUY`
    },
    {
      title: `Portronics My Buddy K Portable Laptop Stand with Adjustable Height, Foldable, OverHeating Protection for Laptops & MacBooks (Grey)`,
      image: `https://m.media-amazon.com/images/I/51mN-RUnn5L._AC_UY218_.jpg`,
      price: `₹399`,
      rating: `4.2`,
      count: `(6.2K)`,
      link: `https://www.amazon.in/Portronics-My-Buddy-Adjustable-OverHeating/dp/B00EU6TXC6/ref=sr_1_20?crid=102YFPKZ8SCP8&dib=eyJ2IjoiMSJ9.Df9DXYw7bdu7K-16DTL82L-gX6MPpo8SmBLOkhEyVjd6kHFky4PbBK7FmZf_B_vB7BrUDvf0IrVZGzQ_zfH71FXd9Rv5OM7beWHVoyfGOKneXb3gdEo6FxhUmgsqmv4a4hZO3YHVFJ_M2b-tHlE1gZsf9meYD8nCnW8tdDdkGGZW3GgO7jmoyXNsXeBx631a.IW0awvYQCxh7WJGkuNQ2W9mtvSTJW17cOVJU5RWmKHc&dib_tag=se&keywords=laptops&qid=1751883221&sprefix=laptops%2Caps%2C214&sr=8-20&xpid=6G9gll5HrzPUY`
    }
  ];

  const pages = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold text-yellow-600 mb-6 text-center">Laptops – Page 5</h1>
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
            <button className={`px-3 py-1 border rounded ${p === 5 ? 'bg-yellow-400 text-white' : 'bg-white text-yellow-600'}`}>
              {p}
            </button>
          </Link>
        ))}
    
      </div>
    </main>
  );
}