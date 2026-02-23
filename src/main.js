const headerElement = document.querySelector("#header");

window.onscroll = () => {
    if (window.scrollY > 0) {
        headerElement.classList.add("scrolled");
    } else {
        headerElement.classList.remove("scrolled");
    }
};

gsap.from(".nav-item", {
    y: 30,
    duration: 1,
    stagger: 0.1,
    opacity: 0,
});

gsap.from(".subtitle", {
    y: 40,
    duration: 1,
    opacity: 0,
    delay: 0.3,
});

const races = document.querySelector(".timeline-scroll-container");

function getScrollAmount() {
    if (!races) return 0;
    let racesWidth = races.scrollWidth + 120;
    console.log(racesWidth);
    const result = -(racesWidth - window.innerWidth);
    return result > 0 ? 0 : result;
}
const tween = gsap.to(races, {
    x: getScrollAmount,
    ease: "none",
});

ScrollTrigger.create({
    trigger: '.timeline',
    start: "top",
    end: () => `+=${getScrollAmount() * -1}`,
    pin: true,
    animation: tween,
    scrub: 1,
    invalidateOnRefresh: true,
});


const timelineItems = gsap.utils.toArray(".timeline-item");

const line = gsap.to('.timeline-line', {
    width: (timelineItems.length - 1) * timelineItems[0].scrollWidth,
    ease: "none",
});

ScrollTrigger.create({
    trigger: '.timeline',
    start: "top",
    end: () => `+=${getScrollAmount() * -1}`,
    animation: line,
    scrub: 1,
    // snap: .1,
    invalidateOnRefresh: true,
});

const timelineInfoItems = gsap.utils.toArray(".timeline-item-info");

timelineInfoItems.forEach((item, index) => {
    gsap.from(item, {
        y: (index % 2) ? -30 : 30,
        duration: 1,
        opacity: 0,
        scrollTrigger: {
            trigger: '.timeline-scroll-container',
            start: `${index > 3 ? `bottom+=${(index - 3) * 500}px bottom` : 'top 60% top'}`,
            invalidateOnRefresh: true,
        }
    });
})


const characterList = document.querySelectorAll('.character-item')
const characterSelectorList = document.querySelectorAll('.character-selector-item')
const characterSectionElement = document.querySelector('.character-section')

let actualCharacterSelected = 0

const toggleCharacterSelected = (characterIndex = 0) => {
    if (actualCharacterSelected === characterIndex) return
    console.log(characterIndex)
    const backgroundColorsByCharacter = [ '#aa874f', '#647c7e', '#48614a']

    characterSectionElement.style.backgroundColor = backgroundColorsByCharacter[characterIndex]
    characterList[actualCharacterSelected].style.display = 'none'
    characterList[characterIndex].style.display = 'flex'
    gsap.from(characterList[characterIndex], {
        x: 30,
        duration: .7,
        opacity: 0,
    });

    actualCharacterSelected = characterIndex
}

characterSelectorList.forEach((element, index) => {
    element.addEventListener('click', () => {
        toggleCharacterSelected(index);
    })
})

const characterTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: characterSectionElement,
        start: 'top 65% top',
        // markers: true
    }
})
characterTimeline.from(characterSelectorList, {
    y: 100,
    opacity: 0,
    duration: .5,
    stagger: .1,
}).from('.character-nina', {
    x: 40,
    duration: .7,
    opacity: 0,
}, '-=0.2')


const stickers = gsap.utils.toArray('.carrousel-sticker')

stickers.forEach((el) => {
    gsap.to(el, {
        rotate:  gsap.utils.random(-20, 20),
        duration: 1,
        yoyo: true,
        repeat: -1
    })
})



gsap.from('.fundadores-dafne figure', {
    y: -70,
    x: -50,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: '.fundadores-section',
        start: 'top 30% top'
    }
})

gsap.from('.fundadores-omar figure', {
    y: -70,
    // x: -50,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: '.fundadores-section',
        start: 'top 30% top'
    }
})


gsap.from('.fundadores-sol figure', {
    y: -70,
    x: 50,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: '.fundadores-section',
        start: 'top 30% top'
    }
})

gsap.from('.fundadores-item p', {
    y: 30,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: '.fundadores-section',
        start: 'top 30% top'
    }
})

gsap.from('.fundadores-metas-item', {
    x: 40,
    opacity: 0,
    duration: 1.2,
    // stagger: .2,
    scrollTrigger: {
        trigger: '.fundadores-section',
        start: 'top 40% top',
    }
})
