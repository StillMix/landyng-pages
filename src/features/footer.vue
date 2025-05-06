<template>
  <footer class="site-footer">
    <div class="footer-container">

      <div class="footer-column logo-column">
        <img src="@/assets/logo2.png" alt="ONR Курск" class="footer-logo">
        <p class="company-description">
          ООО "Оперативные и надежные решения" - разработка сложных IT-решений с 2022 года
        </p>
      </div>


      <div class="footer-column contacts-column">
        <h3 class="footer-title">Контакты</h3>
        <div class="contact-item">
          <img src="@/assets/icons/maps.png" alt="Адрес">
          <span>305014, г. Курск, ул. Карла Маркса, 101 А</span>
        </div>
        <div class="contact-item">
          <img src="@/assets/icons/telephone.png" alt="Телефон">
          <a href="tel:+79045206449">+7-904-520-64-49</a>
        </div>
        <div class="contact-item">
          <img src="@/assets/icons/mail.png" alt="Email">
          <a href="mailto:info@onr-kursk.ru">info@onr-kursk.ru</a>
        </div>
        <div class="contact-item">
          <img src="@/assets/icons/mail2.png" alt="Email">
          <a href="mailto:mirgaleev@onr-kursk.ru">mirgaleev@onr-kursk.ru</a>
        </div>
      </div>


      <div class="footer-column ">
        <h3 class="footer-title">Навигация</h3>
        <nav class="footer-nav">
          <a href="#home" class="nav-link">Главная</a>
          <a href="#services" class="nav-link">Решения</a>
          <a href="#partners" class="nav-link">Партнеры</a>
          <a href="#aboutUS" class="nav-link">О компании</a>
        </nav>
      </div>


      <div class="footer-column ">
        <h3 class="footer-title">Мы работаем</h3>
        <p class="working-hours">Пн-Пт: 9:00 - 18:00</p>
        <p class="working-hours">Сб-Вс: выходной</p>

      </div>
    </div>


    <div class="copyright">
      <p>&copy; ООО "Оперативные и надежные решения", Курск 2025. Все права защищены.</p>
      <div class="legal-links">
        <a href="#">Политика конфиденциальности</a>
        <a href="#">Пользовательское соглашение</a>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.site-footer {
  background: var(--bg-secondary);
  color: var(--text-secondary);
  padding: 60px 0 20px;
  font-family: 'Helvetica Neue', Arial, sans-serif;
}

.footer-container {
  max-width: 1360px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
}

.footer-column {
  margin-bottom: 30px;
}

.footer-title {
  color: var(--text-footer);
  font-size: 1.2rem;
  margin-bottom: 20px;
  position: relative;
  padding-bottom: 10px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 2px;
    background: var(--text-footer);
  }
}

.footer-logo {
  width: 180px;
  margin-bottom: 20px;
}

.company-description {
  line-height: 1.6;
  opacity: 0.8;
  margin-bottom: 20px;
}

.social-links {
  display: flex;
  gap: 15px;
  margin-top: 20px;
}

.social-link {
  display: inline-block;
  width: 36px;
  height: 36px;
  background: rgba(255,255,255,0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background: var(--text-footer);
    transform: translateY(-3px);
  }

  img {
    width: 18px;
    height: 18px;
  }
}

.contact-item {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  gap: 10px;

  img {
    width: 20px;
    opacity: 0.7;
  }

  a {
    color: var(--text-secondary);
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: var(--text-footer);
    }
  }
}

.footer-nav {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.nav-link {
  color: var(--bg-secondary);
  text-decoration: none;
  transition: color 0.3s ease;
  opacity: 0.8;

  &:hover {
    color: var(--text-footer);
    opacity: 1;
  }
}

.working-hours {
  margin-bottom: 10px;
  opacity: 0.8;
}

.copyright {
  text-align: center;
  padding-top: 30px;
  margin-top: 40px;
  border-top: 1px solid rgba(255,255,255,0.1);
  font-size: 0.9rem;
  opacity: 0.7;
}

.legal-links {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  gap: 20px;

  a {
    color: var(--text-secondary);
    text-decoration: none;
    font-size: 0.8rem;
    transition: color 0.3s ease;

    &:hover {
      color: var(--text-footer);
    }
  }
}

@media (max-width: 768px) {
  .footer-container {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 480px) {
  .footer-container {
    grid-template-columns: 1fr;
  }

  .copyright {
    text-align: left;
  }

  .legal-links {
    flex-direction: column;
    gap: 5px;
    align-items: flex-start;
  }
}
</style>
