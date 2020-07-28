<template>
  <div class="container">
    users count: {{ users.length }}

    name: <input v-model="user.name" />
    surname: <input v-model="user.surname" />
    age: <input v-model="user.age" />

    <button @click="handleAddUser">Dodaj uzytkownika</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: '',
        surname: '',
        age: 0,
      },
      users: [],
    };
  },
  async mounted(){
    const response = await fetch('http://localhost:3001/users');
    this.users = await response.json()

  },
    methods: {
    
    async handleAddUser() {
      const {
        name,
        surname,
        age,
      } = this.user;

      await fetch('http://localhost:3001/users', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          surname,
          age
        })
      });
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
