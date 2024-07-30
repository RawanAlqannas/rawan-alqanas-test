<template>
  <div id="app" style="background-color: #ffffff; min-height: 100vh; display: flex;">
    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar content -->
      <ul class="sidebar-menu">
        <!-- Place labna.png image here -->
        <li class="sidebar-item white-text">
          <img class="labna-icon" src="../assets/labna.png" alt="Labna Icon"/> 
        </li>
        <li class="sidebar-item">
          <img class="home-icon" src="../assets/Home.jpeg" alt="Home Icon"/>
          Home
        </li>
        <li class="sidebar-item white-text">
          <img class="Invoices And Reports-icon" src="../assets/Invoices And Reports.png" alt="Report Icon"/>
          Invoices And Reports
          <span class="arrow-icon">&#9660;</span> <!-- Down arrow -->
        </li>
        <li class="sidebar-item white-text">
          <img class="Services Link-icon" src="../assets/Services.png" alt="Services Icon"/> Services Link
        </li>
        <li class="sidebar-item white-text">
          <img class="videos-icon" src="../assets/videos.png" alt="Videos Icon"/>
          Videos
        </li>
        <li class="sidebar-item white-text">
          <img class="affiliate-icon" src="../assets/Affiliate.png" alt="Affiliate Icon"/>
          Affiliate
        </li>
        <li class="sidebar-item white-text">
          <img class="contact-icon" src="../assets/Contact Us.png" alt="Contact Us Icon"/>
          Contact Us
        </li>
        <li class="sidebar-item white-text">
          <img class="Permissions-icon" src="../assets/security-safe.png" alt="Permissions Icon"/>
          Permissions
        </li>
        <li class="sidebar-item white-text">
          <div class="language-toggle" @click="toggleLanguage">
            <span class="toggle-label">اللغة العربية</span>
            <div class="toggle-switch" :class="{ active: isArabic }"></div>
          </div>
        </li>
        <li class="sidebar-item white-text">
          <div class="night-mode-toggle">
            <span class="toggle-label">Night Mode</span>
            <div class="toggle-switch" :class="{ active: isNightMode }" @click="toggleNightMode"></div>
          </div>
        </li>
        <li class="sidebar-item">
          <a href="#" class="download-apps-button">DOWNLOAD APPS</a>
        </li>
      </ul>
    </div>

    <!-- Main Content -->
    <div class="main-content" style="flex: 1; background-color: #ffffff; color: #000000; display: flex; flex-direction: column;">
      <!-- Top Content -->
      <div style="padding: 20px;">
        <h1 style="margin-left: 20px;">Reports</h1>
        <div class="checkboxes-container">
          <!-- First Row of checkboxes -->
          <div class="checkbox-row">
            <!-- Checkbox 1 -->
            <div class="checkbox-item">
              <input type="checkbox" id="checkbox1" />
           
              <label for="checkbox1">
                <router-link to="/second-page" class="go-report">
                <span class="checkbox-title">Total Sales</span>
                <span class="checkbox-description">All invoices with many details you can see as clients and amounts and every things.</span>
              </router-link>
              </label>
         
            </div>
            <!-- Checkbox 2 -->
            <div class="checkbox-item">
              <input type="checkbox" id="checkbox2" />
              <label for="checkbox2">
                <span class="checkbox-title">Total Administrative Fees</span>
                <span class="checkbox-description">All invoices with many details you can see as clients and amounts and every things.</span>
              </label>
            </div>
            <!-- Checkbox 3 -->
            <div class="checkbox-item">
              <input type="checkbox" id="checkbox3" />
              <label for="checkbox3">
                <span class="checkbox-title">Playgrounds</span>
                <span class="checkbox-description">All invoices with many details you can see as clients and amounts and every things.</span>
              </label>
            </div>
          </div>
          <!-- Second Row of checkboxes -->
          <div class="checkbox-row">
            <!-- Checkbox 4 -->
            <div class="checkbox-item">
              <input type="checkbox" id="checkbox4" />
              <label for="checkbox4">
                <span class="checkbox-title">Total Subscription Sales</span>
                <span class="checkbox-description">All invoices with many details you can see as clients and amounts and every things.</span>
              </label>
            </div>
            <!-- Checkbox 5 -->
            <div class="checkbox-item">
              <input type="checkbox" id="checkbox5" />
              <label for="checkbox5">
                <span class="checkbox-title">Clients</span>
                <span class="checkbox-description">All invoices with many details you can see as clients and amounts and every things.</span>
              </label>
            </div>
            <!-- Checkbox 6 -->
            <div class="checkbox-item">
              <input type="checkbox" id="checkbox6" />
              <label for="checkbox6">
                <span class="checkbox-title">Bank Free</span>
                <span class="checkbox-description">All invoices with many details you can see as clients and amounts and every things.</span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <!-- Content can be added here if needed -->
      <div style="flex: 1; display: flex; justify-content: center; align-items: center;">
        <!-- Centered content can go here -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isArabic: false, // Initial language state
      isNightMode: true, // Initial night mode state
    };
  },
  methods: {
    toggleLanguage() {
      this.isArabic = !this.isArabic; // Toggle language state
      // Implement logic for language switch
      // For example, you can switch language-specific content here
    },
    toggleNightMode() {
      this.isNightMode = !this.isNightMode; // Toggle night mode state
      // Implement logic for night mode switch
      // For example, you can switch themes or adjust styles here
    }
  }
};
</script>

<style scoped>
/* Additional global styles if needed */

.sidebar {
  width: 250px; /* Adjust width as needed */
  background-color: #f8f8f8; /* White background for sidebar */
  padding: 20px;
  height: 100vh; /* Full height */
  overflow-y: auto; /* Scrollable sidebar if content exceeds height */
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.logo-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px; /* Space below the logo */
  position: absolute;
  top: 20px; /* Adjust to control the top position */
}

.logo {
  max-width: 80px; /* Small size for the logo */
  height: auto;
}

.sidebar-menu {
  list-style-type: none;
  padding: 0;
  margin: 100px 0 0 0; /* Adjust to control the top position relative to the logo */
  width: 100%;
  text-align: center;
}

.sidebar-item {
  display: flex;
  align-items: center;
  padding: 10px 0;
  cursor: pointer;
  color: yellow; /* Yellow color for the "Home" item */
}

.white-text {
  color: #000000; /* Black color for the "Invoices And Reports", "Services Link", "Videos", "Affiliate", and "Contact Us" items */
}

.home-icon,
.Invoices And Reports-icon,
.Services Link-icon,
.videos-icon,
.affiliate-icon,
.contact-icon,
.Permissions-icon {
  max-width: 20px; /* Small size for the icons */
  height: auto;
  margin-right: 10px; /* Space between the icon and the text */
}

.arrow-icon {
  font-size: 12px; /* Adjust size as needed */
}

.sidebar-item:hover {
  background-color: #c1bfbf; /* Slightly lighter gray for hover effect */
}

.main-content {
  padding: 20px;
}

.language-toggle {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.toggle-label {
  margin-right: 10px;
}

.toggle-switch {
  width: 40px;
  height: 20px;
  background-color: #9a9ea1;
  border-radius: 10px;
  position: relative;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.toggle-switch::after {
  content: '';
  width: 18px;
  height: 18px;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  top: 1px;
  left: 1px;
  transition: transform 0.3s ease;
}

.toggle-switch.active {
  background-color: #a84bcd; /* Green color when active */
}

.toggle-switch.active::after {
  transform: translateX(20px);
}

.night-mode-toggle {
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
  margin-left: 10px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #c91cec;
  transition: .4s;
  border-radius: 20px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  left: 2px;
  bottom: 2px;
  background-color: white;
  transition: .4s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:checked + .slider:before {
  transform: translateX(20px);
}

.download-apps-button {
  display: block;
  background-color: yellow;
  color: black;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 5px;
  margin-top: 20px;
  text-align: center;
}

.download-apps-button:hover {
  background-color: #ffd700; /* Brighter yellow on hover */
}

.notification-switches {
  display: flex;
  flex-direction: column;
  gap: 20px; /* Space between switches */
}

.switch-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: white;
}

.switch-item .description {
  font-size: 12px;
  margin-top: 5px;
}

.checkboxes-container {
  margin-top: 20px;
}

.checkbox-row {
  display: flex;
  justify-content: space-between; /* Space between checkbox items */
  gap: 20px; /* Space between checkbox items */
  margin-top: 20px; /* Space between rows */
}

.checkbox-item {
  background-color: #e6e2e2;
  padding: 10px;
  border-radius: 5px;
  flex: 1; /* Flex to fill available space */
  min-width: calc(33.33% - 20px); /* Adjust width to fit three items per row */
}

.checkbox-item input {
  margin-right: 10px;
}

.checkbox-title {
  font-weight: bold;
}

.checkbox-description {
  font-size: 12px;
  margin-top: 5px; 
}
input[type="checkbox"]:checked::before {
  
  display: block;
  color: #575CD4;
  font-size: 14px;
  line-height: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>























