<template>
  <v-main>
    <v-container>
      <v-btn to="/commander/create">Create</v-btn>
      <v-btn to="/commander/edit">Edit</v-btn>
      <EntryLog></EntryLog>
      <div v-if="showModal" class="modal-route">
        <v-dialog
          v-model="showModal"
          persistent
          transition="dialog-bottom-transition"
          max-width="60%"
        >
          <div>
            <router-view></router-view>
          </div>
        </v-dialog>
      </div>
    </v-container>
  </v-main>
</template>
<script>
import EntryLog from "../components/EntryLog";
export default {
  name: "CommanderView",
  components: { EntryLog },
  watch: {
    $route: {
      immediate: true,
      handler: function (newVal, oldVal) {
        console.log(newVal, oldVal);
        this.showModal = newVal.meta && newVal.meta.showModal;
      },
    },
  },
  data() {
    return {
      showModal: false,
    };
  },
};
</script>
<style></style>
