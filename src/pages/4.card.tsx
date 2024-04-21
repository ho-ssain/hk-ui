import { SiReact, SiVite } from "react-icons/si";
import { BlockLinkCard, ContentCard } from "../components/library";
import { Container, Section } from "../components/site";

const CardPage = () => {
  return (
    <Container
      title="Card"
      description="A card is flexible and extensible content container"
    >
      <Section
        id="simple"
        title="Simple"
        description="Simple cards display content and can provide a distinct link that can be selected"
      >
        <ContentCard
          title="Card title"
          subtitle="Card subtitle"
          plaintext="Some quick example text to build on card title and make up the bulk of the card's content"
          link={{
            url: "#",
            text: "Card link",
          }}
        ></ContentCard>
      </Section>

      <Section
        id="s-w-h-f"
        title="Simple with a header and footer"
        description="Add an optional header and/or footer within a card"
      >
        <ContentCard
          header="Featured"
          title="Card title"
          subtitle="Card subtitle"
          plaintext="Some quick example text to build on card title and make up the bulk of the card's content"
          link={{
            url: "#",
            text: "Card link",
          }}
        ></ContentCard>
        <ContentCard
          footer="Last updated 5 mins ago"
          title="Card title"
          subtitle="Card subtitle"
          plaintext="Some quick example text to build on card title and make up the bulk of the card's content"
          link={{
            url: "#",
            text: "Card link",
          }}
        ></ContentCard>
      </Section>

      <Section
        id="b-l"
        title="Block link"
        description="A simple card enhanced into a selectable block link"
      >
        <BlockLinkCard url="https://vitejs.dev/" text="Vite">
          <SiVite className="h-10 w-10" />
        </BlockLinkCard>
        <BlockLinkCard url="https://react.dev/" text="React">
          <SiReact className="h-10 w-10" />
        </BlockLinkCard>
      </Section>
    </Container>
  );
};

export default CardPage;
