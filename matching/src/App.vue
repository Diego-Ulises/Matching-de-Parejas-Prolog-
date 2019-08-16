<template>
  <div id="app">
    <b-navbar type="light" variant="light" class="d-flex justify-content-center">
      <b-nav-form>
        <router-link to="/">Inicio</router-link>|
        <router-link to="/porcentajes">Porcentaje mínimo</router-link>|
        <router-link to="/hombres">Hombres</router-link>|
        <router-link to="/mujeres">Mujeres</router-link>|
        <router-link to="/parejas">Parejas</router-link>
      </b-nav-form>
    </b-navbar>
    <router-view/>
  </div>
</template>

<style>
a {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-weight: bold !important;
  color: #2c3e50 !important;
  padding: 10px;
}
a.router-link-exact-active {
  color: #42b983 !important;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
