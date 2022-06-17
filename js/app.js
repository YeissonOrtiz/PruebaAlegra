Vue.component('header-component', {
  data: function () {
    return {
      infoHeader: {
        srcLogo: '../images/logo_header.png',
        title: 'Software de e-CF certificados por la DGII',
        subtitle: '¡La solución completa para tu empresa!',
        description: 'Un software contable a la medida de tu empresa. Contabilidad automatizada, reportes inteligentes, funciones ilimitadas y un ejecutitvo de cuenta asignado.'
      },
    }
  },

  template: `<header class="header">
    <picture class="header__logo">
      <img :src="infoHeader.srcLogo" alt="logo" class="header__logo-img">
    </picture>
    <div class="header__title">
      <h1 class="header__title-text">{{ infoHeader.title }}</h1>
      <h2 class="header__title-subtext">{{ infoHeader.subtitle }}</h2>
      <p class="header__title-description">{{ infoHeader.description }}</p>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FFFFFF"   fill-opacity="1" d="M0,64L48,64C96,64,192,64,288,69.3C384,75,480,85,576,117.3C672,149,768,203   864,229.3C960,256,1056,256,1152,256C1248,256,1344,256,1392,256L1440,256L1440,320L1392,320C1344   320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288   320C192,320,96,320,48,320L0,320Z"></path></svg>
  </header>`
});

Vue.component('form-component', {
  data: function () {
    return {
      infoForm: {
        fullnamePlaceholder: 'Nombre completo *',
        emailPlaceholder: 'Correo electrónico *',
        phonePlaceholder: 'Teléfono *',
        buttonText: 'AGENDAR LLAMADA',
      },
    }
  },

  template: `<form class="form">
    <div class="form__input-group">
      <input type="text" class="form__input" :placeholder="infoForm.fullnamePlaceholder" required>
      <input type="email" class="form__input" :placeholder="infoForm.emailPlaceholder" required>
      <input type="tel" class="form__input" :placeholder="infoForm.phonePlaceholder" required>
      <button type="submit" class="form__button">{{ infoForm.buttonText }}</button>
      </div>
  </form>`
});


Vue.component('logos-component', {
  data: function () {
    return {
      infoLogos: {
        srcLogo1: '../images/logo_1.png',
        srcLogo2: '../images/logo_2.png',
        srcLogo3: '../images/logo_3.png',
        srcLogo4: '../images/logo_4.png',
      },
    }
  },
});

new Vue({
  el: '#app',

  data: {
    
  }
})