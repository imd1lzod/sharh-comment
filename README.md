# Comment & Review qoldirish platformasi -> API

## Loyihaning maqsadi
    Foydalanuvchilar o'zi xohlagan biznes turini qidirishi, oldinga xaridorlarning fikrlarni ko'rib to'g'ri qaror qabul qilishga yordam berish
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
        - role
        - phoneNumber
        - createdAt

    2. Business
        - name
        - description
        - address
        - location
        - website
        - imagesUrl
        - categoryId
        - ownerId

    3. Review
        - rating
        - comment    
        - userId
        - businessId
        - createdAt
        - updatedAt

    4. Category
        - name
        - description