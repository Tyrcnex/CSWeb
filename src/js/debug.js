// Turn on debug mode only if the domain name (split by dot) starts with a number (127.0.0.1 -> 127 turns on debug mode, example.com -> example does not)
// Set the first argument to false if you want debug mode off
let debug = false && !isNaN(location.hostname.split('.')[0]);