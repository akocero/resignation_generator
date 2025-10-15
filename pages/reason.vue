<template>
  <main class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
    <!-- Header -->
    <header class="bg-white shadow-sm border-b">
      <div
        class="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between"
      >
        <button
          @click="goBack"
          class="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
          Back to Home
        </button>
        <div class="flex items-center gap-3">
          <span
            v-if="resignationStore.letterType === 'formal'"
            class="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm font-semibold rounded-full"
          >
            Formal & Professional
          </span>
          <span
            v-else-if="resignationStore.letterType === 'casual'"
            class="px-3 py-1 bg-purple-100 text-purple-700 text-sm font-semibold rounded-full"
          >
            Casual & Friendly
          </span>
          <span
            v-else-if="resignationStore.letterType === 'angry'"
            class="px-3 py-1 bg-red-100 text-red-700 text-sm font-semibold rounded-full"
          >
            Angry & Unfiltered 🔥
          </span>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <div class="max-w-5xl mx-auto px-6 py-12">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">
          Why Are You Leaving?
        </h1>
        <p class="text-lg text-gray-600">
          Tell us in your own words, or select from common reasons below.
        </p>
      </div>

      <!-- Custom Reason - Primary Input -->
      <div class="bg-white rounded-2xl shadow-lg p-8 mb-6">
        <label class="block">
          <div class="flex items-center gap-3 mb-4">
            <span class="text-3xl">✍️</span>
            <div>
              <h3 class="text-xl font-bold text-gray-900">
                Your Reason for Leaving
              </h3>
              <p class="text-sm text-gray-500">
                Write your own reason in your own words
              </p>
            </div>
          </div>
          <textarea
            v-model="customReason"
            rows="4"
            :placeholder="getPlaceholder()"
            class="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none resize-none transition-all text-base"
            :class="{
              'border-indigo-500 bg-indigo-50': customReason.length > 0,
            }"
          ></textarea>
          <div class="flex items-center justify-between mt-2">
            <p class="text-xs text-gray-400">
              {{ getHelperText() }}
            </p>
            <span
              class="text-xs font-medium"
              :class="
                customReason.length > 0 ? 'text-indigo-600' : 'text-gray-400'
              "
            >
              {{ customReason.length }} characters
            </span>
          </div>
        </label>
      </div>

      <!-- Common Reasons - Optional -->
      <div class="bg-white rounded-2xl shadow-lg p-8 mb-6">
        <div class="mb-6">
          <div class="flex items-center gap-3 mb-2">
            <span class="text-2xl">💡</span>
            <h3 class="text-lg font-bold text-gray-900">
              Or Choose from Common Reasons
            </h3>
          </div>
          <p class="text-sm text-gray-500 ml-11">
            Select any that apply to add more context (optional)
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- Reason Options -->
          <label
            v-for="reason in reasonOptions"
            :key="reason.id"
            class="relative flex items-start p-4 border-2 rounded-xl cursor-pointer transition-all hover:border-indigo-300 hover:bg-indigo-50"
            :class="{
              'border-indigo-500 bg-indigo-50': selectedReasons.includes(
                reason.id
              ),
              'border-gray-200': !selectedReasons.includes(reason.id),
            }"
          >
            <input
              type="checkbox"
              :value="reason.id"
              v-model="selectedReasons"
              class="mt-1 h-5 w-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 cursor-pointer"
            />
            <div class="ml-3 flex-1">
              <div class="flex items-center gap-2">
                <span class="text-2xl">{{ reason.emoji }}</span>
                <span class="font-semibold text-gray-900">{{
                  reason.label
                }}</span>
              </div>
              <p class="text-sm text-gray-500 mt-1">{{ reason.description }}</p>
            </div>
          </label>
        </div>
      </div>

      <!-- Progress Indicator -->
      <div class="flex items-center justify-center gap-2 mb-6">
        <div class="flex items-center gap-2">
          <div
            class="w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center text-sm font-semibold"
          >
            1
          </div>
          <span class="text-sm font-medium text-gray-900">Reasons</span>
        </div>
        <div class="w-12 h-1 bg-gray-300 rounded"></div>
        <div class="flex items-center gap-2">
          <div
            class="w-8 h-8 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center text-sm font-semibold"
          >
            2
          </div>
          <span class="text-sm font-medium text-gray-600">Create Letter</span>
        </div>
      </div>

      <!-- Continue Button -->
      <div class="flex justify-center">
        <button
          @click="continueToCreate"
          :disabled="!hasSelectedReasons"
          class="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all transform hover:scale-105 disabled:transform-none shadow-lg disabled:shadow-none flex items-center gap-3"
        >
          <span>Continue to Create Letter</span>
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            ></path>
          </svg>
        </button>
      </div>

      <!-- Helper Text -->
      <p
        v-if="!hasSelectedReasons"
        class="text-center text-sm text-gray-500 mt-4"
      >
        Please select at least one reason to continue
      </p>
    </div>
  </main>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useResignationStore } from "~/stores/resignation";

const router = useRouter();
const route = useRoute();
const resignationStore = useResignationStore();

// Selected reasons
const selectedReasons = ref([]);
const customReason = ref("");

// Reason options based on letter type
const formalReasons = [
  {
    id: "better-opportunity",
    label: "Career Advancement Opportunity",
    emoji: "🚀",
    description:
      "Accepting a position with enhanced growth potential and responsibilities",
  },
  {
    id: "professional-development",
    label: "Professional Development",
    emoji: "📚",
    description:
      "Pursuing opportunities that align better with career objectives",
  },
  {
    id: "relocation",
    label: "Relocation",
    emoji: "📍",
    description:
      "Relocating to a new geographic area for personal or family reasons",
  },
  {
    id: "career-change",
    label: "Career Transition",
    emoji: "🔄",
    description: "Transitioning to a different industry or professional field",
  },
  {
    id: "family-commitments",
    label: "Family Commitments",
    emoji: "👨‍👩‍👧",
    description: "Prioritizing family responsibilities and obligations",
  },
  {
    id: "further-education",
    label: "Further Education",
    emoji: "🎓",
    description: "Pursuing advanced education or specialized training",
  },
  {
    id: "entrepreneurship",
    label: "Entrepreneurial Venture",
    emoji: "💼",
    description: "Starting an independent business or consulting practice",
  },
  {
    id: "retirement-transition",
    label: "Career Transition",
    emoji: "🌅",
    description: "Moving toward retirement or semi-retirement",
  },
  {
    id: "work-life-balance",
    label: "Work-Life Balance",
    emoji: "⚖️",
    description:
      "Seeking improved balance between professional and personal life",
  },
  {
    id: "health-reasons",
    label: "Health & Wellness",
    emoji: "💚",
    description: "Prioritizing health and personal well-being",
  },
];

const casualReasons = [
  {
    id: "better-opportunity",
    label: "Better Opportunity",
    emoji: "🚀",
    description: "Found something that's a better fit for where I want to go",
  },
  {
    id: "work-life-balance",
    label: "Work-Life Balance",
    emoji: "⚖️",
    description: "Need more flexibility and time for life outside work",
  },
  {
    id: "new-challenge",
    label: "Ready for New Challenge",
    emoji: "🎯",
    description: "Excited to try something different and grow in new ways",
  },
  {
    id: "remote-opportunity",
    label: "Remote/Flexible Work",
    emoji: "🏡",
    description: "Found a role with the flexibility I'm looking for",
  },
  {
    id: "passion-project",
    label: "Following My Passion",
    emoji: "💡",
    description: "Going after something I'm really passionate about",
  },
  {
    id: "career-pivot",
    label: "Career Pivot",
    emoji: "🔄",
    description: "Making a change to do something I've always wanted to try",
  },
  {
    id: "location-change",
    label: "Moving/Relocating",
    emoji: "📍",
    description: "Moving to a new place and starting fresh",
  },
  {
    id: "personal-growth",
    label: "Personal Growth",
    emoji: "🌱",
    description: "Time to focus on personal development and learning",
  },
  {
    id: "startup-venture",
    label: "Starting Something New",
    emoji: "🚀",
    description: "Launching my own thing or joining an exciting startup",
  },
  {
    id: "better-team",
    label: "Better Team Fit",
    emoji: "👥",
    description: "Found a team that feels like the right fit for me",
  },
];

const angryReasons = [
  {
    id: "underpaid",
    label: "Severely Underpaid",
    emoji: "💸",
    description: "Not being compensated fairly for the work I do",
  },
  {
    id: "overworked",
    label: "Overworked & Underappreciated",
    emoji: "😤",
    description: "Constantly expected to do more with no recognition",
  },
  {
    id: "toxic-management",
    label: "Toxic Management",
    emoji: "☠️",
    description: "Leadership that's unprofessional and demotivating",
  },
  {
    id: "broken-promises",
    label: "Broken Promises",
    emoji: "🚫",
    description: "Tired of promises that never materialize",
  },
  {
    id: "no-respect",
    label: "Lack of Respect",
    emoji: "👎",
    description: "Not being treated with basic professional respect",
  },
  {
    id: "toxic-culture",
    label: "Toxic Work Culture",
    emoji: "🧨",
    description: "Unhealthy environment that's affecting my well-being",
  },
  {
    id: "micromanagement",
    label: "Excessive Micromanagement",
    emoji: "🔍",
    description: "Can't do my job without constant interference",
  },
  {
    id: "no-growth",
    label: "Zero Growth Opportunities",
    emoji: "🚧",
    description: "No path forward or investment in my development",
  },
  {
    id: "favoritism",
    label: "Unfair Treatment",
    emoji: "⚖️",
    description: "Blatant favoritism and double standards",
  },
  {
    id: "burnout",
    label: "Complete Burnout",
    emoji: "🔥",
    description: "Pushed to the breaking point with no support",
  },
  {
    id: "better-offer",
    label: "Way Better Offer Elsewhere",
    emoji: "💰",
    description: "Found somewhere that actually values what I bring",
  },
  {
    id: "had-enough",
    label: "Just Done",
    emoji: "✋",
    description: "Reached my limit and it's time to move on",
  },
];

// Get appropriate reasons based on letter type
const reasonOptions = computed(() => {
  if (resignationStore.letterType === "formal") {
    return formalReasons;
  } else if (resignationStore.letterType === "casual") {
    return casualReasons;
  } else if (resignationStore.letterType === "angry") {
    return angryReasons;
  }
  return formalReasons; // default
});

// Get placeholder text based on letter type
const getPlaceholder = () => {
  if (resignationStore.letterType === "formal") {
    return "e.g., I have accepted a position that better aligns with my long-term career objectives and offers enhanced opportunities for professional growth and development...";
  } else if (resignationStore.letterType === "casual") {
    return "e.g., I've found an opportunity that's a better fit for where I want to take my career, and I'm really excited about the new challenges and growth ahead...";
  } else if (resignationStore.letterType === "angry") {
    return "e.g., After dealing with ongoing issues around compensation, work conditions, and lack of support, I've decided it's time to move on to an environment that values my contributions...";
  }
  return "Tell us your reason for leaving...";
};

// Get helper text based on letter type
const getHelperText = () => {
  if (resignationStore.letterType === "formal") {
    return "Keep it professional and positive - focus on growth and opportunity";
  } else if (resignationStore.letterType === "casual") {
    return "Be honest and authentic - keep it friendly but clear";
  } else if (resignationStore.letterType === "angry") {
    return "Be direct about issues - we'll help keep it professional enough";
  }
  return "Be honest but professional - this helps us craft your letter";
};

// Check if user has selected reasons
const hasSelectedReasons = computed(() => {
  return (
    selectedReasons.value.length > 0 || customReason.value.trim().length > 0
  );
});

// Initialize from store if exists
onMounted(() => {
  // Get letter type from query or store
  const typeFromQuery = route.query.type;
  if (typeFromQuery) {
    resignationStore.setLetterType(typeFromQuery);
  }

  // Load existing reasons from store if any
  if (resignationStore.reasons.length > 0) {
    selectedReasons.value = [...resignationStore.reasons];
  }
  if (resignationStore.customReason) {
    customReason.value = resignationStore.customReason;
  }
});

// Go back to home
const goBack = () => {
  router.push("/");
};

// Continue to create page
const continueToCreate = () => {
  // Save reasons to store
  resignationStore.setReasons(selectedReasons.value);
  resignationStore.setCustomReason(customReason.value.trim());

  // Navigate to create page
  router.push("/create");
};
</script>
