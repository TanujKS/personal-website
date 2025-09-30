<template>
  <div class="contact-page" id="contact">
    <div class="container">
      <div class="section-header text-center">
        <p>Get In Touch</p>
        <h2>Contact Me</h2>
      </div>

      <div class="row justify-content-center">
        <div class="col-lg-8 col-md-10">
          <div class="contact-card">
            <div class="back-button-container">
              <button @click="goBack" class="btn btn-back">
                <i class="fas fa-arrow-left"></i>
                Back
              </button>
            </div>

            <div class="contact-info">
              <div class="contact-item">
                <i class="fas fa-user"></i>
                <div>
                  <h4>Name</h4>
                  <p>Tanuj Siripurapu</p>
                </div>
              </div>

              <div class="contact-item">
                <i class="fas fa-envelope"></i>
                <div>
                  <h4>Email</h4>
                  <p>contact@tanuj.xyz</p>
                </div>
              </div>

              <div class="contact-item">
                <i class="fas fa-graduation-cap"></i>
                <div>
                  <h4>Education</h4>
                  <p>University of California, Santa Barbara</p>
                </div>
              </div>
            </div>

            <div class="contact-actions">
              <button @click="downloadContactCard" class="btn btn-primary">
                <i class="fas fa-download"></i>
                Download Contact Card
              </button>

              <button @click="copyEmail" class="btn btn-outline-primary">
                <i class="fas fa-copy"></i>
                Copy Email
              </button>
            </div>

            <div class="social-links">
              <a href="https://github.com/TanujKS" target="_blank" class="social-link">
                <i class="fab fa-github"></i>
              </a>
              <a
                href="https://linkedin.com/in/tanuj-siripurapu-747b58217"
                target="_blank"
                class="social-link"
              >
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="mailto:contact@tanuj.xyz" class="social-link">
                <i class="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
  router.push('/')
}

const downloadContactCard = () => {
  // Create a temporary link element with download attribute
  const link = document.createElement('a')
  link.href = '/Tanuj Siripurapu.vcf'
  link.download = 'Tanuj Siripurapu.vcf'
  link.style.display = 'none'

  // Append to body, click, and remove
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText('contact@tanuj.xyz')
    // You could add a toast notification here
    alert('Email copied to clipboard!')
  } catch (err) {
    // Fallback for older browsers
    const textArea = document.createElement('textarea')
    textArea.value = 'contact@tanuj.xyz'
    document.body.appendChild(textArea)
    textArea.select()
    document.execCommand('copy')
    document.body.removeChild(textArea)
    alert('Email copied to clipboard!')
  }
}
</script>

<style scoped>
.contact-page {
  position: relative;
  width: 100%;
  padding: 45px 0 15px 0;
  background: #ffffff;
}

.contact-card {
  background: #ffffff;
  border-radius: 0;
  padding: 40px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.12);
  text-align: center;
  border: 2px solid #ef233c;
}

.back-button-container {
  text-align: left;
  margin-bottom: 20px;
}

.btn-back {
  background: transparent;
  color: #ef233c;
  border: 2px solid #ef233c;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 20px;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.btn-back:hover {
  background: #ef233c;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(239, 35, 60, 0.3);
}

.contact-info {
  margin-bottom: 30px;
}

.contact-item {
  display: flex;
  align-items: center;
  text-align: left;
  margin-bottom: 25px;
  padding: 20px;
  background: #dddddd;
  border-radius: 0;
}

.contact-item i {
  font-size: 24px;
  color: #ef233c;
  margin-right: 20px;
  width: 30px;
  text-align: center;
}

.contact-item h4 {
  margin: 0 0 5px 0;
  color: #414141;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.contact-item p {
  margin: 0;
  color: #797979;
  font-size: 16px;
}

.contact-actions {
  margin-bottom: 30px;
}

.contact-actions .btn {
  margin: 0 10px 10px 0;
  padding: 12px 25px;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1px;
  border: 2px solid transparent;
  border-radius: 20px;
  transition: ease-out 0.3s;
  display: inline-block;
}

.contact-actions .btn-primary {
  color: #ffffff;
  background: #ef233c;
  box-shadow: inset 0 0 0 50px #ef233c;
  border: 2px solid transparent;
}

.contact-actions .btn-primary:hover {
  color: #ef233c;
  background: transparent;
  box-shadow: inset 0 0 0 0 #ef233c;
  border-color: #ef233c;
}

.contact-actions .btn-outline-primary {
  color: #ef233c;
  background: transparent;
  box-shadow: inset 0 0 0 0 #ef233c;
  border-color: #ef233c;
}

.contact-actions .btn-outline-primary:hover {
  color: #ffffff;
  background: #ef233c;
  box-shadow: inset 0 0 0 50px #ef233c;
  border-color: #ef233c;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: #ef233c;
  color: white;
  border-radius: 50%;
  font-size: 20px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: #d32f2f;
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.12);
}

@media (max-width: 768px) {
  .contact-card {
    padding: 30px 20px;
  }

  .contact-item {
    padding: 15px;
  }

  .contact-actions .btn {
    display: block;
    width: 100%;
    margin: 0 0 10px 0;
  }
}
</style>
