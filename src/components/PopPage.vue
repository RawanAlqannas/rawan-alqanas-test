<template>
  <div v-if="showPopup" class="popup-overlay">
    <div class="popup">
      <h2>Testimonial</h2>
      <form @submit.prevent="saveForm">
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
        <div class="button-container">
          <button type="submit" class="save-button">Save</button>
        </div>
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
    saveForm() {
      // Implement save logic here
      console.log('Form saved:', this.username, this.companyName, this.content);
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
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup {
  background: #333333; /* Dark gray background color */
  color: white; /* White text color */
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
  background: #444444; /* Slightly lighter gray for input background */
  color: white; /* White text color for inputs */
  border: 1px solid #555555; /* Border color for inputs */
  border-radius: 3px;
}

.button-container {
  display: flex;
  justify-content: flex-end; /* Align the button to the right */
}

.save-button {
  background: yellow; /* Yellow background color for Save button */
  color: black; /* Black text color for better contrast */
  text-align: center;
  padding: 5px 10px; /* Smaller padding for Save button */
  border-radius: 3px;
  cursor: pointer;
}

.save-button:hover {
  background: #ffd700; /* Brighter yellow on hover */
}
</style>









