import Link from "next/link";

export default function LaptopPage6() {
  const laptops = [
    {
      title: `HP Professional 15, 12th Gen Intel Core Celeron-N4500 Turbo Boost, 8GB DDR4, 256GB SSD, (Win 11 Pro, MSO 21Pro, Gray, 1.59kg), 15.6 inch, UHD Graphics, Numeric KB, Business Laptop`,
      image: `https://m.media-amazon.com/images/I/61Qh9Vy+LwL._AC_UY218_.jpg`,
      price: `₹22,230`,
      rating: `4.6`,
      count: `(7)`,
      link: `https://www.amazon.in/HP-Professional-Celeron-N4500-Graphics-Business/dp/B0FCD9LKLZ/ref=sr_1_21?crid=102YFPKZ8SCP8&dib=eyJ2IjoiMSJ9.Df9DXYw7bdu7K-16DTL82L-gX6MPpo8SmBLOkhEyVjd6kHFky4PbBK7FmZf_B_vB7BrUDvf0IrVZGzQ_zfH71FXd9Rv5OM7beWHVoyfGOKneXb3gdEo6FxhUmgsqmv4a4hZO3YHVFJ_M2b-tHlE1gZsf9meYD8nCnW8tdDdkGGZW3GgO7jmoyXNsXeBx631a.IW0awvYQCxh7WJGkuNQ2W9mtvSTJW17cOVJU5RWmKHc&dib_tag=se&keywords=laptops&qid=1751883221&sprefix=laptops%2Caps%2C214&sr=8-21&xpid=6G9gll5HrzPUY`
    },
    {
      title: `Lenovo LOQ 2024, Intel Core i5-13450HX, 13th Gen, NVIDIA RTX 4050-6GB, 16GB RAM, 512GB SSD, FHD 144Hz, 15.6\"/39.6cm, Windows 11, MS Office 21, Grey, 2.4Kg, 83DV007GIN, 1Yr ADP Free Gaming Laptop`,
      image: `https://m.media-amazon.com/images/I/815ZvsHky7L._AC_UY218_.jpg`,
      price: `₹86,990`,
      rating: `4.1`,
      count: `(231)`,
      link: `https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo0MjE3NTQxMzQzODM3NjE4OjE3NTE4ODMyMjE6c3BfbXRmOjMwMDQ1NjEyMTE0NjYzMjo6MDo6&url=%2FLenovo-i5-13450HX-300Nits-Graphics-83DV007GIN%2Fdp%2FB0D49W5KZP%2Fref%3Dsr_1_22_sspa%3Fcrid%3D102YFPKZ8SCP8%26dib%3DeyJ2IjoiMSJ9.Df9DXYw7bdu7K-16DTL82L-gX6MPpo8SmBLOkhEyVjd6kHFky4PbBK7FmZf_B_vB7BrUDvf0IrVZGzQ_zfH71FXd9Rv5OM7beWHVoyfGOKneXb3gdEo6FxhUmgsqmv4a4hZO3YHVFJ_M2b-tHlE1gZsf9meYD8nCnW8tdDdkGGZW3GgO7jmoyXNsXeBx631a.IW0awvYQCxh7WJGkuNQ2W9mtvSTJW17cOVJU5RWmKHc%26dib_tag%3Dse%26keywords%3Dlaptops%26qid%3D1751883221%26sprefix%3Dlaptops%252Caps%252C214%26sr%3D8-22-spons%26xpid%3D6G9gll5HrzPUY%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1&cr=DUB`
    },
    {
      title: `Dell G-series-15-5530-laptop - 15.6-inch FHD, Intel Core i5-13450HX, 16GB DDR5 RAM, 1TB SSD, NVIDIA GeForce RTX 3050, Orange Backlit Keyboard & G-Key, Windows 11 Home, Dark Shadow Gray, 2.65 Kg`,
      image: `https://m.media-amazon.com/images/I/61LOOMpEgxL._AC_UY218_.jpg`,
      price: `₹76,962`,
      rating: `4.0`,
      count: `(1.1K)`,
      link: `https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo0MjE3NTQxMzQzODM3NjE4OjE3NTE4ODMyMjE6c3BfbXRmOjMwMDQ1NjEyMTE0NDYzMjo6MDo6&url=%2FDell-Smartchoice-G15-5530-Gaming-i5-13450HX%2Fdp%2FB0CRKXDX83%2Fref%3Dsr_1_23_sspa%3Fcrid%3D102YFPKZ8SCP8%26dib%3DeyJ2IjoiMSJ9.Df9DXYw7bdu7K-16DTL82L-gX6MPpo8SmBLOkhEyVjd6kHFky4PbBK7FmZf_B_vB7BrUDvf0IrVZGzQ_zfH71FXd9Rv5OM7beWHVoyfGOKneXb3gdEo6FxhUmgsqmv4a4hZO3YHVFJ_M2b-tHlE1gZsf9meYD8nCnW8tdDdkGGZW3GgO7jmoyXNsXeBx631a.IW0awvYQCxh7WJGkuNQ2W9mtvSTJW17cOVJU5RWmKHc%26dib_tag%3Dse%26keywords%3Dlaptops%26qid%3D1751883221%26sprefix%3Dlaptops%252Caps%252C214%26sr%3D8-23-spons%26xpid%3D6G9gll5HrzPUY%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1&cr=DUB`
    },
    {
      title: `Primebook 4G, 2025(New, WiFi+4G) Android Based MediaTek MT8788 - (PrimeOS) 4G SIM Slot, Thin and Light Laptop (11.6 Inch, 1.065 Kg, Type C, USB, HDMI, MicroSD) (4GB/64GB eMMC Storage, Black)`,
      image: `https://m.media-amazon.com/images/I/71M+5cFJViL._AC_UY218_.jpg`,
      price: `₹15,990`,
      rating: `4.5`,
      count: `(621)`,
      link: `https://www.amazon.in/Primebook-Android-Based-MediaTek-MT8788/dp/B0D1Y3MVGL/ref=sr_1_24?crid=102YFPKZ8SCP8&dib=eyJ2IjoiMSJ9.Df9DXYw7bdu7K-16DTL82L-gX6MPpo8SmBLOkhEyVjd6kHFky4PbBK7FmZf_B_vB7BrUDvf0IrVZGzQ_zfH71FXd9Rv5OM7beWHVoyfGOKneXb3gdEo6FxhUmgsqmv4a4hZO3YHVFJ_M2b-tHlE1gZsf9meYD8nCnW8tdDdkGGZW3GgO7jmoyXNsXeBx631a.IW0awvYQCxh7WJGkuNQ2W9mtvSTJW17cOVJU5RWmKHc&dib_tag=se&keywords=laptops&qid=1751883221&sprefix=laptops%2Caps%2C214&sr=8-24&xpid=6G9gll5HrzPUY`
    },
    {
      title: `Dyazo Water Resistant Laptop Sleeve/Laptop case/laptop cover with Handle Compatible for 15 Inch to 15.6\" Inches laptops & Notebooks - Grey`,
      image: `https://m.media-amazon.com/images/I/81s4wKEliIL._AC_UY218_.jpg`,
      price: `₹299`,
      rating: `4.3`,
      count: `(14.6K)`,
      link: `https://www.amazon.in/Dyazo-Resistant-Compatible-laptops-Notebooks/dp/B09BFV96TS/ref=sr_1_25?crid=102YFPKZ8SCP8&dib=eyJ2IjoiMSJ9.Df9DXYw7bdu7K-16DTL82L-gX6MPpo8SmBLOkhEyVjd6kHFky4PbBK7FmZf_B_vB7BrUDvf0IrVZGzQ_zfH71FXd9Rv5OM7beWHVoyfGOKneXb3gdEo6FxhUmgsqmv4a4hZO3YHVFJ_M2b-tHlE1gZsf9meYD8nCnW8tdDdkGGZW3GgO7jmoyXNsXeBx631a.IW0awvYQCxh7WJGkuNQ2W9mtvSTJW17cOVJU5RWmKHc&dib_tag=se&keywords=laptops&qid=1751883221&sprefix=laptops%2Caps%2C214&sr=8-25&xpid=6G9gll5HrzPUY`
    },
    {
      title: `Primebook S 4G, 2025(New, WiFi+4G) Android Based MediaTek MT8788 - (PrimeOS) 4G SIM Slot, Thin and Light Laptop (11.6 Inch, 1.065 Kg, Type C, USB, HDMI, MicroSD) (4GB/128GB eMMC Storage, Black)`,
      image: `https://m.media-amazon.com/images/I/71M+5cFJViL._AC_UY218_.jpg`,
      price: `₹16,990`,
      rating: `4.5`,
      count: `(621)`,
      link: `https://www.amazon.in/Primebook-4G-Android-MediaTek-MT8788/dp/B0D1Y359QD/ref=sr_1_26?crid=102YFPKZ8SCP8&dib=eyJ2IjoiMSJ9.Df9DXYw7bdu7K-16DTL82L-gX6MPpo8SmBLOkhEyVjd6kHFky4PbBK7FmZf_B_vB7BrUDvf0IrVZGzQ_zfH71FXd9Rv5OM7beWHVoyfGOKneXb3gdEo6FxhUmgsqmv4a4hZO3YHVFJ_M2b-tHlE1gZsf9meYD8nCnW8tdDdkGGZW3GgO7jmoyXNsXeBx631a.IW0awvYQCxh7WJGkuNQ2W9mtvSTJW17cOVJU5RWmKHc&dib_tag=se&keywords=laptops&qid=1751883221&sprefix=laptops%2Caps%2C214&sr=8-26&xpid=6G9gll5HrzPUY`
    },
    {
      title: `nan`,
      image: `https://m.media-amazon.com/images/I/81tmCrtiRgL._AC_UL320_.jpg https://m.media-amazon.com/images/I/61LOOMpEgxL._AC_UL320_.jpg https://m.media-amazon.com/images/I/71+gQ9gOTuL._AC_UL320_.jpg https://m.media-amazon.com/images/I/81+SKGgJ9yL._AC_UL320_.jpg`,
      price: `₹70,990 ₹76,962 ₹33,990 ₹36,190`,
      rating: `4.0 4.0 4.0 4.0`,
      count: `(605) (1.1K) (1.4K) (493)`,
      link: `https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo2NDkzMDgwODExMzkxODA5OjE3NTE4ODMyMjc6c3Bfc2VhcmNoX3RoZW1hdGljOjMwMDQ1NjEyMTE0NjMzMjo6MTo6&url=%2FLenovo-Smartchoice-i5-12450HX-Graphics-83GS003UIN%2Fdp%2FB0CX8XPKWJ%2Fref%3Dsxin_15_pa_sp_search_thematic_sspa%3Fcontent-id%3Damzn1.sym.24e1f0fb-6b39-49f5-b34a-4ebef8eaef82%253Aamzn1.sym.24e1f0fb-6b39-49f5-b34a-4ebef8eaef82%26crid%3D102YFPKZ8SCP8%26cv_ct_cx%3Dlaptops%26keywords%3Dlaptops%26pd_rd_i%3DB0CX8XPKWJ%26pd_rd_r%3D16827163-391a-47e9-827f-b4ee7d6e2224%26pd_rd_w%3DPDjIL%26pd_rd_wg%3D4kjDO%26pf_rd_p%3D24e1f0fb-6b39-49f5-b34a-4ebef8eaef82%26pf_rd_r%3DS62AVGAKA0YXV5C425P4%26qid%3D1751883221%26sbo%3DRZvfv%252F%252FHxDF%252BO5021pAnSA%253D%253D%26sprefix%3Dlaptops%252Caps%252C214%26sr%3D1-17-2ec22325-1003-449d-8aaf-c0bcc24717ae-spons%26xpid%3D6G9gll5HrzPUY%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM%26psc%3D1&cr=DUB https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo2NDkzMDgwODExMzkxODA5OjE3NTE4ODMyMjc6c3Bfc2VhcmNoX3RoZW1hdGljOjMwMDQ1NjEyMTE0NDYzMjo6Mjo6&url=%2FDell-Smartchoice-G15-5530-Gaming-i5-13450HX%2Fdp%2FB0CRKXDX83%2Fref%3Dsxin_15_pa_sp_search_thematic_sspa%3Fcontent-id%3Damzn1.sym.24e1f0fb-6b39-49f5-b34a-4ebef8eaef82%253Aamzn1.sym.24e1f0fb-6b39-49f5-b34a-4ebef8eaef82%26crid%3D102YFPKZ8SCP8%26cv_ct_cx%3Dlaptops%26keywords%3Dlaptops%26pd_rd_i%3DB0CRKXDX83%26pd_rd_r%3D16827163-391a-47e9-827f-b4ee7d6e2224%26pd_rd_w%3DPDjIL%26pd_rd_wg%3D4kjDO%26pf_rd_p%3D24e1f0fb-6b39-49f5-b34a-4ebef8eaef82%26pf_rd_r%3DS62AVGAKA0YXV5C425P4%26qid%3D1751883221%26sbo%3DRZvfv%252F%252FHxDF%252BO5021pAnSA%253D%253D%26sprefix%3Dlaptops%252Caps%252C214%26sr%3D1-18-2ec22325-1003-449d-8aaf-c0bcc24717ae-spons%26xpid%3D6G9gll5HrzPUY%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM%26psc%3D1&cr=DUB https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo2NDkzMDgwODExMzkxODA5OjE3NTE4ODMyMjc6c3Bfc2VhcmNoX3RoZW1hdGljOjMwMDUzMzM5NTg2OTAzMjo6Mzo6&url=%2FHP-i3-1215U-Anti-Glare-15-6inch-Graphics%2Fdp%2FB0CJBL2QWY%2Fref%3Dsxin_15_pa_sp_search_thematic_sspa%3Fcontent-id%3Damzn1.sym.24e1f0fb-6b39-49f5-b34a-4ebef8eaef82%253Aamzn1.sym.24e1f0fb-6b39-49f5-b34a-4ebef8eaef82%26crid%3D102YFPKZ8SCP8%26cv_ct_cx%3Dlaptops%26keywords%3Dlaptops%26pd_rd_i%3DB0CJBL2QWY%26pd_rd_r%3D16827163-391a-47e9-827f-b4ee7d6e2224%26pd_rd_w%3DPDjIL%26pd_rd_wg%3D4kjDO%26pf_rd_p%3D24e1f0fb-6b39-49f5-b34a-4ebef8eaef82%26pf_rd_r%3DS62AVGAKA0YXV5C425P4%26qid%3D1751883221%26sbo%3DRZvfv%252F%252FHxDF%252BO5021pAnSA%253D%253D%26sprefix%3Dlaptops%252Caps%252C214%26sr%3D1-19-2ec22325-1003-449d-8aaf-c0bcc24717ae-spons%26xpid%3D6G9gll5HrzPUY%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM%26psc%3D1&cr=DUB https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo2NDkzMDgwODExMzkxODA5OjE3NTE4ODMyMjc6c3Bfc2VhcmNoX3RoZW1hdGljOjMwMDQ1NjIxNjE0MDUzMjo6NDo6&url=%2FLenovo-IdeaPad-39-62cm-Warranty-82RK006DIN%2Fdp%2FB0B4JPC8GT%2Fref%3Dsxin_15_pa_sp_search_thematic_sspa%3Fcontent-id%3Damzn1.sym.24e1f0fb-6b39-49f5-b34a-4ebef8eaef82%253Aamzn1.sym.24e1f0fb-6b39-49f5-b34a-4ebef8eaef82%26crid%3D102YFPKZ8SCP8%26cv_ct_cx%3Dlaptops%26keywords%3Dlaptops%26pd_rd_i%3DB0B4JPC8GT%26pd_rd_r%3D16827163-391a-47e9-827f-b4ee7d6e2224%26pd_rd_w%3DPDjIL%26pd_rd_wg%3D4kjDO%26pf_rd_p%3D24e1f0fb-6b39-49f5-b34a-4ebef8eaef82%26pf_rd_r%3DS62AVGAKA0YXV5C425P4%26qid%3D1751883221%26sbo%3DRZvfv%252F%252FHxDF%252BO5021pAnSA%253D%253D%26sprefix%3Dlaptops%252Caps%252C214%26sr%3D1-20-2ec22325-1003-449d-8aaf-c0bcc24717ae-spons%26xpid%3D6G9gll5HrzPUY%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM%26psc%3D1&cr=DUB`
    },
    {
      title: `nan`,
      image: `https://m.media-amazon.com/images/I/81tmCrtiRgL._AC_UL320_.jpg`,
      price: `₹70,990`,
      rating: `4.0`,
      count: `(605)`,
      link: `https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo2NDkzMDgwODExMzkxODA5OjE3NTE4ODMyMjc6c3Bfc2VhcmNoX3RoZW1hdGljOjMwMDQ1NjEyMTE0NjMzMjo6MTo6&url=%2FLenovo-Smartchoice-i5-12450HX-Graphics-83GS003UIN%2Fdp%2FB0CX8XPKWJ%2Fref%3Dsxin_15_pa_sp_search_thematic_sspa%3Fcontent-id%3Damzn1.sym.24e1f0fb-6b39-49f5-b34a-4ebef8eaef82%253Aamzn1.sym.24e1f0fb-6b39-49f5-b34a-4ebef8eaef82%26crid%3D102YFPKZ8SCP8%26cv_ct_cx%3Dlaptops%26keywords%3Dlaptops%26pd_rd_i%3DB0CX8XPKWJ%26pd_rd_r%3D16827163-391a-47e9-827f-b4ee7d6e2224%26pd_rd_w%3DPDjIL%26pd_rd_wg%3D4kjDO%26pf_rd_p%3D24e1f0fb-6b39-49f5-b34a-4ebef8eaef82%26pf_rd_r%3DS62AVGAKA0YXV5C425P4%26qid%3D1751883221%26sbo%3DRZvfv%252F%252FHxDF%252BO5021pAnSA%253D%253D%26sprefix%3Dlaptops%252Caps%252C214%26sr%3D1-17-2ec22325-1003-449d-8aaf-c0bcc24717ae-spons%26xpid%3D6G9gll5HrzPUY%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM%26psc%3D1&cr=DUB`
    }
  ];

  const pages = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold text-yellow-600 mb-6 text-center">Laptops – Page 6</h1>
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
            <button className={`px-3 py-1 border rounded ${p === 6 ? 'bg-yellow-400 text-white' : 'bg-white text-yellow-600'}`}>
              {p}
            </button>
          </Link>
        ))}
    
      </div>
    </main>
  );
}