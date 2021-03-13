import React, { useState } from "react"
import { Form, Button, TextArea, Input, Select } from "semantic-ui-react"
import SemanticDatepicker from "react-semantic-ui-datepickers"
import "react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css"
import styled from "styled-components"

// Fix for slightly thinner scrolling menu
const StyledDropDown = styled(({ label, ...props }) => (
  <Form.Field control={Select} scrolling label={label} {...props} />
))`
  && .visible .menu {
    min-width: calc(100% + 2px) !important;
  }
`

const timeOptions = [
  { key: 1, text: "1 Hora", value: "1 hora" },
  { key: 2, text: "2 Horas", value: "2 hora" },
  { key: 3, text: "3 Horas", value: "3 hora" },
  { key: 4, text: "4 Horas", value: "4 hora" },
  { key: "other", text: "Otro (especificar en la descripción)", value: "Otro" },
]

const eventTypes = [
  { key: "Matrimonio", text: "Matrimonio", value: "Matrimonio" },
  { key: "FDG", text: "Fiesta de graduación", value: "Fiesta de graduacion" },
  { key: "Corporativo", text: "Corporativo", value: "Corporativo" },
  { key: "Cumpleaños", text: "Cumpleaños", value: "Cumpleaños" },
  { key: "other", text: "Otro (especificar en la descripción)", value: "Otro" },
]

const planOptions = [
  {
    key: "basic",
    text: "Plan básico",
    value: "Plan básico",
  },
  {
    key: "premium",
    text: "Plan premium",
    value: "Plan premium",
  },
  {
    key: "corporate",
    text: "Plan corporativo",
    value: "Plan corporativo",
  },
  { key: "dontknow", text: "Quiero cotizar todos 😄", value: "Todos" },
]

const ContactForm = () => {
  const [, setDate] = useState(new Date())

  return (
    <Form>
      <Form.Field
        required
        label="Nombre y apellido"
        control={Input}
        placeholder="Catalina Echeverría"
      />
      <Form.Field
        required
        id="form-input-control-error-email"
        control={Input}
        label="Correo electrónico"
        placeholder="cataecheverria@gmail.com"
        // error={{
        //   content: "Ingresa un correo válido",
        //   pointing: "below",
        // }}
      />
      <Form.Field required>
        <label htmlFor="calendar">Fecha del evento</label>
        <SemanticDatepicker
          onChange={setDate}
          locale="es-ES"
          id="calendar"
          format="DD/MM/YYYY"
          firstDayOfWeek={1}
          minDate={new Date()}
          datePickerOnly={true}
        />
      </Form.Field>
      <Form.Field
        required
        id="form-input-start-time"
        control={Input}
        label="Hora de inicio del servicio"
        placeholder="21:30 hrs."
      />
      <StyledDropDown
        required
        label="Duración del servicio"
        options={timeOptions}
        placeholder="Selecciona la duración"
      />
      <StyledDropDown
        required
        label="Tipo de evento"
        options={eventTypes}
        placeholder="Selecciona el tipo"
      />
      <StyledDropDown
        required
        label="Plan a cotizar"
        options={planOptions}
        placeholder="El plan que te gustaría cotizar"
      />
      <Form.Field
        id="form-textarea-control-opinion"
        control={TextArea}
        label="Describe tu evento"
        placeholder="Cuéntanos los detalles de tu evento para armar un plan ideal para ti"
      />

      <Form.Checkbox label="Me gustaría recibir ofertas, planes y nuevos servicios al correo" />
      <Button type="submit">Cotizar</Button>
    </Form>
  )
}

export default ContactForm
