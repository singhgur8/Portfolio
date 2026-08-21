/**
 * Interactive Particle Canvas with Mouse Repulsion & Spring Return Physics
 * Inspired by modern high-end interactive tech landing pages (e.g. flock.io)
 */

class InteractiveParticleHeader {
  constructor(options = {}) {
    this.canvasId = options.canvasId || 'heroParticleCanvas';
    this.containerSelector = options.containerSelector || '.hero';
    this.spacing = options.spacing || 14;           // Grid spacing (px) — ultra high density
    this.repelRadius = options.repelRadius || 130;    // Mouse influence radius (px)
    this.repelForce = options.repelForce || 10;      // Repulsion force strength
    this.springConstant = options.springConstant || 0.052; // Spring pull back to home
    this.friction = options.friction || 0.82;        // Velocity damping
    this.dotRadius = options.dotRadius || 1.3;        // Base dot radius
    this.connectDistance = options.connectDistance || 32; // Connection line threshold

    this.canvas = null;
    this.ctx = null;
    this.container = null;
    this.particles = [];
    this.mouse = { x: null, y: null, active: false };
    this.animId = null;

    this.init();
  }

  init() {
    this.canvas = document.getElementById(this.canvasId);
    this.container = document.querySelector(this.containerSelector);

    if (!this.canvas || !this.container) return;

    this.ctx = this.canvas.getContext('2d');

    this.resizeCanvas();
    this.setupEventListeners();
    this.createParticles();
    this.animate();
  }

  setupEventListeners() {
    window.addEventListener('resize', () => {
      this.resizeCanvas();
      this.createParticles();
    });

    // Mouse events on container
    this.container.addEventListener('mousemove', (e) => this.handlePointerMove(e.clientX, e.clientY));
    this.container.addEventListener('mouseenter', () => { this.mouse.active = true; });
    this.container.addEventListener('mouseleave', () => {
      this.mouse.active = false;
      this.mouse.x = null;
      this.mouse.y = null;
    });

    // Touch events for mobile responsiveness
    this.container.addEventListener('touchmove', (e) => {
      if (e.touches.length > 0) {
        this.mouse.active = true;
        this.handlePointerMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    }, { passive: true });

    this.container.addEventListener('touchend', () => {
      this.mouse.active = false;
      this.mouse.x = null;
      this.mouse.y = null;
    });
  }

  handlePointerMove(clientX, clientY) {
    const rect = this.canvas.getBoundingClientRect();
    this.mouse.x = clientX - rect.left;
    this.mouse.y = clientY - rect.top;
  }

  resizeCanvas() {
    const dpr = window.devicePixelRatio || 1;
    const rect = this.container.getBoundingClientRect();
    
    this.canvas.width = rect.width * dpr;
    this.canvas.height = rect.height * dpr;
    this.canvas.style.width = `${rect.width}px`;
    this.canvas.style.height = `${rect.height}px`;

    this.ctx.scale(dpr, dpr);
    this.width = rect.width;
    this.height = rect.height;
  }

  createParticles() {
    this.particles = [];
    const cols = Math.ceil(this.width / this.spacing) + 1;
    const rows = Math.ceil(this.height / this.spacing) + 1;

    // Center grid
    const offsetX = (this.width - (cols - 1) * this.spacing) / 2;
    const offsetY = (this.height - (rows - 1) * this.spacing) / 2;

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const x0 = offsetX + i * this.spacing;
        const y0 = offsetY + j * this.spacing;

        this.particles.push({
          x0: x0,
          y0: y0,
          x: x0,
          y: y0,
          vx: 0,
          vy: 0,
          radius: this.dotRadius + (Math.random() * 0.5 - 0.25),
          baseAlpha: 0.2 + (Math.sin(i * 0.5 + j * 0.5) + 1) * 0.15,
          color: null // Dynamically resolved per frame based on theme
        });
      }
    }
  }

  getThemeColors() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark' ||
      (!document.documentElement.getAttribute('data-theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    return {
      dot: isDark ? 'rgba(186, 230, 253, ' : 'rgba(15, 23, 42, ',
      activeDot: isDark ? 'rgba(96, 165, 250, ' : 'rgba(37, 99, 235, ', // Electric blue glow
      line: isDark ? 'rgba(59, 130, 246, ' : 'rgba(37, 99, 235, '
    };
  }

  animate() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    const theme = this.getThemeColors();

    const pLen = this.particles.length;

    for (let i = 0; i < pLen; i++) {
      const p = this.particles[i];

      // 1. Calculate repulsion if mouse is inside header
      if (this.mouse.active && this.mouse.x !== null && this.mouse.y !== null) {
        const dx = p.x - this.mouse.x;
        const dy = p.y - this.mouse.y;
        const distSq = dx * dx + dy * dy;
        const radiusSq = this.repelRadius * this.repelRadius;

        if (distSq < radiusSq && distSq > 0) {
          const dist = Math.sqrt(distSq);
          const force = Math.pow((this.repelRadius - dist) / this.repelRadius, 1.8) * this.repelForce;
          const angle = Math.atan2(dy, dx);

          p.vx += Math.cos(angle) * force;
          p.vy += Math.sin(angle) * force;
        }
      }

      // 2. Spring force pulling dot back to home position (x0, y0)
      const dxHome = p.x0 - p.x;
      const dyHome = p.y0 - p.y;
      p.vx += dxHome * this.springConstant;
      p.vy += dyHome * this.springConstant;

      // 3. Apply friction damping
      p.vx *= this.friction;
      p.vy *= this.friction;

      // 4. Update position
      p.x += p.vx;
      p.y += p.vy;

      // Displacement amount for dynamic lighting
      const dispSq = (p.x - p.x0) * (p.x - p.x0) + (p.y - p.y0) * (p.y - p.y0);
      const isDisplaced = dispSq > 1;
      const currentAlpha = isDisplaced ? Math.min(0.85, p.baseAlpha + Math.sqrt(dispSq) / 40) : p.baseAlpha;
      const dotColorStr = isDisplaced ? `${theme.activeDot}${currentAlpha})` : `${theme.dot}${currentAlpha})`;

      // 5. Draw Particle Dot
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, isDisplaced ? p.radius * 1.3 : p.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = dotColorStr;
      this.ctx.fill();

      // 6. Optional subtle connection lines between adjacent heavily displaced dots
      if (isDisplaced && dispSq > 15) {
        for (let j = i + 1; j < pLen; j++) {
          const p2 = this.particles[j];
          const cDx = p.x - p2.x;
          const cDy = p.y - p2.y;
          const cDistSq = cDx * cDx + cDy * cDy;

          if (cDistSq < this.connectDistance * this.connectDistance) {
            const lineAlpha = (1 - Math.sqrt(cDistSq) / this.connectDistance) * 0.25;
            this.ctx.beginPath();
            this.ctx.moveTo(p.x, p.y);
            this.ctx.lineTo(p2.x, p2.y);
            this.ctx.strokeStyle = `${theme.line}${lineAlpha})`;
            this.ctx.lineWidth = 0.8;
            this.ctx.stroke();
          }
        }
      }
    }

    this.animId = requestAnimationFrame(() => this.animate());
  }
}

// Instantiate on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  window.particleHeader = new InteractiveParticleHeader();
});
