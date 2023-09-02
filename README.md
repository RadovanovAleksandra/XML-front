# XML-front
pokretanje:
potreban je docker program
kada se docker pokrene, onda se u folderu resouces otvori terminal u kom se pokrecu jedna po jedna komanda:

 docker build -t accommodation-service .
 docker build -t user-service .
 docker build -t reservation-service .
 docker build -t discovery-server .
 docker build -t api-gateway .

 nakon cega bi trebalo da se u dockeru pojave kontejneri i slike
 kada se u dockeru pojave slike i kontejneri u istom terminalu treba da se pokrene sledeca komanda: docker compose up
 nakon toga u folderu frontend treba da e pokrene komanda: npm install 
 ukoliko se ne izvrsava kako treba pokrenuti: npm install --force
 nako sto se izvrsila prethodna komanda, program se pokrece sledecom komandom: npm run dev
 stranica se otvara sa ctrl+levi klik
