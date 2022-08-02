---
id: meaCulpaHearts
title: Mea Culpa Hearts Route
sidebar_label: Mea Culpa Hearts
slug: /meaCulpaHearts
---

## Introduction

This route fetches a list of all the Hearts for Mea Culpa that can be encountered in the Blasphemous game, 
and outputs that in JSON format. The user can define language, his own pagination and also use search queries 
to find the desired output.

## Language

This route is multilingual and accepts parameter `language`. Check the language section to see the different languages available.

## Sample Result

https://bphm-api.vercel.app/api/meaCulpaHearts?limit=1

```javascript
{
    "success": true,
        "count": 1,
        "total": 11,
        "data": [
        {
            "id": "62e7fd13ef4a6a5cfb666643",
            "name": {
                "es": "Humeante Corazón de Incienso",
                "en": "Smoking Heart of Incense",
                "fr": "Cœur fumant d'encens",
                "de": "Weihrauchherz",
                "it": "Cuore fumante d'Incenso",
                "zh": "烟火香心",
                "ru": "Дымящееся сердце из фимиама",
                "ja": "煙る香炉の心臓",
                "pt-BR": "Coração Fumegante de Incenso",
                "ko": "향이 피어 오르는 심장"
            },
            "description": {
                "es": "Aumenta el daño y la duración de los rezos, pero a cambio aumenta su coste en una barra de fervor extra.",
                "en": "Enhances the power and duration of Prayers, but also increases their cost by one Fervour bar.",
                "fr": "Augmente la puissance et la durée des prières, mais augmente aussi leur coût d'une barre de ferveur.",
                "de": "Verstärkt die Kraft und Ausdauer von Gebeten, erhöht aber auch deren Kosten auf der Inbrunst-Leiste.",
                "it": "Aumenta la potenza e la durata delle preghiere, facendone crescere anche il costo di una barra del Fervore.",
                "zh": "提升祷文的持续时间与效力，但也会增加信仰的消耗",
                "ru": "Увеличивает силу и время действия молитв, но также увеличивает затраты рвения на их произнесение на одно деление.",
                "ja": "祈詞の威力と持続時間を強化す\nるが、発動に必要な熱情がバー\n１つ分増加する。",
                "pt-BR": "Aumenta o poder e a duração das Orações, mas também aumenta seu custo em uma barra de Fervor.",
                "ko": "기도문의 위력과 지속시간이 증가하는 대신 사용하는 열정이 한 칸 증가한다."
            },
            "lore": {
                "es": "Obras y Gracias del Milagro Doloroso. Versículo Primero.\n\n\nEl gran árbol seco en el que Su Santidad fue convertido por obra y gracia del Milagro ardió en una noche de fuertes tormentas. Ardió por noventa días y se consumió dejando una enorme montaña de ceniza que cubrió la torre deambulatorio mayor de la catedral dejando el trono girado de Su Santidad en lo alto. Todos los presentes, todos los que llegaron y trataron de subir a la cumbre fueron tragados por la ceniza. Y la catedral quedó en silencio.",
                "en": "The Works and Graces of the Sorrowful Miracle. First Verse.\n\n\nThe great dry tree into which His Holiness was transformed by work and grace of the Miracle burned in a night of heavy storms. It burned for ninety days, and as it was consumed, it left an enormous pile of ashes that covered the cathedral's main ambulatory tower, leaving His Holiness' Turned Throne on the top. All those who were present, and all those who arrived and tried to climb to the summit, were swallowed by the ashes. And the cathedral fell silent.",
                "fr": "Œuvres et Grâces du Funeste Miracle. Premier verset.\n\n\nLe grand arbre sec en lequel Sa Sainteté fut muée par l'intervention et la grâce du Miracle brûla lors d'une nuit de forts orages. Il brûla quatre-vingt-dix jours, et lorsqu'il fut consumé, il laissa un énorme tas de cendres qui couvrait la tour de l'ambulatoire principal de la cathédrale, laissant le Trône retourné de Sa Sainteté au sommet. Tous ceux qui étaient présents, et tous ceux qui arrivèrent et voulurent grimper au sommet, furent happés par les cendres. Et le silence s'abattit sur la cathédrale.",
                "de": "Die Werke und die Gnade des Leidvollen Mirakels. Erster Vers.\n\n\nDer große trockene Baum, in den Seine Heiligkeit durch die Gnade des Mirakels verwandelt wurde, verbrannte in der Nacht eines schweren Sturms. Er brannte neunzig Tage lang und hinterließ einen gewaltigen Haufen aus Asche, der den Hauptturm der Kathedrale bedeckte, an der Spitze der Abgewandte Thron Seiner Heiligkeit. Alle, die versuchten, die Spitze zu erklimmen, wurden von der Asche verschlungen. Und über die Kathedrale legte sich Schweigen.",
                "it": "Le opere e le grazie del Miracolo doloroso - Primo versetto\n\n\nIl grande albero secco in cui è stato trasformato Sua Santità per opera e grazia del Miracolo arse in una notte tempestosa. Arse per novanta giorni e si consumò generando una montagna di cenere che coprì interamente la torre deambulatorio principale della cattedrale, lasciando sulla propria cima solo il Trono voltato di Sua Santità. Tutti i presenti e gli ultimi arrivati che tentarono di arrampicarsi sulla cima furono inghiottiti dalla cenere. E la cattedrale fu avvolta dal silenzio.",
                "zh": "悲恸奇迹恩典集·第一\n\n\n一天夜里狂风大作，枯树燃起烈火，而这棵枯树是圣王变成的，这都是奇迹赐下的神恩。枯树燃烧了九十天，当它烧尽时，留下了堆积如山的灰烬，盖满了大教堂的主塔，只有圣王的翻转王座留在上面。任何在场之人以及想要攀爬上去的人都被灰烬吞没，整座教堂陷入了死寂当中",
                "ru": "Труды и милости Прескорбного Чуда. Стих первый.\n\n\nВеликое сухое древо, в которое превратился Его Святейшество трудами и милостью Чуда, сгорело в ночь сильных бурь. Оно горело девяносто дней, и когда догорело, осталась огромная куча пепла, которая покрыла башню главной галереи кафедрального собора, оставив на вершине Преображенный Престол Его Святейшества. И все, кто были там, и все, кто пришел и попытался забраться на вершину, были поглощены пеплом. И стало в кафедральном соборе тихо.",
                "ja": "『悲嘆なる奇蹟の御業と恩寵　第一節』\n\n\n奇蹟の御業と恩寵によって、聖下の体は乾いた\n大樹になり果てた。荒れ狂う嵐の夜に燃え始め\nたその樹は、九十日間にわたって燃え続けた。\n大樹はその間、大量の灰となって大聖堂に降り\n注ぎ、大聖堂の主塔内部の回廊を埋め尽くし\nた。唯一、聖下の反転の玉座だけが灰に埋もれ\nず、灰山の頂上に君臨していた。その場にいた\n者、また大聖堂を訪れ玉座を目指した者はすべ\nて、灰に飲み込まれてしまったという。こうし\nて大聖堂は、静寂によって包まれた。",
                "pt-BR": "As Obras e Graças do Milagre Doloroso. Primeiro Versículo.\n\n\nA grande árvore seca em que Sua Santidade foi convertida por obra e graça do Milagre queimou em uma noite de forte tempestade. Queimou por noventa dias e, enquanto era consumida pelas chamas, deixou uma enorme montanha de cinzas que cobriu a principal torre deambulatória da catedral, deixando o Trono Virado de Sua Santidade no topo. Todos os presentes, todos que chegaram e tentaram subir ao cume, foram engolidos pelas cinzas. E a catedral ficou em silêncio.",
                "ko": "비탄의 기적이 만든 작품과 은혜 1절\n\n\n폭풍우가 몰아치던 날 밤, 교황 성하께서 기적의 은총을 받아 변한 위대한 고목은 불타버리고 말았다. 그 불은 90일 동안 타올랐고, 이윽고 성하께서 뒤돌아 앉은 옥좌와 함께 대성당의 보행탑을 뒤덮은 재만이 남게 되었다. 참석했던 자들과 옥좌 위로 올라가려던 자들 모두 잿더미 안으로 빨려 들어가고 말았다. 그렇게 대성당에는 침묵만이 남았다."
            }
        }
    ]
}
```


## Route

| METHOD |                        URL                         |                                                                          DESCRIPTION |
|--------|:--------------------------------------------------:|-------------------------------------------------------------------------------------:|
| `GET`  |   https://bphm-api.vercel.app/api/meaCulpaHearts   | This route retrieves a list of all the Hearts for Mea Culpa of **Blasphemous** game. |
| `GET`  | https://bphm-api.vercel.app/api/meaCulpaHearts/:id |           This route retrieves one **Blasphemous** Heart for Mea Culpa using its ID. |

## Parameters

This route supports the following parameters:

| Parameter     | default value |                                                                        Example URL |                                                                                                      DESCRIPTION |
|---------------|:-------------:|-----------------------------------------------------------------------------------:|-----------------------------------------------------------------------------------------------------------------:|
| `language`    |     none      |                https://bphm-api.vercel.app/api/meaCulpaHearts?language=en&limit=10 |           This parameter is used to filter by language all text fields (name, description, lore) in the response |
| `limit`       |      20       |                            https://bphm-api.vercel.app/api/meaCulpaHearts?limit=10 |                                        This parameter is used to set the maximum amount of items in the response |
| `page`        |       0       |                      https://bphm-api.vercel.app/api/meaCulpaHearts?limit=2&page=3 |                                                      This parameter is used to navigate between pages of results |
| `name`        |     none      |            https://bphm-api.vercel.app/api/meaCulpaHearts?language=en&name=corazon |        This parameter is used to search for Hearts for Mea Culpa by their names, language parameter is mandatory |
| `description` |     none      |        https://bphm-api.vercel.app/api/meaCulpaHearts?language=en&description=daño | This parameter is used to search for Hearts for Mea Culpa by their descriptions, language parameter is mandatory |
| `lore`        |     none      | https://bphm-api.vercel.app/api/meaCulpaHearts?language=en&lore=milagro%20doloroso |         This parameter is used to search for Hearts for Mea Culpa by their lore, language parameter is mandatory |
