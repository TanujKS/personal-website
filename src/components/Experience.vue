<template>
  <div class="experience" id="experience">
    <div class="container">
      <header class="section-header text-center animate__animated animate__zoomIn" data-wow-delay="0.1s">
        <p>My Resume</p>
        <h2>Awards & Recognition</h2>
      </header>
      <div class="timeline" ref="timelineRef">
        <div 
          v-for="(award, index) in awards" 
          :key="award.id"
          :class="[
            'timeline-item',
            award.position,
            'animate__animated',
            { [award.animation]: isVisible }
          ]"
          :style="{ animationDelay: isVisible ? `${index * 0.1}s` : '0s' }"
        >
          <div class="timeline-text">
            <div class="timeline-date">{{ award.date }}</div>
            <h2>{{ award.title }}</h2>
            <h4>{{ award.subtitle }}</h4>
            <p>{{ award.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const timelineRef = ref(null)
const isVisible = ref(false)

const awards = [
  {
    id: 1,
    date: 'January 2023',
    title: '1st Place',
    subtitle: 'MSET Health Hackathon (70+ participants)',
    description: 'Recognized for ZeroResponders: an app using AI to connect volunteers with medical emergencies faster than EMS in developing nations',
    position: 'left',
    animation: 'animate__slideInLeft'
  },
  {
    id: 2,
    date: 'April 2023',
    title: '1st Place',
    subtitle: 'EducateHacks (650+ participants)',
    description: 'Recognized for ProtectEd: AI to streamline communication in the event of a school shooting',
    position: 'right',
    animation: 'animate__slideInRight'
  },
  {
    id: 3,
    date: 'July 2023',
    title: '1st Place',
    subtitle: 'LearnHacks (150+ participants)',
    description: 'Recognized for overall idea creation, execution, and technical complexity with WriteRight, AI grammar-checking built with students in mind',
    position: 'left',
    animation: 'animate__slideInLeft'
  },
  {
    id: 4,
    date: 'December 2023',
    title: '2nd Place',
    subtitle: 'Congressional App Challenge (CA-16)',
    description: 'Recognized for creating Droplet, a mobile application that uses machine learning to help save water and money for CA residents',
    position: 'right',
    animation: 'animate__slideInRight'
  },
  {
    id: 5,
    date: 'April 2024',
    title: 'CA State Finalist',
    subtitle: 'National History Day',
    description: 'Recognized as 1 of 12 finalists in the state of California for researching, writing, and developing a website about the causes, effects, and significance of the 1965 Immigration Act (Hart-Celler Act)',
    position: 'left',
    animation: 'animate__slideInLeft'
  },
  {
    id: 6,
    date: 'April 2024',
    title: 'Percussion Scholastic World Finalists',
    subtitle: 'Winter Guard International',
    description: 'Saratoga High\'s Winter Percussion drumline was recognized as a finalist amongst the best programs in the world at the World Championships in Dayton, OH for the first time in the school\'s history',
    position: 'right',
    animation: 'animate__slideInRight'
  },
  {
    id: 7,
    date: 'February 2025',
    title: 'National Merit Finalist',
    subtitle: 'National Merit Scholarship Corporation',
    description: 'Awarded to ~1% of high schoolers nationwide',
    position: 'left',
    animation: 'animate__slideInLeft'
  }
]

let observer = null

onMounted(() => {
  // Check if device supports touch (mobile device)
  const isMobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0
  
  // Check if Intersection Observer is supported
  if ('IntersectionObserver' in window) {
    // Create Intersection Observer to detect when timeline is in view
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
        rootMargin: isMobile ? '0px 0px -50px 0px' : '0px 0px -100px 0px' // Smaller margin for mobile
      }
    )

    // Start observing the timeline
    if (timelineRef.value) {
      observer.observe(timelineRef.value)
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
.experience {
  position: relative;
  padding: 45px 0 15px 0;
}

.experience .timeline {
  position: relative;
  width: 100%;
}

.experience .timeline::after {
  content: '';
  position: absolute;
  width: 2px;
  background: #EF233C;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -1px;
}

.experience .timeline .timeline-item {
  position: relative;
  background: inherit;
  width: 50%;
  margin-bottom: 30px;
  opacity: 0;
  transform: translateX(0);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  will-change: opacity, transform;
  -webkit-transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.experience .timeline .timeline-item.left {
  left: 0;
  padding-right: 30px;
  transform: translateX(-50px);
  -webkit-transform: translateX(-50px);
}

.experience .timeline .timeline-item.right {
  left: 50%;
  padding-left: 30px;
  transform: translateX(50px);
  -webkit-transform: translateX(50px);
}

.experience .timeline .timeline-item.animate__slideInLeft,
.experience .timeline .timeline-item.animate__slideInRight {
  opacity: 1;
  transform: translateX(0);
  -webkit-transform: translateX(0);
}

.experience .timeline .timeline-item::after {
  content: '';
  position: absolute;
  width: 16px;
  height: 16px;
  top: 48px;
  right: -8px;
  background: #ffffff;
  border: 2px solid #EF233C;
  border-radius: 50%;
  z-index: 1;
}

.experience .timeline .timeline-item.right::after {
  left: -8px;
}

.experience .timeline .timeline-item::before {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  top: 46px;
  right: 10px;
  z-index: 1;
  border: 10px solid;
  border-color: transparent transparent transparent #dddddd;
}

.experience .timeline .timeline-item.right::before {
  left: 10px;
  border-color: transparent #dddddd transparent transparent;
}

.experience .timeline .timeline-date {
  position: absolute;
  width: 100%;
  top: 44px;
  font-size: 16px;
  font-weight: 600;
  color: #EF233C;
  text-transform: uppercase;
  letter-spacing: 1px;
  z-index: 1;
}

.experience .timeline .timeline-item.left .timeline-date {
  text-align: left;
  left: calc(100% + 55px);
}

.experience .timeline .timeline-item.right .timeline-date {
  text-align: right;
  right: calc(100% + 55px);
}

.experience .timeline .timeline-text {
  padding: 30px;
  background: #ffffff;
  position: relative;
  border-right: 5px solid #dddddd;
  box-shadow: 0 0 60px rgba(0, 0, 0, .08);
}

.experience .timeline .timeline-item.right .timeline-text {
  border-right: none;
  border-left: 5px solid #dddddd;
}

.experience .timeline .timeline-text h2 {
  margin: 0 0 5px 0;
  font-size: 22px;
  font-weight: 600;
  color: #414141;
}

.experience .timeline .timeline-text h4 {
  margin: 0 0 10px 0;
  font-size: 16px;
  font-style: italic;
  font-weight: 400;
  color: #414141;
}

.experience .timeline .timeline-text p {
  margin: 0;
  font-size: 16px;
  color: #797979;
  line-height: 1.6;
}

/* Responsive styles */
@media (max-width: 767.98px) {
  .experience .timeline::after {
    left: 8px;
  }

  .experience .timeline .timeline-item {
    width: 100%;
    padding-left: 38px;
  }
  
  .experience .timeline .timeline-item.left {
    padding-right: 0;
  }
  
  .experience .timeline .timeline-item.right {
    left: 0%;
    padding-left: 38px;
  }

  .experience .timeline .timeline-item.left::after, 
  .experience .timeline .timeline-item.right::after {
    left: 0;
    right: auto;
  }
  
  .experience .timeline .timeline-item.left::before,
  .experience .timeline .timeline-item.right::before {
    left: 18px;
    border-color: transparent #dddddd transparent transparent;
  }
  
  .experience .timeline .timeline-item.left .timeline-date,
  .experience .timeline .timeline-item.right .timeline-date {
    position: relative;
    top: 0;
    right: auto;
    left: 0;
    text-align: left;
    margin-bottom: 10px;
  }
  
  .experience .timeline .timeline-item.left .timeline-text,
  .experience .timeline .timeline-item.right .timeline-text {
    border-right: none;
    border-left: 5px solid #dddddd;
  }
}

/* Animation customizations */
.animate__slideInLeft {
  animation-name: slideInLeft;
}

.animate__slideInRight {
  animation-name: slideInRight;
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@-webkit-keyframes slideInLeft {
  from {
    opacity: 0;
    -webkit-transform: translateX(-50px);
  }
  to {
    opacity: 1;
    -webkit-transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@-webkit-keyframes slideInRight {
  from {
    opacity: 0;
    -webkit-transform: translateX(50px);
  }
  to {
    opacity: 1;
    -webkit-transform: translateX(0);
  }
}
</style>
