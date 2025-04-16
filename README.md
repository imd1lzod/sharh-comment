# Comment & Review qoldirish platformasi -> API

## Loyihaning maqsadi
    Foydalanuvchilar biznes turini qidirishi, sortlashi, reviewlarni ko'rishi va comment qoldira olishi kerak, Biznes egalari esa o'z profiliga ega bo'lib sharhlarga javob yoza olishi, va reviewlaarni statistikalarini kora olishi kerak.

## Funksional talablar:
    1. Foydalanuvchilar
        - Register qila olishi
        - Login qila olishi
        - Profilni yangilay olishi
        - Profilga rasm yuklay olishi 
        - Izoh yoza olishi (bunda login qilgan bolishi shart)
        - Izohlarni kora olishi
        - Izohni tahrirlay olishi 
        - Izohni ochira olishi
        - Qoldirgan izohlarini hammasini ko'ra olishi

    2. Biznes egalari
        - Login, register qila olishi kerak
        - Profilini yangilay olishi
        - Tashkilotiga yozilgan sharhlari kora olishi, ularga javob yoza olishi 
        - Statisikani bahosiga qarab sortlay olishi

## Nofunksional talablar:
    - Loyiha tez ishlashi 
    - Loyiha xafvsizligi maksimal darajada himoyalanganligi
    - Loyiha keyinchalik kengaya olishi kerak

## Database modellari

    1. Users
        - name
        - email
        - password
        - image

    2. Business model
        - name
        - description
        - category
        - address
        - website
        - rating 
        - totalreviews

    3. Review
        - rating
        - comment    