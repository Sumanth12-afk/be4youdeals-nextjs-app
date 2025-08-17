import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import toast from "react-hot-toast";

export default function HeadphonesPage1() {
  const headphones = [
    {
      title: `BERIBES Bluetooth Headphones Over Ear, 65H Playtime and 6 EQ Music Modes Wireless Headphones with Microphone, HiFi Stereo Foldable Lightweight Headsets, Deep Bass for Home Office Cellphone PC Ect.`,
      image: `https://m.media-amazon.com/images/I/71F2ccIPPLL._AC_UY218_.jpg`,
      price: `$19.99 $28.99`,
      rating: `4.5`,
      count: `(41.3K) $19.99$19.99 List Price: $28.99`,
      link: `https://www.amazon.com/BERIBES-Bluetooth-Headphones-Microphone-Lightweight/dp/B09LYF2ST7/ref=cs_sr_dp_1?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.1Zuo4209eKemGrMd4fT6ViNwUwRZIrOUCT6YX5CDdJafGB-dELhKvK5QPZCrFxmF00ZWasTHG0s1L7rpnXu_dxLBSm7onELxWEoDsYuyTN9zoVgvZkpiXJY4x_yVIagww_e58w64za4KeADH4vAALOR5IaKgWpX9CHsndoSg_kfg17KC1lqjTks7njT_RO61mVfAQuZex5-tKoAO8H0f620m8HCRcKDfwOGZkAtwgz0.n85izgghgKA7PI1rhbr6OZqeUC8YGtVu1vNHWUoiMwI&dib_tag=se&keywords=headphones&qid=1751887435&sprefix=headphones%2Caps%2C335&sr=8-1 https://www.amazon.com/BERIBES-Bluetooth-Headphones-Microphone-Lightweight/dp/B0BV9F196L/ref=cs_sr_dp_2?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.1Zuo4209eKemGrMd4fT6ViNwUwRZIrOUCT6YX5CDdJafGB-dELhKvK5QPZCrFxmF00ZWasTHG0s1L7rpnXu_dxLBSm7onELxWEoDsYuyTN9zoVgvZkpiXJY4x_yVIagww_e58w64za4KeADH4vAALOR5IaKgWpX9CHsndoSg_kfg17KC1lqjTks7njT_RO61mVfAQuZex5-tKoAO8H0f620m8HCRcKDfwOGZkAtwgz0.n85izgghgKA7PI1rhbr6OZqeUC8YGtVu1vNHWUoiMwI&dib_tag=se&keywords=headphones&qid=1751887435&sprefix=headphones%2Caps%2C335&sr=8-1 https://www.amazon.com/BERIBES-Bluetooth-Headphones-Microphone-Lightweight/dp/B0C6F5ZBJX/ref=cs_sr_dp_3?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.1Zuo4209eKemGrMd4fT6ViNwUwRZIrOUCT6YX5CDdJafGB-dELhKvK5QPZCrFxmF00ZWasTHG0s1L7rpnXu_dxLBSm7onELxWEoDsYuyTN9zoVgvZkpiXJY4x_yVIagww_e58w64za4KeADH4vAALOR5IaKgWpX9CHsndoSg_kfg17KC1lqjTks7njT_RO61mVfAQuZex5-tKoAO8H0f620m8HCRcKDfwOGZkAtwgz0.n85izgghgKA7PI1rhbr6OZqeUC8YGtVu1vNHWUoiMwI&dib_tag=se&keywords=headphones&qid=1751887435&sprefix=headphones%2Caps%2C335&sr=8-1 https://www.amazon.com/BERIBES-Bluetooth-Headphones-Microphone-Lightweight/dp/B0B8YKH8PZ/ref=cs_sr_dp_4?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.1Zuo4209eKemGrMd4fT6ViNwUwRZIrOUCT6YX5CDdJafGB-dELhKvK5QPZCrFxmF00ZWasTHG0s1L7rpnXu_dxLBSm7onELxWEoDsYuyTN9zoVgvZkpiXJY4x_yVIagww_e58w64za4KeADH4vAALOR5IaKgWpX9CHsndoSg_kfg17KC1lqjTks7njT_RO61mVfAQuZex5-tKoAO8H0f620m8HCRcKDfwOGZkAtwgz0.n85izgghgKA7PI1rhbr6OZqeUC8YGtVu1vNHWUoiMwI&dib_tag=se&keywords=headphones&qid=1751887435&sprefix=headphones%2Caps%2C335&sr=8-1 https://www.amazon.com/BERIBES-Bluetooth-Headphones-Microphone-Lightweight/dp/B0B8YNRS6D/ref=cs_sr_dp_5?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.1Zuo4209eKemGrMd4fT6ViNwUwRZIrOUCT6YX5CDdJafGB-dELhKvK5QPZCrFxmF00ZWasTHG0s1L7rpnXu_dxLBSm7onELxWEoDsYuyTN9zoVgvZkpiXJY4x_yVIagww_e58w64za4KeADH4vAALOR5IaKgWpX9CHsndoSg_kfg17KC1lqjTks7njT_RO61mVfAQuZex5-tKoAO8H0f620m8HCRcKDfwOGZkAtwgz0.n85izgghgKA7PI1rhbr6OZqeUC8YGtVu1vNHWUoiMwI&dib_tag=se&keywords=headphones&qid=1751887435&sprefix=headphones%2Caps%2C335&sr=8-1`
    },
    {
      title: `Beats Solo 4 - Wireless Bluetooth On-Ear Headphones, Apple & Android Compatible, Up to 50 Hours of Battery Life - Matte Black`,
      image: `https://m.media-amazon.com/images/I/515FE+S4yLL._AC_UY218_.jpg`,
      price: `$99.95 $199.95`,
      rating: `4.6`,
      count: `(13.4K) $99.95$99.95 List: $199.95`,
      link: `https://www.amazon.com/deals https://www.amazon.com/Beats-Solo-Wireless-Headphones-Matte/dp/B0CZPLV566/ref=cs_sr_dp_1?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.1Zuo4209eKemGrMd4fT6ViNwUwRZIrOUCT6YX5CDdJafGB-dELhKvK5QPZCrFxmF00ZWasTHG0s1L7rpnXu_dxLBSm7onELxWEoDsYuyTN9zoVgvZkpiXJY4x_yVIagww_e58w64za4KeADH4vAALOR5IaKgWpX9CHsndoSg_kfg17KC1lqjTks7njT_RO61mVfAQuZex5-tKoAO8H0f620m8HCRcKDfwOGZkAtwgz0.n85izgghgKA7PI1rhbr6OZqeUC8YGtVu1vNHWUoiMwI&dib_tag=se&keywords=headphones&qid=1751887435&sprefix=headphones%2Caps%2C335&sr=8-2 https://www.amazon.com/Beats-Solo-Wireless-Headphones-Matte/dp/B0DDQLGDY3/ref=cs_sr_dp_2?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.1Zuo4209eKemGrMd4fT6ViNwUwRZIrOUCT6YX5CDdJafGB-dELhKvK5QPZCrFxmF00ZWasTHG0s1L7rpnXu_dxLBSm7onELxWEoDsYuyTN9zoVgvZkpiXJY4x_yVIagww_e58w64za4KeADH4vAALOR5IaKgWpX9CHsndoSg_kfg17KC1lqjTks7njT_RO61mVfAQuZex5-tKoAO8H0f620m8HCRcKDfwOGZkAtwgz0.n85izgghgKA7PI1rhbr6OZqeUC8YGtVu1vNHWUoiMwI&dib_tag=se&keywords=headphones&qid=1751887435&sprefix=headphones%2Caps%2C335&sr=8-2 https://www.amazon.com/Beats-Solo-Wireless-Headphones-Matte/dp/B0D27JH4M1/ref=cs_sr_dp_3?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.1Zuo4209eKemGrMd4fT6ViNwUwRZIrOUCT6YX5CDdJafGB-dELhKvK5QPZCrFxmF00ZWasTHG0s1L7rpnXu_dxLBSm7onELxWEoDsYuyTN9zoVgvZkpiXJY4x_yVIagww_e58w64za4KeADH4vAALOR5IaKgWpX9CHsndoSg_kfg17KC1lqjTks7njT_RO61mVfAQuZex5-tKoAO8H0f620m8HCRcKDfwOGZkAtwgz0.n85izgghgKA7PI1rhbr6OZqeUC8YGtVu1vNHWUoiMwI&dib_tag=se&keywords=headphones&qid=1751887435&sprefix=headphones%2Caps%2C335&sr=8-2 https://www.amazon.com/Beats-Solo-Wireless-Headphones-Matte/dp/B0D276VSJP/ref=cs_sr_dp_4?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.1Zuo4209eKemGrMd4fT6ViNwUwRZIrOUCT6YX5CDdJafGB-dELhKvK5QPZCrFxmF00ZWasTHG0s1L7rpnXu_dxLBSm7onELxWEoDsYuyTN9zoVgvZkpiXJY4x_yVIagww_e58w64za4KeADH4vAALOR5IaKgWpX9CHsndoSg_kfg17KC1lqjTks7njT_RO61mVfAQuZex5-tKoAO8H0f620m8HCRcKDfwOGZkAtwgz0.n85izgghgKA7PI1rhbr6OZqeUC8YGtVu1vNHWUoiMwI&dib_tag=se&keywords=headphones&qid=1751887435&sprefix=headphones%2Caps%2C335&sr=8-2`
    },
    {
      title: `JBL Tune 510BT - Bluetooth headphones with up to 40 hours battery, microphone for call, foldable and comfortable, Android and iOs compatible (Rose)`,
      image: `https://m.media-amazon.com/images/I/51Dd8aGSW0L._AC_UY218_.jpg`,
      price: `$49.95 $16.65`,
      rating: `4.5`,
      count: `(78.9K) $49.95$49.95`,
      link: `https://www.amazon.com/JBL-Tune-510BT-Ear-Headphones/dp/B092CP8ZH4/ref=cs_sr_dp_1?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.1Zuo4209eKemGrMd4fT6ViNwUwRZIrOUCT6YX5CDdJafGB-dELhKvK5QPZCrFxmF00ZWasTHG0s1L7rpnXu_dxLBSm7onELxWEoDsYuyTN9zoVgvZkpiXJY4x_yVIagww_e58w64za4KeADH4vAALOR5IaKgWpX9CHsndoSg_kfg17KC1lqjTks7njT_RO61mVfAQuZex5-tKoAO8H0f620m8HCRcKDfwOGZkAtwgz0.n85izgghgKA7PI1rhbr6OZqeUC8YGtVu1vNHWUoiMwI&dib_tag=se&keywords=headphones&qid=1751887435&sprefix=headphones%2Caps%2C335&sr=8-5&ufe=app_do%3Aamzn1.fos.9fe8cbfa-bf43-43d1-a707-3f4e65a4b666 https://www.amazon.com/JBL-Tune-510BT-Ear-Headphones/dp/B0CTKTRHBV/ref=cs_sr_dp_2?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.1Zuo4209eKemGrMd4fT6ViNwUwRZIrOUCT6YX5CDdJafGB-dELhKvK5QPZCrFxmF00ZWasTHG0s1L7rpnXu_dxLBSm7onELxWEoDsYuyTN9zoVgvZkpiXJY4x_yVIagww_e58w64za4KeADH4vAALOR5IaKgWpX9CHsndoSg_kfg17KC1lqjTks7njT_RO61mVfAQuZex5-tKoAO8H0f620m8HCRcKDfwOGZkAtwgz0.n85izgghgKA7PI1rhbr6OZqeUC8YGtVu1vNHWUoiMwI&dib_tag=se&keywords=headphones&qid=1751887435&sprefix=headphones%2Caps%2C335&sr=8-5&ufe=app_do%3Aamzn1.fos.9fe8cbfa-bf43-43d1-a707-3f4e65a4b666 https://www.amazon.com/JBL-Tune-510BT-Ear-Headphones/dp/B08WM1V5P1/ref=cs_sr_dp_3?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.1Zuo4209eKemGrMd4fT6ViNwUwRZIrOUCT6YX5CDdJafGB-dELhKvK5QPZCrFxmF00ZWasTHG0s1L7rpnXu_dxLBSm7onELxWEoDsYuyTN9zoVgvZkpiXJY4x_yVIagww_e58w64za4KeADH4vAALOR5IaKgWpX9CHsndoSg_kfg17KC1lqjTks7njT_RO61mVfAQuZex5-tKoAO8H0f620m8HCRcKDfwOGZkAtwgz0.n85izgghgKA7PI1rhbr6OZqeUC8YGtVu1vNHWUoiMwI&dib_tag=se&keywords=headphones&qid=1751887435&sprefix=headphones%2Caps%2C335&sr=8-5&ufe=app_do%3Aamzn1.fos.9fe8cbfa-bf43-43d1-a707-3f4e65a4b666 https://www.amazon.com/JBL-Tune-510BT-Ear-Headphones/dp/B08WM298TV/ref=cs_sr_dp_4?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.1Zuo4209eKemGrMd4fT6ViNwUwRZIrOUCT6YX5CDdJafGB-dELhKvK5QPZCrFxmF00ZWasTHG0s1L7rpnXu_dxLBSm7onELxWEoDsYuyTN9zoVgvZkpiXJY4x_yVIagww_e58w64za4KeADH4vAALOR5IaKgWpX9CHsndoSg_kfg17KC1lqjTks7njT_RO61mVfAQuZex5-tKoAO8H0f620m8HCRcKDfwOGZkAtwgz0.n85izgghgKA7PI1rhbr6OZqeUC8YGtVu1vNHWUoiMwI&dib_tag=se&keywords=headphones&qid=1751887435&sprefix=headphones%2Caps%2C335&sr=8-5&ufe=app_do%3Aamzn1.fos.9fe8cbfa-bf43-43d1-a707-3f4e65a4b666`
    },
    {
      title: `Sony ZX Series Wired On-Ear Headphones, Black MDR-ZX110`,
      image: `https://m.media-amazon.com/images/I/41CiQ7hR31L._AC_UY218_.jpg`,
      price: `$9.88 $12.99`,
      rating: `4.5`,
      count: `(108.2K) $9.88$9.88 List: $12.99`,
      link: `https://www.amazon.com/Sony-MDRZX110-BLK-Stereo-Headphones/dp/B00NJ2M33I/ref=cs_sr_dp_1?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.1Zuo4209eKemGrMd4fT6ViNwUwRZIrOUCT6YX5CDdJafGB-dELhKvK5QPZCrFxmF00ZWasTHG0s1L7rpnXu_dxLBSm7onELxWEoDsYuyTN9zoVgvZkpiXJY4x_yVIagww_e58w64za4KeADH4vAALOR5IaKgWpX9CHsndoSg_kfg17KC1lqjTks7njT_RO61mVfAQuZex5-tKoAO8H0f620m8HCRcKDfwOGZkAtwgz0.n85izgghgKA7PI1rhbr6OZqeUC8YGtVu1vNHWUoiMwI&dib_tag=se&keywords=headphones&qid=1751887435&sprefix=headphones%2Caps%2C335&sr=8-8 https://www.amazon.com/Sony-MDRZX110-BLK-Stereo-Headphones/dp/B00NJ2M43M/ref=cs_sr_dp_2?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.1Zuo4209eKemGrMd4fT6ViNwUwRZIrOUCT6YX5CDdJafGB-dELhKvK5QPZCrFxmF00ZWasTHG0s1L7rpnXu_dxLBSm7onELxWEoDsYuyTN9zoVgvZkpiXJY4x_yVIagww_e58w64za4KeADH4vAALOR5IaKgWpX9CHsndoSg_kfg17KC1lqjTks7njT_RO61mVfAQuZex5-tKoAO8H0f620m8HCRcKDfwOGZkAtwgz0.n85izgghgKA7PI1rhbr6OZqeUC8YGtVu1vNHWUoiMwI&dib_tag=se&keywords=headphones&qid=1751887435&sprefix=headphones%2Caps%2C335&sr=8-8`
    },
    {
      title: `Wireless Earbuds, Bluetooth Ear Buds with Big Bass Stereo Sound, 48 Hours Playtime, Lightweight in-Ear Fit Earphones, IPX7, Hands-Free Calls with AI for iPhone, Android, Pad, Sports, Workout`,
      image: `https://m.media-amazon.com/images/I/61r9nLGC1ZL._AC_UY218_.jpg`,
      price: `$19.99 $159.99`,
      rating: `4.8`,
      count: `(727) $19.99$19.99 Typical price: $159.99`,
      link: `https://www.amazon.com/ZZU-Bluetooth-Lightweight-Earphones-Hands-Free/dp/B0DYNGNLDT/ref=cs_sr_dp_1?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.1Zuo4209eKemGrMd4fT6ViNwUwRZIrOUCT6YX5CDdJafGB-dELhKvK5QPZCrFxmF00ZWasTHG0s1L7rpnXu_dxLBSm7onELxWEoDsYuyTN9zoVgvZkpiXJY4x_yVIagww_e58w64za4KeADH4vAALOR5IaKgWpX9CHsndoSg_kfg17KC1lqjTks7njT_RO61mVfAQuZex5-tKoAO8H0f620m8HCRcKDfwOGZkAtwgz0.n85izgghgKA7PI1rhbr6OZqeUC8YGtVu1vNHWUoiMwI&dib_tag=se&keywords=headphones&qid=1751887435&sprefix=headphones%2Caps%2C335&sr=8-9 https://www.amazon.com/ZZU-Bluetooth-Lightweight-Earphones-Hands-Free/dp/B0F4K96VFQ/ref=cs_sr_dp_2?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.1Zuo4209eKemGrMd4fT6ViNwUwRZIrOUCT6YX5CDdJafGB-dELhKvK5QPZCrFxmF00ZWasTHG0s1L7rpnXu_dxLBSm7onELxWEoDsYuyTN9zoVgvZkpiXJY4x_yVIagww_e58w64za4KeADH4vAALOR5IaKgWpX9CHsndoSg_kfg17KC1lqjTks7njT_RO61mVfAQuZex5-tKoAO8H0f620m8HCRcKDfwOGZkAtwgz0.n85izgghgKA7PI1rhbr6OZqeUC8YGtVu1vNHWUoiMwI&dib_tag=se&keywords=headphones&qid=1751887435&sprefix=headphones%2Caps%2C335&sr=8-9 https://www.amazon.com/ZZU-Bluetooth-Lightweight-Earphones-Hands-Free/dp/B0F4K72875/ref=cs_sr_dp_3?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.1Zuo4209eKemGrMd4fT6ViNwUwRZIrOUCT6YX5CDdJafGB-dELhKvK5QPZCrFxmF00ZWasTHG0s1L7rpnXu_dxLBSm7onELxWEoDsYuyTN9zoVgvZkpiXJY4x_yVIagww_e58w64za4KeADH4vAALOR5IaKgWpX9CHsndoSg_kfg17KC1lqjTks7njT_RO61mVfAQuZex5-tKoAO8H0f620m8HCRcKDfwOGZkAtwgz0.n85izgghgKA7PI1rhbr6OZqeUC8YGtVu1vNHWUoiMwI&dib_tag=se&keywords=headphones&qid=1751887435&sprefix=headphones%2Caps%2C335&sr=8-9 https://www.amazon.com/ZZU-Bluetooth-Lightweight-Earphones-Hands-Free/dp/B0F4K4Y5B5/ref=cs_sr_dp_4?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.1Zuo4209eKemGrMd4fT6ViNwUwRZIrOUCT6YX5CDdJafGB-dELhKvK5QPZCrFxmF00ZWasTHG0s1L7rpnXu_dxLBSm7onELxWEoDsYuyTN9zoVgvZkpiXJY4x_yVIagww_e58w64za4KeADH4vAALOR5IaKgWpX9CHsndoSg_kfg17KC1lqjTks7njT_RO61mVfAQuZex5-tKoAO8H0f620m8HCRcKDfwOGZkAtwgz0.n85izgghgKA7PI1rhbr6OZqeUC8YGtVu1vNHWUoiMwI&dib_tag=se&keywords=headphones&qid=1751887435&sprefix=headphones%2Caps%2C335&sr=8-9 https://www.amazon.com/ZZU-Bluetooth-Lightweight-Earphones-Hands-Free/dp/B0F53NX7VZ/ref=cs_sr_dp_5?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.1Zuo4209eKemGrMd4fT6ViNwUwRZIrOUCT6YX5CDdJafGB-dELhKvK5QPZCrFxmF00ZWasTHG0s1L7rpnXu_dxLBSm7onELxWEoDsYuyTN9zoVgvZkpiXJY4x_yVIagww_e58w64za4KeADH4vAALOR5IaKgWpX9CHsndoSg_kfg17KC1lqjTks7njT_RO61mVfAQuZex5-tKoAO8H0f620m8HCRcKDfwOGZkAtwgz0.n85izgghgKA7PI1rhbr6OZqeUC8YGtVu1vNHWUoiMwI&dib_tag=se&keywords=headphones&qid=1751887435&sprefix=headphones%2Caps%2C335&sr=8-9 https://www.amazon.com/ZZU-Bluetooth-Lightweight-Earphones-Hands-Free/dp/B0F99S8W8K/ref=cs_sr_dp_6?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.1Zuo4209eKemGrMd4fT6ViNwUwRZIrOUCT6YX5CDdJafGB-dELhKvK5QPZCrFxmF00ZWasTHG0s1L7rpnXu_dxLBSm7onELxWEoDsYuyTN9zoVgvZkpiXJY4x_yVIagww_e58w64za4KeADH4vAALOR5IaKgWpX9CHsndoSg_kfg17KC1lqjTks7njT_RO61mVfAQuZex5-tKoAO8H0f620m8HCRcKDfwOGZkAtwgz0.n85izgghgKA7PI1rhbr6OZqeUC8YGtVu1vNHWUoiMwI&dib_tag=se&keywords=headphones&qid=1751887435&sprefix=headphones%2Caps%2C335&sr=8-9`
    },
    {
      title: `Sony WH-CH520 Wireless Headphones Bluetooth On-Ear Headset with Microphone, Black New`,
      image: `https://m.media-amazon.com/images/I/41lArSiD5hL._AC_UY218_.jpg`,
      price: `$39.99 $59.99`,
      rating: `4.5`,
      count: `(22.1K) $39.99$39.99 List: $59.99`,
      link: `https://www.amazon.com/Sony-WH-CH520-Headphones-Bluetooth-Microphone/dp/B0BS1PRC4L/ref=cs_sr_dp_1?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.1Zuo4209eKemGrMd4fT6ViNwUwRZIrOUCT6YX5CDdJafGB-dELhKvK5QPZCrFxmF00ZWasTHG0s1L7rpnXu_dxLBSm7onELxWEoDsYuyTN9zoVgvZkpiXJY4x_yVIagww_e58w64za4KeADH4vAALOR5IaKgWpX9CHsndoSg_kfg17KC1lqjTks7njT_RO61mVfAQuZex5-tKoAO8H0f620m8HCRcKDfwOGZkAtwgz0.n85izgghgKA7PI1rhbr6OZqeUC8YGtVu1vNHWUoiMwI&dib_tag=se&keywords=headphones&qid=1751887435&sprefix=headphones%2Caps%2C335&sr=8-10 https://www.amazon.com/Sony-WH-CH520-Headphones-Bluetooth-Microphone/dp/B0BS1RT9S2/ref=cs_sr_dp_2?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.1Zuo4209eKemGrMd4fT6ViNwUwRZIrOUCT6YX5CDdJafGB-dELhKvK5QPZCrFxmF00ZWasTHG0s1L7rpnXu_dxLBSm7onELxWEoDsYuyTN9zoVgvZkpiXJY4x_yVIagww_e58w64za4KeADH4vAALOR5IaKgWpX9CHsndoSg_kfg17KC1lqjTks7njT_RO61mVfAQuZex5-tKoAO8H0f620m8HCRcKDfwOGZkAtwgz0.n85izgghgKA7PI1rhbr6OZqeUC8YGtVu1vNHWUoiMwI&dib_tag=se&keywords=headphones&qid=1751887435&sprefix=headphones%2Caps%2C335&sr=8-10 https://www.amazon.com/Sony-WH-CH520-Headphones-Bluetooth-Microphone/dp/B0DY8XNFP9/ref=cs_sr_dp_3?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.1Zuo4209eKemGrMd4fT6ViNwUwRZIrOUCT6YX5CDdJafGB-dELhKvK5QPZCrFxmF00ZWasTHG0s1L7rpnXu_dxLBSm7onELxWEoDsYuyTN9zoVgvZkpiXJY4x_yVIagww_e58w64za4KeADH4vAALOR5IaKgWpX9CHsndoSg_kfg17KC1lqjTks7njT_RO61mVfAQuZex5-tKoAO8H0f620m8HCRcKDfwOGZkAtwgz0.n85izgghgKA7PI1rhbr6OZqeUC8YGtVu1vNHWUoiMwI&dib_tag=se&keywords=headphones&qid=1751887435&sprefix=headphones%2Caps%2C335&sr=8-10 https://www.amazon.com/Sony-WH-CH520-Headphones-Bluetooth-Microphone/dp/B0BSGQL41X/ref=cs_sr_dp_4?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.1Zuo4209eKemGrMd4fT6ViNwUwRZIrOUCT6YX5CDdJafGB-dELhKvK5QPZCrFxmF00ZWasTHG0s1L7rpnXu_dxLBSm7onELxWEoDsYuyTN9zoVgvZkpiXJY4x_yVIagww_e58w64za4KeADH4vAALOR5IaKgWpX9CHsndoSg_kfg17KC1lqjTks7njT_RO61mVfAQuZex5-tKoAO8H0f620m8HCRcKDfwOGZkAtwgz0.n85izgghgKA7PI1rhbr6OZqeUC8YGtVu1vNHWUoiMwI&dib_tag=se&keywords=headphones&qid=1751887435&sprefix=headphones%2Caps%2C335&sr=8-10 https://www.amazon.com/Sony-WH-CH520-Headphones-Bluetooth-Microphone/dp/B0DY918NGN/ref=cs_sr_dp_5?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.1Zuo4209eKemGrMd4fT6ViNwUwRZIrOUCT6YX5CDdJafGB-dELhKvK5QPZCrFxmF00ZWasTHG0s1L7rpnXu_dxLBSm7onELxWEoDsYuyTN9zoVgvZkpiXJY4x_yVIagww_e58w64za4KeADH4vAALOR5IaKgWpX9CHsndoSg_kfg17KC1lqjTks7njT_RO61mVfAQuZex5-tKoAO8H0f620m8HCRcKDfwOGZkAtwgz0.n85izgghgKA7PI1rhbr6OZqeUC8YGtVu1vNHWUoiMwI&dib_tag=se&keywords=headphones&qid=1751887435&sprefix=headphones%2Caps%2C335&sr=8-10 https://www.amazon.com/Sony-WH-CH520-Headphones-Bluetooth-Microphone/dp/B0BS1QB15L/ref=cs_sr_dp_6?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.1Zuo4209eKemGrMd4fT6ViNwUwRZIrOUCT6YX5CDdJafGB-dELhKvK5QPZCrFxmF00ZWasTHG0s1L7rpnXu_dxLBSm7onELxWEoDsYuyTN9zoVgvZkpiXJY4x_yVIagww_e58w64za4KeADH4vAALOR5IaKgWpX9CHsndoSg_kfg17KC1lqjTks7njT_RO61mVfAQuZex5-tKoAO8H0f620m8HCRcKDfwOGZkAtwgz0.n85izgghgKA7PI1rhbr6OZqeUC8YGtVu1vNHWUoiMwI&dib_tag=se&keywords=headphones&qid=1751887435&sprefix=headphones%2Caps%2C335&sr=8-10`
    },
    {
      title: `Beats Studio Pro - Wireless Bluetooth Noise Cancelling Headphones - Personalized Spatial Audio, USB-C Lossless Audio, Apple & Android Compatibility, Up to 40 Hours Battery Life - Black`,
      image: `https://m.media-amazon.com/images/I/61u-OaDSfQL._AC_UY218_.jpg`,
      price: `$179.95 $349.99`,
      rating: `4.5`,
      count: `(22.1K) $179.95$179.95 List: $349.99`,
      link: `https://www.amazon.com/Beats-Studio-Pro-Personalized-Compatibility/dp/B0C8PR4W22/ref=cs_sr_dp_1?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.1Zuo4209eKemGrMd4fT6ViNwUwRZIrOUCT6YX5CDdJafGB-dELhKvK5QPZCrFxmF00ZWasTHG0s1L7rpnXu_dxLBSm7onELxWEoDsYuyTN9zoVgvZkpiXJY4x_yVIagww_e58w64za4KeADH4vAALOR5IaKgWpX9CHsndoSg_kfg17KC1lqjTks7njT_RO61mVfAQuZex5-tKoAO8H0f620m8HCRcKDfwOGZkAtwgz0.n85izgghgKA7PI1rhbr6OZqeUC8YGtVu1vNHWUoiMwI&dib_tag=se&keywords=headphones&qid=1751887435&sprefix=headphones%2Caps%2C335&sr=8-12 https://www.amazon.com/Beats-Studio-Pro-Personalized-Compatibility/dp/B0CMZD8688/ref=cs_sr_dp_2?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.1Zuo4209eKemGrMd4fT6ViNwUwRZIrOUCT6YX5CDdJafGB-dELhKvK5QPZCrFxmF00ZWasTHG0s1L7rpnXu_dxLBSm7onELxWEoDsYuyTN9zoVgvZkpiXJY4x_yVIagww_e58w64za4KeADH4vAALOR5IaKgWpX9CHsndoSg_kfg17KC1lqjTks7njT_RO61mVfAQuZex5-tKoAO8H0f620m8HCRcKDfwOGZkAtwgz0.n85izgghgKA7PI1rhbr6OZqeUC8YGtVu1vNHWUoiMwI&dib_tag=se&keywords=headphones&qid=1751887435&sprefix=headphones%2Caps%2C335&sr=8-12 https://www.amazon.com/Beats-Studio-Pro-Personalized-Compatibility/dp/B0DBRZD6S5/ref=cs_sr_dp_3?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.1Zuo4209eKemGrMd4fT6ViNwUwRZIrOUCT6YX5CDdJafGB-dELhKvK5QPZCrFxmF00ZWasTHG0s1L7rpnXu_dxLBSm7onELxWEoDsYuyTN9zoVgvZkpiXJY4x_yVIagww_e58w64za4KeADH4vAALOR5IaKgWpX9CHsndoSg_kfg17KC1lqjTks7njT_RO61mVfAQuZex5-tKoAO8H0f620m8HCRcKDfwOGZkAtwgz0.n85izgghgKA7PI1rhbr6OZqeUC8YGtVu1vNHWUoiMwI&dib_tag=se&keywords=headphones&qid=1751887435&sprefix=headphones%2Caps%2C335&sr=8-12 https://www.amazon.com/Beats-Studio-Pro-Personalized-Compatibility/dp/B0D94YRL99/ref=cs_sr_dp_4?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.1Zuo4209eKemGrMd4fT6ViNwUwRZIrOUCT6YX5CDdJafGB-dELhKvK5QPZCrFxmF00ZWasTHG0s1L7rpnXu_dxLBSm7onELxWEoDsYuyTN9zoVgvZkpiXJY4x_yVIagww_e58w64za4KeADH4vAALOR5IaKgWpX9CHsndoSg_kfg17KC1lqjTks7njT_RO61mVfAQuZex5-tKoAO8H0f620m8HCRcKDfwOGZkAtwgz0.n85izgghgKA7PI1rhbr6OZqeUC8YGtVu1vNHWUoiMwI&dib_tag=se&keywords=headphones&qid=1751887435&sprefix=headphones%2Caps%2C335&sr=8-12 https://www.amazon.com/Beats-Studio-Pro-Personalized-Compatibility/dp/B0DG9ZTQPF/ref=cs_sr_dp_5?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.1Zuo4209eKemGrMd4fT6ViNwUwRZIrOUCT6YX5CDdJafGB-dELhKvK5QPZCrFxmF00ZWasTHG0s1L7rpnXu_dxLBSm7onELxWEoDsYuyTN9zoVgvZkpiXJY4x_yVIagww_e58w64za4KeADH4vAALOR5IaKgWpX9CHsndoSg_kfg17KC1lqjTks7njT_RO61mVfAQuZex5-tKoAO8H0f620m8HCRcKDfwOGZkAtwgz0.n85izgghgKA7PI1rhbr6OZqeUC8YGtVu1vNHWUoiMwI&dib_tag=se&keywords=headphones&qid=1751887435&sprefix=headphones%2Caps%2C335&sr=8-12 https://www.amazon.com/Beats-Studio-Pro-Personalized-Compatibility/dp/B0DBSKGDY2/ref=cs_sr_dp_6?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.1Zuo4209eKemGrMd4fT6ViNwUwRZIrOUCT6YX5CDdJafGB-dELhKvK5QPZCrFxmF00ZWasTHG0s1L7rpnXu_dxLBSm7onELxWEoDsYuyTN9zoVgvZkpiXJY4x_yVIagww_e58w64za4KeADH4vAALOR5IaKgWpX9CHsndoSg_kfg17KC1lqjTks7njT_RO61mVfAQuZex5-tKoAO8H0f620m8HCRcKDfwOGZkAtwgz0.n85izgghgKA7PI1rhbr6OZqeUC8YGtVu1vNHWUoiMwI&dib_tag=se&keywords=headphones&qid=1751887435&sprefix=headphones%2Caps%2C335&sr=8-12`
    },
    {
      title: `Soundcore Anker Life Q20 Hybrid Active Noise Cancelling Headphones, Wireless Over Ear Bluetooth Headphones, 70H Playtime, Hi-Res Audio, Deep Bass, Memory Foam Ear Cups, Travel, Office, USB-C Charging`,
      image: `https://m.media-amazon.com/images/I/61OHplw85eL._AC_UY218_.jpg https://m.media-amazon.com/images/I/11++B3A2NEL._SS200_.png`,
      price: `$39.99 $59.99`,
      rating: `4.4`,
      count: `(2.5K) $39.99$39.99 List Price: $59.99 <img alt="Climate Pledge Friendly" src="https://m.media-amazon.com/images/I/21AGu0JFvKL.svg" height="24px" width="186px"/> Discover more products with sustainability features. Learn more`,
      link: `https://www.amazon.com/Soundcore-Cancelling-Headphones-Wireless-Bluetooth/dp/B0DLKB5V35/ref=cs_sr_dp_1?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.1Zuo4209eKemGrMd4fT6ViNwUwRZIrOUCT6YX5CDdJafGB-dELhKvK5QPZCrFxmF00ZWasTHG0s1L7rpnXu_dxLBSm7onELxWEoDsYuyTN9zoVgvZkpiXJY4x_yVIagww_e58w64za4KeADH4vAALOR5IaKgWpX9CHsndoSg_kfg17KC1lqjTks7njT_RO61mVfAQuZex5-tKoAO8H0f620m8HCRcKDfwOGZkAtwgz0.n85izgghgKA7PI1rhbr6OZqeUC8YGtVu1vNHWUoiMwI&dib_tag=se&keywords=headphones&qid=1751887435&sprefix=headphones%2Caps%2C335&sr=8-13 https://www.amazon.com/Soundcore-Cancelling-Headphones-Wireless-Bluetooth/dp/B0DLKBR23Y/ref=cs_sr_dp_2?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.1Zuo4209eKemGrMd4fT6ViNwUwRZIrOUCT6YX5CDdJafGB-dELhKvK5QPZCrFxmF00ZWasTHG0s1L7rpnXu_dxLBSm7onELxWEoDsYuyTN9zoVgvZkpiXJY4x_yVIagww_e58w64za4KeADH4vAALOR5IaKgWpX9CHsndoSg_kfg17KC1lqjTks7njT_RO61mVfAQuZex5-tKoAO8H0f620m8HCRcKDfwOGZkAtwgz0.n85izgghgKA7PI1rhbr6OZqeUC8YGtVu1vNHWUoiMwI&dib_tag=se&keywords=headphones&qid=1751887435&sprefix=headphones%2Caps%2C335&sr=8-13 https://www.amazon.com/Soundcore-Cancelling-Headphones-Wireless-Bluetooth/dp/B0D1QR8NL8/ref=cs_sr_dp_3?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.1Zuo4209eKemGrMd4fT6ViNwUwRZIrOUCT6YX5CDdJafGB-dELhKvK5QPZCrFxmF00ZWasTHG0s1L7rpnXu_dxLBSm7onELxWEoDsYuyTN9zoVgvZkpiXJY4x_yVIagww_e58w64za4KeADH4vAALOR5IaKgWpX9CHsndoSg_kfg17KC1lqjTks7njT_RO61mVfAQuZex5-tKoAO8H0f620m8HCRcKDfwOGZkAtwgz0.n85izgghgKA7PI1rhbr6OZqeUC8YGtVu1vNHWUoiMwI&dib_tag=se&keywords=headphones&qid=1751887435&sprefix=headphones%2Caps%2C335&sr=8-13 https://www.amazon.com/Soundcore-Cancelling-Headphones-Wireless-Bluetooth/dp/B0DLK9Z7BX/ref=cs_sr_dp_4?crid=1GDADAH73VRVA&dib=eyJ2IjoiMSJ9.1Zuo4209eKemGrMd4fT6ViNwUwRZIrOUCT6YX5CDdJafGB-dELhKvK5QPZCrFxmF00ZWasTHG0s1L7rpnXu_dxLBSm7onELxWEoDsYuyTN9zoVgvZkpiXJY4x_yVIagww_e58w64za4KeADH4vAALOR5IaKgWpX9CHsndoSg_kfg17KC1lqjTks7njT_RO61mVfAQuZex5-tKoAO8H0f620m8HCRcKDfwOGZkAtwgz0.n85izgghgKA7PI1rhbr6OZqeUC8YGtVu1vNHWUoiMwI&dib_tag=se&keywords=headphones&qid=1751887435&sprefix=headphones%2Caps%2C335&sr=8-13`
    }
  ];

  const pages = Array.from({ length: 10 }, (_, i) => i + 1);

  const handleAddToWishlist = (headphone: any) => {
    const wishlistItem = {
      id: `headphone-${Date.now()}`,
      name: headphone.title === "nan" ? "Premium Headphones" : headphone.title,
      price: headphone.price,
      image: headphone.image,
      category: "Headphones",
      addedDate: new Date().toISOString(),
      link: headphone.link
    };

    const existingWishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    const isAlreadyInWishlist = existingWishlist.some((item: any) => 
      item.name === wishlistItem.name && item.category === wishlistItem.category
    );

    if (isAlreadyInWishlist) {
      toast('Already in wishlist!', {
        icon: '💔',
        style: {
          background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
          color: 'white',
          borderRadius: '16px',
          padding: '12px 20px',
          fontSize: '14px',
          fontWeight: '600'
        },
        duration: 2000,
        position: 'bottom-center'
      });
      return;
    }

    const updatedWishlist = [...existingWishlist, wishlistItem];
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));

    toast(`❤️ Added to wishlist!`, {
      icon: '🎉',
      style: {
        background: 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)',
        color: 'white',
        borderRadius: '16px',
        padding: '12px 20px',
        fontSize: '14px',
        fontWeight: '600',
        boxShadow: '0 10px 25px rgba(236, 72, 153, 0.3)'
      },
      duration: 3000,
      position: 'bottom-center'
    });
  };

  const handleBuyClick = (link: string, productName: string) => {
    toast(`🛒 Redirecting to Amazon for ${productName}...`, {
      icon: '🚀',
      style: {
        background: 'linear-gradient(135deg, #4f46e5 0%, #06b6d4 100%)',
        color: 'white',
        borderRadius: '16px',
        padding: '12px 20px',
        fontSize: '14px',
        fontWeight: '600',
        boxShadow: '0 10px 25px rgba(79, 70, 229, 0.3)'
      },
      duration: 2000,
      position: 'bottom-center'
    });
    
    setTimeout(() => {
      window.open(link, '_blank', 'noopener,noreferrer');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full opacity-10 blur-3xl floating-3d"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-cyan-500 rounded-full opacity-15 blur-3xl floating-3d" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-indigo-500 rounded-full opacity-8 blur-3xl floating-3d" style={{animationDelay: '4s'}}></div>
      </div>

      <main className="relative z-10 px-6 py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
            🎧 Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Headphones</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover the best deals on premium headphones with exceptional sound quality
          </p>
          <div className="mt-6 inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
            <span className="text-cyan-400 font-semibold mr-2">Page 1</span>
            <span className="text-gray-400">•</span>
            <span className="text-white ml-2">{headphones.length} Products</span>
          </div>
        </motion.div>

        {/* Products Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {headphones.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10 shadow-2xl group overflow-hidden relative"
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                
                {/* Wishlist Button */}
                <button
                  onClick={() => handleAddToWishlist(item)}
                  className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-pink-500 rounded-full backdrop-blur-sm border border-white/20 text-gray-400 hover:text-white transition-all duration-300 z-10"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>

                {/* Product Image */}
                <div className="relative mb-6 h-48 bg-white/5 rounded-2xl overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-300" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                </div>

                {/* Product Info */}
                <h2 className="text-lg font-bold text-white mb-3 line-clamp-2 group-hover:text-cyan-400 transition-colors">
                  {item.title.length > 60 ? item.title.substring(0, 60) + "..." : item.title}
                </h2>

                {/* Rating */}
                <div className="flex items-center mb-3">
                  <span className="text-yellow-400 text-lg mr-2">⭐</span>
                  <span className="text-white font-semibold">{item.rating}</span>
                  <span className="text-gray-400 text-sm ml-2">({item.count.match(/\((.*?)\)/)?.[1] || 'N/A'})</span>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-black text-green-400">
                      ${item.price.split(' ')[0].replace('$', '')}
                    </span>
                    {item.price.includes(' ') && (
                      <span className="text-gray-400 line-through text-lg">
                        {item.price.split(' ')[1]}
                      </span>
                    )}
                  </div>
                  {item.price.includes(' ') && (
                    <span className="text-green-400 text-sm font-semibold">
                      You save: ${(parseFloat(item.price.split(' ')[1].replace('$', '')) - parseFloat(item.price.split(' ')[0].replace('$', ''))).toFixed(2)}
                    </span>
                  )}
                </div>

                {/* Buy Button */}
                <button
                  onClick={() => handleBuyClick(item.link, item.title.substring(0, 30) + "...")}
                  className="w-full bg-gradient-to-r from-orange-400 to-yellow-300 text-black font-bold py-3 px-6 rounded-2xl text-sm shadow-2xl hover:scale-105 hover:from-orange-500 hover:to-yellow-400 transition-all duration-300 relative overflow-hidden"
                >
                  <span className="flex items-center justify-center gap-2">
                    <span>🛒</span>
                    <span>Buy on Amazon</span>
                  </span>
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 flex justify-center gap-3 flex-wrap"
        >
          {pages.map((p) => (
            <Link href={`/headphones/page/${p}`} key={p}>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`w-12 h-12 rounded-full font-bold transition-all duration-300 ${
                  p === 1 
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg' 
                    : 'bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20'
                }`}
              >
                {p}
              </motion.button>
            </Link>
          ))}
        </motion.div>
      </main>
    </div>
  );
}
