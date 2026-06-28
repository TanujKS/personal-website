<template>
  <section
    class="portfolio"
    id="portfolio"
    ref="portfolioRef"
    role="main"
    aria-labelledby="portfolio-heading"
  >
    <div class="container">
      <header class="section-header text-center">
        <p>My Portfolio</p>
        <h2 id="portfolio-heading">Projects & Experience</h2>
      </header>
      <div class="row portfolio-container pt-5">
        <article
          v-for="(project, index) in projects"
          :key="project.id"
          :class="[
            'col-lg-4',
            'col-md-6',
            'col-sm-12',
            'portfolio-item',
            'animate__animated',
            { animate__fadeInUp: isVisible },
          ]"
          :style="{ animationDelay: isVisible ? `${index * 0.1}s` : '0s' }"
        >
          <div class="portfolio-wrap">
            <div class="portfolio-text p-3">
              <div class="portfolio-description">
                <h3>{{ project.title }}</h3>
                <h4>{{ project.role }}</h4>
                <time class="portfolio-date" :datetime="project.date">{{ project.date }}</time>
                <p>{{ project.description }}</p>
              </div>
              <div class="portfolio-icons ml-2">
                <img
                  :src="project.image"
                  :alt="`${project.title} project screenshot`"
                  loading="lazy"
                />
                <a
                  v-if="project.link"
                  class="btn ml-auto"
                  :href="project.link"
                  target="_blank"
                  rel="noopener noreferrer"
                  :aria-label="`View ${project.title} project`"
                >
                  <i class="fa fa-arrow-up-right-from-square" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const portfolioRef = ref(null)
const isVisible = ref(false)

const projects = [
  {
    id: 12,
    title: 'Edviro (YC S26)',
    role: 'Co-Founder',
    date: 'Oct 2025 - Present',
    description:
      'Agentic energy management platform allowing facilites managers to detect, act, and verify in one platform.',
    image: '/img/portfolio-12.jpg',
    link: 'https://edviroenergy.com',
  },
  {
    id: 13,
    title: 'RTX',
    role: 'Project @ ACM Industry',
    date: 'Jan 2026 - Present',
    description:
      'Implementing RISC-V-based radio frequency classification algorithms on FPGAs. Designing classification models in Tensorflow & CI/CD pipelines for RISC-V development',
    image: '/img/portfolio-13.png',
  },
  {
    id: 1,
    title: 'MediHacks',
    role: 'Co-Founder',
    date: 'Aug 2023 - Present',
    description:
      'The MediHacks organization has hosted some of the largest global health hackathon with 1,200+ hackers and over $10,000 in cash prizes',
    image: '/img/portfolio-1.png',
    link: 'https://www.medihacks.org',
  },
  {
    id: 2,
    title: 'Torus Platforms',
    role: 'Fullstack Developer',
    date: 'Dec 2023 - Sept 2024',
    description:
      'Torus Platforms brings college students, clubs, and organizations closer together with event planning, group management, and student verification',
    image: '/img/portfolio-2.jpg',
    link: 'https://www.torusplatforms.com',
  },
  {
    id: 4,
    title: 'KSAR15',
    role: 'Board Member',
    date: 'Oct 2024 - Jul 2025',
    description:
      "Revitalized Saratoga's public radio station, KSAR15, by connecting student volunteers to create professional content on high school sports, local business, and community events",
    image: '/img/portfolio-4.jpg',
    link: 'https://www.ksar15.org',
  },
  {
    id: 5,
    title: 'Droplet',
    role: '2nd Place - CAC',
    date: 'Dec 2023',
    description:
      'A mobile app to save water by providing real-time water usage/cost estimates; detecting leaks using machine learning; and generating personalized tips on how to save water',
    image: '/img/portfolio-5.PNG',
    link: 'https://www.youtube.com/watch?v=bDuVqdedkZA',
  },
  {
    id: 6,
    title: 'National History Day',
    role: 'CA State Finalist',
    date: 'Apr 2024',
    description:
      'Created a website analyzing the 1965 Immigration Act & was recognized as a National History Day California State Finalist out of ~1600 participants',
    image: '/img/portfolio-6.png',
    link: 'https://24-02216363.nhdwebcentral.org/',
  },
  {
    id: 7,
    title: 'ZeroToAI',
    role: 'Mentor',
    date: 'May 2023 - June 2023',
    description:
      'Taught webdev and basic AI skills to local high schoolers with no coding experience through a 6-week summer program',
    image: '/img/portfolio-7.png',
    link: 'https://granthough.github.io/Zero-To-AI-Web-Apps-Website/',
  },
  {
    id: 8,
    title: 'Lossless Group',
    role: 'Software Developer',
    date: 'Apr 2025 - Present',
    description:
      'Working under VC / consultant Michael Staton to develop a website for efficiently sharing thousands of Markdown files with clients',
    image: '/img/portfolio-8.png',
    link: 'https://lossless.group',
  },
]

let observer = null

onMounted(() => {
  // Check if device supports touch (mobile device)
  const isMobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0

  // Check if Intersection Observer is supported
  if ('IntersectionObserver' in window) {
    // Create Intersection Observer to detect when portfolio is in view
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible.value = true
            // Once triggered, disconnect the observer
            observer.disconnect()
          }
        })
      },
      {
        threshold: isMobile ? 0.1 : 0.3, // Lower threshold for mobile
        rootMargin: isMobile ? '0px 0px -50px 0px' : '0px 0px -100px 0px', // Smaller margin for mobile
      },
    )

    // Start observing the portfolio
    if (portfolioRef.value) {
      observer.observe(portfolioRef.value)
    }
  } else {
    // Fallback for browsers that don't support Intersection Observer
    // Trigger animation after a short delay
    setTimeout(() => {
      isVisible.value = true
    }, 100)
  }
})

onUnmounted(() => {
  // Clean up observer
  if (observer) {
    observer.disconnect()
  }
})
</script>

<style scoped>
.portfolio {
  position: relative;
  padding: 45px 0 15px 0;
}

.portfolio .portfolio-item {
  position: relative;
  margin-bottom: 25px;
  animation-duration: 0.6s;
  animation-fill-mode: both;
  transition: all 0.3s ease-in-out;
  opacity: 0;
  transform: translateY(30px);
  will-change: opacity, transform;
  -webkit-transform: translateY(30px);
  -webkit-transition: all 0.3s ease-in-out;
}

.portfolio .portfolio-item.animate__fadeInUp {
  opacity: 1;
  transform: translateY(0);
  -webkit-transform: translateY(0);
}

.portfolio .portfolio-item:hover {
  transform: translateY(-5px);
  -webkit-transform: translateY(-5px);
}

/* Ensure smooth animations on mobile */
.portfolio .portfolio-item {
  -webkit-perspective: 1000px;
  perspective: 1000px;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

.portfolio .portfolio-wrap {
  position: relative;
  width: 100%;
}

.portfolio .portfolio-text {
  position: relative;
  min-height: 300px;
  width: calc(100% - 30px);
  margin: -30px 15px 30px 15px;
  display: flex;
  align-items: center;
  background: #ffffff;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.12);
}

.portfolio .portfolio-text h3 {
  width: calc(100% - 70px);
  font-size: 18px;
  font-weight: 600;
  word-wrap: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
  color: #414141;
  margin-bottom: 5px;
}

.portfolio .portfolio-text h4 {
  width: calc(100% - 70px);
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  color: #414141;
  margin-bottom: 5px;
}

.portfolio .portfolio-text .portfolio-date {
  width: calc(100% - 70px);
  font-size: 12px;
  font-weight: 400;
  color: #ef233c;
  margin-bottom: 8px;
  font-style: italic;
}

.portfolio .portfolio-text .portfolio-description {
  width: 100%;
}

.portfolio .portfolio-text .portfolio-description p {
  font-size: 14px;
  color: #797979;
  line-height: 1.6;
  margin-bottom: 10px;
}

.portfolio .portfolio-text .portfolio-icons {
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
}

.portfolio .portfolio-text .portfolio-icons img {
  height: 75px;
  width: 75px;
  min-width: 75px;
  min-height: 75px;
  border-radius: 75px;
  object-fit: cover;
  flex-shrink: 0;
  aspect-ratio: 1;
}

.portfolio .portfolio-text a.btn {
  margin-right: 5px;
  width: 50px;
  height: 50px;
  padding: 0 0 1px 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 45px;
  font-weight: 100;
  color: #ffffff;
  background: #ef233c;
  border: 2px solid transparent;
  border-radius: 0;
  box-shadow: inset 0 0 0 50px #ef233c;
  transition: ease-out 0.3s;
  -webkit-transition: ease-out 0.3s;
  -moz-transition: ease-out 0.3s;
  text-decoration: none;
}

.portfolio .portfolio-text i {
  font-size: 25px;
}

.portfolio .portfolio-item:hover a.btn {
  color: #ef233c;
  background: transparent;
  box-shadow: inset 0 0 0 0 #ef233c;
  border-color: #ef233c;
}

/* Portfolio container transitions */
.portfolio-container {
  transition: all 0.3s ease-in-out;
}

/* Responsive styles */
@media (max-width: 991.98px) {
  .portfolio .portfolio-text {
    min-height: 250px;
  }

  .portfolio .portfolio-text h3 {
    font-size: 16px;
  }

  .portfolio .portfolio-text h4 {
    font-size: 13px;
  }
}

@media (max-width: 767.98px) {
  .portfolio .portfolio-text {
    min-height: 200px;
    width: calc(100% - 20px);
    margin: -20px 10px 20px 10px;
  }

  .portfolio .portfolio-text h3 {
    font-size: 15px;
  }

  .portfolio .portfolio-text h4 {
    font-size: 12px;
  }

  .portfolio .portfolio-text .portfolio-description p {
    font-size: 13px;
  }

  .portfolio .portfolio-text .portfolio-icons img {
    height: 60px;
    width: 60px;
    min-width: 60px;
    min-height: 60px;
    border-radius: 60px;
    flex-shrink: 0;
    aspect-ratio: 1;
  }

  .portfolio .portfolio-text a.btn {
    width: 40px;
    height: 40px;
  }

  .portfolio .portfolio-text i {
    font-size: 20px;
  }

  /* Responsive animation adjustments */
  .portfolio .portfolio-item {
    transition: all 0.2s ease-in-out;
    -webkit-transition: all 0.2s ease-in-out;
  }

  /* Force hardware acceleration on mobile */
  .portfolio .portfolio-item {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  /* Ensure animations work on mobile */
  .portfolio .portfolio-item.animate__fadeInUp {
    -webkit-animation: fadeInUp 0.6s ease-out forwards;
    animation: fadeInUp 0.6s ease-out forwards;
  }
}

/* Add keyframes for mobile compatibility */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@-webkit-keyframes fadeInUp {
  from {
    opacity: 0;
    -webkit-transform: translateY(30px);
  }
  to {
    opacity: 1;
    -webkit-transform: translateY(0);
  }
}
</style>
