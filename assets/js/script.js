gsap.matchMedia().add("(min-width: 768px)", () => {
  ScrollTrigger.create({
    trigger: ".mv__flex-left-inner", // ← 内側をpin
    start: "top 125",
    endTrigger: ".intro__content",
    end: "top 100",
    pin: true,
    pinSpacing: false,
    onEnter: () => {
      gsap.to(".mv__flex-left-inner img", {
        scale: 0.8,
        // x: -100, // 左寄せ
        duration: 1,
        ease: "power2.out",
      });
    },
    onLeaveBack: () => {
      gsap.to(".mv__flex-left-inner img", {
        scale: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
      });
    },
  });
});

document.getElementById('hamburger').addEventListener('click', function () {
    // ハンバーガーメニューのクラスをトグル
    document.querySelector('.menu-right').classList.toggle('open');
    // ハンバーガーのクロス用クラスをトグル
    document.body.classList.toggle('hamburger-active');
  });
  // menu-rightをクリックした時の処理
  document.querySelector('.menu-right').addEventListener('click', function () {
    // ハンバーガーメニューのクラスを閉じる
    this.classList.remove('open');
    // ハンバーガーのクロス用クラスも削除
    document.body.classList.remove('hamburger-active');
  });