<template>
  <div id="app" style="background-color: #333333; min-height: 100vh; display: flex;">
    
    <div class="sidebar">
      
      <div class="logo-container">
        <img class="logo" src="../assets/git.png" alt="Gittax Logo"/>
      </div>

      <ul class="sidebar-menu">
        <li class="sidebar-item">
          <img class="home-icon" src="../assets/Home.jpeg" alt="Home Icon"/>
          Home
        </li>
        <li class="sidebar-item white-text">
          <img class="Invoices And Reports-icon" src="../assets/Invoices And Reports.png" alt="Report Icon"/>
          Invoices And Reports
          <span class="arrow-icon">&#9660;</span> 
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

    
    <div class="main-content" style="flex: 1; color: white; display: flex; flex-direction: column;">
      
      <div class="notification-setting" style="width: 100%; background-color: #444444; padding: 10px; color: white; display: flex; justify-content: flex-start; align-items: center; flex-direction: column;">
        <span style="margin-left: 20px; text-align: left;">Notification Setting</span>
        <span style="font-size: 12px; margin-top: 5px; text-align: left; margin-left: 20px;"> </span>
      </div>

      
      <div class="notification-switches" style="margin-top: 20px;">
        
        <div class="switch-item">
          <span>System Notification</span>
          <div class="switch">
            <input type="checkbox" id="system-notification" v-model="systemNotification">
            <label for="system-notification" class="slider"></label>
          </div>
          <span class="description">All notifications sending by GitTax Team.</span>
        </div>
        <!-- Billing Created -->
        <div class="switch-item">
          <span>Billing Created</span>
          <div class="switch">
            <input type="checkbox" id="billing-created" v-model="billingCreated">
            <label for="billing-created" class="slider"></label>
          </div>
          <span class="description">All Bills created by source or you will make a Successful Notification.</span>
        </div>
        
        <div class="switch-item">
          <span>Backup Maker</span>
          <div class="switch">
            <input type="checkbox" id="backup-maker" v-model="backupMaker">
            <label for="backup-maker" class="slider"></label>
          </div>
          <span class="description">When your Backup sent to your Mail will Get a Successful Notification.</span>
        </div>
    
        <div class="switch-item">
          <span>Got Free Month</span>
          <div class="switch">
            <input type="checkbox" id="got-free-month" v-model="gotFreeMonth">
            <label for="got-free-month" class="slider"></label>
          </div>
          <span class="description">If someone uses your Affiliate Code, You Will Get Free 1 Month Just One Time.</span>
        </div>
      </div>

      
      <div style="flex: 1; display: flex; justify-content: center; align-items: center;">
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isArabic: true, 
      isNightMode: false, 
    
      systemNotification: false,
      billingCreated: false,
      backupMaker: false,
      gotFreeMonth: false,
    };
  },
  methods: {
    toggleLanguage() {
      this.isArabic = !this.isArabic; 
      
      
    },
    toggleNightMode() {
      this.isNightMode = !this.isNightMode; 
      
    
    }
  }
};
</script>

<style scoped>


.sidebar {
  width: 250px; 
  background-color: #333333; 
  padding: 20px;
  height: 100vh; 
  overflow-y: auto; 
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
  margin-bottom: 20px; 
  position: absolute;
  top: 20px; 
}

.logo {
  max-width: 80px; 
  height: auto;
}

.sidebar-menu {
  list-style-type: none;
  padding: 0;
  margin: 100px 0 0 0; 
  width: 100%;
  text-align: center;
}

.sidebar-item {
  display: flex;
  align-items: center;
  padding: 10px 0;
  cursor: pointer;
  color: yellow; 
}

.white-text {
  color: white; 
}

.home-icon,
.Invoices And Reports-icon,
.Services Link-icon,
.videos-icon,
.affiliate-icon,
.contact-icon,
.Permissions-icon {
  max-width: 20px; 
  height: auto;
  margin-right: 10px; 
}

.arrow-icon {
  font-size: 12px; 
}

.sidebar-item:hover {
  background-color: #444444; 
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
  background-color: #ccc;
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
  background-color: #a74cd4; 
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
  background-color: #ccc;
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
  background-color: #c757f4;
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
  background-color: #ffd700; 
}

.notification-switches {
  display: flex;
  flex-direction: column;
  gap: 20px; 
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
</style>














































 














 

 

  
  

    


 











   

     







  