console.log('init');

// Numbers formating
const socialNumbersList = document.querySelectorAll(
  '.social-numbers-formating li'
);

const socialNumbersFormater = new Intl.NumberFormat('en', {
  notation: 'compact',
});

(() => {
  socialNumbersList.forEach(i => { 
    const number = Number.parseFloat(i.innerText.replace(/[^\d.]/g, ''))
    const text = i.innerText.replace(/\d/g, '')
    const formatedNumber = socialNumbersFormater.format(number)

    i.innerText = text + formatedNumber
  })
})();
