const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
// buttons.forEach((button)=>{
//     console.log(button);
//     button.addEventListener('click',(e)=>{
//         console.log(e);
//         console.log(e.target);

//         if (e.target.id === 'grey') {
//             body.style.backgroundColor = e.target.id
//         }
//         if (e.target.id === 'orange') {
//             body.style.backgroundColor = e.target.id
//         }
//         if (e.target.id === 'blue') {
//             body.style.backgroundColor = e.target.id
//         }
//         if (e.target.id === 'yellow') {
//             body.style.backgroundColor = e.target.id
//         }
//     })
// })


// using switch

buttons.forEach((button)=>{
    console.log(button);
    button.addEventListener('click',(e)=>{
        console.log(e);
        console.log(e.target);

        switch (e.target.id) {
            case 'grey':
                body.style.backgroundColor = e.target.id
                break;
            case 'orange':
                body.style.backgroundColor = e.target.id
                break;
            case 'blue':
                body.style.backgroundColor = e.target.id
                break;
            case 'yellow':
                body.style.backgroundColor = e.target.id
                break;
        
            default:
                body.style.backgroundColor = 'white'
                break;
        }
    })
})