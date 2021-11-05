<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item">
        <h3 class="title is-3">MyApp</h3>
      </a>

      <a
        role="button"
        class="navbar-burger"
        :class="{ 'is-active': isOpen }"
        @click.prevent="toggleMenu"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div
      id="navbarBasicExample"
      class="navbar-menu"
      :class="{ 'is-active': isOpen }"
    >
      <!-- <div class="navbar-start">
        <router-link class="navbar-item" to="/">
          Home
        </router-link>
      </div> -->

      <div class="navbar-end">
        <div class="navbar-item">
          <template v-if="user">
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                <!-- {{ user.displayName || user.email }} -->
                {{ user.displayName }}
              </a>

              <div class="navbar-dropdown">
                <router-link class="navbar-item" to="/inicio">
                  Inicio
                </router-link>
                <router-link class="navbar-item" to="/perfil">
                  Perfil
                </router-link>
                <a class="navbar-item" @click.prevent="logout">
                  Cerrar sesión
                </a>
              </div>
            </div>
          </template>
          <template v-else>
            <div class="buttons">
              <router-link class="button is-primary" to="/register">
                <strong>Registrarme</strong>
              </router-link>
              <router-link class="button is-light" to="/login">
                Iniciar Sesión
              </router-link>
            </div>
          </template>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Firebase from "firebase/compat/app";
export default {
  data() {
    return {
      isOpen: false,
      user: null,
    };
  },
  methods: {
    toggleMenu() {
      const status = !this.isOpen;
      this.isOpen = status;
    },
    logout() {
      Firebase.auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: "home" });
        });
    },
  },
  created() {
    Firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    });
  },
};
</script>
