Vue.component('navbar-component', {
    data: function () {
      return {
        infoHeader: {
          srcLogo: '../images/logo_header.png',
        },
      }
    },
    template: `<div class="navbar">
    <picture class="navbar-logo">
      <img :src="infoHeader.srcLogo" alt="logo" class="navbar-logo-img">
    </picture>
    </div>`,
  })

Vue.component('header-component', {
  data: function () {
    return {
      infoHeader: {
        srcLogo: '../images/logo_header.png',
        srcCurve: '../images/curve_header.png',
        title: 'Software de e-CF certificados por la DGII',
        subtitle: '¡La solución completa para tu empresa!',
        description: 'Un software contable a la medida de tu empresa. Contabilidad automatizada, reportes inteligentes, funciones ilimitadas y un ejecutitvo de cuenta asignado.'
      },
    }
  },

  template: `<header class="header">
    <div class="header__title">
      <h1 class="header__title-text">{{ infoHeader.title }}</h1>
      <h2 class="header__title-subtext">{{ infoHeader.subtitle }}</h2>
      <p class="header__title-description">{{ infoHeader.description }}</p>
    </div>
    <picture class="header__curve">
      <img :src="infoHeader.srcCurve" alt="logo" class="header__curve-img">
    </picture>
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
        srcLogo1: '../images/el_dia.png',
        srcLogo2: '../images/la_nacion_dominicana.png',
        srcLogo3: '../images/redaccion_rd.png',
        srcLogo4: '../images/el_nuevo_diario.png',
      },
    }
  },

  template: `<div class="logos">
    <picture class="logos__logo">
      <img :src="infoLogos.srcLogo1" alt="logo" class="logos__logo-img">
    </picture>
    <picture class="logos__logo">
      <img :src="infoLogos.srcLogo2" alt="logo" class="logos__logo-img">
    </picture>
    <picture class="logos__logo">
      <img :src="infoLogos.srcLogo3" alt="logo" class="logos__logo-img">
    </picture>
    <picture class="logos__logo">
      <img :src="infoLogos.srcLogo4" alt="logo" class="logos__logo-img">
    </picture>
  </div>`
});

Vue.component('solutions-component', {
  data: function () {
    return {
      titleOne: 'Conoce nuestra ',
      titleTwo: 'solución corporativa',
    }
  },

  template: `<div class="solutions">
  <div class="solutions__title">
    <h2 class="solutions__title-text">{{ titleOne }} <span>{{ titleTwo }}</span></h2>
  </div>
  <div class="solutions__content">
    <slot></slot>
  </div>
  </div>`
});

Vue.component('card-component', {
  props: ['solution'],

  data: function () {
    return {
    }
  },

  template: `<div class="card">
    <div class="card__header">
      <picture class="card__logo">
        <img :src="solution.srcLogo" alt="logo" class="card__logo-img">
      </picture>
      <h3 class="card__title">{{ solution.title }}</h3>
    </div>
    <p class="card__description">{{ solution.description }}</p>
  </div>`
});


Vue.component('list-component', {
  data: function () {
    return {
      titleOne: 'Toma el control',
      titleTwo: 'de tu empresa',
      titleThree: 'desde cualquier lugar',
      titleFour: 'con la app móvil',
      listLogo: '../images/listlogo.png',
      appStore: '../images/appstore.png',
      playStore: '../images/playstore.png',
    }
  },

  template: `<div class="containerlist">
    <picture class="containerlist__logo">
      <img :src="listLogo" alt="logo" class="containerlist__logo-img">
    </picture>
    <div class="containerlist__content">
      <div class="content__title">
        <h2 class="content__title-text">{{ titleOne }} <span>{{ titleTwo }}</span> {{ titleThree }} <span>{{ titleFour }}</span></h2>
      </div>
      <ul class="content__list">
        <slot></slot>
      </ul>
      <div class="content__download">
        <picture class="content_download-logo">
          <img :src="appStore" alt="logo" class="content_download-logo-img">
        </picture>
        <picture class="content_download-logo">
          <img :src="playStore" alt="logo" class="content_download-logo-img">
        </picture>
      </div>
    </div>
  </div>`
});

Vue.component('footer-component', {
  data: function () {
    return {
      infoFooter: {
        curve: '../images/footer/curve_footer.png',
        logo1: '../images/footer/logo1.png',
        logo2: '../images/footer/logo2.png',
        logo3: '../images/footer/logo3.png',
        logo4: '../images/footer/logo4.png',
      }
    }
  },

  template: `<footer class="footer">
    <picture class="footer__curve">
      <img :src="infoFooter.curve" alt="curve" class="footer__curve-img">
    </picture>
    <div class="footer__content">
      <div class="footer__content__title">
        <h2 class="footer__content__title-text">Empresas que crecen junto a Alegra</h2>
      </div>
      <div class="footer__content-logos">
        <picture class="footer__content-logos-logo">
          <img :src="infoFooter.logo1" alt="logo" class="footer__content-logos-logo-img">
        </picture>
        <picture class="content_logos__logo">
          <img :src="infoFooter.logo2" alt="logo" class="footer__content-logos-logo-img">
        </picture>
        <picture class="content_logos__logo">
          <img :src="infoFooter.logo3" alt="logo" class="footer__content-logos-logo-img">
        </picture>
        <picture class="content_logos__logo">
          <img :src="infoFooter.logo4" alt="logo" class="footer__content-logos-logo-img">
        </picture>
      </div>
    </div>
    <p class="footer_copyright">
      COPYRIGHT © 2020 Soluciones Alegra. S.A.S.
    </p>
    </footer>`
});

new Vue({
  el: '#app',

  data: {
    infoSolutions: {
      first_solution: {
        srcLogo: '../images/solutions/first.png',
        title: 'Ejecutivo de cuenta',
        description: 'Recibirás el apoyo de un agente especializado listo para ayudarte.'
      },
      second_solution: {
        srcLogo: '../images/solutions/second.png',
        title: 'Facturación electrónica',
        description: 'Emite facturas electrónicas sin limites en ingresos o número de comprobantes.'
      },
      third_solution: {
        srcLogo: '../images/solutions/third.png',
        title: 'Contabilidad automatizada',
        description: 'Ingresa tus ventas. Alegra se encarga de lo demas.'
      },
      fourth_solution: {
        srcLogo: '../images/solutions/fourth.png',
        title: 'Reportes inteligentes',
        description: 'Accede a reportes contables cuando lo necesites y siempre actualizados.'
      },
      fifth_solution: {
        srcLogo: '../images/solutions/fifth.png',
        title: 'Integración con otros sistemas',
        description: 'Conecta Alegra con tus plataformas favoritas en tan solo un click.'
      },
      sixth_solution: {
        srcLogo: '../images/solutions/sixth.png',
        title: 'Centro de costos',
        description: 'Controla cada uno de tus proyectos monitoreando tus recursos en tiempo real.'
      },
    },
    listItems: [
      'Crea facturas de ventas y cotizaciones de forma ágil y sencilla',
      'Crear productos y servicios con un par de clicks',
      'Consulta tu inventario, facturas y cotizaciones desde casa',
      'Registra en segundos tus facturas de proveedores y agrega los pagos que realices',
      'Gestiona tus gastos en tiempo real'
    ]
  }
})