gsap.registerPlugin(ScrollTrigger);

const sections = document.querySelectorAll("section");
const colorSections = [...document.querySelectorAll("[data-color]")];


//BAGGRUNDSFARVE PÅ SEKTIONER VED SCROLL
colorSections.forEach((colorSection) => {
const col = colorSection.dataset.color;
  ScrollTrigger.create({
    trigger: colorSection,
    start: "top top",
    end: "bottom center",
    // markers: true,
    onEnter: () => gsap.to("body", { background: col }),
    onEnterBack: () => gsap.to("body", { background: col }),
  });
});

//EFFEKT PÅ SEKTION 1
const vidstedu = document.querySelector("#vidstedu");
const info = document.querySelector(".info");

gsap.from(vidstedu, {
    opacity: 0,
    y: 100,
    duration: 2.5,
    scrollTrigger:{
        trigger: "#vidstedu",
        start: "top 50%",
        end: "+=300",
        y: 200,
        scrub: true,
 
    }
  })
  console.log("hej");

  gsap.from(info, {
    y: 100,
    duration: 2,
    scrollTrigger:{
        opacity: 0,
        trigger: ".info",
        start: "50% 50%",
        end: "+=400",
        y: 200,
        scrub: true,
    }
  })


    //EFFEKT PÅ HVER BØTTE UNDER VARIANTER
  const varianter = document.querySelector('#varianter')
  const imgs = varianter.querySelectorAll('img')


gsap.from(imgs, {
    y: 100,
    stagger: .2,
    scrollTrigger: {
        trigger: varianter,
        start:"50% 50%",
        end:"+=300",
        pin: true,
        scrub: true,
        markers: true
    }
})

sections.forEach((section) => {
  //   const h2 = section.querySelector("h2");
  //   const h3 = section.querySelector("h3");
  //   const p = section.querySelectorAll("p");
//   const blue = section.querySelector(".blue");
//   const orange = section.querySelector(".orange");
//   const red = section.querySelector(".red");
  
  

  gsap
    .timeline({
      scrollTrigger: {
        trigger: imgs,
        start: "50% 50%",
        end: "+=200",
        scrub: true,
        // pin: true,
        // markers: true,
      },
    })
   
//     .from(blue, {
//       y: 100,
//       duration: 2,
//       opacity: 0,
//     })
//     .from(orange, {
//       y: 100,
//       duration: 8,
//       opacity: 0,
//     })
//     .from(red, {
//       y: 100,
//       duration: 12,
//       opacity: 0,
//     });
  // .from(h2, {
  //   y: 100,
  //   duration: 4,
  //   opacity: 0,
  // })
  // .from(h3, {
  //   y: 100,
  //   duration: 4,
  //   opacity: 0,
  // })
  // .from(p, {
  //   y: 100,
  //   duration: 4,
  //   opacity: 0,
  //   stagger: 1,
  // });
});

//PARALLAX EFFEKT
const paraItems = document.querySelectorAll("[data-parallax]");

paraItems.forEach((parallax) => {
  const depth = parallax.dataset.speed;
  const movement = -(parallax.offsetHeight * depth);

  gsap.fromTo(
    parallax,
    {
      y: -movement,
    },
    {
      y: movement,
      ease: "none",
      scrollTrigger: {
        trigger: parallax,
        scrub: true,
        // markers: true,
      },
    }
  );
});
