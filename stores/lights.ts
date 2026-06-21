import { defineStore } from "pinia";

export const useLightsStore = defineStore("lights", {
  state: () => ({
    lights: [] as Array<{
      id: number;
      name: string;
      isOn: boolean;
      checked: boolean;
    }>,
  }),

  getters: {
    checkedItems: (state) =>
      state.lights.filter((l) => l.checked).map((l) => l.id),
  },

  actions: {
    async loadLights() {
      const { data } = await useFetch("/api/light");

      if (!data.value) return;

      this.lights = data.value.map((light) => ({
        ...light,
        name: light.name ?? "",
        isOn: light.isOn ?? false,
        checked: false,
      }));
    },
  },
});
