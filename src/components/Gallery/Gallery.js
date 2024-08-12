"use client";
import React, {useState, useRef, useEffect} from "react";
import {LayoutGrid} from "./GalleryComponent";

export default function LayoutGridDemo() {
  return (
    <div className="h-screen  w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        House in the woods
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A serene and tranquil retreat, this house in the woods offers a peaceful
        escape from the hustle and bustle of city life.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        House above the clouds
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Perched high above the world, this house offers breathtaking views and a
        unique living experience. It&apos;s a place where the sky meets home,
        and tranquility is a way of life.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Greens all over
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Rivers are serene
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "https://lh3.googleusercontent.com/fife/ALs6j_EK1wgpEi9Nhy2eYlDQyldbsHgan7_bq7ymrPZIB2EA-3b4xzqYx2lGbN8E4JtsYMD3v2KDepqs7pmNy8SRZ6Yl_WCy4053QYjYEJjMNiySzeFoVmNJ_bEpxIky3JKfsST87RLa6IFcRiTZtFaCwJVznlGMs90zyxKTkrWeuArBoCAraizeX5HMn7euuxNKky0yFMXT4o_t9L-AyuTgQowWAXlYZo7zGOfaHEv09lN3BW1RdnNYqLZen4qc-OH3y0Lb_5cQOS1LiDdk7ADw7oRWl2aJreD4l4pmYUasbwCDonpMKRaaLVNmqMEohXGTnamRWxKU5LxLn2lTXmGhtv9nulPF9JH0RYxNHSP-gjtj_vMlpJ4tfVK1WkCd7blfCVshoJ_HZ1yfiMp-bTcJP14xzWHMiQpsvIwqIGG3M1WRFCqtv2I8wvNDra0PmB49jcLdAE7lsdNberdbM67NvHl9USbMesW_fQ2vnCjohvASxfAYOeGWnhtYnFc3ZRNDUpK5Wwl3OeARDGBC20HJyIjFFQJP6HQi2kKmQr1cqbtuP9Rg7SKroHpd18-JEJgJLoymVNi0WF9Vkz66MhEmuocelx66PtNk7j61YWlMXADIZO2LWU_1SovJAPs38wwQHV2Tg4eoaLVzRV862_cXamkbupmo8J88DImEbKhjcdiJFJ3UZc6iNuOQi0Wjrj_S_NoZ3I1delyDlc8kGaegFp_Gm34fc_bQy5BHYud85aS_h8Qe4-EVLBoJu150qLSdMlH7nmTKTpA273KQvy-87TQditU596j1ZuBf9QLWTgYqJMno87b3XPwpBwBXNTwwKBbD5lIYzMac8V-J2qslovL3kWQFmiqpu8-vFSx34lQw3nwJTmF02-uS92YOYuS7iaeyW3W5IFtKoFzSbLj09LEKFyYNDB9XuEg1Dm5A9BJAmBt3gKul52jFO6yI6rkDLg6J-aDKofW7pkCpwZJApCJb0T05HViwibbRI6AClk-h6HPQ2zzDINc7gVeFD4LwVYBYRvCHn1hShkWOwXFE0lGkUGEuKI90Vf60Cx7QdYF-kpGvuYjrw_BC8fSxTc0mJhxIetAUumtbuZeDwQAnaXtczK5pPoOOsX2tS1vojmV7EmwBehe_tq88Kx_g17O9ZpIh7YWcsqq0otHbZjBUO0RsKdJMpwuHqie2GNLTiQ0-D6mcv1V10R2zfKdPjkBCjDEwRGivDSzflT-pU9l6K7empyuTGVA7svK7wWtx6_g8Ievs7n40ewIcFyNfmeqGWR6ZJjlGcsL4sk0SEZY0nSUaDSE05yYoshVi0el01GqT93bqIVT6nbAtZm5qDC4X4uDmr2PMjecHps3FeEPdtixyDwPWR9aNt-y5XrTTIhZmJ7QFANtIZf2Eo8S4Ua7WR5k93mRNky4-fX4ii-f9jIIuFNxn2VheMEH0u7NVHj4f6XGthpMi9lW8kLJzD7tP8T3hR1r0xPpM0HSAYohZG60jORBdrrhmsRj785w8LI-ySNHlyS4orBR5MBXdpzZSIPVv90Qp5hgRlG3PmbPs0-gA7TUqPGR89ga4oytqbhiXp-t8w1_KYASZQpE31d21bgj3xUKCHULg2gV3=w2880-h1448",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "https://lh3.googleusercontent.com/fife/ALs6j_Gg09Fo2U_jB7eshvoXFDoeDAlicvuNbEGFKleesb7SeFbJRwP1K8JymKmqSUtdswvWzgKpEmrbRWCcWizSk-CTK-ARdYY5CtegFec648Ty4jPawcmLB4p9pvbXozK1uETeOHArig3K12EyPY97vly8jj4s7bf36fPIQksOFjiuua3narJBOBN3Is4wpMradSSt08uRoui7cj62_NO4sz3DLFW4_wgLm-MARgjjRAjfodHUASBJG5jIRav4Y0nmtYPiXNREPOahcPJeRjt580dA1nry0odM8ilGYZul0l18yYkcjcUJ8cdmqZesT4VS3NjeMUGSzN48pAMtx8TWmiPSdzoYxsrodU7Wr-UBe6e9DIQF8EPmfrM-KtgTFOy6JMGMRyNzG-RSGF4X77OjJ6WryJdc2EoHA9pI1sHidd3u3zcpAWrAEz350qekrvOglja9UP2ybYMua5ZldcQIuI0YVNVv2FuYqPpxlC7OgSReRF0jDndr5Qu9gWQdqhFq4nTNmsDAQm6zXEesNaasPzYjZKDu90ZOJL7VqkoQfTjotog94ixGGtPWj8fN4SlNlWyS7PhKXeg1MtUd1mZcjFqoFJRXWrWZ665KnejSpcBBB9tJpIDuHCVKSbsRwAzt8ikt-wISApRyUyzTEkMQ62EnWKlPgWURm8GRTPU24Ve3NAHWv-HBdlBJhXJnEk_5hC9J3cLIb6arTw_-_sI_nq9HUPhYfEg2wQ_DyF842toFgUxIg6BRTrLPNIqd60bu9PxGYS2V-Dyph5yQA2hOg9P7YrssLJaulgJSb7SHKOCaZw2TNJB12BwrgDH5e4tuahIZRmyyGfyNaalVrc0_doSycqFOWQHr2DnaXh4wSvWL4SqOHlgAVsj1dh11xUTrgEhgjsnXvcvRhA3HWHl_vQWxQySqxEH4VDvCWdz17Z6WDkYSKGcBU0p7njRtm4g4NMEZ-o2Lb3BRrz4Lf03FNwQmqS2lc-zb6wV2E-T-fS38Q4uKAYvXQAy_PXaF1uLgbjET_yQ3v8c1CAD3Pma9LLVK5NIYCy1CDjMDqg6fPgPC3hfE_DY5arvy1-4qG0e1tAgvmp-rEma9Kds3znsZeysNiWo8vRhg9t38dEkbVkDweYACsjYZx3LNa0GDiJzi4EadiWAYA1hhPDuDHcrzlLL8bnqbK08yObA8f7GYNroXQeGs9PkoDyoIeUSYuqxoxZMZneztiMENUMmHRn_qgRrKm3Px41yEdkqAaa0ROtJWig1KAeUiTo1cNebTZ5oisw6Km8YjLJyxqBXewCUBuGUa3bHmmIeH9Gn8yrmiOLESCyjz3_wDsXOiCLgtZZ9d56wf5tdAj183Zbi_I1IjTbnzny87y4Dg039eETtvEnwVgfJA-sMCgjSWYRmtWcMnm4uMQHHv1OGV8C0inmIojyXED3IAoz8Q2-zv4DPnLVnah1PPp6UBO2YnxEPfq8dHYIPPR0PSZ4pkHG1Kwyeddq9frBFfO2Rr7tdDjMm3z3dBa-vZ9gK_-bWpfk-FuOPXePZr_pGu3LHn8wkYn4VVZOTLCdmcBNYDqAsapgew5FC48VXFWKZe2mr1zaDrCjbDa72tF95fe8HXCjiK_g=w2880-h1448",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "https://lh3.googleusercontent.com/fife/ALs6j_FTOpiBD0Bw01j7vJtgO6Dm4ZNdtJ3kMbpbkd14IiYYMvyyADfx_-XZcwbk69kHC9KQsC9vf_fW_Rzm0bLc59qBHA7jBLsI_8wkFYy1XUx73JPS1PL9TaaP785S8AzSOebh9-tv_fCKck4QI4OLT6u3CY6zBNazGEEK9tb6GD896OrX7tam2ZDkkcOZi12zoYXWoc4Pm9zfHTMIlN7D9XPr8eGav2rXfWGg3WAspcGZZ5Ofz5MrsLHzxMledeLG4G84hAyfNocctRn9ULymX39NJhWyhqNC1WkgZm1QUTn3LaMnPuzv8aoSH4xToeRLBCKozqNxjoFloKuI8WDODLDaXXNA6UOZVNa7Ag2Vw-f3SCzs5BXQB8vKUfVUrIHEziuRftAavSeMwL-A8jzrDhndP2FwXuwSQ7xzI5WCbyRgbeyHLJKoIIojLejoVFEha3VgpnYy1K_1wHowzr_JAdgzn_BkDxwLAD1zWQPiSyCBzS7qUzwSg2l7sbpSThCtjvJ28PbvNbxnvHYrqt8E0r2spOtxbQ0p25ZoXs7ProAHqKAlubA564eEXDr4oxSOPEHZvuSy1ptyzuX2nSZgixmLeQEx1tWSb4hjOSapb9HCYCtRjVZ6YuFs6WqCVFnOpfxhv6XJjW7CzhMJPqc8zfDW1eFkj_M4B0oRWYb9Yj5YHVDGWi_zHYYl2zrWjkZNsQjc-Eqv8tyMNl0bESNCfXCCkqGqgbuUDhCXqXNhD-wePiOddALKzP1X9ZIZ2SdkblL3nJdd2DFoe77tjLGK33kunl9Eu32HMZb48s0xOKKWfZN-oH11pUdqBKaXz8R7rFjMz_X_nzs5G8lP3uvsouf_tx-uWF8dRLQcp2j-sYt8MNLvgrZ9LQDqFzzrOuPfQCL3-yl84Sx1mWadrpq_WMncrogY3aULKZzwBGPlLbzbcuPusP_YjUSnLOofI_cM_XtS73oLkMBT59xrN28epHtpGtXxaYdkmsUD8HOy1WHDKeYUqQB34Ek-V3BNxjHQMssKdaob841S23Qvj4iEQFjafIDho8SVxJHgl9lCF-g6PrUm23pL5idFCcmiv-NYvrk4eDXJPQ8Xo9axp_wTQZom9dW2eIHu6xSu5MPIo3Yvk10tzaTyVA_kS9vPHtLP4zxzCKNB3fg3mXeaZDnycS2nd2ZFFfqj6oMyehDKF4HzpQo2X2DuNV94dbeswj2Vhtj8s0JIvv50mHukZBCxFRaiE4yGW4uC_pkoJIexPMCddIJ47sHPWIFmEp0Wf6DNrm3vl3Y7ZQdGiJkEjpwlubL-Z6WbTwYpcXi39Xy-NYcWe7wEnHrTtBrnK0bvXICWSRFpU-sxtFCHgNuACA0gJUl-35Xt-0dCyQoYGLCOC-eFIz0el-hRgopouW8qWtzM7O0qncL9-OcXiiwjCDs64H8r8fAymnGBxB_gs7oS2wFvbiws5cmKIeo8853y7vWpboUIWwEefpfETVVWtnUeQs0pNhGWjz1xE5Da_odQKc0EsYqET5163jiw59AfDHb7a-Hk7knQSF0TDr5pCIqUI-bqM-0n8FbAFO_Lis0I96Faw54lK2P5bgZIjWHQdAcAEjDT5I20JPLNaK4y-g=w2880-h1448",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "https://lh3.googleusercontent.com/fife/ALs6j_HNs8RAyGwnguwIP6waH84bksrSMQJTt8NolvzgowJ65q2hC5fjAf3kyVlVHU703J4BQgPY1EjiBwXqyTsSW22wa_D9gTQ6vSpALEZH1vgODjG31q-3kK8sCCGP7CBA5UEbxV_vrE_2uYPdVOFdo3Bljp2prXnFPOuM0m2H6ilIIOl9CKQGYJHmHXF7vn-jrLPkbGHfV9BUjG-jJndESg1gpV81WD2YrtTEGzc8IP-ztfB37BFPLsUkN4Kg6jlUFVNsMDPNHsgKt4O4C9_fUuQZq9QVMaDYtJ8j5XY8dW_gECpGSjCNYXVeARlhjXyTLPScV2--skAonSJ6msgK5f9m2IppYB4Gmh2jiZRaiGvJwe4vb6PkSkB36MLqsH5Q1MsvMy92reYu0v6HdeOYooWtVM0GoWWP7GCWquhpnn9ZXNigIhCYbO8K2nckcgJTp9v9jc7w-EM3Hh9sKieAR_McQmhqfkYVu8yST64EKcDo0elBH-wnu7jVW-w5707RAymDjhFPxVx_pytowDT9-C89fnaKubfq9xNsSfrebN5wjSW1WhO1P41ttuwGibCiwjEA5xgl2PBDyDfrThLo4Lt7n5OiebTfmcW9UmoVtrvSaiGadoa9JZ6qwEIECw4KM8lNSV898c3JChbxgLfNZRFWMriUIIYTdnrUlQRBtpNzhnzUU_5rnUNiAxRKGjy62OlXeq9zns3R02L18iLFXay3ouEvbHjcxPlR0-xpvSn9siChB4DqMVMXqLWmuwMeFzfpKLgIBVVi-aO2OMzLArrJXVHEmtakd6sOFCqT9r88jFi_HqPkTc_IvG_334n_Y0YZ7mBX4pGPEZvz_nfbqp4sVMhll7EKmDERkKm718IqnIl3FR9oXEpAM5FceGNizdIxpXtNcUw_eAetnNbx4gY4UGXWNLqvhq_9_urXAr0N5AwzMYWVXBddeaT2_uZJw3jwTCHsOmiB2GBiFfxfh4__ypGQc11-PlFQBd6TgJWDje3f9TrqwEjpaQIbM9klSBmGnlQgVY7pON6lJaqpmK3oAuStJ41n2Nnr_PNVe1edNLLFwek0AuUsHX7MUGTXDv7TM_yz8FGeitexdLKchqvFtVREkrNyserw1Ust5IkdsV0pdTbLqAa0qZaDQFOx9sBnWylMAvkoH7A_P2UpivMLjkbwPR_eKbI4ZSbOWrd2lamPl7XHLxi1wH8ARp7xhUs52idBEKsNdlPiKJaiQS2fYCDR9gdj3ZhLDrJ9TcXCNt3BjGW48sQqlaU6YEKg9ZKQpcF55MZ2lNntlpWYzLswb2XmncbPbS6aIoxiBwAVFSB8sLxmEiEY7dsrScC1_t9JTbR9qBCZLz4f3dNJmaGayJ6SMcUozP3GqDyfCeJsYbngwKklYmZsWDoe-jzNgY5E3LRJDjmJezMDPblzm0FO4PdgC-MrMR4AadNrJ10vLqTWfPI7blg4FuYvcWsFBipABea11xFD86qrXjRLP3Wdw7SPSuZjOjcYICiS76mFJdUxZd_6h0d4f4EhpfAD5TcpcoXi_mJl_SJBe26eHMUWsGWL5lNClo1AO9xf0q7q_IVIrC7wDHvT3fPn3kUFrPVRQNjZogW6w3mZLA=w2880-h1448",
  },
];
