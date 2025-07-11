import Link from "next/link";

export default function LaptopPage10() {
  const laptops = [
    {
      title: `ASUS TUF Gaming A15, AMD Ryzen 7 7435HS Gaming Laptop(NVIDIA RTX 3050-4GB/60W TGP/16GB RAM/512GB SSD/FHD/15.6\"/144Hz/RGB KB/48WHr/Windows 11//Graphite Black/2.30 Kg) FA506NCR-HN054W`,
      image: `https://m.media-amazon.com/images/I/61nTNphSBvL._AC_UY218_.jpg`,
      price: `₹64,590`,
      rating: `3.9`,
      count: `(331)`,
      link: `https://www.amazon.in/ASUS-15-6-inch-GeForce-Graphite-FA506NCR-HN054W/dp/B0D5DFR78J/ref=sr_1_40?crid=102YFPKZ8SCP8&dib=eyJ2IjoiMSJ9.bgfInI0cZ5NFRk_GtJaXsmUK6i_0xnS2j1z5t21akvI0GhaJGr7Hd8lhHBuYK8IRUjFAP7ySD0TkTLNvpPRj_D7izezotTFLyZItebMmheQ5OjiuM0S9l8tVg49jZ6Kr7VMO1oRXLCVJk_uaqoqMCGdvWzgPP8_UjzCkvSzcg09mag8cB9jlV0L15aFpj-pT.yeeqjiJolTaCbf_zVf99MT9EwCqMOvbPvQkjqS92fNs&dib_tag=se&keywords=laptops&qid=1751883242&sprefix=laptops%2Caps%2C214&sr=8-40&xpid=6G9gll5HrzPUY`
    },
    {
      title: `Dyazo 6 Angles Adjustable Aluminum Ergonomic Foldable Portable Tabletop Laptop/Desktop Riser Stand Holder Compatible for MacBook, HP, Dell, Lenovo & All Other Notebook (Silver)`,
      image: `https://m.media-amazon.com/images/I/61kBmC8NfGL._AC_UY218_.jpg`,
      price: `₹379`,
      rating: `4.3`,
      count: `(14.8K)`,
      link: `https://www.amazon.in/Dyazo-Computer-Adjustable-Ergonomic-Compatible/dp/B08LHTJTBB/ref=sr_1_41?crid=102YFPKZ8SCP8&dib=eyJ2IjoiMSJ9.bgfInI0cZ5NFRk_GtJaXsmUK6i_0xnS2j1z5t21akvI0GhaJGr7Hd8lhHBuYK8IRUjFAP7ySD0TkTLNvpPRj_D7izezotTFLyZItebMmheQ5OjiuM0S9l8tVg49jZ6Kr7VMO1oRXLCVJk_uaqoqMCGdvWzgPP8_UjzCkvSzcg09mag8cB9jlV0L15aFpj-pT.yeeqjiJolTaCbf_zVf99MT9EwCqMOvbPvQkjqS92fNs&dib_tag=se&keywords=laptops&qid=1751883242&sprefix=laptops%2Caps%2C214&sr=8-41&xpid=6G9gll5HrzPUY`
    },
    {
      title: `Amazon Basics Laptop Sleeve Case Cover Pouch for 14-Inch, 14.1-Inch Laptop for Men & Women | Slim Profile Neoprene, Soft Puffy Fabric Lining, 360° Protection, Smooth & Premium Zipper (Grey)`,
      image: `https://m.media-amazon.com/images/I/91k86Cdp1uL._AC_UY218_.jpg`,
      price: `₹349`,
      rating: `4.4`,
      count: `(3.7K)`,
      link: `https://www.amazon.in/14-Inch-14-1-Inch-Profile-Neoprene-Protection/dp/B09SPNRNJX/ref=sr_1_42?crid=102YFPKZ8SCP8&dib=eyJ2IjoiMSJ9.bgfInI0cZ5NFRk_GtJaXsmUK6i_0xnS2j1z5t21akvI0GhaJGr7Hd8lhHBuYK8IRUjFAP7ySD0TkTLNvpPRj_D7izezotTFLyZItebMmheQ5OjiuM0S9l8tVg49jZ6Kr7VMO1oRXLCVJk_uaqoqMCGdvWzgPP8_UjzCkvSzcg09mag8cB9jlV0L15aFpj-pT.yeeqjiJolTaCbf_zVf99MT9EwCqMOvbPvQkjqS92fNs&dib_tag=se&keywords=laptops&qid=1751883242&sprefix=laptops%2Caps%2C214&sr=8-42&xpid=6G9gll5HrzPUY`
    },
    {
      title: `nan`,
      image: `https://m.media-amazon.com/images/I/81tmCrtiRgL._AC_UL320_.jpg https://m.media-amazon.com/images/I/71Xa4o1DXpL._AC_UL320_.jpg https://m.media-amazon.com/images/I/71R6HbrvEwL._AC_UL320_.jpg https://m.media-amazon.com/images/I/71lmpgWjq-L._AC_UL320_.jpg`,
      price: `₹71,490 ₹67,490 ₹66,090 ₹50,490`,
      rating: `4.0 4.0 4.0 4.0`,
      count: `(605) (262) (114) (512)`,
      link: `https://www.amazon.in/sspa/click?ie=UTF8&spc=MToxMzY2NTc1MTU4ODk5ODI0OjE3NTE4ODMyNTA6c3Bfc2VhcmNoX3RoZW1hdGljOjMwMDU3ODUwNDUzNzUzMjo6MTo6&url=%2FLenovo-I5-12450HX-NVIDIA-Windows-83GS00LNIN%2Fdp%2FB0DPQGVH85%2Fref%3Dsxin_16_pa_sp_search_thematic_sspa%3Fcontent-id%3Damzn1.sym.24e1f0fb-6b39-49f5-b34a-4ebef8eaef82%253Aamzn1.sym.24e1f0fb-6b39-49f5-b34a-4ebef8eaef82%26crid%3D102YFPKZ8SCP8%26cv_ct_cx%3Dlaptops%26keywords%3Dlaptops%26pd_rd_i%3DB0DPQGVH85%26pd_rd_r%3D7f8b98ca-0b34-48f9-8621-077ef1d7cafd%26pd_rd_w%3Dzj1nM%26pd_rd_wg%3DLSsNx%26pf_rd_p%3D24e1f0fb-6b39-49f5-b34a-4ebef8eaef82%26pf_rd_r%3DF6YVFHND1EFYBJ8AWPBC%26qid%3D1751883242%26sbo%3DRZvfv%252F%252FHxDF%252BO5021pAnSA%253D%253D%26sprefix%3Dlaptops%252Caps%252C214%26sr%3D1-33-2ec22325-1003-449d-8aaf-c0bcc24717ae-spons%26xpid%3D6G9gll5HrzPUY%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM%26psc%3D1&cr=DUB https://www.amazon.in/sspa/click?ie=UTF8&spc=MToxMzY2NTc1MTU4ODk5ODI0OjE3NTE4ODMyNTA6c3Bfc2VhcmNoX3RoZW1hdGljOjMwMDU0OTc0NDQyNzMzMjo6Mjo6&url=%2FHP-Pavilion-i5-1340P-Graphics-15-eg3079TU%2Fdp%2FB0C2D3NV1S%2Fref%3Dsxin_16_pa_sp_search_thematic_sspa%3Fcontent-id%3Damzn1.sym.24e1f0fb-6b39-49f5-b34a-4ebef8eaef82%253Aamzn1.sym.24e1f0fb-6b39-49f5-b34a-4ebef8eaef82%26crid%3D102YFPKZ8SCP8%26cv_ct_cx%3Dlaptops%26keywords%3Dlaptops%26pd_rd_i%3DB0C2D3NV1S%26pd_rd_r%3D7f8b98ca-0b34-48f9-8621-077ef1d7cafd%26pd_rd_w%3Dzj1nM%26pd_rd_wg%3DLSsNx%26pf_rd_p%3D24e1f0fb-6b39-49f5-b34a-4ebef8eaef82%26pf_rd_r%3DF6YVFHND1EFYBJ8AWPBC%26qid%3D1751883242%26sbo%3DRZvfv%252F%252FHxDF%252BO5021pAnSA%253D%253D%26sprefix%3Dlaptops%252Caps%252C214%26sr%3D1-34-2ec22325-1003-449d-8aaf-c0bcc24717ae-spons%26xpid%3D6G9gll5HrzPUY%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM%26psc%3D1&cr=DUB https://www.amazon.in/sspa/click?ie=UTF8&spc=MToxMzY2NTc1MTU4ODk5ODI0OjE3NTE4ODMyNTA6c3Bfc2VhcmNoX3RoZW1hdGljOjMwMDU0OTc3ODEzMjAzMjo6Mzo6&url=%2FHP-i5-13420H-15-6-inch-Speakers-fa1307TX%2Fdp%2FB0D2LG3DRJ%2Fref%3Dsxin_16_pa_sp_search_thematic_sspa%3Fcontent-id%3Damzn1.sym.24e1f0fb-6b39-49f5-b34a-4ebef8eaef82%253Aamzn1.sym.24e1f0fb-6b39-49f5-b34a-4ebef8eaef82%26crid%3D102YFPKZ8SCP8%26cv_ct_cx%3Dlaptops%26keywords%3Dlaptops%26pd_rd_i%3DB0D2LG3DRJ%26pd_rd_r%3D7f8b98ca-0b34-48f9-8621-077ef1d7cafd%26pd_rd_w%3Dzj1nM%26pd_rd_wg%3DLSsNx%26pf_rd_p%3D24e1f0fb-6b39-49f5-b34a-4ebef8eaef82%26pf_rd_r%3DF6YVFHND1EFYBJ8AWPBC%26qid%3D1751883242%26sbo%3DRZvfv%252F%252FHxDF%252BO5021pAnSA%253D%253D%26sprefix%3Dlaptops%252Caps%252C214%26sr%3D1-35-2ec22325-1003-449d-8aaf-c0bcc24717ae-spons%26xpid%3D6G9gll5HrzPUY%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM%26psc%3D1&cr=DUB https://www.amazon.in/sspa/click?ie=UTF8&spc=MToxMzY2NTc1MTU4ODk5ODI0OjE3NTE4ODMyNTA6c3Bfc2VhcmNoX3RoZW1hdGljOjMwMDQ1NjIyMjA4MjEzMjo6NDo6&url=%2FHP-i5-1235U-Anti-Glare-Micro-Edge-fy5009tu%2Fdp%2FB0D4M66F6R%2Fref%3Dsxin_16_pa_sp_search_thematic_sspa%3Fcontent-id%3Damzn1.sym.24e1f0fb-6b39-49f5-b34a-4ebef8eaef82%253Aamzn1.sym.24e1f0fb-6b39-49f5-b34a-4ebef8eaef82%26crid%3D102YFPKZ8SCP8%26cv_ct_cx%3Dlaptops%26keywords%3Dlaptops%26pd_rd_i%3DB0D4M66F6R%26pd_rd_r%3D7f8b98ca-0b34-48f9-8621-077ef1d7cafd%26pd_rd_w%3Dzj1nM%26pd_rd_wg%3DLSsNx%26pf_rd_p%3D24e1f0fb-6b39-49f5-b34a-4ebef8eaef82%26pf_rd_r%3DF6YVFHND1EFYBJ8AWPBC%26qid%3D1751883242%26sbo%3DRZvfv%252F%252FHxDF%252BO5021pAnSA%253D%253D%26sprefix%3Dlaptops%252Caps%252C214%26sr%3D1-36-2ec22325-1003-449d-8aaf-c0bcc24717ae-spons%26xpid%3D6G9gll5HrzPUY%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM%26psc%3D1&cr=DUB`
    },
    {
      title: `nan`,
      image: `https://m.media-amazon.com/images/I/81tmCrtiRgL._AC_UL320_.jpg`,
      price: `₹71,490`,
      rating: `4.0`,
      count: `(605)`,
      link: `https://www.amazon.in/sspa/click?ie=UTF8&spc=MToxMzY2NTc1MTU4ODk5ODI0OjE3NTE4ODMyNTA6c3Bfc2VhcmNoX3RoZW1hdGljOjMwMDU3ODUwNDUzNzUzMjo6MTo6&url=%2FLenovo-I5-12450HX-NVIDIA-Windows-83GS00LNIN%2Fdp%2FB0DPQGVH85%2Fref%3Dsxin_16_pa_sp_search_thematic_sspa%3Fcontent-id%3Damzn1.sym.24e1f0fb-6b39-49f5-b34a-4ebef8eaef82%253Aamzn1.sym.24e1f0fb-6b39-49f5-b34a-4ebef8eaef82%26crid%3D102YFPKZ8SCP8%26cv_ct_cx%3Dlaptops%26keywords%3Dlaptops%26pd_rd_i%3DB0DPQGVH85%26pd_rd_r%3D7f8b98ca-0b34-48f9-8621-077ef1d7cafd%26pd_rd_w%3Dzj1nM%26pd_rd_wg%3DLSsNx%26pf_rd_p%3D24e1f0fb-6b39-49f5-b34a-4ebef8eaef82%26pf_rd_r%3DF6YVFHND1EFYBJ8AWPBC%26qid%3D1751883242%26sbo%3DRZvfv%252F%252FHxDF%252BO5021pAnSA%253D%253D%26sprefix%3Dlaptops%252Caps%252C214%26sr%3D1-33-2ec22325-1003-449d-8aaf-c0bcc24717ae-spons%26xpid%3D6G9gll5HrzPUY%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM%26psc%3D1&cr=DUB`
    },
    {
      title: `nan`,
      image: `https://m.media-amazon.com/images/I/71Xa4o1DXpL._AC_UL320_.jpg`,
      price: `₹67,490`,
      rating: `4.0`,
      count: `(262)`,
      link: `https://www.amazon.in/sspa/click?ie=UTF8&spc=MToxMzY2NTc1MTU4ODk5ODI0OjE3NTE4ODMyNTA6c3Bfc2VhcmNoX3RoZW1hdGljOjMwMDU0OTc0NDQyNzMzMjo6Mjo6&url=%2FHP-Pavilion-i5-1340P-Graphics-15-eg3079TU%2Fdp%2FB0C2D3NV1S%2Fref%3Dsxin_16_pa_sp_search_thematic_sspa%3Fcontent-id%3Damzn1.sym.24e1f0fb-6b39-49f5-b34a-4ebef8eaef82%253Aamzn1.sym.24e1f0fb-6b39-49f5-b34a-4ebef8eaef82%26crid%3D102YFPKZ8SCP8%26cv_ct_cx%3Dlaptops%26keywords%3Dlaptops%26pd_rd_i%3DB0C2D3NV1S%26pd_rd_r%3D7f8b98ca-0b34-48f9-8621-077ef1d7cafd%26pd_rd_w%3Dzj1nM%26pd_rd_wg%3DLSsNx%26pf_rd_p%3D24e1f0fb-6b39-49f5-b34a-4ebef8eaef82%26pf_rd_r%3DF6YVFHND1EFYBJ8AWPBC%26qid%3D1751883242%26sbo%3DRZvfv%252F%252FHxDF%252BO5021pAnSA%253D%253D%26sprefix%3Dlaptops%252Caps%252C214%26sr%3D1-34-2ec22325-1003-449d-8aaf-c0bcc24717ae-spons%26xpid%3D6G9gll5HrzPUY%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM%26psc%3D1&cr=DUB`
    },
    {
      title: `nan`,
      image: `https://m.media-amazon.com/images/I/71R6HbrvEwL._AC_UL320_.jpg`,
      price: `₹66,090`,
      rating: `4.0`,
      count: `(114)`,
      link: `https://www.amazon.in/sspa/click?ie=UTF8&spc=MToxMzY2NTc1MTU4ODk5ODI0OjE3NTE4ODMyNTA6c3Bfc2VhcmNoX3RoZW1hdGljOjMwMDU0OTc3ODEzMjAzMjo6Mzo6&url=%2FHP-i5-13420H-15-6-inch-Speakers-fa1307TX%2Fdp%2FB0D2LG3DRJ%2Fref%3Dsxin_16_pa_sp_search_thematic_sspa%3Fcontent-id%3Damzn1.sym.24e1f0fb-6b39-49f5-b34a-4ebef8eaef82%253Aamzn1.sym.24e1f0fb-6b39-49f5-b34a-4ebef8eaef82%26crid%3D102YFPKZ8SCP8%26cv_ct_cx%3Dlaptops%26keywords%3Dlaptops%26pd_rd_i%3DB0D2LG3DRJ%26pd_rd_r%3D7f8b98ca-0b34-48f9-8621-077ef1d7cafd%26pd_rd_w%3Dzj1nM%26pd_rd_wg%3DLSsNx%26pf_rd_p%3D24e1f0fb-6b39-49f5-b34a-4ebef8eaef82%26pf_rd_r%3DF6YVFHND1EFYBJ8AWPBC%26qid%3D1751883242%26sbo%3DRZvfv%252F%252FHxDF%252BO5021pAnSA%253D%253D%26sprefix%3Dlaptops%252Caps%252C214%26sr%3D1-35-2ec22325-1003-449d-8aaf-c0bcc24717ae-spons%26xpid%3D6G9gll5HrzPUY%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM%26psc%3D1&cr=DUB`
    },
    {
      title: `nan`,
      image: `https://m.media-amazon.com/images/I/71lmpgWjq-L._AC_UL320_.jpg`,
      price: `₹50,490`,
      rating: `4.0`,
      count: `(512)`,
      link: `https://www.amazon.in/sspa/click?ie=UTF8&spc=MToxMzY2NTc1MTU4ODk5ODI0OjE3NTE4ODMyNTA6c3Bfc2VhcmNoX3RoZW1hdGljOjMwMDQ1NjIyMjA4MjEzMjo6NDo6&url=%2FHP-i5-1235U-Anti-Glare-Micro-Edge-fy5009tu%2Fdp%2FB0D4M66F6R%2Fref%3Dsxin_16_pa_sp_search_thematic_sspa%3Fcontent-id%3Damzn1.sym.24e1f0fb-6b39-49f5-b34a-4ebef8eaef82%253Aamzn1.sym.24e1f0fb-6b39-49f5-b34a-4ebef8eaef82%26crid%3D102YFPKZ8SCP8%26cv_ct_cx%3Dlaptops%26keywords%3Dlaptops%26pd_rd_i%3DB0D4M66F6R%26pd_rd_r%3D7f8b98ca-0b34-48f9-8621-077ef1d7cafd%26pd_rd_w%3Dzj1nM%26pd_rd_wg%3DLSsNx%26pf_rd_p%3D24e1f0fb-6b39-49f5-b34a-4ebef8eaef82%26pf_rd_r%3DF6YVFHND1EFYBJ8AWPBC%26qid%3D1751883242%26sbo%3DRZvfv%252F%252FHxDF%252BO5021pAnSA%253D%253D%26sprefix%3Dlaptops%252Caps%252C214%26sr%3D1-36-2ec22325-1003-449d-8aaf-c0bcc24717ae-spons%26xpid%3D6G9gll5HrzPUY%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM%26psc%3D1&cr=DUB`
    }
  ];

  const pages = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold text-yellow-600 mb-6 text-center">Laptops – Page 10</h1>
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
            <button className={`px-3 py-1 border rounded ${p === 10 ? 'bg-yellow-400 text-white' : 'bg-white text-yellow-600'}`}>
              {p}
            </button>
          </Link>
        ))}
    
      </div>
    </main>
  );
}