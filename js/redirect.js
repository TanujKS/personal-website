function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(window.location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

window.onload = function() {
    var redirectParam = getUrlParameter('redirect');
    var isCardOpened = localStorage.getItem('contactCardOpened');

    if (redirectParam === 'contact-card' && !isCardOpened) {
        localStorage.setItem('contactCardOpened', 'true');
        window.location.href = 'assets/Tanuj Siripurapu.vcf';
    }
};
