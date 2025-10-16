<template>
	<main class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
		<!-- Header -->
		<header class="bg-white shadow-sm border-b">
			<div
				class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between"
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
						v-if="letterType === 'formal'"
						class="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm font-semibold rounded-full"
					>
						Formal & Professional
					</span>
					<span
						v-else-if="letterType === 'casual'"
						class="px-3 py-1 bg-purple-100 text-purple-700 text-sm font-semibold rounded-full"
					>
						Casual & Friendly
					</span>
					<span
						v-else-if="letterType === 'angry'"
						class="px-3 py-1 bg-red-100 text-red-700 text-sm font-semibold rounded-full"
					>
						Angry & Unfiltered 🔥
					</span>
				</div>
			</div>
		</header>

		<!-- Main Content -->
		<div class="max-w-7xl mx-auto px-6 py-8">
			<div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
				<!-- Left Column - Options -->
				<div class="lg:col-span-1">
					<div
						class="bg-white rounded-2xl shadow-lg p-6 sticky top-8"
					>
						<h2 class="text-2xl font-bold text-gray-900 mb-6">
							Customize Your Letter
						</h2>

						<!-- Selected Reasons Summary -->
						<div
							v-if="userReasons.length > 0"
							class="mb-6 p-4 bg-indigo-50 border-2 border-indigo-200 rounded-xl"
						>
							<div class="flex items-center gap-2 mb-3">
								<svg
									class="w-5 h-5 text-indigo-600"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
									></path>
								</svg>
								<h3 class="font-semibold text-indigo-900">
									Your Selected Reasons
								</h3>
							</div>
							<div class="flex flex-wrap gap-2">
								<span
									v-for="(reason, index) in userReasons"
									:key="index"
									class="px-3 py-1 bg-white text-indigo-700 text-sm font-medium rounded-full border border-indigo-300"
								>
									{{ formatReason(reason) }}
								</span>
							</div>
							<button
								@click="editReasons"
								class="mt-3 text-sm text-indigo-600 hover:text-indigo-800 font-medium"
							>
								← Edit Reasons
							</button>
						</div>

						<!-- Form Fields -->
						<div class="space-y-4">
							<div>
								<label
									class="block text-sm font-medium text-gray-700 mb-2"
								>
									Letter Tone
								</label>
								<div class="grid grid-cols-2 gap-3">
									<button
										@click="
											resignationStore.setLetterType(
												'formal'
											)
										"
										:class="[
											'py-2 px-4 rounded-lg font-medium transition-all border-2',
											resignationStore.letterType ===
											'formal'
												? 'bg-indigo-600 text-white border-indigo-600'
												: 'bg-white text-gray-700 border-gray-300 hover:border-indigo-300',
										]"
									>
										📝 Formal
									</button>
									<button
										@click="
											resignationStore.setLetterType(
												'angry'
											)
										"
										:class="[
											'py-2 px-4 rounded-lg font-medium transition-all border-2',
											resignationStore.letterType ===
											'angry'
												? 'bg-indigo-600 text-white border-indigo-600'
												: 'bg-white text-gray-700 border-gray-300 hover:border-indigo-300',
										]"
									>
										🔥 Angry
									</button>
									<button
										@click="
											resignationStore.setLetterType(
												'casual'
											)
										"
										:class="[
											'py-2 px-4 rounded-lg font-medium transition-all border-2',
											resignationStore.letterType ===
											'casual'
												? 'bg-indigo-600 text-white border-indigo-600'
												: 'bg-white text-gray-700 border-gray-300 hover:border-indigo-300',
										]"
									>
										🙂 Casual
									</button>
								</div>
								<p class="text-xs text-gray-500 mt-2">
									The resignation letter will be generated in
									this language
								</p>
							</div>
							<!-- Language Selection -->
							<div>
								<label
									class="block text-sm font-medium text-gray-700 mb-2"
								>
									Letter Language
								</label>
								<div class="grid grid-cols-2 gap-3">
									<button
										@click="
											resignationStore.setLanguage(
												'english'
											)
										"
										:class="[
											'py-2 px-4 rounded-lg font-medium transition-all border-2',
											resignationStore.language ===
											'english'
												? 'bg-indigo-600 text-white border-indigo-600'
												: 'bg-white text-gray-700 border-gray-300 hover:border-indigo-300',
										]"
									>
										🇺🇸 English
									</button>
									<button
										@click="
											resignationStore.setLanguage(
												'tagalog'
											)
										"
										:class="[
											'py-2 px-4 rounded-lg font-medium transition-all border-2',
											resignationStore.language ===
											'tagalog'
												? 'bg-indigo-600 text-white border-indigo-600'
												: 'bg-white text-gray-700 border-gray-300 hover:border-indigo-300',
										]"
									>
										🇵🇭 Tagalog
									</button>
								</div>
								<p class="text-xs text-gray-500 mt-2">
									The resignation letter will be generated in
									this language
								</p>
							</div>

							<!-- Your Name -->
							<div>
								<label
									class="block text-sm font-medium text-gray-700 mb-2"
								>
									Your Name
								</label>
								<input
									:value="formData.yourName"
									@input="
										resignationStore.updateFormData({
											yourName: $event.target.value,
										})
									"
									type="text"
									placeholder="Martin Romualdez"
									class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
								/>
							</div>

							<!-- Your Position -->
							<div>
								<label
									class="block text-sm font-medium text-gray-700 mb-2"
								>
									Your Position
								</label>
								<input
									:value="formData.position"
									@input="
										resignationStore.updateFormData({
											position: $event.target.value,
										})
									"
									type="text"
									placeholder="Speaker of the House"
									class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
								/>
							</div>

							<!-- Manager Name -->
							<div>
								<label
									class="block text-sm font-medium text-gray-700 mb-2"
								>
									Manager's/Boss's Name
								</label>
								<input
									:value="formData.managerName"
									@input="
										resignationStore.updateFormData({
											managerName: $event.target.value,
										})
									"
									type="text"
									placeholder="Bong Bong Marcos"
									class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
								/>
							</div>

							<!-- Company Name -->
							<div>
								<label
									class="block text-sm font-medium text-gray-700 mb-2"
								>
									Company Name
								</label>
								<input
									:value="formData.companyName"
									@input="
										resignationStore.updateFormData({
											companyName: $event.target.value,
										})
									"
									type="text"
									placeholder="Government of the Philippines"
									class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
								/>
							</div>

							<!-- Last Day -->
							<div>
								<label
									class="block text-sm font-medium text-gray-700 mb-2"
								>
									Last Day of Work
								</label>
								<input
									:value="formData.lastDay"
									@input="
										resignationStore.updateFormData({
											lastDay: $event.target.value,
										})
									"
									type="date"
									class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
								/>
							</div>

							<!-- Additional Notes (optional) -->
							<div>
								<label
									class="block text-sm font-medium text-gray-700 mb-2"
								>
									Additional Notes (Optional)
								</label>
								<textarea
									:value="formData.notes"
									@input="
										resignationStore.updateFormData({
											notes: $event.target.value,
										})
									"
									rows="3"
									placeholder="Any additional information..."
									class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none resize-none"
								></textarea>
							</div>
						</div>

						<!-- AI Generate Button -->
						<div class="mt-6">
							<button
								@click="generateWithAI"
								:disabled="isGenerating"
								class="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 disabled:from-gray-400 disabled:to-gray-400 text-white font-bold py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg disabled:cursor-not-allowed"
							>
								<svg
									v-if="!isGenerating"
									class="w-5 h-5"
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
								<svg
									v-else
									class="w-5 h-5 animate-spin"
									fill="none"
									viewBox="0 0 24 24"
								>
									<circle
										class="opacity-25"
										cx="12"
										cy="12"
										r="10"
										stroke="currentColor"
										stroke-width="4"
									></circle>
									<path
										class="opacity-75"
										fill="currentColor"
										d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
									></path>
								</svg>
								{{
									isGenerating
										? 'Generating with AI...'
										: '✨ Generate with AI'
								}}
							</button>
						</div>
					</div>
				</div>

				<!-- Right Column - Letter Preview -->
				<div class="lg:col-span-2">
					<div class="bg-white rounded-2xl shadow-lg p-8 md:p-12">
						<div class="max-w-3xl mx-auto">
							<!-- Letter Preview Header -->
							<div class="mb-6 pb-4 border-b-2 border-gray-200">
								<div
									class="flex items-center justify-between mb-4"
								>
									<div class="flex items-center gap-3">
										<h3
											class="text-sm font-semibold text-gray-500 uppercase tracking-wider"
										>
											Letter Preview
										</h3>
										<span
											class="px-2 py-1 rounded-full text-xs font-medium"
											:class="
												resignationStore.language ===
												'tagalog'
													? 'bg-blue-100 text-blue-700'
													: 'bg-gray-100 text-gray-700'
											"
										>
											{{
												resignationStore.language ===
												'tagalog'
													? '🇵🇭 Tagalog'
													: '🇺🇸 English'
											}}
										</span>
									</div>
									<span
										class="text-xs text-gray-400 flex items-center gap-1"
									>
										<svg
											class="w-4 h-4"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
											></path>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
											></path>
										</svg>
										Read Only
									</span>
								</div>

								<!-- Action Buttons for Letter -->
								<div class="grid grid-cols-2 gap-3">
									<button
										@click="generatePDF"
										:disabled="isGeneratingPDF"
										class="bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400 text-white font-semibold py-2.5 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:cursor-not-allowed"
									>
										<svg
											v-if="!isGeneratingPDF"
											class="w-5 h-5"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
											></path>
										</svg>
										<svg
											v-else
											class="w-5 h-5 animate-spin"
											fill="none"
											viewBox="0 0 24 24"
										>
											<circle
												class="opacity-25"
												cx="12"
												cy="12"
												r="10"
												stroke="currentColor"
												stroke-width="4"
											></circle>
											<path
												class="opacity-75"
												fill="currentColor"
												d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
											></path>
										</svg>
										{{
											isGeneratingPDF
												? 'Generating...'
												: 'Download PDF'
										}}
									</button>

									<button
										@click="copyToClipboard"
										class="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2.5 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
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
												d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
											></path>
										</svg>
										Copy to Clipboard
									</button>
								</div>
							</div>

							<!-- Letter Content -->
							<div
								ref="letterContent"
								contenteditable="false"
								class="prose prose-lg max-w-none space-y-6 text-gray-800 select-text bg-gray-50 p-6 rounded-lg border-2 border-gray-100"
								style="
									user-select: text;
									-webkit-user-select: text;
									pointer-events: auto;
								"
							>
								<!-- Date -->
								<p class="text-right text-gray-600">
									{{ currentDate }}
								</p>

								<!-- Manager Address -->
								<div>
									<p class="font-semibold">
										{{
											formData.managerName ||
											"[Manager's Name]"
										}}
									</p>
									<p>
										{{
											formData.companyName ||
											'[Company Name]'
										}}
									</p>
								</div>

								<!-- Salutation -->
								<p>
									Dear
									{{
										formData.managerName ||
										"[Manager's Name]"
									}},
								</p>

								<!-- Letter Body -->
								<div v-html="letterBody"></div>

								<!-- Closing -->
								<div>
									<p>{{ getClosing() }},</p>
									<p class="mt-8 font-semibold">
										{{ formData.yourName || '[Your Name]' }}
									</p>
									<p class="text-gray-600">
										{{
											formData.position ||
											'[Your Position]'
										}}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</main>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useResignationStore } from '~/stores/resignation';

const router = useRouter();
const resignationStore = useResignationStore();

// Get letter type from store
const letterType = computed(() => resignationStore.letterType);

const handleLetterTypeChange = (newType) => {
	resignationStore.setLetterType(newType);
};

// Form data from store
const formData = computed({
	get: () => resignationStore.formData,
	set: (value) => resignationStore.updateFormData(value),
});

// Current date
const currentDate = computed(() => {
	return new Date().toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});
});

// Letter content reference
const letterContent = ref(null);

// AI generation state
const isGenerating = ref(false);
const aiGeneratedBody = ref('');

// PDF generation state
const isGeneratingPDF = ref(false);

// Get user's selected reasons
const userReasons = computed(() => resignationStore.allReasons);

// Generate letter body based on type
const letterBody = computed(() => {
	// If AI has generated content, use that
	if (aiGeneratedBody.value) {
		return `<p>${aiGeneratedBody.value
			.replace(/\n\n/g, '</p><p>')
			.replace(/\n/g, '<br>')}</p>`;
	}

	// Otherwise use template-based content
	const lastDay = formData.value.lastDay
		? new Date(formData.value.lastDay).toLocaleDateString('en-US', {
				year: 'numeric',
				month: 'long',
				day: 'numeric',
		  })
		: '[Last Day of Work]';

	if (letterType.value === 'formal') {
		return `
      <p>I am writing to formally notify you of my resignation from my position as ${
			formData.value.position || '[Your Position]'
		} at ${
			formData.value.companyName || '[Company Name]'
		}. My last day of work will be ${lastDay}.</p>
      
      <p>I am grateful for the opportunities I have been given during my time with the company. The experience and knowledge I have gained here have been invaluable to my professional development, and I appreciate the support and guidance provided by you and the team.</p>
      
      <p>I am committed to ensuring a smooth transition and will do everything possible to wrap up my duties and train my replacement during my remaining time here.</p>
      
      ${formData.value.notes ? `<p>${formData.value.notes}</p>` : ''}
      
      <p>Thank you again for the opportunity to be part of the team. I wish the company continued success.</p>
    `;
	} else if (letterType.value === 'casual') {
		return `
      <p>I wanted to let you know that I've decided to move on from my role as ${
			formData.value.position || '[Your Position]'
		} at ${
			formData.value.companyName || '[Company Name]'
		}. My last day will be ${lastDay}.</p>
      
      <p>I've really enjoyed my time here and learned so much from working with you and the team. It's been a great experience, and I'm grateful for all the opportunities and support along the way.</p>
      
      <p>I'm happy to help with the transition however I can over the next couple of weeks. Let me know what would be most helpful!</p>
      
      ${formData.value.notes ? `<p>${formData.value.notes}</p>` : ''}
      
      <p>Thanks for everything, and I hope we stay in touch!</p>
    `;
	} else if (letterType.value === 'angry') {
		return `
      <p>This letter serves as my resignation from the position of ${
			formData.value.position || '[Your Position]'
		} at ${
			formData.value.companyName || '[Company Name]'
		}, effective ${lastDay}.</p>
      
      <p>After careful consideration, I've realized that this environment is no longer conducive to my professional growth or well-being. I've given this role my all, but it's become clear that it's time to move on to better opportunities.</p>
      
      <p>I'll be wrapping up my current responsibilities, but I won't be able to extend my notice period or participate in extensive transition activities beyond my stated last day.</p>
      
      ${formData.value.notes ? `<p>${formData.value.notes}</p>` : ''}
      
      <p>I wish the company well in finding my replacement.</p>
    `;
	}

	return '<p>Please select a resignation type.</p>';
});

// Get closing based on letter type
const getClosing = () => {
	if (letterType.value === 'formal') return 'Sincerely';
	if (letterType.value === 'casual') return 'Best regards';
	if (letterType.value === 'angry') return 'Regards';
	return 'Sincerely';
};

// Go back to home
const goBack = () => {
	router.push('/');
};

// Edit reasons - go back to reason page
const editReasons = () => {
	router.push('/reason');
};

// Format reason ID to readable text
const formatReason = (reasonId) => {
	// If it's a custom reason (not an ID), return as is
	if (!reasonId.includes('-')) {
		return reasonId;
	}

	// Convert kebab-case to Title Case
	return reasonId
		.split('-')
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ');
};

// Generate letter with AI
const generateWithAI = async () => {
	try {
		isGenerating.value = true;

		// Call our server API endpoint
		const response = await $fetch('/api/generate-letter', {
			method: 'POST',
			body: {
				letterType: letterType.value,
				language: resignationStore.language,
				reasons: resignationStore.reasons,
				customReason: resignationStore.customReason,
				yourName: formData.value.yourName,
				position: formData.value.position,
				managerName: formData.value.managerName,
				companyName: formData.value.companyName,
				lastDay: formData.value.lastDay,
			},
		});

		if (response.success && response.letter) {
			aiGeneratedBody.value = response.letter;
			alert(
				'✨ AI-generated letter created successfully! Check the preview.'
			);
		}
	} catch (error) {
		console.error('Error generating letter:', error);
		alert(
			'Failed to generate letter. Please check your API key configuration and try again.'
		);
	} finally {
		isGenerating.value = false;
	}
};

// Generate PDF
const generatePDF = async () => {
	// Only run on client side
	if (process.server) return;

	try {
		isGeneratingPDF.value = true;

		// Dynamically import jsPDF (client-side only)
		const { default: jsPDF } = await import('jspdf');

		// Create new PDF document
		const doc = new jsPDF({
			orientation: 'portrait',
			unit: 'mm',
			format: 'a4',
		});

		// Set up margins and dimensions
		const pageWidth = doc.internal.pageSize.getWidth();
		const pageHeight = doc.internal.pageSize.getHeight();
		const margin = 20;
		const contentWidth = pageWidth - 2 * margin;
		let yPosition = margin;

		// Add date (right aligned)
		doc.setFontSize(11);
		doc.setFont('helvetica', 'normal');
		const dateText = currentDate.value;
		const dateWidth = doc.getTextWidth(dateText);
		doc.text(dateText, pageWidth - margin - dateWidth, yPosition);
		yPosition += 10;

		// Add manager name and company
		doc.setFont('helvetica', 'bold');
		doc.text(
			formData.value.managerName || "[Manager's Name]",
			margin,
			yPosition
		);
		yPosition += 6;
		doc.setFont('helvetica', 'normal');
		doc.text(
			formData.value.companyName || '[Company Name]',
			margin,
			yPosition
		);
		yPosition += 10;

		// Add salutation
		doc.text(
			`Dear ${formData.value.managerName || "[Manager's Name]"},`,
			margin,
			yPosition
		);
		yPosition += 8;

		// Add letter body - convert HTML to plain text
		const tempDiv = document.createElement('div');
		tempDiv.innerHTML = letterBody.value;
		const bodyText = tempDiv.innerText || tempDiv.textContent || '';

		// Split text into paragraphs
		const paragraphs = bodyText.split('\n\n').filter((p) => p.trim());

		// Add each paragraph
		doc.setFontSize(11);
		paragraphs.forEach((paragraph) => {
			const lines = doc.splitTextToSize(paragraph.trim(), contentWidth);
			lines.forEach((line) => {
				// Check if we need a new page
				if (yPosition > pageHeight - margin) {
					doc.addPage();
					yPosition = margin;
				}
				doc.text(line, margin, yPosition);
				yPosition += 6;
			});
			yPosition += 4; // Space between paragraphs
		});

		// Add closing
		yPosition += 4;
		doc.text(getClosing() + ',', margin, yPosition);
		yPosition += 15;

		// Add signature section
		doc.setFont('helvetica', 'bold');
		doc.text(formData.value.yourName || '[Your Name]', margin, yPosition);
		yPosition += 6;
		doc.setFont('helvetica', 'normal');
		doc.text(
			formData.value.position || '[Your Position]',
			margin,
			yPosition
		);

		// Generate filename
		const fileName = `Resignation_Letter_${
			formData.value.yourName?.replace(/\s+/g, '_') || 'Draft'
		}_${new Date().toISOString().split('T')[0]}.pdf`;

		// Save the PDF
		doc.save(fileName);

		alert('✅ PDF downloaded successfully!');
	} catch (error) {
		console.error('Error generating PDF:', error);
		alert('Failed to generate PDF. Please try again.');
	} finally {
		isGeneratingPDF.value = false;
	}
};

// Copy to clipboard
const copyToClipboard = () => {
	if (letterContent.value) {
		const text = letterContent.value.innerText;
		navigator.clipboard.writeText(text).then(() => {
			alert('Letter copied to clipboard! 📋');
		});
	}
};

// Set default last day (2 weeks from now) if not already set
onMounted(() => {
	if (!formData.value.lastDay) {
		const twoWeeksFromNow = new Date();
		twoWeeksFromNow.setDate(twoWeeksFromNow.getDate() + 14);
		const defaultLastDay = twoWeeksFromNow.toISOString().split('T')[0];
		resignationStore.updateFormData({ lastDay: defaultLastDay });
	}
});
</script>
