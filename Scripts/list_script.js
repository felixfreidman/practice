document.addEventListener('click', function(event) {
    let variable = event.target.dataset.id;
    if (variable != undefined) {
        document.getElementById(variable).parentNode.removeChild(document.getElementById(variable));


    }
});