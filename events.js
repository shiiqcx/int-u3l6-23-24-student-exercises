// We have all of these actions below that we wants to tie to an event!


let hoverCard = document.querySelector('[data-secret="hover"]');
// 1. Add an event listener to reveal the image on hover.
//  - The selector is hoverCard
//  - The event type is mouseover
{
    let image = this.querySelector('.hidden-image');
    image.style.width = '100%';
    image.style.height = '100%';
    image.style.opacity = '1';
}

// 2. Add an event listener to make the image hidden again.
//  - The selector is hoverCard
//  - The event type is mouseout
{
    let image = this.querySelector('.hidden-image');
    image.style.width = '0';
    image.style.height = '0';
    image.style.opacity = '0';
}



const clickCard = document.querySelector('[data-secret="click"]');
// 3. Add an event listener to reveal and animate the shape on click.
//  - The selector is clickCard
//  - The event type is click
{
    clickCard.classList.toggle('revealed');
}


const doubleClickCard = document.querySelector('[data-secret="double-click"]');
// 4. Add an event listener to enlarge the text on double click.
//  - The selector is doubleClickCard
//  - The event type is dblclick
{
    doubleClickCard.classList.toggle('revealed');
}


const keypressCard = document.querySelector('[data-secret="keypress"]');
// 5. Add an event listener to shake the card on any keypress.
//  - The selector is document
//  - The event type is keydown
{
    keypressCard.classList.add('revealed');
    keypressCard.style.animation = "shake 0.5s";
}


// 6. Add an event listener to stop the shaking.
//  - The selector is document
//  - The event type is keyup
{
    keypressCard.classList.remove('revealed');
    keypressCard.style.animation = "";
}