<template>
  <div class="about">
    <div class="d-flex justify-content-center">
      <b-alert
        v-model="showDismissibleAlert"
        variant="danger"
        dismissible
      >No se ha encontrado algun nombre!</b-alert>
    </div>
    <b-input-group class="d-flex justify-content-center">
      <b-form-input v-model="man" placeholder="Hombres" class="col-sm-3"></b-form-input>
      <b-form-input v-model="woman" placeholder="Mujeres" class="col-sm-3"></b-form-input>
      <b-input-group-append>
        <b-button
          variant="success"
          v-on:click="buscar"
          class="col-sm-auto"
        >Buscar{{ showDismissibleAlert ? ' de nuevo' : '' }}</b-button>
      </b-input-group-append>
    </b-input-group>
    <div class="padd"></div>
    <div>
      <table class="table">
        <thead>
          <th>Hombre</th>
          <th>Mujer</th>
          <th>Porcentaje de matching</th>
        </thead>
        <tbody>
          <tr>
            <td>{{this.man}}</td>
            <td>{{this.woman}}</td>
            <td>{{Math.trunc(this.porcentaje[0].porcentaje)}}%</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Parejas",
  data() {
    return {
      man: "",
      woman: "",
      porcentaje: "inicial",
      showDismissibleAlert: false
    };
  },
  methods: {
    buscar: function(e) {
      const request = `http://localhost/prolog/pareja?hombre=${
        this.man
      }&mujer=${this.woman}`;
      axios
        .get(request)
        .then(res => {
          this.porcentaje = res.data;
        })
        .catch(err => {
          this.datos = [];
          this.showDismissibleAlert = true;
        });
    }
  }
};
</script>
<style>
.about {
  padding: 30px;
}
.padd {
  padding: 15px;
}
</style>
