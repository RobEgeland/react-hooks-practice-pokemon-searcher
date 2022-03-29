import React from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({handleSubmit, name, changeName, hp, changeHp, frontImg, changeFrontImg, backImg, changeBackImg}) {
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={() => {
          console.log("submitting form...");
          handleSubmit()
        }}
      >
        <Form.Group widths="equal">
          <Form.Input onChange={changeName} value={name} fluid label="Name" placeholder="Name" name="name" />
          <Form.Input onChange={changeHp} value={hp} fluid label="hp" placeholder="hp" name="hp" />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={frontImg}
            onChange={changeFrontImg}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={backImg}
            onChange={changeBackImg}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
