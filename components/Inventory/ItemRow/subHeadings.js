const index = props => {
  let iSubHeadings = props.misc.iSubHeadings;
  let subHeadings = iSubHeadings.map((heading, index) => {
    if (heading == "alias") {
      return (
        <div key={heading} className="text-grey w-64 p-2 text-xs uppercase">
          {heading}
        </div>
      );
    }
    if (heading == "company") {
      return null;
    }
    return (
      <div
        key={heading}
        className="text-grey text-center w-32 p-2 text-xs uppercase"
      >
        {heading}
      </div>
    );
  });
  return <React.Fragment>{subHeadings}</React.Fragment>;
};

export default index;
