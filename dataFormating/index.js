console.log('init');

// Numbers formating
(() => {
  const list = document.querySelectorAll('.social-numbers-formating li');

  const formater = new Intl.NumberFormat('en', {
    notation: 'compact',
  });

  list.forEach((i) => {
    const number = Number.parseFloat(i.innerText.replace(/[^\d.]/g, ''));
    const text = i.innerText.replace(/\d/g, '');
    const formatedNumber = formater.format(number);

    i.innerText = text + formatedNumber;
  });
})();

// Currency formating
(() => {
  const list = document.querySelectorAll('.currency-numbers-formating li');

  const config = [
    {
      lang: 'en',
      style: 'currency',
      currency: 'GBP',
    },
    {
      lang: 'en-us',
      style: 'currency',
      currency: 'USD',
    },
    {
      lang: 'de-DE',
      style: 'currency',
      currency: 'EUR',
    },
    {
      lang: 'ja-JP',
      style: 'currency',
      currency: 'JPY',
    },
    {
      lang: 're-RU',
      style: 'currency',
      currency: 'UAH',
    },
    {
      lang: 'en',
      style: 'currency',
      currency: 'GBP',
      maximumSignificantDigits: 3,
    },
  ];

  list.forEach((i, j) => {
    const { lang, ...rest } = config[j] || {};

    const formater = new Intl.NumberFormat(lang, {
      ...rest,
    });

    const number = Number.parseFloat(i.innerText.replace(/[^\d.]/g, ''));
    const text = i.innerText.replace(/\d/g, '');
    const formatedNumber = formater.format(number);

    i.innerText = text + formatedNumber;
  });
})();

// Currency formating
(() => {
  const list = document.querySelectorAll('.date-time-numbers-formating li');

  const date = new Date();

  const config = [
    {
      lang: 'de-DE',
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    },
    {
      lang: 'en-US',
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'CET',
      timeZoneName: 'short',
    },
    {
      lang: 'en-AU',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      timeZoneName: 'short',
    },
    {
      lang: 'en-US',
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: false,
    },
  ];

  list.forEach((i, j) => {
    const { lang, ...rest } = config[j] || {};

    const formater = new Intl.DateTimeFormat(lang, {
      ...rest,
    });

    const formatedNumber = formater.format(date);

    i.innerText = i.innerText + formatedNumber;
  });
})();
