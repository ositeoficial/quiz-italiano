// Guerriera

jQuery(function ($) {
        Survey.StylesManager.applyTheme("modern");

        let json =
            {
                "title": "Qual è il \"piano ormonale\" adatto a te?",
                "description": "Scopri in 2 minuti come trasformare il tuo fisico in poche settimane riequilibrando naturalmente i tuoi ormoni",
                "completedHtml": "<div class=\"final-message\"><div id=\"surveyResult\"><h3>Sto calcolando il risultato...</h3>\n  <p>A causa dell'alta richiesta sar&agrave; disponibile solo per le prossime 24 ore.</p>  <div id=\"myProgress\"><div id=\"myBar\">0%</div></div></div>",
                "pages": [
                    {
                        "name": "page0",
                        "elements": [
                            {
                                "type": "radiogroup",
                                "name": "gender",
                                "title": "Sei uomo o donna?",
                                "choices": [
                                    {
                                        "value": "uomo",
                                        "text": "<span class='survey-icon'>👨</span> Uomo"
                                    },
                                    {
                                        "value": "donna",
                                        "text": "<span class='survey-icon'>👩</span> Donna"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "name": "page1",
                        "elements": [
                            {
                                "type": "radiogroup",
                                "name": "question1",
                                "title": "Qual è il tuo obiettivo principale?",
                                "choices": [
                                    {
                                        "value": "Item 1",
                                        "text": "<span class='survey-icon'>🥊</span> Perdere più di 10 kg "
                                    },
                                    {
                                        "value": "Item 2",
                                        "text": "<span class='survey-icon'>🎯</span> Eliminare quei 5-10 kg di grasso ostinato"
                                    },
                                    {
                                        "value": "Item 3",
                                        "text": "<span class='survey-icon'>🏅</span> Scolpire un addome definito e un fisico atletico"
                                    },
                                    {
                                        "value": "Item 4",
                                        "text": "<span class='survey-icon'>🏋️‍♂️</span> Costruire muscoli e forza"
                                    }
                                ]
                            }
                        ],
                        "visibleIf": "{gender} = 'uomo'"
                    },
                    {
                        "name": "page2",
                        "elements": [
                            {
                                "type": "radiogroup",
                                "name": "question2",
                                "title": "In quale parte del corpo tendi ad accumulare più grasso?",
                                "choices": [
                                    {
                                        "value": "Item 1",
                                        "text": "<span class='survey-icon'>🔼</span> Zona addominale (pancia)"
                                    },
                                    {
                                        "value": "Item 2",
                                        "text": "<span class='survey-icon'>🔽</span> Fianchi e cosce"
                                    },
                                    {
                                        "value": "Item 3",
                                        "text": "<span class='survey-icon'>💪</span> Braccia e spalle"
                                    },
                                    {
                                        "value": "Item 4",
                                        "text": "<span class='survey-icon'>🔄</span> Distribuito uniformemente"
                                    }
                                ]
                            }
                        ],
                        "visibleIf": "{gender} = 'uomo'"
                    },
                    {
                        "name": "page3",
                        "elements": [
                            {
                                "type": "html",
                                "name": "question3",
                                "html": "<div class='sv-html'><span>🌟🌟🌟🌟🌟</span><img src=\"image/uomo01.jpg\" />Con questo programma ormonale Alessandro G. di 45 anni è riuscito a bruciare il grasso in tutte le sue aree più critiche.*<span class='quote-disc'> * I risultati sono possono variare da persona in persona.</span><button onclick='window.survey.nextPage();'>Continua</button>"
                            }
                        ],
                        "visibleIf": "{gender} = 'uomo'"
                    },
                    {
                        "name": "page4",
                        "elements": [
                            {
                                "type": "radiogroup",
                                "name": "question4",
                                "title": "Quando hai più spesso attacchi di fame?",
                                "choices": [
                                    {
                                        "value": "Item 1",
                                        "text": "<span class='survey-icon'>🌅</span> Al mattino appena sveglio"
                                    },
                                    {
                                        "value": "Item 2",
                                        "text": "<span class='survey-icon'>🕛</span> Prima o dopo pranzo"
                                    },
                                    {
                                        "value": "Item 3",
                                        "text": "<span class='survey-icon'>🌆</span> Tardo pomeriggio"
                                    },
                                    {
                                        "value": "Item 4",
                                        "text": "<span class='survey-icon'>🌙</span> Durante la notte"
                                    },
                                    {
                                        "value": "Item 5",
                                        "text": "<span class='survey-icon'>🔄</span> Non ho attacchi di fame"
                                    }
                                ]
                            }
                        ],
                        "visibleIf": "{gender} = 'uomo'"
                    },
                    {
                        "name": "page5",
                        "elements": [
                            {
                                "type": "radiogroup",
                                "name": "question5",
                                "title": "Quali tipi di cibo ti attirano di più?",
                                "choices": [
                                    {
                                        "value": "Item 1",
                                        "text": "<span class='survey-icon'>🍰</span> Dolci e dessert"
                                    },
                                    {
                                        "value": "Item 2",
                                        "text": "<span class='survey-icon'>🍟</span> Cibi salati o fritti"
                                    },
                                    {
                                        "value": "Item 3",
                                        "text": "<span class='survey-icon'>🥩</span> Proteine e cibi grassi"
                                    },
                                    {
                                        "value": "Item 4",
                                        "text": "<span class='survey-icon'>🥗</span> Opzioni salutari ma non mi saziano"
                                    }
                                ]
                            }
                        ],
                        "visibleIf": "{gender} = 'uomo'"
                    },
                    {
                        "name": "page6",
                        "elements": [
                            {
                                "type": "html",
                                "name": "question6",
                                "html": "<div class='sv-html'><span>💡</span><h3>Lo sapevi?</h3>Con l’età la produzione degli ormoni maschili inizia a diminuire causando stanchezza, perdita di libido e accumulo di grasso addominale. Riequilibrare gli ormoni maschili è essenziale per ritrovare energia, mettere su muscoli e bruciare il grasso in eccesso.<button onclick='window.survey.nextPage();'>Voglio sbloccare il potere dei miei ormoni!</button>"
                            }
                        ],
                        "visibleIf": "{gender} = 'uomo'"
                    },
                    {
                        "name": "page7",
                        "elements": [
                            {
                                "type": "radiogroup",
                                "name": "question7",
                                "title": "Hai notato cambiamenti nel tuo desiderio sessuale?",
                                "choices": [
                                    {
                                        "value": "Item 1",
                                        "text": "<span class='survey-icon'>💘</span> Il mio desiderio sessuale è stabile e normale"
                                    },
                                    {
                                        "value": "Item 2",
                                        "text": "<span class='survey-icon'>🌊</span> Fluttuante, varia notevolmente"
                                    },
                                    {
                                        "value": "Item 3",
                                        "text": "<span class='survey-icon'>📉</span> Diminuito rispetto al passato"
                                    },
                                    {
                                        "value": "Item 4",
                                        "text": "<span class='survey-icon'>❓</span> Non sono sicuro o preferisco non rispondere"
                                    }
                                ]
                            }
                        ],
                        "visibleIf": "{gender} = 'uomo'"
                    },
                    {
                        "name": "page8",
                        "elements": [
                            {
                                "type": "radiogroup",
                                "name": "question8",
                                "title": "Preferisci allenarti...",
                                "choices": [
                                    {
                                        "value": "Item 1",
                                        "text": "<span class='survey-icon'>🏠</span> A casa, con la comodità e la privacy del mio spazio"
                                    },
                                    {
                                        "value": "Item 2",
                                        "text": "<span class='survey-icon'>🏋️‍♂</span>️ In palestra, per avere accesso a più attrezzature e un ambiente stimolante"
                                    },
                                    {
                                        "value": "Item 3",
                                        "text": "<span class='survey-icon'>🤷‍</span> Non ho una preferenza, l'importante è vedere risultati"
                                    }
                                ]
                            }
                        ],
                        "visibleIf": "{gender} = 'uomo'"
                    },
                    {
                        "name": "page9",
                        "elements": [
                            {
                                "type": "radiogroup",
                                "name": "question9",
                                "title": "Quanto tempo sei disposto a dedicare all'allenamento in ogni sessione?",
                                "choices": [
                                    {
                                        "value": "Item 1",
                                        "text": "<span class='survey-icon'>⏱️</span> Meno di 20 minuti"
                                    },
                                    {
                                        "value": "Item 2",
                                        "text": "<span class='survey-icon'>⏳</span> Circa 30-45 minuti"
                                    },
                                    {
                                        "value": "Item 3",
                                        "text": "<span class='survey-icon'>🕒</span> Oltre un'ora"
                                    }
                                ]
                            }
                        ],
                        "visibleIf": "{gender} = 'uomo'"
                    },
                    {
                        "name": "page10",
                        "elements": [
                            {
                                "type": "radiogroup",
                                "name": "question10",
                                "title": "9 - La mia più grande frustrazione nel rimettermi in forma è...",
                                "choices": [
                                    {
                                        "value": "Item 1",
                                        "text": "<span class='survey-icon'>🍩</span> Non riesco a controllare le mie voglie"
                                    },
                                    {
                                        "value": "Item 2",
                                        "text": "<span class='survey-icon'>🏋️‍♂️</span> Faccio esercizio ma non vedo risultati"
                                    },
                                    {
                                        "value": "Item 3",
                                        "text": "<span class='survey-icon'>⏱️</span> Trovare il tempo per l’allenamento"
                                    },
                                    {
                                        "value": "Item 4",
                                        "text": "<span class='survey-icon'>📉</span> Perdo un po' di peso, ma poi lo riprendo subito"
                                    },
                                    {
                                        "value": "Item 5",
                                        "text": "<span class='survey-icon'>🔄</span> Sentirmi bloccato e senza una direzione chiara"
                                    }
                                ]
                            }
                        ],
                        "visibleIf": "{gender} = 'uomo'"
                    },
                    {
                        "name": "page11",
                        "elements": [
                            {
                                "type": "html",
                                "name": "question11",
                                "html": "<div class='sv-html'><span>🌟🌟🌟🌟🌟</span><span class=\"sv-quote\"><img src=\"image/uomo02.jpg\" />\"Dopo anni di dieta e allenamento senza risultati... con questo piano ho finalmente ottenuto i risultati che voglio.\"</span> Mattia P., 31 anni*<span class='quote-disc'>* I risultati sono possono variare da persona in persona.</span><button onclick='window.survey.nextPage();'>Continua</button>"
                            }
                        ],
                        "visibleIf": "{gender} = 'uomo'"
                    },
                    {
                        "name": "page12",
                        "elements": [
                            {
                                "type": "radiogroup",
                                "name": "question12",
                                "title": "Ho soprattutto problemi con...",
                                "choices": [
                                    {
                                        "value": "Item 1",
                                        "text": "<span class='survey-icon'>🍔</span> Mangiare in modo emotivo o stressato"
                                    },
                                    {
                                        "value": "Item 2",
                                        "text": "<span class='survey-icon'>😞</span> Mantenere alta la motivazione"
                                    },
                                    {
                                        "value": "Item 3",
                                        "text": "<span class='survey-icon'>😴</span> La stanchezza che mi rende pigro"
                                    },
                                    {
                                        "value": "Item 4",
                                        "text": "<span class='survey-icon'>🎢</span> Sono incostante con dieta ed esercizio"
                                    }
                                ]
                            }
                        ],
                        "visibleIf": "{gender} = 'uomo'"
                    },
                    {
                        "name": "page13",
                        "elements": [
                            {
                                "type": "radiogroup",
                                "name": "question13",
                                "title": "Ultima domanda… come valuteresti il tuo metabolismo?",
                                "choices": [
                                    {
                                        "value": "Item 1",
                                        "text": "<span class='survey-icon'>🐆</span> Veloce: difficilmente prendo peso, anche mangiando molto"
                                    },
                                    {
                                        "value": "Item 2",
                                        "text": "<span class='survey-icon'>🐢</span> Lento: tendo ad accumulare peso facilmente"
                                    },
                                    {
                                        "value": "Item 3",
                                        "text": "<span class='survey-icon'>🔄</span> Variabile: il mio peso fluttua spesso"
                                    },
                                    {
                                        "value": "Item 4",
                                        "text": "<span class='survey-icon'>🤷‍</span> Non sono sicuro di come valutare il mio metabolismo"
                                    }
                                ]
                            }
                        ],
                        "visibleIf": "{gender} = 'uomo'"
                    },
                    {
                        "name": "page14",
                        "elements": [
                            {
                                "type": "html",
                                "name": "question14",
                                "html": "<div class='sv-html'><span>💡</span><h3>Lo sapevi?</h3>Oltre 10.000 uomini con qualunque tipo di metabolismo hanno già trasformato il loro fisico e la loro energia grazie al piano adatto al loro “tipo ormonale”.*<img src=\"image/uomo05.jpg\" /><span class='quote-disc'>* I risultati sono possono variare da persona in persona.</span>Ti rimane un click per essere il prossimo!<button style='margin-top: 20px;' onclick='window.survey.completeLastPage();'>Voglio sbloccare il mio potenziale ormonale!</button>"
                            }
                        ],
                        "visibleIf": "{gender} = 'uomo'"
                    },
                    {
                        "name": "page15",
                        "elements": [
                            {
                                "type": "radiogroup",
                                "name": "question15",
                                "title": "Qual è il tuo obiettivo principale?",
                                "choices": [
                                    {
                                        "value": "Item 1",
                                        "text": "<span class='survey-icon'>🥊</span> Dimagrire più di 10 kg e non riprenderli mai più"
                                    },
                                    {
                                        "value": "Item 2",
                                        "text": "<span class='survey-icon'>🎯</span> Perdere quei 5-10 kg di grasso ostinato"
                                    },
                                    {
                                        "value": "Item 3",
                                        "text": "<span class='survey-icon'>🍑</span> Un corpo tonico, dai glutei alla pancia"
                                    },
                                    {
                                        "value": "Item 4",
                                        "text": "<span class='survey-icon'>💪</span> Mettere su muscoli sexy per forme seducenti e femminili"
                                    }
                                ]
                            }
                        ],
                        "visibleIf": "{gender} = 'donna'"
                    },
                    {
                        "name": "page16",
                        "elements": [
                            {
                                "type": "radiogroup",
                                "name": "question16",
                                "title": "In quale parte del corpo tendi ad accumulare più grasso?",
                                "choices": [
                                    {
                                        "value": "Item 1",
                                        "text": "<span class='survey-icon'>🔼</span> Zona addominale e vita"
                                    },
                                    {
                                        "value": "Item 2",
                                        "text": "<span class='survey-icon'>🔽</span> Fianchi, glutei e cosce"
                                    },
                                    {
                                        "value": "Item 3",
                                        "text": "<span class='survey-icon'>💪</span> Braccia e spalle"
                                    },
                                    {
                                        "value": "Item 4",
                                        "text": "<span class='survey-icon'>🔄</span> Distribuito uniformemente"
                                    }
                                ]
                            }
                        ],
                        "visibleIf": "{gender} = 'donna'"
                    },
                    {
                        "name": "page17",
                        "elements": [
                            {
                                "type": "html",
                                "name": "question17",
                                "html": "<div class='sv-html'><span>🌟🌟🌟🌟🌟</span><img src=\"image/donna01.jpg\" />\Con questo programma ormonale Ilaria M. di 50 anni ha rimodellato tutto il suo corpo, ritrovato la sua energia e bruciato il grasso nelle sue aree più critiche – senza corsa né palestra.* <span class='quote-disc'>* I risultati sono possono variare da persona in persona.</span><button onclick='window.survey.nextPage();'>Continua</button>"
                            }
                        ],
                        "visibleIf": "{gender} = 'donna'"
                    },
                    {
                        "name": "page18",
                        "elements": [
                            {
                                "type": "radiogroup",
                                "name": "question18",
                                "title": "Com’è la tua temperatura di mani e piedi?",
                                "choices": [
                                    {
                                        "value": "Item 1",
                                        "text": "<span class='survey-icon'>❄️</span> Sono spesso freddi"
                                    },
                                    {
                                        "value": "Item 2",
                                        "text": "<span class='survey-icon'>🔥</span> Tendono ad essere caldi"
                                    },
                                    {
                                        "value": "Item 3",
                                        "text": "<span class='survey-icon'>🔄</span> Variano tra caldo e freddo"
                                    },
                                    {
                                        "value": "Item 4",
                                        "text": "<span class='survey-icon'>🤷‍</span>️ Non saprei"
                                    }
                                ]
                            }
                        ],
                        "visibleIf": "{gender} = 'donna'"
                    },
                    {
                        "name": "page19",
                        "elements": [
                            {
                                "type": "radiogroup",
                                "name": "question19",
                                "title": "Quando hai attacchi di fame più spesso?",
                                "choices": [
                                    {
                                        "value": "Item 1",
                                        "text": "<span class='survey-icon'>🌅</span> Al mattino appena sveglia"
                                    },
                                    {
                                        "value": "Item 2",
                                        "text": "<span class='survey-icon'>🕛</span> Prima o dopo pranzo"
                                    },
                                    {
                                        "value": "Item 3",
                                        "text": "<span class='survey-icon'>🌆</span> Tardo pomeriggio"
                                    },
                                    {
                                        "value": "Item 4",
                                        "text": "<span class='survey-icon'>🌙</span> Durante la notte"
                                    },
                                    {
                                        "value": "Item 5",
                                        "text": "<span class='survey-icon'>🔄</span> Non ho attacchi di fame improvvisi"
                                    }
                                ]
                            }
                        ],
                        "visibleIf": "{gender} = 'donna'"
                    },
                    {
                        "name": "page20",
                        "elements": [
                            {
                                "type": "radiogroup",
                                "name": "question20",
                                "title": "Quali tipi di cibo ti attirano di più?",
                                "choices": [
                                    {
                                        "value": "Item 1",
                                        "text": "<span class='survey-icon'>🍰</span> Dolci e dessert"
                                    },
                                    {
                                        "value": "Item 2",
                                        "text": "<span class='survey-icon'>🍟</span> Cibi salati o fritti"
                                    },
                                    {
                                        "value": "Item 3",
                                        "text": "<span class='survey-icon'>🥩</span> Proteine e cibi ricchi"
                                    },
                                    {
                                        "value": "Item 4",
                                        "text": "<span class='survey-icon'>🥗</span> Opzioni salutari ma non mi saziano"
                                    }
                                ]
                            }
                        ],
                        "visibleIf": "{gender} = 'donna'"
                    },
                    {
                        "name": "page21",
                        "elements": [
                            {
                                "type": "html",
                                "name": "question22",
                                "html": "<div class='sv-html'><span>💡</span><h3>Lo sapevi?</h3>Dopo i 40 anni il tuo corpo inizia a ridurre la produzione di alcuni “ormoni brucia-grasso”, causando l'accumulo di grasso nella pancia e nei fianchi. Ritrovare l'equilibrio ormonale è la chiave per una pelle luminosa, un metabolismo veloce e un corpo tonico a qualunque età.<button onclick='window.survey.nextPage();'>Voglio sbloccare il potere dei miei ormoni!</button>"
                            }
                        ],
                        "visibleIf": "{gender} = 'donna'"
                    },
                    {
                        "name": "page22",
                        "elements": [
                            {
                                "type": "radiogroup",
                                "name": "question23",
                                "title": "Hai notato cambiamenti nel tuo desiderio sessuale?",
                                "choices": [
                                    {
                                        "value": "Item 1",
                                        "text": "<span class='survey-icon'>💘</span> Il mio desiderio sessuale è stabile e normale"
                                    },
                                    {
                                        "value": "Item 2",
                                        "text": "<span class='survey-icon'>🌊</span> Fluttuante, varia notevolmente"
                                    },
                                    {
                                        "value": "Item 3",
                                        "text": "<span class='survey-icon'>📉</span> Diminuito rispetto al passato"
                                    },
                                    {
                                        "value": "Item 4",
                                        "text": "<span class='survey-icon'>❓</span> Non sono sicura o preferisco non rispondere"
                                    }
                                ]
                            }
                        ],
                        "visibleIf": "{gender} = 'donna'"
                    },
                    {
                        "name": "page23",
                        "elements": [
                            {
                                "type": "radiogroup",
                                "name": "question24",
                                "title": "Durante il tuo ciclo mestruale...",
                                "choices": [
                                    {
                                        "value": "Item 1",
                                        "text": "<span class='survey-icon'>🛌</span> Hai molto dolore e eviti l'attività fisica"
                                    },
                                    {
                                        "value": "Item 2",
                                        "text": "<span class='survey-icon'>🍫</span> Hai voglia di cioccolato e altri dolci"
                                    },
                                    {
                                        "value": "Item 3",
                                        "text": "<span class='survey-icon'>💇‍</span> Noti più perdita di capelli del solito"
                                    },
                                    {
                                        "value": "Item 4",
                                        "text": "<span class='survey-icon'>🔄</span> Tutte le opzioni sopra"
                                    },
                                    {
                                        "value": "Item 5",
                                        "text": "<span class='survey-icon'>✅</span> Nessuna delle opzioni sopra - Mi sento bene"
                                    },
                                    {
                                        "value": "Item 6",
                                        "text": "<span class='survey-icon'>🍂</span> Sono in menopausa"
                                    }
                                ]
                            }
                        ],
                        "visibleIf": "{gender} = 'donna'"
                    },
                    {
                        "name": "page24",
                        "elements": [
                            {
                                "type": "radiogroup",
                                "name": "question25",
                                "title": "La mia più grande frustrazione nel rimettermi in forma è...",
                                "choices": [
                                    {
                                        "value": "Item 1",
                                        "text": "<span class='survey-icon'>🍩</span> Non riesco a controllare le mie voglie"
                                    },
                                    {
                                        "value": "Item 2",
                                        "text": "<span class='survey-icon'>🏋️‍♀</span>️ Faccio esercizio ma non vedo risultati"
                                    },
                                    {
                                        "value": "Item 3",
                                        "text": "<span class='survey-icon'>⏱️</span> Trovare il tempo per l’allenamento"
                                    },
                                    {
                                        "value": "Item 4",
                                        "text": "<span class='survey-icon'>📉</span> Perdo un po' di peso, ma poi lo riprendo subito"
                                    },
                                    {
                                        "value": "Item 5",
                                        "text": "<span class='survey-icon'>🔄</span> Sentirmi bloccata e senza una direzione chiara"
                                    }
                                ]
                            }
                        ],
                        "visibleIf": "{gender} = 'donna'"
                    },
                    {
                        "name": "page25",
                        "elements": [
                            {
                                "type": "html",
                                "name": "question26",
                                "html": "<div class='sv-html'><span>🌟🌟🌟🌟🌟</span><img src=\"image/donna02.jpg\" />Eleonora R. di 42 anni odiava la palestra, le diete e non riusciva mai a dimagrire. Dopo aver scoperto il suo piano casalingo ormonale ha perso 13 kg “quasi senza accorgersene*”.<span class='quote-disc'>* I risultati sono possono variare da persona in persona.</span><button onclick='window.survey.nextPage();'>Continua</button>"
                            }
                        ],
                        "visibleIf": "{gender} = 'donna'"
                    },
                    {
                        "name": "page26",
                        "elements": [
                            {
                                "type": "radiogroup",
                                "name": "question27",
                                "title": "Ho soprattutto problemi con...",
                                "choices": [
                                    {
                                        "value": "Item 1",
                                        "text": "<span class='survey-icon'>🍔</span> Mangiare in modo emotivo o stressato"
                                    },
                                    {
                                        "value": "Item 2",
                                        "text": "<span class='survey-icon'>😞</span> Mantenere alta la motivazione"
                                    },
                                    {
                                        "value": "Item 3",
                                        "text": "<span class='survey-icon'>😴</span> La stanchezza che mi rende meno attiva"
                                    },
                                    {
                                        "value": "Item 4",
                                        "text": "<span class='survey-icon'>🎢</span> Sono incostante con dieta ed esercizio"
                                    }
                                ]
                            }
                        ],
                        "visibleIf": "{gender} = 'donna'"
                    },
                    {
                        "name": "page27",
                        "elements": [
                            {
                                "type": "radiogroup",
                                "name": "question28",
                                "title": "Come descriveresti la tua pelle?",
                                "choices": [
                                    {
                                        "value": "Item 1",
                                        "text": "<span class='survey-icon'>🌵</span> Secca e a volte pruriginosa"
                                    },
                                    {
                                        "value": "Item 2",
                                        "text": "<span class='survey-icon'>💧</span> Oleosa in alcune aree, secca in altre"
                                    },
                                    {
                                        "value": "Item 3",
                                        "text": "<span class='survey-icon'>💦</span> Oleosa o con tendenza all'acne"
                                    },
                                    {
                                        "value": "Item 4",
                                        "text": "<span class='survey-icon'>🍑</span> Chiara e idratata"
                                    }
                                ]
                            }
                        ],
                        "visibleIf": "{gender} = 'donna'"
                    },
                    {
                        "name": "page28",
                        "elements": [
                            {
                                "type": "radiogroup",
                                "name": "question29",
                                "title": "Ultima domanda… come valuteresti il tuo metabolismo?",
                                "choices": [
                                    {
                                        "value": "Item 1",
                                        "text": "<span class='survey-icon'>🐆</span> Veloce: difficilmente prendo peso, anche mangiando molto"
                                    },
                                    {
                                        "value": "Item 2",
                                        "text": "<span class='survey-icon'>🐢</span> Lento: tendo ad accumulare peso facilmente"
                                    },
                                    {
                                        "value": "Item 3",
                                        "text": "<span class='survey-icon'>🔄</span> Variabile: il mio peso fluttua spesso"
                                    },
                                    {
                                        "value": "Item 4",
                                        "text": "<span class='survey-icon'>🤷</span>️ Non sono sicura di come valutare il mio metabolismo"
                                    }
                                ]
                            }
                        ],
                        "visibleIf": "{gender} = 'donna'"
                    },
                    {
                        "name": "page29",
                        "elements": [
                            {
                                "type": "html",
                                "name": "question30",
                                "html": "<div class='sv-html'><span>💡</span><h3>Lo sapevi?</h3>Oltre 10.000 donne stanno entrando nella loro forma migliore e modellando corpi sexy e tonici – senza palestra o diete noiose – grazie al piano adatto al loro “tipo ormonale”*.<img src=\"image/donna04.jpg\" /><span class='quote-disc'>* I risultati sono possono variare da persona in persona.<span>Ti rimane solo un click per unirti a loro!<button onclick='window.survey.completeLastPage();'>Voglio sbloccare il mio potenziale ormonale!</button>"
                            }
                        ],
                        "visibleIf": "{gender} = 'donna'"
                    }
                ],
                "showNavigationButtons": "top",
                "showTitle": true,
                "showQuestionNumbers": "off",
                "showProgressBar": "none"
            }


        window.survey = new Survey.Model(json);

        $("#surveyElement").Survey({
            model: survey, onComplete: sendDataToServer,
        });

        window.survey.onValueChanged.add(function (survey, options) {
            setTimeout(function () {
                if (window.survey.isLastPage) {
                    // window.survey.completeLastPage();
                    // $('.sv-action-bar').show()
                } else {
                    window.survey.nextPage();
                }

            }, 500);
        });

        window.survey.onCurrentPageChanged.add(function (sender, option) {

            if (!!option.oldCurrentPage && !!option.newCurrentPage && option.newCurrentPage.visibleIndex === option.oldCurrentPage.visibleIndex - 1) {
                last = Object.keys(sender.data)[Object.keys(sender.data).length - 1];
                sender.clearValue(last)
            }

            let currentPage = sender.currentPage.name;

            let progress = sender.getProgress();

            if (currentPage == 'page0') {
                $('.sv-title').show()
            } else {
                $('.sv-title').hide()
            }

            var element = document.getElementById("myprogressBar");
            element.style.width = sender.getProgress() + '%';
            // $('#currentNumberProgress').text(sender.currentPageNo + 1);

            dataLayer.push({
                event: "quiz_step",
                step_number: currentPage
            });
        });

        window.survey.onComplete.add(function (sender, options) {
            dataLayer.push({
                event: "quiz_step",
                step_number: 100
            });

        });

        var converter = new showdown.Converter();

        window.survey.onTextMarkdown.add(function (survey, options) {
            //convert the Markdown text to html
            var str = converter.makeHtml(options.text);
            //remove root paragraphs <p></p>
            str = str.substring(3);
            str = str.substring(0, str.length - 4);
            //set html
            options.html = str;
        });

        function sendDataToServer(survey) {

            move();

            var test = getUrlParameter('test') ? 'yes' : 'no';

            sleep(1500).then(() => {
                $.post("https://guerrieraspartana.com/wp-json/quiz/add", {
                    result: JSON.stringify(survey.data),
                    test: test,
                    quiz: 'icon-quiz-ud'
                }).done(function (data) {

                    $('#surveyForm').hide();
                    $('#surveyElement').hide();
                    $('#surveyFormCompletato').show();

                    $('#surveyPrev').hide();
                    $('.navbar__item__page').hide();
                    $('.navbar__progress').hide();

                    if (survey.data.gender == 'uomo') {

                        let risultato = {
                            'SHT-T': 0,
                            'SHT-D': 0,
                            'SHT-M': 0,
                            'TDS': 0,
                            'DDS': 0,
                            'MDS': 0
                        };

                        let tipo = "";

                        switch (survey.data.question1) {
                            case "Item 1":
                                tipo = 'endomorfo';
                                risultato['DDS']++;
                                risultato['SHT-D']++;
                                break;
                            case "Item 2":
                                tipo = 'endomorfo';
                                risultato['DDS']++;
                                risultato['SHT-D']++;
                                break;
                            case "Item 3":
                                tipo = 'mesomorfo';
                                risultato['DDS']++;
                                risultato['SHT-T']++;
                                break;
                            case "Item 4":
                                tipo = 'ectomorfo';
                                risultato['MDS']++;
                                risultato['SHT-M']++;
                                break;
                        }

                        switch (survey.data.question7) {
                            case "Item 1":
                                risultato['TDS'] -= 1;
                                break;
                            case "Item 3":
                                risultato['TDS'] += 5;
                                break;
                        }

                        switch (survey.data.question8) {
                            case "Item 1":
                                risultato['SHT-T'] = risultato['SHT-T'] + 3;
                                risultato['SHT-D'] = risultato['SHT-D'] + 3;
                                risultato['SHT-M'] = risultato['SHT-M'] + 3;
                                break;
                            case "Item 2":
                                risultato['SHT-T'] = risultato['SHT-T'] - 3;
                                risultato['SHT-D'] = risultato['SHT-D'] - 3;
                                risultato['SHT-M'] = risultato['SHT-M'] - 3;
                                break;
                        }

                        switch (survey.data.question9) {
                            case "Item 1":
                                risultato['SHT-T'] = risultato['SHT-T'] + 3;
                                risultato['SHT-D'] = risultato['SHT-D'] + 3;
                                risultato['SHT-M'] = risultato['SHT-M'] + 3;
                                break;
                            case "Item 2":
                                risultato['SHT-T'] = risultato['SHT-T'] - 1;
                                risultato['SHT-D'] = risultato['SHT-D'] - 1;
                                risultato['SHT-M'] = risultato['SHT-M'] - 1;
                                break;
                            case "Item 3":
                                risultato['SHT-T'] = risultato['SHT-T'] - 10;
                                risultato['SHT-D'] = risultato['SHT-D'] - 10;
                                risultato['SHT-M'] = risultato['SHT-M'] - 10;
                                break;
                        }

                        switch (survey.data.question13) {
                            case "Item 1":
                                risultato['DDS'] = risultato['DDS'] - 1;
                                risultato['MDS'] = risultato['MDS'] + 1;
                                risultato['SHT-T'] = risultato['SHT-T'] + 1;
                                risultato['SHT-D'] = risultato['SHT-D'] + 1;
                                risultato['SHT-M'] = risultato['SHT-M'] + 1;
                                risultato['TDS'] = risultato['TDS'] + 1;
                                break;
                            case "Item 3":
                                risultato['MDS'] = risultato['MDS'] - 1;
                                risultato['DDS'] = risultato['DDS'] + 1;
                                risultato['SHT-T'] = risultato['SHT-T'] + 1;
                                risultato['SHT-D'] = risultato['SHT-D'] + 1;
                                risultato['SHT-M'] = risultato['SHT-M'] + 1;
                                risultato['TDS'] = risultato['TDS'] + 1;
                                break;
                        }

                        let ordineChiavi = ['SHT-T','SHT-D','SHT-M', 'TDS', 'DDS', 'MDS'];

                        // Trova il valore massimo
                        let valoreMassimo = Math.max(...Object.values(risultato));

                        // Filtra le chiavi che hanno il valore massimo
                        let chiaviConValoreMassimo = Object.keys(risultato).filter(key => risultato[key] === valoreMassimo);

                        // Ordina le chiavi secondo l'ordine prestabilito e seleziona la prima
                        let chiaveSelezionata = ordineChiavi.find(key => chiaviConValoreMassimo.includes(key));

                        console.log(risultato);
                        console.log(chiaveSelezionata); // Restituisce la chiave con il valore massimo e più alta priorità

                        $("#surveyForm").hide();
                        $("#surveyElement").hide();
                        $("#surveyFormCompletato").show();

                        let obiettivo = '';

                        switch (chiaveSelezionata) {
                            case "DDS":
                            case "SHT-D":
                                obiettivo = "dimagrimento";
                                break;
                            case "MDS":
                            case "SHT-M":
                                obiettivo = "massa_muscolare";
                                break;
                            case "TDS":
                            case "SHT-T":
                                obiettivo = "massa_e_definizione";
                                break;
                        }

                        let casa = ['SHT-T','SHT-D','SHT-M'];

                        if (casa.includes(chiaveSelezionata)) { // Casa
                            $('._form_343').hide();
                            $('._form_341').hide();

                            $('input[data-name="obiettivo"]').val(obiettivo);
                            $('input[data-name="sesso"]').val(survey.data.gender);

                            $("form._form_346").on("submit", function () {
                                var required = $("input").filter("[required]:visible");

                                var allRequired = true;
                                required.each(function () {
                                    if ($(this).prop("type") == "checkbox") {
                                        if ($(this).prop("checked") == false) {
                                            allRequired = false;
                                        }
                                    } else if ($(this).val() == "") {
                                        allRequired = false;
                                    }
                                });

                                if (allRequired) {
                                    var name = $("#firstname").val();

                                    switch (chiaveSelezionata) {
                                        case "SHT-T": // tonificare a casa
                                            window.open("https://casa.fisicodaspartano.com/u-r/?result=" + data, "_self");
                                            break;
                                        case "SHT-D": // dimagrire a casa
                                            window.open("https://casa.fisicodaspartano.com/u-d/?result=" + data, "_self");
                                            break;
                                        case "SHT-M": // massa a casa
                                            window.open("https://casa.fisicodaspartano.com/u-m/?result=" + data, "_self");
                                            break;
                                    }
                                }
                            });
                        } else { // FDS
                            $('._form_343').hide();
                            $('._form_346').hide();

                            $('input[data-name="somatotipo"]').val(tipo)
                            $('input[data-name="obiettivo"]').val(obiettivo)
                            $('input[data-name="prodotto_quiz"]').val(chiaveSelezionata)

                            $("form._form_341").on("submit", function () {
                                var required = $("input").filter("[required]:visible");

                                var allRequired = true;
                                required.each(function () {
                                    if ($(this).prop("type") == "checkbox") {
                                        if ($(this).prop("checked") == false) {
                                            allRequired = false;
                                        }
                                    } else if ($(this).val() == "") {
                                        allRequired = false;
                                    }
                                });

                                if (allRequired) {
                                    var name = $("#firstname").val();

                                    switch (chiaveSelezionata) {
                                        case "TDS": // tonificare in palestra
                                            window.open("https://fisicodaspartano.com/tds-q/?result=" + data, "_self");
                                            break;
                                        case "DDS": // dimagrire in palestra
																	 if (tipo == 'endomorfo') {
                                                window.open("https://fisicodaspartano.com/dds-e/?result=" + data, "_self");
                                            } else {
                                                window.open("https://fisicodaspartano.com/dds-m/?result=" + data, "_self");
                                            }
                                            break;
                                        case "MDS": // massa in palestra
                                            window.open("https://fisicodaspartano.com/mds-q/?result=" + data, "_self");
                                            break;
                                    }
                                }
                            });
                        }
                    } else { // Donne

                        $('._form_341').hide();
                        $('._form_346').hide();

                        $('#form_headline_form').html('Dove inviarti il tuo report personalizzato?');

                        $('form._form_343').on('submit', function () {

                            var required = $('input').filter('[required]:visible');

                            var allRequired = true;
                            required.each(function () {

                                if ($(this).prop('type') === 'checkbox') {
                                    if ($(this).prop('checked') === false) {
                                        allRequired = false;
                                    }
                                } else if ($(this).val() === '') {
                                    allRequired = false;
                                }
                            });

                            if (allRequired) {
                                dataLayer.push({
                                    event: "event",
                                    action: "generate_lead"
                                });

                                var name = $('#firstname').val();
                                var email = $('#email').val();

                                switch (survey.data.question15) {
                                    case "Item 1":
                                        window.open("https://guerrieraspartana.com/d-d-m?result=" + data, "_self");
                                        break;
                                    case "Item 2":
                                        window.open("https://guerrieraspartana.com/d-d-m/?result=" + data, "_self");
                                        break;
                                    case "Item 3":
                                        window.open("https://guerrieraspartana.com/d-t-m/?result=" + data, "_self");
                                        break;
                                    case "Item 4":
                                        window.open("https://guerrieraspartana.com/d-c-m/?result=" + data, "_self");
                                        break;
                                }
                            }
                        });
                    }
                });
            });
        }

        var i = 0;

        function move() {
            if (i === 0) {
                i = 1;
                let elem = document.getElementById("myBar");
                let width = 0;
                let id = setInterval(frame, 30);

                function frame() {
                    if (width >= 100) {
                        clearInterval(id);
                        i = 0;
                    } else {
                        width++;
                        elem.style.width = width + "%";
                        elem.innerHTML = width + "%";
                    }
                }
            }

        }

        function sleep(ms) {
            return new Promise((resolve) => setTimeout(resolve, ms));
        }

    }
)
;

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1), sURLVariables = sPageURL.split('&'), sParameterName, i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return typeof sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
};


