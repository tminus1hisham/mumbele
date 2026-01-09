<!-- HomePage.vue (Vue 3 + Vuetify 3) -->
<template>
  <v-app>
    <!-- Top info bar -->
    <v-sheet class="topbar" height="36" color="primary" elevation="0">
      <v-container class="h-100 d-flex align-center justify-space-between py-0">
        <div class="d-flex align-center ga-5 text-white text-caption">
          <span class="d-inline-flex align-center ga-2">
            <v-icon size="16">mdi-phone</v-icon>
            +254 723 061 920
          </span>
          <span class="d-inline-flex align-center ga-2">
            <v-icon size="16">mdi-map-marker</v-icon>
            Machakos, Kenya
          </span>
        </div>

        <div class="d-flex align-center ga-2 text-white text-caption">
          Mon - Sat: 8:00 AM - 6:00 PM
        </div>
      </v-container>
    </v-sheet>

    <!-- Main navbar -->
    <v-app-bar class="navbar" color="primary" elevation="0" height="76">
      <v-container class="d-flex align-center">
        <v-btn
          class="d-md-none me-2"
          icon="mdi-menu"
          variant="text"
          color="white"
          @click="drawer = true"
        />

        <div class="brand d-flex align-center ga-3">
          <div class="brand-mark d-flex align-center justify-center">M</div>
          <div class="text-white">
            <div class="brand-name">MUMBELE HARDWARE</div>
          </div>
        </div>

        <v-spacer />

        <div class="d-none d-md-flex align-center ga-6">
          <v-btn
            v-for="l in navLinks"
            :key="l.key"
            variant="text"
            class="navlink"
            @click="scrollTo(l.key)"
          >
            {{ l.label }}
          </v-btn>

          <v-btn class="cta-btn" color="white" variant="tonal" @click="scrollTo('quote')">
            Get Quote
          </v-btn>
        </div>
      </v-container>
    </v-app-bar>

    <!-- Mobile drawer -->
    <v-navigation-drawer v-model="drawer" location="left" temporary>
      <v-list density="comfortable">
        <v-list-item class="py-4">
          <v-list-item-title class="text-subtitle-1 font-weight-bold">
            Mumbele Hardware
          </v-list-item-title>
          <v-list-item-subtitle>Quick navigation</v-list-item-subtitle>
        </v-list-item>

        <v-divider />

        <v-list-item
          v-for="l in navLinks"
          :key="l.key"
          :title="l.label"
          @click="
            () => {
              drawer = false
              scrollTo(l.key)
            }
          "
        />
        <v-divider class="my-2" />
        <v-list-item title="Get Quote" @click="drawer = false; scrollTo('quote')" />
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <!-- HERO -->
      <section id="home">
        <v-sheet class="hero" rounded="0">
          <div class="hero-overlay"></div>

          <v-container class="hero-inner">
            <div class="hero-content">
              <v-chip class="hero-chip" color="white" variant="tonal" size="large">
                Your Trusted Plumbing Partner
              </v-chip>

              <h1 class="hero-title">
                QUALITY PLUMBING
                <span class="hero-title-accent">SUPPLIES</span>
              </h1>

              <p class="hero-subtitle">
                From pipes and fittings to tools and fixtures, we stock everything you need for your
                plumbing projects.<br />
                Professional quality at competitive prices.
              </p>

              <div class="d-flex flex-wrap ga-4 mt-6">
                <v-btn class="hero-btn" color="primary" size="large" @click="scrollTo('products')">
                  Browse Products
                  <v-icon end>mdi-arrow-right</v-icon>
                </v-btn>

                <v-btn
                  class="hero-btn-outline"
                  color="white"
                  size="large"
                  variant="outlined"
                  @click="scrollTo('contact')"
                >
                  Contact Us
                </v-btn>
              </div>
            </div>

            <!-- Stats strip (bottom) -->
            <div class="hero-stats">
              <v-row class="ma-0" align="center">
                <v-col cols="12" md="4" class="py-4">
                  <div class="stat">
                    <div class="stat-icon">
                      <v-icon>mdi-wrench</v-icon>
                    </div>
                    <div>
                      <div class="stat-value">5000+</div>
                      <div class="stat-label">Products</div>
                    </div>
                  </div>
                </v-col>

                <v-col cols="12" md="4" class="py-4">
                  <div class="stat">
                    <div class="stat-icon">
                      <v-icon>mdi-shield-check</v-icon>
                    </div>
                    <div>
                      <div class="stat-value">15+</div>
                      <div class="stat-label">Years</div>
                    </div>
                  </div>
                </v-col>

                <v-col cols="12" md="4" class="py-4">
                  <div class="stat">
                    <div class="stat-icon">
                      <v-icon>mdi-truck-fast</v-icon>
                    </div>
                    <div>
                      <div class="stat-value">FAST</div>
                      <div class="stat-label">Delivery</div>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </div>
          </v-container>
        </v-sheet>
      </section>

      <!-- PRODUCTS -->
      <section id="products">
        <v-sheet class="section section-light">
          <v-container>
            <div class="section-head text-center">
              <v-chip class="section-chip" color="primary" variant="tonal">Our Products</v-chip>
              <h2 class="section-title">EVERYTHING YOU NEED</h2>
              <p class="section-subtitle">
                Browse our extensive range of plumbing supplies, from basic fittings to
                professional-grade equipment.
              </p>
            </div>

            <v-row class="mt-10" dense>
              <v-col v-for="p in productCards" :key="p.title" cols="12" md="4">
                <v-card class="product-card" elevation="0" rounded="xl">
                  <div class="product-icon">
                    <v-icon size="34" :icon="p.icon" />
                  </div>

                  <div class="product-title">{{ p.title }}</div>
                  <div class="product-desc">{{ p.desc }}</div>

                  <ul class="product-list">
                    <li v-for="i in p.items" :key="i">
                      <span class="dot"></span>
                      <span>{{ i }}</span>
                    </li>
                  </ul>

                  <v-btn
                    class="product-link"
                    variant="text"
                    color="primary"
                    @click="onViewProducts(p)"
                  >
                    View Products
                    <v-icon end>mdi-arrow-right</v-icon>
                  </v-btn>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-sheet>
      </section>

      <!-- WHY CHOOSE US + QUOTE -->
      <section id="about">
        <v-sheet class="section section-dark">
          <v-container>
            <v-row align="stretch" class="ga-8">
              <!-- Left: why choose us -->
              <v-col cols="12" md="5">
                <div class="why">
                  <v-chip class="why-chip" color="white" variant="tonal">Why Choose Us</v-chip>
                  <h2 class="why-title">TRUSTED BY PROFESSIONALS</h2>
                  <p class="why-subtitle">
                    For over 15 years, Mumbele Hardware has been the go-to destination for plumbers,
                    contractors, and homeowners across kenya. We pride ourselves on offering the
                    best products at the best prices.
                  </p>

                  <v-row class="mt-8" dense>
                    <v-col cols="12" md="6">
                      <div class="feature">
                        <div class="feature-icon">
                          <v-icon>mdi-check-circle-outline</v-icon>
                        </div>
                        <div>
                          <div class="feature-title">QUALITY GUARANTEED</div>
                          <div class="feature-text">
                            All our products meet international quality standards. We only stock
                            from trusted manufacturers.
                          </div>
                        </div>
                      </div>
                    </v-col>

                    <v-col cols="12" sm="6">
                      <div class="feature">
                        <div class="feature-icon">
                          <v-icon>mdi-account-group-outline</v-icon>
                        </div>
                        <div>
                          <div class="feature-title">EXPERT ADVICE</div>
                          <div class="feature-text">
                            Our experienced team is ready to help you find the right products for
                            your project.
                          </div>
                        </div>
                      </div>
                    </v-col>

                    <v-col cols="12" sm="6">
                      <div class="feature">
                        <div class="feature-icon">
                          <v-icon>mdi-timer-outline</v-icon>
                        </div>
                        <div>
                          <div class="feature-title">FAST SERVICE</div>
                          <div class="feature-text">
                            Quick order processing and same-day delivery available within Machakos.
                          </div>
                        </div>
                      </div>
                    </v-col>

                    <v-col cols="12" md="6">
                      <div class="feature">
                        <div class="feature-icon">
                          <v-icon>mdi-cash-multiple</v-icon>
                        </div>
                        <div>
                          <div class="feature-title">COMPETITIVE PRICES</div>
                          <div class="feature-text">
                            Best prices in town with special discounts for contractors and bulk
                            orders.
                          </div>
                        </div>
                      </div>
                    </v-col>
                  </v-row>
                </div>
              </v-col>

              <!-- Right: quote form -->
              <v-col cols="12" md="6" id="quote">
                <v-sheet class="quote-shell" rounded="xl">
                  <v-card class="quote-card" rounded="xl" elevation="0">
                    <div class="quote-title">GET A FREE QUOTE</div>
                    <div class="quote-text">
                      Tell us about your project and we'll provide a competitive quote within 24
                      hours.
                    </div>

                    <v-form ref="quoteForm" @submit.prevent="submitQuote">
                      <v-text-field
                        v-model="quote.name"
                        label="Your Name"
                        variant="outlined"
                        density="comfortable"
                        class="mt-6"
                        :rules="[rules.required]"
                      />
                      <v-text-field
                        v-model="quote.phone"
                        label="Phone Number"
                        variant="outlined"
                        density="comfortable"
                        :rules="[rules.required]"
                      />
                      <v-textarea
                        v-model="quote.message"
                        label="Tell us what you need..."
                        variant="outlined"
                        rows="5"
                        auto-grow
                        :rules="[rules.required]"
                      />

                      <v-btn
                        type="submit"
                        block
                        size="large"
                        color="primary"
                        class="mt-4 quote-btn"
                      >
                        Request Quote
                      </v-btn>
                    </v-form>
                  </v-card>
                </v-sheet>
              </v-col>
            </v-row>
          </v-container>
        </v-sheet>
      </section>

      <!-- CONTACT / VISIT STORE -->
      <section id="contact">
        <v-sheet class="section section-light">
          <v-container>
            <div class="section-head text-center">
              <v-chip class="section-chip" color="primary" variant="tonal">Contact Us</v-chip>
              <h2 class="section-title">VISIT OUR STORE</h2>
              <p class="section-subtitle">
                Come see our full range of products in person. Our friendly staff is ready to
                assist you.
              </p>
            </div>

            <v-row class="mt-10" dense>
              <v-col cols="12" md="3">
                <v-card class="contact-card" rounded="xl" elevation="0">
                  <div class="contact-icon">
                    <v-icon>mdi-phone</v-icon>
                  </div>
                  <div class="contact-title">PHONE</div>
                  <div class="contact-text">+254 723 061 920</div>
                  <div class="contact-text">+254 710 560 190</div>
                </v-card>
              </v-col>

              <v-col cols="12" md="3">
                <v-card class="contact-card" rounded="xl" elevation="0">
                  <div class="contact-icon">
                    <v-icon>mdi-email</v-icon>
                  </div>
                  <div class="contact-title">EMAIL</div>
                  <div class="contact-text">info@mumbelehardware.com</div>
                  <div class="contact-text">sales@mumbelehardware.com</div>
                </v-card>
              </v-col>

              <v-col cols="12" md="3">
                <v-card class="contact-card" rounded="xl" elevation="0">
                  <div class="contact-icon">
                    <v-icon>mdi-map-marker</v-icon>
                  </div>
                  <div class="contact-title">LOCATION</div>
                  <div class="contact-text"> Mukaawani Market, Machakos</div>
                  <div class="contact-text">Machakos , Nairobi</div>
                </v-card>
              </v-col>

              <v-col cols="12" md="3">
                <v-card class="contact-card" rounded="xl" elevation="0">
                  <div class="contact-icon">
                    <v-icon>mdi-clock-outline</v-icon>
                  </div>
                  <div class="contact-title">HOURS</div>
                  <div class="contact-text">Mon - Fri: 8AM - 6PM</div>
                  <div class="contact-text">Saturday: 8AM - 4PM</div>
                </v-card>
              </v-col>
            </v-row>

            <v-card color="" class="mt-12 pa-6" rounded="xl" elevation="0">
                   <div>
                       <h3>Mumbele Coordinates</h3>
                       <div id="map" style="height:80vh;"></div>
                   </div>
               </v-card>
          </v-container>
        </v-sheet>
      </section>

      <!-- FOOTER -->
      <footer>
        <v-sheet class="footer" color="primary" rounded="0">
          <v-container>
            <v-row class="py-12" dense>
              <v-col cols="12" md="4">
                <div class="brand d-flex align-center ga-3 mb-5">
                  <div class="brand-mark d-flex align-center justify-center">M</div>
                  <div class="text-white">
                    <div class="brand-name">MUMBELE HARDWARE</div>
                  </div>
                </div>

                <p class="footer-text">
                  Your trusted partner for all plumbing supplies. Quality products, expert advice,
                  competitive prices.
                </p>

                <div class="d-flex ga-3 mt-6">
                  <v-btn icon variant="tonal" color="white">
                    <v-icon>mdi-facebook</v-icon>
                  </v-btn>
                  <v-btn icon variant="tonal" color="white">
                    <v-icon>mdi-instagram</v-icon>
                  </v-btn>
                </div>
              </v-col>

              <v-col cols="12" md="2">
                <div class="footer-head">QUICK LINKS</div>
                <div class="footer-links">
                  <a href="#" @click.prevent="scrollTo('home')">Home</a>
                  <a href="#" @click.prevent="scrollTo('products')">Products</a>
                  <a href="#" @click.prevent="scrollTo('about')">About Us</a>
                  <a href="#" @click.prevent="scrollTo('contact')">Contact</a>
                </div>
              </v-col>

              <v-col cols="12" md="3">
                <div class="footer-head">PRODUCTS</div>
                <div class="footer-links">
                  <a href="#" @click.prevent="scrollTo('products')">Pipes & Tubes</a>
                  <a href="#" @click.prevent="scrollTo('products')">Fittings & Connectors</a>
                  <a href="#" @click.prevent="scrollTo('products')">Valves & Taps</a>
                  <a href="#" @click.prevent="scrollTo('products')">Bathroom Fixtures</a>
                </div>
              </v-col>

              <v-col cols="12" md="3">
                <div class="footer-head">CONTACT</div>
                <div class="footer-contact">
                  <div class="d-flex align-center ga-3">
                    <v-icon color="primary" class="footer-ico">mdi-phone</v-icon>
                    <span>+254 723 061 920</span>
                  </div>
                  <div class="d-flex align-center ga-3 mt-3">
                    <v-icon color="primary" class="footer-ico">mdi-email</v-icon>
                    <span>info@mumbelehardware.com</span>
                  </div>
                  <div class="d-flex align-center ga-3 mt-3">
                    <v-icon color="primary" class="footer-ico">mdi-map-marker</v-icon>
                    <span>F6V8+78F Mukaawani Market, Machakos</span>
                  </div>
                </div>
              </v-col>
            </v-row>

            <v-divider class="footer-divider" />

            <div class="py-6 text-center footer-copy">
              © 2026 Mumbele Hardware. All rights reserved.
            </div>
          </v-container>
        </v-sheet>
      </footer>

      <!-- Floating WhatsApp button -->
      <v-btn class="whatsapp" icon size="x-large" color="success" @click="openWhatsApp">
        <v-icon size="28">mdi-whatsapp</v-icon>
      </v-btn>
    </v-main>
  </v-app>
</template>

<script setup>

import "leaflet/dist/leaflet.css"
import * as L from 'leaflet';
import { ref, onMounted } from 'vue';

const initialMap = ref(null);

onMounted(()=> {
   initialMap.value = L.map('map').setView([-1.4867762285220347, 37.24580810004976], 10);
   L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
       maxZoom: 19,
   }).addTo(initialMap.value);
   L.marker([-1.5067762285220347, 37.21580810004976]).addTo(initialMap.value);
});

const drawer = ref(false)

const navLinks = [
  { key: "home", label: "Home" },
  { key: "products", label: "Products" },
  { key: "about", label: "About" },
  { key: "contact", label: "Contact" },
]

/**
 * Put your hero image in: src/assets/hero-plumbing.jpg
 * (or replace with your actual file)
 */
const productCards = [
  {
    icon: "mdi-pipe",
    title: "PIPES & TUBES",
    desc: "PVC, copper, and galvanized pipes in all sizes",
    items: ["PVC Pipes", "Copper Tubes", "Galvanized Pipes", "Flexible Hoses"],
  },
  {
    icon: "mdi-nut",
    title: "FITTINGS & CONNECTORS",
    desc: "Elbows, tees, couplings, and adapters",
    items: ["Elbows", "Tees", "Couplings", "Adapters"],
  },
  {
    icon: "mdi-faucet",
    title: "VALVES & TAPS",
    desc: "Ball valves, gate valves, and all types of taps",
    items: ["Ball Valves", "Gate Valves", "Kitchen Taps", "Bathroom Faucets"],
  },
  {
    icon: "mdi-tools",
    title: "TOOLS & EQUIPMENT",
    desc: "Professional plumbing tools for every job",
    items: ["Pipe Wrenches", "Cutters", "Soldering Kits", "Thread Sealant"],
  },
  {
    icon: "mdi-toilet",
    title: "BATHROOM FIXTURES",
    desc: "Toilets, sinks, and bathroom accessories",
    items: ["Toilets", "Basins", "Shower Heads", "Accessories"],
  },
  {
    icon: "mdi-water",
    title: "WATER TANKS",
    desc: "Storage tanks and water heating solutions",
    items: ["Storage Tanks", "Geysers", "Pumps", "Filters"],
  },
]

const quoteForm = ref(null)
const quote = ref({
  name: "",
  phone: "",
  message: "",
})

const rules = {
  required: (v) => (!!v && String(v).trim().length > 0) || "Required",
}

function scrollTo(id) {
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: "smooth", block: "start" })
}

function onViewProducts(card) {
  // Replace with router navigation if needed
  // router.push({ name: 'Products', query: { category: card.title } })
  console.log("View products:", card.title)
}

async function submitQuote() {
  const res = await quoteForm.value?.validate?.()
  if (!res?.valid) return

  // Replace with your API call
  console.log("Quote request:", quote.value)

  // Minimal UX feedback (replace with snackbar/toast)
  alert("Thanks! Your request has been received.")

  quote.value = { name: "", phone: "", message: "" }
  quoteForm.value?.resetValidation?.()
}

function openWhatsApp() {
  // Replace number as needed; include country code, no plus
  const phone = "+254789133844"
  const text = encodeURIComponent("Hello Mumbele Hardware, I would like to request a quote.")
  window.open(`https://wa.me/${phone}?text=${text}`, "_blank", "noopener,noreferrer")
}
</script>

<style scoped>
/* Theme note:
   - primary in Vuetify theme should be a deep navy to match the design.
   - Example primary: #1f3b5a (set in your Vuetify theme config)
*/

/* Top bar */
.topbar {
  background: rgba(15, 41, 72, 1) !important;
}

/* Navbar */
.navbar {
  background: rgba(15, 41, 72, 0.95) !important;
  backdrop-filter: blur(10px);
}

.brand-mark {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: #ff7a00;
  color: #fff;
  font-weight: 900;
}

.brand-name {
  font-weight: 800;
  letter-spacing: 0.5px;
  font-size: 16px;
}

.navlink {
  color: rgba(255, 255, 255, 0.85);
  font-weight: 600;
  text-transform: none;
}

.cta-btn {
  text-transform: none;
  font-weight: 700;
  border-radius: 10px;
}

/* Hero */
.hero {
  min-height: 78vh;
  position: relative;
  overflow: hidden;
  background:
    linear-gradient(90deg, rgba(9, 23, 43, 0.85) 0%, rgba(9, 23, 43, 0.45) 55%, rgba(9, 23, 43, 0.25) 100%),
    url("@/assets/header.png");
  background-size: cover;
  background-position: center;
  border-radius: 0;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: radial-gradient(1100px 500px at 10% 20%, rgba(255, 122, 0, 0.12), transparent 60%);
  pointer-events: none;
}

.hero-inner {
  position: relative;
  z-index: 2;
  padding-top: 54px;
  padding-bottom: 28px;
  min-height: 78vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.hero-content {
  max-width: 640px;
  padding-top: 34px;
}

.hero-chip {
  border-radius: 999px;
  font-weight: 700;
  color: #ff7a00;
}

.hero-title {
  margin: 22px 0 10px;
  font-size: clamp(42px, 5.5vw, 78px);
  line-height: 0.95;
  color: #ffffff;
  font-weight: 900;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.hero-title-accent {
  color: #ff7a00;
  display: inline-block;
}

.hero-subtitle {
  color: rgba(255, 255, 255, 0.78);
  font-size: 16px;
  line-height: 1.6;
  max-width: 560px;
}

.hero-btn {
  text-transform: none;
  font-weight: 800;
  border-radius: 12px;
}

.hero-btn-outline {
  text-transform: none;
  font-weight: 800;
  border-radius: 12px;
  border-color: rgba(255, 255, 255, 0.65);
}

.hero-stats {
  margin-top: 28px;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
}

.stat {
  display: flex;
  align-items: center;
  gap: 16px;
}

.stat-icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: rgba(255, 122, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ff7a00;
}

.stat-value {
  font-weight: 900;
  color: #ffffff;
  font-size: 20px;
}

.stat-label {
  color: rgba(255, 255, 255, 0.7);
  margin-top: 2px;
  font-size: 13px;
}

/* Sections */
.section {
  padding: 84px 0;
}

.section-light {
  background: #f2f5f8;
}

.section-dark {
  background: #0f2948;
}

.section-head {
  max-width: 760px;
  margin: 0 auto;
}

.section-chip {
  border-radius: 999px;
  font-weight: 800;
}

.section-title {
  margin: 18px 0 10px;
  font-weight: 900;
  letter-spacing: 1px;
  font-size: clamp(34px, 4vw, 54px);
  color: #1a2433;
}

.section-subtitle {
  color: rgba(26, 36, 51, 0.72);
  font-size: 18px;
  line-height: 1.7;
}

/* Product cards */
.product-card {
  background: #ffffff;
  padding: 34px 30px;
  min-height: 320px;
  border: 1px solid rgba(26, 36, 51, 0.08);
}

.product-icon {
  width: 56px;
  height: 56px;
  border-radius: 16px;
  background: rgba(255, 122, 0, 0.12);
  color: #ff7a00;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;
}

.product-title {
  font-weight: 900;
  letter-spacing: 0.5px;
  margin-bottom: 10px;
  font-size: 18px;
}

.product-desc {
  color: rgba(26, 36, 51, 0.68);
  margin-bottom: 18px;
}

.product-list {
  list-style: none;
  padding-left: 0;
  margin: 0 0 18px;
  display: grid;
  gap: 10px;
}

.product-list li {
  display: flex;
  align-items: center;
  gap: 10px;
  color: rgba(26, 36, 51, 0.78);
}

.dot {
  width: 7px;
  height: 7px;
  border-radius: 999px;
  background: #ff7a00;
  display: inline-block;
}

.product-link {
  text-transform: none;
  font-weight: 800;
  padding-left: 0;
}

/* Why + Quote */
.why-chip {
  border-radius: 999px;
  font-weight: 800;
  color: #ff7a00;
}

.why-title {
  margin: 18px 0 10px;
  font-weight: 900;
  letter-spacing: 1px;
  font-size: clamp(34px, 4vw, 54px);
  color: #ffffff;
}

.why-subtitle {
  color: rgba(255, 255, 255, 0.72);
  line-height: 1.7;
  font-size: 16px;
  max-width: 540px;
}

.feature {
  display: flex;
  gap: 14px;
  align-items: flex-start;
  padding: 18px 14px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.05);
}

.feature-icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: rgba(255, 122, 0, 0.12);
  color: #ff7a00;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
}

.feature-title {
  color: #ffffff;
  font-weight: 900;
  font-size: 13px;
  letter-spacing: 0.6px;
}

.feature-text {
  color: rgba(255, 255, 255, 0.7);
  margin-top: 6px;
  line-height: 1.55;
  font-size: 13px;
}

.quote-shell {
  background: rgba(255, 255, 255, 0.08);
  padding: 22px;
}

.quote-card {
  padding: 34px 30px;
  background: #ffffff;
}

.quote-title {
  font-weight: 900;
  letter-spacing: 1px;
  font-size: 18px;
  color: #1a2433;
}

.quote-text {
  margin-top: 10px;
  color: rgba(26, 36, 51, 0.68);
  line-height: 1.6;
}

.quote-btn {
  text-transform: none;
  font-weight: 900;
  border-radius: 12px;
  background: #ff7a00 !important;
}

/* Contact */
.contact-card {
  padding: 26px 22px;
  background: #ffffff;
  text-align: center;
  border: 1px solid rgba(26, 36, 51, 0.08);
}

.contact-icon {
  width: 54px;
  height: 54px;
  border-radius: 999px;
  background: rgba(255, 122, 0, 0.12);
  color: #ff7a00;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
}

.contact-title {
  font-weight: 900;
  letter-spacing: 0.7px;
  margin-bottom: 10px;
}

.contact-text {
  color: rgba(26, 36, 51, 0.7);
  line-height: 1.55;
}

.map-shell {
  background: #e9eef4;
  min-height: 260px;
  display: grid;
  place-items: center;
  border: 1px solid rgba(26, 36, 51, 0.08);
}

.map-placeholder {
  text-align: center;
}

.map-title {
  margin-top: 10px;
  font-weight: 900;
  color: rgba(26, 36, 51, 0.9);
}

.map-subtitle {
  margin-top: 6px;
  color: rgba(26, 36, 51, 0.65);
}

/* Footer */
.footer {
  background: #0f2948 !important;
}

.footer-text {
  color: rgba(255, 255, 255, 0.72);
  line-height: 1.7;
  max-width: 360px;
}

.footer-head {
  color: #ffffff;
  font-weight: 900;
  letter-spacing: 0.6px;
  margin-bottom: 14px;
}

.footer-links {
  display: grid;
  gap: 10px;
}

.footer-links a {
  color: rgba(255, 255, 255, 0.72);
  text-decoration: none;
  font-weight: 600;
}

.footer-links a:hover {
  color: #ffffff;
}

.footer-contact {
  color: rgba(255, 255, 255, 0.72);
  line-height: 1.6;
}

.footer-ico {
  color: #ff7a00 !important;
}

.footer-divider {
  opacity: 0.12;
}

.footer-copy {
  color: rgba(255, 255, 255, 0.6);
  font-size: 13px;
}

/* Floating WhatsApp */
.whatsapp {
  position: fixed;
  right: 18px;
  bottom: 18px;
  z-index: 50;
  border-radius: 999px;
  box-shadow: 0 10px 22px rgba(0, 0, 0, 0.28);
}
</style>
