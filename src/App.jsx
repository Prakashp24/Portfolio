import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000b14, 0.035);

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 10, 45);

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    // 🌊 Waterfall Particles
    const particles = 4000;
    const pos = new Float32Array(particles * 3);
    const speed = new Float32Array(particles);

    for (let i = 0; i < particles; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 60;
      pos[i * 3 + 1] = Math.random() * 120;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 40;
      speed[i] = 0.06 + Math.random() * 0.15;
    }

    const waterGeo = new THREE.BufferGeometry();
    waterGeo.setAttribute("position", new THREE.BufferAttribute(pos, 3));

    const waterMat = new THREE.PointsMaterial({
      size: 0.15,
      color: "#00eaff",
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const waterfall = new THREE.Points(waterGeo, waterMat);
    scene.add(waterfall);

    // ✨ Stars Around
    const starGeo = new THREE.BufferGeometry();
    const starVertices = [];
    for (let i = 0; i < 3000; i++) {
      starVertices.push(
        (Math.random() - 0.5) * 300,
        Math.random() * 200,
        (Math.random() - 0.5) * 300
      );
    }
    starGeo.setAttribute("position", new THREE.Float32BufferAttribute(starVertices, 3));
    const starMat = new THREE.PointsMaterial({
      size: 0.6,
      color: "#ffffff",
      transparent: true,
      opacity: 0.8,
    });
    const stars = new THREE.Points(starGeo, starMat);
    scene.add(stars);

    // 🌈 Aurora Light Planes
    const auroraMat = new THREE.MeshBasicMaterial({
      color: "#0ef",
      transparent: true,
      opacity: 0.08,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
    });

    const aurora1 = new THREE.Mesh(new THREE.PlaneGeometry(200, 100), auroraMat);
    aurora1.position.set(0, 30, -50);
    scene.add(aurora1);

    const aurora2 = aurora1.clone();
    aurora2.position.set(0, 20, 50);
    aurora2.rotation.y = Math.PI / 2;
    scene.add(aurora2);

    // 🌀 Hologram Rings
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x00eaff,
      transparent: true,
      opacity: 0.25
    });

    const ring1 = new THREE.Mesh(new THREE.RingGeometry(12, 13, 64), ringMat);
    ring1.rotation.x = -Math.PI / 2;
    ring1.position.y = -5;
    scene.add(ring1);

    const ring2 = ring1.clone();
    ring2.scale.set(1.5, 1.5, 1.5);
    ring2.position.y = -4;
    scene.add(ring2);

    // Parallex Mouse Motion
    let mouseX = 0;
    let mouseY = 0;
    document.addEventListener("mousemove", (e) => {
      mouseX = (e.clientX - window.innerWidth / 2) * 0.0007;
      mouseY = (e.clientY - window.innerHeight / 2) * 0.0007;
    });

    const animate = () => {
      requestAnimationFrame(animate);

      const p = waterfall.geometry.attributes.position.array;
      for (let i = 0; i < particles; i++) {
        p[i * 3 + 1] -= speed[i];
        if (p[i * 3 + 1] < -10) p[i * 3 + 1] = 110;
      }
      waterfall.geometry.attributes.position.needsUpdate = true;

      waterfall.rotation.z += 0.0008;
      stars.rotation.y += 0.0004;
      ring1.rotation.z += 0.001;
      ring2.rotation.z -= 0.001;

      camera.position.x += (mouseX * 20 - camera.position.x) * 0.04;
      camera.position.y += (mouseY * 10 - camera.position.y) * 0.04;

      renderer.render(scene, camera);
    };
    animate();

    window.addEventListener("resize", () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });
  }, []);

  return (
    <div className="relative min-h-screen bg-black">
      <canvas ref={canvasRef} className="fixed inset-0 z-0" />
      <div className="relative z-10 flex flex-col min-h-screen text-white">
        <Header />
        <main className="flex-grow">
          <Main />
        </main>
        <Footer />
      </div>
      <div className="pointer-events-none fixed inset-0 bg-gradient-to-b from-transparent via-[#00000080] to-black"></div>
    </div>
  );
}

export default App;
