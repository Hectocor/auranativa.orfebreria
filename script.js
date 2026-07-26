/**
 * AURA NATIVA ORFEBRERÍA - LÓGICA PRINCIPAL (JAVASCRIPT PURO)
 * Talca, Región del Maule, Chile
 */

document.addEventListener('DOMContentLoaded', () => {
  /* ==========================================================================
     1. ARREGLO DE PRODUCTOS DEL CATÁLOGO (Incluye Joya Corazón de Lapislázuli)
     ========================================================================== */
  const productos = [
    {
      id: 0,
      nombre: "Colgante Corazón de Lapislázuli",
      categoria: "lapislazuli",
      materiales: "Plata 950 y Lapislázuli natural chileno",
      tecnica: "Orfebrería artesanal, engaste en bisel y lapidación manual",
      inspiracion: "El amor por nuestra tierra maulina y sus gemas autóctonas",
      descripcion: "Hermoso colgante en forma de corazón tallado artesanalmente en piedra lapislázuli de intenso azul nativo, engastado en un fino bisel de plata 950 con cadena de eslabones artesanales. Presentado sobre fondo de naturaleza maulina.",
      disponibilidad: "Por encargo",
      precio: "Consultar",
      frase: "Un corazón de azul profundo nacido en nuestra tierra",
      imagenPrincipal: "assets/img/joya-destacada-corazon.webp",
      imagenes: ["assets/img/joya-destacada-corazon.webp", "assets/img/joya-01.webp", "assets/img/joya-03.webp"]
    },
    {
      id: 1,
      nombre: "Colgante Copihue con Lapislázuli",
      categoria: "collares",
      materiales: "Plata 950 y Lapislázuli chileno",
      tecnica: "Calado a mano, pulido y engaste artesanal",
      inspiracion: "Copihue chileno (Flor Nacional)",
      descripcion: "Colgante inspirado en la delicadeza del copihue chileno. La pieza combina el trabajo artesanal en plata con la intensidad natural del lapislázuli, dando vida a una joya que representa identidad, naturaleza y elegancia.",
      disponibilidad: "Por encargo",
      precio: "Consultar",
      frase: "Elegancia natural en cada pétalo",
      imagenPrincipal: "assets/img/joya-01.webp",
      imagenes: ["assets/img/joya-01.webp", "assets/img/joya-02.webp", "assets/img/joya-03.webp"]
    },
    {
      id: 2,
      nombre: "Collar Flechas de Lapislázuli",
      categoria: "lapislazuli",
      materiales: "Plata y Lapislázuli de corte facetado",
      tecnica: "Orfebrería, lapidación geométrica y soldadura",
      inspiracion: "Dirección, fuerza y decisión de nuestra tierra",
      descripcion: "Una pieza de líneas estilizadas inspirada en la dirección, la fuerza y la decisión. Sus detalles de plata y lapislázuli crean una composición elegante y contemporánea.",
      disponibilidad: "Consultar",
      precio: "Consultar",
      frase: "Flechas de plata que apuntan a la sofisticación",
      imagenPrincipal: "assets/img/joya-04.webp",
      imagenes: ["assets/img/joya-04.webp", "assets/img/joya-05.webp"]
    },
    {
      id: 3,
      nombre: "Aros Espuela Criolla",
      categoria: "criolla",
      materiales: "Plata 950 artesanal",
      tecnica: "Calado, cincelado y forjado tradicional",
      inspiracion: "Tradición y aperos del campo maulino",
      descripcion: "Aros inspirados en las espuelas y aperos tradicionales del campo chileno. Una pieza con personalidad, identidad y un marcado carácter artesanal.",
      disponibilidad: "Por encargo",
      precio: "Consultar",
      frase: "Espuelas de plata para un estilo audaz y único",
      imagenPrincipal: "assets/img/joya-06.webp",
      imagenes: ["assets/img/joya-06.webp", "assets/img/joya-07.webp"]
    },
    {
      id: 4,
      nombre: "Colgante Sombrero de Huaso",
      categoria: "criolla",
      materiales: "Plata pulida a mano",
      tecnica: "Micro-orfebrería y volumen en metal",
      inspiracion: "Cultura campesina del Maule y huaso chileno",
      descripcion: "Una representación en miniatura de uno de los elementos más reconocibles de la cultura campesina chilena. Ideal para quienes desean llevar consigo un símbolo de tradición y pertenencia.",
      disponibilidad: "Consultar",
      precio: "Consultar",
      frase: "Lleva contigo el encanto del campo chileno",
      imagenPrincipal: "assets/img/joya-08.webp",
      imagenes: ["assets/img/joya-08.webp", "assets/img/joya-09.webp"]
    },
    {
      id: 5,
      nombre: "Anillo Azul Nativo",
      categoria: "anillos",
      materiales: "Plata 950 y Lapislázuli con vetas de pirita",
      tecnica: "Engaste en bisel cerrado y textura matizada",
      inspiracion: "La profundidad de los cielos del Maule",
      descripcion: "Anillo elaborado artesanalmente para destacar las formas, tonalidades y vetas naturales del lapislázuli. Debido al origen de la piedra, cada ejemplar presenta características únicas.",
      disponibilidad: "Pieza única",
      precio: "Consultar",
      frase: "La profundidad del azul en una pieza irrepetible",
      imagenPrincipal: "assets/img/joya-10.webp",
      imagenes: ["assets/img/joya-10.webp", "assets/img/joya-11.webp"]
    },
    {
      id: 6,
      nombre: "Pulsera Maule Patrimonial",
      categoria: "pulseras",
      materiales: "Plata y Piedra Cruz natural",
      tecnica: "Eslabones articulados a mano y engastes",
      inspiracion: "Ríos y arquitectura del Maule",
      descripcion: "Pulsera de eslabones artesanales grabados con patrones prehispánicos e hispánicos propios de la zona central de Chile.",
      disponibilidad: "Por encargo",
      precio: "Consultar",
      frase: "Eslabonando historia y tradición",
      imagenPrincipal: "assets/img/joya-12.webp",
      imagenes: ["assets/img/joya-12.webp", "assets/img/joya-13.webp"]
    },
    {
      id: 7,
      nombre: "Aros Copihue Silvestre",
      categoria: "aros",
      materiales: "Plata 950 y Jaspe rojo",
      tecnica: "Modelado y engaste artesanal",
      inspiracion: "Bosques del Maule y flor silvestre",
      descripcion: "Diseño sutil de aros con caída delicada que representan los pétalos del copihue nativo en tonalidades cálidas.",
      disponibilidad: "Disponible",
      precio: "Consultar",
      frase: "Naturaleza maulina en tus oídos",
      imagenPrincipal: "assets/img/joya-14.webp",
      imagenes: ["assets/img/joya-14.webp", "assets/img/joya-15.webp"]
    },
    {
      id: 8,
      nombre: "Medalla Mercado Provisorio de Talca",
      categoria: "patrimoniales",
      materiales: "Plata en relieve y patina envejecida",
      tecnica: "Cincelado patrimonial y texturizado",
      inspiracion: "Arquitectura y comercio tradicional de Talca",
      descripcion: "Pieza conmemorativa inspirada en el monumento histórico y centro neurálgico del oficio artesanal en Talca.",
      disponibilidad: "Pieza única",
      precio: "Consultar",
      frase: "Memoria viva de nuestra querida Talca",
      imagenPrincipal: "assets/img/joya-16.webp",
      imagenes: ["assets/img/joya-16.webp", "assets/img/joya-17.webp"]
    }
  ];

  /* ==========================================================================
     2. GALERÍA AURA NATIVA (MOSAICO)
     ========================================================================== */
  const fotosGaleria = [
    { src: "assets/img/joya-destacada-corazon.webp", categoria: "lapislazuli", frase: "Un corazón de azul profundo nacido en nuestra tierra" },
    { src: "assets/img/historia-familia-01.webp", categoria: "patrimonio", frase: "Tradición y taller orfebre desde el siglo XX" },
    { src: "assets/img/joya-01.webp", categoria: "productos", frase: "Elegancia natural en cada pétalo" },
    { src: "assets/img/joya-02.webp", categoria: "taller", frase: "Hecho a mano en Talca" },
    { src: "assets/img/joya-03.webp", categoria: "lapislazuli", frase: "Un tesoro nacido en nuestra tierra" },
    { src: "assets/img/joya-04.webp", categoria: "criolla", frase: "Tradición convertida en arte" },
    { src: "assets/img/historia-familia-02.webp", categoria: "taller", frase: "Décadas dedicadas a la atención y reparación artesanal" },
    { src: "assets/img/joya-05.webp", categoria: "patrimonio", frase: "Plata, identidad y memoria" },
    { src: "assets/img/joya-06.webp", categoria: "taller", frase: "Cada piedra es diferente. Cada joya también" },
    { src: "assets/img/joya-07.webp", categoria: "productos", frase: "El valor de lo auténtico" },
    { src: "assets/img/historia-familia-03.webp", categoria: "patrimonio", frase: "Catálogos históricos y grabados a mano" },
    { src: "assets/img/joya-08.webp", categoria: "criolla", frase: "Una historia para llevar contigo" }
  ];

  /* ==========================================================================
     3. ROTADOR DINÁMICO DE JOYAS DESTACADAS EN HERO
     ========================================================================== */
  const heroFeaturedItems = [
    {
      src: "assets/img/joya-destacada-corazon.webp",
      title: "Joya Destacada: Colgante Corazón de Lapislázuli",
      subtitle: "Plata 950 & Lapislázuli Maulino • Hecho a mano en Talca"
    },
    {
      src: "assets/img/joya-01.webp",
      title: "Colección Copihue: Elegancia Natural",
      subtitle: "Flor Nacional moldeada en plata y lapislázuli"
    },
    {
      src: "assets/img/joya-04.webp",
      title: "Collar Flechas de Lapislázuli",
      subtitle: "Diseño geométrica contemporáneo en piedra nativa"
    },
    {
      src: "assets/img/joya-06.webp",
      title: "Aros Espuela Criolla",
      subtitle: "Tradición campestre y forjado maulino"
    },
    {
      src: "assets/img/joya-10.webp",
      title: "Anillo Azul Nativo",
      subtitle: "Pieza única con vetas de pirita natural"
    }
  ];

  const heroPreviewImg = document.getElementById('hero-preview-img');
  const heroPreviewCaption = document.getElementById('hero-preview-caption');
  const heroDotsNav = document.getElementById('hero-dots-nav');

  let currentHeroIndex = 0;
  let heroTimer = null;

  function setHeroSlide(index) {
    if (!heroPreviewImg || !heroPreviewCaption) return;
    currentHeroIndex = index;

    // Smooth fade out
    heroPreviewImg.style.opacity = '0.3';
    
    setTimeout(() => {
      const item = heroFeaturedItems[index];
      heroPreviewImg.src = item.src;
      heroPreviewImg.alt = item.title;
      heroPreviewCaption.innerHTML = `<strong>${item.title}</strong>${item.subtitle}`;
      heroPreviewImg.style.opacity = '1';

      if (heroDotsNav) {
        heroDotsNav.querySelectorAll('.hero-dot').forEach((dot, idx) => {
          dot.classList.toggle('active', idx === index);
        });
      }
    }, 250);
  }

  // Create dot buttons
  if (heroDotsNav) {
    heroDotsNav.innerHTML = heroFeaturedItems.map((_, i) => `
      <span class="hero-dot ${i === 0 ? 'active' : ''}" data-index="${i}"></span>
    `).join('');

    heroDotsNav.querySelectorAll('.hero-dot').forEach(dot => {
      dot.addEventListener('click', (e) => {
        const idx = parseInt(e.target.getAttribute('data-index'));
        setHeroSlide(idx);
        restartHeroTimer();
      });
    });
  }

  function startHeroTimer() {
    heroTimer = setInterval(() => {
      const nextIndex = (currentHeroIndex + 1) % heroFeaturedItems.length;
      setHeroSlide(nextIndex);
    }, 4500);
  }

  function restartHeroTimer() {
    if (heroTimer) clearInterval(heroTimer);
    startHeroTimer();
  }

  startHeroTimer();

  /* ==========================================================================
     4. RENDERING DINÁMICO DEL CATÁLOGO DE PRODUCTOS
     ========================================================================== */
  const productsContainer = document.getElementById('products-container');
  const catalogFilterBtns = document.querySelectorAll('.catalog-filter-btn');
  const catalogSearchInput = document.getElementById('catalog-search');

  function renderProductos(items) {
    if (!productsContainer) return;

    if (items.length === 0) {
      productsContainer.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: #666;">
          <i class="fas fa-search" style="font-size: 2.5rem; color: #B2812B; margin-bottom: 1rem;"></i>
          <p style="font-size: 1.1rem;">No se encontraron joyas que coincidan con tu búsqueda.</p>
        </div>
      `;
      return;
    }

    productsContainer.innerHTML = items.map(p => `
      <article class="product-card">
        <div class="product-img-box">
          <img src="${p.imagenPrincipal}" alt="${p.nombre} - Joya artesanal de Aura Nativa" loading="lazy">
          <span class="product-badge ${p.disponibilidad.toLowerCase().replace(/\s+/g, '-')}">${p.disponibilidad}</span>
        </div>
        <div class="product-info">
          <span class="product-category">${p.categoria}</span>
          <h3 class="product-title">${p.nombre}</h3>
          <p class="product-phrase">"${p.frase}"</p>
          <ul class="product-meta-list">
            <li><strong>Materiales:</strong> ${p.materiales}</li>
            <li><strong>Técnica:</strong> ${p.tecnica}</li>
          </ul>
          <p class="product-price-label">Valor y disponibilidad a consultar</p>
          <div class="product-actions">
            <button class="btn btn-outline btn-card-sm btn-details" data-id="${p.id}">
              <i class="fas fa-eye"></i> Detalles
            </button>
            <a href="https://wa.me/56995127168?text=Hola%20Aura%20Nativa%2C%20quisiera%20consultar%20por%20la%20pieza%3A%20${encodeURIComponent(p.nombre)}" 
               target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-card-sm">
              <i class="fab fa-whatsapp"></i> WhatsApp
            </a>
          </div>
        </div>
      </article>
    `).join('');

    // Re-attach modal listeners
    document.querySelectorAll('.btn-details').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const prodId = parseInt(e.currentTarget.getAttribute('data-id'));
        openProductModal(prodId);
      });
    });
  }

  // Initial render
  renderProductos(productos);

  // Filtering
  let currentCategory = 'all';

  function filterCatalog() {
    const query = catalogSearchInput ? catalogSearchInput.value.toLowerCase().trim() : '';

    const filtered = productos.filter(p => {
      const matchCat = currentCategory === 'all' || p.categoria.toLowerCase() === currentCategory.toLowerCase();
      const matchSearch = p.nombre.toLowerCase().includes(query) ||
                          p.materiales.toLowerCase().includes(query) ||
                          p.descripcion.toLowerCase().includes(query) ||
                          p.inspiracion.toLowerCase().includes(query);
      return matchCat && matchSearch;
    });

    renderProductos(filtered);
  }

  catalogFilterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      catalogFilterBtns.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      currentCategory = e.target.getAttribute('data-filter');
      filterCatalog();
    });
  });

  if (catalogSearchInput) {
    catalogSearchInput.addEventListener('input', filterCatalog);
  }

  /* ==========================================================================
     5. MODAL DETALLE DE PRODUCTO
     ========================================================================== */
  const productModal = document.getElementById('product-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  function openProductModal(id) {
    const prod = productos.find(p => p.id === id);
    if (!prod || !productModal) return;

    document.getElementById('modal-title').textContent = prod.nombre;
    document.getElementById('modal-category').textContent = prod.categoria.toUpperCase();
    document.getElementById('modal-description').textContent = prod.descripcion;
    document.getElementById('modal-materials').textContent = prod.materiales;
    document.getElementById('modal-technique').textContent = prod.tecnica;
    document.getElementById('modal-inspiration').textContent = prod.inspiracion;
    document.getElementById('modal-phrase').textContent = `"${prod.frase}"`;
    document.getElementById('modal-availability').textContent = prod.disponibilidad;

    const mainImg = document.getElementById('modal-main-img');
    if (mainImg) {
      mainImg.src = prod.imagenPrincipal;
      mainImg.alt = prod.nombre;
    }

    const thumbsContainer = document.getElementById('modal-thumbnails');
    if (thumbsContainer) {
      thumbsContainer.innerHTML = prod.imagenes.map((imgSrc, idx) => `
        <div class="modal-thumb ${idx === 0 ? 'active' : ''}" data-src="${imgSrc}">
          <img src="${imgSrc}" alt="Vista miniatura ${idx + 1}">
        </div>
      `).join('');

      thumbsContainer.querySelectorAll('.modal-thumb').forEach(thumb => {
        thumb.addEventListener('click', (e) => {
          thumbsContainer.querySelectorAll('.modal-thumb').forEach(t => t.classList.remove('active'));
          const target = e.currentTarget;
          target.classList.add('active');
          mainImg.src = target.getAttribute('data-src');
        });
      });
    }

    const waBtn = document.getElementById('modal-wa-btn');
    if (waBtn) {
      waBtn.href = `https://wa.me/56995127168?text=Hola%20Aura%20Nativa%2C%20me%20interesa%20consultar%20detalles%20y%20disponibilidad%20de%3A%20${encodeURIComponent(prod.nombre)}`;
    }

    productModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeProductModal() {
    if (!productModal) return;
    productModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeProductModal);
  }

  if (productModal) {
    productModal.addEventListener('click', (e) => {
      if (e.target === productModal) closeProductModal();
    });
  }

  /* ==========================================================================
     6. RENDERING Y LIGHTBOX DE GALERÍA DE FOTOS
     ========================================================================== */
  const galleryGrid = document.getElementById('gallery-grid');
  const galleryFilterBtns = document.querySelectorAll('.gallery-filter-btn');

  function renderGallery(filter = 'all') {
    if (!galleryGrid) return;
    const items = filter === 'all' ? fotosGaleria : fotosGaleria.filter(f => f.categoria === filter);

    galleryGrid.innerHTML = items.map((f, i) => `
      <div class="gallery-item" data-index="${i}">
        <img src="${f.src}" alt="${f.frase}" loading="lazy">
        <div class="gallery-overlay">
          <p class="gallery-phrase">"${f.frase}"</p>
          <span class="gallery-zoom-icon"><i class="fas fa-search-plus"></i></span>
        </div>
      </div>
    `).join('');

    // Attach click for lightbox
    galleryGrid.querySelectorAll('.gallery-item').forEach((item, idx) => {
      item.addEventListener('click', () => openLightbox(idx, items));
    });
  }

  renderGallery();

  galleryFilterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      galleryFilterBtns.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      renderGallery(e.target.getAttribute('data-filter'));
    });
  });

  // Lightbox Controls
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxPrev = document.getElementById('lightbox-prev');
  const lightboxNext = document.getElementById('lightbox-next');

  let currentGalleryList = [];
  let currentGalleryIndex = 0;

  function openLightbox(index, list) {
    currentGalleryList = list;
    currentGalleryIndex = index;
    updateLightboxContent();
    lightboxModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function updateLightboxContent() {
    if (!currentGalleryList[currentGalleryIndex]) return;
    const item = currentGalleryList[currentGalleryIndex];
    lightboxImg.src = item.src;
    lightboxCaption.textContent = item.frase;
  }

  function closeLightbox() {
    lightboxModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxPrev) lightboxPrev.addEventListener('click', () => {
    currentGalleryIndex = (currentGalleryIndex - 1 + currentGalleryList.length) % currentGalleryList.length;
    updateLightboxContent();
  });
  if (lightboxNext) lightboxNext.addEventListener('click', () => {
    currentGalleryIndex = (currentGalleryIndex + 1) % currentGalleryList.length;
    updateLightboxContent();
  });

  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) closeLightbox();
    });
  }

  /* ==========================================================================
     7. ACCORDEÓN DE PREGUNTAS FRECUENTES (FAQ)
     ========================================================================== */
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(btn => {
    btn.addEventListener('click', () => {
      const parent = btn.parentElement;
      const isActive = parent.classList.contains('active');

      document.querySelectorAll('.faq-item').forEach(item => item.classList.remove('active'));

      if (!isActive) {
        parent.classList.add('active');
      }
    });
  });

  /* ==========================================================================
     8. FORMULARIO DE CONTACTO Y GENERACIÓN WHATSAPP
     ========================================================================== */
  const contactForm = document.getElementById('contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nombre = document.getElementById('contact-name').value.trim();
      const email = document.getElementById('contact-email').value.trim();
      const telefono = document.getElementById('contact-phone').value.trim();
      const tipo = document.getElementById('contact-type').value;
      const mensaje = document.getElementById('contact-message').value.trim();
      const acepto = document.getElementById('contact-terms').checked;

      if (!nombre || !email || !mensaje || !acepto) {
        alert('Por favor completa los campos obligatorios y acepta el uso de datos.');
        return;
      }

      const textWA = `Hola Aura Nativa! Mi nombre es ${nombre}.%0A` +
                     `Correo: ${email}%0A` +
                     (telefono ? `Teléfono: ${telefono}%0A` : '') +
                     `Tipo de consulta: ${tipo}%0A` +
                     `Mensaje: ${mensaje}`;

      const waURL = `https://wa.me/56995127168?text=${textWA}`;
      window.open(waURL, '_blank');

      alert('¡Gracias por tu mensaje! Se ha preparado una conversación de WhatsApp con tus datos.');
      contactForm.reset();
    });
  }

  /* ==========================================================================
     9. SERVICIO EXPRESS WHATSAPP GENERATOR
     ========================================================================== */
  const serviceQuoteBtn = document.getElementById('btn-cotizar-servicio');
  if (serviceQuoteBtn) {
    serviceQuoteBtn.addEventListener('click', () => {
      const msg = encodeURIComponent("Hola Aura Nativa, quisiera cotizar un trabajo de orfebrería. El servicio que necesito es: ");
      window.open(`https://wa.me/56995127168?text=${msg}`, '_blank');
    });
  }

  /* ==========================================================================
     10. NAVEGACIÓN MENÚ MÓVIL Y SCROLL EFFECTS
     ========================================================================== */
  const siteHeader = document.getElementById('site-header');
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  const backToTopBtn = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      siteHeader.classList.add('scrolled');
      backToTopBtn.classList.add('visible');
    } else {
      siteHeader.classList.remove('scrolled');
      backToTopBtn.classList.remove('visible');
    }
  });

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const isExpanded = navMenu.classList.contains('open');
      mobileToggle.setAttribute('aria-expanded', isExpanded);
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* Keyboard shortcut Escape for closing modals */
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProductModal();
      closeLightbox();
    } else if (e.key === 'ArrowRight' && lightboxModal.classList.contains('active')) {
      currentGalleryIndex = (currentGalleryIndex + 1) % currentGalleryList.length;
      updateLightboxContent();
    } else if (e.key === 'ArrowLeft' && lightboxModal.classList.contains('active')) {
      currentGalleryIndex = (currentGalleryIndex - 1 + currentGalleryList.length) % currentGalleryList.length;
      updateLightboxContent();
    }
  });
});
