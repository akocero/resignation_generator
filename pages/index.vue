<template>
	<main
		class="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 p-6 relative flex flex-col items-center"
	>
		<!-- Animated background elements -->
		<div class="absolute inset-0 overflow-hidden pointer-events-none">
			<div
				class="absolute -top-40 -right-40 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
			></div>
			<div
				class="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"
			></div>
			<div
				class="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"
			></div>
		</div>

		<div
			class="max-w-6xl w-full relative z-10 flex-grow flex flex-col justify-center"
		>
			<!-- Header Section with Animation -->
			<div class="text-center mb-16 animate-fade-in">
				<!-- Badge -->
				<div
					class="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md mb-6 animate-slide-down"
				>
					<span class="relative flex h-2 w-2">
						<span
							class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"
						></span>
						<span
							class="relative inline-flex rounded-full h-2 w-2 bg-green-500"
						></span>
					</span>
					<span class="text-sm font-medium text-gray-700"
						>Free • Fast • Professional</span
					>
				</div>

				<!-- Main Heading with Gradient -->
				<h1
					class="text-4xl md:text-5xl font-extrabold mb-6 leading-tight"
				>
					<span
						class="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient"
					>
						Resignation Letter
					</span>
					<br />
					<span class="text-gray-900">Generator</span>
				</h1>

				<!-- Subheading -->
				<p
					class="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto font-medium mb-4"
				>
					Quit Your Job Like a Pro in Just 2 Minutes ⚡
				</p>
				<p
					class="text-base md:text-lg text-gray-600 max-w-xl mx-auto mb-3"
				>
					AI-powered resignation letters • PDF export • Choose your
					tone
				</p>
				<!-- Developer Tagline -->
				<p class="text-sm text-gray-500 italic">
					A professional tool by
					<a
						href="https://www.eugenebadato.com/"
						target="_blank"
						rel="noopener noreferrer"
						class="font-semibold text-indigo-600 hover:text-indigo-800 transition-colors underline decoration-2 decoration-indigo-300 hover:decoration-indigo-500"
					>
						@eugenebadato
					</a>
				</p>
			</div>

			<!-- Action Cards with Enhanced Styling -->
			<div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
				<!-- Formal Letter Card -->
				<div
					class="group animate-slide-up"
					style="animation-delay: 0.1s"
				>
					<button
						@click="handleFormalLetter"
						class="w-full bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-indigo-300/60 transition-all duration-300 p-8 text-left border-2 border-indigo-200 hover:border-indigo-400 transform hover:-translate-y-2 hover:scale-105"
					>
						<div
							class="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg"
						>
							<svg
								class="w-10 h-10 text-white"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
								></path>
							</svg>
						</div>
						<div class="flex items-center gap-2 mb-3">
							<h2 class="text-2xl font-extrabold text-gray-900">
								Formal & Professional
							</h2>
						</div>
						<span
							class="inline-block px-3 py-1.5 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white text-xs font-bold rounded-full shadow-md mb-3"
						>
							⭐ RECOMMENDED
						</span>
						<p class="text-gray-800 font-bold mb-3 text-lg">
							Leave with Class & Get That Reference! 🎩
						</p>
						<p class="text-sm text-gray-600 leading-relaxed">
							Perfect for corporate jobs, management positions, or
							when you need to maintain professional
							relationships. Includes proper notice period and
							gratitude.
						</p>
					</button>
				</div>

				<!-- Angry Letter Card -->
				<div
					class="group animate-slide-up"
					style="animation-delay: 0.3s"
				>
					<button
						@click="handleAngryLetter"
						class="w-full bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-red-300/60 transition-all duration-300 p-8 text-left border-2 border-red-200 hover:border-red-400 transform hover:-translate-y-2 hover:scale-105"
					>
						<div
							class="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg"
						>
							<svg
								class="w-10 h-10 text-white"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
								></path>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
								></path>
							</svg>
						</div>
						<div class="flex items-center gap-2 mb-3">
							<h2 class="text-2xl font-extrabold text-gray-900">
								Angry & Unfiltered
							</h2>
						</div>
						<span
							class="inline-block px-3 py-1.5 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold rounded-full shadow-md mb-3"
						>
							💥 BURN BRIDGES
						</span>
						<p class="text-gray-800 font-bold mb-3 text-lg">
							Go Out in a Blaze of Glory! 🔥
						</p>
						<p class="text-sm text-gray-600 leading-relaxed">
							For when you've had ENOUGH and don't care about
							burning bridges. Warning: Use at your own risk. No
							references guaranteed! 😈
						</p>
					</button>
				</div>

				<!-- Casual Letter Card -->
				<div
					class="group animate-slide-up"
					style="animation-delay: 0.2s"
				>
					<button
						@click="handleCasualLetter"
						class="w-full bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-purple-300/60 transition-all duration-300 p-8 text-left border-2 border-purple-200 hover:border-purple-400 transform hover:-translate-y-2 hover:scale-105"
					>
						<div
							class="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg"
						>
							<svg
								class="w-10 h-10 text-white"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
								></path>
							</svg>
						</div>
						<div class="flex items-center gap-2 mb-3">
							<h2 class="text-2xl font-extrabold text-gray-900">
								Casual & Friendly
							</h2>
						</div>
						<span
							class="inline-block px-3 py-1.5 bg-gradient-to-r from-purple-500 to-purple-600 text-white text-xs font-bold rounded-full shadow-md mb-3"
						>
							🔥 POPULAR
						</span>
						<p class="text-gray-800 font-bold mb-3 text-lg">
							Keep It Real & Part as Friends! ✌️
						</p>
						<p class="text-sm text-gray-600 leading-relaxed">
							Ideal for startups, small teams, or close-knit work
							environments. Warm tone while staying professional
							enough for HR records.
						</p>
					</button>
				</div>
			</div>

			<!-- Features Info -->
			<div
				class="mt-8 text-center animate-fade-in"
				style="animation-delay: 0.4s"
			>
				<div
					class="inline-flex flex-wrap justify-center items-center gap-6 px-6 py-4 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg"
				>
					<span
						class="inline-flex items-center text-sm font-medium text-gray-700"
					>
						<svg
							class="w-5 h-5 mr-2 text-indigo-600"
							fill="currentColor"
							viewBox="0 0 20 20"
						>
							<path
								fill-rule="evenodd"
								d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
								clip-rule="evenodd"
							></path>
						</svg>
						Export to PDF
					</span>
					<span
						class="inline-flex items-center text-sm font-medium text-gray-700"
					>
						<svg
							class="w-5 h-5 mr-2 text-purple-600"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M13 10V3L4 14h7v7l9-11h-7z"
							></path>
						</svg>
						AI-Powered
					</span>
					<span
						class="inline-flex items-center text-sm font-medium text-gray-700"
					>
						<svg
							class="w-5 h-5 mr-2 text-green-600"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
							></path>
						</svg>
						2 Minutes
					</span>
					<span
						class="inline-flex items-center text-sm font-medium text-gray-700"
					>
						<svg
							class="w-5 h-5 mr-2 text-pink-600"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<!-- Language SVG Icon -->
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 3v2m0 14v2m7-7h2M3 12H5m12.364-7.364l1.414 1.414M4.222 19.778l1.414-1.414M19.778 19.778l-1.414-1.414M4.222 4.222l1.414 1.414M8 12a4 4 0 108 0 4 4 0 10-8 0z"
							/>
						</svg>
						Multilingual
					</span>
				</div>
			</div>
			<!-- Footer with Developer Credit -->
			<footer
				class="w-full max-w-6xl relative z-10 mt-12 pb-6 text-center"
			>
				<div class="flex flex-col items-center gap-4">
					<div
						class="h-px w-32 bg-gradient-to-r from-transparent via-indigo-300 to-transparent"
					></div>

					<!-- Enhanced Brand Section -->
					<div
						class="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg px-8 py-5 border-2 border-indigo-100"
					>
						<div class="flex flex-col items-center gap-3">
							<!-- Main Brand -->
							<div class="flex items-center gap-2">
								<svg
									class="w-6 h-6 text-indigo-600"
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<path
										d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"
									></path>
								</svg>
								<span
									class="text-base font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
								>
									@eugenebadato
								</span>
							</div>

							<!-- Description -->
							<p class="text-xs text-gray-600 max-w-md">
								Building innovative web solutions for better
								work-life balance
							</p>

							<!-- Social Links -->
							<div class="flex items-center gap-4">
								<a
									href="https://github.com/akocero"
									target="_blank"
									rel="noopener noreferrer"
									class="inline-flex items-center gap-1.5 px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white text-xs font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-md"
								>
									<svg
										class="w-4 h-4"
										fill="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
										/>
									</svg>
									Follow on GitHub
								</a>
								<div
									class="flex items-center gap-1 text-xs text-gray-600"
								>
									<span>Made with</span>
									<svg
										class="w-4 h-4 text-red-500 animate-pulse"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path
											fill-rule="evenodd"
											d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
											clip-rule="evenodd"
										></path>
									</svg>
								</div>
							</div>
						</div>
					</div>

					<p class="text-xs text-gray-500 mt-2">
						© 2025 eugenebadato. • Open Source • Made for People Who
						Deserve Better
					</p>
				</div>
			</footer>
		</div>
	</main>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useResignationStore } from '~/stores/resignation';

const router = useRouter();
const resignationStore = useResignationStore();

const handleFormalLetter = () => {
	resignationStore.setLetterType('formal');
	router.push('/reason?type=formal');
};

const handleCasualLetter = () => {
	resignationStore.setLetterType('casual');
	router.push('/reason?type=casual');
};

const handleAngryLetter = () => {
	resignationStore.setLetterType('angry');
	router.push('/reason?type=angry');
};
</script>
