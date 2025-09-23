<template>
  <section class="about" id="about" role="main" aria-labelledby="about-heading">
    <div class="container-fluid">
      <div class="row align-items-center">
        <div class="col-lg-6 slide-in-left p-0">
          <div class="about-img">
            <img
              src="/img/about.jpg"
              alt="Tanuj Siripurapu, Computer Science student and full-stack developer"
              loading="lazy"
            />
          </div>
        </div>
        <div class="col-lg-6 slide-in-right p-4">
          <div class="about-content">
            <header class="section-header text-left">
              <p>About Me</p>
              <h2 id="about-heading">9 Years Experience</h2>
            </header>
            <div class="about-text">
              <p>
                I have been programming since I was 9 years old, tinkering with Python scripts like
                account managers and voice assistants. Since I first fell in love with programming,
                I have developed software from Discord bots to machine learning models, mobile apps
                to websites, and smart water meters to social media platforms. I am currently
                pursuing a BS in Computer Science at University of California, Santa Barbara, where
                I focus on full-stack development, machine learning, and software engineering.
              </p>
              <p>
                As a passionate developer and hackathon organizer, I co-founded MediHacks, one of
                the largest global health hackathons with over 1,200 participants. I specialize in
                Python development, web technologies like Vue.js and React, and have extensive
                experience building scalable applications and machine learning solutions.
              </p>
            </div>
            <div class="skills" role="list" aria-label="Technical skills and experience">
              <div class="skill-item" role="listitem">
                <div class="skill-name">
                  <p>Python (ML, Flask, Tensorflow, PyTorch, Discord.py)</p>
                  <p>9 Years</p>
                </div>
                <div
                  class="progress"
                  role="progressbar"
                  aria-valuenow="95"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-label="Python experience: 95%"
                >
                  <div
                    class="progress-bar"
                    role="progressbar"
                    aria-valuenow="95"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div class="skill-item" role="listitem">
                <div class="skill-name">
                  <p>Web Development (Vue.js, React.js, Astro, Svelte)</p>
                  <p>4 years</p>
                </div>
                <div
                  class="progress"
                  role="progressbar"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-label="Web development experience: 50%"
                >
                  <div
                    class="progress-bar"
                    role="progressbar"
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div class="skill-item" role="listitem">
                <div class="skill-name">
                  <p>Full-Stack App Development (React Native, Firebase, PostgreSQL, Twilio)</p>
                  <p>4 years</p>
                </div>
                <div
                  class="progress"
                  role="progressbar"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-label="Full-stack development experience: 50%"
                >
                  <div
                    class="progress-bar"
                    role="progressbar"
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
            <a class="btn" href="#portfolio" aria-label="View my portfolio projects">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  </section>
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
  max-width: 100%;
  overflow-x: hidden;
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
  background: #ef233c;
  border-radius: 10px;
  transition: 2s ease-out;
  height: 100%;
}

.about a.btn {
  margin-top: 15px;
  color: #ffffff;
  background: #ef233c;
  box-shadow: inset 0 0 0 50px #ef233c;
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
  color: #ef233c;
  background: transparent;
  box-shadow: inset 0 0 0 0 #ef233c;
  border-color: #ef233c;
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
