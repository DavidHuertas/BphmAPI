---
id: languages
title: Languages Route
sidebar_label: Languages
slug: /languages
---

## Introduction

This route fetches a list of all languages available for text . 

## Sample Result

https://bphm-api.vercel.app/api/languages

```javascript
{
    "success": true,
        "count": 9,
        "data": [
        {
            "language": "Español",
            "code": "es"
        },
        {
            "language": "English",
            "code": "en"
        },
        {
            "language": "Français",
            "code": "fr"
        },
        {
            "language": "Deutsch",
            "code": "de"
        },
        {
            "language": "Italiano",
            "code": "it"
        },
        {
            "language": "中国人",
            "code": "zh"
        },
        {
            "language": "Русский",
            "code": "ru"
        },
        {
            "language": "日本",
            "code": "ja"
        },
        {
            "language": "Português (Brasil)",
            "code": "pt-BR"
        },
        {
            "language": "한국어",
            "code": "ko"
        }
    ]
}
```


## Route

| METHOD        |                          URL                           |                                                                  DESCRIPTION |
| ------------- |:------------------------------------------------------:|-----------------------------------------------------------------------------:|
| `GET`         |        https://bphm-api.vercel.app/api/languages         | This route retrieves a list of languages available in **Blasphemous API** . |
## Parameters

This route supports no parameters.