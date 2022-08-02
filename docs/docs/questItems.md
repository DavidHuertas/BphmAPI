---
id: questItems
title: Quest Items Route
sidebar_label: Quest Items
slug: /questItems
---

## Introduction

This route fetches a list of all the Quest Items that can be encountered in the Blasphemous game, 
and outputs that in JSON format. The user can define language, his own pagination and also use search queries 
to find the desired output.

## Language

This route is multilingual and accepts parameter `language`. Check the language section to see the different languages available.

## Sample Result

https://bphm-api.vercel.app/api/questItems?limit=1

```javascript
{
    "success": true,
        "count": 1,
        "total": 75,
        "data": [
        {
            "id": "62e7fd13ef4a6a5cfb666661",
            "name": {
                "es": "Cordón del Genuino Sepulto",
                "en": "Cord of the True Burying",
                "fr": "Sangle de la Véritable inhumation",
                "de": "Kordel der Wahren Beisetzung",
                "it": "Corda della Vera Sepoltura",
                "zh": "真葬束绳",
                "ru": "Шнур истинного погребения",
                "ja": "真なる埋葬の縄",
                "pt-BR": "Cordão do Sepultamento Genuíno",
                "ko": "진정한 매장을 위한 밧줄"
            },
            "description": {
                "es": "Cordón trenzado del que cuelga una medalla de bronce gastado con el escudo de la Hermandad del Genuino Sepulto.",
                "en": "Braided rope from which hangs a medallion of worn bronze with the emblem of the Order of the True Burial.",
                "fr": "Une corde tressée d'où pend un médaillon de bronze usé, avec l'emblème de l'Ordre de la Véritable inhumation.",
                "de": "Geflochtenes Seil, an dem ein verwittertes Bronzeamulett mit dem Emblem des Ordens der Wahren Beisetzung hängt.",
                "it": "Corda intrecciata dalla quale pende un medaglione in bronzo usurato, con l'emblema dell'Ordine della Vera Sepoltura.",
                "zh": "一块挂着破损铜牌的绳子，铜牌上有真葬修会的标记",
                "ru": "Плетеный шнур с потертым бронзовым медальоном, на котором изображен знак Ордена Истинного погребения.",
                "ja": "編み込まれた縄。そこから吊る\nされた擦り切れた青銅製のメダ\nルには、真なる埋葬教団のエン\nブレムが描かれている。",
                "pt-BR": "Cordão trançado do qual pende um medalhão de bronze desgastado com o emblema da Ordem do Sepultamento Genuíno.",
                "ko": "땋은 밧줄. 진정한 매장 교단의 문장이 새겨진 낡고 오래된 청동 메달이 걸려 있다."
            },
            "lore": {
                "es": "\"Quienquiera que seas, dirijo mi exhortación a ti que, renunciando a tu voluntad, abrazas la obediencia como llave primera de la humildad\".\n\n\n\"Solo los completos cruzarán hacia el otro lado del Sueño\".\n\n\nEstas palabras, pronunciadas por nuestro primer maestro, serán nuestra ilustre Regla. Los hermanos, con nuestro santo oficio de recopilación y sepultura, nos dedicaremos con devoción completa a tal causa, siendo nuestro primer pensamiento al despertar y nuestro último al acostar.",
                "en": "\"Whoever you are, I address my exhortation to you, who, renouncing your will, embrace obedience as the first key to humility.\"\n\n\n\"Only those who are whole will cross over to the other side of The Dream.\"\n\n\nThese words, pronounced by our first master, would become our illustrious Rule. We brothers, with our holy purpose of recollection and burial, will dedicate ourselves with complete devotion to such cause, it being our first thought at dawn and our last thought at bedtime.",
                "fr": "«Qui que vous soyez, je vous exhorte, vous qui, en renonçant à votre volonté, acceptez l'obéissance comme première clé de l'humilité.»\n\n\n«Seuls ceux qui sont intacts pourront rejoindre l'autre côté du Rêve.»\n\n\nCes paroles, prononcées par notre premier maître, allaient devenir notre Règle illustre. Nous, frères, avec notre sainte fonction de souvenir et d'inhumation, nous nous consacrerons à une dévotion totale envers cette cause, puisque ce sera notre première pensée à l'aube et notre dernière idée au coucher.",
                "de": "„Wer Ihr auch sein mögt, ich wende mich mit meiner Mahnung an Euch: Verzichtet auf Euren Willen und leistet Gehorsam, denn dies ist der erste Schritt zu wahrer Demut.“\n\n\n„Nur jene, die vollständig sind, können die andere Seite des Traumes erreichen.“\n\n\nDiese Worte unseres ersten Meisters sollten zu unserer berühmten Regel werden. Wir Brüder wollen uns der heiligen Pflicht der Wiederauffindung und Bestattung verschreiben, ihr soll unser erster Gedanke am Morgen und unser letzter Gedanke am Abend gelten.",
                "it": "\"Chiunque voi siate, rivolgo la mia esortazione a voi che, rinunciando alla vostra volontà, abbracciate l'obbedienza come essenza stessa dell'umiltà\".\n\n\n\"Solo coloro che sono completi passeranno dall'altra parte del Sogno\".\n\n\nQueste parole, pronunciate dal nostro primo Maestro, saranno la nostra Regola. I fratelli, con il nostro santo scopo di raccolta e sepoltura, dedicheranno totalmente se stessi a tale causa, essendo il nostro primo pensiero al risveglio e l'ultimo al momento di coricarci.",
                "zh": "「无论你是谁，且听我布道，你要放弃自己的意志，恪守命令，这才是谦逊的第一要义。」\n\n\n「只有意志坚定之人才能渡过大梦境」\n\n\n我们祖师的训诫将会成为我们的圣则，我们神圣的目的就是追忆与埋葬，这将会使我们彻底献身于此等伟业，天亮之时，我们的思维从此开始；入睡之际，我们的思维以此为终",
                "ru": "«Кем бы ты ни был, я обращаюсь со своим увещеванием к тебе, чтобы ты, отрекаясь от воли своей, смирился с повиновением – и это будет первый шаг к покорности».\n\n\n«Лишь те, кто полны, смогут перейти на ту сторону Сна».\n\n\nЭти слова, произнесенные нашим первым учителем, стали нашим прославленным Уставом. Мы братья, наша священная цель – собирать и хоронить. Мы полностью преданы этому делу, наша первая мысль на восходе о нем и наша последняя мысль в постели о нем.",
                "ja": "あなたが誰であれ、私はあなたに忠告を贈ろ\nう。自らの自由意志を捨て服従を受け入れるこ\nとこそ、人間として最も大事なことだ。\n\n\n「どこも欠けることのない者のみが、\n　夢の向こう岸へと渡れるであろう」\n\n\n私たちの導師の口から紡がれたこの言葉が、私\nたちにとって名誉ある規則となった。収集と埋\n葬という聖なる目的を持った私たち修道士は、\n欠けることなき信仰心をもって、その規則のた\nめにこの身を捧げよう。毎朝起床する瞬間、毎\n晩眠りにつく瞬間、この規則のことを頭に浮か\nべるように。",
                "pt-BR": "\"Quem quer que seja, eu dirijo minha exortação a ti que, renunciando tua vontade, abraças a obediência como a primeira chave da humildade.\"\n\n\n\"Apenas aqueles inteiros cruzarão para o outro lado do Sonho.\"\n\n\nEssas palavras, pronunciadas pelo nosso primeiro mestre, serão nossa ilustre Lei. Nós, irmãos, com nosso propósito sagrado de recordação e sepultamento, nos dedicaremos com completa devoção a essa causa, sendo este nosso primeiro pensamento ao despertar, e nosso último antes de dormir.",
                "ko": "\"그대가 누구든, 자신의 뜻을 저버리고 순종을 첫 번째 열쇠로 받아들인 그대에게 내가 권고하나니.\"\n\n\n\"오직 그들만이 꿈의 저편으로 건너갈 수 있을 것이다.\"\n\n\n우리의 첫 스승이 남긴 말은 우리의 위대한 율법이 될 것이다. 우리 형제들은 이들을 기억하고 매장하는 성스러운 목적을 지닐 것이며, 그대의 앞에 우리의 모든 것을 바치리라. 이것은 새벽 동이 틀 때 가장 먼저 생각하는 것이며, 우리가 잠들기 전 마지막으로 생각하는 것이다."
            }
        }
    ]
}
```

## Route

| METHOD |                      URL                       |                                                                 DESCRIPTION |
|--------|:----------------------------------------------:|----------------------------------------------------------------------------:|
| `GET`  |   https://bphm-api.vercel.app/api/questItems   | This route retrieves a list of all the Quest Items of **Blasphemous** game. |
| `GET`  | https://bphm-api.vercel.app/api/questItems/:id |           This route retrieves one **Blasphemous** Quest Item using its ID. |

## Parameters

This route supports the following parameters:

| Parameter     | default value |                                                                 Example URL |                                                                                            DESCRIPTION |
|---------------|:-------------:|----------------------------------------------------------------------------:|-------------------------------------------------------------------------------------------------------:|
| `language`    |     none      |             https://bphm-api.vercel.app/api/questItems?language=en&limit=10 | This parameter is used to filter by language all text fields (name, description, lore) in the response |
| `limit`       |      20       |                         https://bphm-api.vercel.app/api/questItems?limit=10 |                              This parameter is used to set the maximum amount of items in the response |
| `page`        |       0       |                   https://bphm-api.vercel.app/api/questItems?limit=2&page=3 |                                            This parameter is used to navigate between pages of results |
| `name`        |     none      |            https://bphm-api.vercel.app/api/questItems?language=en&name=mark |       This parameter is used to search for Quest Items by their names, language parameter is mandatory |
| `description` |     none      |  https://bphm-api.vercel.app/api/questItems?language=en&description=remains | This parameter is used to search for Quest Items by their description, language parameter is mandatory |
| `lore`        |     none      | https://bphm-api.vercel.app/api/questItems?language=en&lore=distant%20cries |        This parameter is used to search for Quest Items by their lore, language parameter is mandatory |

