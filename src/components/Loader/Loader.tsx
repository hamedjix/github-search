import "./style.css";

type Props = {};
const Loader = (props: Props) => {
  return (
    <div className="lds-ripple">
      <div></div>
      <div></div>
    </div>
  );
};

export default Loader;
