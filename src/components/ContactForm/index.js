import React, { useState } from "react"
import { Form, Button, TextArea, Input, Select } from "semantic-ui-react"
import SemanticDatepicker from "react-semantic-ui-datepickers"
import "react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css"
import styled from "styled-components"
import { useForm } from "react-hook-form";

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
  { key: 2, text: "2 Horas", value: "2 horas" },
  { key: 3, text: "3 Horas", value: "3 horas" },
  { key: 4, text: "4 Horas", value: "4 horas" },
  { key: "other", text: "Otro (especificar en la descripción)", value: "Otro" },
]

const eventTypes = [
  { key: "Matrimonio", text: "Matrimonio", value: "Matrimonio" },
  { key: "FDG", text: "Fiesta de graduación", value: "Fiesta de graduación" },
  { key: "Corporativo", text: "Corporativo", value: "Corporativo" },
  { key: "Cumpleaños", text: "Cumpleaños", value: "Cumpleaños" },
  { key: "other", text: "Otro (especificar en la descripción)", value: "Otro" },
]

const planOptions = [
  {
    key: "basic",
    text: "Plan básico",
    value: "Básico",
  },
  {
    key: "premium",
    text: "Plan premium",
    value: "Premium",
  },
  {
    key: "corporate",
    text: "Plan corporativo",
    value: "Corporativo",
  },
  { key: "dontknow", text: "Quiero cotizar todos 😄", value: "Todos" },
]

const formUrl = "https://script.google.com/macros/s/AKfycbzN-CnsLIU2Qdwr17VQKroQsoQnPcp1M7SvvzpyhpEzuse015BmoxmxS1_56oInPYZzEw/exec"

const serialize = (obj, prefix) => {
  let str = [];
  for (let p in obj) {
    if (obj.hasOwnProperty(p)) {
      let k = prefix ? prefix + "[" + p + "]" : p;
      let v = obj[p];
      str.push((v !== null && typeof v === "object") ?
        serialize(v, k) :
        encodeURIComponent(k) + "=" + encodeURIComponent(v));
    }
  }
  return str.join("&");
}


const submitForm = (data) => {
  var requestOptions = {
    method: 'POST',
    redirect: 'follow'
  };

  let serializedData = serialize(data);
  console.log(data, serializedData)
  fetch(`${formUrl}?${serializedData}`, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}


const ContactForm = () => {
  const [eventDate, setDate] = useState()
  const [plan, setPlan] = useState();
  const [eventType, setEventType] = useState();
  const [eventDuration, setEventDuration] = useState();
  const [subscribe, setSubscribe] = useState(false);

  const onSubmit = data => submitForm({ ...data, plan, eventType, eventDate, eventDuration, subscribe });
  const { register, handleSubmit } = useForm();
  const handlePlan = (_, { value }) => { setPlan(value) }
  const handleEventType = (_, { value }) => { setEventType(value) }
  const handleEventDuration = (_, { value }) => { setEventDuration(value) }
  const handleDate = (_, { value }) => { setDate(value.toLocaleDateString()) }
  const handleSub = (_, { checked }) => { setSubscribe(checked) }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Field
        required
        {...register("name")}
        label="Nombre y apellido"
        control={Input}
        placeholder="Catalina Echeverría"
      />
      <Form.Field
        required
        {...register("email")}
        id="form-input-control-error-email"
        control={Input}
        label="Correo electrónico"
        placeholder="cataecheverria@gmail.com"
      // error={{
      //   content: "Ingresa un correo válido",
      //   pointing: "below",
      // }}
      />
      <Form.Field required >
        <label htmlFor="calendar">Fecha del evento</label>
        <SemanticDatepicker
          onChange={handleDate}
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
        {...register("eventStart")}
        id="form-input-start-time"
        control={Input}
        label="Hora de inicio del servicio"
        placeholder="21:30 hrs."
      />
      <Form.Select
        required
        onChange={handleEventDuration}
        name="eventDuration"
        label="Duración del servicio"
        options={timeOptions}
        placeholder="Selecciona la duración"
      />
      <Form.Select
        required
        onChange={handleEventType}
        name="eventType"
        label="Tipo de evento"
        options={eventTypes}
        placeholder="Selecciona el tipo"
      />
      <Form.Select
        required
        onChange={handlePlan}
        label="Plan a cotizar"
        options={planOptions}
        placeholder="El plan que te gustaría cotizar"
      />
      <Form.Field
        id="form-textarea-control-opinion"
        {...register("description")}
        control={TextArea}
        label="Describe tu evento"
        placeholder="Cuéntanos los detalles de tu evento para armar un plan ideal para ti"
      />

      <Form.Checkbox label="Me gustaría recibir ofertas, planes y nuevos servicios al correo" onChange={handleSub} />
      <Button type="submit">Cotizar</Button>
    </Form>
  )
}

export default ContactForm
