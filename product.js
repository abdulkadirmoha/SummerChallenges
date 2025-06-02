document.addEventListener("DOMContentLoaded", () => {

const toggel = document.getElementById("price-toggle");
const starterCost = document.querySelector(".starter-cost");
const proCost = document.querySelector(".pro-cost");
const businessCost = document.querySelector(".business-cost");

const billingTexts = document.querySelectorAll(".price-plan-text");

const prices = {
    monthly: {
        starter: '19.99',
        pro: '24.99',
        business: '39.99',
        billingTexts: "Per month, billed monthly"
    },
    yearly: {
        starter: '199.99',
        pro: '249.99',
        business: '399.99',
        billingTexts: "Per year, billed yearly"
    }
};
function updatePricingPlan () {
    let currentPlan; 
    if(toggel.checked) {
        currentPlan = prices.yearly
    } else {
        currentPlan = prices.monthly
    }
    starterCost.textContent = currentPlan.starter;
    proCost.textContent = currentPlan.pro;
    businessCost.textContent = currentPlan.business;

    billingTexts.forEach((text) => {
      text.textContent = currentPlan.billingTexts;
    });
}

toggel.addEventListener("change", updatePricingPlan)

updatePricingPlan()
   
});
