/*******************************************/
/*main reducer with miscellaneous state
 management.
 This reducer imports all other reducers and
  combines them to be exported to the store*/
/******************************************/

import actionTypes from "../actions";
import { combineReducers } from "redux";
import { updateObject } from "../utility";

import userReducer from "./user";
import navReducer from "./navigation";
import newProductReducer from "./newProduct";

const initialState = {
  visibleScreen: ["login"], // When [] show main screen
  inventory: [
    {
      company: ["sunwest genetics", "sonoma seeds"],
      price: [[65, 120, 220, 420], [50, 100, 150]],
      effect: ["Relaxed", "Happy", "Euphoric"],
      yield: [],
      flowerTime: [9, 11],
      qtyLoose: [1000, 2000],
      qtyLooseROP: [500, 1000],
      alias: ["Puple kush", "Cali Kush"],
      qtyLooseNOE: [750, 1500],
      qtyPacked: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedROP: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedNOE: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtySold: [
        [[500, 1200, 2400], [355, 665, 220]],
        [[500, 1200, 2400], [355, 665, 220]]
      ],
      breeder: "BB",
      location: "D9",
      category: "seed",
      relations: [],
      pThc: [],
      pCbd: [],
      pCbn: [],
      country: [2, 3],
      name: "Blue Dream Feminized Cannabis Seeds",
      description:
        "Blue Dream cannabis seeds grow plants that produce buds with a fruity, blueberry flavor. The tangy and earthy aftertaste boosts the already incredible savory experience. Combining a sativa Haze with Blueberry indica creates balanced effect hybrid. Blue Dream provides a full-body relaxation and delivers swift symptom relief without heavy sedative effects. Popularly used as a medicinal strain to treat a variety of conditions and as a daytime recreational strain.",
      genetic: 0,
      difficulty: 1,
      indica: 0.25,
      sativa: 0.75,
      ruderalis: 0,
      type: 0,
      environment: 0,
      sotiId: "BDF",
      sttId: 2,
      releaseDate: "2018-06-01T07:00:00.000Z",
      isFeatured: false,
      images: ["../static/img/products/sunwest/sw-blue-dream.png"]
    },
    {
      company: ["sunwest genetics", "sonoma seeds"],
      price: [[65, 120, 220, 420], [50, 100, 150]],
      effect: ["Relaxed", "Happy", "Focused"],
      yield: [],
      flowerTime: [7, 9],
      qtyLoose: [1000, 2000],
      qtyLooseROP: [500, 1000],
      alias: ["Puple kush", "Cali Kush"],
      qtyLooseNOE: [750, 1500],
      qtyPacked: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedROP: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedNOE: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtySold: [
        [[500, 1200, 2400], [355, 665, 220]],
        [[500, 1200, 2400], [355, 665, 220]]
      ],
      breeder: "BB",
      location: "D9",
      category: "seed",
      relations: [],
      pThc: [],
      pCbd: [],
      pCbn: [],
      country: [2, 3],
      name: "Bubblegum Autoflower Cannabis Seeds",
      description:
        "Bubblegum cannabis seeds produce easy to grow plants and make high yields of huge, frosty resinous buds. This 80% indica strain is popular with growers and hash makers. Bubblegum has THC in the 18% range with a sour flavor and smell. This strain will leave consumers with a full, relaxed body high.",
      genetic: 1,
      difficulty: 0,
      indica: 0.45,
      sativa: 0.45,
      ruderalis: 0.1,
      type: 2,
      environment: 0,
      sotiId: "BGA",
      sttId: 41,
      releaseDate: "2018-06-01T07:00:00.000Z",
      isFeatured: false,
      images: ["../static/img/products/sunwest/sw-bubblegum.png"]
    },
    {
      company: ["sunwest genetics", "sonoma seeds"],
      price: [[65, 120, 220, 420], [50, 100, 150]],
      effect: ["Relaxed", "Happy", "Euphoric"],
      yield: [],
      flowerTime: [7, 9],
      qtyLoose: [1000, 2000],
      qtyLooseROP: [500, 1000],
      alias: ["Puple kush", "Cali Kush"],
      qtyLooseNOE: [750, 1500],
      qtyPacked: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedROP: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedNOE: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtySold: [
        [[500, 1200, 2400], [355, 665, 220]],
        [[500, 1200, 2400], [355, 665, 220]]
      ],
      breeder: "BB",
      location: "D9",
      category: "seed",
      relations: [],
      pThc: [],
      pCbd: [],
      pCbn: [],
      country: [2, 3],
      name: "Chemdog Feminized Cannabis Seeds",
      description:
        "Chemdog (commonly spelled Chemdawg) is known for being a very potent strain that people love. Many report the medicinal benefits of this strain along with the fun recreational benefits of creativity and happiness. Chemdog seed genetics are somewhat mysterious due to its diversity. This strain has been known to make other popular strains like OG Kush.",
      genetic: 0,
      difficulty: 1,
      indica: 0.55,
      sativa: 0.45,
      ruderalis: 0,
      type: 1,
      environment: 0,
      sotiId: "CDF",
      sttId: 3,
      releaseDate: "2018-06-01T07:00:00.000Z",
      isFeatured: false,
      images: ["../static/img/products/sunwest/sw-chemdog.png"]
    },
    {
      company: ["sunwest genetics", "sonoma seeds"],
      price: [[65, 120, 220, 420], [50, 100, 150]],
      effect: ["Relaxed", "Happy", "Hungry"],
      yield: [],
      flowerTime: [8, 9],
      qtyLoose: [1000, 2000],
      qtyLooseROP: [500, 1000],
      alias: ["Puple kush", "Cali Kush"],
      qtyLooseNOE: [750, 1500],
      qtyPacked: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedROP: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedNOE: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtySold: [
        [[500, 1200, 2400], [355, 665, 220]],
        [[500, 1200, 2400], [355, 665, 220]]
      ],
      breeder: "BB",
      location: "D9",
      category: "seed",
      relations: [],
      pThc: [],
      pCbd: [],
      pCbn: [],
      country: [2, 3],
      name: "Cheese Autoflower Cannabis Seeds",
      description:
        "Cheese cannabis seeds produce a plant that is named for its sharply sour aroma and is an indica dominant hybrid originating back to the late 1980’s in the UK. It achieved it’s worldwide status for it’s unique flavor, consistent potency and genetics. The cheese plant offers a sublime and distinct taste that has flavors of classic strains and nostalgia. Cheese is well known for its relaxed, happy effects that gently ease into a blissful state of mind.",
      genetic: 1,
      difficulty: 1,
      indica: 0.7,
      sativa: 0.2,
      ruderalis: 0.1,
      type: 1,
      environment: 0,
      sotiId: "CDF",
      sttId: 3,
      releaseDate: "2018-06-01T07:00:00.000Z",
      isFeatured: false,
      images: ["../static/img/products/sunwest/sw-cheese.png"]
    },
    {
      company: ["sunwest genetics", "sonoma seeds"],
      price: [[65, 120, 220, 420], [50, 100, 150]],
      effect: ["Happy", "Uplifting", "Relaxed"],
      yield: [],
      flowerTime: [7, 9],
      qtyLoose: [1000, 2000],
      qtyLooseROP: [500, 1000],
      alias: ["Puple kush", "Cali Kush"],
      qtyLooseNOE: [750, 1500],
      qtyPacked: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedROP: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedNOE: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtySold: [
        [[500, 1200, 2400], [355, 665, 220]],
        [[500, 1200, 2400], [355, 665, 220]]
      ],
      breeder: "BB",
      location: "D9",
      category: "seed",
      relations: [],
      pThc: [],
      pCbd: [],
      pCbn: [],
      country: [],
      name: "Girl Scout Cookies Feminized Cannabis Seeds",
      description:
        "Girl Scout Cookies cannabis seeds (also known as GSC) have become one of the most popular strains available on the West Coast. Originating from California, it has a sweet taste with earthy aroma and is high in THC. It�s a favorite among medical users because of its medicinal indica benefits but still used in the evening by recreational users. GSC produces flowers high in THC in only 7-9 weeks with a smooth �cookie like� flavor.",
      genetic: 0,
      difficulty: 1,
      indica: 0.75,
      sativa: 0.25,
      ruderalis: 0,
      type: 1,
      environment: 0,
      sotiId: "GSF",
      sttId: 6,
      releaseDate: "2018-06-01T07:00:00.000Z",
      isFeatured: false,
      images: ["../static/img/products/sunwest/sw-girl-scout-cookies.png"]
    },
    {
      company: ["sunwest genetics", "sonoma seeds"],
      price: [[65, 120, 220, 420], [50, 100, 150]],
      effect: ["Happy", "Energetic", "Creative"],
      yield: [],
      flowerTime: [7, 10],
      qtyLoose: [1000, 2000],
      qtyLooseROP: [500, 1000],
      alias: ["Puple kush", "Cali Kush"],
      qtyLooseNOE: [750, 1500],
      qtyPacked: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedROP: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedNOE: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtySold: [
        [[500, 1200, 2400], [355, 665, 220]],
        [[500, 1200, 2400], [355, 665, 220]]
      ],
      breeder: "BB",
      location: "D9",
      category: "seed",
      relations: [],
      pThc: [],
      pCbd: [],
      pCbn: [],
      country: [2, 3],
      name: "Jack Herer Feminized Cannabis Seeds",
      description:
        "Jack Herer cannabis seeds come from the Emperor of Hemp himself, Jack Herer. It has a perfect balance of indica and sativa which consumers describe as clear headed and creative. Jack Herer strain has won numerous awards around the world and has become a staple strain among many cannabis users. This 55% sativa hybrid captures both the cerebral elevation associated with sativas and the heavy resin production of indicas. Sun West Genetics is proud to offer Jack Herer Feminized seeds that we can ship worldwide in discreet manner.This is to honor the Emperor of Weed for his tireless contribution to the marijuana world.",
      genetic: 0,
      difficulty: 0,
      indica: 0.5,
      sativa: 0.5,
      ruderalis: 0,
      type: 2,
      environment: 0,
      sotiId: "JHF",
      sttId: 8,
      releaseDate: "2018-06-01T07:00:00.000Z",
      isFeatured: false,
      images: ["../static/img/products/sunwest/sw-jack-herer.png"]
    },

    {
      company: ["sunwest genetics", "sonoma seeds"],
      price: [[65, 120, 220, 420], [50, 100, 150]],
      effect: ["Energetic", "Creative", "Uplifting"],
      yield: [],
      flowerTime: [8, 10],
      qtyLoose: [1000, 2000],
      qtyLooseROP: [500, 1000],
      alias: ["Puple kush", "Cali Kush"],
      qtyLooseNOE: [750, 1500],
      qtyPacked: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedROP: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedNOE: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtySold: [
        [[500, 1200, 2400], [355, 665, 220]],
        [[500, 1200, 2400], [355, 665, 220]]
      ],
      breeder: "BB",
      location: "D9",
      category: "seed",
      relations: [],
      pThc: [],
      pCbd: [],
      pCbn: [],
      country: [2, 3],
      name: "Kali mist Feminized Cannabis Seeds",
      description:
        "Known as the Queen of Cannabis, Kali Mist cannabis seeds are arguably one of the top sativa strains on the market. Kali Mist grows with 90% sativa genes and delivers and energizing, focused productive high of a potent sativa. The buds are typically dense, very high in resin content and have a delightfully spicy scent. This strain is known as a mood enhancer and is commonly used to relieve physical ailments while being productive.",
      genetic: 0,
      difficulty: 1,
      indica: 0.3,
      sativa: 0.7,
      ruderalis: 0,
      type: 1,
      environment: 0,
      sotiId: "KMF",
      sttId: 9,
      releaseDate: "2018-06-01T07:00:00.000Z",
      isFeatured: false,
      images: ["../static/img/products/sunwest/sw-kali-mist.png"]
    },
    {
      company: ["sunwest genetics", "sonoma seeds"],
      price: [[65, 120, 220, 420], [50, 100, 150]],
      effect: ["Pure Indica High"],
      yield: [],
      flowerTime: [8],
      qtyLoose: [1000, 2000],
      qtyLooseROP: [500, 1000],
      alias: ["Puple kush", "Cali Kush"],
      qtyLooseNOE: [750, 1500],
      qtyPacked: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedROP: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedNOE: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtySold: [
        [[500, 1200, 2400], [355, 665, 220]],
        [[500, 1200, 2400], [355, 665, 220]]
      ],
      breeder: "BB",
      location: "D9",
      category: "seed",
      relations: [],
      pThc: [],
      pCbd: [],
      pCbn: [],
      country: [2, 3],
      name: "Master Kush Feminized Cannabis Seeds",
      description:
        "Master Kush seeds from Sunwest Genetics produce a plant with the classic flavor of Hindu Kush strain. It�s strong genetics come from the Hindu Kush region of India and were further improved by growers in Amsterdam. The smell of Master Kush is often described as a combination of citrus and incense. This strain is ideal for a potent indica experience.",
      genetic: 0,
      difficulty: 0,
      indica: 0.8,
      sativa: 0.2,
      ruderalis: 0,
      type: 1,
      environment: 0,
      sotiId: "MKF",
      sttId: 11,
      releaseDate: "2018-06-01T07:00:00.000Z",
      isFeatured: false,
      images: ["../static/img/products/sunwest/sw-master-kush.png"]
    },
    {
      company: ["sunwest genetics", "sonoma seeds"],
      price: [[65, 120, 220, 420], [50, 100, 150]],
      effect: ["Relaxed", "Sleepy", "Happy"],
      yield: [],
      flowerTime: [8, 9],
      qtyLoose: [1000, 2000],
      qtyLooseROP: [500, 1000],
      alias: ["Puple kush", "Cali Kush"],
      qtyLooseNOE: [750, 1500],
      qtyPacked: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedROP: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedNOE: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtySold: [
        [[500, 1200, 2400], [355, 665, 220]],
        [[500, 1200, 2400], [355, 665, 220]]
      ],
      breeder: "BB",
      location: "D9",
      category: "seed",
      relations: [],
      pThc: [],
      pCbd: [],
      pCbn: [],
      country: [2, 3],
      name: "Northern Lights Autoflower Cannabis Seeds",
      description:
        "Northern Lights cannabis seeds produce easy to grow plants with flowers in about 8-9 weeks. Because of the ruderalis genetics, this particular strain produces flowers on auto. Northern Lights is mostly indica dominant strain and is known for it’s resinous buds, quick flowering and resilience during growth. Northern lights is pungently sweet, spicy aromas with crystal coated buds which sometimes have a purple hues. It is typically used for relaxing muscles, relieving pain and sleeplessness. Easy to cultivate indoors and produces high quality buds.",
      genetic: 1,
      difficulty: 0,
      indica: 0.7,
      sativa: 0.2,
      ruderalis: 0.1,
      type: 1,
      environment: 0,
      sotiId: "NLA",
      sttId: 43,
      releaseDate: "2018-06-01T07:00:00.000Z",
      isFeatured: false,
      images: ["../static/img/products/sunwest/sw-northern-lights.png"]
    },
    {
      company: ["sunwest genetics", "sonoma seeds"],
      price: [[65, 120, 220, 420], [50, 100, 150]],
      effect: ["Relaxed", "Sleepy", "Happy"],
      yield: [],
      flowerTime: [7, 9],
      qtyLoose: [1000, 2000],
      qtyLooseROP: [500, 1000],
      alias: ["Puple kush", "Cali Kush"],
      qtyLooseNOE: [750, 1500],
      qtyPacked: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedROP: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedNOE: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtySold: [
        [[500, 1200, 2400], [355, 665, 220]],
        [[500, 1200, 2400], [355, 665, 220]]
      ],
      breeder: "BB",
      location: "D9",
      category: "seed",
      relations: [],
      pThc: [],
      pCbd: [],
      pCbn: [],
      country: [2, 3],
      name: "Purple Kush Autoflower Cannabis Seeds",
      description:
        "Purple Kush cannabis seeds originated in California as the offspring of Hindu Kush and Purple Afghani. This strain is known for the subtle aroma of its buds that are typical of its lineage. You can easily smell its sweet and earthy aroma from a mile away. The typical effects of Purple Kush include a long-lasting euphoric state of mind and full-body relaxation. Many people use Purple Kush for pain and stress relief, as well as insomnia.This indica strain is relatively easy to grow.As of most indicas, it grows wider than tall so it doesn�t need much overhead space.",
      genetic: 1,
      difficulty: 1,
      indica: 0.7,
      sativa: 0.2,
      ruderalis: 0.1,
      type: 1,
      environment: 0,
      sotiId: "PKA",
      sttId: 44,
      releaseDate: "2018-06-01T07:00:00.000Z",
      isFeatured: false,
      images: ["../static/img/products/sunwest/sw-purple-kush.png"]
    },
    {
      company: ["sunwest genetics", "sonoma seeds"],
      price: [[65, 120, 220, 420], [50, 100, 150]],
      effect: ["Mind High"],
      yield: [450, 500],
      flowerTime: [8, 9],
      qtyLoose: [1000, 2000],
      qtyLooseROP: [500, 1000],
      alias: ["Puple kush", "Cali Kush"],
      qtyLooseNOE: [750, 1500],
      qtyPacked: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedROP: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedNOE: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtySold: [
        [[500, 1200, 2400], [355, 665, 220]],
        [[500, 1200, 2400], [355, 665, 220]]
      ],
      breeder: "BB",
      location: "D9",
      category: "seed",
      relations: [],
      pThc: [17],
      pCbd: [0.7],
      pCbn: [],
      country: [6],
      name: "Acapulco Gold Feminized Cannabis Seeds",
      description:
        "Acapulco gold has been around for decades and became really popular in the 1970’s in Southern California. These seeds originate from around the Acapulco area in Mexico and the buds have a gold color to them which is how it gets it’s name Acapulco Gold. This strain has established itself as a legendary land race strain but is becoming more difficult to find at dispensaries.",
      genetic: 0,
      difficulty: 0,
      indica: 0.2,
      sativa: 0.8,
      ruderalis: 0,
      type: 0,
      environment: 0,
      sotiId: "AGF",
      sttId: 1,
      releaseDate: "2018-06-01T07:00:00.000Z",
      isFeatured: false,
      images: ["../static/img/products/sonoma/so-blueberry.jpg"]
    },
    {
      company: ["sunwest genetics", "sonoma seeds"],
      price: [[65, 120, 220, 420], [50, 100, 150]],
      effect: ["Body High"],
      yield: [350, 500],
      flowerTime: [9],
      qtyLoose: [1000, 2000],
      qtyLooseROP: [500, 1000],
      alias: ["Puple kush", "Cali Kush"],
      qtyLooseNOE: [750, 1500],
      qtyPacked: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedROP: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedNOE: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtySold: [
        [[500, 1200, 2400], [355, 665, 220]],
        [[500, 1200, 2400], [355, 665, 220]]
      ],
      breeder: "BB",
      location: "D9",
      category: "seed",
      relations: [],
      pThc: [18],
      pCbd: [1.05],
      pCbn: [],
      country: ["Afghanistan"],
      name: "AK47 Feminized Cannabis Seeds",
      description:
        "Ak47 came about by crossing Colombian, Thai, Mexican and Afghan strains. Its very easy to grow in numerous types of growing mediums due to its diversity of genetics. By mixing strains with such different genetics, you get a new cannabis strain that has a wide range of effects and flavors. The other upside to having a wide genetics range is that the AK47 cannabis plant itself is very hearty and strong.",
      genetic: 0,
      difficulty: 0,
      indica: 0.35,
      sativa: 0.65,
      ruderalis: 0,
      type: 0,
      environment: 0,
      sotiId: "AKF",
      sttId: 2,
      releaseDate: "2018-06-01T07:00:00.000Z",
      isFeatured: false,
      images: ["../static/img/products/sonoma/so-blueberry.jpg"]
    },
    {
      company: ["sunwest genetics", "sonoma seeds"],
      price: [[65, 120, 220, 420], [50, 100, 150]],
      effect: ["Body & Mind High"],
      yield: [150, 200],
      flowerTime: [7, 8],
      qtyLoose: [1000, 2000],
      qtyLooseROP: [500, 1000],
      alias: ["Puple kush", "Cali Kush"],
      qtyLooseNOE: [750, 1500],
      qtyPacked: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedROP: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedNOE: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtySold: [
        [[500, 1200, 2400], [355, 665, 220]],
        [[500, 1200, 2400], [355, 665, 220]]
      ],
      breeder: "BB",
      location: "D9",
      category: "seed",
      relations: [],
      pThc: [5],
      pCbd: [5],
      pCbn: [1.75],
      country: [3],
      name: "Auto Critical Autoflower Cannabis Seeds",
      description:
        "Auto Critical seeds have all the benefits of medical strains and combines them into an autoflowering variety. It has a perfect balance of CBD to THC levels both at 5%. It also contains 1.75% of CBN another medicinally beneficial compound.",
      genetic: 1,
      difficulty: 0,
      indica: 0.5,
      sativa: 0.4,
      ruderalis: 0.1,
      type: 2,
      environment: 0,
      sotiId: "CBA",
      sttId: 80,
      releaseDate: "2018-06-01T07:00:00.000Z",
      isFeatured: false,
      images: ["../static/img/products/sonoma/so-cali-kush.jpg"]
    },
    {
      company: ["sunwest genetics", "sonoma seeds"],
      price: [[65, 120, 220, 420], [50, 100, 150]],
      effect: ["Mind & Body High"],
      yield: [250, 300],
      flowerTime: [7, 8],
      qtyLoose: [1000, 2000],
      qtyLooseROP: [500, 1000],
      alias: ["Puple kush", "Cali Kush"],
      qtyLooseNOE: [750, 1500],
      qtyPacked: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedROP: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedNOE: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtySold: [
        [[500, 1200, 2400], [355, 665, 220]],
        [[500, 1200, 2400], [355, 665, 220]]
      ],
      breeder: "BB",
      location: "D9",
      category: "seed",
      relations: [],
      pThc: [16],
      pCbd: [0.4],
      pCbn: [],
      country: [2],
      name: "Blue Diesel Autoflower Cannabis Seeds",
      description:
        "Blue Diesel has a very short flowering cycle of just 7-8 weeks and produce buds that smell of diesel and blueberry fruit. Even though it is a balanced hybrid it can be used during the day or in the evening to help with sleep.",
      genetic: 1,
      difficulty: 0,
      indica: 0.5,
      sativa: 0.4,
      ruderalis: 0.1,
      type: 2,
      environment: 0,
      sotiId: "BDA",
      sttId: 40,
      releaseDate: "2018-06-01T07:00:00.000Z",
      isFeatured: false,
      images: ["../static/img/products/sonoma/so-blueberry.jpg"]
    },
    {
      company: ["sunwest genetics", "sonoma seeds"],
      price: [[65, 120, 220, 420], [50, 100, 150]],
      effect: ["Body High"],
      yield: [400, 600],
      flowerTime: [8, 10],
      qtyLoose: [1000, 2000],
      qtyLooseROP: [500, 1000],
      alias: ["Puple kush", "Cali Kush"],
      qtyLooseNOE: [750, 1500],
      qtyPacked: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedROP: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedNOE: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtySold: [
        [[500, 1200, 2400], [355, 665, 220]],
        [[500, 1200, 2400], [355, 665, 220]]
      ],
      breeder: "BB",
      location: "D9",
      category: "seed",
      relations: [],
      pThc: [20],
      pCbd: [2.4],
      pCbn: [0, 0.1],
      country: [2],
      name: "Blueberry OG Feminized Cannabis Seeds",
      description:
        "Blueberry seeds from Sonoma Seeds are surprisingly high in CBD levels (even compared to some CBD specific strains). This makes the Blueberry strain ideal for relieving pain and inflammation while still providing the typical high of happiness and laughter. Numerous times the Blueberry strain has won Cannabis Cup awards and its name comes from the distinctive blueberry flavor.",
      genetic: 0,
      difficulty: 1,
      indica: 0.7,
      sativa: 0.3,
      ruderalis: 0,
      type: 1,
      environment: 0,
      sotiId: "BYF",
      sttId: 4,
      releaseDate: "2018-06-01T07:00:00.000Z",
      isFeatured: false,
      images: "../static/img/products/sonoma/so-blueberry.jpg"
    },
    {
      company: ["sunwest genetics", "sonoma seeds"],
      price: [[65, 120, 220, 420], [50, 100, 150]],
      effect: ["Mind High"],
      yield: [300, 500],
      flowerTime: [9, 10],
      qtyLoose: [1000, 2000],
      qtyLooseROP: [500, 1000],
      alias: ["Puple kush", "Cali Kush"],
      qtyLooseNOE: [750, 1500],
      qtyPacked: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedROP: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedNOE: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtySold: [
        [[500, 1200, 2400], [355, 665, 220]],
        [[500, 1200, 2400], [355, 665, 220]]
      ],
      breeder: "BB",
      location: "D9",
      category: "seed",
      relations: [],
      pThc: [23],
      pCbd: [0.1],
      pCbn: [0, 0.1],
      country: [1],
      name: "Bruce Banner Feminized Cannabis Seeds",
      description:
        "Bruce Banner seeds grow a plant whose buds create a high that comes on strong and quick. While the high is strong from the incredible THC levels, the effects are a relaxed, creative high and mood boost. The resin on Bruce Banner tastes like berries and smells of diesel mixed with floral scents.",
      genetic: 0,
      difficulty: 1,
      indica: 0.4,
      sativa: 0.6,
      ruderalis: 0,
      type: 0,
      environment: 0,
      sotiId: "BBF",
      sttId: 4,
      releaseDate: "2018-06-01T07:00:00.000Z",
      isFeatured: false,
      images: "../static/img/products/sonoma/so-bruce-banner.jpg"
    },
    {
      company: ["sunwest genetics", "sonoma seeds"],
      price: [[65, 120, 220, 420], [50, 100, 150]],
      effect: ["Body & Mind High"],
      yield: [400, 600],
      flowerTime: [9],
      qtyLoose: [1000, 2000],
      qtyLooseROP: [500, 1000],
      alias: ["Puple kush", "Cali Kush"],
      qtyLooseNOE: [750, 1500],
      qtyPacked: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedROP: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedNOE: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtySold: [
        [[500, 1200, 2400], [355, 665, 220]],
        [[500, 1200, 2400], [355, 665, 220]]
      ],
      breeder: "BB",
      location: "D9",
      category: "seed",
      relations: [],
      pThc: [17],
      pCbd: [0.4],
      pCbn: [],
      country: [1, 3],
      name: "Bubblegum Feminized Cannabis Seeds",
      description:
        "This classic strain can produce very large yields both indoors and outdoors with medium levels of THC and mostly indica effects. Bubblegum produces these yields in about 9 weeks.",
      genetic: 0,
      difficulty: 1,
      indica: 0.75,
      sativa: 0.25,
      ruderalis: 0,
      type: 1,
      environment: 0,
      sotiId: "BGF",
      sttId: 5,
      releaseDate: "2018-06-01T07:00:00.000Z",
      isFeatured: false,
      images: ["../static/img/products/sonoma/so-bruce-banner.jpg"]
    },
    {
      company: ["sunwest genetics", "sonoma seeds"],
      price: [[65, 120, 220, 420], [50, 100, 150]],
      effect: ["Body High"],
      yield: [300, 400],
      flowerTime: [10],
      qtyLoose: [1000, 2000],
      qtyLooseROP: [500, 1000],
      alias: ["Puple kush", "Cali Kush"],
      qtyLooseNOE: [750, 1500],
      qtyPacked: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedROP: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedNOE: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtySold: [
        [[500, 1200, 2400], [355, 665, 220]],
        [[500, 1200, 2400], [355, 665, 220]]
      ],
      breeder: "BB",
      location: "D9",
      category: "seed",
      relations: [],
      pThc: [1],
      pCbd: [20],
      pCbn: [0, 0.1],
      country: [1],
      name: "Cali Kush",
      description:
        "Due to the incredibly high levels of CBD in Cali Kush, its one of the best alternatives for natural pain relief. This strain is often prescribed for patients with epilepsy, anxiety, PTSD and seizures. Since the THC levels are very low at only 1%, it allows you to stay productive throughout the day while still being medicated. Cali Kush is the �go to� medical strain for the some of the highest CBD levels in the world at 20%",
      genetic: 3,
      difficulty: 0,
      indica: 0.8,
      sativa: 0.2,
      ruderalis: 0,
      type: 1,
      environment: 0,
      sotiId: "AFM",
      sttId: 54,
      releaseDate: "2018-06-01T07:00:00.000Z",
      isFeatured: false,
      images: ["../static/img/products/sonoma/so-cali-kush.jpg"]
    },
    {
      company: ["sunwest genetics", "sonoma seeds"],
      price: [[65, 120, 220, 420], [50, 100, 150]],
      effect: ["Creative"],
      yield: [400],
      flowerTime: [9, 10],
      qtyLoose: [1000, 2000],
      qtyLooseROP: [500, 1000],
      alias: ["Puple kush", "Cali Kush"],
      qtyLooseNOE: [750, 1500],
      qtyPacked: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedROP: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedNOE: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtySold: [
        [[500, 1200, 2400], [355, 665, 220]],
        [[500, 1200, 2400], [355, 665, 220]]
      ],
      breeder: "BB",
      location: "D9",
      category: "seed",
      relations: [],
      pThc: [5],
      pCbd: [5],
      pCbn: [],
      country: [4],
      name: "Super Silver Haze Feminized Cannabis Seeds",
      description:
        "Just like the Auto Critical strain, Super Silver Haze has a perfect balance of THC:CBD at 5% each. The added benefit to this medicinal strain is that its mostly sativa making it ideal for use during the day. The flowering time may be somewhat longer but its worth the wait for up to 400 grams of this creative strain per plant.",
      genetic: 3,
      difficulty: 0,
      indica: 0.25,
      sativa: 0.75,
      ruderalis: 0,
      type: 0,
      environment: 0,
      sotiId: "CBS",
      sttId: 82,
      releaseDate: "2018-06-01T07:00:00.000Z",
      isFeatured: false,
      images: ["../static/img/products/sonoma/so-cali-kush.jpg"]
    },
    {
      company: ["sunwest genetics", "sonoma seeds"],
      price: [[65, 120, 220, 420], [50, 100, 150]],
      effect: ["Mind High"],
      yield: [300, 400],
      flowerTime: [7, 8],
      qtyLoose: [1000, 2000],
      qtyLooseROP: [500, 1000],
      alias: ["Puple kush", "Cali Kush"],
      qtyLooseNOE: [750, 1500],
      qtyPacked: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedROP: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedNOE: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtySold: [
        [[500, 1200, 2400], [355, 665, 220]],
        [[500, 1200, 2400], [355, 665, 220]]
      ],
      breeder: "BB",
      location: "D9",
      category: "seed",
      relations: [],
      pThc: [21],
      pCbd: [1],
      pCbn: [0, 0.1],
      country: [3],
      name: "Chocolope Feminized Cannabis Seeds",
      description:
        "This delicous sativa strain known as Chocolope is a cross between Chocolate Thai strain and Cannalope Haze. After the intial buzz form the high it a very strong motivator. As the name conveys, it has a chocolate flavor with hints of coffee and vanilla. By far one of the best and most potent strains coming from the Netherlands.",
      genetic: 0,
      difficulty: 0,
      indica: 0.2,
      sativa: 0.8,
      ruderalis: 0,
      type: 0,
      environment: 0,
      sotiId: "CHF",
      sttId: 6,
      releaseDate: "2018-06-01T07:00:00.000Z",
      isFeatured: false,
      images: ["../static/img/products/sonoma/so-chocolope.jpg"]
    },
    {
      company: ["sunwest genetics", "sonoma seeds"],
      price: [[65, 120, 220, 420], [50, 100, 150]],
      effect: ["Body High"],
      yield: [400, 600],
      flowerTime: [7, 8],
      qtyLoose: [1000, 2000],
      qtyLooseROP: [500, 1000],
      alias: ["Puple kush", "Cali Kush"],
      qtyLooseNOE: [750, 1500],
      qtyPacked: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedROP: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedNOE: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtySold: [
        [[500, 1200, 2400], [355, 665, 220]],
        [[500, 1200, 2400], [355, 665, 220]]
      ],
      breeder: "BB",
      location: "D9",
      category: "seed",
      relations: [],
      pThc: [23],
      pCbd: [0.4],
      pCbn: [0, 0.1],
      country: [2],
      name: "Cream Caramel Feminized Cannabis Seeds",
      description:
        "Cream Caramel is a very potent indica with high levels of THC and huge yields. At 90% indica with 23% THC, it will quickly soothe the mind and body. Cream Caramel gets it’s sweet taste and caramel aroma from Maple Leaf indica and produces large, dark fluffy buds.",
      genetic: 0,
      difficulty: 0,
      indica: 0.9,
      sativa: 0.1,
      ruderalis: 0,
      type: 1,
      environment: 0,
      sotiId: "CCF",
      sttId: 7,
      releaseDate: "2018-06-01T07:00:00.000Z",
      isFeatured: false,
      images: ["../static/img/products/sonoma/so-chocolope.jpg"]
    },

    {
      company: ["sunwest genetics", "sonoma seeds"],
      price: [[65, 120, 220, 420], [50, 100, 150]],
      effect: ["Mind High"],
      yield: [150, 250],
      flowerTime: [8, 10],
      qtyLoose: [1000, 2000],
      qtyLooseROP: [500, 1000],
      alias: ["Puple kush", "Cali Kush"],
      qtyLooseNOE: [750, 1500],
      qtyPacked: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedROP: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedNOE: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtySold: [
        [[500, 1200, 2400], [355, 665, 220]],
        [[500, 1200, 2400], [355, 665, 220]]
      ],
      breeder: "BB",
      location: "D9",
      category: "seed",
      relations: [],
      pThc: [17],
      pCbd: [0.25],
      pCbn: [],
      country: [1],
      name: "Hawaiian Gold Autoflower Cannabis Seeds",
      description:
        "Hawaiian Gold is a balanced, autoflowering strain that produces flower in 8-10 weeks. It has medium THC levels at 17% and makes a great strain for vacation and weekend use to bring on those tropical vibes.",
      genetic: 1,
      difficulty: 0,
      indica: 0.4,
      sativa: 0.5,
      ruderalis: 0.1,
      type: 2,
      environment: 0,
      sotiId: "HGA",
      sttId: 41,
      releaseDate: "2018-06-01T07:00:00.000Z",
      isFeatured: false,
      images: ["../static/img/products/sonoma/so-juicy-fruit.jpg"]
    },
    {
      company: ["sunwest genetics", "sonoma seeds"],
      price: [[65, 120, 220, 420], [50, 100, 150]],
      effect: ["Body High"],
      yield: [200, 250],
      flowerTime: [7, 9],
      qtyLoose: [1000, 2000],
      qtyLooseROP: [500, 1000],
      alias: ["Puple kush", "Cali Kush"],
      qtyLooseNOE: [750, 1500],
      qtyPacked: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedROP: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedNOE: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtySold: [
        [[500, 1200, 2400], [355, 665, 220]],
        [[500, 1200, 2400], [355, 665, 220]]
      ],
      breeder: "BB",
      location: "D9",
      category: "seed",
      relations: [],
      pThc: [20],
      pCbd: [1.2],
      pCbn: [0, 0.1],
      country: [1],
      name: "Juicy Fruit Feminized Cannabis Seeds",
      description:
        "Juicy Fruit comes as a result of an Afghani Indica and Thai Sativa. Given it�s name, both the flavor and smell of this strain is reminiscent of fruit ranging from fruit punch to pina coladas. Its a strong euphoric high great for relaxation and calming of the mind. Juicy Fruit seeds will be an easy yet rewarding strain to grow with 20 % THC and 1.2% CBD",
      genetic: 1,
      difficulty: 0,
      indica: 0.6,
      sativa: 0.3,
      ruderalis: 0.1,
      type: 1,
      environment: 0,
      sotiId: "JFA",
      sttId: 42,
      releaseDate: "2018-06-01T07:00:00.000Z",
      isFeatured: false,
      images: ["../static/img/products/sonoma/so-juicy-fruit.jpg"]
    },
    {
      company: ["sunwest genetics", "sonoma seeds"],
      price: [[65, 120, 220, 420], [50, 100, 150]],
      effect: ["Body & Mind High"],
      yield: [400, 500],
      flowerTime: [9, 10],
      qtyLoose: [1000, 2000],
      qtyLooseROP: [500, 1000],
      alias: ["Puple kush", "Cali Kush"],
      qtyLooseNOE: [750, 1500],
      qtyPacked: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedROP: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedNOE: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtySold: [
        [[500, 1200, 2400], [355, 665, 220]],
        [[500, 1200, 2400], [355, 665, 220]]
      ],
      breeder: "BB",
      location: "D9",
      category: "seed",
      relations: [],
      pThc: [19],
      pCbd: [0.04],
      pCbn: [],
      country: [1],
      name: "LA Confidential Feminized Cannabis Seeds",
      description:
        "LA Confidential seeds produces a large plant with a lot of frosty, lime green buds in 8-10 weeks and can develop purple leaves toward the end of the growing cycle. For a true indica. experience, La Confidential will relax the body, take you on a psychedelic journey.",
      genetic: 0,
      difficulty: 1,
      indica: 0.8,
      sativa: 0.2,
      ruderalis: 0,
      type: 1,
      environment: 0,
      sotiId: "LAF",
      sttId: 8,
      releaseDate: "2018-06-01T07:00:00.000Z",
      isFeatured: false,
      images: ["../static/img/products/sonoma/so-northern-berry.jpg"]
    },
    {
      company: ["sunwest genetics", "sonoma seeds"],
      price: [[65, 120, 220, 420], [50, 100, 150]],
      effect: ["Body & Mind High"],
      yield: [200, 250],
      flowerTime: [8, 10],
      qtyLoose: [1000, 2000],
      qtyLooseROP: [500, 1000],
      alias: ["Puple kush", "Cali Kush"],
      qtyLooseNOE: [750, 1500],
      qtyPacked: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedROP: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedNOE: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtySold: [
        [[500, 1200, 2400], [355, 665, 220]],
        [[500, 1200, 2400], [355, 665, 220]]
      ],
      breeder: "BB",
      location: "D9",
      category: "seed",
      relations: [],
      pThc: [15],
      pCbd: [1.04],
      pCbn: [0, 0.1],
      country: [1],
      name: "Northern Berry",
      description:
        "Northern Berry seeds came about as a result of crossing 2 very famous strains Northern Lights #5 and the legendary Blueberry. This combination makes a very interesting strain with a fruity blueberry flavor coming from it�s father and intense high from the mother Northern Lights. One of the best cures for insomnia it is best suited for evening use and contains mild levels of THC.",
      genetic: 1,
      difficulty: 1,
      indica: 0.7,
      sativa: 0.2,
      ruderalis: 0.1,
      type: 1,
      environment: 0,
      sotiId: "NBA",
      sttId: 43,
      releaseDate: "2018-06-01T07:00:00.000Z",
      isFeatured: false,
      images: ["../static/img/products/sonoma/so-northern-berry.jpg"]
    },
    {
      company: ["sunwest genetics", "sonoma seeds"],
      price: [[65, 120, 220, 420], [50, 100, 150]],
      effect: ["Body High"],
      yield: [400, 550],
      flowerTime: [9, 10],
      qtyLoose: [1000, 2000],
      qtyLooseROP: [500, 1000],
      alias: ["Puple kush", "Cali Kush"],
      qtyLooseNOE: [750, 1500],
      qtyPacked: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedROP: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedNOE: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtySold: [
        [[500, 1200, 2400], [355, 665, 220]],
        [[500, 1200, 2400], [355, 665, 220]]
      ],
      breeder: "BB",
      location: "D9",
      category: "seed",
      relations: [],
      pThc: [20.26],
      pCbd: [0.9],
      pCbn: [],
      country: [3],
      name: "Northern Lights Feminized Cannabis Seeds",
      description:
        "By far, Northern Lights is one of the best strains ever bred. While it has a long flowering period, its high in THC and produces one of the most unique highs. Its genetics have been used in many other strains in order to create a powerful high.",
      genetic: 0,
      difficulty: 1,
      indica: 0.7,
      sativa: 0.3,
      ruderalis: 0,
      type: 1,
      environment: 0,
      sotiId: "NNLF",
      sttId: 9,
      releaseDate: "2018-06-01T07:00:00.000Z",
      isFeatured: false,
      images: ["../static/img/products/sonoma/so-northern-berry.jpg"]
    },
    {
      company: ["sunwest genetics", "sonoma seeds"],
      price: [[65, 120, 220, 420], [50, 100, 150]],
      effect: ["Body & Mind High"],
      yield: [400, 600],
      flowerTime: [8, 10],
      qtyLoose: [1000, 2000],
      qtyLooseROP: [500, 1000],
      alias: ["Puple kush", "Cali Kush"],
      qtyLooseNOE: [750, 1500],
      qtyPacked: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedROP: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedNOE: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtySold: [
        [[500, 1200, 2400], [355, 665, 220]],
        [[500, 1200, 2400], [355, 665, 220]]
      ],
      breeder: "BB",
      location: "D9",
      category: "seed",
      relations: [],
      pThc: [18.6],
      pCbd: [0.1],
      pCbn: [],
      country: [1],
      name: "OG Kush Feminized Cannabis Seeds",
      description:
        "OG Kush has a hand in creating some of the best cannabis strains along the West Coast like Bubba Kush. It has an earthy, lemon, wood tones which is a has become a signature scent of strains coming from OG kush. Super OG Kush seeds are the result of crossing OG Kush and Hindu Kush which has a long lasting cerebral high that can be used day or night.",
      genetic: 0,
      difficulty: 1,
      indica: 0.5,
      sativa: 0.5,
      ruderalis: 0,
      type: 2,
      environment: 0,
      sotiId: "OKF",
      sttId: 10,
      releaseDate: "2018-06-01T07:00:00.000Z",
      isFeatured: false,
      images: ["../static/img/products/sonoma/so-northern-berry.jpg"]
    },
    {
      company: ["sunwest genetics", "sonoma seeds"],
      price: [[65, 120, 220, 420], [50, 100, 150]],
      effect: ["Body & Mind High"],
      yield: [400, 500],
      flowerTime: [9, 10],
      qtyLoose: [1000, 2000],
      qtyLooseROP: [500, 1000],
      alias: ["Puple kush", "Cali Kush"],
      qtyLooseNOE: [750, 1500],
      qtyPacked: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedROP: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedNOE: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtySold: [
        [[500, 1200, 2400], [355, 665, 220]],
        [[500, 1200, 2400], [355, 665, 220]]
      ],
      breeder: "BB",
      location: "D9",
      category: "seed",
      relations: [],
      pThc: [18, 20],
      pCbd: [0.25],
      pCbn: [],
      country: [1],
      name: "OG Kush Autoflower Cannabis Seeds",
      description:
        "While OG Kush may have a longer flowering period the wait is worth the large yields that are produced from the automatic flowering cycle. This cross between Hindu Kush and Chemdog has medium to High THC levels that produce a euphoric state.",
      genetic: 1,
      difficulty: 1,
      indica: 0.45,
      sativa: 0.45,
      ruderalis: 0.1,
      type: 2,
      environment: 0,
      sotiId: "OKA",
      sttId: 44,
      releaseDate: "2018-06-01T07:00:00.000Z",
      isFeatured: false,
      images: ["../static/img/products/sonoma/so-northern-berry.jpg"]
    },
    {
      company: ["sunwest genetics", "sonoma seeds"],
      price: [[65, 120, 220, 420], [50, 100, 150]],
      effect: ["Body High"],
      yield: [200, 250],
      flowerTime: [9, 10],
      qtyLoose: [1000, 2000],
      qtyLooseROP: [500, 1000],
      alias: ["Puple kush", "Cali Kush"],
      qtyLooseNOE: [750, 1500],
      qtyPacked: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedROP: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedNOE: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtySold: [
        [[500, 1200, 2400], [355, 665, 220]],
        [[500, 1200, 2400], [355, 665, 220]]
      ],
      breeder: "BB",
      location: "D9",
      category: "seed",
      relations: [],
      pThc: [20],
      pCbd: [1.33],
      pCbn: [],
      country: [1],
      name: "Purple Kush Autoflower Cannabis Seeds",
      description:
        "This autoflower variety of Purple Kush helps automate part of the growing process with it’s ruderalis genetics. While it may have a longer flowering period, it is very easy to grow and has very high levels of THC.",
      genetic: 1,
      difficulty: 1,
      indica: 0.7,
      sativa: 0.2,
      ruderalis: 0.1,
      type: 1,
      environment: 0,
      sotiId: "PKA",
      sttId: 45,
      releaseDate: "2018-06-01T07:00:00.000Z",
      isFeatured: false,
      images: ["../static/img/products/sonoma/so-northern-berry.jpg"]
    },
    {
      company: ["sunwest genetics", "sonoma seeds"],
      price: [[65, 120, 220, 420], [50, 100, 150]],
      effect: ["Mind & Body High"],
      yield: [200, 300],
      flowerTime: [9, 10],
      qtyLoose: [1000, 2000],
      qtyLooseROP: [500, 1000],
      alias: ["Puple kush", "Cali Kush"],
      qtyLooseNOE: [750, 1500],
      qtyPacked: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedROP: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedNOE: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtySold: [
        [[500, 1200, 2400], [355, 665, 220]],
        [[500, 1200, 2400], [355, 665, 220]]
      ],
      breeder: "BB",
      location: "D9",
      category: "seed",
      relations: [],
      pThc: [19],
      pCbd: [0.8],
      pCbn: [0, 0.1],
      country: [2],
      name: "Strawberry Cough Autoflower Cannabis Seeds",
      description:
        "Strawberry Cough gets it's name from the sweet, fruity smell and the thick smoke it produces. The dense buds are covered in red hairs which gives it the look of strawberries. Many people like to use it in social situations to relieve anxiety and stress. While being great for daytime use since it�s 70% sativa its also great for evening use.",
      genetic: 1,
      difficulty: 0,
      indica: 0.2,
      sativa: 0.7,
      ruderalis: 0.1,
      type: 0,
      environment: 0,
      sotiId: "SCA",
      sttId: 46,
      releaseDate: "2018-06-01T07:00:00.000Z",
      isFeatured: false,
      images: ["../static/img/products/sonoma/so-strawberry-cough.jpg"]
    },
    {
      company: ["sunwest genetics", "sonoma seeds"],
      price: [[65, 120, 220, 420], [50, 100, 150]],
      effect: ["Body High"],
      yield: [300, 500],
      flowerTime: [8, 9],
      qtyLoose: [1000, 2000],
      qtyLooseROP: [500, 1000],
      alias: ["Puple kush", "Cali Kush"],
      qtyLooseNOE: [750, 1500],
      qtyPacked: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedROP: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedNOE: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtySold: [
        [[500, 1200, 2400], [355, 665, 220]],
        [[500, 1200, 2400], [355, 665, 220]]
      ],
      breeder: "BB",
      location: "D9",
      category: "seed",
      relations: [],
      pThc: [22],
      pCbd: [0.1],
      pCbn: [],
      country: [3],
      name: "Sweet Tooth Feminized Cannabis Seeds",
      description:
        "Coming from the Netherlands, Sweet Tooth has high yields and very high levels of THC. Its easy to grow and will flower in about 8-9 weeks.",
      genetic: 0,
      difficulty: 0,
      indica: 0.85,
      sativa: 0.15,
      ruderalis: 0,
      type: 1,
      environment: 0,
      sotiId: "STF",
      sttId: 11,
      releaseDate: "2018-06-01T07:00:00.000Z",
      isFeatured: false,
      images: ["../static/img/products/sonoma/so-strawberry-cough.jpg"]
    },
    {
      company: ["sunwest genetics", "sonoma seeds"],
      price: [[65, 120, 220, 420], [50, 100, 150]],
      effect: ["Strong High"],
      yield: [400, 300],
      flowerTime: [8],
      qtyLoose: [1000, 2000],
      qtyLooseROP: [500, 1000],
      alias: ["Puple kush", "Cali Kush"],
      qtyLooseNOE: [750, 1500],
      qtyPacked: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedROP: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedNOE: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtySold: [
        [[500, 1200, 2400], [355, 665, 220]],
        [[500, 1200, 2400], [355, 665, 220]]
      ],
      breeder: "BB",
      location: "D9",
      category: "seed",
      relations: [],
      pThc: [24.1],
      pCbd: [0.7],
      pCbn: [],
      country: [2],
      name: "White Widow Feminized Cannabis Seeds",
      description:
        "Compared to the Autoflower version of White Widow, this strain produces higher yields and has much higher THC levels. It also has high levels of a medicinally beneficial compound of CBN at 3%",
      genetic: 0,
      difficulty: 0,
      indica: 0.6,
      sativa: 0.4,
      ruderalis: 0,
      type: 1,
      environment: 0,
      sotiId: "WWF",
      sttId: 12,
      releaseDate: "2018-06-01T07:00:00.000Z",
      isFeatured: false,
      images: ["../static/img/products/sonoma/so-strawberry-cough.jpg"]
    },
    {
      company: ["sunwest genetics", "sonoma seeds"],
      price: [[65, 120, 220, 420], [50, 100, 150]],
      effect: ["Strong High"],
      yield: [250, 150],
      flowerTime: [8],
      qtyLoose: [1000, 2000],
      qtyLooseROP: [500, 1000],
      alias: ["Puple kush", "Cali Kush"],
      qtyLooseNOE: [750, 1500],
      qtyPacked: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedROP: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedNOE: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtySold: [
        [[500, 1200, 2400], [355, 665, 220]],
        [[500, 1200, 2400], [355, 665, 220]]
      ],
      breeder: "BB",
      location: "D9",
      category: "seed",
      relations: [],
      pThc: [21.1],
      pCbd: [0.7],
      pCbn: [],
      country: [2],
      name: "White Widow Autoflower Cannabis Seeds",
      description:
        "The main differences between White Widow Autoflower and White Widow are slightly lower THC levels at 21% (which is still very high) and it produces a slightly lower yield. For doing a little bit less work due to it flowering on its own its worth the trade off.",
      genetic: 1,
      difficulty: 0,
      indica: 0.6,
      sativa: 0.3,
      ruderalis: 0.1,
      type: 1,
      environment: 0,
      sotiId: "WWA",
      sttId: 47,
      releaseDate: "2018-06-01T07:00:00.000Z",
      isFeatured: false,
      images: ["../static/img/products/sonoma/so-strawberry-cough.jpg"]
    },
    {
      company: ["sonoma seeds", "crop king seeds"],
      price: [[65, 120, 220, 420], [50, 100, 150]],
      effect: [],
      yield: [200, 400],
      flowerTime: [8],
      qtyLoose: [1000, 2000],
      qtyLooseROP: [500, 1000],
      alias: ["Puple kush", "Cali Kush"],
      qtyLooseNOE: [750, 1500],
      qtyPacked: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedROP: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedNOE: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtySold: [
        [[500, 1200, 2400], [355, 665, 220]],
        [[500, 1200, 2400], [355, 665, 220]]
      ],
      breeder: "BB",
      location: "D9",
      category: "seed",
      relations: [],
      pThc: [12.94],
      pCbd: [2.5],
      pCbn: [0, 0.1],
      country: [2],
      name: "Black Indica Feminized Cannabis Seeds",
      description:
        "Our purest Indica strain is ideal for relaxing and social activities. A short and stalky plant with wide leaves that is ideal for medical purposes such as insomnia and mild pain relief. Moderate level of THC and a relaxed high make this fast finishing Indica ideal for beginners. Black Indica Feminized marijuana seed is easy to grow and it can dwell well in both indoors and outdoors set up. It flowers up to 8 weeks and can produce high yield if grown well with the proper growing method, soil, nutrients, light, and water. This Indica dominant strain will make you feel relaxed. Stressed out? Then this is the right strain for you. If you want to relax after a long day of work, then grab some Black Indica bud for your relaxation.",
      genetic: 0,
      difficulty: 0,
      indica: 0.8,
      sativa: 0.2,
      ruderalis: 0,
      type: 1,
      environment: 0,
      sotiId: "BIF",
      sttId: 2,
      releaseDate: "2018-06-01T07:00:00.000Z",
      isFeatured: false,
      images: "../static/img/products/cks/cks-black-indica.png"
    },
    {
      company: ["sonoma seeds", "crop king seeds"],
      price: [[65, 120, 220, 420], [50, 100, 150]],
      effect: [],
      yield: [300, 500],
      flowerTime: [9, 10],
      qtyLoose: [1000, 2000],
      qtyLooseROP: [500, 1000],
      alias: ["Puple kush", "Cali Kush"],
      qtyLooseNOE: [750, 1500],
      qtyPacked: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedROP: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedNOE: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtySold: [
        [[500, 1200, 2400], [355, 665, 220]],
        [[500, 1200, 2400], [355, 665, 220]]
      ],
      breeder: "BB",
      location: "D9",
      category: "seed",
      relations: [],
      pThc: [24.4],
      pCbd: [0.45],
      pCbn: [0],
      country: [1],
      name: "Cali OG Kush Feminized Cannabis Seeds",
      description:
        "Crop King Seeds traveled to Northern California to find a Dominant OG Kush and crossed it with our Amnesia Haze, creating a dominant uplifting Sativa and the famous characteristics you get from an OG Kush Indica. A new beauty exclusive only from 'The King'.",
      genetic: 0,
      difficulty: 1,
      indica: 0.3,
      sativa: 0.7,
      ruderalis: 0,
      type: 0,
      environment: 0,
      sotiId: "CHF",
      sttId: 4,
      releaseDate: "2018-06-01T07:00:00.000Z",
      isFeatured: false,
      images: "../static/img/products/cks/cks-cali-og.png"
    },
    {
      company: ["sonoma seeds", "crop king seeds"],
      price: [[65, 120, 220, 420], [50, 100, 150]],
      effect: [],
      yield: [100, 200],
      flowerTime: [9],
      qtyLoose: [1000, 2000],
      qtyLooseROP: [500, 1000],
      alias: ["Puple kush", "Cali Kush"],
      qtyLooseNOE: [750, 1500],
      qtyPacked: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedROP: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedNOE: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtySold: [
        [[500, 1200, 2400], [355, 665, 220]],
        [[500, 1200, 2400], [355, 665, 220]]
      ],
      breeder: "BB",
      location: "D9",
      category: "seed",
      relations: [],
      pThc: [20.06],
      pCbd: [0.7],
      pCbn: [0],
      country: [2],
      name: "Early Miss Feminized Cannabis Seeds",
      description:
        "Strong and dense, this Fast flowering, easy to grow 7-week Indica dominate strain gives a high yield, can be grown any time of the year outdoors as long as temperatures above 10C. Our Early Miss is medicinally effective in pain therapy. One of the most famous Spanish genetics. Early Miss Autoflowering cannabis can also be grown indoors and it is easy to moderate to grow. The effect of Early Miss when smoked is relaxing with its THC content which can reach up to 20%. Early Miss is a hybrid auto-flowering cannabis strain which is a result of the crossbreeding of two premium strains namely Big Bud and the Original White Widow.",
      genetic: 1,
      difficulty: 0,
      indica: 0.6,
      sativa: 0.3,
      ruderalis: 0.1,
      type: 1,
      environment: 0,
      sotiId: "EMA",
      sttId: 45,
      releaseDate: "2018-06-01T07:00:00.000Z",
      isFeatured: false,
      images: "../static/img/products/cks/cks-early-miss.png"
    },
    {
      company: ["sonoma seeds", "crop king seeds"],
      price: [[65, 120, 220, 420], [50, 100, 150]],
      effect: [],
      yield: [400, 500],
      flowerTime: [8, 10],
      qtyLoose: [1000, 2000],
      qtyLooseROP: [500, 1000],
      alias: ["Puple kush", "Cali Kush"],
      qtyLooseNOE: [750, 1500],
      qtyPacked: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedROP: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedNOE: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtySold: [
        [[500, 1200, 2400], [355, 665, 220]],
        [[500, 1200, 2400], [355, 665, 220]]
      ],
      breeder: "BB",
      location: "D9",
      category: "seed",
      relations: [],
      pThc: [19.8],
      pCbd: [0.12],
      pCbn: [0],
      country: [3],
      name: "White Banner Feminized Cannabis Seeds",
      description:
        "Ever wish 2 of the worlds most popular strains could get together and make a beautiful baby girl? Crop King Seeds is here to make your wishes come true and introduce you to the new White Banner! An amazing 50/50 hybrid blend of Bruce Banner and White Widow. The THC content is sitting at a comfortable 19.8% giving you an outstanding memorable cerebral high. Great for beginners and veterans alike! Now available exclusively through Crop King Seeds",
      genetic: 0,
      difficulty: 0,
      indica: 0.5,
      sativa: 0.5,
      ruderalis: 0,
      type: 2,
      environment: 0,
      sotiId: "WBF",
      sttId: 14,
      releaseDate: "2018-06-01T07:00:00.000Z",
      isFeatured: false,
      images: "../static/img/products/cks/cks-white-banner.png"
    },
    {
      company: ["sonoma seeds", "crop king seeds"],
      price: [[65, 120, 220, 420], [50, 100, 150]],
      effect: [],
      yield: [150, 250],
      flowerTime: [8],
      qtyLoose: [1000, 2000],
      qtyLooseROP: [500, 1000],
      alias: ["Puple kush", "Cali Kush"],
      qtyLooseNOE: [750, 1500],
      qtyPacked: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedROP: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedNOE: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtySold: [
        [[500, 1200, 2400], [355, 665, 220]],
        [[500, 1200, 2400], [355, 665, 220]]
      ],
      breeder: "BB",
      location: "D9",
      category: "seed",
      relations: [],
      pThc: [16.5],
      pCbd: [0.49],
      pCbn: [0],
      country: [2],
      name: "Train Wreck Feminized Cannabis Seeds",
      description:
        "Ruderalis blends with Sativa-dominant Train Wreck to form a mind-altering hybrid auto-flower. Spice up your day with a cerebral, euphoric high while melting away aches and pains. Compact yet high-yielding plants produce dense, resinous buds smelling of citrus and pepper. Suitable to any growing ability, this stealth strain will fly under the radar in your cannabis garden. Flowers mature in 8 weeks.",
      genetic: 1,
      difficulty: 0,
      indica: 0.6,
      sativa: 0.3,
      ruderalis: 0.1,
      type: 1,
      environment: 0,
      sotiId: "TWA",
      sttId: 52,
      releaseDate: "2018-06-01T07:00:00.000Z",
      isFeatured: false,
      images: "../static/img/products/cks/cks-train-wreck.png"
    },
    {
      company: ["sonoma seeds", "crop king seeds"],
      price: [[65, 120, 220, 420], [50, 100, 150]],
      effect: [],
      yield: [500, 500],
      flowerTime: [9, 10],
      qtyLoose: [1000, 2000],
      qtyLooseROP: [500, 1000],
      alias: ["Puple kush", "Cali Kush"],
      qtyLooseNOE: [750, 1500],
      qtyPacked: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedROP: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedNOE: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtySold: [
        [[500, 1200, 2400], [355, 665, 220]],
        [[500, 1200, 2400], [355, 665, 220]]
      ],
      breeder: "BB",
      location: "D9",
      category: "seed",
      relations: [],
      pThc: [4],
      pCbd: [8],
      pCbn: [0],
      country: [2],
      name: "CB Dutch Treat Feminized Cannabis Seeds",
      description:
        "Azura Haze and Amnesia Haze make a winning combination in this ultimate Sativa-dominant medical strain. Spicy and piney, this pain-reliever will deliver a high that is both energetic and euphoric. A good strain for day use as it helps the user feel happy, creative and focused. Robust plants can reach 4 feet or more, with long, slender leaves. Abundant light-green flowers mature in 9 to 10 weeks",
      genetic: 0,
      difficulty: 0,
      indica: 0.2,
      sativa: 0.8,
      ruderalis: 0,
      type: 0,
      environment: 0,
      sotiId: "CBT",
      sttId: 81,
      releaseDate: "2018-06-01T07:00:00.000Z",
      isFeatured: false,
      images: "../static/img/products/cks/cks-cbdutch-treat.png"
    },
    {
      company: ["sonoma seeds", "crop king seeds"],
      price: [[65, 120, 220, 420], [50, 100, 150]],
      effect: [],
      yield: [100, 250],
      flowerTime: [7],
      qtyLoose: [1000, 2000],
      qtyLooseROP: [500, 1000],
      alias: ["Puple kush", "Cali Kush"],
      qtyLooseNOE: [750, 1500],
      qtyPacked: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedROP: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedNOE: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtySold: [
        [[500, 1200, 2400], [355, 665, 220]],
        [[500, 1200, 2400], [355, 665, 220]]
      ],
      breeder: "BB",
      location: "D9",
      category: "seed",
      relations: [],
      pThc: [13.67],
      pCbd: [0.1],
      pCbn: [0],
      country: [2],
      name: "Revolver Feminized Cannabis Seeds",
      description:
        "Auto-Flowering and easy to grow, thriving in both outdoor and indoor settings. Its medium plant height makes it a good match for smaller indoor gardens. High yielding this strain is perfect for first-time growers. The long-lasting indica effect with a clear high, Medicinally effective in appetite stimulation and pain. Since Revolver is auto-flowering, you can expect a quick finish to up to 7 weeks. If smoked, you will surely amazed with the Stoney yet High � All around buzz effect that will make you come back for more. The THC level is low to moderate but the yield is high. Revolver is a combination of NY City Diesel and the Original White Widow. With the crossbreeding comes a mostly indica hybrid which is highly medicinal in nature.",
      genetic: 1,
      difficulty: 0,
      indica: 0.7,
      sativa: 0.2,
      ruderalis: 0.1,
      type: 1,
      environment: 0,
      sotiId: "REA",
      sttId: 50,
      releaseDate: "2018-06-01T07:00:00.000Z",
      isFeatured: false,
      images: "../static/img/products/cks/cks-revolver.png"
    },
    {
      company: ["beaver seeds", "sonoma seeds"],
      price: [[65, 120, 220, 420], [50, 100, 150]],
      effect: ["Energetic", "giggly"],
      yield: [100, 250],
      flowerTime: [10, 11],
      qtyLoose: [1000, 2000],
      qtyLooseROP: [500, 1000],
      alias: ["Puple kush", "Cali Kush"],
      qtyLooseNOE: [750, 1500],
      qtyPacked: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedROP: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedNOE: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtySold: [
        [[500, 1200, 2400], [355, 665, 220]],
        [[500, 1200, 2400], [355, 665, 220]]
      ],
      breeder: "BB",
      location: "D9",
      category: "seed",
      relations: [],
      pThc: [20, 25],
      pCbd: [0],
      pCbn: [],
      country: [2],
      name: "Blackberry Autoflower Cannabis Seeds",
      description:
        "This strain is popular for its formidable THC content and energetic high. Often used for aiding patients with chronic aches and pain, it numbs the body and relaxes sore muscles. This strain is recommended to be grown indoors but watch out; the plants are pungent. When smoked, it smells like its name. ",
      genetic: 1,
      difficulty: 1,
      indica: 0.5,
      sativa: 0.5,
      ruderalis: 0,
      type: 2,
      environment: 0,
      sotiId: "BBA",
      sttId: 40,
      releaseDate: "2018-06-01T07:00:00.000Z",
      isFeatured: false,
      images: [
        "../static/images/Blackberry/island.png",
        "../static/images/Blackberry/strain.png",
        "../static/images/Blackberry/package.png",
        "../static/images/Blackberry/border.png"
      ],
      color: "#a195c3"
    },
    {
      company: ["beaver seeds", "sonoma seeds"],
      price: [[65, 120, 220, 420], [50, 100, 150]],
      effect: ["Creative", "aroused"],
      yield: [100, 250],
      flowerTime: [8, 9],
      qtyLoose: [1000, 2000],
      qtyLooseROP: [500, 1000],
      alias: ["Puple kush", "Cali Kush"],
      qtyLooseNOE: [750, 1500],
      qtyPacked: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedROP: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedNOE: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtySold: [
        [[500, 1200, 2400], [355, 665, 220]],
        [[500, 1200, 2400], [355, 665, 220]]
      ],
      breeder: "BB",
      location: "D9",
      category: "seed",
      relations: [],
      pThc: [9, 15],
      pCbd: [0],
      pCbn: [],
      country: [2],
      name: "Cali Kush Feminized Cannabis Seeds",
      description:
        "This hybrid is a well-balanced strain, leaving consumers relaxed and happy, but won’t put you to sleep unless you smoke a high dose. It has a fresh, fruity smell with undertones of coffee and spice. It is most commonly used to treat stress and help those with ADD/ADHD to focus.",
      genetic: 0,
      difficulty: 1,
      indica: 0.5,
      sativa: 0.5,
      ruderalis: 0,
      type: 2,
      environment: 0,
      sotiId: "CKF",
      sttId: 1,
      releaseDate: "2018-06-01T07:00:00.000Z",
      isFeatured: false,
      images: [
        "../static/images/Calikush/island.png",
        "../static/images/Calikush/strain.png",
        "../static/images/Calikush/package.png",
        "../static/images/Calikush/border.png"
      ],
      color: "#fea27b"
    },

    {
      company: ["beaver seeds", "sonoma seeds"],
      price: [[65, 120, 220, 420], [50, 100, 150]],
      effect: ["Happy", "Energetic"],
      yield: [100, 250],
      flowerTime: [8, 10],
      qtyLoose: [1000, 2000],
      qtyLooseROP: [500, 1000],
      alias: ["Puple kush", "Cali Kush"],
      qtyLooseNOE: [750, 1500],
      qtyPacked: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedROP: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedNOE: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtySold: [
        [[500, 1200, 2400], [355, 665, 220]],
        [[500, 1200, 2400], [355, 665, 220]]
      ],
      breeder: "BB",
      location: "D9",
      category: "seed",
      relations: [],
      pThc: [22, 27],
      pCbd: [0],
      pCbn: [],
      country: [2],
      name: "Candy Jack Feminized Cannabis Seeds",
      description:
        "This strain is a mix between Jack Herer and Cotton Candy, producing a high that will make you happy, hungry, and energized. A good choice for daytime use, expect to feel mentally focused and creative. It has a sweet, lemony diesel aroma, and a citrus fruit flavour. ",
      genetic: 0,
      difficulty: 1,
      indica: 0.5,
      sativa: 0.5,
      ruderalis: 0,
      type: 2,
      environment: 0,
      sotiId: "CJF",
      sttId: 2,
      releaseDate: "2018-06-01T07:00:00.000Z",
      isFeatured: false,
      images: [
        "../static/images/Candyjack/island.png",
        "../static/images/Candyjack/strain.png",
        "../static/images/Candyjack/package.png",
        "../static/images/Candyjack/border.png"
      ],
      color: "#f1bed3"
    },
    {
      company: ["beaver seeds", "sonoma seeds"],
      price: [[65, 120, 220, 420], [50, 100, 150]],
      effect: ["Relaxed", "happy"],
      yield: [100, 250],
      flowerTime: [7, 9],
      qtyLoose: [1000, 2000],
      qtyLooseROP: [500, 1000],
      alias: ["Puple kush", "Cali Kush"],
      qtyLooseNOE: [750, 1500],
      qtyPacked: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedROP: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedNOE: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtySold: [
        [[500, 1200, 2400], [355, 665, 220]],
        [[500, 1200, 2400], [355, 665, 220]]
      ],
      breeder: "BB",
      location: "D9",
      category: "seed",
      relations: [],
      pThc: [15, 20],
      pCbd: [0],
      pCbn: [],
      country: [2],
      name: "Cheese Feminized Cannabis Seeds",
      description:
        "This well-known strain is named for its sour aroma and buttery flavour. It produces a relaxed and happy high and is often used to combat depression and anxiety. First time users of this strain use cautiously, as it can sometimes produce headaches and headspins.",
      genetic: 0,
      difficulty: 1,
      indica: 0.5,
      sativa: 0.5,
      ruderalis: 0,
      type: 2,
      environment: 0,
      sotiId: "CHF",
      sttId: 3,
      releaseDate: "2018-06-01T07:00:00.000Z",
      isFeatured: false,
      images: [
        "../static/images/Cheese/island.png",
        "../static/images/Cheese/strain.png",
        "../static/images/Cheese/package.png",
        "../static/images/Cheese/border.png"
      ],
      color: "#efc65f"
    },
    {
      company: ["beaver seeds", "sonoma seeds"],
      price: [[65, 120, 220, 420], [50, 100, 150]],
      effect: ["Sleepy", "relaxed"],
      yield: [100, 250],
      flowerTime: [7, 9],
      qtyLoose: [1000, 2000],
      qtyLooseROP: [500, 1000],
      alias: ["Puple kush", "Cali Kush"],
      qtyLooseNOE: [750, 1500],
      qtyPacked: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedROP: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedNOE: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtySold: [
        [[500, 1200, 2400], [355, 665, 220]],
        [[500, 1200, 2400], [355, 665, 220]]
      ],
      breeder: "BB",
      location: "D9",
      category: "seed",
      relations: [],
      pThc: [15, 22],
      pCbd: [0],
      pCbn: [],
      country: [2],
      name: "Chocolate Chunk Feminized Cannabis Seeds",
      description:
        "This strain is earthly and dank, with undertones of chocolate and coffee. Just like a rich dessert, it will leave you feeling relaxed and heavy, and is best enjoyed after dinner when you’re ready to lounge around. Often used for stress and depression relief, it also helps those prone to anxiety.",
      genetic: 0,
      difficulty: 1,
      indica: 1,
      sativa: 0,
      ruderalis: 0,
      type: 1,
      environment: 0,
      sotiId: "CCF",
      sttId: 4,
      releaseDate: "2018-06-01T07:00:00.000Z",
      isFeatured: false,
      images: [
        "../static/images/Chocolatechunk/island.png",
        "../static/images/Chocolatechunk/strain.png",
        "../static/images/Chocolatechunk/package.png",
        "../static/images/Chocolatechunk/border.png"
      ],
      color: "#e6ad77"
    },
    {
      company: ["beaver seeds", "sonoma seeds"],
      price: [[65, 120, 220, 420], [50, 100, 150]],
      effect: ["Energetic", "giggly"],
      yield: [100, 250],
      flowerTime: [7, 10],
      qtyLoose: [1000, 2000],
      qtyLooseROP: [500, 1000],
      alias: ["Puple kush", "Cali Kush"],
      qtyLooseNOE: [750, 1500],
      qtyPacked: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedROP: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedNOE: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtySold: [
        [[500, 1200, 2400], [355, 665, 220]],
        [[500, 1200, 2400], [355, 665, 220]]
      ],
      breeder: "BB",
      location: "D9",
      category: "seed",
      relations: [],
      pThc: [17, 22],
      pCbd: [0],
      pCbn: [],
      country: [2],
      name: "Devils Crack Feminized Cannabis Seeds",
      description:
        "Though the name might make it sound aggressive, this strain is actually quite heavenly! What makes Devil’s Crack devilish is its instant potency. Similar to Green Crack, it produces a very energetic high and tons of laughter. Smoke moderately as this strain can easily launch you into space!",
      genetic: 0,
      difficulty: 1,
      indica: 0.4,
      sativa: 0.6,
      ruderalis: 0,
      type: 0,
      environment: 0,
      sotiId: "DCF",
      sttId: 5,
      releaseDate: "2018-06-01T07:00:00.000Z",
      isFeatured: false,
      images: [
        "../static/images/Devilscrack/island.png",
        "../static/images/Devilscrack/strain.png",
        "../static/images/Devilscrack/package.png",
        "../static/images/Devilscrack/border.png"
      ],
      color: "#bb443f"
    },
    {
      company: ["beaver seeds", "sonoma seeds"],
      price: [[65, 120, 220, 420], [50, 100, 150]],
      effect: ["Happy", "euphoric"],
      yield: [100, 250],
      flowerTime: [11],
      qtyLoose: [1000, 2000],
      qtyLooseROP: [500, 1000],
      alias: ["Puple kush", "Cali Kush"],
      qtyLooseNOE: [750, 1500],
      qtyPacked: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedROP: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedNOE: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtySold: [
        [[500, 1200, 2400], [355, 665, 220]],
        [[500, 1200, 2400], [355, 665, 220]]
      ],
      breeder: "BB",
      location: "D9",
      category: "seed",
      relations: [],
      pThc: [13, 20],
      pCbd: [0],
      pCbn: [],
      country: [2],
      name: "Fucking Incredible Autoflower Cannabis Seeds",
      description:
        "This pure indica is a favourite for those looking for relief from pain, stress, and fatigue. Fucking Incredible delivers a strong body buzz that spreads through your entire body, ending by easing your mind into a state of complete relaxation. Like the name suggests, this strain is… fucking incredible.",
      genetic: 1,
      difficulty: 1,
      indica: 0.8,
      sativa: 0.2,
      ruderalis: 0,
      type: 1,
      environment: 0,
      sotiId: "FIA",
      sttId: 41,
      releaseDate: "2018-06-01T07:00:00.000Z",
      isFeatured: false,
      images: [
        "../static/images/Fuckingincredible/island.png",
        "../static/images/Fuckingincredible/strain.png",
        "../static/images/Fuckingincredible/package.png",
        "../static/images/Fuckingincredible/border.png"
      ],
      color: "#54a1b9"
    },
    {
      company: ["beaver seeds", "sonoma seeds"],
      price: [[65, 120, 220, 420], [50, 100, 150]],
      effect: ["Relaxed", "happy"],
      yield: [100, 250],
      flowerTime: [7, 9],
      qtyLoose: [1000, 2000],
      qtyLooseROP: [500, 1000],
      alias: ["Puple kush", "Cali Kush"],
      qtyLooseNOE: [750, 1500],
      qtyPacked: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedROP: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedNOE: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtySold: [
        [[500, 1200, 2400], [355, 665, 220]],
        [[500, 1200, 2400], [355, 665, 220]]
      ],
      breeder: "BB",
      location: "D9",
      category: "seed",
      relations: [],
      pThc: [22, 27],
      pCbd: [0],
      pCbn: [],
      country: [2],
      name: "Gorilla Glue Feminized Cannabis Seeds",
      description:
        "This hybrid, with its incredibly high THC content will leave your mind feeling like it’s been filled with glue. Due to its even ratio of indica and sativa, you’ll feel the effects of this strain in both mind and body. Gorilla Glue is often used to treat chronic pain, depression and insomnia, and is best for evening use.",
      genetic: 0,
      difficulty: 0,
      indica: 0.5,
      sativa: 0.5,
      ruderalis: 0,
      type: 2,
      environment: 0,
      sotiId: "GGF",
      sttId: 6,
      releaseDate: "2018-06-01T07:00:00.000Z",
      isFeatured: false,
      images: [
        "../static/images/Gorillaglue/island.png",
        "../static/images/Gorillaglue/strain.png",
        "../static/images/Gorillaglue/package.png",
        "../static/images/Gorillaglue/border.png"
      ],
      color: "#e4985f"
    },
    {
      company: ["beaver seeds", "sonoma seeds"],
      price: [[65, 120, 220, 420], [50, 100, 150]],
      effect: ["Happy", "uplifted"],
      yield: [100, 250],
      flowerTime: [7, 9],
      qtyLoose: [1000, 2000],
      qtyLooseROP: [500, 1000],
      alias: ["Puple kush", "Cali Kush"],
      qtyLooseNOE: [750, 1500],
      qtyPacked: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedROP: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedNOE: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtySold: [
        [[500, 1200, 2400], [355, 665, 220]],
        [[500, 1200, 2400], [355, 665, 220]]
      ],
      breeder: "BB",
      location: "D9",
      category: "seed",
      relations: [],
      pThc: [20, 25],
      pCbd: [0],
      pCbn: [],
      country: [2],
      name: "Grand Daddy Purple Autoflower Cannabis Seeds",
      description:
        "Wait five minutes… Ten minutes… Fifteen minutes... and POW! Grand Daddy Purple might be slow to come on, but once it hits you, it is one of the strongest indicas you’ll experience. Have your entertainment and munchies ready, as you won’t be moving for a while.",
      genetic: 1,
      difficulty: 1,
      indica: 0.4,
      sativa: 0.6,
      ruderalis: 0,
      type: 0,
      environment: 0,
      sotiId: "GDA",
      sttId: 42,
      releaseDate: "2018-06-01T07:00:00.000Z",
      isFeatured: false,
      images: [
        "../static/images/Granddaddy/island.png",
        "../static/images/Granddaddy/strain.png",
        "../static/images/Granddaddy/package.png",
        "../static/images/Granddaddy/border.png"
      ],
      color: "#a982b7"
    },
    {
      company: ["beaver seeds", "sonoma seeds"],
      price: [[65, 120, 220, 420], [50, 100, 150]],
      effect: ["Happy", "uplifting"],
      yield: [100, 250],
      flowerTime: [7, 10],
      qtyLoose: [1000, 2000],
      qtyLooseROP: [500, 1000],
      alias: ["Puple kush", "Cali Kush"],
      qtyLooseNOE: [750, 1500],
      qtyPacked: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedROP: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedNOE: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtySold: [
        [[500, 1200, 2400], [355, 665, 220]],
        [[500, 1200, 2400], [355, 665, 220]]
      ],
      breeder: "BB",
      location: "D9",
      category: "seed",
      relations: [],
      pThc: [15, 21],
      pCbd: [0],
      pCbn: [],
      country: [2],
      name: "Great White Shark Feminized Cannabis Seeds",
      description:
        "Great White Shark is a strong indica that is often used to treat chronic pain. It is both relaxing and stress reducing, perfect for a day off. The bud is full of white crystals and orange hairs, and just like a great white, can be quite powerful. The flavours are citrus, skunk, and sweet. ",
      genetic: 0,
      difficulty: 0,
      indica: 0.8,
      sativa: 0.2,
      ruderalis: 0,
      type: 1,
      environment: 0,
      sotiId: "GWF",
      sttId: 7,
      releaseDate: "2018-06-01T07:00:00.000Z",
      isFeatured: false,
      images: [
        "../static/images/Greatwhiteshark/island.png",
        "../static/images/Greatwhiteshark/strain.png",
        "../static/images/Greatwhiteshark/package.png",
        "../static/images/Greatwhiteshark/border.png"
      ],
      color: "#93a8ad"
    },
    {
      company: ["beaver seeds", "sonoma seeds"],
      price: [[65, 120, 220, 420], [50, 100, 150]],
      effect: ["Energetic", "giggly"],
      yield: [100, 250],
      flowerTime: [7, 9],
      qtyLoose: [1000, 2000],
      qtyLooseROP: [500, 1000],
      alias: ["Puple kush", "Cali Kush"],
      qtyLooseNOE: [750, 1500],
      qtyPacked: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedROP: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedNOE: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtySold: [
        [[500, 1200, 2400], [355, 665, 220]],
        [[500, 1200, 2400], [355, 665, 220]]
      ],
      breeder: "BB",
      location: "D9",
      category: "seed",
      relations: [],
      pThc: [17, 25],
      pCbd: [0],
      pCbn: [],
      country: [2],
      name: "Headband Feminized Cannabis Seeds",
      description:
        "A popular strain on the West Coast, this hybrid is the cross between two popular parents, OG Kush and Sour Diesel. Its name comes from the slight pressure some people feel around their head, giving the effect of wearing a headband. Great for pain relief as well as relaxation.",
      genetic: 0,
      difficulty: 2,
      indica: 0.6,
      sativa: 0.4,
      ruderalis: 0,
      type: 1,
      environment: 0,
      sotiId: "HBF",
      sttId: 8,
      releaseDate: "2018-06-01T07:00:00.000Z",
      isFeatured: false,
      images: [
        "../static/images/Headband/island.png",
        "../static/images/Headband/strain.png",
        "../static/images/Headband/package.png",
        "../static/images/Headband/border.png"
      ],
      color: "#17b4c0"
    },
    {
      company: ["beaver seeds", "sonoma seeds"],
      price: [[65, 120, 220, 420], [50, 100, 150]],
      effect: ["Happy", "energetic"],
      yield: [100, 250],
      flowerTime: [7, 9],
      qtyLoose: [1000, 2000],
      qtyLooseROP: [500, 1000],
      alias: ["Puple kush", "Cali Kush"],
      qtyLooseNOE: [750, 1500],
      qtyPacked: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedROP: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedNOE: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtySold: [
        [[500, 1200, 2400], [355, 665, 220]],
        [[500, 1200, 2400], [355, 665, 220]]
      ],
      breeder: "BB",
      location: "D9",
      category: "seed",
      relations: [],
      pThc: [20, 28],
      pCbd: [0],
      pCbn: [],
      country: [2],
      name: "Maui Wowie Autoflower Cannabis Seeds",
      description:
        "This classic strain originally created on the shores of Hawaii has pleased consumers with its tropical flavours all over the world. It produces a motivating, energetic and creative high, perfect for daytime use. As one reviewer said, and we agree: “Flavour: Maui. Effect: Wowie.”",
      genetic: 1,
      difficulty: 0,
      indica: 0.2,
      sativa: 0.8,
      ruderalis: 0,
      type: 0,
      environment: 0,
      sotiId: "MWA",
      sttId: 43,
      releaseDate: "2018-06-01T07:00:00.000Z",
      isFeatured: false,
      images: [
        "../static/images/Mauiwowie/island.png",
        "../static/images/Mauiwowie/strain.png",
        "../static/images/Mauiwowie/package.png",
        "../static/images/Mauiwowie/border.png"
      ],
      color: "#a3c7a6"
    },
    {
      company: ["beaver seeds", "sonoma seeds"],
      price: [[65, 120, 220, 420], [50, 100, 150]],
      effect: ["Energetic", "giggly"],
      yield: [100, 250],
      flowerTime: [10, 11],
      qtyLoose: [1000, 2000],
      qtyLooseROP: [500, 1000],
      alias: ["Puple kush", "Cali Kush"],
      qtyLooseNOE: [750, 1500],
      qtyPacked: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedROP: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedNOE: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtySold: [
        [[500, 1200, 2400], [355, 665, 220]],
        [[500, 1200, 2400], [355, 665, 220]]
      ],
      breeder: "BB",
      location: "D9",
      category: "seed",
      relations: [],
      pThc: [20, 25],
      pCbd: [0],
      pCbn: [],
      country: [2],
      name: "Pineapple Express Autoflower Cannabis Seeds (5 Seeds)",
      description:
        "Often described as the perfect blend of relaxation and alertness, this smooth strain makes you giggle and is a great remedy for anyone with mental stress. A good daytime weed, fantastic if you have places to be and people to see. ‘Hands down, the dopest dope I’ve ever smoked!’",
      genetic: 1,
      difficulty: 0,
      indica: 0.5,
      sativa: 0.5,
      ruderalis: 0,
      type: 2,
      environment: 0,
      sotiId: "PEA",
      sttId: 44,
      releaseDate: "2018-06-01T07:00:00.000Z",
      isFeatured: false,
      images: [
        "../static/images/Pineappleexpress/island.png",
        "../static/images/Pineappleexpress/strain.png",
        "../static/images/Pineappleexpress/package.png",
        "../static/images/Pineappleexpress/border.png"
      ],
      color: "#fee38a"
    },
    {
      company: ["beaver seeds", "sonoma seeds"],
      price: [[65, 120, 220, 420], [50, 100, 150]],
      effect: ["Relaxed", "sleepy"],
      yield: [100, 250],
      flowerTime: [7, 9],
      qtyLoose: [1000, 2000],
      qtyLooseROP: [500, 1000],
      alias: ["Puple kush", "Cali Kush"],
      qtyLooseNOE: [750, 1500],
      qtyPacked: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedROP: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedNOE: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtySold: [
        [[500, 1200, 2400], [355, 665, 220]],
        [[500, 1200, 2400], [355, 665, 220]]
      ],
      breeder: "BB",
      location: "D9",
      category: "seed",
      relations: [],
      pThc: [20, 24],
      pCbd: [0],
      pCbn: [],
      country: [2],
      name: "Platinum OG Feminized Cannabis Seeds",
      description:
        "This strain is often used as a medical cure-all: great for treating insomnia, anxiety, mood swings, migraines, muscle spasms and inflammation. However, the CBD levels are low, and so Platinum OG is not an effective treatment for seizures. This strain is felt most as a relaxing, body high.",
      genetic: 0,
      difficulty: 0,
      indica: 0.75,
      sativa: 0.25,
      ruderalis: 0,
      type: 1,
      environment: 0,
      sotiId: "POF",
      sttId: 9,
      releaseDate: "2018-06-01T07:00:00.000Z",
      isFeatured: false,
      images: [
        "../static/images/Platinumog/island.png",
        "../static/images/Platinumog/strain.png",
        "../static/images/Platinumog/package.png",
        "../static/images/Platinumog/border.png"
      ],
      color: "#b8b8bf"
    },
    {
      company: ["beaver seeds", "sonoma seeds"],
      price: [[65, 120, 220, 420], [50, 100, 150]],
      effect: ["Happy", "euphoric"],
      yield: [100, 250],
      flowerTime: [7, 9],
      qtyLoose: [1000, 2000],
      qtyLooseROP: [500, 1000],
      alias: ["Puple kush", "Cali Kush"],
      qtyLooseNOE: [750, 1500],
      qtyPacked: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedROP: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedNOE: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtySold: [
        [[500, 1200, 2400], [355, 665, 220]],
        [[500, 1200, 2400], [355, 665, 220]]
      ],
      breeder: "BB",
      location: "D9",
      category: "seed",
      relations: [],
      pThc: [15, 19],
      pCbd: [0],
      pCbn: [],
      country: [2],
      name: "Rock Candy Feminized Cannabis Seeds",
      description:
        "This extremely relaxing strain is great after a long day, producing a strong euphoria that slowly slips you into a deep sleep. Great for all growers, this easy-to-grow strain will make your grow room smell of citrus fruit. The buds have a fluffy soft look, with a thick layer of sugary white trichomes.",
      genetic: 0,
      difficulty: 0,
      indica: 0.8,
      sativa: 0.2,
      ruderalis: 0,
      type: 1,
      environment: 0,
      sotiId: "RCF",
      sttId: 10,
      releaseDate: "2018-06-01T07:00:00.000Z",
      isFeatured: false,
      images: [
        "../static/images/Rockcandy/island.png",
        "../static/images/Rockcandy/strain.png",
        "../static/images/Rockcandy/package.png",
        "../static/images/Rockcandy/border.png"
      ],
      color: "#8bd5d4"
    },
    {
      company: ["beaver seeds", "sonoma seeds"],
      price: [[65, 120, 220, 420], [50, 100, 150]],
      effect: ["Relaxed", "euphoric"],
      yield: [100, 250],
      flowerTime: [7, 9],
      qtyLoose: [1000, 2000],
      qtyLooseROP: [500, 1000],
      alias: ["Puple kush", "Cali Kush"],
      qtyLooseNOE: [750, 1500],
      qtyPacked: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedROP: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedNOE: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtySold: [
        [[500, 1200, 2400], [355, 665, 220]],
        [[500, 1200, 2400], [355, 665, 220]]
      ],
      breeder: "BB",
      location: "D9",
      category: "seed",
      relations: [],
      pThc: [13, 18],
      pCbd: [0],
      pCbn: [],
      country: [2],
      name: "Skywalker Autoflower Cannabis Seeds",
      description:
        "This mellow strain is great for those that want a relaxed, mellow high. It leaves you with mental clarity and is an effective pain reliever. Skywalker smells fruity and earthy, and tastes like berries. This plant is great for indoor growing as it is small and bushy, and flowers around 8 weeks.",
      genetic: 1,
      difficulty: 0,
      indica: 0.5,
      sativa: 0.5,
      ruderalis: 0,
      type: 2,
      environment: 0,
      sotiId: "SWA",
      sttId: 45,
      releaseDate: "2018-06-01T07:00:00.000Z",
      isFeatured: false,
      images: [
        "../static/images/Skywalker/island.png",
        "../static/images/Skywalker/strain.png",
        "../static/images/Skywalker/package.png",
        "../static/images/Skywalker/border.png"
      ],
      color: "#db3e23"
    },
    {
      company: ["beaver seeds", "sonoma seeds"],
      price: [[65, 120, 220, 420], [50, 100, 150]],
      effect: ["Relaxed", "happy"],
      yield: [100, 250],
      flowerTime: [8, 10],
      qtyLoose: [1000, 2000],
      qtyLooseROP: [500, 1000],
      alias: ["Puple kush", "Cali Kush"],
      qtyLooseNOE: [750, 1500],
      qtyPacked: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedROP: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedNOE: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtySold: [
        [[500, 1200, 2400], [355, 665, 220]],
        [[500, 1200, 2400], [355, 665, 220]]
      ],
      breeder: "BB",
      location: "D9",
      category: "seed",
      relations: [],
      pThc: [10, 18],
      pCbd: [0],
      pCbn: [],
      country: [2],
      name: "Sour Grape Feminized Cannabis Seeds",
      description:
        "This cross between Sour Diesel and Grand Daddy Purple is great for those looking to relax muscle tension and stress. With a relatively low THC, this is a good strain for winding down in a low-key setting with friends, or for doing some creative work, Smells fruity and sour, with hints of diesel.",
      genetic: 0,
      difficulty: 0,
      indica: 0.5,
      sativa: 0.5,
      ruderalis: 0,
      type: 2,
      environment: 0,
      sotiId: "SGF",
      sttId: 11,
      releaseDate: "2018-06-01T07:00:00.000Z",
      isFeatured: false,
      images: [
        "../static/images/Sourgrapes/island.png",
        "../static/images/Sourgrapes/strain.png",
        "../static/images/Sourgrapes/package.png",
        "../static/images/Sourgrapes/border.png"
      ],
      color: "#b4d174"
    },
    {
      company: ["beaver seeds", "sonoma seeds"],
      price: [[65, 120, 220, 420], [50, 100, 150]],
      effect: ["Happy", "uplifting"],
      yield: [100, 250],
      flowerTime: [7, 9],
      qtyLoose: [1000, 2000],
      qtyLooseROP: [500, 1000],
      alias: ["Puple kush", "Cali Kush"],
      qtyLooseNOE: [750, 1500],
      qtyPacked: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedROP: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedNOE: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtySold: [
        [[500, 1200, 2400], [355, 665, 220]],
        [[500, 1200, 2400], [355, 665, 220]]
      ],
      breeder: "BB",
      location: "D9",
      category: "seed",
      relations: [],
      pThc: [13, 15],
      pCbd: [0],
      pCbn: [],
      country: [2],
      name: "Strawberry Diesel Feminized Cannabis Seeds",
      description:
        "Strawberry Diesel is the love child between NYC Diesel & Strawberry Cough. With an almost even ratio of sativa and indica, this hybrid is great for an energized, upbeat high. Incredibly versatile, it is also fast-acting, so be cautious! This strain has a rich, fruity flavour. ",
      genetic: 0,
      difficulty: 1,
      indica: 0.6,
      sativa: 0.4,
      ruderalis: 0,
      type: 1,
      environment: 0,
      sotiId: "SDF",
      sttId: 12,
      releaseDate: "2018-06-01T07:00:00.000Z",
      isFeatured: false,
      images: [
        "../static/images/Strawberrydiesel/island.png",
        "../static/images/Strawberrydiesel/strain.png",
        "../static/images/Strawberrydiesel/package.png",
        "../static/images/Strawberrydiesel/border.png"
      ],
      color: "#e85d4d"
    },
    {
      company: ["beaver seeds", "sonoma seeds"],
      price: [[65, 120, 220, 420], [50, 100, 150]],
      effect: ["Happy", "euphoric"],
      yield: [100, 250],
      flowerTime: [7, 9],
      qtyLoose: [1000, 2000],
      qtyLooseROP: [500, 1000],
      alias: ["Puple kush", "Cali Kush"],
      qtyLooseNOE: [750, 1500],
      qtyPacked: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedROP: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedNOE: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtySold: [
        [[500, 1200, 2400], [355, 665, 220]],
        [[500, 1200, 2400], [355, 665, 220]]
      ],
      breeder: "BB",
      location: "D9",
      category: "seed",
      relations: [],
      pThc: [22, 25],
      pCbd: [0],
      pCbn: [],
      country: [2],
      name: "Tangerine Dream Autoflower Cannabis Seeds",
      description:
        "If smoked moderately, this strain is perfect for creating energy and stopping pain, making it a great daytime strain. Uplifting and euphoric, it doesn’t cloud the smoker’s mind but instead leaves them in a happy state. It’s named for its aroma and tastes of sweet citrus fruit.",
      genetic: 1,
      difficulty: 1,
      indica: 0.5,
      sativa: 0.5,
      ruderalis: 0,
      type: 2,
      environment: 0,
      sotiId: "TDA",
      sttId: 46,
      releaseDate: "2018-06-01T07:00:00.000Z",
      isFeatured: false,
      images: [
        "../static/images/Tangerinedream/island.png",
        "../static/images/Tangerinedream/strain.png",
        "../static/images/Tangerinedream/package.png",
        "../static/images/Tangerinedream/border.png"
      ],
      color: "#f6c964"
    },
    {
      company: ["beaver seeds", "sunwest genetics"],
      price: [[65, 120, 220, 420], [50, 100, 150]],
      effect: ["Happy", "relaxed"],
      yield: [100, 250],
      flowerTime: [7, 9],
      qtyLoose: [1000, 2000],
      qtyLooseROP: [500, 1000],
      alias: ["Puple kush", "Cali Kush"],
      qtyLooseNOE: [750, 1500],
      qtyPacked: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedROP: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtyPackedNOE: [
        [[50, 100, 200], [35, 65, 220]],
        [[50, 100, 200], [35, 65, 220]]
      ],
      qtySold: [
        [[500, 1200, 2400], [355, 665, 220]],
        [[500, 1200, 2400], [355, 665, 220]]
      ],
      breeder: "BB",
      location: "D9",
      category: "seed",
      relations: [],
      pThc: [18, 25],
      pCbd: [0],
      pCbn: [],
      country: [2],
      name: "Train Wreck Autoflower Cannabis Seeds",
      description:
        "Train Wreck is a heavy hitting strain that will completely wreck any chronic pain, migraines, or arthritis you throw at it. It’s also often used as an alternative medicine for ADD/ADHD and depression. Beginners should partake with caution as Train Wreck hits you hard and fast.",
      genetic: 1,
      difficulty: 0,
      indica: 0.2,
      sativa: 0.8,
      ruderalis: 0,
      type: 0,
      environment: 0,
      sotiId: "TWA",
      sttId: 47,
      releaseDate: "2018-06-01T07:00:00.000Z",
      isFeatured: false,
      images: [
        "../static/images/Trainwreck/island.png",
        "../static/images/Trainwreck/strain.png",
        "../static/images/Trainwreck/package.png",
        "../static/images/Trainwreck/border.png"
      ],
      color: "#be8030"
    }
  ],
  logs: [
    {
      _id: 47378,
      name: "Tony Tone",
      action: "added 3 hunnid products",
      machine: "computer?",
      date: 20181120
    },
    {
      _id: 47378,
      name: "Tony Tone",
      action: "added 3 hunnid products",
      machine: "computer?",
      date: 20181120
    },
    {
      _id: 47378,
      name: "Tony Tone",
      action: "added 3 hunnid products",
      machine: "computer?",
      date: 20181120
    },
    {
      _id: 47378,
      name: "Tony Tone",
      action: "added 3 hunnid products",
      machine: "computer?",
      date: 20181120
    },
    {
      _id: 47378,
      name: "Tony Tone",
      action: "added 3 hunnid products",
      machine: "computer?",
      date: 20181120
    },
    {
      _id: 47378,
      name: "Tony Tone",
      action: "added 3 hunnid products",
      machine: "computer?",
      date: 20181120
    },
    {
      _id: 47378,
      name: "Tony Tone",
      action: "added 3 hunnid products",
      machine: "computer?",
      date: 20181120
    }
  ],
  currentEdit: { _id: -1 },
  iHeadings: [
    "name",
    "company",
    "status",
    "qtyLoose",
    "qtyLooseROP",
    "qtyLooseNOE",
    "breeder",
    "location",
    "category"
  ],
  iSubHeadings: [
    "company",
    "alias",
    "sotiId",
    "sttId",
    "price",
    "qtyPacked",
    "qtyPackedROP",
    "qtyPackedNOE",
    "qtySold",
    "status"
  ],
  pHeadings: [
    "name",
    "id",
    "company",
    "description",
    "barcode",
    "category",
    "price"
  ],
  lHeadings: ["name", "action", "machine", "date"],
  orderBy: null,
  orderByReverse: false,
  applyFilters: false,
  activeFilters: {
    qtyP: {},
    qtyL: {},
    company: {},
    status: {},
    category: {}
  },
  showAllId: null
};

const indexReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_VISIBLE_SCREEN:
      let removed = false;
      for (let i = 0; i < state.visibleScreen.length; i++) {
        if (state.visibleScreen[i] == action.input) {
          state.visibleScreen.splice(i, 1);
          removed = true;
        }
      }
      if (!removed) {
        state.visibleScreen.push(action.input);
      }
      return updateObject(state, {
        visibleScreen: [...state.visibleScreen]
      });
    case actionTypes.TOGGLE_EDIT:
      return updateObject(state, {
        currentEdit: {
          ...state.currentEdit,
          _id: action._id
        }
      });
    case actionTypes.HANDLE_INVENTORY_EDIT:
      for (let key in state.currentEdit) {
        if (state.currentEdit.hasOwnProperty(key)) {
          if (key == action.key) {
            state.currentEdit[key] = action.value;
          }
        }
      }
      return state;
    case actionTypes.SUBMIT_INVENTORY_EDIT:
      for (let i = 0; i < state.inventory.length; i++) {
        if (state.inventory[i]._id == action.currentEdit._id) {
          for (let key in action.currentEdit) {
            if (action.currentEdit.hasOwnProperty(key)) {
              if (action.currentEdit[key] != null) {
                state.inventory[i][key] = action.currentEdit[key];
              }
            }
            state.currentEdit[key] = null;
          }
        }
      }
      return updateObject(state, {
        currentEdit: {
          ...state.inventory,
          ...state.currentEdit
        }
      });
    case actionTypes.SET_ORDER_BY:
      return updateObject(state, {
        orderBy: action.orderBy,
        orderByReverse:
          state.orderBy == action.orderBy
            ? !state.orderByReverse
            : state.orderByReverse
      });
    case actionTypes.SEARCH:
      return updateObject(state, {
        searchValue: action.value
      });
    case actionTypes.APPLY_FILTERS:
      return updateObject(state, {
        applyFilters: true
      });
    case actionTypes.CLEAR_FILTERS:
      return updateObject(state, {
        applyFilters: false,
        activeFilters: {
          qtyP: {},
          qtyL: {},
          company: {},
          status: {},
          category: {}
        }
      });
    case actionTypes.UPDATE_FILTERS:
      for (let key in state.activeFilters) {
        if (state.activeFilters.hasOwnProperty(key)) {
          if (key == action.name) {
            state.activeFilters[key] = {
              ...state.activeFilters[key],
              ...action.valueObj
            };
          }
        }
      }
      return state;
    case actionTypes.TOGGLE_SHOW_ALL:
      return updateObject(state, {
        showAllId: action.id
      });
    default:
      return state;
  }
};

// export default indexReducer;
export default combineReducers({
  misc: indexReducer,
  user: userReducer,
  nav: navReducer,
  newProduct: newProductReducer
});
