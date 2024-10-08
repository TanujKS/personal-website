function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(window.location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

window.onload = function() {
    var redirectParam = getUrlParameter('redirect');
    if (redirectParam === 'contact-card') {
        window.location.href = '/Tanuj Siripurapu.vcf';
    }
};
