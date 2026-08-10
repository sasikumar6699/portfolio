import React, { useEffect, useRef } from 'react';

export const HeroCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 500);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 500);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // Node topology setup
    interface Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      label?: string;
      highlight?: boolean;
    }

    const techLabels = ['ERPNext', 'Python', 'AI-Agent', 'React', 'Frappe', 'API', 'SQL', 'Automation', 'CRM'];
    const nodes: Node[] = [];
    const numNodes = 28;

    for (let i = 0; i < numNodes; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 2.5 + 2,
        label: i < techLabels.length ? techLabels[i] : undefined,
        highlight: i < 5,
      });
    }

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle background grid scanline
      const time = Date.now() * 0.001;

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 130;

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.45;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            
            if (nodes[i].highlight && nodes[j].highlight) {
              ctx.strokeStyle = `rgba(57, 255, 20, ${alpha * 1.5})`;
              ctx.lineWidth = 1.2;
            } else {
              ctx.strokeStyle = `rgba(57, 255, 20, ${alpha * 0.6})`;
              ctx.lineWidth = 0.8;
            }
            ctx.stroke();
          }
        }
      }

      // Update & Draw nodes
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 10 || node.x > width - 10) node.vx *= -1;
        if (node.y < 10 || node.y > height - 10) node.vy *= -1;

        // Interaction with mouse
        const mdx = node.x - mouseX;
        const mdy = node.y - mouseY;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        const isHovered = mdist < 90;

        // Node Glow
        ctx.beginPath();
        const currentRadius = isHovered ? node.radius * 2.2 : node.radius;
        ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2);

        if (node.highlight || isHovered) {
          ctx.fillStyle = '#39FF14';
          ctx.shadowColor = '#39FF14';
          ctx.shadowBlur = isHovered ? 20 : 10;
        } else {
          ctx.fillStyle = 'rgba(57, 255, 20, 0.7)';
          ctx.shadowBlur = 0;
        }
        ctx.fill();

        // Draw Label if available
        if (node.label) {
          ctx.font = node.highlight ? 'bold 11px "Fira Code", monospace' : '10px "Fira Code", monospace';
          ctx.fillStyle = node.highlight ? '#ffffff' : 'rgba(200, 255, 200, 0.7)';
          ctx.shadowColor = '#39FF14';
          ctx.shadowBlur = node.highlight ? 8 : 0;
          ctx.fillText(node.label, node.x + 8, node.y + 3);
        }
      });

      // Draw pulsating central radar ring
      ctx.save();
      ctx.translate(width / 2, height / 2);
      ctx.beginPath();
      const ringRadius = 140 + Math.sin(time * 2) * 8;
      ctx.arc(0, 0, ringRadius, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(57, 255, 20, 0.12)';
      ctx.setLineDash([4, 8]);
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (canvas) {
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-[400px] lg:h-[500px] rounded-2xl border border-[#39FF14]/30 bg-[#0A0A0C]/90 shadow-[0_0_40px_rgba(57,255,20,0.15)] overflow-hidden group">
      {/* Visual Overlay Headers */}
      <div className="absolute top-0 left-0 right-0 h-10 bg-[#0D0D0D] border-b border-white/10 px-4 flex items-center justify-between z-10">
        <div className="flex items-center space-x-2">
          <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
          <span className="text-[11px] font-mono text-gray-400 pl-2">architecture-topology.ai</span>
        </div>
        <div className="flex items-center gap-2 text-[10px] font-mono text-[#39FF14]">
          <span className="w-2 h-2 rounded-full bg-[#39FF14] animate-pulse"></span>
          <span>LIVE ARCHITECTURE</span>
        </div>
      </div>

      <canvas ref={canvasRef} className="w-full h-full pt-10" />

      {/* Floating Futuristic HUD Overlay Cards */}
      <div className="absolute bottom-4 left-4 right-4 bg-[#0D0D0D]/90 backdrop-blur-md p-3 rounded-xl border border-[#39FF14]/30 text-xs font-mono flex items-center justify-between z-10 shadow-lg">
        <div className="flex items-center gap-2 text-gray-300">
          <span className="text-[#39FF14]">⚡ SYSTEM STATUS:</span>
          <span>ENTERPRISE READY</span>
        </div>
        <div className="hidden sm:block text-gray-400">
          STACK: ERPNext • Python • AI • React
        </div>
      </div>
    </div>
  );
};
