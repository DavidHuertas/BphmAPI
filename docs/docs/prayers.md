---
id: prayers
title: Prayers Route
sidebar_label: Prayers
slug: /prayers
---

## Introduction

This route fetches a list of all the Prayers that can be encountered in the Blasphemous game, 
and outputs that in JSON format. The user can define language, his own pagination and also use search queries 
to find the desired output.

## Language

This route is multilingual and accepts parameter `language`. Check the language section to see the different languages available.

## Sample Result

https://bphm-api.vercel.app/api/prayers?limit=1

```javascript
{
    "success": true,
        "count": 1,
        "total": 17,
        "data": [
        {
            "id": "62e7fd13ef4a6a5cfb66664f",
            "name": {
                "es": "Següiriya a Tus Luceros",
                "en": "Següiriya to your Eyes like Stars",
                "fr": "Següiriya, à tes yeux comme des étoiles",
                "de": "Següiriya an deine sternengleichen Augen",
                "it": "Següiriya ai tuoi occhi come stelle",
                "zh": "星目颂歌",
                "ru": "Сигирийя твоим глазам, подобным звездам",
                "ja": "星の双眼に贈るシギリージャ",
                "pt-BR": "Següiriya para teus Olhos Brilhantes",
                "ko": "별빛 같은 눈동자에 바치는 세기리야"
            },
            "description": {
                "es": "Breve canto a los cielos nocturnos. Embarga a Penitente con la furia de los justos, aumentando la velocidad de sus ataques por un tiempo.",
                "en": "Brief hymn to the night skies. Overwhelms The Penitent One with the fury of the righteous, increasing the speed of his attacks for some time. ",
                "fr": "Un hymne bref dédié aux cieux nocturnes. La furie des justes s'empare du Pénitent: sa vitesse d'attaque augmente temporairement.",
                "de": "Kurze Hymne an den Nachthimmel. Erfüllt den Büßer mit dem Zorn der Gerechten, erhöht vorübergehend das Tempo seiner Angriffe. ",
                "it": "Breve inno ai cieli notturni. Pervade il Penitente della furia dei virtuosi, aumentando temporaneamente la velocità dei suoi attacchi. ",
                "zh": "歌颂夜空的小诗。使忏悔者满怀义人之怒，在一段时间内提升其攻击速度 ",
                "ru": "Короткий гимн ночному небу. Наполняет Кающегося праведной яростью и на короткое время увеличивает скорость его атак. ",
                "ja": "夜空を讃える短い聖歌。高潔な\nる激怒が悔悟者を飲み込むこと\nで、攻撃速度が短い間上昇す\nる。",
                "pt-BR": "Breve hino ao céu noturno. Inunde o Penitente com a fúria da retidão, aumentando a velocidade de seus ataques por um tempo. ",
                "ko": "밤하늘에 바치는 짧은 구절의 찬송가. 참회자를 고결한 분노에 휩싸이게 하여 잠깐 동안 공격 속도를 올려 준다."
            },
            "lore": {
                "es": "Hay una niña con dos luceros\nQue cuando me mira a su vera me quedo\n\n\nDicen que es santa, que bajó del cielo\nNo llores niña que por el camino me pierdo\n\n\n¿Qué es lo que suena?\nLas campanas a lo lejos\n\n\n¿Qué es lo que llora?\nEn su carita dos luceros",
                "en": "There is a small girl with two star-like eyes\nWho, when she looks at me, makes me stay by her side\n\n\nThey say she's a saint, came down from the sky\nDo not cry, my child, or I'll get lost on the way\n\n\nWhat is it that tolls?\nThe bells in the distance\n\n\nWhat is it that cries?\nOn her face, eyes star-like.",
                "fr": "Il est une petite fille aux yeux comme des étoiles\nQui, d'un seul regard, m'enchaîne à elle\n \nC'est une sainte, dit-on, descendue des cieux\nNe pleure pas, chère enfant, au risque que je m'égare\n \nQu'est-ce qui sonne?\nLes cloches au loin\n \nQu'est-ce qui pleure?\nSur son visage, ses yeux comme des étoiles",
                "de": "Da ist ein Mädchen mit zwei sternengleichen Augen\nWenn Sie mich ansieht, will ich ihr nie mehr von der Seite weichen\n\n\nMan sagt, sie sei eine Heilige, gesandt vom Himmel\nWeine nicht, mein Kind, oder ich verirre mich auf dem Weg\n\n\nWas da klingt?\nDie Glocken in der Ferne\n\n\nWas da weint?\nSternengleiche Augen, auf ihrem Antlitz",
                "it": "C'è una fanciulla dagli occhi come stelle\nche, con uno sguardo, mi fa stare al suo fianco.\n\n\nDicono sia una santa, discesa dal cielo.\nNon piangere, figlia mia, o smarrirò la strada.\n\n\nCosa sono quei rintocchi?\nCampane distanti.\n\n\nChi piange queste lacrime?\nQuegli occhi, come stelle sul suo viso.",
                "zh": "眸子双明星\n相邀少歇停\n\n\n天间夸婉娩\n尘世逞娉婷\n\n\n何处鸣钟振\n阿谁悲涕零\n\n\n劝君莫堕泪\n使我前途冥",
                "ru": "Есть маленькая девочка с глазами подобными звездам.\nЯ не хочу прощаться с ней, покуда смотрит на меня.\n\n\nМолва твердит, она святая, сошедшая с небес.\nНе плачь, дитя, иначе сбиться мне с пути.\n\n\nЧто за звон?\nКолокола вдалеке.\n\n\nЧто за плач?\nГлаза, как звезды, на ее лице.",
                "ja": "少女の双眼は　まるで星のよう\nその目は私を　見つめ離さない\n\n\n彼女は天よりの聖人　贈り物\n泣くな、我が子よ　道に迷ってしまうから\n\n\n響き渡るは　何の音\nはるか遠くの　鐘の音\n\n\n流れ落ちるは　誰の涙\n彼女の涙　星の双眼",
                "pt-BR": "Há uma garotinha com dois olhos brilhantes\nQue, quando me olham, me atraem num instante.\n\n\nDizem que é uma santa, que veio do paraíso\nNão chore, criança, senão vou ficar perdido.\n\n\nO que está tocando?\nOs sinos distantes.\n\n\nO que está chorando?\nNo rosto dela, dois olhos brilhantes.",
                "ko": "별과 같은 두 눈을 지닌 소녀 있으니\n누구든 나처럼 그 소녀의 눈동자에서 벗어날 수 없음이라\n\n\n그 소녀는 천상에서 보내신 성인이요\n그러니 울지 마라 아이야, 그리하면 내가 길을 잃을지니\n\n\n저 울려 퍼지는 소리는 무엇인가?\n아득히 먼 곳에서 종소리 울리네\n\n\n저 눈물은 어디서 흐르는가?\n별처럼 빛나는 소녀의 눈에서 흐르네."
            }
        }
    ]
}
```


## Route

| METHOD |                     URL                     |                                                             DESCRIPTION |
|--------|:-------------------------------------------:|------------------------------------------------------------------------:|
| `GET`  |   https://bphm-api.vercel.app/api/prayers   | This route retrieves a list of all the Prayers of **Blasphemous** game. |
| `GET`  | https://bphm-api.vercel.app/api/prayers/:id |           This route retrieves one **Blasphemous** Prayer using its ID. |

## Parameters

This route supports the following parameters:

| Parameter     | default value |                                                             Example URL |                                                                                            DESCRIPTION |
|---------------|:-------------:|------------------------------------------------------------------------:|-------------------------------------------------------------------------------------------------------:|
| `language`    |     none      |            https://bphm-api.vercel.app/api/prayers?language=en&limit=10 | This parameter is used to filter by language all text fields (name, description, lore) in the response |
| `limit`       |      20       |                        https://bphm-api.vercel.app/api/prayers?limit=10 |                              This parameter is used to set the maximum amount of items in the response |
| `page`        |       0       |                  https://bphm-api.vercel.app/api/prayers?limit=2&page=3 |                                            This parameter is used to navigate between pages of results |
| `name`        |     none      |      https://bphm-api.vercel.app/api/prayers?language=es&name=següiriya |           This parameter is used to search for prayers by their names, language parameter is mandatory |
| `description` |     none      | https://bphm-api.vercel.app/api/prayers?language=es&description=vástago |     This parameter is used to search for prayers by their description, language parameter is mandatory |
| `lore`        |     none      |         https://bphm-api.vercel.app/api/prayers?language=en&lore=caress |            This parameter is used to search for prayers by their lore, language parameter is mandatory |

