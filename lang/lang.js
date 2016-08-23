// Mondido mulang v1.6.1s, (c) Mondido Payments AB 2016, hello@mondido.com

window.__mulang = {
  current: null,
  languages: [
    {name: 'English',code:'en'},
    {name: 'Svenska',code:'sv'},
    {name: 'Deutsch',code:'de'},
    {name: 'Dansk',code:'da'},
    {name: 'Nederlands',code:'nl'},
    {name: 'Suomi',code:'fi'},
    {name: 'EspaÃ±ol',code:'es'},
    {name: 'FranÃ§ais',code:'fr'},
  ],
  en: {
    pay_headline:'Payment',
    amount: 'Amount: <strong>{0} {1}</strong>',
    intro:'Intro',
    card_holder:'Card holder name',
    card_holder_placeholder: 'Firstname Lastname',
    card_number:'Card number',
    card_number_placeholder:'Your card number',
    card_type:'Card type',
    card_type_placeholder: 'VISA / MASTERCARD',
    cvc:'CVV code',
    expiry:'Expiry date',
    pay_button:'Finish payment',
    safe_text:'Your payment is made safe by Mondido. The store will never be in contact with your credit card information, all the information is sent encrypted to your bank. Mondido is PCI DSS Level 1 certified and use HTTPS / TLS, which is the banking industry standard for secure e-commerce transactions.',
    loading: 'Loading',

    exp_month: 'Month',
    exp_year: 'Year',
    card_not_accepted: '{card} is not accepted',
    failed_message: 'Your payment was declined, please try again with a new card or verify your numbers.',
    validation_message: 'All fields need to be filled in. Whats missing is:\n',
    choose_payment_option: 'Please choose payment option',
    card_payment: 'Card',
    swish_payment: 'Swish',
    bank_payment: 'Bank',
    paypal_payment: 'PayPal',
    invoice_payment: 'Invoice',
    paypal_hl: 'Pay easily with PayPal',
    paypal_btn: 'Pay with PayPal',

    individual: 'Individual',
    business: 'Business',

    your_email_address: 'Your email address',
    your_phone_number: 'Your phone number',
    your_mobile_number: 'Your mobile number',
    your_social_security_number: 'Your Social Security number',

    first_name: 'First name',
    last_name: 'Last name',
    address: 'Address',
    co_address: 'c/o Address',
    zip: 'Zip',
    city: 'City',

    i_accept: 'I accept',

    invoice_address_could_not_be_retrieved: 'Your address could not be retrieved . Check that you have entered the correct Social Security number. Example 195203198089',
    invoice_footer_conditions: 'When you select the invoice you will receive your goods before you pay. You can then choose to pay the whole amount at once or split the payment into smaller parts . In order to deal with the bill collectors will be at least 18 years. The invoice will be sent by e -mail. More information can be found at',
    invoice_accept_conditions: 'Yes, I have read and accept Collector Bank\'s  <a target="_new" href="https://www.collector.se/upload/Partners/Agreements/SUCUSE/Credit_terms_All_SE.pdf"> General Conditions For Invoice And Credit Accounts </a> and <a target="_new" href="http://www.collector.se/upload/Partners/Agreements/SUCUSE/SECCI_SE.pdf"> Standardised European Consumer Credit Information </a> , and <a target="_new" class="m-layout-terms_and_conditions_url"> Conditions <span class="m-layout-name"></span> </a>',

    what_is_trustly: '<a href="https://trustly.com/en/whatistrustly" target="_blank">What is Trustly?</a>',

    easily_pay_with_swish_mobile: 'Pay with Swish Mobile',

    powered_by: 'Powered by '
    
},
  sv: {
    pay_headline:'Betalning',
    amount: 'Summa: <strong>{0} {1}</strong>',
    intro:'Fyll i din betalinformation sÃ¥ kommer prenumerationen att komma igÃ¥ng!',
    card_holder:'Korthavarens namn',
    card_holder_placeholder: 'FÃ¶rnamn Efternamn',
    card_number:'Kortnummer',
    card_number_placeholder:'Ditt kortnummer',
    card_type:'Korttyp',
    card_type_placeholder: 'VISA / MASTERCARD',
    cvc:'CVV-kod:',
    expiry:'Gilltighetstid:',
    pay_button:'Betala',
    safe_text:'Din betalning sker sÃ¤kert genom Mondido. Butiken kommer aldrig i kontakt med dina kortuppgifter, all information skickas krypterad till din bank. Mondido Ã¤r PCI DSS Level 1 och anvÃ¤nder HTTPS/TLS vilket Ã¤r industribankstandard fÃ¶r sÃ¤kra e-handelstransaktioner.',
    loading: 'Laddar',
    
    exp_month: 'MÃ¥nad',
    exp_year: 'Ã…r',
    card_not_accepted: '{card} accepteras inte',
    failed_message: 'Din betalning nekades tyvÃ¤rr, prova med ett annat kort eller betalsÃ¤tt.',
    validation_message: 'Alla fÃ¤llt behÃ¶ver fyllas i, det som saknas Ã¤r:\n',
    choose_payment_option: 'VÃ¤lj betalmetod',
    card_payment: 'Kort',
    swish_payment: 'Swish',
    bank_payment: 'Bank',
    paypal_payment: 'PayPal',
    invoice_payment: 'Faktura',
    paypal_hl: 'HÃ¤r kan du enkelt betala med PayPal',
    paypal_btn: 'Betala med PayPal',

    individual: 'Privatperson',
    business: 'Företag',

    your_email_address: 'Din e-postadress',
    your_phone_number: 'Ditt telefonnummer',
    your_mobile_number: 'Ditt mobilnummer',
    your_social_security_number: 'Ditt personnummer',

    first_name: 'First name',
    last_name: 'Last name',
    address: 'Gatuadress',
    co_address: 'C/O Adress',
    zip: 'Postnummer',
    city: 'Stad',

    i_accept: 'Jag accepterar',

    invoice_address_could_not_be_retrieved: 'Din adress kunde inte hämtas. Kontrollera att du har skrivit rätt personnummer. Exempel 195203198089',
    invoice_footer_conditions: 'När du väljer faktura får du hem dina varor innan du betalar. Du kan sedan välja att betala hela beloppet på en gång eller dela upp betalningen i mindre delar. För att kunna handla med Collectors faktura ska du vara minst 18 år. Fakturan kommer att skickas per e-post. Mer information hittar du på',
    invoice_accept_conditions: 'Ja, jag accepterar <a target="_new" href="https://www.collector.se/upload/Partners/Agreements/SUCUSE/Credit_terms_All_SE.pdf"> Allmänna villkor för faktura och kontokredit </a> och <a target="_new" href="http://www.collector.se/upload/Partners/Agreements/SUCUSE/SECCI_SE.pdf"> Standardiserad Europeisk konsumentkreditinformation </a> , samt <a target="_new" class="m-layout-terms_and_conditions_url"> köpvillkor hos <span class="m-layout-name"></span> </a>',

    what_is_trustly: '<a href="https://trustly.com/se/whatistrustly" target="_blank">Vad är Trustly?</a>',

    easily_pay_with_swish_mobile: 'Här kan du enkelt betala med Swish i mobilen',

    powered_by: 'Powered by '
  },
  de: {
    pay_headline:'Bezahlung',
    amount: 'Gesamt: <strong>{0} {1}</strong>',
    intro:'FÃ¼llen Sie Ihre Zahlungsinformationen , und die Zeichnung , um loszulegen!',
    card_holder:'Name des Karteninhabers',
    card_holder_placeholder: 'Vorname Nachname',
    card_number:'Kartennummern',
    card_number_placeholder:'Ihre Kartennummer',
    card_type:'Karten name',
    card_type_placeholder: 'VISA / MASTERCARD',
    cvc:'CVV-code:',
    expiry:'Verfallsdatum:',
    pay_button:'Zahlen',
    safe_text:'Ihre Zahlung erfolgt sicher durch Mondido. Das GeschÃ¤ft wird nie mit Ihrer Kreditkarteninformationen in Kontakt stehen, sind alle Informationen zu Ihrer Bank spÃ¤t verschlÃ¼sselt. Mondido ist PCI DSS Stufe 1 zertifiziert und verwenden HTTPS / TLS, mit denen die Bankenindustriestandard fÃ¼r sichere E-Commerce-Transaktionen ist.',
    loading: 'Loading',
    
    exp_month: 'Monat',
    exp_year: 'Jahr',
    card_not_accepted: '{card} wird nicht akzeptiert',
    failed_message: 'Ihre Zahlung wurde abgelehnt, bitte versuchen Sie es erneut mit einer neuen Karte oder Ã¼berprÃ¼fen Sie Ihre Zahlen.',
    validation_message: 'Alle Felder mÃ¼ssen ausgefÃ¼llt werden. Was fehlt, ist:\n',
    choose_payment_option: 'Bitte wÃ¤hlen Sie Zahlungsoption',
    card_payment: 'Karte',
    swish_payment: 'Swish',
    bank_payment: 'Bank',
    paypal_payment: 'PayPal',
    invoice_payment: 'Rechnung',
    paypal_hl: 'Moonrise Bezahlen mit PayPal',
    paypal_btn: 'Bezahlen mit PayPal',

    individual: 'Individual',
    business: 'Business',

    your_email_address: 'Your email address',
    your_phone_number: 'Your phone number',
    your_mobile_number: 'Your mobile number',
    your_social_security_number: 'Your Social Security number',

    first_name: 'First name',
    last_name: 'Last name',
    address: 'Address',
    co_address: 'c/o Address',
    zip: 'Zip',
    city: 'City',

    i_accept: 'I accept',

    invoice_address_could_not_be_retrieved: 'Your address could not be retrieved . Check that you have entered the correct Social Security number. Example 195203198089',
    invoice_footer_conditions: 'When you select the invoice you will receive your goods before you pay. You can then choose to pay the whole amount at once or split the payment into smaller parts . In order to deal with the bill collectors will be at least 18 years. The invoice will be sent by e -mail. More information can be found at',
    invoice_accept_conditions: 'Yes, I have read and accept Collector Bank\'s  <a target="_new" href="https://www.collector.se/upload/Partners/Agreements/SUCUSE/Credit_terms_All_EN.pdf"> General Conditions For Invoice And Credit Accounts </a> and <a target="_new" href="http://www.collector.se/upload/Partners/Agreements/SUCUSE/SECCI_EN.pdf"> Standardised European Consumer Credit Information </a> , and <a target="_new" class="m-layout-terms_and_conditions_url"> Conditions <span class="m-layout-name"></span> </a>',

    what_is_trustly: '<a href="https://trustly.com/en/whatistrustly" target="_blank">What is Trustly?</a>',

    easily_pay_with_swish_mobile: 'Pay with Swish Mobile',

    powered_by: 'Powered by '
  },
  da: {
    pay_headline:'Betaling',
    amount: 'BelÃ¸b: <strong>{0} {1}</strong>',
    intro:'Intro!',
    card_holder:'Kortindehaverens navn',
    card_holder_placeholder: 'Fornavn Efternavn',
    card_number:'kortnummer',
    card_number_placeholder:'Dit kortnummer',
    card_type:'Korttype',
    card_type_placeholder: 'VISA / MASTERCARD',
    cvc:'CVV-kode:',
    expiry:'UdlÃ¸bsdato:',
    pay_button:'betale',
    safe_text:'Din Betaling sker sikkert af Mondido. Butikken vil aldrig vÃ¦re i kontakt med dine kreditkortoplysninger, er alle de oplysninger, sent krypteret til din bank. Mondido er PCI DSS niveau 1-certificeret og bruger HTTPS / TLS, Hvilket er banksektoren standard for sikre e-handelstransaktioner.',
    loading: 'Lastning',
    
     exp_month: 'mÃ¥ned',
    exp_year: 'Ã¥r',
    card_not_accepted: '{card} er ikke accepteret',
    failed_message: 'Din betaling blev afvist, skal du prÃ¸ve igen med et nyt kort eller bekrÃ¦fte dine numre.',
    validation_message: 'Alle felter skal udfyldes. Hvad mangler er:\n',
    choose_payment_option: 'VÃ¦lg betalingsmulighed',
    card_payment: 'Kort',
    swish_payment: 'Swish',
    bank_payment: 'Bank',
    paypal_payment: 'PayPal',
    invoice_payment: 'Faktura',
    paypal_hl: 'Nem betaling med PayPal',
    paypal_btn: 'Betal med PayPal',

    individual: 'Individual',
    business: 'Business',

    your_email_address: 'Your email address',
    your_phone_number: 'Your phone number',
    your_mobile_number: 'Your mobile number',
    your_social_security_number: 'Your Social Security number',

    first_name: 'First name',
    last_name: 'Last name',
    address: 'Address',
    co_address: 'c/o Address',
    zip: 'Zip',
    city: 'City',

    i_accept: 'I accept',

    invoice_address_could_not_be_retrieved: 'Your address could not be retrieved . Check that you have entered the correct Social Security number. Example 195203198089',
    invoice_footer_conditions: 'When you select the invoice you will receive your goods before you pay. You can then choose to pay the whole amount at once or split the payment into smaller parts . In order to deal with the bill collectors will be at least 18 years. The invoice will be sent by e -mail. More information can be found at',
    invoice_accept_conditions: 'Yes, I have read and accept Collector Bank\'s  <a target="_new" href="https://www.collector.se/upload/Partners/Agreements/SUCUSE/Credit_terms_All_EN.pdf"> General Conditions For Invoice And Credit Accounts </a> and <a target="_new" href="http://www.collector.se/upload/Partners/Agreements/SUCUSE/SECCI_EN.pdf"> Standardised European Consumer Credit Information </a> , and <a target="_new" class="m-layout-terms_and_conditions_url"> Conditions <span class="m-layout-name"></span> </a>',

    what_is_trustly: '<a href="https://trustly.com/en/whatistrustly" target="_blank">What is Trustly?</a>',

    easily_pay_with_swish_mobile: 'Pay with Swish Mobile',

    powered_by: 'Powered by '
  },
  nl: {
    pay_headline:'Betaling',
    amount: 'Bedrag: <strong>{0} {1}</strong>',
    intro:'Intro',
    card_holder:'Kaarthouder naam',
    card_holder_placeholder: 'Voornaam Achternaam',
    card_number:'Kaartnummer',
    card_number_placeholder:'Uw kaartnummer',
    card_type:'Kaarten type',
    card_type_placeholder: 'VISA / MASTERCARD',
    cvc:'CVV code',
    expiry:'Fervaldatum',
    pay_button:'Afwerking betaling',
    safe_text:'Uw betaling wordt veilig gemaakt door Mondido. De winkel zal nooit in contact met uw credit card informatie, wordt alle informatie late gecodeerd om uw bank. Mondido is PCI DSS Level 1 gecertificeerd en gebruiken HTTPS / TLS, dat is de banksector standaard voor veilige e-commerce transacties.',
    loading: 'Het laden',
    
     exp_month: 'Maand',
    exp_year: 'Jaar',
    card_not_accepted: '{card} wordt niet geaccepteerd',
    failed_message: 'Uw betaling is geweigerd, probeer het opnieuw met een nieuwe kaart of controleren of uw nummers.',
    validation_message: 'Alle velden moeten worden ingevuld. Wat ontbreekt is:\n',
    choose_payment_option: 'Kies betaalmethode',
    card_payment: 'Kaart',
    swish_payment: 'Swish',
    bank_payment: 'Bank',
    paypal_payment: 'PayPal',
    invoice_payment: 'Factuur',
    paypal_hl: 'Gemakkelijk betalen met PayPal',
    paypal_btn: 'Betalen met PayPal',

    individual: 'Individual',
    business: 'Business',

    your_email_address: 'Your email address',
    your_phone_number: 'Your phone number',
    your_mobile_number: 'Your mobile number',
    your_social_security_number: 'Your Social Security number',

    first_name: 'First name',
    last_name: 'Last name',
    address: 'Address',
    co_address: 'c/o Address',
    zip: 'Zip',
    city: 'City',

    i_accept: 'I accept',

    invoice_address_could_not_be_retrieved: 'Your address could not be retrieved . Check that you have entered the correct Social Security number. Example 195203198089',
    invoice_footer_conditions: 'When you select the invoice you will receive your goods before you pay. You can then choose to pay the whole amount at once or split the payment into smaller parts . In order to deal with the bill collectors will be at least 18 years. The invoice will be sent by e -mail. More information can be found at',
    invoice_accept_conditions: 'Yes, I have read and accept Collector Bank\'s  <a target="_new" href="https://www.collector.se/upload/Partners/Agreements/SUCUSE/Credit_terms_All_EN.pdf"> General Conditions For Invoice And Credit Accounts </a> and <a target="_new" href="http://www.collector.se/upload/Partners/Agreements/SUCUSE/SECCI_EN.pdf"> Standardised European Consumer Credit Information </a> , and <a target="_new" class="m-layout-terms_and_conditions_url"> Conditions <span class="m-layout-name"></span> </a>',

    what_is_trustly: '<a href="https://trustly.com/en/whatistrustly" target="_blank">What is Trustly?</a>',

    easily_pay_with_swish_mobile: 'Pay with Swish Mobile',

    powered_by: 'Powered by '
  },
  fi: {
    pay_headline:'Maksu',
    amount: 'MÃ¤Ã¤rÃ¤: <strong>{0} {1}</strong>',
    intro:'Intro',
    card_holder:'Kortinhaltijan nimi',
    card_holder_placeholder: 'Etunimi Sukunimi',
    card_number:'Kortin numero',
    card_number_placeholder:'Kortin numero',
    card_type:'Kortin tyyppi',
    card_type_placeholder: 'VISA / MASTERCARD',
    cvc:'CVV koodi',
    expiry:'Viimeinen voimassaolopÃ¤ivÃ¤',
    pay_button:'Viimeistely maksu',
    safe_text:'Maksu on tehdÃ¤ turvallisiksi Mondido. MyymÃ¤lÃ¤ ei koskaan kosketuksiin luottokortin tiedot, kaikki tiedot on myÃ¶hÃ¤ssÃ¤ salattu pankkiisi. Mondido on PCI DSS Taso 1 sertifioitu ja HTTPS / TLS, Joka on pankki- alan standardi turvallisen sÃ¤hkÃ¶isen kaupankÃ¤ynnin.',
    loading: 'Ladataan',
    
     exp_month: 'Kuukausi',
    exp_year: 'Vuosi',
    card_not_accepted: '{card} ei kÃ¤y',
    failed_message: 'Maksu hylÃ¤ttiin, yritÃ¤ uudelleen uudella kortilla tai tarkistaa numerot.',
    validation_message: 'Kaikki kentÃ¤t on tÃ¤ytettÃ¤vÃ¤. MitÃ¤ puuttuu on:\n',
    choose_payment_option: 'Valitse maksuvaihtoehto',
    card_payment: 'Kortti',
    swish_payment: 'Swish',
    bank_payment: 'Pankki',
    paypal_payment: 'PayPal',
    invoice_payment: 'Lasku',
    paypal_hl: 'Helppo maksu PayPal',
    paypal_btn: 'Maksa PayPal',

    individual: 'Individual',
    business: 'Business',

    your_email_address: 'Your email address',
    your_phone_number: 'Your phone number',
    your_mobile_number: 'Your mobile number',
    your_social_security_number: 'Your Social Security number',

    first_name: 'First name',
    last_name: 'Last name',
    address: 'Address',
    co_address: 'c/o Address',
    zip: 'Zip',
    city: 'City',

    i_accept: 'I accept',

    invoice_address_could_not_be_retrieved: 'Your address could not be retrieved . Check that you have entered the correct Social Security number. Example 195203198089',
    invoice_footer_conditions: 'When you select the invoice you will receive your goods before you pay. You can then choose to pay the whole amount at once or split the payment into smaller parts . In order to deal with the bill collectors will be at least 18 years. The invoice will be sent by e -mail. More information can be found at',
    invoice_accept_conditions: 'Yes, I have read and accept Collector Bank\'s  <a target="_new" href="https://www.collector.se/upload/Partners/Agreements/SUCUSE/Credit_terms_All_EN.pdf"> General Conditions For Invoice And Credit Accounts </a> and <a target="_new" href="http://www.collector.se/upload/Partners/Agreements/SUCUSE/SECCI_EN.pdf"> Standardised European Consumer Credit Information </a> , and <a target="_new" class="m-layout-terms_and_conditions_url"> Conditions <span class="m-layout-name"></span> </a>',

    what_is_trustly: '<a href="https://trustly.com/en/whatistrustly" target="_blank">What is Trustly?</a>',

    easily_pay_with_swish_mobile: 'Pay with Swish Mobile',

    powered_by: 'Powered by '
  },
  es: {
    pay_headline:'Pago',
    amount: 'Cantidad: <strong>{0} {1}</strong>',
    intro:'Intro',
    card_holder:'Nombre del titular',
    card_holder_placeholder: 'Nombre Apellidos',
    card_number:'NÃºmero de tarjeta',
    card_number_placeholder:'Su nÃºmero de tarjeta',
    card_type:'Tipo de tarjeta',
    card_type_placeholder: 'VISA / MASTERCARD',
    cvc:'CVV prefijo',
    expiry:'Fecha de caducidad',
    pay_button:'Pago Finalizar',
    safe_text:'Su pago es asegurada por Mondido. La tienda nunca estarÃ¡ en contacto con la informaciÃ³n de su tarjeta de crÃ©dito, toda la informaciÃ³n estÃ¡ encriptada tarde para su banco. Mondido es el Nivel 1 de PCI DSS certificada y utilizar HTTPS / TLS, que es el estÃ¡ndar de la industria bancaria para transacciones seguras de comercio electrÃ³nico.',
    loading: 'Cargando',
    
     exp_month: 'Mes',
    exp_year: 'AÃ±o',
    card_not_accepted: '{card} no es aceptada',
    failed_message: 'Se rechazÃ³ su pago, por favor intente de nuevo con una nueva tarjeta o verificar sus nÃºmeros.',
    validation_message: 'Todos los campos deben ser llenados. Lo que falta es:\n',
    choose_payment_option: 'Por favor seleccione la opciÃ³n de pago',
    card_payment: 'Tarjeta',
    swish_payment: 'Swish',
    bank_payment: 'Banco',
    paypal_payment: 'PayPal',
    invoice_payment: 'Factura',
    paypal_hl: 'CÃ³modos pagos con PayPal',
    paypal_btn: 'Pagar con PayPal',

    individual: 'Individual',
    business: 'Business',

    your_email_address: 'Your email address',
    your_phone_number: 'Your phone number',
    your_mobile_number: 'Your mobile number',
    your_social_security_number: 'Your Social Security number',

    first_name: 'First name',
    last_name: 'Last name',
    address: 'Address',
    co_address: 'c/o Address',
    zip: 'Zip',
    city: 'City',

    i_accept: 'I accept',

    invoice_address_could_not_be_retrieved: 'Your address could not be retrieved . Check that you have entered the correct Social Security number. Example 195203198089',
    invoice_footer_conditions: 'When you select the invoice you will receive your goods before you pay. You can then choose to pay the whole amount at once or split the payment into smaller parts . In order to deal with the bill collectors will be at least 18 years. The invoice will be sent by e -mail. More information can be found at',
    invoice_accept_conditions: 'Yes, I have read and accept Collector Bank\'s  <a target="_new" href="https://www.collector.se/upload/Partners/Agreements/SUCUSE/Credit_terms_All_EN.pdf"> General Conditions For Invoice And Credit Accounts </a> and <a target="_new" href="http://www.collector.se/upload/Partners/Agreements/SUCUSE/SECCI_EN.pdf"> Standardised European Consumer Credit Information </a> , and <a target="_new" class="m-layout-terms_and_conditions_url"> Conditions <span class="m-layout-name"></span> </a>',

    what_is_tgit rustly: '<a href="https://trustly.com/en/whatistrustly" target="_blank">What is Trustly?</a>',

    easily_pay_with_swish_mobile: 'Pay with Swish Mobile',

    powered_by: 'Powered by '
  },
  fr: {
    pay_headline:'Paiement',
    amount: 'Montant: <strong>{0} {1}</strong>',
    intro:'Intro',
    card_holder:'Le nom du titulaire',
    card_holder_placeholder: 'PrÃ©nom Nom',
    card_number:'NumÃ©ro de la carte',
    card_number_placeholder:'Votre numÃ©ro de carte',
    card_type:'Type de carte',
    card_type_placeholder: 'VISA / MASTERCARD',
    cvc:'CVV code',
    expiry:'Date d\'expiration',
    pay_button:'Paiement Terminer',
    safe_text:'Votre paiement est sÃ©curisÃ© par Mondido. Le magasin ne sera jamais en contact avec vos informations de carte de crÃ©dit, toutes les informations sont cryptÃ©es fin Ã  votre banque. Mondido est de niveau 1 PCI DSS certifiÃ© et utiliser HTTPS / TLS, qui est la norme de l\'industrie bancaire pour les transactions de commerce Ã©lectronique sÃ©curisÃ©s.',
    loading: 'Chargement',
    
     exp_month: 'Mois',
    exp_year: 'AnnÃ©e',
    card_not_accepted: '{card} non acceptÃ©e',
    failed_message: 'Votre paiement a Ã©tÃ© refusÃ©, s\'il vous plaÃ®t essayer Ã  nouveau avec une nouvelle carte ou vÃ©rifier vos numÃ©ros.',
    validation_message: 'Tous les champs doivent Ãªtre remplis. Ce qui manque est:\n',
    choose_payment_option: 'S\'il vous plaÃ®t choisir l\'option de paiement',
    card_payment: 'Carte',
    swish_payment: 'Swish',
    bank_payment: 'Banque',
    paypal_payment: 'PayPal',
    invoice_payment: 'Facture',
    paypal_hl: 'FacilitÃ© de paiement avec PayPal',
    paypal_btn: 'Payez avec PayPal',

    individual: 'Individual',
    business: 'Business',

    your_email_address: 'Your email address',
    your_phone_number: 'Your phone number',
    your_mobile_number: 'Your mobile number',
    your_social_security_number: 'Your Social Security number',

    first_name: 'First name',
    last_name: 'Last name',
    address: 'Address',
    co_address: 'c/o Address',
    zip: 'Zip',
    city: 'City',

    i_accept: 'I accept',

    invoice_address_could_not_be_retrieved: 'Your address could not be retrieved . Check that you have entered the correct Social Security number. Example 195203198089',
    invoice_footer_conditions: 'When you select the invoice you will receive your goods before you pay. You can then choose to pay the whole amount at once or split the payment into smaller parts . In order to deal with the bill collectors will be at least 18 years. The invoice will be sent by e -mail. More information can be found at',
    invoice_accept_conditions: 'Yes, I have read and accept Collector Bank\'s  <a target="_new" href="https://www.collector.se/upload/Partners/Agreements/SUCUSE/Credit_terms_All_EN.pdf"> General Conditions For Invoice And Credit Accounts </a> and <a target="_new" href="http://www.collector.se/upload/Partners/Agreements/SUCUSE/SECCI_EN.pdf"> Standardised European Consumer Credit Information </a> , and <a target="_new" class="m-layout-terms_and_conditions_url"> Conditions <span class="m-layout-name"></span> </a>',

    what_is_trustly: '<a href="https://trustly.com/en/whatistrustly" target="_blank">What is Trustly?</a>',

    easily_pay_with_swish_mobile: 'Pay with Swish Mobile',

    powered_by: 'Powered by '
  }
};