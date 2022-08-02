---
id: collectibles
title: Collectibles Route
sidebar_label: Collectibles
slug: /collectibles
---

## Introduction

This route fetches a list of all the Collectibles that can be encountered in the Blasphemous game, 
and outputs that in JSON format. The user can define language, his own pagination and also use search queries 
to find the desired output.

## Language

This route is multilingual and accepts parameter `language`. Check the language section to see the different languages available.

## Sample Result

https://bphm-api.vercel.app/api/collectibles?limit=1

```javascript
{
    "success": true,
        "count": 1,
        "total": 44,
        "data": [
        {
            "id": "62e7fd13ef4a6a5cfb666616",
            "name": {
                "es": "Parietal de Lasser, el Inquisidor",
                "en": "Parietal bone of Lasser, the Inquisitor",
                "fr": "Os pariétal de Lasser, l'Inquisiteur",
                "de": "Scheitelbein von Lasser, dem Inquisitor",
                "it": "Osso parietale di Lasser l'Inquisitore",
                "zh": "裁判官拉瑟的头盖骨",
                "ru": "Теменная кость инквизитора Лассера",
                "ja": "宗教裁判官ラッセルの頭頂骨",
                "pt-BR": "Osso parietal de Lasser, o Inquisidor",
                "ko": "이단심문관 라세르의 정수리뼈"
            },
            "description": {
                "es": "A diferencia de otros inquisidores, Lasser mostró una inusitada indulgencia hacia los acusados, llegando incluso a detener ejecuciones. Su debilidad le llevó a la excomulgación y al destierro.",
                "en": "Unlike other inquisitors, Lasser showed an unusual amount of indulgence towards the accused, even to the point of stopping executions. His weakness led him to excommunication and exile.",
                "fr": "Contrairement à d'autres inquisiteurs, Lasser faisait preuve d'une indulgence inhabituelle envers les accusés, jusqu'à parfois suspendre des exécutions. Pour sa faiblesse, il fut excommunié et exilé.",
                "de": "Im Gegensatz zu anderen Inquisitoren ließ Lasse den Delinquenten gegenüber große Milde walten, er ging sogar so weit, Exekutionen zu verhindern. Diese Schwäche führte zu seiner Exkommunikation und Verbannung.",
                "it": "A differenza di altri inquisitori, Lasser mostrava un'inconsueta indulgenza verso gli accusati, tanto da interromperne le esecuzioni. La sua debolezza lo portò alla scomunica prima e all'esilio poi.",
                "zh": "拉瑟与其他裁判官不同，他对被控告之人心怀同情，甚至想要废除极刑。此人软弱不堪，已被革籍流放",
                "ru": "В отличие от прочих инквизиторов, Лассер часто проявлял к осужденным снисходительность – вплоть до прерывания экзекуции. Слабость привела его к отлучению от церкви и к изгнанию.",
                "ja": "ラッセルはほかの裁判官とは異\nなり、被告人に対して多大なる\n寛容さを持っており、時には処\n刑をやめさせることすらあっ\nた。その心の弱さが原因となっ\nて彼は破門され、追放を命じら\nれた。",
                "pt-BR": "Ao contrário de outros inquisidores, Lasser demonstrava uma indulgência incomum para com o acusado, chegando até a interromper execuções. Essa fraqueza causou sua excomunhão e exílio.",
                "ko": "라세르는 다른 이단심문관과 달리 죄인의 사형을 멈추게 할 만큼 남다른 관용을 베풀었다. 그 약점은 결국 자신을 파문과 유배자라는 운명으로 이끌었다."
            }
        }
    ]
}
```


## Route

| METHOD |                       URL                        |                                                                  DESCRIPTION |
|--------|:------------------------------------------------:|-----------------------------------------------------------------------------:|
| `GET`  |   https://bphm-api.vercel.app/api/collectibles   | This route retrieves a list of all the collectibles of **Blasphemous** game. |
| `GET`  | https://bphm-api.vercel.app/api/collectibles/:id |           This route retrieves one **Blasphemous** collectible using its ID. |

## Parameters

This route supports the following parameters:

| Parameter     | default value |                                                                            Example URL |                                                                                              DESCRIPTION |
|---------------|:-------------:|---------------------------------------------------------------------------------------:|---------------------------------------------------------------------------------------------------------:|
| `language`    |     none      |                      https://bphm-api.vercel.app/api/collectibles?language=en&limit=10 |         This parameter is used to filter by language all text fields (name, description) in the response |
| `limit`       |      20       |                                  https://bphm-api.vercel.app/api/collectibles?limit=10 |                                This parameter is used to set the maximum amount of items in the response |
| `page`        |       0       |                            https://bphm-api.vercel.app/api/collectibles?limit=2&page=3 |                                              This parameter is used to navigate between pages of results |
| `name`        |     none      |                 https://bphm-api.vercel.app/api/collectibles?language=en&name=Parietal |        This parameter is used to search for collectibles by their names, language parameter is mandatory |
| `description` |     none      | https://bphm-api.vercel.app/api/collectibles?language=en&description=Anointed%20Legion | This parameter is used to search for collectibles by their descriptions, language parameter is mandatory |

