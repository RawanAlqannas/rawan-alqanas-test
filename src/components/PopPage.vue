<template>
  <div v-if="showPopup" class="popup-overlay">
    <div class="popup">
      <h2>Testimonial</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="username" required>
        </div>
        <div class="form-group">
          <label for="companyName">Company Name:</label>
          <input type="text" id="companyName" v-model="companyName" required>
        </div>
        <div class="form-group">
          <label for="content">Content:</label>
          <textarea id="content" v-model="content" required></textarea>
        </div>
        <button type="submit">Submit</button>
        <button type="button" @click="closePopup">Cancel</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showPopup: true, // Set to true to show the popup by default
      username: '',
      companyName: '',
      content: ''
    };
  },
  methods: {
    submitForm() {
      // Implement form submission logic here
      console.log('Form submitted:', this.username, this.companyName, this.content);
      this.closePopup();
    },
    closePopup() {
      this.showPopup = false;
    }
  }
};
</script>

<style scoped>
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(192, 191, 191, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup {
  background:#424242;
  padding: 20px;
  border-radius: 5px;
  width: 300px;
  max-width: 90%;
}

h2 {
  margin-top: 0;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="text"],
textarea {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

button {
  margin-right: 10px;
  padding: 8px 12px;
}
</style>
