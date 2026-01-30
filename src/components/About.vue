<template>
  <section class="about" id="about" role="main" aria-labelledby="about-heading">
    <div class="container-fluid">
      <div class="row align-items-center">
        <div class="col-lg-6 slide-in-left about-img-col">
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
                I'm a Computer Science student at UC Santa Barbara balancing academics and
                professional work. With another student at UCSB, I'm building Edviro Energy: an
                energy management platform that provides dashboards for school districts and uses
                machine learning for anomaly detection and forecasting. We help school districts
                identify overbilling, suggest infrastructure improvements to cut down on cost and
                emissions, and resolve overbilling cases with automated agents. We have identified
                over $400K in overbilling for 7 schools with many more starting the partnership
                process soon.
              </p>
              <p>
                Through ACM Industry @ UCSB, I'm working with RTX, where I'm implementing
                RISC-V-based radio frequency classification algorithms in TensorFlow to run on FPGA
                systems. Beyond my professional work, I'm an active member of SB Hacks and 180
                Consulting, and I continue to take on freelance full-stack & agentic automation
                projects focusing on SMB operations.
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
                  <p>Full-Stack App Development (React Native, Node.js, PostgreSQL)</p>
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

.about .container-fluid {
  overflow: hidden;
}

.about .about-img-col {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 24px;
}

.about .about-img {
  position: relative;
  width: 560px;
  height: 560px;
  flex-shrink: 0;
  border-radius: 50%;
  overflow: hidden;
}

.about .about-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.about .about-content {
  padding: 0 75px 0 0;
  max-width: 100%;
  overflow: hidden;
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
  gap: 12px;
  min-width: 0;
}

.about .skill-name p {
  display: inline-block;
  margin: 0;
  font-size: 16px;
  font-weight: 400;
  color: #414141;
}

.about .skill-name p:first-child {
  min-width: 0;
  flex: 1 1 auto;
}

.about .skill-name p:last-child {
  color: #797979;
  white-space: nowrap;
  flex-shrink: 0;
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
@media (min-width: 992px) and (max-width: 1399.98px) {
  .about .skill-item {
    max-width: 420px;
  }
}

@media (max-width: 991.98px) {
  .about .about-img-col {
    padding: 30px 20px;
  }

  .about .about-img {
    width: 440px;
    height: 440px;
  }

  .about .about-content {
    padding: 0 30px 0 0;
  }
}

@media (max-width: 767.98px) {
  .about {
    margin: 0 0 45px 0;
  }

  .about .about-img-col {
    padding: 24px 16px;
  }

  .about .about-img {
    width: 280px;
    height: 280px;
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
