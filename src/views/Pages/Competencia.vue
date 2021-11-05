<template>
  <div>
    <Menu />
    <h1 style="text-align: center" class="title is-4">Vista de Competencia</h1>
    <div class="buttons tabs is-centered">
      <div class="columns is-desktop">
        <div class="column">
          <button class="button" style="width: 60px">
            <img src="" />
          </button>
          <br />
          Básico
        </div>
        <div class="column">
          <button class="button" style="width: 60px">
            <img src="../../assets/bloqueado.png" />
          </button>
          <br />
          Intermedio
        </div>
        <div class="column">
          <button class="button" style="width: 60px">
            <img src="../../assets/bloqueado.png" />
          </button>
          <br />
          Avanzado
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "@/components/layout/Menu";
export default {
  components: {
    Menu,
  },
};
</script>

<style scoped>
.column {
  background-color: #ffffff;
  margin: 1rem;
  padding: 1rem;
  border: 2px;
  /* IMPORTANTE */
  text-align: center;
}
</style>
