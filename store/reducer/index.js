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
  distro: 0,
  inventory: [
    {
      _id: "5cc771c76a891ca45026908b",
      name: "Afghani Regular Cannabis Seeds",
      category: 0,
      breeder: "PEAK",
      origin: [0],
      cbd: [0.99],
      thc: [19.18],
      cbn: [0.24],
      effect: null,
      yield: [500, 300],
      genetic: 2,
      flowerTime: [9],
      difficulty: 2,
      indica: 0.7,
      sativa: 0.3,
      ruderalis: 0,
      environment: 0,
      location: [
        {
          _id: "5cc771c66a891ca45026907e",
          aisle: "3",
          section: "10",
          color: "#f0f0f0",
          distributor: {
            country: "united states"
          }
        }
      ],
      variants: [
        {
          _id: "5cc771c76a891ca45026908a",
          company: {
            _id: "5cc1f75d0955774cbc422e8e",
            assetsUrl: "https://dcfgweqx7od72.cloudfront.net",
            website: ["cropkingseeds.com", "cropkingseeds.ca"],
            phone: ["+1 (844) 276-7546"],
            socials: [
              "https://www.instagram.com/cropkingseeds/?hl=en",
              "https://www.facebook.com/CropKingSeeds/",
              "https://twitter.com/CropKingSeed?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
              "https://www.pinterest.ca/officialCKS/"
            ],
            email: "info@cropkingseeds.com"
          },
          sotiId: "AFR",
          alias: "Afghani Regular Cannabis Seeds",
          description: [
            " Crowd favorite Afghani is a high - yield strain that is very potent and delivers a lasting high like noother.Extremely high on THC, this Indica - dominant original landrace strain gives way for a relaxing and happy high that works for both new and experienced users any time of day.This is the perfect smoke to cap the night because its body buzz, which is a signature Indica effect, will surely glue you to your bed while soothing and calming your tired muscles.",
            "Afghani has a truly full flavor accompanied with hints of exotic fruit.The resulting taste is hardcore smoke that is sure to keep you stoked big time.The Afghani effect is simply heavenly.It is the type you want to treat yourself to or reward yourself with frequently.",
            "The yield is equally remarkable, reaching 500 g when grown indoors and 300 g outdoors.Theseare hefty amounts, given that every tiny part of Afghani’s huge, gorgeous, sparkling buds is absolutely packed with stinky and pungent goodness and a kind of satisfying body high you rarely ever get to find.They are unbelievably vibrant and dense.You would be surprised how much a single bud could weigh.",
            "These are the reasons our Afghani seeds have been making the rounds a long while.A lot of people love them for their full- bodied aroma and taste and heavy smoke.Afghani is indeed a great addition to your garden and collection and should be in the repository of all growers, regardless of how long you have been cultivating weed for recreational or medical purposes.",
            "Order cannabis seeds yourself some of these babies, and be prepared to harvest impressively huge yields of beautiful, sticky, and stinky buds after a few months.Afghani is definitely worth allthe work you put into it."
          ],
          summary:
            "This classic original landrace strain gets its name from its origins. First discovered high in the mountainous regions of Afghanistan, this euphoric and relaxing Indica strain is perfect for cloning, cross breeding and large volume production.These are regular Afghani cannabis seeds. What 'regular' means is that all of these seeds are a mixture of both male and female. When they are grown, the males have to be separated so that they do not pollinate the females. If they are left together and pollinate, you'll have a bunch of seeds produced with no flowers made. So if your growing marijuana for producing flower to be used, its important to separate the plants once they start growing. An easy way to tell the difference between male and female plants is when the plants start to flower the males will produce pre flowers that are 'ball' shaped and the females will produce pre flowers that are 'pistil' shaped. Above average in THC, this well known classic is a must have for experienced or new growers.",
          releaseDate:
            "Fri Jun 01 2018 00:00:00 GMT-0700 (Pacific Daylight Time)",
          sttId: "95",
          attributes: [
            {
              _id: "5cc771c66a891ca450269083",
              price: 40,
              size: 5,
              stock: [
                {
                  _id: "5cc771c66a891ca450269081",
                  amount: 900,
                  rop: 150,
                  noe: 750,
                  sold: null
                },
                {
                  _id: "5cc771c66a891ca450269082",
                  amount: 0,
                  rop: 150,
                  noe: 750,
                  sold: null
                }
              ]
            },
            {
              _id: "5cc771c76a891ca450269086",
              price: 70,
              size: 10,
              stock: [
                {
                  _id: "5cc771c66a891ca450269084",
                  amount: 360,
                  rop: 75,
                  noe: 285,
                  sold: null
                },
                {
                  _id: "5cc771c76a891ca450269085",
                  amount: 0,
                  rop: 75,
                  noe: 285,
                  sold: null
                }
              ]
            },
            {
              _id: "5cc771c76a891ca450269089",
              price: 120,
              size: 25,
              stock: [
                {
                  _id: "5cc771c76a891ca450269087",
                  amount: 1,
                  rop: 40,
                  noe: 100,
                  sold: null
                },
                {
                  _id: "5cc771c76a891ca450269088",
                  amount: 0,
                  rop: 40,
                  noe: 100,
                  sold: null
                }
              ]
            }
          ]
        }
      ],
      stock: [
        {
          _id: "5cc771c66a891ca45026907f",
          amount: 3000,
          rop: 1000,
          noe: 1000,
          sold: null
        },
        {
          _id: "5cc771c66a891ca450269080",
          amount: 4500,
          rop: 1000,
          noe: 1000,
          sold: null
        }
      ]
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
    "qty (Loose)",
    "ROP (Loose)",
    "NOE (Loose)",
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
    "qty (packed)",
    "rop (packed)",
    "noe (packed)",
    "status"
  ],
  pHeadings: [
    "name",
    "id",
    "company",
    "description",
    // "barcode",
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
