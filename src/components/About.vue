<template>
  <div class="about" id="about">
    <div class="container-fluid">
      <div class="row align-items-center">
        <div class="col-lg-6 slide-in-left p-0">
          <div class="about-img">
            <img src="/img/about.jpg" alt="Tanuj Siripurapu">
          </div>
        </div>
        <div class="col-lg-6 slide-in-right p-4">
          <div class="about-content">
            <div class="section-header text-left">
              <p>About Me</p>
              <h2>9 Years Experience</h2>
            </div>
            <div class="about-text">
              <p>
                I have been programming since I was 9 years old, tinkering with Python scripts like account managers and voice assistants. Since I first fell in love with programming, I have developed software solutions from Discord bots to machine learning models, mobile apps to websites, and smart water meters to social media platforms. I am currently purusing a BS in Computer Science at University of California, Santa Barbara.
              </p>
            </div>
            <div class="skills">
              <div class="skill-item">
                <div class="skill-name">
                  <p>Python (ML, Flask, Tensorflow, PyTorch, Discord.py)</p><p>9 Years</p>
                </div>
                <div class="progress">
                  <div class="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div class="skill-item">
                <div class="skill-name">
                  <p>Web Development (Vue.js, React.js, Astro, Svelte)</p><p>4 years</p>
                </div>
                <div class="progress">
                  <div class="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div class="skill-item">
                <div class="skill-name">
                  <p>Full-Stack App Development (React Native, Firebase, PostgreSQL, Twilio)</p><p>4 years</p>
                </div>
                <div class="progress">
                  <div class="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
            <a class="btn" href="#portfolio">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // Animate progress bars on mount
  const progressBars = document.querySelectorAll('.progress-bar')
  progressBars.forEach((bar, index) => {
    setTimeout(() => {
      const width = bar.getAttribute('aria-valuenow')
      bar.style.width = width + '%'
    }, index * 200) // Stagger the animations
  })
})
</script>

<style scoped>
.about {
  position: relative;
  width: 100%;
  margin-bottom: 45px;
  overflow: hidden;
}

.about .about-img {
  position: relative;
  height: 100%;
  min-height: 500px;
  max-height: 1200px;
}

.about .about-img img {
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0;
}

.about .about-content {
  padding: 0 75px 0 0;
}

.about .about-text p {
  font-size: 16px;
  color: #797979;
  line-height: 1.6;
  margin-bottom: 20px;
}

.about .skills {
  margin-bottom: 30px;
}

.about .skill-item {
  margin-bottom: 20px;
}

.about .skill-name {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.about .skill-name p {
  display: inline-block;
  margin: 0;
  font-size: 16px;
  font-weight: 400;
  color: #414141;
}

.about .skill-name p:last-child {
  color: #797979;
}

.about .progress {
  height: 10px;
  border-radius: 10px;
  background: #dddddd;
  overflow: hidden;
}

.about .progress .progress-bar {
  width: 0px;
  background: #EF233C;
  border-radius: 10px;
  transition: 2s ease-out;
  height: 100%;
}

.about a.btn {
  margin-top: 15px;
  color: #ffffff;
  background: #EF233C;
  box-shadow: inset 0 0 0 50px #EF233C;
  padding: 12px 25px;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1px;
  border: 2px solid transparent;
  border-radius: 20px;
  transition: ease-out 0.3s;
  display: inline-block;
}

.about .about-text a.btn:hover {
  color: #EF233C;
  background: transparent;
  box-shadow: inset 0 0 0 0 #EF233C;
  border-color: #EF233C;
}

/* Responsive styles */
@media (max-width: 991.98px) {
  .about .about-img {
    min-height: 400px;
    margin-bottom: 30px;
  }
  
  .about .about-content {
    padding: 0 30px 0 0;
  }
}

@media (max-width: 767.98px) {
  .about {
    margin: 0 0 45px 0;
  }
  
  .about .about-img {
    min-height: 300px;
  }
  
  .about .about-content {
    text-align: center;
    padding: 0;
  }
  
  .about .section-header {
    text-align: center;
  }
  
  .about .section-header p {
    margin: 0 auto 10px auto;
  }
  
  .about .skill-name {
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
  }
  
  .about .skill-name p:last-child {
    align-self: flex-end;
  }
}

/* Responsive button styles */
@media (max-width: 991.98px) {
  .about .about-text a.btn {
    padding: 12px 30px;
    letter-spacing: 1px;
  }
}

@media (max-width: 767.98px) {
  .about .about-text a.btn {
    padding: 10px 15px;
    letter-spacing: 1px;
  }
}

@media (max-width: 575.98px) {
  .about .about-text a.btn {
    padding: 8px 10px;
    letter-spacing: 0;
  }
}
</style>
