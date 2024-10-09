# Notes for CS 260
#### Table of contents
*
*
*
*

## Useful Links:
* Final project write up [here](README.md)
* How to use md [here](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#relative-links)
* Link to final project on github [here](https://github.com/KrazyLama789/startup)
* Access server setup info [here](https://github.com/webprogramming260/.github/blob/main/profile/webServers/amazonWebServicesEc2/amazonWebServicesEc2.md)

## Commands
Copy to server: scp -i MRGKeyPair.pem -r simon-html/ ubuntu@blockoutcal.com:services/simon/services
* replace "simon" with startup, when nessesary
ssh -i MRGKeyPair.pem ubuntu@blockoutcal.com
* get into server

## Code
### JavaScript
* html: <button onclick="let i = 1; i++: console.log(i)">
* html: <script> function sayGoodbye() {alert('goodbye');} </script>

## Other:
* aws ec2 -> server instance
    * Live server address -> 34.228.244.123
* aws route 53 -> domain name