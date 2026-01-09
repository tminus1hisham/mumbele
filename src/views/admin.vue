<template>
  <v-sheet border rounded>
    <v-data-table
      :headers="headers"
      :items="menu"
      :hide-default-footer="menu.length < 11"
      item-key="id"
    >
      <!-- TOP TOOLBAR -->
      <template #top>
        <v-toolbar flat>
          <v-toolbar-title>
            <v-icon
              icon="mdi-tools"
              size="small"
              class="me-2"
            />
            Hardware Products
          </v-toolbar-title>

          <v-spacer />

          <v-btn
            prepend-icon="mdi-plus"
            rounded="lg"
            text="Add Product"
            variant="outlined"
            @click="add"
          />
        </v-toolbar>
      </template>

      <!-- NAME COLUMN -->
      <template #item.name="{ value }">
        <v-chip
          label
          variant="outlined"
          prepend-icon="mdi-wrench"
        >
          {{ value }}
        </v-chip>
      </template>

      <!-- PRICE COLUMN -->
      <template #item.price="{ value }">
        KES {{ value.toLocaleString() }}
      </template>

      <!-- ACTIONS -->
      <template #item.actions="{ item }">
        <div class="d-flex ga-2 justify-end">
          <v-icon
            icon="mdi-pencil"
            size="small"
            class="cursor-pointer"
            @click.stop="edit(item.id)"
          />
          <v-icon
            icon="mdi-delete"
            size="small"
            class="cursor-pointer"
            @click.stop="remove(item.id)"
          />
        </div>
      </template>

      <!-- NO DATA -->
      <template #no-data>
        <v-btn
          prepend-icon="mdi-refresh"
          variant="text"
          @click="reset"
        >
          Reset data
        </v-btn>
      </template>
    </v-data-table>
  </v-sheet>

  <!-- DIALOG -->
  <v-dialog v-model="dialog" max-width="500">
    <v-card
      :title="isEditing ? 'Edit Product' : 'Add Product'"
      :subtitle="isEditing ? 'Update product details' : 'Create a new product'"
    >
      <v-card-text>
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model="formModel.name"
              label="Product Name"
            />
          </v-col>

          <v-col cols="12">
            <v-select
              v-model="formModel.category"
              :items="categories"
              label="Category"
            />
          </v-col>

          <v-col cols="12">
            <v-number-input
              v-model="formModel.price"
              label="Price (KES)"
              :min="0"
            />
          </v-col>
        </v-row>
      </v-card-text>

      <v-divider />

      <v-card-actions>
        <v-btn variant="text" @click="dialog = false">Cancel</v-btn>
        <v-spacer />
        <v-btn color="primary" @click="save">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>


<script setup>
import { ref, computed } from "vue"
import { useMenuStore } from "@/stores/menu"

const menuStore = useMenuStore()
const menu = menuStore.menu   // ✅ FIXED

const dialog = ref(false)
const formModel = ref(createNewRecord())

const categories = [
  "Accessories",
  "Plumbing Tools",
  "PPR",
  "HDPE",
  "PVC Pressure",
  "uPVC Waste",
  "GI",
  "Sanitary",
]

const headers = [
  { title: "Name", key: "name" },
  { title: "Category", key: "category" },
  { title: "Price (KES)", key: "price", align: "end" },
  { title: "Actions", key: "actions", sortable: false, align: "end" },
]

const isEditing = computed(() => !!formModel.value.id)

function createNewRecord() {
  return {
    id: null,
    image: "/place.png",
    category: "",
    name: "",
    price: 0,
  }
}

function add() {
  formModel.value = createNewRecord()
  dialog.value = true
}

function edit(id) {
  const found = menu.find(item => item.id === id)
  if (!found) return

  formModel.value = { ...found }
  dialog.value = true
}

function save() {
  if (isEditing.value) {
    const index = menu.findIndex(item => item.id === formModel.value.id)
    if (index > -1) {
      menu[index] = { ...formModel.value }
    }
  } else {
    formModel.value.id = Date.now()
    menu.push({ ...formModel.value })
  }

  dialog.value = false
}

function remove(id) {
  if (!confirm("Delete this product?")) return
  const index = menu.findIndex(item => item.id === id)
  if (index > -1) menu.splice(index, 1)
}

function reset() {
  dialog.value = false
  formModel.value = createNewRecord()
}

// function edit(id) {
//   console.log("EDIT CLICKED:", id)
// }

// function remove(id) {
//   console.log("DELETE CLICKED:", id)
// }

</script>

