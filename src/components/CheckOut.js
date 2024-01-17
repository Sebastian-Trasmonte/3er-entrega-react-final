import "bulma/css/bulma.css"
import "../Styles.css"
import { useNavigate } from "react-router-dom";
import { InsertarOrden } from "../services/firebase";
import { useContext, useState } from "react";
import { cartContext } from "../storage/ContextProvider";


function CheckOut() {
  const navigateTo = useNavigate();
  const { carrito, VaciarCarrito } = useContext(cartContext);
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    dni: "",
    email: "",
    mumeroTarjeta: "",
    vencimientoTarjeta:"",
    titularTarjeta:"",
    codigoSeguridad:"",
    cuotas:1   
});

  function OnConfirm(event) {
    event.preventDefault();
    console.log(form)
    InsertarOrden(form,carrito).then((resultado) => {
      VaciarCarrito();
      console.log("formulario enviado");
      navigateTo("/")
        }).catch((error) => {
            navigateTo("*")
        })  
  }

  function OnCancel(){
    navigateTo("/Cart/");
  }

  function handleInputChange(event) {
    let nameField = event.target.name;
    setFormInput(event.target.value, nameField)
}

function setFormInput(value, nameField) {
  const newForm = { ...form };
  newForm[nameField] = value;
  setForm(newForm);
}


  return (
    <>
      <form class="columns is-mobile" onSubmit={OnConfirm}>
      <div class="column is-three-fifths is-offset-one-fifth">
        <div class="field">
          <label class="label">Nombre</label>
          <div class="control">
            <input class="input" type="text" placeholder="Text input" name="nombre" value={form.nombre.value} onChange={handleInputChange} />
          </div>
        </div>
        <div class="field">
          <label class="label">Apellido</label>
          <div class="control">
            <input class="input" type="text" placeholder="Text input" name="apellido" value={form.apellido.value} onChange={handleInputChange}/>
          </div>
        </div>
        <div class="field">
          <label class="label">DNI</label>
          <div class="control">
            <input class="input" type="text" placeholder="Text input" name="dni" value={form.dni.value} onChange={handleInputChange}/>
          </div>
        </div>
        <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input class="input" type="text" placeholder="Text input" name="email" value={form.email.value} onChange={handleInputChange}/>
          </div>
        </div>
        <div class="field">
          <label class="label">Numero de tarjeta</label>
          <div class="control">
            <input class="input" type="text" placeholder="Text input" name="mumeroTarjeta" value={form.mumeroTarjeta.value} onChange={handleInputChange}/>
          </div>
        </div>
        <div class="field">
          <label class="label">Fecha de vencimiento</label>
          <div class="control">
            <input class="input" type="text" placeholder="Text input" name="vencimientoTarjeta" value={form.vencimientoTarjeta.value} onChange={handleInputChange}/>
          </div>
        </div>
        <div class="field">
          <label class="label">Tituar de la tarjeta</label>
          <div class="control">
            <input class="input" type="text" placeholder="Text input" name="titularTarjeta" value={form.titularTarjeta.value} onChange={handleInputChange}/>
          </div>
        </div>
        <div class="field">
          <label class="label">Codigo de seguridad</label>
          <div class="control">
            <input class="input" type="text" placeholder="Text input" name="codigoSeguridad" value={form.codigoSeguridad.value} onChange={handleInputChange}/>
          </div>
        </div>
        <div class="field">
          <label class="label">Cuotas</label>
          <div class="control">
            <div class="select">
              <select name="cuotas" value={form.cuotas.value} onChange={handleInputChange}> 
                <option value="1">1 pago sin interes</option>
                <option value="3">3 pagos sin interes</option>
                <option value="6">6 pagos sin interes</option>
              </select>
            </div>
          </div>
        </div>
        <div class="field">
          <div class="control">
            <label class="checkbox">
              <input type="checkbox" />
              Aceptos los <a href="#">terminos y condiciones</a>
            </label>
          </div>
        </div>
        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link" type="submit">Submit</button>
          </div>
          <div class="control">
            <button class="button is-link is-light" onClick={()=>OnCancel()}>Cancel</button>
          </div>
        </div>
        </div>
      </form>
    </>
  )
}

export default CheckOut;