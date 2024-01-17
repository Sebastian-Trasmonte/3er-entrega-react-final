import "bulma/css/bulma.css"
import "../Styles.css"



function CheckOut() {
  return (
    <>
      <div class="columns is-mobile">
      <div class="column is-three-fifths is-offset-one-fifth">
        <div class="field">
          <label class="label">Nombre</label>
          <div class="control">
            <input class="input" type="text" placeholder="Text input" />
          </div>
        </div>
        <div class="field">
          <label class="label">Apellido</label>
          <div class="control">
            <input class="input" type="text" placeholder="Text input" />
          </div>
        </div>
        <div class="field">
          <label class="label">DNI</label>
          <div class="control">
            <input class="input" type="text" placeholder="Text input" />
          </div>
        </div>
        <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input class="input" type="text" placeholder="Text input" />
          </div>
        </div>
        <div class="field">
          <label class="label">Numero de tarjeta</label>
          <div class="control">
            <input class="input" type="text" placeholder="Text input" />
          </div>
        </div>
        <div class="field">
          <label class="label">Fecha de vencimiento</label>
          <div class="control">
            <input class="input" type="text" placeholder="Text input" />
          </div>
        </div>
        <div class="field">
          <label class="label">Tituar de la tarjeta</label>
          <div class="control">
            <input class="input" type="text" placeholder="Text input" />
          </div>
        </div>
        <div class="field">
          <label class="label">Codigo de seguridad</label>
          <div class="control">
            <input class="input" type="text" placeholder="Text input" />
          </div>
        </div>
        <div class="field">
          <label class="label">Cuotas</label>
          <div class="control">
            <div class="select">
              <select>
                <option>1 pago sin interes</option>
                <option>3 pagos sin interes</option>
                <option>6 pagos sin interes</option>
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
            <button class="button is-link">Submit</button>
          </div>
          <div class="control">
            <button class="button is-link is-light">Cancel</button>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default CheckOut;