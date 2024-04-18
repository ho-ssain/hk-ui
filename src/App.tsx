import {
  BlockLinkCard,
  Button,
  ContentCard,
  Input,
} from "./components/library";
import { Container, Layout, Section } from "./components/site";
import { SiVite, SiReact } from "react-icons/si";

function App() {
  return (
    <Layout>
      {/***************************************************/}
      {/*----------Button-Component-----------------------*/}
      <Container
        title="Button"
        description="A button is a widget that enables users to trigger an action or event, such as submitting a form, opening a dialog, cancelling an action, or performing a delete operation."
      >
        <Section
          title="Primary"
          description="Primary actions should be obvious. Solid, high contrast background colors work great here"
        >
          <Button>Default</Button>

          <Button disabled>Disabled</Button>

          <Button
            colors={{
              bg: "bg-amber-500",
              hoverBg: "hover:bg-amber-600",
              focusRing: "focus:ring-amber-500",
            }}
          >
            Amber
          </Button>

          <Button
            colors={{
              bg: "bg-rose-500",
              hoverBg: "hover:bg-rose-600",
              focusRing: "focus:ring-rose-500",
            }}
          >
            Rose
          </Button>

          <Button
            colors={{
              bg: "bg-fuchsia-500",
              hoverBg: "hover:bg-fuchsia-600",
              focusRing: "focus:ring-fuchsia-500",
            }}
          >
            Fuchsia
          </Button>

          <Button
            colors={{
              bg: "bg-indigo-500",
              hoverBg: "hover:bg-indigo-600",
              focusRing: "focus:ring-indigo-500",
            }}
          >
            Indigo
          </Button>
          <Button
            colors={{
              bg: "bg-[#1da1f2]",
              hoverBg: "hover:bg-[#1a8cd8]",
              focusRing: "focus:ring-[#1da1f2]",
            }}
          >
            Blue
          </Button>
        </Section>

        <Section
          title="Secondary"
          description="Secondary actions should be clear but not prominent. Outline styles or lower contrast background colors are great options"
        >
          <Button variant="secondary">Default</Button>

          <Button disabled variant="secondary">
            Disabled
          </Button>

          <Button
            variant="secondary"
            colors={{
              text: "text-amber-500",
              hoverBorder: "hover:border-amber-500",
              hoverBg: "hover:bg-amber-500",
              focusRing: "focus:ring-amber-500",
              darkHoverBorder: "dark:hover:border-amber-500",
            }}
          >
            Amber
          </Button>
          <Button
            variant="secondary"
            colors={{
              text: "text-rose-500",
              hoverBorder: "hover:border-rose-500",
              hoverBg: "hover:bg-rose-500",
              focusRing: "focus:ring-rose-500",
              darkHoverBorder: "dark:hover:border-rose-500",
            }}
          >
            Rose
          </Button>
          <Button
            variant="secondary"
            colors={{
              text: "text-fuchsia-500",
              hoverBorder: "hover:border-fuchsia-500",
              hoverBg: "hover:bg-fuchsia-500",
              focusRing: "focus:ring-fuchsia-500",
              darkHoverBorder: "dark:hover:border-fuchsia-500",
            }}
          >
            Fuchsia
          </Button>
          <Button
            variant="secondary"
            colors={{
              text: "text-indigo-500",
              hoverBorder: "hover:border-indigo-500",
              hoverBg: "hover:bg-indigo-500",
              focusRing: "focus:ring-indigo-500",
              darkHoverBorder: "dark:hover:border-indigo-500",
            }}
          >
            Indigo
          </Button>
          <Button
            variant="secondary"
            colors={{
              text: "text-[#1da1f2]",
              hoverBorder: "hover:border-[#1da1f2]",
              hoverBg: "hover:bg-[#1da1f2]",
              focusRing: "focus:ring-[#1da1f2]",
              darkHoverBorder: "dark:hover:border-[#1da1f2]",
            }}
          >
            Blue
          </Button>
        </Section>

        <Section
          title="Tertiary"
          description="Tertiary actions should be discoverable but unobtrusive. Styling these actions like links is usually the best approach"
        >
          <Button variant="tertiary">Default</Button>

          <Button disabled variant="tertiary">
            Disabled
          </Button>

          <Button
            variant="tertiary"
            colors={{
              text: "text-amber-500",
              hoverText: "hover:text-amber-500",
              focusRing: "focus:ring-amber-500",
              darkHoverText: "dark:hover:text-amber-400",
            }}
          >
            Amber
          </Button>

          <Button
            variant="tertiary"
            colors={{
              text: "text-rose-500",
              hoverText: "hover:text-rose-500",
              focusRing: "focus:ring-rose-500",
              darkHoverText: "dark:hover:text-rose-400",
            }}
          >
            Rose
          </Button>

          <Button
            variant="tertiary"
            colors={{
              text: "text-fuchsia-500",
              hoverText: "hover:text-fuchsia-500",
              focusRing: "focus:ring-fuchsia-500",
              darkHoverText: "dark:hover:text-fuchsia-400",
            }}
          >
            Fuchsia
          </Button>

          <Button
            variant="tertiary"
            colors={{
              text: "text-indigo-500",
              hoverText: "hover:text-indigo-500",
              focusRing: "focus:ring-indigo-500",
              darkHoverText: "dark:hover:text-indigo-400",
            }}
          >
            Indigo
          </Button>

          <Button
            variant="tertiary"
            colors={{
              text: "text-[#1da1f2]",
              hoverText: "hover:text-[#1da1f2]",
              focusRing: "focus:ring-[#1da1f2]",
              darkHoverText: "dark:hover:text-[#56bcfc]",
            }}
          >
            Blue
          </Button>
        </Section>

        <Section
          title="Destructive"
          description="Destructive actions typically result in the removal of an item, and may result in an undesirable consequence"
        >
          <Button
            colors={{
              bg: "bg-red-500",
              hoverBg: "hover:bg-red-600",
              focusRing: "focus:ring-red-500",
            }}
          >
            Yes, I'm sure I want to delete this.
          </Button>

          <Button
            variant="secondary"
            colors={{
              text: "text-red-500",
              hoverBorder: "hover:border-red-500",
              hoverBg: "hover:bg-red-500",
              focusRing: "focus:ring-red-500",
            }}
          >
            Unsubscribe
          </Button>

          <Button
            variant="tertiary"
            colors={{
              text: "text-red-500",
              hoverText: "hover:text-red-500",
              focusRing: "focus:ring-red-500",
            }}
          >
            Cancel
          </Button>
        </Section>
      </Container>

      <hr className="bg-slate-600" />

      {/***************************************************/}
      {/*----------Card-Component--------------------------*/}
      <Container
        title="Card"
        description="A card is flexible and extensible content container"
      >
        <Section
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

      <hr className="bg-slate-600" />

      {/***************************************************/}
      {/*----------Input-Component------------------------*/}
      <Container
        title="Inputs"
        description="An input is a widget that allows users to provide data or specially options, which can be submitted as part of a form or used to interact with and manipulate content on a web page"
      >
        <Section title="Basic" description="Basic input with a placeholder">
          <Input type="text" placeholder="Type things here!" />
          <Input type="text" placeholder="disabled😔" disabled />
        </Section>

        <Section title="Label" description="Input with a label">
          <Input type="text" label="Email" placeholder="you@site.com" />
        </Section>

        <Section title="Description" description="Input with a description">
          <Input
            type="password"
            label="Password"
            description="The password is encrypted!"
            placeholder="super secret!🤐"
          />
        </Section>
      </Container>

      <hr className="bg-slate-600" />
    </Layout>
  );
}

export default App;
