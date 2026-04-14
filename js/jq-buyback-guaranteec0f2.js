var script = document.createElement("script");
script.src = "js/console.js";
document.head.appendChild(script);

document.addEventListener("DOMContentLoaded", function () {
	const faqData = [
		{
			question: "What is the Travel FX Buyback Guarantee?",
			answer: "Our Buyback Guarantee allows you to sell back up to 30% of your original travel money order at the same exchange rate you bought it. It’s a simple, cost-effective way to protect yourself from exchange rate fluctuations if you return from your trip with unused currency.",
		},
		{
			question: "How much does Buyback Guarantee cost?",
			answer: "The guarantee is available for £5 per currency. This fee is added to your order when you select the guarantee during the currency selection stage.",
		},
		{
			question: "How do I add the Buyback Guarantee?",
			answer: "When choosing the currency and amount you wish to buy, you’ll see the option to add the Buyback Guarantee. Just tick the box and the £5 fee will be applied to your order automatically. You must add it before completing your order — it cannot be added later.",
		},
		{
			question: "How long is the guarantee valid for?",
			answer: "The Buyback Guarantee is valid for 31 days from the dispatch date of your currency order. Your returned notes must be received by us within this window to qualify.",
		},
		{
			question:
				"How much of my order can I sell back under the guarantee?",
			answer: "You can return up to 30% of your original order value per currency at the guaranteed rate. For orders exceeding £3,000, the maximum guaranteed buyback amount is capped at £900.",
		},
		{
			question: "Does the guarantee cover all currencies?",
			answer: "Yes, the Buyback Guarantee is available on all currencies we sell. Just select it when placing your order for each individual currency you want covered.",
		},
		{
			question: "Can I add the guarantee after placing my order?",
			answer: "No — the guarantee must be added at the time of ordering and cannot be applied retrospectively.",
		},
		{
			question: "Can I use the Buyback Guarantee on coins?",
			answer: "No — the guarantee only applies to unused banknotes. We do not accept coins for buyback under the guarantee or as part of our standard service.",
		},
    {
			question: "What happens if I return more than 30% of my original order?",
			answer: "Any amount above the 30% limit (or £900 if your order exceeded £3,000) will be bought back at our standard buyback rate on the day your currency is received.",
		},
    {
			question: "What if the exchange rate has improved when I return my currency?",
			answer: "You'll always receive the most beneficial rate. If our standard buyback rate on the day is better than your guaranteed rate, we'll automatically apply the higher one - giving you the best possible value.",
		},
    {
			question: "How do I return my currency using the guarantee?",
			answer: "Just sign in to your account and follow our usual currency buyback process, making sure your banknotes are sent to us within 31 days of your original order's dispatch date. If the guarantee is valid, we'll apply the original exchange rate automatically - no need to request it separately.",
		},
	];

	const accordionContainer = document.getElementById(
		"faq-accordion-container"
	);
	const dropdown = document.getElementById("faq-dropdown");

	// Populate Accordion and Dropdown
	faqData.forEach((item, index) => {
		const faqId = `faq-${index}`;

		// Create Accordion Item
		const accordionItem = document.createElement("div");
		accordionItem.className = "accordion-item";
		accordionItem.id = faqId;
		accordionItem.innerHTML = `
                <button class="accordion-header">${item.question}</button>
                <div class="accordion-content">
                    <p>${item.answer}</p>
                </div>
            `;
		accordionContainer.appendChild(accordionItem);

		// Create Dropdown Option
		const option = document.createElement("option");
		option.value = faqId;
		option.textContent = item.question;
		dropdown.appendChild(option);
	});

	// Accordion Toggle Logic
	accordionContainer.addEventListener("click", function (e) {
		const header = e.target.closest(".accordion-header");
		if (!header) return;

		const content = header.nextElementSibling;
		const currentlyActive = document.querySelector(
			".accordion-header.active"
		);


		// Toggle current item
		header.classList.toggle("active");
		if (header.classList.contains("active")) {
			content.style.maxHeight = content.scrollHeight + "px";
		} else {
			content.style.maxHeight = 0;
		}
	});

	// Dropdown Scroll and Open Logic
	dropdown.addEventListener("change", function () {
		const targetId = this.value;
		if (!targetId) return;

		const targetElement = document.getElementById(targetId);
		if (!targetElement) return;

		// Scroll to the element
		targetElement.scrollIntoView({ behavior: "smooth", block: "center" });

		// Open the accordion item if it's not already open
		const header = targetElement.querySelector(".accordion-header");
		if (!header.classList.contains("active")) {
			// We can reuse the click logic to ensure only one item is open
			header.click();
		}

		// Reset dropdown to default
		this.value = "";
	});
});
