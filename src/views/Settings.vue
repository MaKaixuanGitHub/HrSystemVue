<template>
  <div class="bg-white rounded-lg shadow">
    <div class="p-6 border-b">
      <h2 class="text-xl font-semibold">Settings</h2>
    </div>
    <div class="p-6">
      <form @submit.prevent="saveSettings" class="space-y-6">
        <!-- Profile Section -->
        <div>
          <h3 class="text-lg font-medium mb-4">Profile Settings</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-medium text-gray-700">Name</label>
              <input 
                type="text" 
                v-model="settings.name"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700">Email</label>
              <input 
                type="email" 
                v-model="settings.email"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
            </div>
          </div>
        </div>

        <!-- Notifications Section -->
        <div>
          <h3 class="text-lg font-medium mb-4">Notification Preferences</h3>
          <div class="space-y-4">
            <div class="flex items-center">
              <input 
                type="checkbox" 
                v-model="settings.emailNotifications"
                class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              >
              <label class="ml-2 block text-sm text-gray-700">
                Email Notifications
              </label>
            </div>
            <div class="flex items-center">
              <input 
                type="checkbox" 
                v-model="settings.pushNotifications"
                class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              >
              <label class="ml-2 block text-sm text-gray-700">
                Push Notifications
              </label>
            </div>
          </div>
        </div>

        <!-- Theme Section -->
        <div>
          <h3 class="text-lg font-medium mb-4">Theme Settings</h3>
          <div>
            <label class="block text-sm font-medium text-gray-700">Theme</label>
            <select 
              v-model="settings.theme"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="system">System</option>
            </select>
          </div>
        </div>

        <div class="flex justify-end">
          <button 
            type="submit"
            class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const settings = ref({
  name: 'John Doe',
  email: 'john@example.com',
  emailNotifications: true,
  pushNotifications: false,
  theme: 'light'
})

const saveSettings = () => {
  // Here you would typically save the settings to your backend
  console.log('Saving settings:', settings.value)
}
</script>