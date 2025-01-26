<template>
  <div class="container mt-5">
    <div class="card p-4 mx-auto" style="max-width: 400px">
      <h3 class="text-center mb-4">Login</h3>
      <form @submit.prevent="handleLogin">
        <div class="mb-3">
          <label for="username" class="form-label">Username</label>
          <input
            type="text"
            id="username"
            class="form-control"
            v-model="username"
            required
          />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input
            type="password"
            id="password"
            class="form-control"
            v-model="password"
            required
          />
        </div>
        <p v-if="errorMessage" class="text-danger">{{ errorMessage }}</p>
        <button type="submit" class="btn btn-primary w-100">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import AuthService from "@/services/AuthService";

export default {
  name: "LoginView",
  data() {
    return {
      username: "",
      password: "",
      errorMessage: "",
    };
  },
  methods: {
    ...mapActions("users", ["logIn"]),
    async handleLogin() {
      try {
        const user = await AuthService.logIn(this.username, this.password);
        await this.logIn(user);
        this.$router.push("/home");
      } catch (error) {
        this.errorMessage = error.message;
      }
    },
  },
};
</script>
