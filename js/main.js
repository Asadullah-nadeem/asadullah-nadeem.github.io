document.addEventListener('contextmenu', (event) => {
    event.preventDefault();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === "F12") {
      event.preventDefault();
    }
    if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === "i") {
      event.preventDefault();
    }
    if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === "j") {
      event.preventDefault();
    }
    if (event.ctrlKey && event.key.toLowerCase() === "u") {
      event.preventDefault();
    }
    if (event.ctrlKey && event.key.toLowerCase() === "s") {
      event.preventDefault();
    }
    if (event.ctrlKey && event.key.toLowerCase() === "p") {
      event.preventDefault();
    }
  });
  const detectDevTools = () => {
    const threshold = 160;
    const widthThreshold = window.outerWidth - window.innerWidth > threshold;
    const heightThreshold = window.outerHeight - window.innerHeight > threshold;

    if (widthThreshold || heightThreshold) {
      alert("Developer tools are disabled on this site.");
      window.close();
    }
  };

  window.addEventListener('resize', detectDevTools);