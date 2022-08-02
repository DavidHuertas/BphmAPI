---
id: relics
title: Relics Route
sidebar_label: Relics
slug: /relics
---

## Introduction

This route fetches a list of all the Relics that can be encountered in the Blasphemous game, 
and outputs that in JSON format. The user can define language, his own pagination and also use search queries 
to find the desired output.

## Language

This route is multilingual and accepts parameter `language`. Check the language section to see the different languages available.

## Sample Result

https://bphm-api.vercel.app/api/relics?limit=1

```javascript
{
    "success": true,
        "count": 1,
        "total": 7,
        "data": [
        {
            "id": "62e7fd13ef4a6a5cfb6666ad",
            "name": {
                "es": "Sangre Perpetuada en Arena",
                "en": "Blood Perpetuated in Sand",
                "fr": "Sang perpétué dans le sable",
                "de": "Auf ewig in Sand konserviertes Blut",
                "it": "Sangue perpetuato nella Sabbia",
                "zh": "恒沙血",
                "ru": "Кровь, увековеченная в песке",
                "ja": "永遠の砂血",
                "pt-BR": "Sangue Perpetuado na Areia",
                "ko": "모래에 스며든 피"
            },
            "description": {
                "es": "Sangre conservada con maravillosas propiedades. Al paso de quien la lleva se revelan apoyos antes invisibles a sus ojos.\nEl Milagro es en verdad insondable, y nadie conoce el origen de la sangre que se arremolina a los pies del portador. ",
                "en": "Preserved blood with miraculous properties. With the passage of its bearer, new ledges are revealed, formerly invisible to the beholder's eyes.\nThe Miracle is truly unfathomable, and no one knows the origin of the blood that swirls around the wearer's feet.",
                "fr": "Du sang préservé aux propriétés miraculeuses. Avec le trépas de son porteur, de nouvelles corniches sont révélées, auparavant invisibles.\nLe Miracle est véritablement indicible, et nul ne connaît l'origine du sang qui bouillonne autour des pieds de son porteur.",
                "de": "Konserviertes Blut mit wundersamen Eigenschaften. Für den Träger werden neue Vorsprünge sichtbar, die dem Auge zuvor verborgen blieben.\nDas Mirakel ist wahrhaft unergründlich, und niemand kennt den Ursprung des Blutes, das um die Füße des Trägers strudelt.",
                "it": "Sangue conservato dalle proprietà miracolose. Tenendolo con sé, rivelerà al suo portatore sporgenze prima invisibili.\nIl Miracolo è davvero imperscrutabile e nessuno conosce l'origine del sangue che avvolge i piedi del portatore.",
                "zh": "这些被封存的血液颇为神奇，随着持有者走的路越来越多，血液会出现新的分层，而在此之前无人可以看见。\n奇迹可谓高深莫测，持有者脚下会出现血液漩涡，谁也不知道这些血出自何处。",
                "ru": "Сохраненная кровь с чудесными свойствами. Ее владелец при ходьбе видит новые пути, ранее скрытые от его взора.\nЧудо поистине необъяснимо, и никому неведомо происхождение этой крови, которая водоворотом крутится вокруг ног обладателя.",
                "ja": "奇蹟的な力を秘めた血。この聖\n遺物を手にした者は不可視の足\n場が視認できるようになり、足\n場が実体をもってその姿を現\nす。\n奇蹟とは深遠なるものにして、\n人間が理解できるものではな\nい。持ち主の足の周りを渦巻く\nこの血に関しても、その起源を\n知る者はいない。",
                "pt-BR": "Sangue preservado com propriedades milagrosas. Com a passagem do portador, novas plataformas antes invisíveis aos olhos se revelam.\nO Milagre é mesmo incomensurável, e ninguém sabe a origem do sangue que gira ao redor dos pés do usuário.",
                "ko": "기적의 성질을 지닌 채 스며든 피. 소유자에게 이전에는 보이지 않았던 새로운 다리를 보여준다.\n기적은 말 그대로 헤아릴 수 없는 존재이다. 소유자의 발 주변을 맴돌며 휘몰아치는 피가 어디서 온 것인지는 아무도 모른다."
            },
            "lore": {
                "es": "\"Toma esta bolsa y llénala de arena. Ahora impregna la sangre que está derramándoseme por estas terribles heridas en ella y así se teñirá granate. Con ella podrás indicar el camino por estas secas tierras a los que vienen detrás. Ahora déjame solo, quiero rezar mis oraciones porque pronto me entregaré a la savia seca de las raíces que abrazan con dolor a nuestro Padre...\"",
                "en": "\"Take this bag and fill it with sand. Now imbue it with the blood spilling from these dreadful wounds, so it will turn crimson red. With it you will show the way through these dry lands to those who are yet to follow. Leave me, now. I want to say my prayers, for I will soon be joining the dry sap of these roots that painfully embrace Our Father...\"",
                "fr": "«Prenez cette bourse, et emplissez-la de sable. Puis recueillez-y le sang de ces terribles blessures, afin qu'il teinte les grains d'écarlate. Ainsi, vous trouverez dans ces terres arides le chemin que vous devez suivre. Laissez-moi, céans. J'aimerais dire mes prières, car bientôt, je rejoindrai la sève sèche de ces arbres qui étreignent douloureusement notre Père...»",
                "de": "„Nehmt diesen Beutel und füllt ihn mit Sand. Durchfeuchtet ihn mit dem Blut, das aus diesen schrecklichen Wunden strömt, und er wird sich rot färben. Mit ihm könnt Ihr jenen den Weg durch dieses verdorrte Land weisen, die noch kommen werden. Verlasst mich nun. Ich will meine Gebete sprechen, bevor ich mich mit dem trockenen Saft verbinde, dessen Wurzeln unseren Vater schmerzhaft umarmen ...“",
                "it": "\"Prendi questa bisaccia e riempila di sabbia. Ora impregnala del sangue che sgorga da queste terribili ferite finché non si tinge di rosso cremisi. Se la porti con te, potrai mostrare la via attraverso queste lande desolate a chi verrà dopo di te. Ora vattene. Desidero pregare, perché presto mi unirò alla linfa secca di queste radici che abbracciano con dolore il Padre Nostro...\"",
                "zh": "「将此包注满沙土，再将伤口溢出的鲜血注入其中，如此一来便会赤红如血。有了此物，尔等便可以向信众示明道路，走出这干涸之地。尔等速速远离，我要念诵祷文，圣父眠于此地，而我将化作沙土，拥抱圣父…」",
                "ru": "«Возьми эту суму и наполни ее песком. Пропитай его кровью, что течет из ужасных ран сих, дабы побагровел он. И узришь ты путь через сухие земли сии к тем путям, что еще ждут тебя. А теперь оставь меня. Я хочу произнести свои молитвы, ибо скоро стану я, как сухой сок тех корней, что болезненно объяли Отца нашего».",
                "ja": "「この袋を手に取り、砂で満たしなさい。そこ\nに、この恐ろしい傷から流れる血を注ぎ、砂を\n深紅に染めなさい。この乾き切った大地を進む\nための道筋を、導きを求める者たちに示しなさ\nい。さあ、ここから去るのです。私は祈りを捧\nげなくてはなりません。私はもうすぐ、父なる\n神を痛ましく抱擁する、根の樹液の一部となる\nのですから……」",
                "pt-BR": "\"Pegue este saco e encha-o de areia. Agora banhe-o com o sangue que jorra dessas feridas horríveis, para que fique com um tom carmesim. Com isso, você mostrará o caminho por estas terras áridas àqueles que ainda o seguirão. Agora, me deixe. Quero fazer minha prece, pois logo estarei junto da seiva seca dessas raízes, que abraçam dolorosamente nosso Pai...\"",
                "ko": "이 가방을 가져가 모래로 가득 채우라. 이제 끔찍한 상처에서 흐르는 이 피를 모래에 스며들게 하라, 그러면 그 모래가 붉게 변할지니. 이 모래가 아직 따라오지 못한 이들에게 이 메마른 대지를 지나갈 길을 보여줄 것이니라. 그만 떠나거라. 우리 신을 감싸는 이 뿌리 속 마른 수액과 하나되기 전에 마지막 기도를 올리고 싶으니 말이다..."
            }
        }
    ]
}
```

## Route

| METHOD |                    URL                     |                                                            DESCRIPTION |
|--------|:------------------------------------------:|-----------------------------------------------------------------------:|
| `GET`  |   https://bphm-api.vercel.app/api/relics   | This route retrieves a list of all the Relics of **Blasphemous** game. |
| `GET`  | https://bphm-api.vercel.app/api/relics/:id |      This route retrieves one **Blasphemous** Quest Item using its ID. |

## Parameters

This route supports the following parameters:

| Parameter     | default value |                                                               Example URL |                                                                                            DESCRIPTION |
|---------------|:-------------:|--------------------------------------------------------------------------:|-------------------------------------------------------------------------------------------------------:|
| `language`    |     none      |               https://bphm-api.vercel.app/api/relics?language=en&limit=10 | This parameter is used to filter by language all text fields (name, description, lore) in the response |
| `limit`       |      20       |                           https://bphm-api.vercel.app/api/relics?limit=10 |                              This parameter is used to set the maximum amount of items in the response |
| `page`        |       0       |                     https://bphm-api.vercel.app/api/relics?limit=2&page=3 |                                            This parameter is used to navigate between pages of results |
| `name`        |     none      |             https://bphm-api.vercel.app/api/relics?language=en&name=blood |            This parameter is used to search for Relics by their names, language parameter is mandatory |
| `description` |     none      | https://bphm-api.vercel.app/api/relics?language=en&description=miraculous |      This parameter is used to search for Relics by their description, language parameter is mandatory |
| `lore`        |     none      |      https://bphm-api.vercel.app/api/relics?language=en&lore=our%20father |             This parameter is used to search for Relics by their lore, language parameter is mandatory |

