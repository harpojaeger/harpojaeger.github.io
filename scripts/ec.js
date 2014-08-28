$(document).ready(function(){
iFrameResize();
console.debug("parent domain: "+document.domain+", attempting to modify");
document.domain="harpojaeger.com"
console.debug("parent domain is now "+document.domain);
});