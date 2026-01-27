<template>
  <header class="hero" role="banner">
    <div class="container-fluid">
      <div class="row align-items-center py-5">
        <div class="col-sm-12 col-md-6">
          <div class="hero-content">
            <div class="hero-text">
              <p>I'm</p>
              <h1>Tanuj Siripurapu</h1>
              <h2
                ref="typedElement"
                aria-label="Dynamic roles: Student, Web Developer, App Developer, Hackathon Organizer, Climber"
              ></h2>
              <div class="typed-text" aria-hidden="true">
                Student, Web Developer, App Developer, Hackathon Organizer, Climber
              </div>
            </div>
            <nav class="hero-btn" role="navigation" aria-label="Main navigation">
              <a
                class="btn"
                id="dynamic-btn"
                :href="dynamicButtonHref"
                :aria-label="dynamicButtonText"
                >{{ dynamicButtonText }}</a
              >
              <a class="btn" href="#portfolio" aria-label="View my portfolio projects">Projects</a>
              <a
                class="btn"
                href="https://cdn.tanuj.xyz/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download my resume (PDF)"
                >Resume</a
              >
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import Typed from 'typed.js'

const typedElement = ref(null)
const isMobile = ref(false)

// Mobile detection function
const detectMobile = () => {
  isMobile.value = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  )
}

// Computed properties for dynamic button
const dynamicButtonText = computed(() => {
  return isMobile.value ? 'Contact' : 'About Me'
})

const dynamicButtonHref = computed(() => {
  return isMobile.value ? '/contact' : '#about'
})

onMounted(() => {
  // Detect mobile on mount
  detectMobile()

  // Set up typed.js
  if (typedElement.value) {
    const typed = new Typed(typedElement.value, {
      strings: ['Student', 'Web Developer', 'App Developer', 'Hackathon Organizer', 'Climber'],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
      loop: true,
      showCursor: true,
      cursorChar: '|',
    })
  }

  // Listen for window resize to handle orientation changes
  window.addEventListener('resize', detectMobile)
})
</script>

<style scoped>
.hero {
  position: relative;
  width: 100%;
  padding: 120px 0 0 0;
  overflow: hidden;
  background: linear-gradient(rgba(239, 35, 60, 0.95), rgba(239, 35, 60, 0.95));
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.hero .hero-content {
  position: relative;
  padding-left: 75px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  max-width: 100%;
  overflow-x: hidden;
}

.hero .hero-text p {
  color: #ffffff;
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 15px;
}

.hero .hero-text h1 {
  color: #ffffff;
  font-size: 60px;
  font-weight: 700;
  letter-spacing: 3px;
  margin-bottom: 15px;
}

.hero .hero-text h2 {
  display: inline-block;
  margin: 0;
  height: 35px;
  color: #ffffff;
  font-size: 35px;
  font-weight: 600;
}

.hero .hero-text .typed-text {
  display: none;
}

.hero .hero-btn .btn {
  margin-top: 35px;
  color: #ef233c;
  background: #ffffff;
  box-shadow: inset 0 0 0 50px #ffffff;
}

.hero .hero-btn .btn:hover {
  color: #ffffff;
  background: transparent;
  box-shadow: inset 0 0 0 0 #ffffff;
  border-color: #ffffff;
}

.hero .hero-btn .btn {
  margin-right: 10px;
}

.hero .hero-btn .btn:last-child {
  margin-right: 0;
}

/* Responsive styles */
@media (max-width: 991.98px) {
  .hero {
    padding-top: 60px;
  }

  .hero .hero-content {
    padding: 0 15px;
  }

  .hero .hero-text p {
    font-size: 20px;
  }

  .hero .hero-text h1 {
    font-size: 45px;
  }

  .hero .hero-text h2 {
    font-size: 25px;
    height: 25px;
  }

  .hero .hero-btn .btn {
    padding: 12px 30px;
    letter-spacing: 1px;
  }
}

@media (max-width: 767.98px) {
  .hero {
    padding-top: 60px;
    padding-bottom: 60px;
  }

  .hero,
  .hero .hero-text,
  .hero .hero-btn {
    width: 100%;
    text-align: center;
  }

  .hero .hero-text p {
    font-size: 18px;
  }

  .hero .hero-text h1 {
    font-size: 35px;
  }

  .hero .hero-text h2 {
    font-size: 22px;
    height: 22px;
  }

  .hero .hero-btn .btn {
    padding: 10px 15px;
    letter-spacing: 1px;
  }
}

@media (max-width: 575.98px) {
  .hero .hero-text p {
    font-size: 16px;
  }

  .hero .hero-text h1 {
    font-size: 30px;
  }

  .hero .hero-text h2 {
    font-size: 18px;
    height: 18px;
  }

  .hero .hero-btn .btn {
    padding: 8px 10px;
    letter-spacing: 0;
  }
}
</style>
