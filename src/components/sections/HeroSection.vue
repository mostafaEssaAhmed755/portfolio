<template>
  <section id="home" class="hero">
    <ParticleBackground />
    
    <!-- Animated Background Elements -->
    <div class="animated-bg">
      <div class="bg-circle bg-circle-1"></div>
      <div class="bg-circle bg-circle-2"></div>
      <div class="bg-circle bg-circle-3"></div>
      <div class="bg-square bg-square-1"></div>
      <div class="bg-square bg-square-2"></div>
      <div class="bg-triangle bg-triangle-1"></div>
      <div class="bg-triangle bg-triangle-2"></div>
      <div class="bg-wave bg-wave-1"></div>
      <div class="bg-wave bg-wave-2"></div>
      <div class="bg-dots bg-dots-1"></div>
      <div class="bg-dots bg-dots-2"></div>
    </div>
    
    <!-- Coding-themed Animations -->
    <div class="coding-animations">
      <!-- Terminal Window -->
      <div class="terminal-window">
        <div class="terminal-header">
          <div class="terminal-buttons">
            <span class="terminal-btn terminal-btn-close"></span>
            <span class="terminal-btn terminal-btn-minimize"></span>
            <span class="terminal-btn terminal-btn-maximize"></span>
          </div>
          <div class="terminal-title">Terminal</div>
        </div>
        <div class="terminal-content">
          <div class="terminal-line">
            <span class="terminal-prompt">$</span>
            <span class="terminal-command typing-text"></span>
            <span class="terminal-cursor">|</span>
          </div>
          <div class="terminal-output"></div>
        </div>
      </div>
      
      
      
      <!-- Git Commit Graph -->
      <div class="git-graph">
        <div class="commit-node commit-1"></div>
        <div class="commit-node commit-2"></div>
        <div class="commit-node commit-3"></div>
        <div class="commit-node commit-4"></div>
        <div class="commit-node commit-5"></div>
        <div class="commit-line"></div>
      </div>
      
      <!-- Loading Bars -->
      <div class="loading-bars">
        <div class="loading-bar">
          <div class="loading-fill" data-progress="85"></div>
          <span class="loading-label">Compiling...</span>
        </div>
        <div class="loading-bar">
          <div class="loading-fill" data-progress="92"></div>
          <span class="loading-label">Building...</span>
        </div>
        <div class="loading-bar">
          <div class="loading-fill" data-progress="78"></div>
          <span class="loading-label">Testing...</span>
        </div>
      </div>
      
      <!-- Binary Rain -->
      <div class="binary-rain">
        <div class="binary-column" v-for="i in 8" :key="i">
          <div class="binary-digit" v-for="j in 20" :key="j">01</div>
        </div>
      </div>
    </div>
    
    <div class="hero-container">
      <div class="hero-content">
        <div class="hero-text">
                            <h1 class="hero-title">
                    {{ __('hero.greeting') }} <span class="highlight">{{ __('hero.name') }}</span>
                  </h1>
                  <h2 class="hero-subtitle">
                    <TypingEffect />
                  </h2>
                  <p class="hero-description">
                    {{ __('hero.description') }}
                  </p>
                  <div class="hero-buttons">
                    <a href="#projects" class="btn btn-primary">{{ __('hero.viewWork') }}</a>
                    <a href="#contact" class="btn btn-secondary">{{ __('hero.getInTouch') }}</a>
                    <a href="Mostafa_Essa_CV.pdf" download class="btn btn-accent">
                      <i class="fas fa-download"></i>
                      {{ __('hero.downloadCV') }}
                    </a>
                  </div>
        </div>
        <div class="hero-image">
          <div class="profile-card">
            <div class="profile-avatar">
              <i class="fas fa-user-circle"></i>
            </div>
            <div class="profile-info">
              <h3>{{ __('hero.name') }}</h3>
              <p>{{ __('hero.title') }}</p>
              <div class="profile-stats">
                <div class="stat">
                  <span class="stat-number">7+</span>
                  <span class="stat-label">Projects</span>
                </div>
                <div class="stat">
                  <span class="stat-number">2+</span>
                  <span class="stat-label">Years</span>
                </div>
                <div class="stat">
                  <span class="stat-number">50K+</span>
                  <span class="stat-label">Users</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="scroll-indicator">
        <a href="#about">
          <i class="fas fa-chevron-down"></i>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useTranslation } from '@/composables/useTranslation'
import ParticleBackground from '@/components/ParticleBackground.vue'
import TypingEffect from '@/components/TypingEffect.vue'
import { onMounted } from 'vue'

const { __ } = useTranslation()

onMounted(async () => {
  // Initialize anime.js for hero background animations
  let anime = null
  try {
    const animeModule = await import('animejs')
    anime = animeModule.default
    
    if (anime) {
      // Animate background circles
      anime({
        targets: '.bg-circle',
        translateX: () => anime.random(-100, 100),
        translateY: () => anime.random(-100, 100),
        scale: () => anime.random(0.5, 1.5),
        rotate: () => anime.random(0, 360),
        opacity: () => anime.random(0.1, 0.3),
        duration: () => anime.random(8000, 15000),
        delay: anime.stagger(500),
        easing: 'easeInOutSine',
        loop: true,
        direction: 'alternate'
      })

      // Animate background squares
      anime({
        targets: '.bg-square',
        translateX: () => anime.random(-150, 150),
        translateY: () => anime.random(-150, 150),
        rotate: () => anime.random(0, 360),
        scale: () => anime.random(0.3, 1.2),
        opacity: () => anime.random(0.05, 0.2),
        duration: () => anime.random(10000, 20000),
        delay: anime.stagger(1000),
        easing: 'easeInOutQuart',
        loop: true,
        direction: 'alternate'
      })

      // Animate background triangles
      anime({
        targets: '.bg-triangle',
        translateX: () => anime.random(-200, 200),
        translateY: () => anime.random(-200, 200),
        rotate: () => anime.random(0, 720),
        scale: () => anime.random(0.4, 1.6),
        opacity: () => anime.random(0.08, 0.25),
        duration: () => anime.random(12000, 18000),
        delay: anime.stagger(1500),
        easing: 'easeInOutCubic',
        loop: true,
        direction: 'alternate'
      })

      // Animate background waves
      anime({
        targets: '.bg-wave',
        translateX: () => anime.random(-300, 300),
        translateY: () => anime.random(-50, 50),
        scale: () => anime.random(0.8, 1.4),
        opacity: () => anime.random(0.1, 0.4),
        duration: () => anime.random(15000, 25000),
        delay: anime.stagger(2000),
        easing: 'easeInOutSine',
        loop: true,
        direction: 'alternate'
      })

      // Animate background dots
      anime({
        targets: '.bg-dots',
        translateX: () => anime.random(-100, 100),
        translateY: () => anime.random(-100, 100),
        scale: () => anime.random(0.6, 1.3),
        opacity: () => anime.random(0.15, 0.35),
        duration: () => anime.random(6000, 12000),
        delay: anime.stagger(800),
        easing: 'easeInOutBack',
        loop: true,
        direction: 'alternate'
      })

      // Add pulse effects to specific elements
      anime({
        targets: '.bg-circle-1, .bg-square-1, .bg-triangle-1',
        scale: [1, 1.2, 1],
        opacity: [0.2, 0.4, 0.2],
        duration: 4000,
        delay: anime.stagger(1000),
        easing: 'easeInOutSine',
        loop: true
      })

      // Add rotation effects
      anime({
        targets: '.bg-circle-2, .bg-square-2, .bg-triangle-2',
        rotate: [0, 360],
        duration: 20000,
        delay: anime.stagger(2000),
        easing: 'linear',
        loop: true
      })

      // Add wave-like motion
      anime({
        targets: '.bg-wave-1',
        translateY: [0, -30, 0],
        duration: 6000,
        easing: 'easeInOutSine',
        loop: true,
        direction: 'alternate'
      })

      anime({
        targets: '.bg-wave-2',
        translateY: [0, 30, 0],
        duration: 8000,
        easing: 'easeInOutSine',
        loop: true,
        direction: 'alternate'
      })

      // Add floating dots animation
      anime({
        targets: '.bg-dots-1',
        translateY: [0, -50, 0],
        duration: 5000,
        easing: 'easeInOutQuad',
        loop: true,
        direction: 'alternate'
      })

      anime({
        targets: '.bg-dots-2',
        translateY: [0, 50, 0],
        duration: 7000,
        easing: 'easeInOutQuad',
        loop: true,
        direction: 'alternate'
      })

      // ===== CODING ANIMATIONS =====
      
      // Terminal typing animation with personal info
      const terminalCommands = [
        'whoami',
        'Mostafa Essa - Backend Developer',
        'pwd',
        '/home/mostafa/portfolio',
        'ls -la',
        'total 8',
        'drwxr-xr-x 1 mostafa mostafa 4096 Dec 15 10:30 .',
        'drwxr-xr-x 1 mostafa mostafa 4096 Dec 15 10:30 ..',
        'cat skills.txt',
        'PHP: 95% | Laravel: 90% | Node.js: 85%',
        'MySQL: 90% | Vue.js: 85% | Docker: 80%',
        'git log --oneline',
        'a1b2c3d Add portfolio animations',
        'e4f5g6h Implement dark theme',
        'i7j8k9l Create responsive design',
        'm0n1o2p Initial commit',
        'npm run build',
        '✓ Built successfully in 2.3s',
        'echo "Portfolio deployed to production!"',
        '🚀 Portfolio is live at: https://mostafa-essa.dev'
      ]
      
      let commandIndex = 0
      const terminalCommand = document.querySelector('.terminal-command')
      const terminalOutput = document.querySelector('.terminal-output')
      
      const typeCommand = () => {
        if (terminalCommand && commandIndex < terminalCommands.length) {
          const command = terminalCommands[commandIndex]
          let charIndex = 0
          
          terminalCommand.textContent = ''
          
          const typeChar = () => {
            if (charIndex < command.length) {
              terminalCommand.textContent += command.charAt(charIndex)
              charIndex++
              setTimeout(typeChar, 100)
            } else {
              // Show output after typing
              setTimeout(() => {
                if (terminalOutput) {
                  const output = document.createElement('div')
                  output.className = 'terminal-output-line'
                  
                  // Custom responses for different commands
                  let responseText = ''
                  if (command === 'whoami') {
                    responseText = 'mostafa'
                  } else if (command === 'pwd') {
                    responseText = '/home/mostafa/portfolio'
                  } else if (command === 'ls -la') {
                    responseText = 'drwxr-xr-x 1 mostafa mostafa 4096 Dec 15 10:30 .\ndrwxr-xr-x 1 mostafa mostafa 4096 Dec 15 10:30 ..\n-rw-r--r-- 1 mostafa mostafa  234 Dec 15 10:30 package.json\n-rw-r--r-- 1 mostafa mostafa  156 Dec 15 10:30 README.md\n-rw-r--r-- 1 mostafa mostafa  445 Dec 15 10:30 skills.txt'
                  } else if (command === 'cat skills.txt') {
                    responseText = 'PHP: 95% | Laravel: 90% | Node.js: 85%\nMySQL: 90% | Vue.js: 85% | Docker: 80%\nExpress.js: 80% | PostgreSQL: 85% | Redis: 75%\nTypeScript: 75% | AWS: 75% | Git: 90%'
                  } else if (command === 'git log --oneline') {
                    responseText = 'a1b2c3d Add portfolio animations\ne4f5g6h Implement dark theme\ni7j8k9l Create responsive design\nm0n1o2p Initial commit'
                  } else if (command === 'npm run build') {
                    responseText = '✓ Built successfully in 2.3s\n✓ 15 files processed\n✓ Bundle size: 245KB'
                  } else if (command.includes('echo')) {
                    responseText = '🚀 Portfolio is live at: https://mostafa-essa.dev'
                  } else {
                    responseText = `✓ ${command} completed successfully`
                  }
                  
                  // Split multi-line responses
                  const lines = responseText.split('\n')
                  lines.forEach(line => {
                    const outputLine = document.createElement('div')
                    outputLine.className = 'terminal-output-line'
                    outputLine.textContent = line
                    terminalOutput.appendChild(outputLine)
                  })
                  
                  // Scroll to bottom
                  terminalOutput.scrollTop = terminalOutput.scrollHeight
                }
                
                commandIndex++
                setTimeout(typeCommand, 1500) // Increased delay for better readability
              }, 800) // Increased delay after typing
            }
          }
          
          typeChar()
        } else {
          // Reset and start over
          commandIndex = 0
          if (terminalOutput) terminalOutput.innerHTML = ''
          setTimeout(typeCommand, 2000)
        }
      }
      
      setTimeout(typeCommand, 2000)

      // Code editor line-by-line animation
      const codeLines = document.querySelectorAll('.code-line')
      codeLines.forEach((line, index) => {
        line.style.opacity = '0'
        line.style.transform = 'translateX(-20px)'
        
        setTimeout(() => {
          anime({
            targets: line,
            opacity: [0, 1],
            translateX: [-20, 0],
            duration: 600,
            easing: 'easeOutQuart'
          })
        }, index * 300)
      })

      // Git commit graph animation
      const commitNodes = document.querySelectorAll('.commit-node')
      commitNodes.forEach((node, index) => {
        node.style.opacity = '0'
        node.style.scale = '0'
        
        setTimeout(() => {
          anime({
            targets: node,
            opacity: [0, 1],
            scale: [0, 1],
            duration: 800,
            easing: 'easeOutBack'
          })
        }, index * 500)
      })

      // Loading bars animation
      const loadingBars = document.querySelectorAll('.loading-fill')
      loadingBars.forEach((bar, index) => {
        const progress = bar.getAttribute('data-progress') || '100'
        bar.style.width = '0%'
        
        setTimeout(() => {
          anime({
            targets: bar,
            width: [0, progress + '%'],
            duration: 2000,
            delay: index * 300,
            easing: 'easeOutQuart'
          })
        }, 1000 + index * 500)
      })

      // Binary rain animation
      const binaryDigits = document.querySelectorAll('.binary-digit')
      binaryDigits.forEach((digit, index) => {
        digit.style.opacity = '0'
        digit.style.transform = 'translateY(-50px)'
        
        setTimeout(() => {
          anime({
            targets: digit,
            opacity: [0, 0.3],
            translateY: [-50, 0],
            duration: 1000,
            delay: index * 50,
            easing: 'easeOutQuart'
          })
        }, index * 100)
      })

      // Code editor tab switching
      const editorTabs = document.querySelectorAll('.editor-tab')
      editorTabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
          // Remove active class from all tabs
          editorTabs.forEach(t => t.classList.remove('active'))
          // Add active class to clicked tab
          tab.classList.add('active')
          
          // Animate tab switch
          anime({
            targets: tab,
            scale: [1, 1.05, 1],
            duration: 300,
            easing: 'easeOutQuad'
          })
        })
      })

      // Terminal cursor blink with typing effect
      const terminalCursor = document.querySelector('.terminal-cursor')
      if (terminalCursor) {
        // Enhanced cursor animation
        anime({
          targets: terminalCursor,
          opacity: [1, 0, 1],
          duration: 800,
          easing: 'linear',
          loop: true
        })
        
        // Add typing sound effect simulation (visual feedback)
        const typeSoundEffect = () => {
          terminalCursor.style.transform = 'scale(1.2)'
          setTimeout(() => {
            terminalCursor.style.transform = 'scale(1)'
          }, 50)
        }
        
        // Simulate typing sound on each character
        const originalTypeChar = typeChar
        typeChar = () => {
          if (charIndex < command.length) {
            terminalCommand.textContent += command.charAt(charIndex)
            typeSoundEffect() // Visual feedback for typing
            charIndex++
            setTimeout(typeChar, 100)
          } else {
            // ... rest of the function
          }
        }
      }

      // Code syntax highlighting animation
      const codeElements = document.querySelectorAll('.keyword, .function, .variable, .string, .number, .comment')
      codeElements.forEach((element, index) => {
        element.style.opacity = '0'
        
        setTimeout(() => {
          anime({
            targets: element,
            opacity: [0, 1],
            scale: [0.8, 1],
            duration: 400,
            easing: 'easeOutBack'
          })
        }, 1000 + index * 50)
      })
    }
  } catch (error) {
    console.warn('Could not load anime.js for hero background animations:', error)
  }
})
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="%23e2e8f0" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
  opacity: 0.3;
}

[data-theme="dark"] .hero::before {
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="%23334155" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
}

/* Animated Background Elements */
.animated-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
}

/* Background Circles */
.bg-circle {
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(45deg, var(--primary-color), var(--accent-color));
  opacity: 0.1;
  filter: blur(1px);
}

.bg-circle-1 {
  width: 200px;
  height: 200px;
  top: 10%;
  left: 10%;
}

.bg-circle-2 {
  width: 150px;
  height: 150px;
  top: 60%;
  right: 15%;
}

.bg-circle-3 {
  width: 100px;
  height: 100px;
  bottom: 20%;
  left: 20%;
}

/* Background Squares */
.bg-square {
  position: absolute;
  background: linear-gradient(45deg, var(--accent-color), var(--primary-color));
  opacity: 0.08;
  transform: rotate(45deg);
  filter: blur(1px);
}

.bg-square-1 {
  width: 120px;
  height: 120px;
  top: 20%;
  right: 25%;
}

.bg-square-2 {
  width: 80px;
  height: 80px;
  bottom: 30%;
  right: 10%;
}

/* Background Triangles */
.bg-triangle {
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0.12;
  filter: blur(1px);
}

.bg-triangle-1 {
  top: 15%;
  left: 60%;
  border-left: 60px solid transparent;
  border-right: 60px solid transparent;
  border-bottom: 100px solid var(--primary-color);
}

.bg-triangle-2 {
  bottom: 15%;
  left: 70%;
  border-left: 40px solid transparent;
  border-right: 40px solid transparent;
  border-top: 70px solid var(--accent-color);
}

/* Background Waves */
.bg-wave {
  position: absolute;
  width: 300px;
  height: 60px;
  opacity: 0.15;
  filter: blur(2px);
}

.bg-wave-1 {
  top: 25%;
  left: 5%;
  background: linear-gradient(90deg, transparent, var(--primary-color), transparent);
  border-radius: 50%;
  transform: rotate(-15deg);
}

.bg-wave-2 {
  bottom: 25%;
  right: 5%;
  background: linear-gradient(90deg, transparent, var(--accent-color), transparent);
  border-radius: 50%;
  transform: rotate(15deg);
}

/* Background Dots */
.bg-dots {
  position: absolute;
  width: 200px;
  height: 200px;
  opacity: 0.2;
  background-image: radial-gradient(circle, var(--primary-color) 2px, transparent 2px);
  background-size: 20px 20px;
  filter: blur(0.5px);
}

.bg-dots-1 {
  top: 40%;
  left: 5%;
}

.bg-dots-2 {
  bottom: 40%;
  right: 5%;
}

/* Dark theme adjustments */
[data-theme="dark"] .bg-circle,
[data-theme="dark"] .bg-square,
[data-theme="dark"] .bg-triangle,
[data-theme="dark"] .bg-wave,
[data-theme="dark"] .bg-dots {
  opacity: 0.15;
  filter: blur(2px);
}

/* ===== CODING ANIMATIONS ===== */

.coding-animations {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

/* Terminal Window */
.terminal-window {
  position: absolute;
  top: 15%;
  right: 15%;
  width: 280px;
  height: 180px;
  background: var(--bg-dark);
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  font-family: 'Courier New', monospace;
  font-size: 12px;
  overflow: hidden;
}

.terminal-header {
  background: #333;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.terminal-buttons {
  display: flex;
  gap: 6px;
}

.terminal-btn {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  cursor: pointer;
}

.terminal-btn-close { background: #ff5f56; }
.terminal-btn-minimize { background: #ffbd2e; }
.terminal-btn-maximize { background: #27ca3f; }

.terminal-title {
  color: #999;
  font-size: 11px;
  margin-left: 8px;
}

.terminal-content {
  padding: 12px;
  color: #00ff00;
  height: calc(100% - 40px);
  overflow-y: auto;
}

.terminal-line {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.terminal-prompt {
  color: #00ff00;
  font-weight: bold;
}

.terminal-command {
  color: #fff;
}

.terminal-cursor {
  color: #00ff00;
  animation: blink 1s infinite;
}

.terminal-output-line {
  color: #00ff00;
  margin-bottom: 4px;
  font-size: 11px;
  line-height: 1.3;
}

.terminal-output-line:first-child {
  color: #fff;
  font-weight: bold;
}

/* Different colors for different types of output */
.terminal-output-line:nth-child(odd) {
  color: #00ff00;
}

.terminal-output-line:nth-child(even) {
  color: #ffff00;
}

/* Special styling for file listings */
.terminal-output-line:contains('drwxr-xr-x'),
.terminal-output-line:contains('-rw-r--r--') {
  color: #00ffff;
  font-family: 'Courier New', monospace;
}

/* Code Editor */
.code-editor {
  position: absolute;
  top: 15%;
  right: 5%;
  width: 320px;
  height: 200px;
  background: var(--bg-dark);
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  font-family: 'Fira Code', 'Courier New', monospace;
  font-size: 11px;
  overflow: hidden;
}

.editor-header {
  background: #2d2d2d;
  padding: 8px 12px;
  border-bottom: 1px solid #444;
}

.editor-tabs {
  display: flex;
  gap: 4px;
}

.editor-tab {
  padding: 4px 8px;
  background: #444;
  color: #ccc;
  border-radius: 4px 4px 0 0;
  cursor: pointer;
  font-size: 10px;
  transition: all 0.2s ease;
}

.editor-tab.active {
  background: var(--primary-color);
  color: white;
}

.editor-content {
  display: flex;
  height: calc(100% - 40px);
}

.line-numbers {
  background: #1e1e1e;
  padding: 8px 4px;
  color: #666;
  font-size: 10px;
  text-align: right;
  border-right: 1px solid #444;
  min-width: 30px;
}

.line-numbers span {
  display: block;
  line-height: 1.4;
}

.code-lines {
  padding: 8px 12px;
  color: #d4d4d4;
  flex: 1;
}

.code-line {
  line-height: 1.4;
  margin-bottom: 2px;
}

/* Syntax Highlighting */
.keyword { color: #569cd6; }
.function { color: #dcdcaa; }
.variable { color: #9cdcfe; }
.string { color: #ce9178; }
.number { color: #b5cea8; }
.property { color: #9cdcfe; }
.comment { color: #6a9955; }

/* Git Commit Graph */
.git-graph {
  position: absolute;
  bottom: 25%;
  left: 10%;
  display: flex;
  align-items: center;
  gap: 8px;
}

.commit-node {
  width: 12px;
  height: 12px;
  background: var(--primary-color);
  border-radius: 50%;
  border: 2px solid var(--bg-primary);
  box-shadow: 0 2px 8px rgba(var(--primary-color-rgb), 0.3);
}

.commit-line {
  width: 20px;
  height: 2px;
  background: var(--primary-color);
  opacity: 0.5;
}

/* Loading Bars */
.loading-bars {
  position: absolute;
  top: 65%;
  right: 10%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 200px;
}

.loading-bar {
  background: rgba(255, 255, 255, 0.1);
  height: 6px;
  border-radius: 3px;
  overflow: hidden;
  position: relative;
}

.loading-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
  border-radius: 3px;
  transition: width 0.3s ease;
}

.loading-label {
  position: absolute;
  top: -20px;
  left: 0;
  font-size: 10px;
  color: var(--text-secondary);
  font-family: 'Courier New', monospace;
}

/* Binary Rain */
.binary-rain {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  pointer-events: none;
}

.binary-column {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.binary-digit {
  color: var(--primary-color);
  font-family: 'Courier New', monospace;
  font-size: 10px;
  opacity: 0.3;
  animation: binaryFall 3s linear infinite;
}

@keyframes binaryFall {
  0% {
    transform: translateY(-100vh);
    opacity: 0;
  }
  10% {
    opacity: 0.3;
  }
  90% {
    opacity: 0.3;
  }
  100% {
    transform: translateY(100vh);
    opacity: 0;
  }
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

/* Responsive adjustments */
@media (max-width: 1200px) {
  .terminal-window {
    right: 10%;
    width: 250px;
    height: 160px;
  }
  
  .code-editor {
    right: 2%;
    width: 280px;
    height: 180px;
  }
}

@media (max-width: 768px) {
  .terminal-window,
  .code-editor {
    display: none;
  }
  
  .git-graph {
    bottom: 10%;
    left: 10%;
  }
  
  .loading-bars {
    top: 70%;
    right: 10%;
    width: 150px;
  }
  
  .binary-rain {
    opacity: 0.5;
  }
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-sm);
  position: relative;
  z-index: 1;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-2xl);
  align-items: center;
}

.hero-title {
  font-size: var(--font-size-5xl);
  font-weight: 700;
  margin-bottom: var(--spacing-sm);
  line-height: 1.1;
}

.highlight {
  color: var(--primary-color);
  position: relative;
}

.highlight::after {
  content: '';
  position: absolute;
  bottom: 5px;
  left: 0;
  width: 100%;
  height: 8px;
  background-color: var(--accent-color);
  opacity: 0.3;
  z-index: -1;
}

.hero-subtitle {
  font-size: var(--font-size-2xl);
  color: var(--text-secondary);
  margin-bottom: var(--spacing-md);
  font-weight: 500;
}

.hero-description {
  font-size: var(--font-size-lg);
  color: var(--text-secondary);
  margin-bottom: var(--spacing-xl);
  line-height: 1.7;
}

.hero-buttons {
  display: flex;
  gap: var(--spacing-md);
  flex-wrap: wrap;
}

.hero-buttons .btn {
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.hero-buttons .btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s ease;
}

.hero-buttons .btn:hover::before {
  left: 100%;
}

.hero-buttons .btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(var(--primary-color-rgb), 0.3);
}

.hero-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.profile-card {
  background: var(--bg-primary);
  border-radius: var(--radius-xl);
  padding: var(--spacing-xl);
  box-shadow: var(--shadow-xl);
  text-align: center;
  max-width: 300px;
  width: 100%;
  animation: float 6s ease-in-out infinite;
  position: relative;
  overflow: hidden;
}

.profile-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  animation: shimmer 3s infinite;
}

@keyframes shimmer {
  0% { left: -100%; }
  100% { left: 100%; }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

.profile-avatar {
  font-size: 4rem;
  color: var(--primary-color);
  margin-bottom: var(--spacing-md);
}

.profile-info h3 {
  color: var(--text-primary);
  margin-bottom: var(--spacing-xs);
}

.profile-info p {
  color: var(--text-secondary);
  margin-bottom: var(--spacing-md);
}

.profile-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-sm);
}

.stat {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: var(--font-size-2xl);
  font-weight: 700;
  color: var(--primary-color);
  animation: countUp 2s ease-out;
}

@keyframes countUp {
  0% { 
    transform: translateY(20px);
    opacity: 0;
  }
  100% { 
    transform: translateY(0);
    opacity: 1;
  }
}

.stat-label {
  font-size: var(--font-size-sm);
  color: var(--text-light);
}

.scroll-indicator {
  position: absolute;
  bottom: var(--spacing-xl);
  left: 50%;
  transform: translateX(-50%);
  animation: bounce 2s infinite;
}

.scroll-indicator a {
  color: var(--text-secondary);
  font-size: var(--font-size-xl);
  transition: all 0.3s ease;
  display: block;
  padding: 10px;
  border-radius: 50%;
  background: rgba(var(--primary-color-rgb), 0.1);
}

.scroll-indicator a:hover {
  color: var(--primary-color);
  background: rgba(var(--primary-color-rgb), 0.2);
  transform: scale(1.1);
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
  40% { transform: translateX(-50%) translateY(-10px); }
  60% { transform: translateX(-50%) translateY(-5px); }
}

/* RTL Support */
[dir="rtl"] .highlight::after {
  left: auto;
  right: 0;
}

[dir="rtl"] .hero-buttons {
  flex-direction: row-reverse;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
    gap: var(--spacing-xl);
  }

  .hero-title {
    font-size: var(--font-size-4xl);
  }

  .hero-buttons {
    justify-content: center;
  }

  .profile-stats {
    grid-template-columns: 1fr;
    gap: var(--spacing-md);
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: var(--font-size-3xl);
  }

  .hero-subtitle {
    font-size: var(--font-size-xl);
  }

  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }

  .btn {
    width: 100%;
    max-width: 250px;
  }
}
</style> 