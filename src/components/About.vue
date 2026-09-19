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
              <h2 id="about-heading">I Like Building Software</h2>
            </header>
            <div class="about-text">
              <p>
                I've been programming since I was 9 years old and have always loved software, from
                Discord bots for my friends to failed social media apps to pen-testing.
              </p>
              <p>
                I'm currently building
                <a href="https://edviro.com" target="_blank" rel="noopener noreferrer">Edviro</a>
                (YC S26), the AI-native maintenance and operations platform for facilities teams. We
                build energy models and agents that help commercial buildings, generation plants,
                and data centers save energy, money, and time.
              </p>
              <p>
                I joined my co-founder Hursh Shah in October after we met at UCSB's freshman
                orientation. We've gone from taking sales calls and writing code until 2:00 AM in
                our dorm lounge to being backed by Y Combinator and Reach Capital.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

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

/* Global `a { color: inherit }` would otherwise hide links inside the copy */
.about .about-text a {
  color: #ef233c;
  font-weight: 600;
  border-bottom: 1px solid transparent;
  transition: border-color 0.3s ease;
}

.about .about-text a:hover {
  border-bottom-color: #ef233c;
}

/* Responsive styles */
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
}
</style>
