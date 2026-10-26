/**
 * =========================================================================
 * JAILER 2 HYDRATION WIDGET (RAJINIKANTH 3D COMPANION EDITION)
 * Authentic Rajinikanth Jailer Hydration Avatar
 * Features:
 *  - Smooth entry walking from bottom-left corner to middle-bottom position
 *  - Idle standing pose with question bubble: "Have you drank water in the last 30 mins???? 💧"
 *  - "YES" -> Authentic Kaavaala hook step dance with rolling hands, hip sway,
 *             knee bounce, celebratory sparkles, and Anirudh Kaavaala synth BGM
 *  - "NO"  -> Dramatic sunglasses flip + cinematic procedural fireball explosion,
 *             shockwave, Hukum theme BGM, and "Hukum... Tiger ka Hukum! ⚡"
 *  - Walk back offscreen to bottom-left after interaction
 *  - Zero static movie photo overlays (100% 3D Caricature Avatar + Procedural VFX)
 * =========================================================================
 */
(function () {
  'use strict';

  const SESSION_STORAGE_KEY = 'jailer_hydration_interacted';
  const TRIGGER_DELAY_MS = 8000; // 8 seconds after page load

  // Clear stale session on local dev reload
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    const lastTime = sessionStorage.getItem('jailer_interacted_timestamp');
    if (!lastTime || Date.now() - parseInt(lastTime, 10) > 60000) {
      sessionStorage.removeItem(SESSION_STORAGE_KEY);
    }
  }

  // Inject CSS Styles
  const styleEl = document.createElement('style');
  styleEl.id = 'jailer-hydration-styles';
  styleEl.textContent = `
    /* =========================================
       JAILER WIDGET CONTAINER & GLOBAL RESET
       ========================================= */
    #jailer-hydration-root {
      position: fixed;
      bottom: 0px;
      left: 0px;
      width: 100vw;
      height: 0px;
      z-index: 99999;
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
      pointer-events: none;
      user-select: none;
      -webkit-user-select: none;
    }

    #jailer-hydration-root * {
      box-sizing: border-box;
    }

    /* =========================================
       STAGE ANCHOR & SCREEN TRANSLATION
       Base anchor is at center-bottom (50vw - 110px).
       Walk animations translate from left-bottom to center!
       ========================================= */
    .jailer-stage {
      position: absolute;
      bottom: 0px;
      left: calc(50vw - 110px);
      width: 220px;
      height: 380px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
      overflow: visible;
      opacity: 0;
      pointer-events: none;
      transform: translate3d(calc(-50vw + 110px - 160px), 0, 0);
      transition: opacity 0.3s ease;
    }

    /* Actively standing at center-bottom */
    .jailer-stage.standing {
      opacity: 1;
      transform: translate3d(0, 0, 0);
      pointer-events: auto;
    }

    /* 1. Motion Capture Walk from bottom-left corner into center-bottom (Linear step velocity) */
    .jailer-stage.walking-in {
      opacity: 1;
      animation: jailerWalkFromLeft 3.6s linear forwards;
      pointer-events: none;
    }

    /* 2. Walk back from center-bottom to bottom-left corner and exit */
    .jailer-stage.walking-out {
      opacity: 1;
      animation: jailerWalkToLeftExit 3.0s linear forwards;
      pointer-events: none;
    }

    @keyframes jailerWalkFromLeft {
      0% {
        transform: translate3d(calc(-50vw + 110px - 180px), 0, 0);
        opacity: 0;
      }
      5% {
        opacity: 1;
      }
      100% {
        transform: translate3d(0, 0, 0);
        opacity: 1;
      }
    }

    @keyframes jailerWalkToLeftExit {
      0% {
        transform: translate3d(0, 0, 0);
        opacity: 1;
      }
      88% {
        opacity: 1;
      }
      100% {
        transform: translate3d(calc(-50vw + 110px - 220px), 0, 0);
        opacity: 0;
      }
    }

    /* =========================================
       SPEECH BUBBLE (ROUNDED COMPANION STYLE)
       Positioned directly above Rajinikanth's head
       ========================================= */
    .jailer-speech-bubble {
      position: absolute;
      left: 50%;
      bottom: 275px;
      width: min(290px, calc(100vw - 32px));
      background: #ffffff;
      border: 1px solid rgba(0, 0, 0, 0.08);
      box-shadow: 0 16px 40px -4px rgba(0, 0, 0, 0.5), 0 0 24px rgba(0, 0, 0, 0.15);
      border-radius: 20px;
      padding: 16px 18px;
      color: #1e293b;
      z-index: 100;
      opacity: 0;
      visibility: hidden;
      transform: translateX(-50%) translateY(14px) scale(0.92);
      transition: opacity 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275), transform 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      pointer-events: none;
    }

    .jailer-speech-bubble.visible {
      opacity: 1;
      visibility: visible;
      transform: translateX(-50%) translateY(0) scale(1);
      pointer-events: auto;
      display: block;
    }

    /* Downward triangular speech tail pointing to Rajini's head */
    .jailer-speech-bubble::before {
      content: '';
      position: absolute;
      left: 50%;
      margin-left: -10px;
      bottom: -10px;
      width: 0;
      height: 0;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-top: 10px solid #ffffff;
      filter: drop-shadow(0 2px 2px rgba(0,0,0,0.1));
    }

    .jailer-bubble-text {
      font-size: 13.5px;
      font-weight: 700;
      line-height: 1.45;
      color: #0f172a;
      margin-bottom: 12px;
      letter-spacing: -0.01em;
      text-align: center;
    }

    .jailer-btn-group {
      display: flex;
      gap: 10px;
      width: 100%;
    }

    .jailer-btn {
      flex: 1;
      padding: 9px 16px;
      font-size: 13px;
      font-weight: 800;
      border-radius: 9999px;
      cursor: pointer;
      border: none;
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      outline: none;
      letter-spacing: 0.03em;
    }

    .jailer-btn-yes {
      background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%);
      color: #ffffff;
      box-shadow: 0 4px 14px rgba(2, 132, 199, 0.4);
    }

    .jailer-btn-yes:hover {
      background: linear-gradient(135deg, #38bdf8 0%, #0284c7 100%);
      transform: translateY(-2px);
      box-shadow: 0 6px 18px rgba(2, 132, 199, 0.6);
    }

    .jailer-btn-no {
      background: #f8fafc;
      color: #475569;
      border: 1px solid #cbd5e1;
      box-shadow: 0 2px 6px rgba(0,0,0,0.06);
    }

    .jailer-btn-no:hover {
      background: #fee2e2;
      color: #dc2626;
      border-color: #fca5a5;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(220, 38, 38, 0.2);
    }

    .jailer-btn:active {
      transform: scale(0.96);
    }

    /* Response / Tagline Box */
    .jailer-response-box {
      display: none;
      flex-direction: column;
      gap: 6px;
      text-align: center;
      animation: fadeInScale 0.35s ease forwards;
    }

    .jailer-response-box.active {
      display: flex;
    }

    .jailer-msg {
      font-size: 14.5px;
      font-weight: 800;
      color: #0284c7;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
    }

    .jailer-msg.cheers {
      color: #059669;
      font-size: 16px;
    }

    .jailer-tagline {
      font-size: 13px;
      font-weight: 900;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      background: linear-gradient(90deg, #d97706, #dc2626, #f59e0b);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      line-height: 1.35;
      animation: glowPulse 1s infinite alternate;
    }

    @keyframes glowPulse {
      0% { filter: drop-shadow(0 0 2px rgba(217, 119, 6, 0.5)); }
      100% { filter: drop-shadow(0 0 8px rgba(220, 38, 38, 0.85)); }
    }

    @keyframes fadeInScale {
      0% { opacity: 0; transform: scale(0.9); }
      100% { opacity: 1; transform: scale(1); }
    }

    /* =========================================
       AVATAR FIGURE CONTAINER & ANIMATIONS
       ========================================= */
    .rajini-avatar-wrapper {
      position: absolute;
      bottom: 0px;
      left: 50%;
      transform: translateX(-50%);
      width: 155px;
      height: 270px;
      z-index: 10;
      pointer-events: none;
      transform-origin: bottom center;
    }

    .avatar-shadow {
      position: absolute;
      bottom: -4px;
      left: 50%;
      transform: translateX(-50%);
      width: 100px;
      height: 14px;
      background: radial-gradient(ellipse at center, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0) 72%);
      z-index: 1;
      pointer-events: none;
      transition: transform 0.3s ease;
    }

    .avatar-img-container {
      position: relative;
      width: 100%;
      height: 100%;
      z-index: 2;
      transform-origin: bottom center;
    }

    .avatar-img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: bottom center;
      display: block;
      pointer-events: none;
      filter: drop-shadow(0 10px 16px rgba(0, 0, 0, 0.6));
    }

    /* Poses */
    .avatar-walk-container {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: none;
    }

    .walk-frame {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: bottom center;
      display: none;
    }

    .avatar-img.pose-stand {
      display: block;
    }

    .avatar-img.pose-dance {
      display: none;
    }

    .avatar-img.pose-angry {
      display: none;
    }

    /* =========================================
       1. AUTHENTIC HUMAN MOTION CAPTURE WALK CYCLE
       6-frame side-profile strides, synchronized heel-strikes,
       biomechanical 2-cycle pelvis bobbing & contact shadow
       ========================================= */
    .rajini-avatar-wrapper.walking .avatar-walk-container {
      display: block !important;
    }
    .rajini-avatar-wrapper.walking .avatar-img.pose-stand,
    .rajini-avatar-wrapper.walking .avatar-img.pose-dance,
    .rajini-avatar-wrapper.walking .avatar-img.pose-angry {
      display: none !important;
    }

    /* Biomechanical human pelvis bobbing (low at contact, high at midstance) */
    .rajini-avatar-wrapper.walking .avatar-img-container {
      animation: avatarMocapBob 0.69s infinite linear;
    }

    .rajini-avatar-wrapper.walking .avatar-shadow {
      animation: avatarMocapShadow 0.69s infinite linear;
    }

    @keyframes avatarMocapBob {
      0% {
        transform: translateY(0);
      }
      25% {
        transform: translateY(-8px);
      }
      50% {
        transform: translateY(0);
      }
      75% {
        transform: translateY(-8px);
      }
      100% {
        transform: translateY(0);
      }
    }

    @keyframes avatarMocapShadow {
      0% {
        transform: translateX(-50%) scale(1.12);
        opacity: 0.7;
      }
      25% {
        transform: translateX(-50%) scale(0.85);
        opacity: 0.4;
      }
      50% {
        transform: translateX(-50%) scale(1.12);
        opacity: 0.7;
      }
      75% {
        transform: translateX(-50%) scale(0.85);
        opacity: 0.4;
      }
      100% {
        transform: translateX(-50%) scale(1.12);
        opacity: 0.7;
      }
    }

    /* Turning to walk back left (Horizontal flip preserved) */
    .rajini-avatar-wrapper.walk-left {
      transform: translateX(-50%) scaleX(-1);
    }

    /* =========================================
       2. IDLE BREATHING / STANDING POSE
       ========================================= */
    .rajini-avatar-wrapper.idle .avatar-walk-container {
      display: none !important;
    }
    .rajini-avatar-wrapper.idle .avatar-img.pose-stand {
      display: block !important;
    }
    .rajini-avatar-wrapper.idle .avatar-img.pose-dance,
    .rajini-avatar-wrapper.idle .avatar-img.pose-angry {
      display: none !important;
    }

    .rajini-avatar-wrapper.idle .avatar-img-container {
      animation: avatarIdleBreath 2.2s infinite alternate ease-in-out;
    }

    @keyframes avatarIdleBreath {
      0% {
        transform: translateY(0) scaleY(1);
      }
      100% {
        transform: translateY(-2px) scaleY(1.008);
      }
    }

    /* =========================================
       3. AUTHENTIC JAILER KAAVAALA HOOK STEP (YES)
       Rolling hands, hip sway, knee bounce & beat groove
       ========================================= */
    .rajini-avatar-wrapper.dancing .avatar-walk-container {
      display: none !important;
    }
    .rajini-avatar-wrapper.dancing .avatar-img.pose-stand {
      display: none !important;
    }
    .rajini-avatar-wrapper.dancing .avatar-img.pose-dance {
      display: block !important;
    }
    .rajini-avatar-wrapper.dancing .avatar-img.pose-angry {
      display: none !important;
    }
       Rolling hands, hip sway, knee bounce & beat groove
       ========================================= */
    .rajini-avatar-wrapper.dancing .avatar-img.pose-stand {
      display: none !important;
    }

    .rajini-avatar-wrapper.dancing .avatar-img.pose-dance {
      display: block !important;
    }

    .rajini-avatar-wrapper.dancing {
      animation: kaavaalaGroove 0.54s infinite alternate cubic-bezier(0.45, 0.05, 0.55, 0.95);
    }

    .rajini-avatar-wrapper.dancing .avatar-img-container {
      animation: kaavaalaHookStep 1.08s infinite cubic-bezier(0.45, 0.05, 0.55, 0.95);
    }

    .rajini-avatar-wrapper.dancing .avatar-shadow {
      animation: kaavaalaShadow 0.54s infinite alternate ease-in-out;
    }

    @keyframes kaavaalaGroove {
      0% {
        transform: translateX(-50%) translateY(0);
      }
      100% {
        transform: translateX(-50%) translateY(-10px);
      }
    }

    /* Signature Kaavaala side-to-side hip sway + rolling hands groove */
    @keyframes kaavaalaHookStep {
      0% {
        transform: translateX(-9px) rotate(-6.5deg) scaleX(1);
      }
      25% {
        transform: translateX(0px) rotate(0deg) scaleX(1.02);
      }
      50% {
        transform: translateX(9px) rotate(6.5deg) scaleX(1);
      }
      75% {
        transform: translateX(0px) rotate(0deg) scaleX(1.02);
      }
      100% {
        transform: translateX(-9px) rotate(-6.5deg) scaleX(1);
      }
    }

    @keyframes kaavaalaShadow {
      0% {
        transform: translateX(-50%) scaleX(1.15) scaleY(1.0);
        opacity: 0.65;
      }
      100% {
        transform: translateX(-50%) scaleX(0.88) scaleY(0.9);
        opacity: 0.45;
      }
    }

    /* =========================================
       4. SUNGLASSES FLIP & TIGER ATTITUDE
       Animated vector sunglasses flip off Rajini's face into explosion
       ========================================= */
    .flying-glasses {
      position: absolute;
      top: 24px;
      left: 50%;
      margin-left: -20px;
      width: 40px;
      height: 18px;
      z-index: 25;
      opacity: 0;
      pointer-events: none;
    }

    .rajini-avatar-wrapper.flipping-glasses .flying-glasses {
      animation: glassesSpinFlip 1.4s cubic-bezier(0.18, 0.89, 0.32, 1.28) forwards;
    }

    @keyframes glassesSpinFlip {
      0% {
        opacity: 0;
        transform: translate(0, 0) scale(1) rotate(0deg);
      }
      8% {
        opacity: 1;
        transform: translate(0, 0) scale(1.1) rotate(0deg);
      }
      35% {
        opacity: 1;
        transform: translate(25px, -55px) scale(1.5) rotate(360deg);
      }
      65% {
        opacity: 1;
        transform: translate(50px, -90px) scale(1.7) rotate(720deg);
      }
      90% {
        opacity: 0.8;
        transform: translate(75px, -40px) scale(1.2) rotate(1080deg);
      }
      100% {
        opacity: 0;
        transform: translate(90px, 0px) scale(0.8) rotate(1440deg);
      }
    }

    /* =========================================
       4. INTENSE ANGRY TIGER HUKUM STATE (NO)
       Angry face glare, clenched fist, trembling fury,
       and sunglasses flip into procedural explosion
       ========================================= */
    .rajini-avatar-wrapper.flipping-glasses .avatar-walk-container,
    .rajini-avatar-wrapper.angry .avatar-walk-container {
      display: none !important;
    }
    .rajini-avatar-wrapper.flipping-glasses .avatar-img.pose-stand,
    .rajini-avatar-wrapper.angry .avatar-img.pose-stand {
      display: none !important;
    }
    .rajini-avatar-wrapper.flipping-glasses .avatar-img.pose-dance,
    .rajini-avatar-wrapper.angry .avatar-img.pose-dance {
      display: none !important;
    }
    .rajini-avatar-wrapper.flipping-glasses .avatar-img.pose-angry,
    .rajini-avatar-wrapper.angry .avatar-img.pose-angry {
      display: block !important;
    }

    .rajini-avatar-wrapper.flipping-glasses .avatar-img-container,
    .rajini-avatar-wrapper.angry .avatar-img-container {
      animation: rajiniAngryTremble 1.8s ease forwards;
    }

    @keyframes rajiniAngryTremble {
      0% { transform: translateY(0) scale(1) rotate(0deg); }
      12% { transform: translateY(-3px) scale(1.03) rotate(-2deg); }
      25% { transform: translateY(-1px) scale(1.02) rotate(2deg); }
      38% { transform: translateY(-3px) scale(1.04) rotate(-1.5deg); }
      55% { transform: translateY(0) scale(1.02) rotate(0.5deg); }
      100% { transform: translateY(0) scale(1.02) rotate(0deg); }
    }

    /* =========================================================================
       MASSIVE CINEMATIC FIRE EXPLOSION ANIMATION (TECHYORA SCI-FI SPEC)
       - Expands to 35-50% Viewport Width
       - White-Hot Ignition Core -> Golden Plasma -> Crimson Corona -> Charcoal Smoke
       - Tall Turbulent Flame Tongues with curling organic bezier oscillation
       - Expanding Circular Shockwaves with heat-haze glow
       - 60-Particle Incandescent Embers & Sparks Engine
       - Total duration ~3.6s with rapid expansion in first 1.0s
       ========================================================================= */
    .jailer-vfx-blast {
      position: absolute;
      left: 50%;
      bottom: 10px;
      transform: translateX(-50%);
      width: min(920px, 50vw);
      height: min(780px, 58vh);
      pointer-events: none;
      opacity: 0;
      z-index: 5;
      overflow: visible;
    }

    .jailer-vfx-blast.explode {
      opacity: 1;
    }

    /* 1. Dual Supersonic Shockwaves */
    .vfx-shockwave-layer {
      position: absolute;
      top: 52%;
      left: 50%;
      width: 40px;
      height: 40px;
      margin-top: -20px;
      margin-left: -20px;
      border-radius: 50%;
      pointer-events: none;
      opacity: 0;
    }

    .jailer-vfx-blast.explode .shockwave-primary {
      border: 6px solid rgba(254, 240, 138, 0.95);
      box-shadow: 0 0 70px rgba(245, 158, 11, 0.95), inset 0 0 35px rgba(239, 68, 68, 0.85);
      animation: shockwaveExpandPrimary 1.4s cubic-bezier(0.08, 0.85, 0.18, 1) forwards;
    }

    .jailer-vfx-blast.explode .shockwave-secondary {
      border: 3px solid rgba(249, 115, 22, 0.85);
      box-shadow: 0 0 50px rgba(220, 38, 38, 0.8);
      animation: shockwaveExpandSecondary 1.6s 0.12s cubic-bezier(0.1, 0.8, 0.22, 1) forwards;
    }

    @keyframes shockwaveExpandPrimary {
      0% { transform: scale(0.1); opacity: 1; border-width: 8px; }
      40% { opacity: 0.9; }
      100% { transform: scale(5.2); opacity: 0; border-width: 1px; }
    }

    @keyframes shockwaveExpandSecondary {
      0% { transform: scale(0.1); opacity: 0.9; border-width: 5px; }
      50% { opacity: 0.7; }
      100% { transform: scale(4.4); opacity: 0; border-width: 1px; }
    }

    /* 2. Ignition Flash (Pin-Point Core) */
    .vfx-ignition-flash {
      position: absolute;
      top: 52%;
      left: 50%;
      width: 120px;
      height: 120px;
      margin-top: -60px;
      margin-left: -60px;
      border-radius: 50%;
      background: radial-gradient(circle, #ffffff 0%, #fef08a 35%, rgba(245, 158, 11, 0) 75%);
      box-shadow: 0 0 90px #ffffff, 0 0 160px #f59e0b;
      opacity: 0;
      pointer-events: none;
    }

    .jailer-vfx-blast.explode .vfx-ignition-flash {
      animation: ignitionFlashAnim 0.8s cubic-bezier(0.05, 0.9, 0.2, 1) forwards;
    }

    @keyframes ignitionFlashAnim {
      0% { transform: scale(0.05); opacity: 1; }
      25% { transform: scale(2.8); opacity: 1; }
      100% { transform: scale(4.2); opacity: 0; }
    }

    /* 3. Volumetric 3D Fireball Layers (White -> Gold -> Orange -> Crimson) */
    .vfx-fireball-mass {
      position: absolute;
      top: 52%;
      left: 50%;
      border-radius: 50%;
      pointer-events: none;
      opacity: 0;
      transform-origin: center center;
    }

    /* Core Plasma */
    .jailer-vfx-blast.explode .vfx-fireball-core {
      width: 240px;
      height: 240px;
      margin-top: -120px;
      margin-left: -120px;
      background: radial-gradient(circle at 48% 48%, #ffffff 15%, #fef08a 45%, #f59e0b 75%, transparent 100%);
      filter: blur(6px);
      box-shadow: 0 0 100px #fde047;
      animation: fireballCoreAnim 1.6s cubic-bezier(0.08, 0.85, 0.2, 1) forwards;
    }

    /* Golden Fire Plumes */
    .jailer-vfx-blast.explode .vfx-fireball-gold {
      width: 380px;
      height: 380px;
      margin-top: -190px;
      margin-left: -190px;
      border-radius: 46% 54% 62% 38% / 52% 44% 56% 48%;
      background: radial-gradient(circle at 45% 45%, #fffbeb 10%, #fde047 30%, #ea580c 65%, #b91c1c 85%, transparent 100%);
      filter: blur(10px);
      animation: fireballGoldAnim 2.2s cubic-bezier(0.1, 0.8, 0.22, 1) forwards;
    }

    /* Orange Plasma Plumes */
    .jailer-vfx-blast.explode .vfx-fireball-orange {
      width: 450px;
      height: 450px;
      margin-top: -225px;
      margin-left: -225px;
      border-radius: 58% 42% 35% 65% / 40% 60% 40% 60%;
      background: radial-gradient(circle at 55% 42%, #fbbf24 15%, #f97316 45%, #dc2626 75%, transparent 100%);
      filter: blur(14px);
      animation: fireballOrangeAnim 2.5s cubic-bezier(0.12, 0.75, 0.25, 1) forwards;
    }

    /* Crimson Outer Corona */
    .jailer-vfx-blast.explode .vfx-fireball-crimson {
      width: 530px;
      height: 510px;
      margin-top: -255px;
      margin-left: -265px;
      border-radius: 52% 48% 60% 40% / 48% 55% 45% 52%;
      background: radial-gradient(circle, rgba(234, 88, 12, 0.95) 20%, rgba(220, 38, 38, 0.85) 52%, rgba(127, 29, 29, 0.75) 78%, transparent 100%);
      filter: blur(18px);
      animation: fireballCrimsonAnim 2.8s ease-out forwards;
    }

    @keyframes fireballCoreAnim {
      0% { transform: scale(0.1) rotate(0deg); opacity: 1; }
      35% { transform: scale(1.6) rotate(15deg); opacity: 1; }
      75% { transform: scale(2.2) rotate(30deg); opacity: 0.6; }
      100% { transform: scale(2.6) rotate(45deg); opacity: 0; }
    }

    @keyframes fireballGoldAnim {
      0% { transform: scale(0.1) rotate(0deg); opacity: 1; }
      40% { transform: scale(1.7) rotate(-25deg); opacity: 0.95; }
      80% { transform: scale(2.4) rotate(-55deg); opacity: 0.5; }
      100% { transform: scale(2.8) rotate(-70deg); opacity: 0; }
    }

    @keyframes fireballOrangeAnim {
      0% { transform: scale(0.1) rotate(0deg); opacity: 1; }
      45% { transform: scale(1.8) rotate(35deg); opacity: 0.9; }
      85% { transform: scale(2.5) rotate(70deg); opacity: 0.45; }
      100% { transform: scale(3.0) rotate(90deg); opacity: 0; }
    }

    @keyframes fireballCrimsonAnim {
      0% { transform: scale(0.1) rotate(0deg); opacity: 1; }
      50% { transform: scale(1.9) rotate(-30deg); opacity: 0.85; }
      85% { transform: scale(2.6) rotate(-60deg); opacity: 0.4; }
      100% { transform: scale(3.1) rotate(-85deg); opacity: 0; }
    }

    /* 4. Tall Turbulent Curling Flame Tongues */
    .vfx-flame-tongues-container {
      position: absolute;
      top: 52%;
      left: 50%;
      width: 0;
      height: 0;
      pointer-events: none;
    }

    .flame-tongue {
      position: absolute;
      bottom: 0px;
      left: -35px;
      width: 70px;
      height: 230px;
      border-radius: 50% 50% 25% 25% / 70% 70% 30% 30%;
      background: linear-gradient(to top, rgba(254, 240, 138, 0.98) 0%, rgba(249, 115, 22, 0.9) 40%, rgba(220, 38, 38, 0.75) 75%, transparent 100%);
      filter: blur(4px) drop-shadow(0 0 25px #f59e0b);
      transform-origin: bottom center;
      opacity: 0;
      pointer-events: none;
    }

    .jailer-vfx-blast.explode .flame-tongue {
      animation: flameTongueRise 2.4s cubic-bezier(0.1, 0.8, 0.25, 1) forwards;
    }

    .jailer-vfx-blast.explode .tongue-1 { transform: rotate(-38deg) scaleY(1.1); animation-delay: 0.05s; }
    .jailer-vfx-blast.explode .tongue-2 { transform: rotate(-22deg) scaleY(1.3); animation-delay: 0.08s; width: 85px; height: 260px; }
    .jailer-vfx-blast.explode .tongue-3 { transform: rotate(-8deg) scaleY(1.45); animation-delay: 0.02s; width: 90px; height: 290px; }
    .jailer-vfx-blast.explode .tongue-4 { transform: rotate(10deg) scaleY(1.4); animation-delay: 0.06s; width: 85px; height: 280px; }
    .jailer-vfx-blast.explode .tongue-5 { transform: rotate(26deg) scaleY(1.25); animation-delay: 0.10s; }
    .jailer-vfx-blast.explode .tongue-6 { transform: rotate(44deg) scaleY(1.1); animation-delay: 0.14s; }
    .jailer-vfx-blast.explode .tongue-7 { transform: rotate(-55deg) scaleY(0.95); animation-delay: 0.12s; }
    .jailer-vfx-blast.explode .tongue-8 { transform: rotate(0deg) scaleY(1.55); animation-delay: 0.04s; width: 100px; height: 320px; }

    @keyframes flameTongueRise {
      0% {
        opacity: 0;
        transform: rotate(var(--rot, 0deg)) translateY(0) scale(0.2);
      }
      20% {
        opacity: 0.95;
        transform: rotate(calc(var(--rot, 0deg) + 4deg)) translateY(-40px) scale(1.1);
      }
      50% {
        opacity: 0.85;
        transform: rotate(calc(var(--rot, 0deg) - 6deg)) translateY(-100px) scale(1.4);
      }
      80% {
        opacity: 0.4;
        transform: rotate(calc(var(--rot, 0deg) + 8deg)) translateY(-160px) scale(1.2);
      }
      100% {
        opacity: 0;
        transform: rotate(var(--rot, 0deg)) translateY(-220px) scale(0.8);
      }
    }

    /* 5. Billowing Dark Smoke Clouds */
    .vfx-smoke-cloud {
      position: absolute;
      top: 52%;
      left: 50%;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(63, 63, 70, 0.75) 25%, rgba(24, 24, 27, 0.9) 65%, transparent 95%);
      filter: blur(14px);
      pointer-events: none;
      opacity: 0;
    }

    .jailer-vfx-blast.explode .vfx-smoke-1 {
      width: 280px;
      height: 260px;
      margin-top: -130px;
      margin-left: -140px;
      animation: smokeRollUp 3.4s 0.25s ease-out forwards;
    }

    .jailer-vfx-blast.explode .vfx-smoke-2 {
      width: 320px;
      height: 290px;
      margin-top: -160px;
      margin-left: -120px;
      animation: smokeRollUp 3.6s 0.35s ease-out forwards;
    }

    .jailer-vfx-blast.explode .vfx-smoke-3 {
      width: 340px;
      height: 310px;
      margin-top: -140px;
      margin-left: -190px;
      animation: smokeRollUp 3.8s 0.45s ease-out forwards;
    }

    @keyframes smokeRollUp {
      0% { transform: scale(0.3) translateY(0); opacity: 0; }
      25% { transform: scale(1.4) translateY(-40px); opacity: 0.8; }
      65% { transform: scale(2.4) translateY(-120px); opacity: 0.5; }
      100% { transform: scale(3.2) translateY(-200px); opacity: 0; }
    }

    /* 6. High-Performance Canvas for 60-Particle Incandescent Embers & Sparks */
    .vfx-ember-canvas {
      position: absolute;
      top: 52%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: min(920px, 50vw);
      height: min(780px, 58vh);
      pointer-events: none;
      z-index: 6;
    }

    /* Screen Ambient Flash & Shock Shudder */
    .jailer-screen-flash {
      position: fixed;
      inset: 0;
      background: radial-gradient(circle at 50% 70%, rgba(255, 230, 150, 0.95) 0%, rgba(249, 115, 22, 0.8) 45%, rgba(0,0,0,0) 80%);
      z-index: 99998;
      pointer-events: none;
      opacity: 0;
    }

    .jailer-screen-flash.flash {
      animation: screenFlashAnim 0.75s ease-out forwards;
    }

    @keyframes screenFlashAnim {
      0% { opacity: 0; }
      12% { opacity: 1; }
      35% { opacity: 0.85; }
      100% { opacity: 0; }
    }

    .jailer-screen-shake {
      animation: screenShudder 0.7s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    }

    @keyframes screenShudder {
      10%, 90% { transform: translate3d(-10px, 5px, 0); }
      20%, 80% { transform: translate3d(12px, -7px, 0); }
      30%, 50%, 70% { transform: translate3d(-15px, 9px, 0); }
      40%, 60% { transform: translate3d(14px, -8px, 0); }
    }

    /* Water droplets / Kaavaala celebration sparkles */
    .kaavaala-sparkle {
      position: absolute;
      width: 8px;
      height: 8px;
      background: #38bdf8;
      border-radius: 50%;
      pointer-events: none;
      animation: sparkleFloat 1.2s ease-out forwards;
      filter: drop-shadow(0 0 6px #38bdf8);
    }

    @keyframes sparkleFloat {
      0% { opacity: 1; transform: translateY(0) scale(1); }
      100% { opacity: 0; transform: translateY(-60px) scale(0.2); }
    }

    /* Mobile / Small screen optimizations */
    @media (max-width: 480px) {
      .jailer-stage {
        left: calc(50vw - 90px);
        width: 180px;
        height: 340px;
      }
      .rajini-avatar-wrapper {
        width: 130px;
        height: 230px;
      }
      .jailer-speech-bubble {
        bottom: 240px;
        width: calc(100vw - 28px);
        padding: 14px;
      }
    }
  `;
  document.head.appendChild(styleEl);

  // =========================================================================
  // WEB AUDIO API SOUND SYNTHESIS ENGINE
  // =========================================================================
  class JailerAudioEngine {
    constructor() {
      this.ctx = null;
    }

    init() {
      if (!this.ctx) {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        this.ctx = new AudioContextClass();
      }
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    }

    // Authentic Kaavaalaa Chorus Synth Melody & Tropical Latin/Afro Percussion Groove
    playKaavaalaCheers() {
      try {
        this.init();
        const now = this.ctx.currentTime;

        // Anirudh's catchy Kaavaalaa hook melody notes (C# Minor / E Major)
        // "Kaa-vaa-laa... nuvvu kaa-vaa-laa..."
        const melody = [
          // Bar 1: Kaa-vaa-laa...
          { f: 415.30, t: 0.00, d: 0.16 }, // G#4
          { f: 415.30, t: 0.18, d: 0.16 }, // G#4
          { f: 493.88, t: 0.36, d: 0.18 }, // B4
          { f: 554.37, t: 0.56, d: 0.32 }, // C#5 (Kaa-vaa-laa!)

          // Bar 2: Nuv-vu kaa-vaa-laa...
          { f: 493.88, t: 0.92, d: 0.15 }, // B4
          { f: 415.30, t: 1.08, d: 0.15 }, // G#4
          { f: 369.99, t: 1.24, d: 0.16 }, // F#4
          { f: 329.63, t: 1.42, d: 0.28 }, // E4

          // Bar 3: Repeat with higher energy!
          { f: 415.30, t: 1.76, d: 0.16 }, // G#4
          { f: 415.30, t: 1.94, d: 0.16 }, // G#4
          { f: 493.88, t: 2.12, d: 0.18 }, // B4
          { f: 554.37, t: 2.32, d: 0.34 }, // C#5

          // Bar 4: Climax hook resolution
          { f: 659.25, t: 2.70, d: 0.18 }, // E5
          { f: 622.25, t: 2.90, d: 0.18 }, // D#5
          { f: 554.37, t: 3.10, d: 0.20 }, // C#5
          { f: 493.88, t: 3.32, d: 0.22 }, // B4
          { f: 554.37, t: 3.56, d: 0.55 }  // High C#5 sustain!
        ];

        melody.forEach(({ f, t, d }) => {
          // Lead Marimba/Synth Bell
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(f, now + t);

          gain.gain.setValueAtTime(0, now + t);
          gain.gain.linearRampToValueAtTime(0.28, now + t + 0.02);
          gain.gain.exponentialRampToValueAtTime(0.001, now + t + d);

          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(now + t);
          osc.stop(now + t + d + 0.05);

          // Warm harmonic sub-oscillator
          const osc2 = this.ctx.createOscillator();
          const gain2 = this.ctx.createGain();
          osc2.type = 'sine';
          osc2.frequency.setValueAtTime(f * 0.5, now + t);
          gain2.gain.setValueAtTime(0.14, now + t);
          gain2.gain.exponentialRampToValueAtTime(0.001, now + t + d);

          osc2.connect(gain2);
          gain2.connect(this.ctx.destination);
          osc2.start(now + t);
          osc2.stop(now + t + d + 0.05);
        });

        // Bouncy syncopated Afro-beat percussion hits
        const beatTimes = [0.00, 0.25, 0.56, 0.75, 0.92, 1.24, 1.42, 1.76, 2.00, 2.32, 2.52, 2.70, 3.10, 3.32, 3.56];
        beatTimes.forEach((timeOffset) => {
          this.playKaavaalaDrumHit(now + timeOffset);
        });
      } catch (err) {
        console.warn('Audio playback error:', err);
      }
    }

    playKaavaalaDrumHit(time) {
      // Crisp percussion snap
      const buffer = this.ctx.createBuffer(1, this.ctx.sampleRate * 0.04, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < data.length; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (this.ctx.sampleRate * 0.008));
      }
      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;
      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.18, time);
      gain.gain.exponentialRampToValueAtTime(0.001, time + 0.035);
      noise.connect(gain);
      gain.connect(this.ctx.destination);
      noise.start(time);

      // Low bouncy kick thud
      const kick = this.ctx.createOscillator();
      const kickGain = this.ctx.createGain();
      kick.type = 'sine';
      kick.frequency.setValueAtTime(120, time);
      kick.frequency.exponentialRampToValueAtTime(45, time + 0.07);
      kickGain.gain.setValueAtTime(0.25, time);
      kickGain.gain.exponentialRampToValueAtTime(0.001, time + 0.08);
      kick.connect(kickGain);
      kickGain.connect(this.ctx.destination);
      kick.start(time);
      kick.stop(time + 0.09);
    }

    // Dramatic Bomb Blast Explosion + Hukum Tiger Theme BGM
    playHukumExplosion() {
      try {
        this.init();
        const now = this.ctx.currentTime;

        const dur = 1.8;
        const buffer = this.ctx.createBuffer(1, this.ctx.sampleRate * dur, this.ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < data.length; i++) {
          data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (this.ctx.sampleRate * 0.45));
        }
        const noise = this.ctx.createBufferSource();
        noise.buffer = buffer;

        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(2200, now);
        filter.frequency.exponentialRampToValueAtTime(60, now + 1.3);

        const noiseGain = this.ctx.createGain();
        noiseGain.gain.setValueAtTime(0.85, now);
        noiseGain.gain.exponentialRampToValueAtTime(0.001, now + dur);

        noise.connect(filter);
        filter.connect(noiseGain);
        noiseGain.connect(this.ctx.destination);
        noise.start(now);

        const sub = this.ctx.createOscillator();
        const subGain = this.ctx.createGain();
        sub.type = 'sine';
        sub.frequency.setValueAtTime(190, now);
        sub.frequency.exponentialRampToValueAtTime(28, now + 1.3);

        subGain.gain.setValueAtTime(0.95, now);
        subGain.gain.exponentialRampToValueAtTime(0.001, now + 1.5);

        sub.connect(subGain);
        subGain.connect(this.ctx.destination);
        sub.start(now);
        sub.stop(now + 1.6);

        // Iconic Hukum Theme Riff
        const hukumNotes = [
          { f: 73.42, t: 0.35, d: 0.20 },   // D2
          { f: 73.42, t: 0.60, d: 0.20 },   // D2
          { f: 87.31, t: 0.85, d: 0.22 },   // F2
          { f: 73.42, t: 1.10, d: 0.20 },   // D2
          { f: 98.00, t: 1.35, d: 0.25 },   // G2
          { f: 103.83, t: 1.62, d: 0.32 },  // G#2
          { f: 73.42, t: 2.00, d: 0.90 }    // D2 Tiger Theme climax
        ];

        hukumNotes.forEach(({ f, t, d }) => {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          const lpf = this.ctx.createBiquadFilter();

          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(f * 2, now + t);

          lpf.type = 'lowpass';
          lpf.frequency.setValueAtTime(2600, now + t);
          lpf.frequency.exponentialRampToValueAtTime(650, now + t + d);
          lpf.Q.value = 4;

          gain.gain.setValueAtTime(0, now + t);
          gain.gain.linearRampToValueAtTime(0.42, now + t + 0.03);
          gain.gain.exponentialRampToValueAtTime(0.001, now + t + d);

          osc.connect(lpf);
          lpf.connect(gain);
          gain.connect(this.ctx.destination);

          osc.start(now + t);
          osc.stop(now + t + d + 0.05);

          const bass = this.ctx.createOscillator();
          const bassGain = this.ctx.createGain();
          bass.type = 'square';
          bass.frequency.setValueAtTime(f, now + t);
          bassGain.gain.setValueAtTime(0.30, now + t);
          bassGain.gain.exponentialRampToValueAtTime(0.001, now + t + d);
          bass.connect(bassGain);
          bassGain.connect(this.ctx.destination);
          bass.start(now + t);
          bass.stop(now + t + d + 0.05);
        });
      } catch (err) {
        console.warn('Audio playback error:', err);
      }
    }
  }

  const audioEngine = new JailerAudioEngine();

  // =========================================================================
  // WIDGET CONTROLLER & LIFECYCLE
  // =========================================================================
  class JailerHydrationWidget {
    constructor() {
      this.hasShownInSession = !!sessionStorage.getItem(SESSION_STORAGE_KEY);
      this.timerId = null;
      this.domRoot = null;
      this.isInteracted = false;
      this.walkInterval = null;
      this.currentWalkFrame = 0;
      this.init();
    }

    init() {
      this.buildDOM();
      this.bindSessionNavigationReset();

      if (!this.hasShownInSession) {
        this.scheduleAppearance(TRIGGER_DELAY_MS);
      }
    }

    startWalkCycle() {
      this.stopWalkCycle();
      this.currentWalkFrame = 0;
      if (!this.domRoot) return;
      const f1 = this.domRoot.querySelector('#walk-frame-1');
      const f2 = this.domRoot.querySelector('#walk-frame-2');
      const f3 = this.domRoot.querySelector('#walk-frame-3');
      const f4 = this.domRoot.querySelector('#walk-frame-4');
      const f5 = this.domRoot.querySelector('#walk-frame-5');
      const f6 = this.domRoot.querySelector('#walk-frame-6');
      const frames = [f1, f2, f3, f4, f5, f6].filter(Boolean);

      frames.forEach((f, idx) => {
        f.style.display = (idx === 0) ? 'block' : 'none';
      });

      // 115ms per frame = 690ms per full 6-frame mocap double-stride!
      this.walkInterval = setInterval(() => {
        this.currentWalkFrame = (this.currentWalkFrame + 1) % frames.length;
        frames.forEach((f, idx) => {
          f.style.display = (idx === this.currentWalkFrame) ? 'block' : 'none';
        });
      }, 115);
    }

    stopWalkCycle() {
      if (this.walkInterval) {
        clearInterval(this.walkInterval);
        this.walkInterval = null;
      }
    }

    // 60-Particle Incandescent Embers & Sparks Physics Engine
    launchEmberParticles(canvas) {
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const cw = canvas.width;
      const ch = canvas.height;
      const originX = cw / 2;
      const originY = ch * 0.52;

      const particleCount = 65;
      const particles = [];

      for (let i = 0; i < particleCount; i++) {
        // Angles bursting outward in a wide 360 circle with strong upper bias
        const angle = Math.random() * Math.PI * 2;
        const speed = 4 + Math.random() * 16;
        particles.push({
          x: originX,
          y: originY,
          vx: Math.cos(angle) * speed * (0.8 + Math.random() * 0.4),
          vy: Math.sin(angle) * speed * (0.8 + Math.random() * 0.4) - 2.5, // thermal lift
          size: 2 + Math.random() * 4.5,
          life: 0,
          maxLife: 80 + Math.random() * 90, // ~1.5 to 3.0 seconds at 60fps
          decay: 0.965, // drag
          colorIndex: Math.random()
        });
      }

      let animId = null;
      const startTime = performance.now();

      const render = (now) => {
        const elapsed = (now - startTime) / 1000;
        ctx.clearRect(0, 0, cw, ch);

        let activeCount = 0;
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          if (p.life >= p.maxLife) continue;

          activeCount++;
          p.life++;
          p.x += p.vx;
          p.y += p.vy;
          p.vx *= p.decay;
          p.vy *= p.decay;
          p.vy -= 0.06; // slight upward thermal draft
          p.vx += (Math.sin(p.life * 0.2) * 0.4); // turbulence sway

          const progress = p.life / p.maxLife;
          const alpha = Math.max(0, 1 - progress);

          // Heat gradient: white -> yellow -> orange -> crimson
          let color;
          if (progress < 0.2) {
            color = `rgba(255, 255, 255, ${alpha})`;
          } else if (progress < 0.45) {
            color = `rgba(254, 240, 138, ${alpha})`;
          } else if (progress < 0.75) {
            color = `rgba(249, 115, 22, ${alpha})`;
          } else {
            color = `rgba(220, 38, 38, ${alpha * 0.8})`;
          }

          ctx.fillStyle = color;
          ctx.shadowColor = '#f59e0b';
          ctx.shadowBlur = 10;
          ctx.beginPath();
          ctx.arc(p.x, p.y, Math.max(0.8, p.size * (1 - progress * 0.6)), 0, Math.PI * 2);
          ctx.fill();
        }

        if (activeCount > 0 && elapsed < 3.8) {
          animId = requestAnimationFrame(render);
        } else {
          ctx.clearRect(0, 0, cw, ch);
          if (animId) cancelAnimationFrame(animId);
        }
      };

      animId = requestAnimationFrame(render);
    }

    bindSessionNavigationReset() {
      document.addEventListener('click', (e) => {
        const link = e.target.closest('a[href]');
        if (link) {
          const href = link.getAttribute('href');
          if (href && !href.startsWith('#') && !href.startsWith('javascript:')) {
            sessionStorage.removeItem(SESSION_STORAGE_KEY);
            sessionStorage.removeItem('jailer_interacted_timestamp');
          }
        }
      });

      window.addEventListener('popstate', () => {
        sessionStorage.removeItem(SESSION_STORAGE_KEY);
        sessionStorage.removeItem('jailer_interacted_timestamp');
      });
    }

    buildDOM() {
      const old = document.getElementById('jailer-hydration-root');
      if (old) old.remove();

      this.domRoot = document.createElement('div');
      this.domRoot.id = 'jailer-hydration-root';

      this.domRoot.innerHTML = `
        <div class="jailer-screen-flash" id="jailer-flash"></div>
        <div class="jailer-stage" id="jailer-stage">
          <!-- Speech Bubble positioned directly above Rajinikanth's head -->
          <div class="jailer-speech-bubble" id="jailer-bubble">
            <div id="jailer-prompt-box">
              <div class="jailer-bubble-text">
                Have you drank water in the last 30 mins???? 💧
              </div>
              <div class="jailer-btn-group">
                <button type="button" class="jailer-btn jailer-btn-yes" id="jailer-btn-yes">
                  <span>YES</span>
                </button>
                <button type="button" class="jailer-btn jailer-btn-no" id="jailer-btn-no">
                  <span>NO</span>
                </button>
              </div>
            </div>

            <!-- Dynamic Response Box -->
            <div class="jailer-response-box" id="jailer-response-box">
              <div class="jailer-msg" id="jailer-msg-text"></div>
              <div class="jailer-tagline" id="jailer-tagline-text"></div>
            </div>
          </div>

          <!-- Massive Cinematic Fire Explosion (Techyora Sci-Fi Spec: 35-50% Viewport Width) -->
          <div class="jailer-vfx-blast" id="jailer-vfx-blast">
            <!-- Dual Expanding Circular Supersonic Shockwaves with Heat Distortion -->
            <div class="vfx-shockwave-layer shockwave-primary"></div>
            <div class="vfx-shockwave-layer shockwave-secondary"></div>

            <!-- Ignition Pin-Point White-Hot Flash Core -->
            <div class="vfx-ignition-flash"></div>

            <!-- Billowing 3D Volumetric Fireball Clouds (Core, Golden, Crimson, Soot) -->
            <div class="vfx-fireball-mass vfx-fireball-core"></div>
            <div class="vfx-fireball-mass vfx-fireball-gold"></div>
            <div class="vfx-fireball-mass vfx-fireball-orange"></div>
            <div class="vfx-fireball-mass vfx-fireball-crimson"></div>
            <div class="vfx-smoke-cloud vfx-smoke-1"></div>
            <div class="vfx-smoke-cloud vfx-smoke-2"></div>
            <div class="vfx-smoke-cloud vfx-smoke-3"></div>

            <!-- Tall Turbulent Curling Flame Tongues (Procedural Curvature) -->
            <div class="vfx-flame-tongues-container">
              <div class="flame-tongue tongue-1"></div>
              <div class="flame-tongue tongue-2"></div>
              <div class="flame-tongue tongue-3"></div>
              <div class="flame-tongue tongue-4"></div>
              <div class="flame-tongue tongue-5"></div>
              <div class="flame-tongue tongue-6"></div>
              <div class="flame-tongue tongue-7"></div>
              <div class="flame-tongue tongue-8"></div>
            </div>

            <!-- 60-Particle Incandescent Embers, Sparks & Trails Canvas -->
            <canvas class="vfx-ember-canvas" id="vfx-ember-canvas" width="900" height="750"></canvas>
          </div>

          <!-- 3D Stylized Rajinikanth Avatar -->
          <div class="rajini-avatar-wrapper" id="rajini-avatar-wrapper">
            <!-- Ground Contact Shadow -->
            <div class="avatar-shadow"></div>

            <!-- Detachable Flying Sunglasses for Flip Effect -->
            <svg class="flying-glasses" id="flying-glasses" viewBox="0 0 60 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="24" height="17" rx="3.5" fill="#18181b" stroke="#09090b" stroke-width="2" />
              <rect x="34" y="2" width="24" height="17" rx="3.5" fill="#18181b" stroke="#09090b" stroke-width="2" />
              <path d="M26 8 H34" stroke="#09090b" stroke-width="3" stroke-linecap="round" />
              <rect x="5" y="4" width="3" height="2" rx="0.5" fill="#f4f4f5" opacity="0.8" />
              <rect x="37" y="4" width="3" height="2" rx="0.5" fill="#f4f4f5" opacity="0.8" />
            </svg>

            <!-- Avatar High-Quality Visual Elements -->
            <div class="avatar-img-container" id="avatar-img-container">
              <!-- 6-Frame Motion-Capture Walk Cycle (Side-Profile Stride) -->
              <div class="avatar-walk-container" id="rajini-walk-container">
                <img src="/images/rajini-mocap-frame1.png" alt="Mocap Step 1" class="avatar-img walk-frame" id="walk-frame-1" style="display: block;" />
                <img src="/images/rajini-mocap-frame2.png" alt="Mocap Step 2" class="avatar-img walk-frame" id="walk-frame-2" style="display: none;" />
                <img src="/images/rajini-mocap-frame3.png" alt="Mocap Step 3" class="avatar-img walk-frame" id="walk-frame-3" style="display: none;" />
                <img src="/images/rajini-mocap-frame4.png" alt="Mocap Step 4" class="avatar-img walk-frame" id="walk-frame-4" style="display: none;" />
                <img src="/images/rajini-mocap-frame5.png" alt="Mocap Step 5" class="avatar-img walk-frame" id="walk-frame-5" style="display: none;" />
                <img src="/images/rajini-mocap-frame6.png" alt="Mocap Step 6" class="avatar-img walk-frame" id="walk-frame-6" style="display: none;" />
              </div>

              <!-- Standing Idle Pose (Turned toward camera with water bottle) -->
              <img src="/images/rajini-standing-clean.png" alt="Rajinikanth Water Avatar" class="avatar-img pose-stand" id="rajini-pose-stand" />

              <!-- Authentic Kaavaala Hook Step Dance Pose (YES) -->
              <img src="/images/rajini-kaavaala-clean.png" alt="Rajinikanth Kaavaala Dance" class="avatar-img pose-dance" id="rajini-pose-dance" />

              <!-- Intense Furious Tiger Glare with Clenched Fist (NO) -->
              <img src="/images/rajini-angry.png" alt="Rajinikanth Furious Tiger Glare" class="avatar-img pose-angry" id="rajini-pose-angry" />
            </div>
          </div>
        </div>
      `;

      document.body.appendChild(this.domRoot);

      const btnYes = this.domRoot.querySelector('#jailer-btn-yes');
      const btnNo = this.domRoot.querySelector('#jailer-btn-no');

      btnYes.addEventListener('click', (e) => {
        e.stopPropagation();
        this.handleYesClick();
      });

      btnNo.addEventListener('click', (e) => {
        e.stopPropagation();
        this.handleNoClick();
      });
    }

    scheduleAppearance(delayMs) {
      if (this.timerId) clearTimeout(this.timerId);
      this.timerId = setTimeout(() => {
        this.triggerWalkIn();
      }, delayMs);
    }

    // Walks from bottom-left corner across to center-bottom, stands, and asks question
    triggerWalkIn() {
      if (this.isInteracted) return;

      const stage = this.domRoot.querySelector('#jailer-stage');
      const bubble = this.domRoot.querySelector('#jailer-bubble');
      const avatarWrapper = this.domRoot.querySelector('#rajini-avatar-wrapper');
      const promptBox = this.domRoot.querySelector('#jailer-prompt-box');
      const responseBox = this.domRoot.querySelector('#jailer-response-box');

      if (promptBox) promptBox.style.display = 'block';
      if (responseBox) responseBox.classList.remove('active');

      // Reset states
      stage.classList.remove('walking-out', 'standing');
      avatarWrapper.classList.remove('walk-left', 'dancing', 'flipping-glasses', 'angry', 'idle');

      // Start walk-in animation from bottom-left with PixelFriend 4-frame cycle
      stage.classList.add('walking-in');
      avatarWrapper.classList.add('walking');
      this.startWalkCycle();

      // Once arrived at center-bottom (3.6s):
      setTimeout(() => {
        this.stopWalkCycle();

        // Stop walking across screen
        stage.classList.remove('walking-in');
        stage.classList.add('standing');

        // Avatar plants feet firmly and transitions to standing idle pose
        avatarWrapper.classList.remove('walking');
        avatarWrapper.classList.add('idle');

        // Reveal speech bubble with spring bounce directly above Rajini
        bubble.classList.add('visible');
      }, 3600);
    }

    // Authentic Kaavaala hook step dance when YES is clicked
    handleYesClick() {
      if (this.isInteracted) return;
      this.isInteracted = true;
      sessionStorage.setItem(SESSION_STORAGE_KEY, 'true');
      sessionStorage.setItem('jailer_interacted_timestamp', Date.now().toString());

      const avatarWrapper = this.domRoot.querySelector('#rajini-avatar-wrapper');
      const promptBox = this.domRoot.querySelector('#jailer-prompt-box');
      const responseBox = this.domRoot.querySelector('#jailer-response-box');
      const msgText = this.domRoot.querySelector('#jailer-msg-text');
      const taglineText = this.domRoot.querySelector('#jailer-tagline-text');
      const bubble = this.domRoot.querySelector('#jailer-bubble');
      const stage = this.domRoot.querySelector('#jailer-stage');

      // 1. Break into authentic Jailer Kaavaala Hook Step dance!
      avatarWrapper.classList.remove('idle', 'walking', 'angry');
      avatarWrapper.classList.add('dancing');

      // 2. Play Kaavaalaa synth melody & afro percussion
      audioEngine.playKaavaalaCheers();

      // 3. Show joyful cheer message
      promptBox.style.display = 'none';
      responseBox.classList.add('active');
      msgText.className = 'jailer-msg cheers';
      msgText.innerHTML = 'Cheers! 🥛 Keep Hydrated!';
      taglineText.innerHTML = '';

      this.spawnSparkles(stage);

      // 4. After 4.2 seconds of Kaavaala dance, stops, turns around and walks back to the left
      setTimeout(() => {
        bubble.classList.remove('visible');

        avatarWrapper.classList.remove('dancing');
        avatarWrapper.classList.add('walking', 'walk-left');
        this.startWalkCycle();

        stage.classList.remove('standing');
        stage.classList.add('walking-out');

        setTimeout(() => {
          this.stopWalkCycle();
          stage.classList.remove('walking-out');
          avatarWrapper.classList.remove('walking', 'walk-left');
        }, 3000);
      }, 4200);
    }

    // Sunglasses Flip + Intense Angry Face + Hukum Blast Explosion when NO is clicked
    handleNoClick() {
      if (this.isInteracted) return;
      this.isInteracted = true;
      sessionStorage.setItem(SESSION_STORAGE_KEY, 'true');
      sessionStorage.setItem('jailer_interacted_timestamp', Date.now().toString());

      const avatarWrapper = this.domRoot.querySelector('#rajini-avatar-wrapper');
      const vfxBlast = this.domRoot.querySelector('#jailer-vfx-blast');
      const sparksOrbit = this.domRoot.querySelector('#vfx-sparks-orbit');
      const flash = this.domRoot.querySelector('#jailer-flash');
      const promptBox = this.domRoot.querySelector('#jailer-prompt-box');
      const responseBox = this.domRoot.querySelector('#jailer-response-box');
      const msgText = this.domRoot.querySelector('#jailer-msg-text');
      const taglineText = this.domRoot.querySelector('#jailer-tagline-text');
      const bubble = this.domRoot.querySelector('#jailer-bubble');
      const stage = this.domRoot.querySelector('#jailer-stage');

      // 1. Switch to Intense Furious Face + Sunglasses flip off Rajini's face with 720 spin
      avatarWrapper.classList.remove('idle', 'walking', 'dancing');
      avatarWrapper.classList.add('angry', 'flipping-glasses');

      // 2. Blast explosion erupts behind Rajini at 0.15s (Ignition -> Detonation)
      setTimeout(() => {
        if (vfxBlast) vfxBlast.classList.add('explode');
        const emberCanvas = this.domRoot.querySelector('#vfx-ember-canvas');
        if (emberCanvas) this.launchEmberParticles(emberCanvas);
        if (flash) flash.classList.add('flash');
        document.body.classList.add('jailer-screen-shake');
        setTimeout(() => {
          document.body.classList.remove('jailer-screen-shake');
        }, 700);

        // 3. Play deep boom explosion + Hukum theme music
        audioEngine.playHukumExplosion();
      }, 150);

      // 4. Update speech bubble with iconic Hukum message
      promptBox.style.display = 'none';
      responseBox.classList.add('active');
      msgText.className = 'jailer-msg';
      msgText.innerHTML = 'Drink water and be Hydrated! 💧';
      taglineText.innerHTML = 'Hukum... Tiger ka Hukum! ⚡';

      // 5. After 4.6 seconds, Rajinikanth turns and walks firmly back to the left
      setTimeout(() => {
        bubble.classList.remove('visible');

        avatarWrapper.classList.remove('flipping-glasses', 'angry');
        avatarWrapper.classList.add('walking', 'walk-left');
        this.startWalkCycle();

        stage.classList.remove('standing');
        stage.classList.add('walking-out');

        setTimeout(() => {
          this.stopWalkCycle();
          stage.classList.remove('walking-out');
          avatarWrapper.classList.remove('walking', 'walk-left');
          if (vfxBlast) vfxBlast.classList.remove('explode');
        }, 3000);
      }, 4600);
    }

    spawnExplosionSparks(container) {
      if (!container) return;
      container.innerHTML = '';
      const sparkCount = 22;
      for (let i = 0; i < sparkCount; i++) {
        const spark = document.createElement('div');
        spark.className = 'vfx-flying-spark';
        const angle = (i / sparkCount) * Math.PI * 2 + (Math.random() * 0.3 - 0.15);
        const distance = 85 + Math.random() * 100;
        const dx = Math.cos(angle) * distance;
        const dy = Math.sin(angle) * distance;
        spark.style.setProperty('--dx', `${dx}px`);
        spark.style.setProperty('--dy', `${dy}px`);
        spark.style.animationDelay = `${Math.random() * 0.1}s`;
        container.appendChild(spark);
      }
    }

    spawnSparkles(container) {
      for (let i = 0; i < 18; i++) {
        setTimeout(() => {
          const sparkle = document.createElement('div');
          sparkle.className = 'kaavaala-sparkle';
          sparkle.style.left = (Math.random() * 120 + 50) + 'px';
          sparkle.style.bottom = (60 + Math.random() * 100) + 'px';
          sparkle.style.background = ['#38bdf8', '#34d399', '#fef08a', '#fbbf24', '#f472b6'][Math.floor(Math.random() * 5)];
          container.appendChild(sparkle);
          setTimeout(() => sparkle.remove(), 1200);
        }, i * 80);
      }
    }

    forceTrigger() {
      sessionStorage.removeItem(SESSION_STORAGE_KEY);
      sessionStorage.removeItem('jailer_interacted_timestamp');
      this.isInteracted = false;
      this.stopWalkCycle();
      const promptBox = this.domRoot.querySelector('#jailer-prompt-box');
      const responseBox = this.domRoot.querySelector('#jailer-response-box');
      const stage = this.domRoot.querySelector('#jailer-stage');
      const bubble = this.domRoot.querySelector('#jailer-bubble');
      const vfxBlast = this.domRoot.querySelector('#jailer-vfx-blast');
      const sparksOrbit = this.domRoot.querySelector('#vfx-sparks-orbit');
      const avatarWrapper = this.domRoot.querySelector('#rajini-avatar-wrapper');

      if (promptBox) promptBox.style.display = 'block';
      if (responseBox) responseBox.classList.remove('active');
      if (bubble) bubble.classList.remove('visible');
      if (vfxBlast) vfxBlast.classList.remove('explode');
      if (sparksOrbit) sparksOrbit.innerHTML = '';
      if (avatarWrapper) avatarWrapper.className = 'rajini-avatar-wrapper';

      stage.className = 'jailer-stage';

      setTimeout(() => {
        this.triggerWalkIn();
      }, 100);
    }
  }

  let jailerWidgetInstance = null;
  function startWidget() {
    if (!jailerWidgetInstance) {
      jailerWidgetInstance = new JailerHydrationWidget();
      window.JailerHydrationWidget = jailerWidgetInstance;
      window.triggerJailerWidget = (force = true) => {
        if (force) jailerWidgetInstance.forceTrigger();
        else jailerWidgetInstance.triggerWalkIn();
      };
      window.resetJailerSession = () => {
        sessionStorage.removeItem(SESSION_STORAGE_KEY);
        sessionStorage.removeItem('jailer_interacted_timestamp');
        console.log('[Jailer Widget] Session reset.');
      };
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startWidget);
  } else {
    startWidget();
  }
})();
