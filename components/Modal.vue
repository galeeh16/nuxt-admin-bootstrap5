<template>
  <Teleport to="body">
    <div class="modal fade" ref="myComponentModal" id="myComponentModal" aria-hidden="true"
      aria-labelledby="myComponentModalLabel" tabindex="-1">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <slot name="modal-header"></slot>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <slot name="modal-body"></slot>
          </div>
          <div class="modal-footer">
            <slot name="modal-footer"></slot>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
const { $bootstrap } = useNuxtApp();

let myModal = ref('myComponentModal');

onMounted(() => {
  myModal.value = new $bootstrap.Modal(document.getElementById("myComponentModal"), {});
});


function showModal() {
  myModal.value.show();
}

const props = defineProps({
  isShow: {
    required: true,
    default: false,
    type: Boolean
  }
});

const isShow = ref(props.isShow);

watch(isShow, (oldProps, newProps) => {
  console.log(oldProps, newProps);
});
</script>