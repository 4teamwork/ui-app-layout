<template>
  <v-menu offset-y nudge-bottom="5">
    <template v-slot:activator="{ on }">
      <v-btn icon v-on="on">
        <slot name="avatar">
          <v-avatar :size="27" class="user-menu">
            <slot name="avatar-image">
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" />
            </slot>
          </v-avatar>
        </slot>
      </v-btn>
    </template>
    <slot name="usermenu" />
  </v-menu>
</template>

<script>
export default {}
</script>

<style>
.user-menu {
  border: 1px solid white;
}
</style>
