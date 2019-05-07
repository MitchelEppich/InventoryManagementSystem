export const div1 = [
  {
    classes: "w-3/5 p-2 mx-1 uppercase pl-4 my-2 text-grey",
    value: "name",
    placeholder: "Strain Name",
    type: "input",
    inputType: "text",
    handleOnChange: (e, props) => {
      props.updateNewProduct({
        type: "info",
        info: {
          ...props.newProduct.info,
          name: e.target.value
        }
      });
    }
  },
  {
    classes: "w-1/5 p-2 mx-1 uppercase pl-4 my-2 mr-1 text-grey",
    value: "breeder",
    placeholder: "Breeder",
    type: "input",
    inputType: "text",
    handleOnChange: (e, props) => {
      props.updateNewProduct({
        type: "info",
        info: {
          ...props.newProduct.info,
          breeder: e.target.value
        }
      });
    }
  },
  {
    classes:
      "w-1/5 uppercase text-grey-light p-2 h-10 mx-1 my-2 pl-4  border-2 border-input-grey",
    value: null,
    placeholder: "Origin",
    type: "select",
    inputType: null,
    handleOnChange: (e, props) => {
      props.updateNewProduct({
        type: "info",
        info: {
          ...props.newProduct.info,
          origin: [parseInt(e.target.value)]
        }
      });
    },
    options: [
      { value: null, content: "Origin..." },
      { value: 0, content: "Canada" },
      { value: 1, content: "USA" },
      { value: 2, content: "Spain" },
      { value: 3, content: "Netherlands" },
      { value: 4, content: "United Kingdom" },
      { value: 5, content: "South Africa" },
      { value: 6, content: "Central America" },
      { value: 7, content: "Varies" }
    ]
  }
];
export const div2 = [
  {
    label: "THC %",
    class: "bg-green w-1/3 rounded-lg mx-1",
    inputs: [
      {
        classes: "w-1/3 p-2 mx-1 uppercase pl-4 my-2 text-grey",
        value: ["thc", 0],
        placeholder: "LOW",
        type: "input",
        inputType: "number",
        handleOnChange: (e, props) => {
          let newInfo = props.newProduct.info;
          newInfo.thc.splice(0, 1, parseFloat(e.target.value));
          if (
            e.target.value == null ||
            e.target.value == NaN ||
            e.target.value == ""
          ) {
            newInfo.thc.splice(0, 1);
          }
          props.updateNewProduct({
            type: "info",
            info: {
              ...newInfo
            }
          });
        },
        min: 0,
        step: 0.1
      },
      {
        classes: "w-1/3 p-2 mx-1 uppercase pl-4 my-2 text-grey",
        value: ["thc", 1],
        placeholder: "HIGH",
        type: "input",
        inputType: "number",
        handleOnChange: (e, props) => {
          let newInfo = props.newProduct.info;
          newInfo.thc.splice(1, 1, parseFloat(e.target.value));
          if (
            e.target.value == null ||
            e.target.value == NaN ||
            e.target.value == ""
          ) {
            newInfo.thc.splice(1, 1);
          }
          props.updateNewProduct({
            type: "info",
            info: {
              ...newInfo
            }
          });
        },
        min: 0,
        step: 0.1
      }
    ]
  },
  {
    label: "CBD %",
    class: "w-1/3 bg-orange mx-1 rounded-lg",
    inputs: [
      {
        classes: "w-1/3 p-2 mx-1 uppercase pl-4 my-2 text-grey",
        value: ["cbd", 0],
        placeholder: "LOW",
        type: "input",
        inputType: "number",
        handleOnChange: (e, props) => {
          let newInfo = props.newProduct.info;
          newInfo.cbd.splice(0, 1, parseFloat(e.target.value));
          if (
            e.target.value == null ||
            e.target.value == NaN ||
            e.target.value == ""
          ) {
            newInfo.cbd.splice(0, 1);
          }
          props.updateNewProduct({
            type: "info",
            info: {
              ...newInfo
            }
          });
        },
        min: 0,
        step: 0.1
      },
      {
        classes: "w-1/3 p-2 mx-1 uppercase pl-4 my-2 text-grey",
        value: ["cbd", 1],
        placeholder: "HIGH",
        type: "input",
        inputType: "number",
        handleOnChange: (e, props) => {
          let newInfo = props.newProduct.info;
          newInfo.cbd.splice(1, 1, parseFloat(e.target.value));
          if (
            e.target.value == null ||
            e.target.value == NaN ||
            e.target.value == ""
          ) {
            newInfo.cbd.splice(1, 1);
          }
          props.updateNewProduct({
            type: "info",
            info: {
              ...newInfo
            }
          });
        },
        min: 0,
        step: 0.1
      }
    ]
  },
  {
    label: "CBN %",
    class: "bg-purple w-1/3 mx-1 rounded-lg",
    inputs: [
      {
        classes: "w-1/3 p-2 mx-1 uppercase pl-4 my-2 text-grey",
        value: ["cbn", 0],
        placeholder: "LOW",
        type: "input",
        inputType: "number",
        handleOnChange: (e, props) => {
          let newInfo = props.newProduct.info;
          newInfo.cbn.splice(0, 1, parseFloat(e.target.value));
          if (
            e.target.value == null ||
            e.target.value == NaN ||
            e.target.value == ""
          ) {
            newInfo.cbn.splice(0, 1);
          }
          props.updateNewProduct({
            type: "info",
            info: {
              ...newInfo
            }
          });
        },
        min: 0,
        step: 0.1
      },
      {
        classes: "w-1/3 p-2 mx-1 uppercase pl-4 my-2 text-grey",
        value: ["cbn", 1],
        placeholder: "HIGH",
        type: "input",
        inputType: "number",
        handleOnChange: (e, props) => {
          let newInfo = props.newProduct.info;
          newInfo.cbn.splice(1, 1, parseFloat(e.target.value));
          if (
            e.target.value == null ||
            e.target.value == NaN ||
            e.target.value == ""
          ) {
            newInfo.cbn.splice(1, 1);
          }
          props.updateNewProduct({
            type: "info",
            info: {
              ...newInfo
            }
          });
        },
        min: 0,
        step: 0.1
      }
    ]
  }
];

export const div3 = [
  {
    classes: "w-1/3 p-2 mx-1 uppercase pl-4 my-2 text-grey",
    value: [],
    placeholder: "Sativa %",
    type: "input",
    inputType: "number",
    handleOnChange: (e, props) => {
      props.updateNewProduct({
        type: "info",
        info: {
          ...props.newProduct.info,
          sativa: parseFloat(e.target.value) / 100
        }
      });
    },
    min: 0,
    step: 0.1
  },
  {
    classes: "w-1/3 p-2 mx-1 uppercase pl-4 my-2 text-grey",
    value: [],
    placeholder: "Indica %",
    type: "input",
    inputType: "number",
    handleOnChange: (e, props) => {
      props.updateNewProduct({
        type: "info",
        info: {
          ...props.newProduct.info,
          indica: parseFloat(e.target.value) / 100
        }
      });
    },
    min: 0,
    step: 0.1
  },
  {
    classes: "w-1/3 p-2 mx-1 uppercase pl-4 my-2 text-grey",
    value: [],
    placeholder: "Ruderalis %",
    type: "input",
    inputType: "number",
    handleOnChange: (e, props) => {
      props.updateNewProduct({
        type: "info",
        info: {
          ...props.newProduct.info,
          ruderalis: parseFloat(e.target.value) / 100
        }
      });
    },
    min: 0,
    step: 0.1
  }
];
export const div4 = [
  {
    classes:
      "w-1/3 uppercase p-1 mx-1 my-2 pl-2 text-grey-light border-2 border-input-grey",
    value: "genetic",
    name: "genetic",
    handleOnChange: (e, props) => {
      props.updateNewProduct({
        type: "info",
        info: {
          ...props.newProduct.info,
          genetic: parseFloat(e.target.value)
        }
      });
    },
    options: [
      { value: null, content: "Genetics..." },
      { value: 0, content: "Feminized" },
      { value: 1, content: "Autoflower" },
      { value: 2, content: "Regular" },
      { value: 3, content: "CBD" },
      { value: 4, content: "Dwarf" },
      { value: 5, content: "Mix" }
    ]
  },
  {
    classes:
      "w-1/3 uppercase p-1 mx-1 my-2 text-grey-light border-2 border-input-grey",
    value: "difficulty",
    name: "difficulty",
    handleOnChange: (e, props) => {
      props.updateNewProduct({
        type: "info",
        info: {
          ...props.newProduct.info,
          difficulty: parseInt(e.target.value)
        }
      });
    },
    options: [
      { value: null, content: "Difficulty..." },
      { value: 0, content: "Easy" },
      { value: 1, content: "Moderate" },
      { value: 2, content: "Experienced" },
      { value: 3, content: "Master" }
    ]
  },
  {
    classes:
      "w-1/3 uppercase p-1 mx-1 my-2 pl-2 text-grey-light border-2 border-input-grey",
    value: "environment",
    name: "environment",
    handleOnChange: (e, props) => {
      props.updateNewProduct({
        type: "info",
        info: {
          ...props.newProduct.info,
          environment: parseInt(e.target.value)
        }
      });
    },
    options: [
      { value: null, content: "Environment..." },
      { value: 0, content: "Indoor / Outdoor" },
      { value: 1, content: "Indoor" },
      { value: 2, content: "Outdoor" }
    ]
  }
];
export const div5 = [
  {
    label: "Flower Time:",
    labelClass: "w-1/3 p-2 uppercase pl-4 mx-1 my-2 text-grey",
    class: "w-1/2",
    inputs: [
      {
        classes: "w-1/3 p-2 uppercase pl-4 mx-1 my-2 text-grey",
        value: ["flowerTime", 0],
        placeholder: "7",
        type: "input",
        inputType: "number",
        handleOnChange: (e, props) => {
          let newInfo = props.newProduct.info;
          newInfo.flowerTime.splice(0, 1, parseInt(e.target.value));
          if (
            e.target.value == null ||
            e.target.value == NaN ||
            e.target.value == ""
          ) {
            newInfo.flowerTime.splice(0, 1);
          }
          props.updateNewProduct({
            type: "info",
            info: {
              ...newInfo
            }
          });
        },
        min: 0,
        step: 1
      },
      {
        classes: "w-1/3 p-2 uppercase pl-4 mx-1 my-2 text-grey",
        value: ["flowerTime", 1],
        placeholder: "10",
        type: "input",
        inputType: "number",
        handleOnChange: (e, props) => {
          let newInfo = props.newProduct.info;
          newInfo.flowerTime.splice(1, 1, parseInt(e.target.value));
          if (
            e.target.value == null ||
            e.target.value == NaN ||
            e.target.value == ""
          ) {
            newInfo.flowerTime.splice(1, 1);
          }
          props.updateNewProduct({
            type: "info",
            info: {
              ...newInfo
            }
          });
        },
        min: 0,
        step: 1
      }
    ]
  },
  {
    label: null,
    class: "w-1/2 flex",
    inputs: [
      {
        classes:
          "w-full uppercase p-2 mx-1 my-2 text-grey border-2 border-input-grey",
        value: ["yield", 0],
        placeholder: "Yield (Indoor)",
        type: "input",
        inputType: "number",
        handleOnChange: (e, props) => {
          props.updateNewProduct({
            type: "info",
            info: {
              ...props.newProduct.info,
              yield: [parseInt(e.target.value), props.newProduct.info.yield[1]]
            }
          });
        },
        min: 0,
        step: 1
      },
      {
        classes:
          "w-full uppercase p-2 mx-1 my-2 text-grey border-2 border-input-grey",
        value: ["yield", 1],
        placeholder: "Yield (Outdoor)",
        type: "input",
        inputType: "number",
        handleOnChange: (e, props) => {
          props.updateNewProduct({
            type: "info",
            info: {
              ...props.newProduct.info,
              yield: [props.newProduct.info.yield[0], parseInt(e.target.value)]
            }
          });
        },
        min: 0,
        step: 1
      }
    ]
  }
];
export const div6 = [
  {
    classes: "w-1/3 p-2 uppercase pl-4 mx-1 my-2 text-grey",
    value: ["location", "section"],
    name: "location",
    inputType: "text",
    placeholder: "Location",
    handleOnChange: (e, props) => {
      let newLocation = props.newProduct.info.location;
      newLocation[0].section = e.target.value;
      props.updateNewProduct({
        type: "info",
        info: {
          ...props.newProduct.info,
          location: newLocation
        }
      });
    }
  },
  {
    classes: "w-1/3 p-2 uppercase pl-4 mx-1 my-2 text-grey",
    value: ["stock", "amount"],
    name: "stockAmount",
    inputType: "number",
    min: 0,
    step: 1,
    placeholder: "Amount",
    handleOnChange: (e, props) => {
      let stock = props.newProduct.info.stock;
      let newStock = stock[props.newProduct.distro];
      newStock.amount = parseInt(e.target.value);
      stock.splice(props.newProduct.distro, 1, newStock);
      props.updateNewProduct({
        type: "info",
        info: {
          ...props.newProduct.info,
          stock: stock
        }
      });
    }
  },
  {
    classes: "w-1/3 p-2 uppercase pl-4 mx-1 my-2 text-grey",
    value: ["stock", "rop"],
    name: "stockROP",
    inputType: "number",
    min: 0,
    step: 1,
    placeholder: "ROP",
    handleOnChange: (e, props) => {
      let stock = props.newProduct.info.stock;
      let newStock = stock[props.newProduct.distro];
      newStock.rop = parseInt(e.target.value);
      newStock.noe = parseInt(e.target.value);
      stock.splice(props.newProduct.distro, 1, newStock);
      props.updateNewProduct({
        type: "info",
        info: {
          ...props.newProduct.info,
          stock: stock
        }
      });
    }
  }
];
