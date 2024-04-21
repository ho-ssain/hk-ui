import { Container } from "../components/site";
import { BlockLinkCard } from "../components/library";
import { RxButton, RxIdCard, RxInput } from "react-icons/rx";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container
      title="Customizable Components"
      description="A collection of customizable components for your next React project. made with React and tailwind CSS"
    >
      <div className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-6">
        <BlockLinkCard
          CustomLinkComponent={Link}
          customLinkProps={{
            to: "/button",
          }}
          text="Button"
          widthLimit="none"
        >
          <RxButton className="h-10 w-10" />
        </BlockLinkCard>

        <BlockLinkCard
          CustomLinkComponent={Link}
          customLinkProps={{
            to: "/card",
          }}
          text="Card"
          widthLimit="none"
        >
          <RxIdCard className="h-10 w-10" />
        </BlockLinkCard>

        <BlockLinkCard
          CustomLinkComponent={Link}
          customLinkProps={{
            to: "/input",
          }}
          text="Input"
          widthLimit="none"
        >
          <RxInput className="h-10 w-10" />
        </BlockLinkCard>
      </div>
    </Container>
  );
};

export default Home;
