# React och redux tutorial presis

### Förutsättningar 
Är att du har node installera på din dator.
Om du inte har node installera kan du ladda ner det på den här länken (https://nodejs.org/en/) 

### Kom igång

```
npm install
npm start
öppna http://localhost:3000 i din webläsare
```


### Att göra 

## Rendera ut listan med vänner
1. Skriv en funktion i FrendListingPage komponent som mappar state i store till en property
2. Skicka in funktionen till som första argument till connect funktionen.
3. Skickar property ner till FriendList och sedan ner till FriendListItem.
4. Om du har gjort rätt borde användarna renderas ut till vyn. 

## Lägg till en vän
1. Lägg till en konstant i actionTypes med en beskriving av din action.
2. Lägg till en funktion i actionCreators för att skapa upp din action.
3. Lägg till ett case i switch i friends reduceren för att uppdatera din store. 
4. Skriv en funktion i komponenten "FrendListingPage" som mappar din "lägg till" action till en property
5. Skicka in funktionen till som andra argument till connect funktionen.
6. Skicka property med actionen ner till komponenten "AddFriendInput" 
7. Bind ett event på "onKeyDown" i komponenten "AddFriendInput" och lägg till en event hanterare för eventet.
8. Dispatch din "lägg till" action genom att anropa den när användaren tycker enter. 
9. Använd setState i din event hantera för att tömma text fältet. 
9. Öppna webläsaren och skriv in ett namn och tyck enter.
10. Om du gjort rätt borde användare läggas till i listan.

## Ta bort vän
1. Lägg till en konstant i actionTypes med en beskriving av din action.
2. Lägg till en funktion i actionCreators för att skapa upp din action.
3. Lägg till ett case i switch i friends reduceren för att uppdatera din store.
4. Lägg till en ny mapping i funktionen som mappar dina actions till properties
5. Skicka property med actionen ner till komponenten "FriendListItem" 
6. Bind ett "onClick" event på ta bort knappen och lägg till en event hanterare för eventet.
7. Dispatch din "ta bort" action när användaren klickar på ta bort knappen.
8. Om du gjort rätt borde användaren försvinna från listan. 


### Tips
http://redux.js.org/docs/introduction/ThreePrinciples.html
http://redux.js.org/docs/basics/index.html


