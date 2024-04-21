import { Input } from "../components/library";
import { Container, Section } from "../components/site";

const InputPage = () => {
  return (
    <Container
      title="Inputs"
      description="An input is a widget that allows users to provide data or specially options, which can be submitted as part of a form or used to interact with and manipulate content on a web page"
    >
      <Section
        id="basic"
        title="Basic"
        description="Basic input with a placeholder"
      >
        <Input type="text" placeholder="Type things here!" />
        <Input type="text" placeholder="disabled😔" disabled />
      </Section>

      <Section id="label" title="Label" description="Input with a label">
        <Input type="text" label="Email" placeholder="you@site.com" />
      </Section>

      <Section
        id="description"
        title="Description"
        description="Input with a description"
      >
        <Input
          type="password"
          label="Password"
          description="The password is encrypted!"
          placeholder="super secret!🤐"
        />
      </Section>
    </Container>
  );
};

export default InputPage;
