import "./scss/styles.scss"
import "./scss/small_businesses.scss"
import "./scss/agencies.scss"
import "./scss/freelancers.scss"
import "./scss/pricing.scss"
import "./scss/coaching.scss"
import "./scss/collaboration.scss"

import { yearlyOffer, monthlyOffer } from "./utils/pricing_offers"

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

