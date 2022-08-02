---
id: start
title: Getting Started
sidebar_label: Getting Started
slug: /
---

The Blasphemous API is a cool open source API that provides information about the greatest game franchise out there: The Legend of Blasphemous. In this section you will be guided with basics steps on how to properly use this API. This API is open, so it doesn't require an API key to use it. Also, please give us a star on our [official github repository](http://www.github.com/deliton/zelda-api) and feel free to post issues there.

# GraphQL Support

I'm proud to announce a new version of this API! Check the [blog notes](/blog) to see what's new.

GraphQL is an open-source data query and manipulation language created by Facebook in 2015. It provides a more efficient and scalable way to access and update data compared to traditional REST API endpoints.

GraphQL allows clients to specify the exact data they need from servers, reducing the number of requests and bandwidth needed. Servers can also batch multiple queries into a single request, improving performance. You can get started by visiting https://bphm-api.vercel.app/api/graphql and play around with the data.
## Example REQUEST (REST)

Since this API doesn't require you to provide an API key, it's extremely easy to use. Feel free to explore our documentation and test routes! Let's retrieve a list of all released games with the following route:

- METHOD: **GET**
- URL: https://bphm-api.vercel.app/api/meaCulpaHearts?limit=2

- RESULT

```javascript
{
    "success": true,
        "count": 2,
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
        },
        {
            "id": "62e7fd13ef4a6a5cfb666644",
            "name": {
                "es": "Corazón del Buen Dolor",
                "en": "Heart of the Virtuous Pain",
                "fr": "Cœur de la Vertueuse douleur",
                "de": "Herz des Tugendsamen Schmerzes",
                "it": "Cuore del Dolore virtuoso",
                "zh": "痛德之心",
                "ru": "Сердце добродетельной боли",
                "ja": "高潔なる痛みの心臓",
                "pt-BR": "Coração da Dor Virtuosa",
                "ko": "고결한 고통의 심장"
            },
            "description": {
                "es": "Núcleo de espada, bendito con plegarias defensivas. Puede insertarse en Mea Culpa. Potencia la maniobra de parada, aumentando su duración, a cambio de exponer a Penitente durante más tiempo frente a los ataques de los enemigos.",
                "en": "Sword core, blessed with defensive prayers. Can be inserted into Mea Culpa. Boosts the blocking stance, increasing its duration, but exposes The Penitent One longer to enemy attacks.",
                "fr": "Le cœur d'une épée, béni de prières défensives. Peut s'enchâsser dans Mea Culpa. Renforce la parade et augmente sa durée.",
                "de": "Schwertkern, gesegnet durch Schutzgebete. Kann in Mea Culpa eingefügt werden. Verstärkt die Blockade und erhöht ihre Dauer.",
                "it": "Il nucleo di una spada, benedetto da preghiere protettrici. Si può inserire nel Mea Culpa. Potenzia la parata, aumentandone la durata.",
                "zh": "有防御祷文赐福的剑芯。可以插入孽刃之中。强化防御姿态，提升持续时间",
                "ru": "Сердцевина меча, освященная защитными молитвами. Можно вставить в Mea Culpa. Увеличивает время поддержания блока, однако на большее время оставляет Кающегося уязвимым перед вражескими атаками.",
                "ja": "加護の祈りによる祝福を受けた\n剣の核。懺悔の剣にはめ込むこ\nとができる。防御を補佐し、パ\nリィの持続時間を強化する。し\nかし、敵の攻撃に対して無防備\nな状態がより長くなってしま\nう。",
                "pt-BR": "Núcleo de espada, benzido com preces defensivas. Pode ser inserido na Mea Culpa. Fortalece a postura defensiva, aumentando sua duração, mas expõe o Penitente por mais tempo aos ataques dos inimigos.",
                "ko": "수호의 기도문으로 축복을 받은 검의 중심부 장식. 메아 쿨파에 장착할 수 있다. 튕겨내기 자세를 강화하여 지속 시간이 늘어나지만, 참회자가 적의 공격에 노출되는 시간 역시 늘어난다."
            },
            "lore": {
                "es": "Obras y Gracias del Milagro Doloroso. Versículo Segundo.\n\n\nEl viento entraba fuerte por las roturas de la catedral que el Gran Árbol había originado levantando la ceniza que creaba densas nubes grises, ocultando a toda La Madre Iglesia y sumiéndola en una profunda oscuridad de plomo. La tierra cercana empezó a temblar. Entonces se oyó un terrible grito proveniente de la profundidad de la montaña de ceniza. A ese grito se le sumaron más y más. Gritos guturales, rugidos animales, monstruosos, y uno que se oyó por encima de todo: el grito de un anciano, que retumbó grave, como salido de la garganta de un gigante.",
                "en": "The Works and Graces of the Sorrowful Miracle. Second Verse.\n\n\nThe wind blew strongly through the fractures of the cathedral that the Great Tree had originated, lifting the ash creating dense gray clouds, hiding the whole Mother Church and drowning her in a deep darkness of lead. The ground began to tremble. Then a terrible cry was heard from the depths of the mountain of ash. And that cry was joined by more and more. Guttural screams, animal roars, monsters, and one which was heard above all: the scream of an old man, which resounded gravely, as out of the throat of a giant. ",
                "fr": "Œuvres et Grâces du Funeste Miracle. Premier verset.\n\n\nLe vent s'engouffrait dans les fissures de la cathédrale que le Grand Arbre avait engendrée, soulevant les cendres en grands nuages gris et denses. Toute la Mère Église en était cachée, noyée dans une profonde obscurité de plomb. Le sol se mit à trembler. Puis l'on entendit un grand cri dans les profondeurs de la montagne de cendres. Et ce cri trouva un écho, puis un deuxième. Des cris gutturaux, des rugissements animaux, des monstres, et un autre que l'on entendit par-dessus tous les autres : le cri d'un vieil homme, qui résonna gravement, comme émis par la gorge d'un géant.\n",
                "de": "Die Werke und die Gnade des Leidvollen Mirakels. Zweiter Vers.\n\n\nDer Wind heulte durch die Risse der Kathedrale, die der Große Baum erzeugt hatte. Er wirbelte die Asche zu dichten grauen Wolken auf, die die gesamte Mutterkirche in bleierne Dunkelheit hüllten. Die Erde begann zu beben. Dann drang aus den Tiefen des Ascheberges ein gellender Schrei. Und zu diesem einen Schrei gesellten sich weitere. Gutturale Schreie, animalisches Brüllen, monströses Kreischen und ein Schrei, der alle anderen übertönte: Der Schrei eines alten Mannes, der klang, als käme er aus dem Schlund eines Riesen.\n",
                "it": "Le opere e le grazie del Miracolo doloroso - Secondo versetto\n\n\nIl vento soffiava forte attraverso le fessure della cattedrale causate dal Grande Albero, sollevando la cenere che creava dense nuvole grigie, facendo sprofondare l'intera Santa Madre Chiesa in un nascondiglio fatto di cupa oscurità plumbea. Il terreno cominciò a tremare. Poi, dalle profondità della montagna di cenere, si levò un terribile grido. E a quel grido ne seguirono molti altri. Urla gutturali, ruggiti di animale, versi mostruosi e un altro che si ergeva sopra tutti gli altri: le urla di un vecchio uomo che risuonavano gravemente, come emesse dalla gola di un gigante.\n",
                "zh": "『悲恸奇迹恩典集·第二』\n\n\n「大风猛烈地吹过圣树所在的大教堂的裂缝，扬起的灰烬形成了浓密的灰云，把整个神母教堂都笼罩在铅灰色的黑暗中。地面开始颤抖。这时，从灰山深处传来一声可怕的喊叫。越来越多的人加入了这一呼声。喉咙里的尖叫声，动物的吼声，怪物的叫声，尤其是老人的尖叫声，那声音沉重地回响着，像从巨人的喉咙里发出来的一样」\n",
                "ru": "Труды и милости Прискорбного чуда. Стих второй.\n\n\nЧерез трещины в стенах, которые пробили корни Великого Древа, задувал ветер. Он поднял пепел, который взмыл плотным серым облаком, покрыл Мать матерей целиком – и погрузилась она в свинцовую тьму. Земля задрожала. И из глубин пепельной горы раздался ужасный крик. А потом еще один, и еще, и еще. Гортанные вопли, звериный рык, чудовищный завывания, но страшнее всех был один голос: голос старика, который звучал так громко, словно его издавала глотка великана.\n",
                "ja": "『悲嘆なる奇蹟の御業と恩寵　第二節』\n\n\n大樹の根本にある大聖堂の裂け目を、強い風が\n吹き抜け続ける。風は灰を空へと吹き上げ、灰\n色の濃い雲を作り出す。その雲は教区大聖堂を\n丸ごと覆い隠し、暗闇の中に大聖堂を包み込ん\nだ。すると、地面が突然震え始めた。その振動\nに共鳴するかのように、灰の山の奥深くから、\n恐ろしい叫び声が聞こえ始める。その声に呼応\nし、段々と様々な声が聞こえだしてきた。ガラ\nガラの悲鳴、動物が唸るような声、怪物のよう\nな声。その中でも一つだけ、とりわけ目立つ声\nがあった。それは老人の、巨人の喉から絞り出\nされるような、厳かな叫び声だった。",
                "pt-BR": "As Obras e Graças do Milagre Doloroso. Segundo Versículo.\n\n\nO vento soprou forte por entre as rachaduras feitas pela Grande Árvore na catedral, levantou o pó e criou nuvens cinzentas e densas, escondendo toda a Igreja Matriz e a afogando em uma profunda escuridão plúmbea. O chão começou a tremer. Então, um lamento terrível foi ouvido das profundezas da montanha de pó. E a esse lamento, muitos outros se juntaram. Gritos guturais, rugidos de animais, monstros e um que foi ouvido mais do que todos: o grito de um velho, que ressoava um som grave, como se tivesse saído da garganta de um gigante.",
                "ko": "비탄의 기적이 만든 작품과 은혜 2절\n\n\n위대한 고목이 있었던 자리를 따라 강한 바람이 잿가루를 들어올리며 짙은 회색 구름과 함께 성모 교단의 대성당을 잿빛 심연 속으로 감추었다. 땅이 울리기 시작하며, 동시에 재의 산에서 무시무시한 울음소리가 들려왔다. 그 울음소리 속에서 점점 더 다양한 목소리가 들려왔다. 목구멍 너머에서 울리는 듯한 소리와 짐승이 울부짖는 소리, 괴물과도 같은 소리가. 하지만 그중에서도 가장 크게 들렸던 것은 거인의 목구멍에서 울려 퍼지는 것처럼 무겁게 가라앉은 어느 노인의 목소리였다.\n"
            }
        }
    ]
}
```

## Example REQUEST (GRAPHQL)

Let's retrieve a collectible called "Parietal", I want this API to return its `name`, `description` and `lore`. So let's make a POST request with the following GraphQL body:

```json
query {
	"workInProgress"
}
```

Then the GraphQL API will return:

- RESULT

```javascript
{
	"data": {
		"workInProgress"
	}
}
```

Pretty easy, huh? Go to https://bphm-api.vercel.app/api/graphql and use the data for your project as you like

## Fair Use Policy

Blasphemous API is free and open to use. Because of this, we humbly ask developers to use it fairly and not spam it. This is an educational service so please do not harm others.

## Issues

The data available on this API was scraped from other Blasphemous fansites and wikis. If you find some issue or incorrect data, feel free to open an issue [on this link](https://github.com/davidhuertas/blasphemous-api/issues/new)


---
