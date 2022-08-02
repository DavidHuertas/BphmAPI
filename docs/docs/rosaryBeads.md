---
id: rosaryBeads
title: Rosary Beads Route
sidebar_label: Rosary Beads
slug: /rosaryBeads
---

## Introduction

This route fetches a list of all the Rosary Beads that can be encountered in the Blasphemous game, 
and outputs that in JSON format. The user can define language, his own pagination and also use search queries 
to find the desired output.

## Language

This route is multilingual and accepts parameter `language`. Check the language section to see the different languages available.

## Sample Result

https://bphm-api.vercel.app/api/rosaryBeads?limit=1

```javascript
{
    "success": true,
        "count": 1,
        "total": 52,
        "data": [
        {
            "id": "62e7fd13ef4a6a5cfb6666b5",
            "name": {
                "es": "Cráneo de Paloma",
                "en": "Dove Skull",
                "fr": "Crâne de colombe",
                "de": "Taubenschädel",
                "it": "Teschio di Colomba",
                "zh": "鸽子头骨",
                "ru": "Череп голубя",
                "ja": "鳩の頭蓋骨",
                "pt-BR": "Crânio de Pomba",
                "ko": "비둘기 뼈"
            },
            "description": {
                "es": "Calavera de ave, perforada como engarce. Su aparente fragilidad potencia ligeramente las defensas de Penitente.",
                "en": "Skull of a bird, drilled as a collet. Its apparent frailness slightly strengthens The Penitent One's defences.",
                "fr": "Le crâne d'un oiseau, porté en pendentif. Sa fragilité apparente renforce légèrement les défenses du Pénitent.",
                "de": "Schädel eines Vogels, zu einer Zwinge gebohrt. Seine Zerbrechlichkeit stärkt die Verteidigung des Büßers geringfügig.",
                "it": "Il teschio perforato di una colomba. La sua apparente fragilità rafforza leggermente la Difesa del Penitente.",
                "zh": "鸟类的头骨，人们将其钻孔作为宝石座。看似脆弱不堪，实则能稍微提升忏悔者的防御",
                "ru": "Птичий череп, просверленный под оправу для камня. Невзирая на кажущуюся хрупкость, он несколько увеличивает защиту Кающегося.",
                "ja": "コレットとして加工された鳥の\n頭蓋骨。脆い見た目ではある\nが、悔悟者の防御を少しだけ強\n化してくれる。",
                "pt-BR": "Crânio de uma ave, perfurado como peça de um colar. Sua aparente fragilidade fortalece ligeiramente as defesas do Penitente.",
                "ko": "구멍이 뚫린 새의 두개골. 부서지기 쉬운 이 두개골은 참회자의 방어력을 약간 올려 준다."
            },
            "lore": {
                "es": "Aquella mañana, cuando las hogueras se encendieron y los condenados comenzaron sus terribles súplicas a los impasibles inquisidores, una paloma blanca bajó de entre los humos y se posó en el hombro de uno de los culpados y ahí permaneció hasta que ardió junto a él.",
                "en": "That morning, when the bonfires were lit and the convicts were raising their ghastly pleas to the indifferent inquisitors, a white dove came down from heaven and perched on the shoulder of a prisoner, where it stayed until it burned with him.",
                "fr": "Ce matin-là, lorsqu'on alluma les bûchers et que les condamnés lancèrent leurs suppliques sinistres aux inquisiteurs indifférents, une colombe blanche descendit des cieux et se percha sur l'épaule d'un prisonnier, où elle resta jusqu'à brûler avec lui.",
                "de": "An dem Morgen, an dem man die Scheiterhaufen errichtete und die schaurigen Klagen der Verurteilten an die gleichgültigen Ohren der Inquisitoren drangen, kam eine weiße Taube vom Himmel herab, setzte sich auf die Schulter eines der Gefangenen und ließ sich mit ihm verbrennen.",
                "it": "Quella mattina, quando i falò vennero accesi e i condannati cominciarono a innalzare suppliche agli inquisitori impassibili, una bianca colomba discese dal cielo e si posò sulla spalla di un prigioniero, dove rimase fino a bruciare insieme a lui.",
                "zh": "清晨，刑火燃起，犯人们向无情的裁判官苦苦哀求，一只白鸽从天而降，飞到一名犯人肩上，与之一并被焚为灰烬",
                "ru": "Тем утром, когда зажгли костры и осужденные возносили свои мольбы безразличным инквизиторам, белый голубь спустился с небес и сел на плечо одному из заключенных, где и сидел, пока не сгорел вместе с ним.",
                "ja": "あの日の朝、火刑のための薪に火がつけられ\nた。聞く耳を持たない宗教裁判官たちに向かっ\nて囚人が必死に嘆願を続ける中、一羽の白い鳥\nが天より舞い降り、囚人の肩に止まった。鳥は\n囚人と共に炎に燃やされ、やがて灰になった。",
                "pt-BR": "Naquela manhã, quando as fogueiras foram acesas e os condenados lançavam apelos horrendos aos inquisidores indiferentes, uma pomba branca desceu do céu e pousou no ombro de um prisioneiro, e lá ficou até queimar junto com ele.",
                "ko": "그날 아침, 불 붙은 모닥불과 함께 죄수들이 무심한 이단심문관을 향해 소름 끼치는 목소리로 애원하던 그때 흰 비둘기 한 마리가 하늘에서 내려와 한 죄수의 어깨에 걸터앉았으며, 죄수와 함께 불타 재가 될 때까지 그 자리를 떠나지 않았다."
            }
        }
    ]
}
```

## Route

| METHOD |                       URL                       |                                                                  DESCRIPTION |
|--------|:-----------------------------------------------:|-----------------------------------------------------------------------------:|
| `GET`  |   https://bphm-api.vercel.app/api/rosaryBeads   | This route retrieves a list of all the Rosary Beads of **Blasphemous** game. |
| `GET`  | https://bphm-api.vercel.app/api/rosaryBeads/:id |            This route retrieves one **Blasphemous** Quest Item using its ID. |

## Parameters

This route supports the following parameters:

| Parameter     | default value |                                                                Example URL |                                                                                             DESCRIPTION |
|---------------|:-------------:|---------------------------------------------------------------------------:|--------------------------------------------------------------------------------------------------------:|
| `language`    |     none      |           https://bphm-api.vercel.app/api/rosaryBeads?language=en&limit=10 |  This parameter is used to filter by language all text fields (name, description, lore) in the response |
| `limit`       |      20       |                       https://bphm-api.vercel.app/api/rosaryBeads?limit=10 |                               This parameter is used to set the maximum amount of items in the response |
| `page`        |       0       |                 https://bphm-api.vercel.app/api/rosaryBeads?limit=2&page=3 |                                             This parameter is used to navigate between pages of results |
| `name`        |     none      |  https://bphm-api.vercel.app/api/rosaryBeads?language=en&name=proclamation |       This parameter is used to search for Rosary Beads by their names, language parameter is mandatory |
| `description` |     none      | https://bphm-api.vercel.app/api/rosaryBeads?language=en&description=sphere | This parameter is used to search for Rosary Beads by their description, language parameter is mandatory |
| `lore`        |     none      |       https://bphm-api.vercel.app/api/rosaryBeads?language=en&lore=bonfire |        This parameter is used to search for Rosary Beads by their lore, language parameter is mandatory |

