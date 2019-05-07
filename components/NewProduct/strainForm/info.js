import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { genKey } from "../../scripts";
import Variants from "./Variants";
import VariantButtons from "./Variants/variantButtons";
import { div1, div2, div3, div4, div5, div6 } from "./strainFormInputData";

const index = props => {
  let env = props.newProduct.info.environment;

  return (
    <React.Fragment>
      <p className="uppercase bg-teal w-full rounded p-2 my-2 text-center font-bold text-white text-xl">
        General Information
      </p>
      {/* DIV1 */}
      <div className="flex w-full ">
        {div1.map((value, index) => {
          if (value.type == "input") {
            return (
              <input
                key={value.placeholder + index}
                className={value.classes}
                placeholder={value.placeholder}
                value={props.newProduct.info[value.value]}
                name={value.placeholder}
                type={value.inputType}
                onChange={e => value.handleOnChange(e, props)}
              />
            );
          } else {
            return (
              <select
                key={value.placeholder + index}
                onChange={e => value.handleOnChange(e, props)}
                name={value.placeholder}
                className={value.classes}
              >
                {value.options.map(option => {
                  return (
                    <option key={option.content} value={option.value}>
                      {option.content}
                    </option>
                  );
                })}
              </select>
            );
          }
        })}
      </div>
      {/* DIV2 */}
      <div className="flex w-full ">
        {div2.map(section => {
          return (
            <div className={section.class}>
              <label className="w-1/3 p-2 my-2 pl-4">{section.label}</label>
              {section.inputs.map(input => {
                return (
                  <input
                    className={input.classes}
                    placeholder={input.placeholder}
                    value={
                      props.newProduct.info[input.value[0]][input.value[1]] ||
                      ""
                    }
                    type={input.inputType}
                    step={input.step}
                    name={input.placeholder}
                    min={input.min}
                    onChange={e => input.handleOnChange(e, props)}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
      {/* DIV3 */}
      <div className="w-full flex">
        {div3.map(input => {
          return (
            <input
              className={input.classes}
              placeholder={input.placeholder}
              // value={props.newProduct.info.sativa * 100 || ""}
              type={input.inputType}
              step={input.step}
              name={input.placeholder}
              min={input.min}
              onChange={e => input.handleOnChange(e, props)}
            />
          );
        })}
      </div>
      {/* DIV4 */}
      <div className="w-full flex">
        {div4.map(input => {
          return (
            <select
              onChange={e => input.handleOnChange(e, props)}
              name={input.name}
              value={props.newProduct.info[input.value]}
              className={input.classes}
            >
              {input.options.map(option => {
                return (
                  <option key={option.content} value={option.value}>
                    {option.content}
                  </option>
                );
              })}
            </select>
          );
        })}
      </div>
      {/* DIV5 */}
      <div className="w-full flex">
        {div5.map(section => {
          return (
            <div className={section.class}>
              {section.label ? (
                <label className={section.labelClass}>{section.label}</label>
              ) : null}
              {section.inputs.map((input, index) => {
                if (section.label == null) {
                  if (index == 0 && (env != 1 && env != 0)) {
                    return null;
                  }
                  if (index == 1 && (env != 2 && env != 0)) {
                    return null;
                  }
                }
                return (
                  <input
                    className={input.classes}
                    placeholder={input.placeholder}
                    type={input.inputType}
                    name={input.placeholder}
                    min={input.min}
                    value={
                      props.newProduct.info[input.value[0]][input.value[1]] ||
                      ""
                    }
                    onChange={e => input.handleOnChange(e, props)}
                  />
                );
              })}
            </div>
          );
        })}
      </div>

      {/* DIV6 */}
      <div className="w-full flex">
        {div6.map((input, index) => {
          return (
            <input
              className={input.classes}
              placeholder={input.placeholder}
              type={input.inputType}
              name={input.name}
              step={input.step ? input.step : null}
              min={input.min ? input.min : null}
              value={props.newProduct.info[input.value[0]][0][input.value[1]]}
              onChange={e => input.handleOnChange(e, props)}
            />
          );
        })}
      </div>

      {/* DIV7 */}
      <div className="w-full flex">
        <input
          className="w-full p-2 uppercase pl-4 mx-1 my-2 text-grey"
          placeholder="effects (use commas to separate)"
          type="text"
          name="effect"
          // value={
          // props.newProduct.info.effect
          //   ? props.newProduct.info.effect.join(",")
          //   : ""
          // }
          onChange={e => {
            let newEffect = e.target.value.split(",");
            props.updateNewProduct({
              type: "info",
              info: {
                ...props.newProduct.info,
                effect: null
                // effect: [...newEffect]
              }
            });
          }}
        />
      </div>
      <p className="uppercase bg-teal w-full rounded p-2 my-2 text-center font-bold text-white text-xl">
        Company Variants
      </p>
      <div className="flex flex-wrap justify-around w-full mb-4">
        <p className="w-full my-4 text-xl font-bold uppercase text-center mb-6">
          Please select all that apply:
        </p>
        <VariantButtons {...props} />
      </div>
      <Variants {...props} />
    </React.Fragment>
  );
};

export default index;
