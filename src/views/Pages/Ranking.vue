<template>
  <div>
    <Menu />
    <div style="margin: 0 auto; width: 80%">
      <h1 style="text-align: center" class="title is-4">Vista de Ranking</h1>
      <DataTable :value="alumnos" :paginator="true" :rows="10">
        <Column field="nombre" header="Nombre"></Column>
        <Column field="alias" header="Alias"></Column>
        <Column field="puntaje" header="Puntaje"></Column>
        <Column field="ranking" header="Ranking"></Column>
      </DataTable>
    </div>
  </div>
</template>

<script>
import Menu from "@/components/layout/Menu";
import "primevue/datatable";
import "primevue/column";
import AlumnoService from "../../service/AlumnoService";
export default {
  name: "Ranking",
  data() {
    return {
      alumnos: null,
    };
  },
  components: {
    Menu,
  },
  alumnoService: null,
  created() {
    this.alumnoService = new AlumnoService();
  },
  mounted() {
    this.getAll();
  },
  methods: {
    getAll() {
      this.alumnoService.getAll().then((data) => {
        this.alumnos = data.data;
      });
    },
  },
};
</script>

<style></style>
