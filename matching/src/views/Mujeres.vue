<template>
  <div class="about">
    <div class="d-flex justify-content-center">
      <b-alert
        v-model="showDismissibleAlert"
        variant="danger"
        dismissible
      >No se ha encontrado el nombre!</b-alert>
    </div>
    <b-input-group class="d-flex justify-content-center">
      <b-form-input v-model="nombre" placeholder="Mujer" class="col-sm-3"></b-form-input>
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
          <tr v-for="(dato, index) in this.datos" v-bind:key="index">
            <td>{{dato.hombre}}</td>
            <td>{{nombre}}</td>
            <td>{{Math.trunc(dato.porcentaje)}}%</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Mujeres",
  data() {
    return {
      showDismissibleAlert: false,
      nombre: "",
      datos: {}
    };
  },
  methods: {
    buscar: function(e) {
      const request = `http://localhost/prolog/mujer?nombre=${this.nombre}`;
      axios
        .get(request)
        .then(res => {
          const bruto = res.data;
          //Limpiar arreglo
          this.datos = this.getUnique(bruto, "hombre");
        })
        .catch(err => {
          this.showDismissibleAlert = true;
          this.datos = [];
        });
    },
    getUnique: function(arr, comp) {
      const unique = arr
        .map(e => e[comp])

        // store the keys of the unique objects
        .map((e, i, final) => final.indexOf(e) === i && i)

        // eliminate the dead keys & store unique objects
        .filter(e => arr[e])
        .map(e => arr[e]);

      return unique;
    }
  }
};
</script>