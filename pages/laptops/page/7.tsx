import Link from "next/link";

export default function LaptopPage7() {
  const laptops = [
    {
      title: `nan`,
      image: `https://m.media-amazon.com/images/I/61LOOMpEgxL._AC_UL320_.jpg`,
      price: `₹76,962`,
      rating: `4.0`,
      count: `(1.1K)`,
      link: `https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo2NDkzMDgwODExMzkxODA5OjE3NTE4ODMyMjc6c3Bfc2VhcmNoX3RoZW1hdGljOjMwMDQ1NjEyMTE0NDYzMjo6Mjo6&url=%2FDell-Smartchoice-G15-5530-Gaming-i5-13450HX%2Fdp%2FB0CRKXDX83%2Fref%3Dsxin_15_pa_sp_search_thematic_sspa%3Fcontent-id%3Damzn1.sym.24e1f0fb-6b39-49f5-b34a-4ebef8eaef82%253Aamzn1.sym.24e1f0fb-6b39-49f5-b34a-4ebef8eaef82%26crid%3D102YFPKZ8SCP8%26cv_ct_cx%3Dlaptops%26keywords%3Dlaptops%26pd_rd_i%3DB0CRKXDX83%26pd_rd_r%3D16827163-391a-47e9-827f-b4ee7d6e2224%26pd_rd_w%3DPDjIL%26pd_rd_wg%3D4kjDO%26pf_rd_p%3D24e1f0fb-6b39-49f5-b34a-4ebef8eaef82%26pf_rd_r%3DS62AVGAKA0YXV5C425P4%26qid%3D1751883221%26sbo%3DRZvfv%252F%252FHxDF%252BO5021pAnSA%253D%253D%26sprefix%3Dlaptops%252Caps%252C214%26sr%3D1-18-2ec22325-1003-449d-8aaf-c0bcc24717ae-spons%26xpid%3D6G9gll5HrzPUY%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM%26psc%3D1&cr=DUB`
    },
    {
      title: `nan`,
      image: `https://m.media-amazon.com/images/I/71+gQ9gOTuL._AC_UL320_.jpg`,
      price: `₹33,990`,
      rating: `4.0`,
      count: `(1.4K)`,
      link: `https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo2NDkzMDgwODExMzkxODA5OjE3NTE4ODMyMjc6c3Bfc2VhcmNoX3RoZW1hdGljOjMwMDUzMzM5NTg2OTAzMjo6Mzo6&url=%2FHP-i3-1215U-Anti-Glare-15-6inch-Graphics%2Fdp%2FB0CJBL2QWY%2Fref%3Dsxin_15_pa_sp_search_thematic_sspa%3Fcontent-id%3Damzn1.sym.24e1f0fb-6b39-49f5-b34a-4ebef8eaef82%253Aamzn1.sym.24e1f0fb-6b39-49f5-b34a-4ebef8eaef82%26crid%3D102YFPKZ8SCP8%26cv_ct_cx%3Dlaptops%26keywords%3Dlaptops%26pd_rd_i%3DB0CJBL2QWY%26pd_rd_r%3D16827163-391a-47e9-827f-b4ee7d6e2224%26pd_rd_w%3DPDjIL%26pd_rd_wg%3D4kjDO%26pf_rd_p%3D24e1f0fb-6b39-49f5-b34a-4ebef8eaef82%26pf_rd_r%3DS62AVGAKA0YXV5C425P4%26qid%3D1751883221%26sbo%3DRZvfv%252F%252FHxDF%252BO5021pAnSA%253D%253D%26sprefix%3Dlaptops%252Caps%252C214%26sr%3D1-19-2ec22325-1003-449d-8aaf-c0bcc24717ae-spons%26xpid%3D6G9gll5HrzPUY%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM%26psc%3D1&cr=DUB`
    },
    {
      title: `nan`,
      image: `https://m.media-amazon.com/images/I/81+SKGgJ9yL._AC_UL320_.jpg`,
      price: `₹36,190`,
      rating: `4.0`,
      count: `(493)`,
      link: `https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo2NDkzMDgwODExMzkxODA5OjE3NTE4ODMyMjc6c3Bfc2VhcmNoX3RoZW1hdGljOjMwMDQ1NjIxNjE0MDUzMjo6NDo6&url=%2FLenovo-IdeaPad-39-62cm-Warranty-82RK006DIN%2Fdp%2FB0B4JPC8GT%2Fref%3Dsxin_15_pa_sp_search_thematic_sspa%3Fcontent-id%3Damzn1.sym.24e1f0fb-6b39-49f5-b34a-4ebef8eaef82%253Aamzn1.sym.24e1f0fb-6b39-49f5-b34a-4ebef8eaef82%26crid%3D102YFPKZ8SCP8%26cv_ct_cx%3Dlaptops%26keywords%3Dlaptops%26pd_rd_i%3DB0B4JPC8GT%26pd_rd_r%3D16827163-391a-47e9-827f-b4ee7d6e2224%26pd_rd_w%3DPDjIL%26pd_rd_wg%3D4kjDO%26pf_rd_p%3D24e1f0fb-6b39-49f5-b34a-4ebef8eaef82%26pf_rd_r%3DS62AVGAKA0YXV5C425P4%26qid%3D1751883221%26sbo%3DRZvfv%252F%252FHxDF%252BO5021pAnSA%253D%253D%26sprefix%3Dlaptops%252Caps%252C214%26sr%3D1-20-2ec22325-1003-449d-8aaf-c0bcc24717ae-spons%26xpid%3D6G9gll5HrzPUY%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM%26psc%3D1&cr=DUB`
    },
    {
      title: `HP 15 AMD Ryzen 3 7320U (8GB Ram/512GB SSD/Fhd/15.6\" (39.6 Cm)/Backlit Keyboard/Windows 11/Ms Office 21/1.59Kg/Silver) Fc0026Au Laptop`,
      image: `https://m.media-amazon.com/images/I/61Ja6Xa4QaL._AC_UY218_.jpg`,
      price: `₹30,500`,
      rating: `4.1`,
      count: `(1.3K)`,
      link: `https://www.amazon.in/HP-Backlit-Keyboard-Windows-Fc0026Au/dp/B0C3RCR4K7/ref=sr_1_27?crid=102YFPKZ8SCP8&dib=eyJ2IjoiMSJ9.Df9DXYw7bdu7K-16DTL82L-gX6MPpo8SmBLOkhEyVjd6kHFky4PbBK7FmZf_B_vB7BrUDvf0IrVZGzQ_zfH71FXd9Rv5OM7beWHVoyfGOKneXb3gdEo6FxhUmgsqmv4a4hZO3YHVFJ_M2b-tHlE1gZsf9meYD8nCnW8tdDdkGGZW3GgO7jmoyXNsXeBx631a.IW0awvYQCxh7WJGkuNQ2W9mtvSTJW17cOVJU5RWmKHc&dib_tag=se&keywords=laptops&qid=1751883221&sprefix=laptops%2Caps%2C214&sr=8-27&xpid=6G9gll5HrzPUY`
    },
    {
      title: `Lenovo V14 G3 14\" FHD Laptop, Intel Core i5-1235U, 16GB DDR4 RAM, 512GB SSD, Intel Iris Xe Graphics, Windows 11, Ms-Office Lifetime Validity, Iron Grey,1.6kg, 1 Year Onsite Brand Warranty`,
      image: `https://m.media-amazon.com/images/I/51bHvUvWrnL._AC_UY218_.jpg`,
      price: `₹41,732`,
      rating: `3.0`,
      count: `(13)`,
      link: `https://www.amazon.in/Lenovo-V14-G3-i5-1235U-Ms-Office/dp/B0F4XH5MVJ/ref=sr_1_28?crid=102YFPKZ8SCP8&dib=eyJ2IjoiMSJ9.Df9DXYw7bdu7K-16DTL82L-gX6MPpo8SmBLOkhEyVjd6kHFky4PbBK7FmZf_B_vB7BrUDvf0IrVZGzQ_zfH71FXd9Rv5OM7beWHVoyfGOKneXb3gdEo6FxhUmgsqmv4a4hZO3YHVFJ_M2b-tHlE1gZsf9meYD8nCnW8tdDdkGGZW3GgO7jmoyXNsXeBx631a.IW0awvYQCxh7WJGkuNQ2W9mtvSTJW17cOVJU5RWmKHc&dib_tag=se&keywords=laptops&qid=1751883221&sprefix=laptops%2Caps%2C214&sr=8-28&xpid=6G9gll5HrzPUY`
    },
    {
      title: `Sounce Mouse Pad Speed Type Mouse Pad with Antifray Stitched Embroidery Edges, Non-Slip Rubber Base Mousepad for Laptop PC (260mm x 210mm x 2mm) (Black)`,
      image: `https://m.media-amazon.com/images/I/512kJc9mROL._AC_UY218_.jpg`,
      price: `₹99`,
      rating: `4.4`,
      count: `(1.2K)`,
      link: `https://www.amazon.in/Sounce-Antifray-Stitched-Embroidery-Non-Slip/dp/B0BSR2N5W9/ref=sr_1_29?crid=102YFPKZ8SCP8&dib=eyJ2IjoiMSJ9.Df9DXYw7bdu7K-16DTL82L-gX6MPpo8SmBLOkhEyVjd6kHFky4PbBK7FmZf_B_vB7BrUDvf0IrVZGzQ_zfH71FXd9Rv5OM7beWHVoyfGOKneXb3gdEo6FxhUmgsqmv4a4hZO3YHVFJ_M2b-tHlE1gZsf9meYD8nCnW8tdDdkGGZW3GgO7jmoyXNsXeBx631a.IW0awvYQCxh7WJGkuNQ2W9mtvSTJW17cOVJU5RWmKHc&dib_tag=se&keywords=laptops&qid=1751883221&sprefix=laptops%2Caps%2C214&sr=8-29&xpid=6G9gll5HrzPUY`
    },
    {
      title: `DELL 14 (2025) Intel Core i3 12th Gen 1215U - (16 GB/512 GB SSD/Intel UHD Graphics/Windows 11 Home) Thin and Light Business Laptop/14.0\" HD Display/Grey/1.5 kg/MS Office 2021`,
      image: `https://m.media-amazon.com/images/I/710pC9glKFL._AC_UY218_.jpg`,
      price: `₹30,500`,
      rating: `2.6`,
      count: `(6)`,
      link: `https://www.amazon.in/DELL-Intel-Core-12th-1215U/dp/B08QW6WMSF/ref=sr_1_30?crid=102YFPKZ8SCP8&dib=eyJ2IjoiMSJ9.Df9DXYw7bdu7K-16DTL82L-gX6MPpo8SmBLOkhEyVjd6kHFky4PbBK7FmZf_B_vB7BrUDvf0IrVZGzQ_zfH71FXd9Rv5OM7beWHVoyfGOKneXb3gdEo6FxhUmgsqmv4a4hZO3YHVFJ_M2b-tHlE1gZsf9meYD8nCnW8tdDdkGGZW3GgO7jmoyXNsXeBx631a.IW0awvYQCxh7WJGkuNQ2W9mtvSTJW17cOVJU5RWmKHc&dib_tag=se&keywords=laptops&qid=1751883221&sprefix=laptops%2Caps%2C214&sr=8-30&xpid=6G9gll5HrzPUY`
    },
    {
      title: `HP 15, AMD Ryzen 5 7520U, 16GB DDR5, 512GB SSD, (Win 11, Office 21, Silver, 1.59kg), Anti-Glare, Micro-Edge, 15.6-inch(39.6cm), FHD Laptop, AMD Radeon Graphics, 1080p FHD Camera, Backlit KB, fc0156AU`,
      image: `https://m.media-amazon.com/images/I/710mh0SzbHL._AC_UY218_.jpg`,
      price: `₹40,980`,
      rating: `3.4`,
      count: `(71)`,
      link: `https://www.amazon.in/HP-RyzenTM-15-6-inch-Speakers-15s-fc0156AU/dp/B0CY2PLQ8N/ref=sr_1_31?crid=102YFPKZ8SCP8&dib=eyJ2IjoiMSJ9.Df9DXYw7bdu7K-16DTL82L-gX6MPpo8SmBLOkhEyVjd6kHFky4PbBK7FmZf_B_vB7BrUDvf0IrVZGzQ_zfH71FXd9Rv5OM7beWHVoyfGOKneXb3gdEo6FxhUmgsqmv4a4hZO3YHVFJ_M2b-tHlE1gZsf9meYD8nCnW8tdDdkGGZW3GgO7jmoyXNsXeBx631a.IW0awvYQCxh7WJGkuNQ2W9mtvSTJW17cOVJU5RWmKHc&dib_tag=se&keywords=laptops&qid=1751883221&sprefix=laptops%2Caps%2C214&sr=8-31&xpid=6G9gll5HrzPUY`
    }
  ];

  const pages = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold text-yellow-600 mb-6 text-center">Laptops – Page 7</h1>
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
            <button className={`px-3 py-1 border rounded ${p === 7 ? 'bg-yellow-400 text-white' : 'bg-white text-yellow-600'}`}>
              {p}
            </button>
          </Link>
        ))}
    
      </div>
    </main>
  );
}