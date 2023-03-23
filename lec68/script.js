console.log(document.cookie);
document.cookie = "tty=kiguoot5643w-&$#686&r";
document.cookie = "cw_=jkuyt66_$77#$#@kiguoot5643w-&$#686&r";
let key = encodeURIComponent(window.prompt("Enter Your Key"));
let value = encodeURIComponent(window.prompt("Enter Your Value"));
console.log(decodeURIComponent(key), decodeURIComponent(value));
document.cookie = `${key}=${value}`;
console.log(document.cookie);

/*
In 1 set-cookie call (document.cookie =) makes possible only-and-only 1 cookie-append possible,
others are options (options are delimited by ;) like:- path=, expires=, etc.

expires -> set a cookie expire-date
path -> make the cookie-visible-to-a-specific-endpoint and also accounting-the-endpoint-towards
example:- path=/a; means cookie not only be available in / but also in /a, /a/b, /a/b/c, etc.

NOTE:-
encodeURIComponent/decodeURIComponent -> don't accept data more than 4kb
total-num-cookies-per-domain -> 20+
*/
