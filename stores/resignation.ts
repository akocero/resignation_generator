import { defineStore } from "pinia";

export const useResignationStore = defineStore("resignation", {
  state: () => ({
    // Letter type: formal, casual, angry
    letterType: "formal" as "formal" | "casual" | "angry",

    // Language selection
    language: "tagalog" as "english" | "tagalog",

    // User's reasons for resigning
    reasons: [] as string[],

    // Custom reason if "other" is selected
    customReason: "",

    // Form data for the letter
    formData: {
      yourName: "",
      position: "",
      managerName: "",
      companyName: "",
      lastDay: "",
      notes: "",
    },
  }),

  actions: {
    setLetterType(type: "formal" | "casual" | "angry") {
      this.letterType = type;
    },

    setLanguage(language: "english" | "tagalog") {
      this.language = language;
    },

    setReasons(reasons: string[]) {
      this.reasons = reasons;
    },

    setCustomReason(reason: string) {
      this.customReason = reason;
    },

    updateFormData(data: Partial<typeof this.formData>) {
      this.formData = { ...this.formData, ...data };
    },

    reset() {
      this.letterType = "formal";
      this.language = "english";
      this.reasons = [];
      this.customReason = "";
      this.formData = {
        yourName: "",
        position: "",
        managerName: "",
        companyName: "",
        lastDay: "",
        notes: "",
      };
    },
  },

  getters: {
    hasReasons: (state) =>
      state.reasons.length > 0 || state.customReason.length > 0,
    allReasons: (state) => {
      const reasons = [...state.reasons];
      if (state.customReason) {
        reasons.push(state.customReason);
      }
      return reasons;
    },
  },
});
