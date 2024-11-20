import { ClipLoader } from "react-spinners";
const override = {
  display: "block",
  margin: "100px auto",
};
const Spinner = ({ loading }) => {
  return (
    <ClipLoader
      loading={loading}
      cssOverride={override}
      size={150}
      color="#433caa"
    />
  );
};

export default Spinner;
