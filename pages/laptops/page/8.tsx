import Link from "next/link";

export default function LaptopPage8() {
  const laptops = [
    {
      title: `HP Victus,13th Gen IntelCore i5-13420H, 6GB RTX 4050 Gaming Laptop (16GB DDR4,512GB SSD) (fa1279tx) IPS, 15.6\"/39.6cm, Flicker-Free,Win 11,Office 21, Mica Silver, 2.29kg, EnhancedCooling,fa1319TX`,
      image: `https://m.media-amazon.com/images/I/71NZgR0v39L._AC_UY218_.jpg`,
      price: `₹76,490`,
      rating: `3.9`,
      count: `(217)`,
      link: `https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo0MjE3NTQxMzQzODM3NjE4OjE3NTE4ODMyMjE6c3BfYnRmOjMwMDQ1NjEyMTE0NTczMjo6MDo6&url=%2FHP-i5-13420H-15-6-inch-Backlit-fa1319TX%2Fdp%2FB0D1YJR2ZY%2Fref%3Dsr_1_32_sspa%3Fcrid%3D102YFPKZ8SCP8%26dib%3DeyJ2IjoiMSJ9.Df9DXYw7bdu7K-16DTL82L-gX6MPpo8SmBLOkhEyVjd6kHFky4PbBK7FmZf_B_vB7BrUDvf0IrVZGzQ_zfH71FXd9Rv5OM7beWHVoyfGOKneXb3gdEo6FxhUmgsqmv4a4hZO3YHVFJ_M2b-tHlE1gZsf9meYD8nCnW8tdDdkGGZW3GgO7jmoyXNsXeBx631a.IW0awvYQCxh7WJGkuNQ2W9mtvSTJW17cOVJU5RWmKHc%26dib_tag%3Dse%26keywords%3Dlaptops%26qid%3D1751883221%26sprefix%3Dlaptops%252Caps%252C214%26sr%3D8-32-spons%26xpid%3D6G9gll5HrzPUY%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9idGY%26psc%3D1&cr=DUB`
    },
    {
      title: `Lenovo Smartchoice LOQ, Intel Core i5-12450HX, 12th Gen, RTX 3050-6GB, 16GB RAM, 512GB SSD, FHD 144Hz 300Nits, 15.6\"/39.6cm, Windows 11, MS Office 21, Grey, 2.4Kg, 83GS003UIN, Gaming Laptop`,
      image: `https://m.media-amazon.com/images/I/81tmCrtiRgL._AC_UY218_.jpg`,
      price: `₹70,990`,
      rating: `4.0`,
      count: `(605)`,
      link: `https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo0MjE3NTQxMzQzODM3NjE4OjE3NTE4ODMyMjE6c3BfYnRmOjMwMDQ1NjEyMTE0NjMzMjo6MDo6&url=%2FLenovo-Smartchoice-i5-12450HX-Graphics-83GS003UIN%2Fdp%2FB0CX8XPKWJ%2Fref%3Dsr_1_33_sspa%3Fcrid%3D102YFPKZ8SCP8%26dib%3DeyJ2IjoiMSJ9.Df9DXYw7bdu7K-16DTL82L-gX6MPpo8SmBLOkhEyVjd6kHFky4PbBK7FmZf_B_vB7BrUDvf0IrVZGzQ_zfH71FXd9Rv5OM7beWHVoyfGOKneXb3gdEo6FxhUmgsqmv4a4hZO3YHVFJ_M2b-tHlE1gZsf9meYD8nCnW8tdDdkGGZW3GgO7jmoyXNsXeBx631a.IW0awvYQCxh7WJGkuNQ2W9mtvSTJW17cOVJU5RWmKHc%26dib_tag%3Dse%26keywords%3Dlaptops%26qid%3D1751883221%26sprefix%3Dlaptops%252Caps%252C214%26sr%3D8-33-spons%26xpid%3D6G9gll5HrzPUY%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9idGY%26psc%3D1&cr=DUB`
    },
    {
      title: `V-CUBE DESIGNS Premium Vegan Leather Desk Mat 90X45cm 2.4mm Thick&Padded|Laptop Mat/Extended Mouse Pad/Stitched, Reversible, Sturdy Deskspread with High Tear/Peel Strength|Anti-Slip,Splash-Proof|Blue`,
      image: `https://m.media-amazon.com/images/I/61G987QVS8L._AC_UL640_QL65_.jpg https://m.media-amazon.com/images/I/61G987QVS8L._AC_UL640_QL65_.jpg`,
      price: `₹797`,
      rating: `4.4`,
      count: `(587)`,
      link: ``
    },
    {
      title: `V-CUBE DESIGNS Premium Vegan Leather Desk Mat 90X45cm 2.4mm Thick&Padded|Laptop Mat/Extended Mouse Pad/Stitched, Reversible, Sturdy Deskspread with High Tear/Peel Strength|Anti-Slip,Splash-Proof|Blue`,
      image: `https://m.media-amazon.com/images/I/61G987QVS8L._AC_UL640_QL65_.jpg https://m.media-amazon.com/images/I/61G987QVS8L._AC_UL640_QL65_.jpg`,
      price: `₹797`,
      rating: `4.4`,
      count: `(587)`,
      link: ``
    },
    {
      title: `HP 15, 13th Gen Intel Core i5-1335U (16GB DDR4, 512GB SSD) FHD, Anti-Glare, Micro-Edge, 15.6''/39.6cm, Win11, M365 Basic(1yr)* Office24, Silver,1.59kg, fd0577TU, Iris Xe, FHD Camera w/Shutter Laptop`,
      image: `https://m.media-amazon.com/images/I/71bagLp2sXL._AC_UY218_.jpg`,
      price: `₹55,990`,
      rating: `3.6`,
      count: `(20)`,
      link: `https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo4Mjc3NTE5MjMyOTM0MDEwOjE3NTE4ODMyNDI6c3BfYXRmX25leHQ6MzAwNTU5NjYxMTA1ODMyOjowOjo&url=%2FHP-i5-1335U-Anti-Glare-Micro-Edge-fd0577TU%2Fdp%2FB0F4R6H3NB%2Fref%3Dsr_1_33_sspa%3Fcrid%3D102YFPKZ8SCP8%26dib%3DeyJ2IjoiMSJ9.p028LiN5zkji4vWL4SfgIq3WucsLQrhJXoZqkvB1DIjGjHj071QN20LucGBJIEps.gzHr6x_iYkplpnoQ6M17iy4e8kw98bKDCILRQQPZieo%26dib_tag%3Dse%26keywords%3Dlaptops%26qid%3D1751883242%26sprefix%3Dlaptops%252Caps%252C214%26sr%3D8-33-spons%26xpid%3D6G9gll5HrzPUY%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGZfbmV4dA%26psc%3D1&cr=DUB`
    },
    {
      title: `Lenovo LOQ 2024 12Th Gen Intel Core I5-12450HX | NVIDIA RTX 2050 4GB (12GB RAM/512GB SSD/15.6\" (39.6Cm)/Windows 11/Office Home 2024/100% Srgb/3 Mon. Game Pass/Grey/2.4Kg), 83GS00LJIN Gaming Laptop`,
      image: `https://m.media-amazon.com/images/I/81b4LYOyFVL._AC_UY218_.jpg`,
      price: `₹63,990`,
      rating: `N/A`,
      count: ``,
      link: `https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo4Mjc3NTE5MjMyOTM0MDEwOjE3NTE4ODMyNDI6c3BfYXRmX25leHQ6MzAwNTc4MzExOTMzNzMyOjowOjo&url=%2FLenovo-I5-12450HX-NVIDIA-Windows-83GS00LJIN%2Fdp%2FB0DPQJBMVK%2Fref%3Dsr_1_34_sspa%3Fcrid%3D102YFPKZ8SCP8%26dib%3DeyJ2IjoiMSJ9.p028LiN5zkji4vWL4SfgIq3WucsLQrhJXoZqkvB1DIjGjHj071QN20LucGBJIEps.gzHr6x_iYkplpnoQ6M17iy4e8kw98bKDCILRQQPZieo%26dib_tag%3Dse%26keywords%3Dlaptops%26qid%3D1751883242%26sprefix%3Dlaptops%252Caps%252C214%26sr%3D8-34-spons%26xpid%3D6G9gll5HrzPUY%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGZfbmV4dA%26psc%3D1&cr=DUB`
    },
    {
      title: `Apple MacBook Air Laptop: Apple M1 chip, 13.3-inch/33.74 cm Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Space Grey`,
      image: `https://m.media-amazon.com/images/I/71jG+e7roXL._AC_UY218_.jpg`,
      price: `₹58,990`,
      rating: `4.6`,
      count: `(6.9K)`,
      link: `https://www.amazon.in/Apple-MacBook-Chip-13-inch-256GB/dp/B08N5W4NNB/ref=sr_1_35?crid=102YFPKZ8SCP8&dib=eyJ2IjoiMSJ9.p028LiN5zkji4vWL4SfgIq3WucsLQrhJXoZqkvB1DIjGjHj071QN20LucGBJIEps.gzHr6x_iYkplpnoQ6M17iy4e8kw98bKDCILRQQPZieo&dib_tag=se&keywords=laptops&qid=1751883242&sprefix=laptops%2Caps%2C214&sr=8-35&xpid=6G9gll5HrzPUY`
    },
    {
      title: `Sounce 3 in 1 Cleaning Set for Screen PC, Laptops, Monitors, Mobiles, LCD, LED, TV/Professional Quality/Prevents Static Electricity, 100ml with Micro Fiber Cloth and Soft Brush`,
      image: `https://m.media-amazon.com/images/I/71CFc-fYMBL._AC_UY218_.jpg`,
      price: `₹149`,
      rating: `4.2`,
      count: `(1.9K)`,
      link: `https://www.amazon.in/Sounce-Cleaning-Monitors-Professional-Electricity/dp/B0BSLRB8NJ/ref=sr_1_36?crid=102YFPKZ8SCP8&dib=eyJ2IjoiMSJ9.p028LiN5zkji4vWL4SfgIq3WucsLQrhJXoZqkvB1DIjGjHj071QN20LucGBJIEps.gzHr6x_iYkplpnoQ6M17iy4e8kw98bKDCILRQQPZieo&dib_tag=se&keywords=laptops&qid=1751883242&sprefix=laptops%2Caps%2C214&sr=8-36&xpid=6G9gll5HrzPUY`
    }
  ];

  const pages = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold text-yellow-600 mb-6 text-center">Laptops – Page 8</h1>
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
            <button className={`px-3 py-1 border rounded ${p === 8 ? 'bg-yellow-400 text-white' : 'bg-white text-yellow-600'}`}>
              {p}
            </button>
          </Link>
        ))}
    
      </div>
    </main>
  );
}