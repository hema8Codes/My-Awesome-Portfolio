// Mouse Circle
const mouseCircle = document.querySelector(".mouse-circle");
const mouseDot = document.querySelector(".mouse-dot");

let mouseCircleBool = true;


const mouseCircleFn = (x, y) => {
    mouseCircleBool && (mouseCircle.style.cssText = `top:${y}px;left:${x}px;opacity:1`);

    mouseDot.style.cssText = `top:${y}px;left:${x}px;opacity:1`;
}
// End of Mouse Circle

// Animated Circles
const circles = document.querySelectorAll(".circle");
const mainImg = document.querySelector(".main-circle img");

let mX = 0;
let mY = 0;
let cz = 15;
let mz = 10;

const animateCircles = (e, x, y) => {

    if (x < mX) {
        circles.forEach(circle => {
            circle.style.left = `${cz}px`;
        });
        mainImg.style.left = `${mz}px`;
        // console.log("moved to left");
    } else if (x > mX) {
        circles.forEach(circle => {
            circle.style.left = `-${cz}px`;
        });
        mainImg.style.left = `-${mz}px`;
    }

    if (y < mY) {
        circles.forEach(circle => {
            circle.style.top = `${cz}px`;
        });
        mainImg.style.top = `${mz}px`;
        // console.log("move upwards");
    } else if (y > mY) {
        circles.forEach(circle => {
            circle.style.top = `-${cz}px`;
        });
        mainImg.style.top = `-${mz}px`;
    }

    mX = e.clientX;
    mY = e.clientY;
}
// End of Animated Circles

let hoveredElPosition = [];

const stickyElement = (x, y, hoveredEl) => {
    // Sticky Element

    if (hoveredEl.classList.contains("sticky")) {
        hoveredElPosition.length < 1 &&
            (hoveredElPosition = [hoveredEl.offsetTop, hoveredEl.offsetLeft]);

        // console.log(hoveredElPosition);

        hoveredEl.style.cssText = `top:${y}px;left:${x}px`

        if (hoveredEl.offsetTop <= hoveredElPosition[0] - 100 || hoveredEl.offsetTop >= hoveredElPosition[0] + 100 || hoveredEl.offsetLeft <= hoveredElPosition[1] - 100 || hoveredEl.offsetLeft >= hoveredElPosition[1] + 100) {
            hoveredEl.style.cssText = "";
            hoveredElPosition = [];
        }

        hoveredEl.onmouseleave = () => {
            hoveredEl.style.cssText = "";
            hoveredElPosition = [];
        };

    }

    // End of Sticky Element
};

// Mouse Circle Transform
const mouseCircleTransform = (hoveredEl) => {
    if (hoveredEl.classList.contains("pointer-enter")) {
        hoveredEl.onmousemove = () => {
            mouseCircleBool = false;
            mouseCircle.style.cssText = `width: ${hoveredEl.getBoundingClientRect().width}px;height: ${hoveredEl.getBoundingClientRect().height}px;top: ${hoveredEl.getBoundingClientRect().top}px;left: ${hoveredEl.getBoundingClientRect().left}px;opacity: 1;transform: translate(0,0); animation:none;border-radius: ${getComputedStyle(hoveredEl).borderBottomLeftRadius};transition: width 0.6s, height 0.6s, top 0.6s, left 0.6s, transform 0.6s, border-radius 0.6s;`;
        };

        hoveredEl.onmouseleave = () => {
            mouseCircleBool = true;
        };

        document.onscroll = () => {
            if(!mouseCircleBool){
                mouseCircle.style.top = `${hoveredEl.getBoundingClientRect().top}px`;
            }
        };
    }
};
// End of Mouse Circle Transform


document.body.addEventListener("mousemove", (e) => {
    let x = e.clientX;
    let y = e.clientY;

    mouseCircleFn(x, y);
    animateCircles(e, x, y);

    const hoveredEl = document.elementFromPoint(x, y);

    stickyElement(x, y, hoveredEl);
    mouseCircleTransform(hoveredEl);

});

document.body.addEventListener("mouseleave", () => {
    mouseCircle.style.opacity = "0";
    mouseDot.style.opacity = "0";
});

// Main Button
const mainBtns = document.querySelectorAll('.main-btn');

mainBtns.forEach(btn => {
    let ripple;

    btn.addEventListener('mouseenter', e => {
        //   console.log(e.target.getBoundingClientRect());
        const left = e.clientX - e.target.getBoundingClientRect().left;
        const top = e.clientY - e.target.getBoundingClientRect().top;

        ripple = document.createElement("div");
        ripple.classList.add("ripple");
        ripple.style.left = `${left}px`;
        ripple.style.top = `${top}px`;
        btn.prepend(ripple);
    });

    btn.addEventListener('mouseleave', () => {
        btn.removeChild(ripple);
    });
})


// End of Main Button

// About Me Text
// const aboutMeText = document.querySelector('.about-me-text');
// const aboutMeTextContent = "I am a B.tech graduate in Computer Science and Engineering from Guru Gobind Singh Indraprastha University. I am passionate about software development and web development and I love to explore  and learn new technologies and work on challenging projects. Currently I am undergoing training in web development under FJP course at Pepcoding. If you are an employer looking to hire, you can get in touch with me.";
// const aboutMeTextEnding = "Excited to know more? Keep reading below."
// Array.from(aboutMeTextContent).forEach(char => {
//     const span = document.createElement('span');
//     span.textContent = char;
//     aboutMeText.appendChild(span);
//     span.addEventListener('mouseenter', (e) => {
//      e.target.style.animation = "aboutMeTextAnim 5s infinite";
//     })
// });
// const br = document.createElement('br');
// const br2 = document.createElement('br');
// aboutMeText.appendChild(br);
// aboutMeText.appendChild(br2);
// const br3 = document.createElement('br');
// aboutMeText.appendChild(br3);

// Array.from(aboutMeTextEnding).forEach(char => {
//     const span = document.createElement('span');
//     span.textContent = char;
//     aboutMeText.appendChild(span);
//     span.addEventListener('mouseenter', (e) => {
//         e.target.style.animation = "aboutMeTextAnim 5s infinite";
//     })
// });
// End of About Me Text

// education timeline
const items = document.querySelectorAll(".timeline-education li.timeline-list-education");

document.addEventListener('DOMContentLoaded', () => {
    isElementInViewPort;

    callbackFunc;
    window.addEventListener('load', callbackFunc);
    window.addEventListener('resize', callbackFunc);
    window.addEventListener('scroll', callbackFunc);
});

function isElementInViewPort(element) {
    const rect = element.getBoundingClientRect();
    return (rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth));
}

function callbackFunc() {
    for (let i = 0; i < items.length; i++) {
        if (isElementInViewPort(items[i])) {
            items[i].classList.add("in-view");
        }
        // else{
        //     items[i].classList.remove("in-view");
        // }
    }
}
// End of education timeline


// Projects
const container = document.querySelector(".container");
const projects = document.querySelectorAll("#project-links > .project");
const projectHideBtn = document.querySelector(".project-hide-btn");
const projectsLabelGithub = document.querySelectorAll("#project-label");
const projectsVideo = document.querySelectorAll("#project-video");
const projectLinks = document.querySelectorAll("#project-links");


projects.forEach((project, i) => {
    project.addEventListener("mouseenter", () => {
        project.firstElementChild.style.top = `-${project.firstElementChild.offsetHeight - project.offsetHeight + 20}px`;
    });

    project.addEventListener("mouseleave", () => {
        project.firstElementChild.style.top = "2rem";
    });
    // Big Project Image
    project.addEventListener("click", () => {
        const bigImgWrapper = document.createElement("div");
        bigImgWrapper.className = "project-img-wrapper";
        container.appendChild(bigImgWrapper);

        const bigImg = document.createElement("img");
        bigImg.className = "project-img";
        const imgPath = project.firstElementChild.getAttribute("src").split(".")[0];
        // console.log(imgPath);
        bigImg.setAttribute("src", `${imgPath}-big.jpg`);
        bigImgWrapper.appendChild(bigImg);
        document.body.style.overflowY = "hidden";

        document.removeEventListener("scroll", scrollFn);

        mouseCircle.style.opacity = 0;

        progressBarFn(bigImgWrapper);

        bigImgWrapper.onscroll = () => {
            progressBarFn(bigImgWrapper);
        };

        projectHideBtn.classList.add("change");

        projectHideBtn.onclick = () => {
            projectHideBtn.classList.remove("change");
            bigImgWrapper.remove();
            document.body.style.overflowY = "scroll";

            document.addEventListener("scroll", scrollFn);

            progressBarFn();
        };

    });
    // End of Big Project Image

    i >= 6 && (project.style.cssText = "display:none;opacity:0");

    projectsLabelGithub.forEach((label, i) => {
        i >= 6 && (label.style.cssText = "display:none;opacity:0");
    });

    projectsVideo.forEach((video, i) => {
        i >= 6 && (video.style.cssText = "display:none;opacity:0");
    });

    projectLinks.forEach((divlinks, i) => {
        i >= 6 && (divlinks.style.cssText = "display:none;opacity:0");
    });

});

// Projects Button
const section8 = document.querySelector(".section-8")
const projectsBtn = document.querySelector('.projects-btn');
const projectsBtnText = document.querySelector('.projects-btn span');
let showHideBool = true;
projectsBtn.addEventListener('click', (e) => {
    e.preventDefault();

    projectsBtn.firstElementChild.nextElementSibling.classList.toggle("change");

    showHideBool ? (projectsBtnText.textContent = "Show Less") : (projectsBtnText.textContent = "Show More");

    projects.forEach((project, i) => {
        if (i >= 6) {
            if (showHideBool) {
                // show projects
                setTimeout(() => {
                    project.style.display = "flex";
                    section8.scrollIntoView({ block: "end" });
                }, 600);

                setTimeout(() => {
                    project.style.opacity = "1";
                }, i * 200);


            } else {
                // Hide projects
                setTimeout(() => {
                    project.style.display = "none";
                    section8.scrollIntoView({ block: "end" });
                }, 1200);

                setTimeout(() => {
                    project.style.opacity = "0";
                }, i * 100);

            }
        }
    });

    projectsLabelGithub.forEach((label, i) => {
        if (i >= 6) {
            if (showHideBool) {
                // show projects               
                setTimeout(() => {
                    label.style.display = "inline-block";
                    section8.scrollIntoView({ block: "end" });
                }, 600);
                setTimeout(() => {
                    label.style.opacity = "1";
                }, i * 200);
            } else {
                // Hide projects
                setTimeout(() => {
                    label.style.display = "none";
                    section8.scrollIntoView({ block: "end" });
                }, 1200);

                setTimeout(() => {
                    label.style.opacity = "0";
                }, i * 100);
            }
        }
    });

    projectsVideo.forEach((video, i) => {
        if (i >= 6) {

            if (showHideBool) {
                // show projects              
                setTimeout(() => {
                    video.style.display = "inline-flex";
                    section8.scrollIntoView({ block: "end" });
                }, 600);
                setTimeout(() => {
                    video.style.opacity = "1";
                }, i * 200);
            } else {
                // Hide projects
                setTimeout(() => {
                    video.style.display = "none";
                    section8.scrollIntoView({ block: "end" });
                }, 1200);

                setTimeout(() => {
                    video.style.opacity = "0";
                }, i * 100);
            }
        }
    });

    projectLinks.forEach((divLinks, i) => {
        if (i >= 6) {
            if (showHideBool) {
                // show projects               
                setTimeout(() => {
                    divLinks.style.display = "inline";
                    section8.scrollIntoView({ block: "end" });
                }, 600);
                setTimeout(() => {
                    divLinks.style.opacity = "1";
                }, i * 200);
            } else {
                // Hide projects
                setTimeout(() => {
                    divLinks.style.display = "none";
                    section8.scrollIntoView({ block: "end" });
                }, 1200);

                setTimeout(() => {
                    divLinks.style.opacity = "0";
                }, i * 100);
            }
        }
    });

    showHideBool = !showHideBool;

});
// End of Projects Button

// Ends of Projects

//Section 9
document.querySelectorAll(".service-btn").forEach((service) => {
    service.addEventListener("click", (e) => {
        e.preventDefault();

        const serviceText = service.nextElementSibling;
        serviceText.classList.toggle("change");

        const rightPostion = serviceText.classList.contains('change') ? `calc(100% - ${getComputedStyle(service.firstElementChild).width})` : 0;

        service.firstElementChild.style.right = rightPostion
    });
});
//End of Section 9

// Section 12
// Form
const formHeading = document.querySelector(".form-heading");
const formInputs = document.querySelectorAll(".contact-form-input");

formInputs.forEach((input) => {
    if (input.type != "checkbox") {
        input.addEventListener("focus", () => {
            formHeading.style.opacity = "0";
            setTimeout(() => {
                formHeading.textContent = `Your ${input.placeholder}`;
                formHeading.style.opacity = "1";
            }, 300);
        });
    }

    if (input.type != "checkbox") {
        input.addEventListener("blur", () => {
            formHeading.style.opacity = "0";
            setTimeout(() => {
                formHeading.textContent = "Let's Talk";
                formHeading.style.opacity = "1";
            }, 300);
        });
    }


});
// End of Form

// SlideShow
const SlideShow = document.querySelector('.slideshow');

setInterval(() => {

    const firstIcon = SlideShow.firstElementChild;

    firstIcon.classList.add("faded-out");

    const fourthIcon = SlideShow.children[4];
    const fifthIcon = SlideShow.children[5];
    const sixthIcon = SlideShow.children[6];

    fourthIcon.classList.add("light");
    fifthIcon.classList.add("light");

    fourthIcon.previousElementSibling.classList.remove("light");
    fifthIcon.nextElementSibling.classList.add("light");


    setTimeout(() => {
        SlideShow.removeChild(firstIcon);

        SlideShow.appendChild(firstIcon);
        setTimeout(() => {
            firstIcon.classList.remove("faded-out")
        }, 500)
    }, 500)

}, 3000);
// End of SlideShow

// End of Section 12

//section 4

// skills image effect
// Detect request animation frame
var scroll = window.requestAnimationFrame ||
    // IE Fallback
    function (callback) { window.setTimeout(callback, 1000 / 60) };
var elementsToShow = document.querySelectorAll('.show-on-scroll');

function loop() {

    Array.prototype.forEach.call(elementsToShow, function (element) {
        if (isElementInViewport(element)) {
            element.classList.add('is-visible');
        } else {
            element.classList.remove('is-visible');
        }
    });

    scroll(loop);
}

// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
    // special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (
        (rect.top <= 0
            && rect.bottom >= 0)
        ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.top <= (window.innerHeight || document.documentElement.clientHeight))
        ||
        (rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
}
// End of skills image effect

//end of section 4

// section 5
// experience timeline
const eXpitems = document.querySelectorAll(".timeline-experience li.timeline-list-experience");

document.addEventListener('DOMContentLoaded', () => {
    isworkeXpElementInViewPort;

    workeXpcallbackFunc;
    window.addEventListener('load', workeXpcallbackFunc);
    window.addEventListener('resize', workeXpcallbackFunc);
    window.addEventListener('scroll', workeXpcallbackFunc);
});

function isworkeXpElementInViewPort(element) {
    const rect = element.getBoundingClientRect();
    return (rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth));
}

function workeXpcallbackFunc() {
    for (let i = 0; i < eXpitems.length; i++) {
        if (isworkeXpElementInViewPort(eXpitems[i])) {
            eXpitems[i].classList.add("in-view");
        }
        // else{
        //     eXpitems[i].classList.remove("in-view");
        // }
    }
}
// End of experience timeline

// End of section 5


// section - 11
const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);

checkBoxes();

function checkBoxes() {
    const triggerBottom = (window.innerHeight / 5) * 4;

    boxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            box.classList.add("show");
        } else {
            box.classList.remove("show");
        }
    });
}
// End of section - 11





// Progress Bar
const sections = document.querySelectorAll('section')
const progressBar = document.querySelector('.progress-bar')
const halfCircles = document.querySelectorAll('.half-circle');
const halfCircleTop = document.querySelector('.half-circle-top');
const progressBarCircle = document.querySelector('.progress-bar-circle');

let scrolledPortion = 0;
let scrollBool = false;
let imageWrapper = false;

const progressBarFn = (bigImgWrapper) => {

    imageWrapper = bigImgWrapper;
    let pageHeight = 0;
    const pageViewportHeight = window.innerHeight;

    if (!imageWrapper) {
        pageHeight = document.documentElement.scrollHeight;
        scrolledPortion = window.pageYOffset;
    } else {
        pageHeight = imageWrapper.firstElementChild.scrollHeight;
        scrolledPortion = imageWrapper.scrollTop;
    }

    const scrolledPortionDegree = (scrolledPortion / (pageHeight - pageViewportHeight)) * 360;
    halfCircles.forEach((el) => {
        el.style.transform = `rotate(${scrolledPortionDegree}deg)`;

        if (scrolledPortionDegree >= 180) {
            halfCircles[0].style.transform = "rotate(180deg)";
            halfCircleTop.style.opacity = "0";
        } else {
            halfCircleTop.style.opacity = "1";
        }

    });

    scrollBool = scrolledPortion + pageViewportHeight === pageHeight;


    // Arrow Rotation
    if (scrollBool) {
        progressBarCircle.style.transform = "rotate(180deg)";
    } else {
        progressBarCircle.style.transform = "rotate(0)";
    }
    // End of Arrow Rotation

};

// Progress Bar Click

progressBar.addEventListener("click", e => {
    e.preventDefault();

    if (!imageWrapper) {
        const sectionPositions = Array.from(sections).map(
            (section) => scrolledPortion + section.getBoundingClientRect().top
        );

        const position = sectionPositions.find(sectionPosition => {
            return sectionPosition > scrolledPortion;
        });

        scrollBool ? window.scrollTo(0, 0) : window.scrollTo(0, position);
    } else {
        scrollBool ? imageWrapper.scrollTo(0, 0) : imageWrapper.scrollTo(0, imageWrapper.scrollHeight);
    }

});

// End of Progress Bar Click

progressBarFn();

// End of Progress Bar


// Navigation
const menuIcon = document.querySelector(".menu-icon");
const navbar = document.querySelector(".navbar");

const scrollFn = () => {
    menuIcon.classList.add("show-menu-icon");
    navbar.classList.add("hide-navbar");

    if (window.scrollY === 0) {
        menuIcon.classList.remove("show-menu-icon");
        navbar.classList.remove("hide-navbar");
    }

    progressBarFn();
}

document.addEventListener('scroll', scrollFn);

menuIcon.addEventListener("click", () => {
    menuIcon.classList.remove("show-menu-icon");
    navbar.classList.remove("hide-navbar");
});
// End of Navigation

// Mobile Navigation
(() => {
    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("overlay");
    let open = false;
  
    const change = () => {
      if (!open) {
        hamburger.classList.add("open");
        menu.classList.add("menu");
      } else {
        hamburger.classList.remove("open");
        menu.classList.remove("menu");
      }
      open = !open;
    };
  
    hamburger.addEventListener("click", change);
  })();
// End of Mobile Navigation

