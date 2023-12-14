import "./scss/styles.scss"
import "./scss/small_businesses.scss"
import "./scss/agencies.scss"
import "./scss/freelancers.scss"
import "./scss/pricing.scss"
import "./scss/coaching.scss"
import "./scss/collaboration.scss"
import left_arrow from "./home_page_assets/arrow_left.svg"


import { yearlyOffer, monthlyOffer } from "./utils/pricing_offers"
import { allTemplates } from "./utils/dynamic_templates"

const menuButton = document.querySelector(".menuButton")
const mobileNav = document.querySelector(".mobile_nav")

menuButton.addEventListener("click", () => {
    mobileNav.classList.toggle("show")
})



/* ------------------ Desktop DOM Manipulation ----------------------- */
const headerGroupOne = document.querySelector(".header_one")
const headerGroupTwo = document.querySelector(".header_two")
const headerGroupThree = document.querySelector(".header_three")
const headerGroupFour = document.querySelector(".header_four")
const groupOne = document.querySelector(".group_one")
const groupTwo = document.querySelector(".group_two")
const groupThree = document.querySelector(".group_three")
const groupFour = document.querySelector(".group_four")
const groupFive = document.querySelector(".group_five")
const groupSix = document.querySelector(".group_six")
const productsUl = document.querySelector(".products_ul")
const industriesUl = document.querySelector(".industries_ul")
const templatesUl = document.querySelector(".templates_ul")
const resourceUl = document.querySelector(".resource_ul")
const headerEl = document.querySelector("#headerEl")
const cardHead = document.querySelector(".card-header")





/* ---------------- Navbar for Desktop View ----------------- */


/* --------------------- Products Nav Item ----------------------- */
groupOne.addEventListener("mouseover", () => {
    headerGroupTwo.classList.remove("header_group_two")
    industriesUl.classList.remove("show_industries_ul")

    headerGroupFour.classList.remove("header_group_four")
    resourceUl.classList.remove("show_resource_ul")

    headerGroupThree.classList.remove("header_group_three")
    templatesUl.classList.remove("show_templates_ul")
    headerEl.classList.remove("border_bottom")

    headerGroupOne.classList.add("header_group_one")
    productsUl.classList.add("show_products_ul")
    headerEl.classList.add("add_bg_color")
})

productsUl.addEventListener("mouseleave", () => {
    headerGroupOne.classList.remove("header_group_one")
    productsUl.classList.remove("show_products_ul")
})


/* ---------------- Industries Nav Item --------------------- */
groupTwo.addEventListener("mouseover", () => {
    headerGroupOne.classList.remove("header_group_one")
    productsUl.classList.remove("show_products_ul")

    headerGroupThree.classList.remove("header_group_three")
    templatesUl.classList.remove("show_templates_ul")

    headerGroupFour.classList.remove("header_group_four")
    resourceUl.classList.remove("show_resource_ul")
    headerEl.classList.remove("border_bottom")

    headerGroupTwo.classList.add("header_group_two")
    industriesUl.classList.add("show_industries_ul")
    headerEl.classList.add("add_bg_color")

})

industriesUl.addEventListener("mouseleave", () => {
    headerGroupTwo.classList.remove("header_group_two")
    industriesUl.classList.remove("show_industries_ul")
})


/* ------------------- Templates Nav Item --------------------- */
groupThree.addEventListener("mouseover", () => {
    headerGroupOne.classList.remove("header_group_one")
    productsUl.classList.remove("show_products_ul")

    headerGroupTwo.classList.remove("header_group_two")
    industriesUl.classList.remove("show_industries_ul")

    headerGroupFour.classList.remove("header_group_four")
    resourceUl.classList.remove("show_resource_ul")
    headerEl.classList.remove("border_bottom")

    headerGroupThree.classList.add("header_group_three")
    templatesUl.classList.add("show_templates_ul")
    headerEl.classList.add("add_bg_color")

})

templatesUl.addEventListener("mouseleave", () => {
    headerGroupThree.classList.remove("header_group_three")
    templatesUl.classList.remove("show_templates_ul")
})


/* ----------------- Resources Nav Item ------------------------- */
groupFive.addEventListener("mouseover", () => {
    headerGroupOne.classList.remove("header_group_one")
    productsUl.classList.remove("show_products_ul")

    headerGroupTwo.classList.remove("header_group_two")
    industriesUl.classList.remove("show_industries_ul")

    headerGroupThree.classList.remove("header_group_two")
    templatesUl.classList.remove("show_industries_ul")
    headerEl.classList.remove("border_bottom")

    headerGroupFour.classList.add("header_group_four")
    resourceUl.classList.add("show_resource_ul")
    headerEl.classList.add("add_bg_color")

})

resourceUl.addEventListener("mouseleave", () => {
    headerGroupThree.classList.remove("header_group_four")
    resourceUl.classList.remove("show_resource_ul")
})


/* ----------------- Prices Nav Item -------------------- */
groupFour.addEventListener("mouseover", () => {
    headerGroupOne.classList.remove("header_group_one")
    productsUl.classList.remove("show_products_ul")

    headerGroupTwo.classList.remove("header_group_two")
    industriesUl.classList.remove("show_industries_ul")

    headerGroupThree.classList.remove("header_group_three")
    templatesUl.classList.remove("show_templates_ul")
    headerEl.classList.remove("border_bottom")

    headerGroupFour.classList.remove("header_group_four")
    resourceUl.classList.remove("show_resource_ul")
    headerEl.classList.add("add_bg_color")
})


/* ---------------- Reviews Nav Item ------------------ */
groupSix.addEventListener("mouseover", () => {
    headerGroupOne.classList.remove("header_group_one")
    productsUl.classList.remove("show_products_ul")

    headerGroupTwo.classList.remove("header_group_two")
    industriesUl.classList.remove("show_industries_ul")

    headerGroupThree.classList.remove("header_group_three")
    templatesUl.classList.remove("show_templates_ul")
    headerEl.classList.remove("border_bottom")

    headerGroupFour.classList.remove("header_group_four")
    resourceUl.classList.remove("show_resource_ul")
    headerEl.classList.add("add_bg_color")
})



/* -------------- Add a box-shadow to Header Element on scroll -------------------- */
document.addEventListener("scroll", () => {
    const scrollY = document.documentElement.scrollTop

    if (scrollY > 20 && cardHead.clientWidth >= 992) {
        headerEl.classList.add("border_bottom")
        cardHead.classList.remove("desktop_border")
    } else {
        headerEl.classList.remove("border_bottom")
        cardHead.classList.add("desktop_border")
    }
})



/* ------------------- Dynamically Render Template Sub-menu ---------------------- */
const dynamicTemplate = document.querySelector(".dynamic_templates")
const firstLink = document.querySelector(".first_link")
const secondLink = document.querySelector(".second_link")
const thirdLink = document.querySelector(".third_link")
const fourthLink = document.querySelector(".fourth_link")
const fivethLink = document.querySelector(".fiveth_link")
const sixthLink = document.querySelector(".sixth_link")
const seventhLink = document.querySelector(".seventh_link")

const imgEl = document.createElement("img")
imgEl.src = `${left_arrow}`
imgEl.alt = "Right Arrow"
imgEl.classList.add("temp_left_arrow")


let isContactTemp = true
let isProposalTemp = false
let isInvoiceTemp = false
let isQuotesTemp = false
let isWorkTemp = false
let isBriefTemp = false
let isFormTemp = false



// ------------------------- Contact Template -------------------------
if (isContactTemp) {
    dynamicTemplate.innerHTML = allTemplates.contactTemplate()
    firstLink.classList.add("gray_bg")
    firstLink.appendChild(imgEl)
}


firstLink.addEventListener("click", () => {
    isContactTemp = true

    if (secondLink.classList.contains("gray_bg")) {
        secondLink.classList.remove("gray_bg")
        secondLink.removeChild(imgEl)
    }

    if (thirdLink.classList.contains("gray_bg")) {
        thirdLink.classList.remove("gray_bg")
        thirdLink.removeChild(imgEl)
    }

    if (fourthLink.classList.contains("gray_bg")) {
        fourthLink.classList.remove("gray_bg")
        fourthLink.removeChild(imgEl)
    }

    if (fivethLink.classList.contains("gray_bg")) {
        fivethLink.classList.remove("gray_bg")
        fivethLink.removeChild(imgEl)
    }

    if (sixthLink.classList.contains("gray_bg")) {
        sixthLink.classList.remove("gray_bg")
        sixthLink.removeChild(imgEl)
    }

    if (seventhLink.classList.contains("gray_bg")) {
        seventhLink.classList.remove("gray_bg")
        seventhLink.removeChild(imgEl)
    }

    if (isContactTemp) {
        isProposalTemp = false
        isInvoiceTemp = false
        isQuotesTemp = false
        isWorkTemp = false
        isBriefTemp = false
        isFormTemp = false
        dynamicTemplate.innerHTML = allTemplates.contactTemplate()
        firstLink.classList.add("gray_bg")
        firstLink.appendChild(imgEl)
    }
})


// ------------------------ Proposal Template -----------------------
secondLink.addEventListener("click", () => {
    isProposalTemp = true

    if (firstLink.classList.contains("gray_bg")) {
        firstLink.classList.remove("gray_bg")
        firstLink.removeChild(imgEl)
    }

    if (thirdLink.classList.contains("gray_bg")) {
        thirdLink.classList.remove("gray_bg")
        thirdLink.removeChild(imgEl)
    }

    if (fourthLink.classList.contains("gray_bg")) {
        fourthLink.classList.remove("gray_bg")
        fourthLink.removeChild(imgEl)
    }

    if (fivethLink.classList.contains("gray_bg")) {
        fivethLink.classList.remove("gray_bg")
        fivethLink.removeChild(imgEl)
    }

    if (sixthLink.classList.contains("gray_bg")) {
        sixthLink.classList.remove("gray_bg")
        sixthLink.removeChild(imgEl)
    }

    if (seventhLink.classList.contains("gray_bg")) {
        seventhLink.classList.remove("gray_bg")
        seventhLink.removeChild(imgEl)
    }

    if (isProposalTemp) {
        isContactTemp = false
        isInvoiceTemp = false
        isQuotesTemp = false
        isWorkTemp = false
        isBriefTemp = false
        isFormTemp = false
        dynamicTemplate.innerHTML = allTemplates.proposalTemplate()
        secondLink.classList.add("gray_bg")
        secondLink.appendChild(imgEl)
    }
})


// ------------------- Invoice Template ---------------------
thirdLink.addEventListener("click", () => {
    isInvoiceTemp = true

    if (firstLink.classList.contains("gray_bg")) {
        firstLink.classList.remove("gray_bg")
        firstLink.removeChild(imgEl)
    }

    if (secondLink.classList.contains("gray_bg")) {
        secondLink.classList.remove("gray_bg")
        secondLink.removeChild(imgEl)
    }

    if (fourthLink.classList.contains("gray_bg")) {
        fourthLink.classList.remove("gray_bg")
        fourthLink.removeChild(imgEl)
    }
    if (fivethLink.classList.contains("gray_bg")) {
        fivethLink.classList.remove("gray_bg")
        fivethLink.removeChild(imgEl)
    }
    if (sixthLink.classList.contains("gray_bg")) {
        sixthLink.classList.remove("gray_bg")
        sixthLink.removeChild(imgEl)
    }
    if (seventhLink.classList.contains("gray_bg")) {
        seventhLink.classList.remove("gray_bg")
        seventhLink.removeChild(imgEl)
    }


    if (isInvoiceTemp) {
        isProposalTemp = false
        isContactTemp = false
        isQuotesTemp = false
        isWorkTemp = false
        isBriefTemp = false
        isFormTemp = false
        dynamicTemplate.innerHTML = allTemplates.invoiceTemplate()
        thirdLink.classList.add("gray_bg")
        thirdLink.appendChild(imgEl)
    }
})


/* ---------------- Quotes Template ----------------- */
fourthLink.addEventListener("click", () => {
    isQuotesTemp = true

    if (firstLink.classList.contains("gray_bg")) {
        firstLink.classList.remove("gray_bg")
        firstLink.removeChild(imgEl)
    }

    if (secondLink.classList.contains("gray_bg")) {
        secondLink.classList.remove("gray_bg")
        secondLink.removeChild(imgEl)
    }

    if (thirdLink.classList.contains("gray_bg")) {
        thirdLink.classList.remove("gray_bg")
        thirdLink.removeChild(imgEl)
    }

    if (fivethLink.classList.contains("gray_bg")) {
        fivethLink.classList.remove("gray_bg")
        fivethLink.removeChild(imgEl)
    }
    if (sixthLink.classList.contains("gray_bg")) {
        sixthLink.classList.remove("gray_bg")
        sixthLink.removeChild(imgEl)
    }
    if (seventhLink.classList.contains("gray_bg")) {
        seventhLink.classList.remove("gray_bg")
        seventhLink.removeChild(imgEl)
    }


    if (isQuotesTemp) {
        isProposalTemp = false
        isContactTemp = false
        isInvoiceTemp = false
        isWorkTemp = false
        isBriefTemp = false
        isFormTemp = false
        dynamicTemplate.innerHTML = allTemplates.quotesTemplate()
        fourthLink.classList.add("gray_bg")
        fourthLink.appendChild(imgEl)
    }
})


/* ----------------- Work Template ---------------------- */
fivethLink.addEventListener("click", () => {
    isWorkTemp = true

    if (firstLink.classList.contains("gray_bg")) {
        firstLink.classList.remove("gray_bg")
        firstLink.removeChild(imgEl)
    }

    if (secondLink.classList.contains("gray_bg")) {
        secondLink.classList.remove("gray_bg")
        secondLink.removeChild(imgEl)
    }

    if (thirdLink.classList.contains("gray_bg")) {
        thirdLink.classList.remove("gray_bg")
        thirdLink.removeChild(imgEl)
    }

    if (fourthLink.classList.contains("gray_bg")) {
        fourthLink.classList.remove("gray_bg")
        fourthLink.removeChild(imgEl)
    }
    if (sixthLink.classList.contains("gray_bg")) {
        sixthLink.classList.remove("gray_bg")
        sixthLink.removeChild(imgEl)
    }
    if (seventhLink.classList.contains("gray_bg")) {
        seventhLink.classList.remove("gray_bg")
        seventhLink.removeChild(imgEl)
    }


    if (isWorkTemp) {
        isProposalTemp = false
        isContactTemp = false
        isInvoiceTemp = false
        isQuotesTemp = false
        isBriefTemp = false
        isFormTemp = false
        dynamicTemplate.innerHTML = allTemplates.workTemplate()
        fivethLink.classList.add("gray_bg")
        fivethLink.appendChild(imgEl)
    }
})


/* ------------------- Brief Template ------------------- */
sixthLink.addEventListener("click", () => {
    isBriefTemp = true

    if (firstLink.classList.contains("gray_bg")) {
        firstLink.classList.remove("gray_bg")
        firstLink.removeChild(imgEl)
    }

    if (secondLink.classList.contains("gray_bg")) {
        secondLink.classList.remove("gray_bg")
        secondLink.removeChild(imgEl)
    }

    if (thirdLink.classList.contains("gray_bg")) {
        thirdLink.classList.remove("gray_bg")
        thirdLink.removeChild(imgEl)
    }

    if (fourthLink.classList.contains("gray_bg")) {
        fourthLink.classList.remove("gray_bg")
        fourthLink.removeChild(imgEl)
    }
    if (fivethLink.classList.contains("gray_bg")) {
        fivethLink.classList.remove("gray_bg")
        fivethLink.removeChild(imgEl)
    }
    if (seventhLink.classList.contains("gray_bg")) {
        seventhLink.classList.remove("gray_bg")
        seventhLink.removeChild(imgEl)
    }


    if (isBriefTemp) {
        isProposalTemp = false
        isContactTemp = false
        isInvoiceTemp = false
        isQuotesTemp = false
        isWorkTemp = false
        isFormTemp = false
        dynamicTemplate.innerHTML = allTemplates.briefTemplate()
        sixthLink.classList.add("gray_bg")
        sixthLink.appendChild(imgEl)
    }
})


/* ----------------- Form Template ----------------- */
seventhLink.addEventListener("click", () => {
    isFormTemp = true

    if (firstLink.classList.contains("gray_bg")) {
        firstLink.classList.remove("gray_bg")
        firstLink.removeChild(imgEl)
    }

    if (secondLink.classList.contains("gray_bg")) {
        secondLink.classList.remove("gray_bg")
        secondLink.removeChild(imgEl)
    }

    if (thirdLink.classList.contains("gray_bg")) {
        thirdLink.classList.remove("gray_bg")
        thirdLink.removeChild(imgEl)
    }

    if (fourthLink.classList.contains("gray_bg")) {
        fourthLink.classList.remove("gray_bg")
        fourthLink.removeChild(imgEl)
    }
    if (fivethLink.classList.contains("gray_bg")) {
        fivethLink.classList.remove("gray_bg")
        fivethLink.removeChild(imgEl)
    }
    if (sixthLink.classList.contains("gray_bg")) {
        sixthLink.classList.remove("gray_bg")
        sixthLink.removeChild(imgEl)
    }


    if (isFormTemp) {
        isProposalTemp = false
        isContactTemp = false
        isInvoiceTemp = false
        isQuotesTemp = false
        isWorkTemp = false
        isBriefTemp = false
        dynamicTemplate.innerHTML = allTemplates.formTemplate()
        seventhLink.classList.add("gray_bg")
        seventhLink.appendChild(imgEl)
    }
})




/* ----------------- Toogleing Pricing Offers ---------------------- */
const offerContainer = document.querySelector(".offer_container")
const toggleContainer = document.querySelector(".toggle_container")
const toggleMonthly = document.querySelector(".toggle_monthly")
const toggleYearly = document.querySelector(".toggle_yearly")


let toggleOffer = true

if (toggleOffer) {
    offerContainer.innerHTML = yearlyOffer()
    toggleYearly.classList.add("background_toggle")
}


toggleContainer.addEventListener("click", () => {
    toggleOffer = !toggleOffer

    if (toggleOffer) {
        offerContainer.innerHTML = yearlyOffer()
        toggleMonthly.classList.remove("background_toggle")
        toggleYearly.classList.add("background_toggle")
    } else {
        offerContainer.innerHTML = monthlyOffer()
        toggleYearly.classList.remove("background_toggle")
        toggleMonthly.classList.add("background_toggle")
    }
})





