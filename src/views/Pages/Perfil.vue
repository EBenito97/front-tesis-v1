<template>
  <div>
    <Menu />
    <h1 style="text-align: center" class="title is-4">Vista de Perfil</h1>

    <body>
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column is-6 is-offset-1" align="left">
            <h2 class="title is-4">Nombre:</h2>
            <h2 class="title is-4">Alias:</h2>
            <h3 class="title is-4">Sobre mi:</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              maxime accusantium praesentium id delectus ea! Consequuntur
              soluta, placeat quae ut quisquam itaque provident eum neque labore
              quasi velit, aliquid ea!z
            </p>
          </div>
          <div class="column is-4">
            <figure class="image is-4by3">
              <img
                class="is-rounded"
                src="https://picsum.photos/800/600/?random"
                alt="Description"
              />
            </figure>
          </div>
        </div>
      </div>
    </body>
  </div>
</template>

<script>
import Menu from "@/components/layout/Menu";
import "firebase/compat/app";
export default {
  components: {
    Menu,
  },
};
</script>

<style></style>
