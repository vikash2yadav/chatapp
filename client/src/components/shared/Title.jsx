import { Helmet } from "react-helmet-async";

const Title = ({ title = "chat", description = "this is description" }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default Title;
