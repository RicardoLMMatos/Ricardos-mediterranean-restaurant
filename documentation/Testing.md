# Testing

## Contents

- [Functional Testing](#functional-testing)
    - [Home Page](#home-page)
    - [Form](#booking-page-form)
    - [Gallery](#gallery)
- [Compatibility Testing](#compatibility-testing)
    - [Browser Compatibility](#browser-compatibility)
    - [Device Compatability and Responsiveness Testing](#device-compatability-and-responsiveness-testing)
- [Validator Testing](#validator-testing)
    - [HTML Validation](#html-validation)
        - [Home page](#home-page-1)
        - [Booking page](#booking-page)
        - [Gallery page](#gallery-page)
    - [CSS Validation](#css-validation)
    - [Accessibility and Performance](#accessibility-and-performance)
        - [Home page](#home-page-2)
        - [Booking page](#booking-page-1)
        - [Gallery page](#gallery-page-1)
- [Bugs/Issues](#bugsissues)

## Functional Testing

 - ### Home page
    Test | Result
    ---|:---:
    Page responsiveness | ok
    Sticky navbar | ok
    Navigation hover effect | ok
    Logo link back to homepage | ok
    Navigation links to relevant pages | ok
    Book Now and contact us link to booking form | ok
    Main menu collpases to a burger menu on small screen | ok
    Social media icons in the footer link to the relevant social media and open in new tab | ok

 - ### Booking page (Form)
    Test | Result
    ---|:---:
    Form responsiveness | ok
    Filling out the booking form | ok
    Service hover effect | ok
    Input field effects and animations | ok
    Submiting the data | ok
    Submiting form data goes to thankyou page | ok
    Thank you page link to home page | ok

 - ### Gallery
    Test | Result
    ---|:---:
    Imagery grid responsiveness | ok
    Image hover effect | ok

## Compatibility Testing
### Browser Compatibility
The website was tested on the following browsers:
- Google Chrome
- Mozilla Firefox
- Microsoft Egde



### Device Compatability and Responsiveness Testing
The website was tested using Google Chrome Developer Tools
#### Tested devices:
- iPhone SE
- iPhone XR
- iPhone 12 Pro
- Pixel 5
- Samsung Galaxy S8+
- Samsung Galaxy S20 Ultra
- iPad Air
- iPad Mini
- Surface Pro 7
- Surface Duo
- Galaxy Fold
- Samsung Galaxy A51
- Nest Hub
- Nest Hub Max

I have also tested the website on real mobile devices such as Samsung Galaxy S21, S10, Google Pixel, Huawei P30, Iphone 11 and everything renders as intended and it is 100% responsive.


## Validator Testing

### HTML Validation
The [W3C Markup Validation](https://validator.w3.org/) Service was used to validate the HTML of the website and no errors were found on all html files.
![Home page result](/documentation/readme-images/homepage-html-check.png)
![Gallery page result](/documentation/readme-images/gallery-html-check.png)
![Contact page result](/documentation/readme-images/contact-html-check.png)

### CSS Validation
The [W3C Jigsaw CSS Validation](https://validator.w3.org/) Service was used to check the CSS style sheet and no errors were found.
![CSS check result](/documentation/readme-images/css-validator.png)
  

### Accessibility and Performance
The [Google Chrome LightHouse](https://developer.chrome.com/docs/lighthouse) was used to do check the website performance and accessibility.
#### Results
 - Initial results on performance were very low as the website has quite a few images and they were mostly in jpeg format so I have converted all images to Webp to improve the score.
 - Initial results on accessibility were just over 90% mostly because of some areas not having a sufficient contrast ratio so I have changed the font color from #fafafa to #ffffff to improve the score.
 - Initial results on best practices were just under 90% mostly due to some links not having the area-label atribute so the atribute was added to all links needing it to improve the score.

  |                       **Home page desktop score**                                  |                           **Home page mobile score**                                     |
  | :----------------------------------------------------------:                       | :-------------------------------------------------------------------:                    |
  | ![Home page desktop score](/documentation/readme-images/lighthouse-home-desk.png)  | ![Home page mobile score](/documentation/readme-images/lighthouse-homepage-mob.png)      |
  |                      **Gallery desktop score**                                     |                          **Gallery mobile score**                                        |
  |  ![Gallery desktop score](/documentation/readme-images/lighthouse-gallery-desk.png)| ![Gallery mobile score](/documentation/readme-images/lighthouse-gallery-mob.png)         |
  |                       **Contact page desktop score**                                       |                           **Contact page mobile score**                                  |
  | ![Contact page score](/documentation/readme-images/lighthouse-contact-desk.png)    | ![Contact page mobile score](/documentation/readme-images/lighthouse-contact-mob.png)    |
 


[Back to top](#contents)

[Back to README.md](https://github.com/RicardoLMMatos/Ricardos-mediterranean-restaurant/blob/main/README.md)