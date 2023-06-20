<template>
  <div class="flex flex-col items-center justify-center h-screen bg-gray-100">
    <div class="w-full max-w-2xl p-4 mx-auto bg-white rounded shadow">
      <div class="flex flex-col">
        <div v-for="(node, index) in orgData" :key="index" class="mb-4">
          <div v-tippy="{ content: node.details }" class="px-4 py-2 mb-2 bg-blue-500 text-white rounded cursor-pointer">
            {{ node.name }}
          </div>
          <div v-if="node.children" class="ml-4">
            <div v-for="(child, childIndex) in node.children" :key="childIndex" class="mb-2">
              <div v-tippy="{ content: child.details }" class="px-4 py-2 mb-2 bg-green-500 text-white rounded cursor-pointer">
                {{ child.name }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css'; // optional for styling

export default {
  directives: {
    tippy: {
      bind(el, binding) {
        tippy(el, binding.value);
      },
    },
  },
  data() {
    return {
      orgData: [
        {
          name: 'DGE',
          details: 'DGE Details',
          children: [
            {
              name: 'DGAE',
              details: 'DGAE Details',
            },
            {
              name: 'Conseiller/DGE',
              details: 'Conseiller/DGE Details',
            },
            {
              name: 'Assistant / DGE',
              details: 'Assistant / DGE Details',
            },
            {
              name: 'SA/DGE',
              details: 'SA/DGE Details',
            },
          ],
        },
        {
          name: 'DPC',
          details: 'DPC Details',
          children: [
            {
              name: 'DSPSSEL',
              details: 'DSPSSEL Details',
            },
            {
              name: 'DPCE',
              details: 'DPCE Details',
            },
            {
              name: 'DIER',
              details: 'DIER Details',
            },
          ],
        },
        // Add more nodes as needed
      ],
    };
  },
};
</script>

<style scoped>
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
</style>
