import { onMounted, onUnmounted } from 'vue'

export function useAnimations() {
  let observer = null
  let anime = null

  // Initialize anime.js
  const initAnime = async () => {
    try {
      const animeModule = await import('animejs')
      anime = animeModule.default
      console.log('Anime.js loaded successfully')
    } catch (error) {
      console.warn('Could not load anime.js, using fallback animations:', error)
      anime = null
    }
  }

  // Enhanced animation with anime.js fallback
  const animateElement = (element, delay = 0, options = {}) => {
    if (!element) return
    
    if (anime) {
      // Use anime.js for smooth animations
      anime({
        targets: element,
        opacity: [0, 1],
        translateY: [30, 0],
        translateX: [0, 0],
        scale: [0.9, 1],
        duration: options.duration || 800,
        delay: delay,
        easing: options.easing || 'easeOutExpo',
        ...options
      })
    } else {
      // Fallback to CSS transitions
      setTimeout(() => {
        element.style.opacity = '1'
        element.style.transform = 'none'
        element.style.transition = 'all 0.6s ease'
      }, delay)
    }
  }

  // Animate navbar with enhanced effects
  const animateNavbar = () => {
    const navbar = document.querySelector('.navbar')
    if (navbar) {
      if (anime) {
        anime({
          targets: navbar,
          translateY: [-100, 0],
          opacity: [0, 1],
          duration: 1000,
          easing: 'easeOutBack'
        })
      } else {
        animateElement(navbar, 100)
      }
    }
  }

  // Animate hero section with enhanced animations
  const animateHero = () => {
    if (anime) {
      // Use anime.js timeline for hero section
      const heroTimeline = anime.timeline({
        easing: 'easeOutExpo',
        duration: 1000
      })

      heroTimeline
        .add({
          targets: '.hero-title',
          translateY: [50, 0],
          opacity: [0, 1],
          scale: [0.9, 1],
          duration: 800
        })
        .add({
          targets: '.hero-subtitle',
          translateY: [30, 0],
          opacity: [0, 1],
          duration: 600
        }, '-=400')
        .add({
          targets: '.hero-description',
          translateY: [30, 0],
          opacity: [0, 1],
          duration: 600
        }, '-=400')
        .add({
          targets: '.hero-buttons .btn',
          translateY: [30, 0],
          opacity: [0, 1],
          scale: [0.8, 1],
          duration: 600,
          delay: anime.stagger(200)
        }, '-=400')
        .add({
          targets: '.profile-card',
          scale: [0.8, 1],
          opacity: [0, 1],
          rotateY: [15, 0],
          duration: 800
        }, '-=600')
        .add({
          targets: '.profile-stats .stat',
          scale: [0, 1],
          opacity: [0, 1],
          duration: 500,
          delay: anime.stagger(100),
          easing: 'easeOutBack'
        }, '-=400')
        .add({
          targets: '.scroll-indicator',
          translateY: [20, 0],
          opacity: [0, 1],
          duration: 600
        }, '-=200')

      // Add continuous floating animation to profile card
      anime({
        targets: '.profile-card',
        translateY: [0, -10, 0],
        duration: 4000,
        easing: 'easeInOutSine',
        loop: true,
        direction: 'alternate'
      })

      // Add pulse animation to hero title highlight
      anime({
        targets: '.hero-title .highlight',
        scale: [1, 1.05, 1],
        duration: 2000,
        easing: 'easeInOutSine',
        loop: true
      })
    } else {
      // Fallback animation
      const elements = [
        '.hero-title',
        '.hero-subtitle', 
        '.hero-description',
        '.hero-buttons .btn',
        '.profile-card'
      ]
      
      elements.forEach((selector, index) => {
        const element = document.querySelector(selector)
        animateElement(element, 200 + (index * 100))
      })
    }
  }

  // Animate floating buttons with enhanced animations
  const animateFloatingButtons = () => {
    if (anime) {
      anime({
        targets: '.theme-switcher, .language-switcher',
        translateY: [50, 0],
        opacity: [0, 1],
        scale: [0.8, 1],
        duration: 800,
        delay: anime.stagger(200),
        easing: 'easeOutBack'
      })
      
      // Add continuous floating animation
      anime({
        targets: '.theme-switcher, .language-switcher',
        translateY: [0, -10, 0],
        duration: 3000,
        delay: anime.stagger(1000),
        easing: 'easeInOutSine',
        loop: true,
        direction: 'alternate'
      })
    } else {
      const buttons = document.querySelectorAll('.theme-switcher, .language-switcher')
      buttons.forEach((button, index) => {
        animateElement(button, 800 + (index * 100))
      })
    }
  }

  // Setup scroll animations with enhanced effects
  const setupScrollAnimations = () => {
    const options = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const callback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target
          
          if (anime) {
            // Enhanced scroll animations with anime.js
            if (target.classList.contains('skill-category')) {
              // Special animation for skill categories with progress bars
              anime({
                targets: target,
                opacity: [0, 1],
                translateY: [50, 0],
                duration: 600,
                easing: 'easeOutExpo'
              })
              
              // Animate progress bars after category appears
              setTimeout(() => {
                const progressBars = target.querySelectorAll('.skill-progress')
                const progressLines = target.querySelectorAll('.progress-line')
                
                // Animate progress bars
                progressBars.forEach((bar, index) => {
                  const progress = bar.getAttribute('data-progress') || '100%'
                  setTimeout(() => {
                    bar.style.width = progress
                  }, index * 100)
                })
                
                // Animate progress lines with a slight delay
                setTimeout(() => {
                  progressLines.forEach((line, index) => {
                    setTimeout(() => {
                      line.style.opacity = '1'
                      line.style.scale = '1'
                    }, index * 50)
                  })
                }, 800)
              }, 300)
            } else if (target.classList.contains('project-card')) {
              // Staggered animation for project cards with enhanced effects
              anime({
                targets: target,
                opacity: [0, 1],
                translateY: [50, 0],
                scale: [0.9, 1],
                rotateY: [15, 0],
                duration: 800,
                easing: 'easeOutBack'
              })
              
              // Add hover effect animation
              target.addEventListener('mouseenter', () => {
                anime({
                  targets: target,
                  scale: [1, 1.05],
                  translateY: [0, -5],
                  duration: 300,
                  easing: 'easeOutQuad'
                })
              })
              
              target.addEventListener('mouseleave', () => {
                anime({
                  targets: target,
                  scale: [1.05, 1],
                  translateY: [-5, 0],
                  duration: 300,
                  easing: 'easeOutQuad'
                })
              })
            } else if (target.classList.contains('timeline-item')) {
              // Enhanced slide animation for timeline items
              anime({
                targets: target,
                opacity: [0, 1],
                translateX: ['-100px', 0],
                scale: [0.95, 1],
                duration: 800,
                easing: 'easeOutExpo'
              })
            } else if (target.classList.contains('highlight-item')) {
              // Bounce animation for highlight items
              anime({
                targets: target,
                opacity: [0, 1],
                translateY: [30, 0],
                scale: [0.8, 1],
                duration: 600,
                easing: 'easeOutBounce'
              })
            } else if (target.classList.contains('contact-item')) {
              // Enhanced slide and fade animation for contact items
              anime({
                targets: target,
                opacity: [0, 1],
                translateX: ['-50px', 0],
                scale: [0.9, 1],
                rotateY: [15, 0],
                duration: 800,
                easing: 'easeOutQuart'
              })
            } else if (target.classList.contains('section-header')) {
              // Staggered animation for section headers
              const title = target.querySelector('.section-title')
              const subtitle = target.querySelector('.section-subtitle')
              
              if (title) {
                anime({
                  targets: title,
                  opacity: [0, 1],
                  translateY: [30, 0],
                  scale: [0.9, 1],
                  duration: 600,
                  easing: 'easeOutBack'
                })
              }
              
              if (subtitle) {
                anime({
                  targets: subtitle,
                  opacity: [0, 1],
                  translateY: [20, 0],
                  duration: 600,
                  delay: 200,
                  easing: 'easeOutQuart'
                })
              }
            } else if (target.classList.contains('about-description')) {
              // Typewriter effect for about description
              const text = target.textContent
              target.textContent = ''
              target.style.opacity = '1'
              
              let i = 0
              const typeWriter = () => {
                if (i < text.length) {
                  target.textContent += text.charAt(i)
                  i++
                  setTimeout(typeWriter, 30)
                }
              }
              typeWriter()
            } else if (target.classList.contains('form-group')) {
              // Slide up animation for form groups
              anime({
                targets: target,
                opacity: [0, 1],
                translateY: [30, 0],
                scale: [0.95, 1],
                duration: 600,
                easing: 'easeOutQuart'
              })
            } else {
              // Default animation for other elements
              animateElement(target, 100)
            }
          } else {
            // Fallback animation
            animateElement(target, 100)
          }
        }
      })
    }

    observer = new IntersectionObserver(callback, options)
    
    const elements = document.querySelectorAll('.section-title, .section-subtitle, .about-description, .highlight-item, .timeline-item, .project-card, .skill-category, .contact-item, .contact-form .form-group')
    elements.forEach(el => observer.observe(el))

    return observer
  }

  // Initialize all animations
  const initAnimations = async () => {
    try {
      console.log('Initializing enhanced animations...')
      
      // Initialize anime.js first
      await initAnime()
      
      // Initial animations
      animateNavbar()
      animateHero()
      animateFloatingButtons()
      animateParticles()
      animateScrollProgress()

      // Setup scroll-triggered animations
      observer = setupScrollAnimations()

      // Setup continuous animations
      setupContinuousAnimations()

      console.log('Enhanced animations initialized successfully')
      return observer
    } catch (error) {
      console.error('Animation initialization failed:', error)
      // Fallback: just show elements without animations
      document.querySelectorAll('.hero-title, .hero-subtitle, .hero-description, .hero-buttons .btn, .profile-card, .navbar, .theme-switcher, .language-switcher, .section-title, .section-subtitle, .about-description, .highlight-item, .timeline-item, .project-card, .skill-category, .contact-item, .contact-form .form-group').forEach(el => {
        if (el) {
          el.style.opacity = '1'
          el.style.transform = 'none'
        }
      })
    }
  }

  // Animate particles background
  const animateParticles = () => {
    if (anime) {
      const particles = document.querySelectorAll('.particle')
      if (particles.length > 0) {
        anime({
          targets: particles,
          translateX: () => anime.random(-100, 100),
          translateY: () => anime.random(-100, 100),
          scale: () => anime.random(0.5, 1.5),
          opacity: () => anime.random(0.3, 0.8),
          duration: () => anime.random(3000, 6000),
          delay: anime.stagger(100),
          easing: 'easeInOutSine',
          loop: true,
          direction: 'alternate'
        })
      }
    }
  }

  // Animate scroll progress bar
  const animateScrollProgress = () => {
    if (anime) {
      const scrollProgress = document.querySelector('.scroll-progress')
      if (scrollProgress) {
        anime({
          targets: scrollProgress,
          scaleY: [0, 1],
          duration: 1000,
          easing: 'easeOutQuart'
        })
      }
    }
  }

  // Setup continuous animations
  const setupContinuousAnimations = () => {
    if (anime) {
      // Animate section titles continuously
      anime({
        targets: '.section-title',
        textShadow: [
          '0 0 0px rgba(var(--primary-color-rgb), 0)',
          '0 0 20px rgba(var(--primary-color-rgb), 0.5)',
          '0 0 0px rgba(var(--primary-color-rgb), 0)'
        ],
        duration: 3000,
        delay: anime.stagger(500),
        easing: 'easeInOutSine',
        loop: true
      })

      // Animate skill percentages with counting effect
      const skillPercentages = document.querySelectorAll('.skill-percentage')
      skillPercentages.forEach((percentage, index) => {
        const text = percentage.textContent
        const number = parseInt(text)
        
        anime({
          targets: percentage,
          innerHTML: [0, number],
          round: 1,
          duration: 2000,
          delay: index * 100,
          easing: 'easeOutQuart'
        })
      })

      // Animate profile stats with counting
      const statNumbers = document.querySelectorAll('.stat-number')
      statNumbers.forEach((stat, index) => {
        const text = stat.textContent
        const number = parseInt(text.replace(/\D/g, ''))
        
        anime({
          targets: stat,
          innerHTML: [0, number],
          round: 1,
          duration: 2000,
          delay: index * 200,
          easing: 'easeOutQuart'
        })
      })

      // Animate contact icons with pulse
      anime({
        targets: '.contact-item i',
        scale: [1, 1.1, 1],
        duration: 2000,
        delay: anime.stagger(200),
        easing: 'easeInOutSine',
        loop: true
      })

      // Animate form inputs with focus effect
      const formInputs = document.querySelectorAll('input, textarea')
      formInputs.forEach(input => {
        input.addEventListener('focus', () => {
          anime({
            targets: input,
            scale: [1, 1.02],
            borderColor: ['var(--border-color)', 'var(--primary-color)'],
            duration: 300,
            easing: 'easeOutQuad'
          })
        })

        input.addEventListener('blur', () => {
          anime({
            targets: input,
            scale: [1.02, 1],
            borderColor: ['var(--primary-color)', 'var(--border-color)'],
            duration: 300,
            easing: 'easeOutQuad'
          })
        })
      })
    }
  }

  // Cleanup
  const cleanup = () => {
    if (observer) {
      observer.disconnect()
    }
  }

  onUnmounted(() => {
    cleanup()
  })

  return {
    initAnimations,
    cleanup
  }
} 