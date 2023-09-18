"use client";

import React, { useEffect } from "react";
import * as THREE from "three";
import styles from "./background.module.css";

const ThreeScene = ({ children }) => {
  useEffect(() => {
    // Create a scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById("three-container").appendChild(renderer.domElement);

    // Create a starry background with streaks
    const starsGeometry = new THREE.BufferGeometry();
    const starsMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.02,
      transparent: true, // Enable transparency
      opacity: 0.5, // Initial opacity
    });

    const starsVertices = [];
    for (let i = 0; i < 5000; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = (Math.random() - 0.5) * 2000;
      starsVertices.push(x, y, z);
    }

    starsGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(starsVertices, 3)
    );
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    // Position the camera
    camera.position.z = 5;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Move the stars along the Z-axis to create streaks and fade
      starsGeometry.attributes.position.array.forEach((position, index) => {
        if (index % 3 === 2) {
          if (position < -1000) {
            starsGeometry.attributes.position.array[index] = 1000;
          } else {
            // Adjust the speed of movement
            starsGeometry.attributes.position.array[index] -= 1;

            // Adjust opacity based on Z position for streak effect
            const zPosition = starsGeometry.attributes.position.array[index];
            if (zPosition > -20) {
              const opacity = (zPosition + 20) / 20; // Opacity based on position
              starsMaterial.opacity = opacity;
            }
          }
        }
      });
      starsGeometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return (
    <body>
      <div id="three-container" className={styles.threeJS}></div>
      <main className={styles.htmlContent}>{children}</main>
    </body>
  );
};

export default ThreeScene;
